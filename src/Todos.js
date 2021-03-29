const Todos = ({ todos }) => {
  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  const todoItems = todos
    .filter(function (todo) {
      return todo.id <= 30;
    })
    .map((todo) => <li style={getStyle()}>{todo.title}</li>);

  return <ul>{todoItems}</ul>;
};

export default Todos;
