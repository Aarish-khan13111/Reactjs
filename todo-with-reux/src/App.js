import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

//importing components
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

//redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
};

export default App;
