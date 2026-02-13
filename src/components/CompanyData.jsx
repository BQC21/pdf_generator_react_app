import React from "react";
import '../styles/App.css';

export default function CompanyData() {
  return (
    <>
    <div className="Company_card">

      <h2>3) Ingrese los datos de la empresa </h2>
      <div class ="grid">
        <label class="field">
          <span>BCP_soles</span>
          <input id="BCP_soles" type="text" placeholder="Ej: 194-4373203-0-66" />
        </label>

        <label class="field">
          <span>CCI_soles</span>
          <input id="CCI_soles" type="text" placeholder="Ej: 002194 0043732030 6693" />
        </label>

        <label class="field">
          <span>BCP_dolares</span>
          <input id="BCP_dolares" type="text" placeholder="Ej: 194-6917620-1-58" />
        </label>

        <label class="field">
          <span>CCI_dolares</span>
          <input id="CCI_dolares" type="text" placeholder="Ej: 002194 0069176201 5895" />
        </label>

        <label class="field">
          <span>CTA_detraccion</span>
          <input id="CTA_detraccion" type="text" placeholder="Ej: 00 076 190305" />
        </label>
      </div>

    </div>
    </>
  );
}
