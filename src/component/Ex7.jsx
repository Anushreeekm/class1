import React, { Component } from "react"

const x = 123
const title = 'welcome to react'
const isView = false
const users = ['john', 'amar', 'raju', 'rohith']
const emp = {
    id: 123,
    name: 'Mahesh',
    email: 'mahesh@gmail.com'
}

class Ex7 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Variables and data binding in class component</h1>
            </div>
        )
    }
}

export default Ex7