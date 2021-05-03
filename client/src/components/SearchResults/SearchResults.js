import React from "react";
import { Jumbotron } from "react-bootstrap";

function DisplayResults(props) {
  return (
    <>
      <div>
        <Jumbotron className="container">
          <h1>Title: {props.title}</h1>
          <h2>Author(s): {props.author}</h2>
          <hr />
          <img src={props.image} alt="Book" className="img-fluid"></img>
          <br />
          <br />
          <h2>Description</h2>
          <hr />
          <p>{props.description}</p>
        </Jumbotron>
        <br></br>
      </div>
    </>
  );
}

export default DisplayResults;
