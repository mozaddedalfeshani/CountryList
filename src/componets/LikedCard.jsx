import React from "react";

export default function LikedCard({ values, func }) {
  return (
    <div
      className={`card  justify-between max-w-72 shadow-xl my-3 bg-base-100 `}>
      <figure>
        <img src={values.flags.png} alt={values.name.common} className="h-14" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{values.name.common}</h2>
        <p>Total Population is {values.population}</p>
        <div className="card-actions justify-end">
          {/* Toggle between 'Liked' and 'Disliked' */}
        </div>
        <button
          className="btn"
          onClick={() => {
            func(values.name.common);
          }}>
          Remove
        </button>
      </div>
    </div>
  );
}
