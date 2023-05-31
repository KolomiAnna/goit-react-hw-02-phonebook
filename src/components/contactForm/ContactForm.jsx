import React from "react";
import shortid from 'shortid'
import PropTypes from "prop-types";

import css from 'components/contactForm/contactForm.module.css'

class ContactForm extends React.Component {
    state = {
        name: '',
        number: '',
    }
    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

   
    handleChange = event => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit(name, number);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }

    render() {
        return (
            < form onSubmit={this.handleSubmit} className={css["form"]} >
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
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1
                            ,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        id={this.numberInputId}
                    />
                    <button type="submit">Add contact</button>
                </form>
        )
    }
}

export default ContactForm;


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};





