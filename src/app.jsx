import React from 'react'
import { render } from 'react-dom'
import ContactList from './ContactList.jsx'
import Search from './Search.jsx'
import './style.less'

let list = [
    {
        id: 1,
        name: '老王',
        tel: 112121
    },
    {
        id: 2,
        name: '老李',
        tel: 112121
    }
]

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: list
        }
    }
    render() {
        return <div>
            <Search onInput={this.onSearchInput.bind(this)} />
            <ContactList
                list={this.state.list}
                onDelete={this.onDelete.bind(this)} />

        </div>
    }
    onDelete(id) {
        let newList = this.state.list.filter(item => item.id !== id)
        this.setState({
            list: newList
        })
    }
    onSearchInput(e) {
        let keyword = e.target.value
        if (keyword) {
            console.log(keyword)
            let newList = list.filter(item => item.name.indexOf(keyword) > -1)
            this.setState({
                list: newList
            })
        } else {
            this.setState({
                list: list
            })
        }
    }
}

render(<App />, document.getElementById('app'))
