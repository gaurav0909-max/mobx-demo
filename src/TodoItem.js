import { observer } from "mobx-react-lite";

const TodoItem = observer(({ todo, onRemove }) => (
  <div className="flex justify-between items-center p-3 mb-2 bg-gray-100 rounded-md shadow-sm">
    <span className="text-gray-800">{todo.text}</span>
    <button
      onClick={() => onRemove(todo.id)}
      className="text-red-500 hover:text-red-600 focus:outline-none"
    >
      Remove
    </button>
  </div>
));

export default TodoItem;
