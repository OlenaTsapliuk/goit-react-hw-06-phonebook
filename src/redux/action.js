import shortid from "shortid";
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add', (name, number) => ({
  payload:{
      id: shortid.generate(),
      name,
      number,
    } 
}));
export const deleteContact = createAction('contact/delete');
export const changeFilter = createAction('contact/changeFilter');





//  export default {
// ADD:'contact/add',
// DELETE:'contact/delete',
// CHANGE_FILTER:'contact/changeFilter',
// }

// const addContact = (name, number) => ({
//   type: types.ADD,
//     payload:{
//       id: shortid.generate(),
//       name,
//       number,
//     } 
// })
// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
      
// });
// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
      
// });
// export default { addContact, deleteContact, changeFilter }