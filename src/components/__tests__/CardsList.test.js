import CardsList from '../CardsList';
import { shallow,configure } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
configure({ adapter: new Adapter() });
//Imports to get Enzyme to work if possible -> will work on later


test('renders correctly', () => {
  const wrapper = shallow(<CardsList/>);
  expect(wrapper).toMatchSnapshot();
  //expect(tree).toMatchSnapshot();
});
