import React from 'react';
import { Todo } from '@denv/data';

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map((t) => (
        <li key={t.title} className={'todo'}>
          {t.title}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
