import { ReactNode } from "react";

type TodoListProps = {
  children: ReactNode;
};

export const TodoList = (props: TodoListProps) => {
  const { children } = props;
  return <ul>{children}</ul>;
};
