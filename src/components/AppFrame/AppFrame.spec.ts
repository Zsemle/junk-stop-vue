import { shallowMount } from '@vue/test-utils';
import AppFrame from './AppFrame.vue';

describe('AppFrame.vue', () => {
  it('renders without errors', () => {
    const wrapper = shallowMount(AppFrame);
    expect(wrapper).toMatchSnapshot();
  });
});
