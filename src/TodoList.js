import { observer } from "mobx-react-lite";
import store from "./store";
import TodoItem from "./TodoItem";

const TodoList = observer(() => (
  <div>
    {store.todos.length > 0 ? (
      <div className="space-y-2">
        {store.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={store.removeTodo} />
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500 mt-6">
        No todos yet. Add your first task!
      </p>
    )}
  </div>
));

export default TodoList;
