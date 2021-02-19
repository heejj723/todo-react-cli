export const SET_DATA = 'SET_DATA';
export const ADD_DATA = 'ADD_DATA';
export const EDIT_FAVOR = 'EDIT_FAVOR';
export const EDIT_DATA = 'EDIT_DATA';
export const DELETE_DATA = 'DELETE_DATA';
//param: data
export function setData(data) {
  return {
    type: SET_DATA,
    data: data,
  };
}

export function addData(data) {
  console.log('actions: ', data);
  return {
    type: ADD_DATA,
    id: data.id,
    dsc: data.dsc,
    checked: data.checked,
    detail: data.detail,
  };
}

export function editFavor(data) {
  return {
    type: EDIT_FAVOR,
    id: data.id,
    dsc: data.dsc,
    checked: data.checked,
    detail: data.detail,
  };
}

export function editData(data) {
  return {
    type: EDIT_DATA,
    id: data.id,
    dsc: data.dsc,
    checked: data.checked,
    detail: data.detail,
  };
}

export function deleteData(data) {
  return {
    type: DELETE_DATA,
    id: data.id,
  };
}
