# Reducers
A reducer maps the actions described in `constants` to transformations of a
segment of the applications state tree.  A reducer has no knowledge of
the application state outside it's slice, and no knowledge about how to render
the state.  It only makes transformations on the state!

`F(State, Action) => State`

For example, Suppose we need to add a new form component.  What we need are:

1. A list of constants (optional) which describe the actions on that form.

```javascript
  export const ENTER_DATE = "ENTER_DATE";
  export const ENTER_NAME = "ENTER_NAME";
  export const CHECK_FORM = "CHECK_FORM";
```

2. Action creators (optional) which take some information and create standard
actions for us.

```javascript
  import { ENTER_DATE } from 'constants/actionTypes';
  export function enterDate(date) {
    return {
      type: ENTER_DATE,
      payload: { date }
    };
  }
```
3. A reducer - which implements the transformations that the actions describe.
consists of an initial state, and a switch on the action types.  typically,
they are named '\_App'.

```javascript
  import { ENTER_DATE, ENTER_NAME, CHECK_FORM } from 'constants/actionTypes';

  const initialState = {
    date: null,
    name: null,
    valid: false
  };

  export function(state = initialState, action) {
    switch(action.type){
      case ENTER_DATE: {
          // it's good practice to wrap case statements in braces
          // if you are pulling values off of the payload.  otherwise
          // even block scoped variables (let, const) will be visible
          // in other cases.
          // destructuring sugar for const date = action.payload.date;
          const { date } = action.payload;
          return { ...state, date };
      }
      case ENTER_NAME: {
        const { name } = action.payload;
        return { ...state, name };
      }
      case CHECK_FORM:
        // not a very strong check!
        // ...state means take all the properties out of state,
        // but then set valid equal to whatever we calculate
        return { ...state, valid: state.date && state.name }
      default:
        // always return state on default
        return state;
    }
  }
```
