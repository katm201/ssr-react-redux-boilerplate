import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../index';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Home />);
    expect(renderedComponent).toBeDefined();
  });
});
