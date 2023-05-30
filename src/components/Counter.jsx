import React from "react";



const INITIAL_STATE = {
    login: "",
    email: "",
    password: "",
};

class SignUpForm extends React.Component {
    state = { ...INITIAL_STATE };

    // Для всіх інпутів створюємо один обробник
    // Розрізняти інпути будемо за атрибутом name
    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const { login, email, password } = this.state;
        console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
        this.props.onSubmit({ ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    render() {
        const { login, email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        placeholder="Enter login"
                        name="login"
                        value={login}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>

                <button type="submit">Sign up as {login}</button>
            </form>
        );
    }
}


export default SignUpForm;
















// class Counter extends React.Component {
//     state = {
//         name: '',
//         surname: '',
// }

//     handleChange = event => {
//         console.log(event.currentTarget);
//         console.log(event.currentTarget.name);
//         console.log(event.currentTarget.value);

//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value});
//     } 
    
//     handleSubmit = event => {
//         event.preventDefault();
//         console.log(this.state);
//         this.reset();
//     } 

//     reset = () => {
//         this.setState({ name: '', surname: '' })
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>Ім'я</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={this.state.name}
//                     onChange={this.handleChange} />
                
//                 <label>Прізвище</label>
//                 <input
//                     type="text"
//                     name="surname"
//                     value={this.state.surname}
//                     onChange={this.handleChange} />
                
//                 <button type="submit">submit</button>
//             </form>
//         );
//     }
// }

// export default Counter;