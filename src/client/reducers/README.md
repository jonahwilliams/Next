# Reducers
A Reducer implements functionality of the actions described on a component/view by actionType constants and action creators.
In Redux it is implemented as a pure function of the current state and a FSA, which returns a new state.

`F(State, Action) => State`

Multiple reducers can be created per app - in fact its good practice to divide the functionality of the application into multiple reducers.  It's extremely important that reducers remain completely side effect free; this allows us to easily reuse code across server, client, and mobile without modifications.  That means that Logging, Ajax, et cetera are not done in a reducer.  Instead impure actions are implemented in action creators.


For example, Suppose we need to add a new form component.  What we need are:

1. A list of constants (optional) which describe the actions on that form.

```javascript
  export const ENTER_DATA = "ENTER_DATA";
```

2. Action creators (optional) which take some information and create standard
actions for us.

```javascript
  import { ENTER_DATA } from 'constants/actionTypes';
  export function enterDate(field, value) {
    return {
      type: ENTER_DATA,
      payload: { field, value },
      error: null
    };
  }
```
3. A reducer - which implements the transformations that the actions describe.
consists of an initial state, and a switch on the action types.  typically,
they are named '\_App'.

```javascript
  import { ENTER_DATA } from 'constants/actionTypes';

  export function formApp(state = { date: null, name: null, valid: false}, action) {
    switch(action.type){
      case ENTER_DATA: {
          const { field, value } = action.payload;
          return { ...state, [field]: value };
      }
      default:
        // always return state on default
        return state;
    }
  }
```
