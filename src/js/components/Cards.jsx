import React, { useState } from "react";

export const Cards = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className="col-md-4">
            <div className="card h-100 text-center">
                <img src={props.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2 mt-2 shadow-sm"
                            onClick={() => setShowInfo(!showInfo)}
                        >
                            {showInfo ? "Ver menos" : "Ver más"}
                        </button>
                        {showInfo && (
                            <p className="mt-2 text-muted">
                                {props.button}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};