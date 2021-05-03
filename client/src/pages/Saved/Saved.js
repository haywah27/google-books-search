import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import API from "../../utils/API";

function SavedBooks() {
  const [savedBookState, setSavedBookState] = useState([]);
  useEffect(() => {
    API.getSavedBooks().then((response) => {
      let savedBooks = [];
      response.data.map((item) => {
        savedBooks.push({
          id: item.id,
          title: item.title,
          author: item.author,
          image: item.image,
          description: item.description,
          link: item.link,
        });
      });
      setSavedBookState(savedBooks);
    });
  }, []);

  const displaySavedBooks = savedBookState.map((data) => (
    <>
      <Container>
        <Jumbotron>
          <Button href={data.link} className="primary">
            View Book
          </Button>
          <h1>Title: {data.title}</h1>
          <h2>Author(s): {data.author}</h2>
          <hr />
          <img src={data.image} alt="book cover"></img>
          <br />
          <br />
          <h2>Description</h2>
          <hr />
          <p>{data.description}</p>
        </Jumbotron>
      </Container>

    </>
  ));

  return (
    <>
      {displaySavedBooks}
    </>
  );
}

export default SavedBooks;
