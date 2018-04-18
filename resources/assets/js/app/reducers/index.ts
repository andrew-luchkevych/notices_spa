import Notice from '../model/Notice';
import NoticesStates from './states/notice';
interface IState {
    notices : Array < Notice >;
    loading : false;
}
const initialState = {
    notices: []
}

export default function noticesState(state = initialState, action) {
    switch (action.type) {
        case NoticesStates.NOTICE_UPLOADING:
            console.log('notice uploading', action);
            return state;
        case NoticesStates.ADD_NOTICE_SUCCESS:
            return {
                ...state,
                notices: [...state.notices, action.data]
            };
        case NoticesStates.NOTICES_LOADING:
            return {
                ...state,
                loading: true
            }
        case NoticesStates.LOAD_NOTICES_SUCCESS:
            const notices:
            Array < Notice > = action.data;
            return {
                ...state,
                notices: notices,
                loading: false
            };
        case NoticesStates.GET_NOTICES:
            return state.notices;
        default:
            return state;
    }

}