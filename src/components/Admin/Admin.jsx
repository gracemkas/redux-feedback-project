import React, { Component } from 'react';
import axios from 'axios';
import AdminItem from '../AdminItem/AdminItem.jsx';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../App/App.css';


const styles = theme => ({
    root: {
        width: '80%',
        marginTop: theme.spacing.unit * 3,
        marginLeft: '10%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700
    },
    heading: {
        backgroundColor: 'grey'
    },
    headingCell: {
        color: 'white',
        fontSize: 14
    }
});

class AdminTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedbackList: []
        }
    }

    getFeedback = () => {
        axios.get('/api/feedback')
            .then(response => {
                this.setState({
                    feedbackList: response.data
                })
            })
            .catch(error => {
                console.log('Error on GET:', error);
            })
    }

    handleDelete = (id) => {
        axios.delete(`/api/feedback/${id}`)
            .then(response => {
                this.getFeedback();
            }).catch((error) => {
                console.log('error making delete request', error);
            });
    }

    componentDidMount() {
        this.getFeedback();
    }

    render() {

        let feedbackMapArray = this.state.feedbackList.map((item, index) => {
            return (<AdminItem
                key={index}
                item={item}
                handleDelete={this.handleDelete} />)
        });

        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback Results!</h1>
                    <br />
                </header>
                <Paper className={this.props.classes.root}>
                    <Table className={this.props.classes.table}>
                        <TableHead className={this.props.classes.heading}>
                            <TableRow>
                                <TableCell className={this.props.classes.headingCell}>
                                    Feeling
                            </TableCell>
                                <TableCell className={this.props.classes.headingCell}>
                                    Comprehension
                            </TableCell>
                                <TableCell className={this.props.classes.headingCell}>
                                    Support
                            </TableCell>
                                <TableCell className={this.props.classes.headingCell}>
                                    Comments
                            </TableCell>
                                <TableCell className={this.props.classes.headingCell}>
                                    Delete
                            </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {feedbackMapArray}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(AdminTable);