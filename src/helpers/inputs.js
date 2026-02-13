////////////////////////////////////////////////////////////////

// Autorellenar a la fecha de hoy
function setTodayAsDefaultDate() {
  if (!Fecha) return;
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  Fecha.value = local.toISOString().split("T")[0];
}
function ymdToDmy(ymd) {
  // "2026-02-03" -> "03/02/2026"
  const [y, m, d] = ymd.split("-");
  return `${d}/${m}/${y}`;
}

backendUrlLabel.textContent = ENDPOINT;
let lastPdfObjectUrl = null;

// actualizar estado de la UI
function setBusy(isBusy) {
  spinner.hidden = !isBusy;
  btnGenerate.disabled = isBusy;
  excelFile.disabled = isBusy;
  btnOpen.disabled = isBusy || !lastPdfObjectUrl;
}

// enviar mensajes al usuario
function setMessage(text, type = "info") {
  msg.textContent = text;
  msg.classList.remove("ok", "err");
  if (type === "ok") msg.classList.add("ok");
  if (type === "err") msg.classList.add("err");
}

function logDebug(obj) {
  const time = new Date().toISOString();
  debugLog.textContent += `[${time}] ${typeof obj === "string" ? obj : JSON.stringify(obj, null, 2)}\n`;
}

// Convertir a número finito o null
const toFiniteNumber = (s) => {
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
};

// Construir JSON con overrides para el backend
function buildOverridesJson() {
  // Solo metemos valores si el usuario los llena.
  const overrides = {};

  // Ejemplo: datos del informe
  const datosInforme = {};
  if (cliente.value.trim()) datosInforme["cliente"] = cliente.value.trim();
  if (RUC_DNI.value.trim()) datosInforme["RUC_DNI"] = RUC_DNI.value.trim();
  if (Proyecto.value.trim()) datosInforme["Proyecto"] = Proyecto.value.trim();
  if (Fecha.value.trim()) datosInforme["Fecha"] = ymdToDmy(Fecha.value.trim());
  if (Lugar.value.trim()) datosInforme["Lugar"] = Lugar.value.trim();
  if (atencion.value.trim()) datosInforme["Atencion"] = atencion.value.trim();
  if (BCP_soles.value.trim()) datosInforme["BCP_soles"] = BCP_soles.value.trim();
  if (CCI_soles.value.trim()) datosInforme["CCI_soles"] = CCI_soles.value.trim();
  if (BCP_dolares.value.trim()) datosInforme["BCP_dolares"] = BCP_dolares.value.trim();
  if (CCI_dolares.value.trim()) datosInforme["CCI_dolares"] = CCI_dolares.value.trim();
  if (CTA_detraccion.value.trim()) datosInforme["CTA_detraccion"] = CTA_detraccion.value.trim();


  if (Object.keys(datosInforme).length > 0) {
    // Ajusta el nombre del bloque según tu configs.py (por ejemplo "datos_informe")
    overrides["datos_informe"] = datosInforme;
  }

  // Ejemplo: parámetros financieros
  const fin = {};
  const tc = toFiniteNumber(tasaCambio.value.trim());
  const mk = toFiniteNumber(markup.value.trim());
  const intr = toFiniteNumber(interes.value.trim());

  // Convertimos a Number si hay valor
  if (tc !== null) fin["tasa_cambio"] = tc;
  if (mk !== null) fin["Markup"] = mk;
  if (intr !== null) fin["Interes"] = intr;

  if (Object.keys(fin).length > 0) {
    // Ajusta el nombre del bloque según tu configs.py (por ejemplo "parametros_financieros")
    overrides["parametros_financieros"] = fin;
  }

  return overrides;
}