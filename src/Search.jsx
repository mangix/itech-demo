import React from 'react'

export default (props) => {
    return <div>
        <input type="text"
            onInput={props.onInput.bind(this)} />
    </div>
}
