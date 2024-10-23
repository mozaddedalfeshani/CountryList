import { useState } from "react";

export default function Card({ values, likedFunc }) {
  const [visited, setVisited] = useState(false);

  const toggle = () => {
    setVisited(!visited);
  };

  return (
    <div
      className={`card card-compact max-w-72 shadow-xl my-3 ${
        visited ? "bg-green-300" : "bg-grey-300"
      }`}>
      <figure>
        <img src={values.flags.png} alt={values.name.common} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{values.name.common}</h2>
        <p>Total Population is {values.population}</p>
        <div className="card-actions justify-end">
          {/* Toggle between 'Liked' and 'Disliked' */}
          <button className="btn btn-primary" onClick={toggle}>
            {visited ? "I dislike it" : "I liked it"}
          </button>

          {/* Call likedFunc with the country values */}
          <button
            onClick={() => {
              likedFunc(values);
            }}
            className="btn btn-success">
            Mark As Visited
          </button>
        </div>
      </div>
    </div>
  );
}
