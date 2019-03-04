import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Testing App component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<App receiver="Hi" />);
    expect(wrapper).toMatchSnapshot({ updateSnapshot: false });
    wrapper.setProps({ receiver: 'Bye' });
    expect(wrapper).toMatchSnapshot({ updateSnapshot: false });
  });
});
