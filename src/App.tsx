import React from 'react';
import Transaction from "./layout/Transaction";
import './App.css';
import WMNavBar from "./components/header/WMNavBar";
import {Container} from "react-bootstrap";

function App() {
    return (
        <div>
            <WMNavBar/>
            <Container fluid>
                <Transaction/>
            </Container>
        </div>
    );
}

export default App;
