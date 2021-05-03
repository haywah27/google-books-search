import React from "react";
import API from "../../utils/API";
import { Jumbotron, Container, Button } from "react-bootstrap";

function DisplayResults(props) {
  function clickID() {
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
      <div>
        <Container>
          <Jumbotron>
            <Button
              className="primary"
              type="submit"
              id={props.id}
              onClick={clickID}
            >
              Save Book
            </Button>
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
        </Container>
        <br></br>
      </div>
    </>
  );
}

export default DisplayResults;
