import { useState } from "react";
import { Filter, FILTER } from "~/consts";
import { Todo } from "~/types/todo";
import styles from "~/styles/Home.module.css";
import { Button } from "~/components/atoms/button";
import { NextHead } from "~/components/atoms/next-head";
import { Footer } from "~/components/organisms/footer";
import { TodoList } from "~/components/atoms/todolist";

export const TodoTemplate = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>(FILTER.ALL);

  const handleOnSubmit = () => {
    if (!text) return;

    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
      removed: false,
    };

    setTodos([newTodo, ...todos]);
    setText("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnEdit = (id: number, value: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleOnChecked = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleOnRemove = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.removed = !todo.removed;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case FILTER.ALL:
        return !todo.removed;
      case FILTER.CHECKED:
        return todo.checked && !todo.removed;
      case FILTER.UNCHECKED:
        return !todo.checked && !todo.removed;
      case FILTER.REMOVED:
        return todo.removed;
      default:
        return todo;
    }
  });

  const handleOnEmpty = () => {
    const newTodos = todos.filter((todo) => !todo.removed);
    setTodos(newTodos);
  };

  return (
    <div className={styles.container}>
      <NextHead>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <main className={styles.main}>
        <h1 className={styles.title}>ToDo App</h1>
        <div>
          <select
            defaultValue={FILTER.ALL}
            onChange={(e) => setFilter(e.target.value as Filter)}
          >
            <option value={FILTER.ALL}>?????????????????????</option>
            <option value={FILTER.CHECKED}>?????????????????????</option>
            <option value={FILTER.UNCHECKED}>??????????????????</option>
            <option value={FILTER.REMOVED}>?????????</option>
          </select>
          {filter === FILTER.REMOVED ? (
            <button
              onClick={handleOnEmpty}
              disabled={todos.filter((todo) => todo.removed).length === 0}
            >
              ????????????????????????
            </button>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOnSubmit();
              }}
            >
              <input
                type="text"
                disabled={filter === FILTER.CHECKED}
                value={text}
                onChange={(e) => handleOnChange(e)}
              />
              <input
                type="submit"
                disabled={filter === FILTER.CHECKED}
                value="??????"
                onSubmit={handleOnSubmit}
              />
            </form>
          )}
          <TodoList>
            {filteredTodos.map(({ id, checked, removed, value }) => {
              return (
                <li key={id}>
                  <input
                    type="checkbox"
                    disabled={removed}
                    checked={checked}
                    onChange={() => handleOnChecked(id)}
                  />
                  <input
                    type="text"
                    disabled={checked || removed}
                    value={value}
                    onChange={(e) => handleOnEdit(id, e.target.value)}
                  />
                  <Button
                    text={removed ? "??????" : "??????"}
                    onClick={() => handleOnRemove(id)}
                  />
                </li>
              );
            })}
          </TodoList>
        </div>
      </main>
      <Footer />
    </div>
  );
};
