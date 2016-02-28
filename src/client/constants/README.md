# ActionTypes

ActionTypes describe the state transforming behavior of the reducers.  They are
necessary to decouple the logic of rendering from the data model.

```javascript
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
```

# Naming ActionTypes
actionTypes are simply the type field of a FSA (Flux Standard Action).  These
can contain error information too, so a pair of actionTypes like the following
is unnecessary.

```javascript
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';
```

instead, in our actions we can describe errors with the `error` field.

```javascript
export function addTodo(description) {
  try {
    return {
      type: ADD_TODO,
      payload: { description, date: date.now() }
    };
  } except (e) {
    return {
      type: ADD_TODO,
      payload: new Error(),
      error: true
    };
  }
}
```

Of course this means that our reducer must be aware of the error field.  

# Naming Collisions
Suppose we already have an action called `ENTER_DATA` somewhere else in our
app and we find ourselves creating a different action called `ENTER_DATA`.  
Defining different behavior on different reducers will not magically distinguish
between the two.  Additionally, a naming scheme like `ENTER_DATA_2` is difficult
to understand.  Our actions describe an interface between the view and the store,
and should (ideally) be declarative and easy to understand.  There are several
solutions to the naming problem:

1.  app/reducer affixing
  Name our actions `ENTER_DATA_TODO` and `ENTER_DATA_FORM` - where `_FORM` and
  `_TODO` suffixes match the names of the reducers and containers these correspond
  to.  While we can't accidentally use our actions in place of eachother, they
  do get a bit wordier.

2. Symbol types
  Name our actions the same (requiring different files of course) `ENTER_DATA`,
  but set them equal to Symbol types.  A new Symbol is guaranteed to be globally
  unique.
    ```javascript
    // In file /constants/todoActions.js
    export const ENTER_DATA = Symbol('ENTER_DATA_TODO');
    ```
    ...
    ```javascript
    // In the file /constants/formActions.js
    export const ENTER_DATA = Symbol('ENTER_DATA_FORM');
    ```
  While this lets us use the same variable name, it also obscures the location
  of the action a bit and requires us to `import .. as something from ..` if
  we want to use both of them.

These naming collisions also apply to action naming.
