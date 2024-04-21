import React, {Component} from 'react'

class HelloWorld extends React.Component{
    render() {
        return (
            <h1>Hello {this.person.name}</h1>
        )
    }
}

export default HelloWorld