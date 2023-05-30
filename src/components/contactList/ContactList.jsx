
import PropTypes from "prop-types";

import css from "components/contactList/ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {

    return <ul className={css["list-names"]}>
        {contacts.map(({ id, name, number }) => {
        return (
            <li key={id}>
                {name}: {number}
                <button
                    type="button"
                    onClick={() => onDelete(id)}
                >Delete</button>
            </li>)
    })}
</ul>}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
};