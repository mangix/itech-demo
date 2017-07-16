import React from 'react'
import { render } from 'react-dom'
import ContactList from './ContactList.jsx'
import Search from './Search.jsx'
import './style.less'

// let list = [
//     {
//         id: 1,
//         name: '老王',
//         tel: 112121
//     },
//     {
//         id: 2,
//         name: '老李',
//         tel: 112121
//     }
// ]
let list = []

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: list
        }
        this.init()
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
        fetch('http://localhost:8090/delete?id=' + id)
            .then(res => res.json())
            .then(data => {
                if (data.code === 200) {
                    this.setState({
                        list: newList
                    })
                }
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
    init() {
        fetch('http://localhost:8090/list')
            .then(res => res.json())
            .then(data => {
                list = data
                this.setState({
                    list: data
                })
            })
    }
}

render(<App />, document.getElementById('app'))
