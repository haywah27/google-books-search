import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import API from "../../utils/API";

function SearchBook() {
  const [queryState, setQueryState] = useState("");
  const [searchReturn, setSearchReturn] = useState([]);

  function searchButtonClick() {
    API.searchBook(queryState)
      .then((response) => {
        setSearchReturn(response.data.items);
        console.log("response: ", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <Container fluid>
        <Row className=" d-flex justify-content-center text-center p-3 mb-2 bg-dark text-light">
          <Navbar bg="dark" variant="dark" className="justify-content-center">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(event) => setQueryState(event.target.value)}
              />
              <Button variant="primary" onClick={searchButtonClick()}>
                Search
              </Button>
            </Form>
          </Navbar>
        </Row>
      </Container>
    </>
  );
}

export default SearchBook;
