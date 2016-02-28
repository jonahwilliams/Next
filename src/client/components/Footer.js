import React from 'react'
import { visibilityFilters } from '../constants/actionTypes';
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={visibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter={visibilityFilters.SHOW_COMPLETE}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
