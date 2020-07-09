export default (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        // console.log(...state.item);
            return ({
                ...state,
                item: [action.payload, ...state.item]
            });
        
        case 'DELETE_ITEM':
            return ({
                ...state,
                item: state.item.filter(item => item.id !== action.payload)
            });
        
        default:
            return state;
    }
  }