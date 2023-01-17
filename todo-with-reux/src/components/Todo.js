import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

import { connect } from "react-redux";
import { removeTodo } from "../actions/todo";
import todo from "../reducer/todo";

const Todo = ({ todos, markComplete }) => {
  return (
    <ListGroup>
      {todo.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todos.title}
          <span onClick={() => markComplete(todo.id)} className="float-right">
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
