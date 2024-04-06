import React from "react";
function Header() {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-3 align-items-center">
          <a href={`/`}>
            <button type="submit" className="btn btn-primary">
              HOME
            </button>
          </a>
        </div>
        <div className="col-8 align-items-center">
          <h1>Patients management Cool Tool</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
