import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            //   backgroundColor: theme.palette.background.default,
            backgroundColor: 'white',
        }
    }
});

class AdminItem extends Component {


    render() {
        return (
            <TableRow className={this.props.classes.row}>
                <TableCell>
                    {this.props.item.feeling}
                </TableCell>
                <TableCell>
                    {this.props.item.understanding}
                </TableCell>
                <TableCell>
                    {this.props.item.support}
                </TableCell>
                <TableCell>
                    {this.props.item.comments}
                </TableCell>
                <TableCell>
                    <button onClick={() => this.props.handleDelete(this.props.item.id)}>Delete</button>
                </TableCell>
            </TableRow>
        )
    }
}

export default withStyles(styles)(AdminItem);