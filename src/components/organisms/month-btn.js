import React from "react";

export default function monthBtn() {
  return (
    <div style={{ fontFamily: "inherit" }}>
      <div className="row btn-month">
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month now">
            Jan
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            Feb
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            March
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            April
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            May
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            June
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            July
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            Aug
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            Sept
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            Oct
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            Nov
          </button>
        </div>
        <div className="col-1 d-grid gap-2">
          <button type="button" className="btn btn-outline-primary month">
            Dec
          </button>
        </div>
      </div>
    </div>
  );
}
