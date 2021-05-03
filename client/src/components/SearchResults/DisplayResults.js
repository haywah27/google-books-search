import React from "react";
import API from "../../utils/API";
import { Jumbotron, Button, Container } from "react-bootstrap";
import "./displayResults.css";

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
      <Container className="pageContainer">
        <Jumbotron className="jumboContainer">
          <Button className="buttons" id={props.id} onClick={handleSaveBook}>
            Save Book
          </Button>
          <Button className="buttons" href={props.link}>
            View Book
          </Button>
          <h1>Title: {props.title}</h1>
          <h2>Author(s): {props.author}</h2>
          <hr />
          <img className="imageShadow" src={props.image} alt="book cover"></img>
          <hr />
          <h2>Description</h2>
          <hr />
          <p className="bookDesc">{props.description}</p>
        </Jumbotron>
      </Container>
    </>
  );
}

export default DisplayResults;
