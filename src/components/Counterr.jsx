import React from "react";
import shortid from 'shortid'

class Counterr extends React.Component {
    state = {
        contacts: [],
        name: '',
        number: '',
        // hairCorol: '',
        // isMariage:false
    }
      

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = event => {
        const { name, value } = event.currentTarget;
        // console.log(event.currentTarget.value);

        this.setState({
            // contacts: [{ [name]:value}],
            [name]: value
        });
    }


    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        // this.state.contacts.push(this.state.name);
        // this.state.contacts.push(this.state.number);
        console.log(this.state.contacts);
        this.reset();
    }

    handleRadioChange = event => {
        const { name, value } = event.currentTarget;
        console.log(name, value);
        this.setState({ [name]: value });
    }

    handleCheckbox = event => {
        const { name, checked } = event.currentTarget;
        console.log(name, checked);
        this.setState((prevState) => ({ isMariage: checked }));
        // console.log(prevState);
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }


    render() {
        return (
            <div>
                <h2>Phonebook</h2>
                <form onSubmit={this.handleSubmit}>
                     <label htmlFor={this.nameInputId}>Name</label>
                    <input
                       type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        id={this.nameInputId}
                    /> 

                    <label htmlFor={this.numberInputId}>Number</label>
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        id={this.numberInputId}
                    />
                    <br /> 
                    {/* <label>red
                        <input
                            type="radio"
                            name="hairCorol"
                            value="red"
                            onChange={this.handleRadioChange}
                        />
                    </label>
                    <br />
                    <label>pink
                        <input
                            type="radio"
                            name="hairCorol"
                            value='pink'
                            onChange={this.handleRadioChange}
                        />
                    </label>
                    <br/>
                    <label>orange
                        <input
                            type="radio"
                            name="hairCorol"
                            value='orange'
                            onChange={this.handleRadioChange}
                        />
                    </label>
                    <br />
                    <br />

                    <br />
                    <label>Maried
                        <input
                            type="checkbox"
                            name="isMariage"
                            checked={this.state.isMaried}
                            onChange={this.handleCheckbox}
                        />
                    </label>
            
                    <br />*/}

                <button type="submit">Add contact</button>
            </form>
        <div> 
                    <h2>Contacts</h2>
                    <ul>
                        {this.state.contacts.map((name, number, id) => {
                            id = shortid.generate();   
                            console.log(id);
                            // console.log(name);
                            return (
                                <li key={id}>
                                    {name} : {number}
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Counterr;