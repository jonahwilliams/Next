# Containers
A container is a React component that is aware of Redux (vis store.subscribe()).
It is responsible for mapping the store data to props for child
components, sometimes applying transformations and modifications to the data.

The `react-redux` library provides the utility function `connect()`, which
automatically generates a container.  To use connect, you need to defined
a function called `mapStateToProps()` which describes how to transform
(normalize, filter, et cetera) the state tree into props.  In the todo example,
the function would filter the todoList via the field in `filter`.
