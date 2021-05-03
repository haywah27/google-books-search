import React, { useState } from "react";
import {
  Container,
  Row,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import API from "../../utils/API";
import DisplayResults from "../../components/SearchResults/SearchResults"

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
      <Container fluid>
        <Row className="justify-content-center text-center bg-dark">
          <Navbar className="justify-content-center">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search Book"
                onChange={(event) => setQueryState(event.target.value)}
              />
              <Button variant="primary" onClick={searchButtonClick}>
                Search
              </Button>
            </Form>
          </Navbar>
        </Row>
      </Container>

      {searchReturn.map((book) => {
            return(                
            <DisplayResults
                id={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : console.log("no image to display")} 
                description={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}
            />
            )
        })}
    </>
  );
}

export default SearchBook;
