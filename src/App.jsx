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
      <main className='container'>
        <header className="header"> 
          <h1>
            Generador de cotizaciones - TEC {" "}
            <img src={TEC_logo} 
            id="logo_tec" alt="TEC Logo" hspace = "100px" vspace = "0px"
            align="right" width="180px" height="80px"
            className='logo_tec_img'/>
          </h1>
          <p>Bienvenido al generador de cotizaciones del TEC, aquí podrás crear cotizaciones 
            personalizadas para tus clientes de manera rápida y sencilla.</p>
        </header>

        <div className='nuclear'>
          <React.StrictMode>
            <EXCELGenerator />
            <ReportData />
            <CompanyData />
            <FinantialData />
            <PDFgenerator />
          </React.StrictMode>
        </div>

        <footer className='footer'>
          <p>Elaborado y revisado por TEC-Energy solutions S.A.C 2026</p> 
        </footer>
      </main>
    </>
  )
}

export default App;
