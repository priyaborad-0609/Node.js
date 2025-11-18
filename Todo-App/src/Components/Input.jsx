import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addTodoBackend,
  deleteTodoBackend,
  updateTodoBackend
} from "../features/TodoSlice";

const Input = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.Todos || []);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddOrEdit = () => {
    if (!title.trim()) return;

    if (editId) {
      dispatch(updateTodoBackend({ id: editId, text: title, description }));
      setEditId(null);
    } else {
      dispatch(addTodoBackend({ text: title, description }));
    }

    setTitle("");
    setDescription("");
  };

  const startEdit = (todo) => {
    setTitle(todo.text);
    setDescription(todo.description || "");
    setEditId(todo.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      {/* Input Card */}
      <div className="input-card">
        <h1 className="brand">📝 My Todo App</h1>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input title-input"
          />
          <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input desc-input"
            rows={3}
          />
        </div>
        <div className="btn-row">
          <button className="btn primary" onClick={handleAddOrEdit}>
            {editId ? "Update Task" : "Add Task"}
          </button>
          {editId && (
            <button
              className="btn ghost"
              onClick={() => {
                setEditId(null);
                setTitle("");
                setDescription("");
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Todo List */}
      <div className="list-card">
        {todos.length === 0 ? (
          <p className="empty">No tasks yet! Add one ✨</p>
        ) : (
          <ul className="todo-list">
            {todos
              .slice()
              .reverse()
              .map((todo) => (
                <li key={todo.id} className="todo-item">
                  <div className="todo-info">
                    <h3 className="todo-title">{todo.text}</h3>
                    <p className="todo-desc">{todo.description || <i>No description</i>}</p>
                  </div>
                  <div className="todo-actions">
                    <button onClick={() => startEdit(todo)} className="btn small edit">
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(deleteTodoBackend(todo.id))}
                      className="btn small delete"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Input;
