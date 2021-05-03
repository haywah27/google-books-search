import React, { useState } from "react";
import "./searchBook.css";
import {
  Container,
  Jumbotron,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import API from "../../utils/API";

import DisplayResults from "../../components/SearchResults/DisplayResults";


function SearchBook() {
  const [queryState, setQueryState] = useState("");
  const [searchReturn, setSearchReturn] = useState([]);

  function searchButtonClick() {
    API.searchBook(queryState)
      .then((response) => {
        setSearchReturn(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <Container fluid className="pageContainer">
          <Jumbotron className="jumbotronContainer">
            <h1>Welcome!</h1>
            <hr />
            <h4>Use the search box to find information about specific books.</h4>
            <h3>OR</h3>
            <h4>Navigate to the Saved Books tab to view any saved books.</h4>
            <Form inline className="formBox ">
              <FormControl
                type="text"
                size="lg"
                placeholder="Search Book"
                onChange={(event) => setQueryState(event.target.value)}
              />
              <Button className="searchButton" onClick={searchButtonClick}>
                Search
              </Button>
            </Form>
          </Jumbotron>
      </Container>

      {searchReturn.map((book) => {
        return (
          <DisplayResults
            id={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            image={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : console.log("no image to display")
            }
            description={book.volumeInfo.description}
            link={book.volumeInfo.infoLink}
          />
        );
      })}
    </>
  );
}

export default SearchBook;
