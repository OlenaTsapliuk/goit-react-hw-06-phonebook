import { connect } from "react-redux";
import contactActions from '../../redux/action';
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input className={s.input} type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = (state) => ({
  value:state.contacts.filter,
})

const mapDispatchToProps=(dispatch) => ({
  onChange: e => dispatch(contactActions.changeFilter.e.target.value)
  
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
