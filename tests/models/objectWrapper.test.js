import {
    isEmpty,
} from '@/models/objectWrapper';

const globalObj = {
    test: 123,
    jest: 'test',
};

describe('objectWrapper/isEmpty', () => {
    it('WHEN object is not empty THEN false', () => {
        const fun = isEmpty(globalObj);
        expect(fun).toBeFalsy();
    });

    it('WHEN object is empty THEN true', () => {
        const localObj = {};
        const fun = isEmpty(localObj);
        expect(fun).toBeTruthy();
    });

    it('WHEN no parameters THEN null', () => {
        const fun = isEmpty();
        expect(fun).toBeNull();
    });
});
