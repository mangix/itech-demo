import React from 'react'

export default (props) => {
    return <ul>
        {props.list.map(item => {
            return <li key={item.id}>
                <a href={'tel:' + item.tel}> {item.name}</a>
                <a onClick={props.onDelete.bind(this, item.id)}>delete</a>
            </li>
        })}
    </ul>
}
