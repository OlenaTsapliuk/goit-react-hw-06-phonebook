import shortid from "shortid";
import { useSelector,useDispatch} from "react-redux";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import * as contactActions from '../../redux/action';
import { getVisibleContacts } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(contactActions.deleteContact(id));
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={shortid.generate()} className={s.item}>
          {name}: {number}
          <button
            className={s.button}
            type="button"
            onClick={()=>onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}




ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

// const mapStateToProps = ({ contacts: { items, filter } }) => {
//   return {
//     contacts: getFilterContacts(items, filter),
//   };
// };

// const mapDispatchToProps=(dispatch) => ({
//   onDeleteContact:id=>dispatch(contactActions.deleteContact(id))
  
// })

// export default connect(mapStateToProps,mapDispatchToProps)(ContactList);
