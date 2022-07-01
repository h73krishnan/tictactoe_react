import React, {useState} from "react";
import './App.css';
import Icon from "./components/Icon.js";

import {ToastContainer} from "react-toastify";
import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    //
  };

  const checkIsWinner = () => {
    //
  };

  const changeItem = itemNumber => {
    //
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Icon />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
  // return (
  //   <Container className="p-5">
  //     <ToastContainer position="bottom-center" />
  //     <Row>
  //       <Col md = {6} className="offset-md-3">
  //         <div className="grid">
  //           {itemArray.map((item, index) => (
  //             <Card>
  //               <CardBody className="box">
  //                 <Icon name={item}/>
  //               </CardBody>
  //             </Card>
  //           ))}
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
}

export default App;
