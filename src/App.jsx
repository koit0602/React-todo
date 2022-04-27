import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputToto";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAddText = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);

    const moveTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(moveTodos);
  };

  const onClickBackTodo = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);

    const backTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(backTodos);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAddText}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p>5個まで</p>}
      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBackTodo} />
    </>
  );
};
