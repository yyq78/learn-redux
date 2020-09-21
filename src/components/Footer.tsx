import React from 'react';
import {FilterLink} from '../container/FilterLink';
export default function Footer({filterLink,setFilterLink}){
    return (
        <p>
            Show:
            {' '}
            <FilterLink filter="SHOW_ALL">
                ALL
            </FilterLink>
            {', '}
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
            {', '}
            <FilterLink filter="SHOW_COMPLETED">
                Complete
            </FilterLink>
        </p>
    )
}