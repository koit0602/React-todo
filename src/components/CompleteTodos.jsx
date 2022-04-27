export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">未完了のTodo</p>
      <ul className="list-row">
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
