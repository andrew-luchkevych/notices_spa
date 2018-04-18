import INotice from './interface';
export default class Notice implements INotice {
    id;
    text;
    created_at;
    updated_at;
}