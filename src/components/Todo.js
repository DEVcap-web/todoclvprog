import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import '../components/Todo.css';

const Todo = ({ text, key, no, todos }) => {

    const deleteHandler = (e) => {
        todos.filter((elem) => {
            return elem.id !== no;
        })
    }


    return (
        <div className="todo" >
            <List className="todo__list" >
                <ListItem className="todo__item" >
                    <ListItemText secondary={`Task ${no + 1}`} primary={text} ></ListItemText>
                </ListItem>
            </List>
            <Button variant="contained">Done</Button>
            <Button>
                <DeleteOutlineIcon onClick={deleteHandler} className="todo__delete" />
            </Button>
        </div >
    )
}

export default Todo
