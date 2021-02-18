export function reducer(state, action) {
  //   console.log('inreducer, action: ', action);
  //   console.log('inreducer, state: ', state);

  switch (action.type) {
    case 'SET_DATA':
      state.splice(0, state.length);
      return state.concat(action.data);
    case 'ADD_DATA':
      console.log('reducer: ', action);
      return state.concat({
        id: action.id,
        dsc: action.dsc,
        checked: action.checked,
        detail: action.detail,
      });
    case 'EDIT_FAVOR':
      return state.map((todo) => (todo.id === action.id ? {...todo, checked: action.checked} : todo));
    case 'EDIT_DATA':
      return state.map((todo) => (todo.id === action.id ? {...todo, detail: action.detail} : todo));
    case 'DELETE_DATA':
      return state.filter((todo) => todo.id !== action.id);
  }
}
