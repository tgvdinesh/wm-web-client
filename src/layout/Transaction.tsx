import * as React from 'react';
import {Container, Row, Table} from "react-bootstrap";

export interface TransactionProps {

}

export interface TransactionState {

}

class Transaction extends React.Component<TransactionProps, TransactionState> {
    state = {isLoading: true, Transactions: ([]) as any[]}

    async componentDidMount() {
        const response = await fetch("/api/transaction/all")
        const body = await response.json();
        this.setState({Transactions: body, isLoading: false})
    }

    render() {
        const {Transactions, isLoading} = this.state;
        if (isLoading)
            return (<div>Loading....</div>)
        else
            return (
                <Row>
                    <div>
                        <Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th scope="col">Transaction Reference Number</th>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Transactions.map(transaction =>
                                    <tr key={transaction.transactionID}>
                                        <th scope="row">{transaction.referenceNumber}</th>
                                        <td>{transaction.transactionDate}</td>
                                        <td>{transaction.description}</td>
                                        <td>{transaction.amount}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    </div>
                </Row>
            );
    }
}

export default Transaction;