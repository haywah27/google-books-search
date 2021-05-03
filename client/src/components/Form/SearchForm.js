import React, {useState} from "react";
import API from "../../utils/API";
import {
  Container,
  Row,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function SearchForm() {
  const [queryState, setQueryState] = useState("");
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
    <Container fluid>
      <Row className=" d-flex justify-content-center text-center bg-dark text-light">
        <Navbar bg="dark" variant="dark" className="justify-content-center">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search Book"
              onChange={(event) => setQueryState(event.target.value)}
            />
            <Button variant="primary" onClick={searchButtonClick()}>
              Search
            </Button>
          </Form>
        </Navbar>
      </Row>
    </Container>
  );
}

export default SearchForm;
