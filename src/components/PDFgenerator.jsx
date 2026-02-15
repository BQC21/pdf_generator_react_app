import React from "react";

export default function PDFgenerator() {
  return (
    <>
    <section className="card_pdf">

      <h2>5) Generar PDF </h2>
      <div className="actions">
        <button id="btnGenerate" className="btn primary">Generar PDF</button>
        <button id="btnOpen" className="btn" disabled>Abrir PDF</button>
      </div>

      <details className="debug">
        <summary>Debug</summary>
        <pre id="debugLog"></pre>
      </details>
    </section>
    </>
  );
}
