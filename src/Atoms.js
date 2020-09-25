import {
	atom,
	selector,
	useRecoilState,
	useRecoidValue,
} from 'recoil';

export const expandAllAtom = atom({
	key: 'expandAllState',
	default: true,
});

export const curAppIndexAtom = atom({
	key: 'curAppIndex',
	default: null,
});
