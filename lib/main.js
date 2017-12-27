import UserList from './components/UserList'
import ReactDOM from 'react-dom'
import React from 'react'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        React.createElement(UserList),
        document.getElementById('mount')
    )
})
