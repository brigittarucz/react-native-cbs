import {SET_EVENTS} from '../constants/ConstantsActions';

const EventReducer = (state = {events: []}, action) => {
switch(action.type) {
   case SET_EVENTS: {
      console.log(action.payload)
      return {
          events: action.payload
      }
   }
   default:
       return state
}
}

export default EventReducer;