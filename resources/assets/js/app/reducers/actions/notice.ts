import Http from '../../lib/Http';
import Notice from '../../model/Notice';
import ActionTypes from '../states/notice';
export function getNotices() {
    return {type: ActionTypes.GET_NOTICES};
};

export function loadNotices() {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.NOTICES_LOADING
        })
        Http
        .get('/api/notices')
        .then((result : Array < Notice >) => {
            dispatch({type: ActionTypes.LOAD_NOTICES_SUCCESS, data: result});
        }).catch(e => {
            dispatch({type: ActionTypes.LOAD_NOTICES_ERROR})
        })
    }
}
export function addNotice(text) {
    return (dispatch) => {
        dispatch({type: ActionTypes.NOTICE_UPLOADING});
        Http
            .post('/api/notices', {text: text})
            .then((result : Notice) => {
                dispatch({type: ActionTypes.ADD_NOTICE_SUCCESS, data: result});
            })
            .catch((e) => {
                dispatch({type: ActionTypes.ADD_NOTICE_ERROR, data: e});
            });
    }
}
