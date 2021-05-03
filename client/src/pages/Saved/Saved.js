import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import API from "../../utils/API";
import "./saved.css";

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

  const handleDeleteBook = (event) => {
    event.preventDefault();
    alert("Book has been deleted");
    API.deleteBook(event.target.id);
    setSavedBookState(
      savedBookState.filter((book) => {
        return book.id !== event.target.id;
      })
    );
  };

  const displaySavedBooks = savedBookState.map((data) => (
    <>
      <Jumbotron className="savedContainer">
        <Button
          className="buttons deleteButton"
          id={data.id}
          onClick={handleDeleteBook}
        >
          Delete Book
        </Button>
        <Button href={data.link} className="buttons viewButton">
          View Book
        </Button>

        <h1>Title: {data.title}</h1>
        <h2>Author(s): {data.author}</h2>
        <hr />
        <img className="imageShadow" src={data.image} alt="book cover"></img>
        <hr />
        <h2>Description</h2>
        <hr />
        <p className="bookDesc">{data.description}</p>
      </Jumbotron>
    </>
  ));

  return (
    <Container className="pageContainer">
    {displaySavedBooks}
      </Container>
  )
 
}

export default SavedBooks;
