import { useSelector,useDispatch} from "react-redux";
import * as contactActions from '../../redux/action';
import { getFilter } from '../../redux/selectors';
import s from "./Filter.module.css";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (

    <label className={s.label}>
      Find contacts by name
      <input className={s.input} type="text" value={value}
        onChange={event => dispatch(contactActions.changeFilter(event.target.value))} />
    </label>
  );
}


// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   value:state.contacts.filter,
// })

// const mapDispatchToProps=(dispatch) => ({
//   onChange: e => dispatch(contactActions.changeFilter(e.target.value)
  
// })

// export default connect(mapStateToProps,mapDispatchToProps)(Filter);