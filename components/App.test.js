import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Testing App component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<App receiver="Hello" />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ receiver: 'Bye' });
    expect(wrapper).toMatchSnapshot();
  });
});
