import React from "react";

class Counter extends React.Component {
    state = {
        name: '',
        surname: '',
}

    handleChange = event => {
        console.log(event.currentTarget);
        console.log(event.currentTarget.name);
        console.log(event.currentTarget.value);

        const { name, value } = event.currentTarget;
        this.setState({ [name]: value});
    } 
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.reset();
    } 

    reset = () => {
        this.setState({ name: '', surname: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Ім'я</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange} />
                
                <label>Прізвище</label>
                <input
                    type="text"
                    name="surname"
                    value={this.state.surname}
                    onChange={this.handleChange} />
                
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default Counter;