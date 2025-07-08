import React, { useState } from "react";

export const JumboTron = () => {
    return (
        <div className="container mt-4">
            <div className="p-3 p-md-5 mb-4 bg-body-tertiary bg-opacity-50 rounded-3 text-center">
                <div className="container-fluid py-3 py-md-5 ">
                    <h1 className="display-6 display-md-5 fw-bold ">Ninjas de la Hoja</h1>
                    <p className="col-12 col-md-8 fs-5 fs-md-4 mx-auto">onoha (abreviatura de Konohagakure no Sato) es una de las cinco grandes aldeas ninja del mundo shinobi. Está ubicada en el País del Fuego y es reconocida por su entorno boscoso y su poderoso linaje de ninjas. Fue fundada por Hashirama Senju y Madara Uchiha, y ha sido hogar de legendarios shinobi como Naruto Uzumaki, Kakashi Hatake y el Tercer Hokage. Su símbolo es una hoja espiral y su líder es el Hokage.</p>
                    <button className="btn btn-primary btn-lg" type="button">Colección</button>
                </div>
            </div>
        </div>
    )
}