import Notice from '../model/Notice';
interface IState {
    notices: Array<Notice>
}
const initialState = {
    notices: [],
}

export default function noticesState(state = initialState) {
    return state;
}