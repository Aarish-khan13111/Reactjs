import React, { useState } from "react";
import { Form, FormGroup, Input, InputGroup, Button } from "reactstrap";
import { v4 } from "uuid";

import { connect } from "react-redux";
import { addTodo } from "../actions/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please add a todo");
    }

    const todo = {
      title,
      id: v4,
    };

    addTodo(todo);

    setTitle("");
  };

  return (
    <Form>
      <FormGroup onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="your next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
        <Button onClick={handleSubmit} color="primary">
          ADD
        </Button>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
