import React from "react";

export default function EXCELGenerator() {
  return (
    <>
    <section className="card">
        <h2>1) Suba su archivo Excel</h2>

        <label className="field">
          <input id="excelFile" type="file" accept=".xlsx,.xlsm,.xls" />
          <small className="hint">Formatos permitidos: .xlsx / .xlsm / .xls</small>
        </label>
    </section>
    </>
  );
}
