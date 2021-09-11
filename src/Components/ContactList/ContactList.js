import shortid from "shortid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import contactActions from '../../redux/action';

function ContactList({ contacts, onDeleteContact }) {
  
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={shortid.generate()} className={s.item}>
          {name}: {number}
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const getFilterContacts = (contacts,filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contacts: getFilterContacts(items, filter),
  };
};

const mapDispatchToProps=(dispatch) => ({
  onDeleteContact:id=>dispatch(contactActions.deleteContact(id))
  
})

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);
