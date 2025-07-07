import React, { useState } from "react";

export const JumboTron = () => {
    return (
        <div className="container mt-4">
            <div className="p-3 p-md-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-3 py-md-5">
                    <h1 className="display-6 display-md-5 fw-bold">Custom jumbotron</h1>
                    <p className="col-12 col-md-8 fs-5 fs-md-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <button className="btn btn-primary btn-lg" type="button">Example button</button>
                </div>
            </div>
        </div>
    )
}