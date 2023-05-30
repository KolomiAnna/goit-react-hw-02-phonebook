
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDelete }) => {

return <ul>
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