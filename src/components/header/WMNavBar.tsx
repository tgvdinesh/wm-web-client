import * as React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";

class WMNavBar extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">
                        <svg id="Capa_1" enable-background="new 0 0 512 512" height="35" viewBox="0 0 512 512" width="35" xmlns="http://www.w3.org/2000/svg"><g><circle cx="256" cy="256" fill="#ffe14d" r="256"/><path d="m512 256c0-141.159-114.841-256-256-256v512c141.159 0 256-114.841 256-256z" fill="#fb3"/><g><g><path d="m256 451c-107.52 0-195-87.48-195-195s87.48-195 195-195 195 87.48 195 195-87.48 195-195 195z" fill="#fb3"/></g></g><path d="m451 256c0-107.52-87.48-195-195-195v390c107.52 0 195-87.48 195-195z" fill="#e68a2e"/><g id="Cent_2_"><path d="m271 242.068v-59.306c17.252 4.233 30 15.333 30 28.092 0 8.291 6.709 15 15 15s15-6.709 15-15c0-28.982-25.801-53.214-60-58.786v-16.214c0-8.291-6.709-15-15-15s-15 6.709-15 15v16.214c-34.199 5.572-60 29.804-60 58.786s25.801 53.214 60 58.786v59.306c-17.252-4.233-30-15.333-30-28.092 0-8.291-6.709-15-15-15s-15 6.709-15 15c0 28.982 25.801 53.214 60 58.786v16.36c0 8.291 6.709 15 15 15s15-6.709 15-15v-16.36c34.199-5.572 60-29.804 60-58.786s-25.801-53.215-60-58.786zm-60-31.214c0-12.759 12.748-23.859 30-28.092v56.184c-17.252-4.234-30-15.334-30-28.092zm60 118.092v-56.184c17.252 4.233 30 15.333 30 28.092s-12.748 23.858-30 28.092z" fill="#ffe14d"/></g><path d="m271 376v-16.36c34.199-5.572 60-29.804 60-58.786s-25.801-53.214-60-58.786v-59.306c17.252 4.233 30 15.333 30 28.092 0 8.291 6.709 15 15 15s15-6.709 15-15c0-28.982-25.801-53.214-60-58.786v-16.214c0-8.291-6.709-15-15-15v270.146c8.291 0 15-6.709 15-15zm0-103.239c17.252 4.233 30 15.333 30 28.092s-12.748 23.859-30 28.092z" fill="#fb3"/></g></svg>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#transactions" active={true}>Transactions</Nav.Link>
                        <Nav.Link href="#timeline">Timeline</Nav.Link>
                        <Nav.Link href="#accounts">Accounts</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
            </>
        )
    }
}

export default WMNavBar;