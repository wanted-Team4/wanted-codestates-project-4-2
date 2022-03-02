import { atom } from 'recoil';

export const Data = atom({
    key: 'Data',
    default: [],
});
export const SearchName = atom({
    key: 'name',
    default: '',
});
export const CommentList = atom({
    key: 'comment',
    default: '',
});
