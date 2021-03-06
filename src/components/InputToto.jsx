export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="Todoを入力"
        value={todoText}
        onChange={onChange}
        type="text"
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
