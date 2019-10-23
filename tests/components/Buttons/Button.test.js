import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Buttons/Button';

describe('Buttons/Button', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Button);
    });

    it('Component is rendered', () => {
        expect(wrapper.is(Button)).toBe(true);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Component is named well', () => {
        expect(typeof Button.name).toBe('string');
        expect(Button.name).toEqual('Button');
    });
});
