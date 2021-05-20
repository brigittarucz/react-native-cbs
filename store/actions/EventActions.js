import {SET_EVENTS} from '../constants/ConstantsActions';

// Report Ideas : store structure, project architecture considerations
// how models influenced the DB, NoSQL based model architecture

import Event from '../../models/Event.tsx';

const setUserEvents = () => {

    return async (dispatch, getState) => {

        const token = getState().UserReducer.idToken;

        const response = await fetch(
            'https://react-native-5adee-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=' + token, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        var events = await response.json(); 
        var eventsKeys = Object.keys(events);

        var eventsArr = [];

        if (!response.ok) {
            throw new Error('Could not save additional user data')
        } else {
            for(var key of eventsKeys) {
                var event = new Event(key,
                                      events[key].title,
                                      events[key].postType,
                                      events[key].organization,
                                      events[key].authorImage,
                                      events[key].startDate,
                                      events[key].endDate,
                                      events[key].location,
                                      events[key].thumbnail,
                                      events[key].description)
                
                eventsArr.push(event)
            }
            dispatch({type: SET_EVENTS, payload: eventsArr });
        }

   }
};

export default {
    setUserEvents,
}