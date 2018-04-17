import Http from '../../lib/Http';
import Notice from '../../model/Notice';
import ActionTypes from '../states/notice';
const actions = {
    getNotices() {
        return new Promise(
            (resolve, reject) => {
                Http.get('/api/notices')
                .then((result: Response) => {return result.json()})
                .then((result: Array<Notice>) => {
                    resolve({
                        type: ActionTypes.GET_NOTICES,
                        data: result,
                    });
                })
            }
        );
    },
    addNotice(text) {
    }
}
export default actions;