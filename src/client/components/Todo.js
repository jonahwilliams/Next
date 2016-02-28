import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, description }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    { description }
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
};

Todo.displayName = 'Todo';

export default Todo;
