import React from "react";
import { actors } from "../data";

function Actors() {
  const allActors = actors.map((actor)=>(
    <div>
      <h1>Name: {actor.name}</h1>
      <p> Movies:</p>
      <ul>
       
        {actor.movies.map((movie)=>(
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  console.log(actors)
  return <div>
    <h1>Actors Page</h1>
    {allActors}
  </div>;
}

export default Actors;
