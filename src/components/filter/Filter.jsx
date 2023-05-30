import PropTypes from "prop-types";
import shortid from 'shortid';

// import css from 'components/filter/Filter.module.css';

const Filter = ({ onChange, value }) => {
const filterId = shortid.generate();

    return <label htmlFor="filterId">
        Find contacts by name
    <input type="text"
            id={filterId}
            value={value}
            onChange={onChange}
        />
    </label>
}

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};