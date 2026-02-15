import React from "react";

export default function FinantialData() {
  return (
    <>
    <section className="finantial_card">

      <h2>4) Ingrese los parámetros financieros </h2>
      <div className="grid">
        <label className="field">
          <span>Tasa de cambio ($ -- s/):</span>
          <input id="tasa_cambio" type="number" step="0.01" placeholder="Ej: 3.35" />
        </label>

        <label className="field">
          <span>Markup</span>
          <input id="markup" type="number" step="0.01" placeholder="Ej: 0.75" />
        </label>

        <label className="field">
          <span>Interés</span>
          <input id="interes" type="number" step="0.01" placeholder="Ej: 0.18" />
        </label>
      </div>


    </section>
    </>
  );
}
