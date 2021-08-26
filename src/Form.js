import React, { Component } from 'react'

export class Form extends Component {
    render() {
        const { name, age } = this.props;
        return (
            <div><p>Hello Friends My self {name} & I am {age} years old.</p></div>
        )
    }
}

export default Form
