import React from "react";

function CategoriesInDb({props}) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Product Categories in DB
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
          {/*un for que recorra */}
          {
            props.categories.length > 0 && 
            props.categories.map(category => 
            
            (
              <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{category.name}</div>
              </div>
            </div>
          ))}

          {/*un for que recorra */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
