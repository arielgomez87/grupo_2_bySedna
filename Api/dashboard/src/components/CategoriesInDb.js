import React from "react";

function CategoriesInDb({products}) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Product Categories
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {/*un for que recorra */}
          <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Acción</div>
              </div>
            </div>
          {/*un for que recorra */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
