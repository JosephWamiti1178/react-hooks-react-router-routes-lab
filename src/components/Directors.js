import React from "react";
import { directors } from "../data";

function Directors() {
   const  director = directors.map((director)=>(
     <div>
    <h1>{director.name}</h1>
    <ul>
        {director.movies.map((movie)=>(
          <li key={movie}>{movie}</li>
        ))}
    </ul>
  </div>
   ));
  console.log(director);
  return <div>
    <h1>Directors Page</h1>
    {director}
    </div>;
}

export default Directors;
