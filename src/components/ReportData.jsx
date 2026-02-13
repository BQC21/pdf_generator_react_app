import React from "react";
import '../styles/App.css';

export default function ReportData() {
  return (
    <>
    <div className="Report_card">
      <h2>2) Ingrese los datos del reporte </h2>
      
        <label class="field">
          <span>Cliente</span>
          <input id="cliente" type="text" placeholder="Ej: EGE Junín" />
        </label>

        <label class="field">
          <span>RUC_DNI</span>
          <input id="RUC_DNI" type="text" placeholder="Ej: 20254522871" />
        </label>

        <label class="field">
          <span>Proyecto</span>
          <input id="Proyecto" type="text" placeholder="Ej: Sistema On-Grid" />
        </label>

        <label class="field">
          <span>Fecha</span>
          <input id="Fecha" type="date" />
        </label>

        <label class="field">
          <span>Lugar</span>
          <input id="Lugar" type="text" placeholder="Ej: Junín" />
        </label>

        <label class="field">
          <span>Atención</span>
          <input id="Atencion" type="text" placeholder="Ej: Ing. Juan Oré" />
        </label>
    </div>
    </>
  );
}
