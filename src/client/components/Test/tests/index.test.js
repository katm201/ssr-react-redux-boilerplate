import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Test from '../index';

configure({ adapter: new Adapter() });

describe('<Test />', () => { 
  it('should render', () => {
    const renderedComponent = shallow(<Test />);
    expect(renderedComponent).toBeDefined();
  });
});