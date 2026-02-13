import React from "react";

export default function EXCELGenerator() {
  return (
    <>
    <div className="Excel_card">
      <h2>1) Suba su archivo Excel</h2>

      <label class="field">
        <input id="excelFile" type="file" accept=".xlsx,.xlsm,.xls" />
        <small class="hint">Formatos: .xlsx / .xlsm / .xls</small>
      </label>
    </div>
    </>
  );
}
