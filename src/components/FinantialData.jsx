import React from "react";

export default function FinantialData() {
  return (
    <>
    <div className="finantial_card">

      <h2>4) Ingrese los parámetros financieros </h2>
      <div class="grid">
        <label class="field">
          <span>Tasa de cambio</span>
          <input id="tasa_cambio" type="number" step="0.01" placeholder="Ej: 3.35" />
        </label>

        <label class="field">
          <span>Markup</span>
          <input id="markup" type="number" step="0.0001" placeholder="Ej: 0.75" />
        </label>

        <label class="field">
          <span>Interés</span>
          <input id="interes" type="number" step="0.0001" placeholder="Ej: 0.18" />
        </label>
      </div>


    </div>
    </>
  );
}
