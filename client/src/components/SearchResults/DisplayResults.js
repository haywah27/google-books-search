import React from "react";
import API from "../../utils/API";
import { Jumbotron, Button, Container } from "react-bootstrap";
import "./search.css";

function DisplayResults(props) {
  function handleSaveBook() {
    const newBook = {
      id: props.id,
      title: props.title,
      author: props.author,
      image: props.image,
      description: props.description,
      link: props.link,
    };
    console.log("new book: ", newBook);
    API.saveBook(newBook);
  }
  return (
    <>
      <Jumbotron className="jumboContainer">
        <Button variant="info" id={props.id} onClick={handleSaveBook}>
          Save Book
        </Button>
        <Button href={props.link} variant="info">
          View Book
        </Button>
        <h1>Title: {props.title}</h1>
        <h2>Author(s): {props.author}</h2>
        <hr />
        <img src={props.image} alt="book cover"></img>
        <hr />
        <h2>Description</h2>
        <hr />
        <p>{props.description}</p>
      </Jumbotron>
    </>
  );
}

export default DisplayResults;
