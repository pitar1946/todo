import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, SORT_ITEMS} from '../types';

const initialState = {
  items: [],
  direction: {
    date: 'asc'
  }
}

export default function(state = initialState , action) {
     switch(action.type){
        case GET_ITEMS:
            return {
              ...state, items: action.payload
            };
          case ADD_ITEM:
             return {
               ...state,
               items: [...state.items, action.payload]
             }
         case DELETE_ITEM:
            return {
               ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case SORT_ITEMS:
          return {
            ...state,
            items: action.payload.sort((a, b) =>
              state.direction.date === 'asc'
              ? parseInt(a.date, 10) - parseInt(b.date, 10)
              : parseInt(b.date, 10) - parseInt(a.date, 10)
            ),
            direction: {
              date: state.direction.date === 'asc'
              ?  'desc'
              :  'asc'
             }
          }
         default:
             return state;
     }
}
