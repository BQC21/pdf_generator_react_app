import React from "react";
import { useState } from 'react';

import TEC_logo from './assets/TEC_logo.png';

import EXCELGenerator from './components/EXCELGenerator';
import ReportData from './components/ReportData';
import CompanyData from './components/CompanyData';
import FinantialData from './components/FinantialData';
import PDFgenerator from './components/PDFgenerator';

function App() {
  return (
    <>
      <div className='header'>
        <header class="header"> 
          <h1>
            Generador de cotizaciones - TEC {" "}
            <img src={TEC_logo} 
            id="logo_tec" alt="TEC Logo" hspace = "100px" vspace = "20px"
            align="right" width="180px" height="80px"
            className='logo_tec_img'/>
          </h1>
          <p>Bienvenido al generador de cotizaciones del TEC, aquí podrás crear cotizaciones 
            personalizadas para tus clientes de manera rápida y sencilla.</p>
        </header>
      </div>

      <div className='nuclear'>
        <React.StrictMode>
          <EXCELGenerator />
          <ReportData />
          <CompanyData />
          <FinantialData />
          <PDFgenerator />
        </React.StrictMode>
      </div>

      <div className='footer'>
        <p>Elaborado y revisado por TEC-Energy solutions S.A.C 2026</p> 
      </div>
    </>
  )
}

export default App
