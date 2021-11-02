import { shallowMount } from '@vue/test-utils';
import CallCustomer from './CallCustomer.vue';

describe('AppFrame.vue', () => {
  it('renders call link if phone number is available', () => {
    const props = {
      phoneNumber: '0612345678',
    };
    const wrapper = shallowMount(CallCustomer, {
      propsData: props,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders plain text if phone number is not available', () => {
    const wrapper = shallowMount(CallCustomer);
    expect(wrapper).toMatchSnapshot();
  });
});
