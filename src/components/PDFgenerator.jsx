import React from "react";
import '../styles/App.css';

export default function PDFgenerator() {
  return (
    <>
    <div className="pdf_card">

      <h2>5) Generar PDF </h2>
      <div class="actions">
        <button id="btnGenerate" class="btn primary">Generar PDF</button>
        <button id="btnOpen" class="btn" disabled>Abrir PDF</button>
      </div>

      <details class="debug">
        <summary>Debug</summary>
        <pre id="debugLog"></pre>
      </details>
      </div>
    </>
  );
}
