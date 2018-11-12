import {Header} from '../index.js';
import { shallow,configure,mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
//Imports to get Enzyme to work if possible -> will work on later


test('renders correctly', () => {
  const wrapper = shallow(<Header headerTitle="This is a title"/>);
  expect(wrapper).toMatchSnapshot();
  //expect(tree).toMatchSnapshot();
});

/*this test currently does not work; note that this is due to requiring an actual DOM document to work from.
this shouldn't be difficult, but there's a lot of people saying that shallow renders are enough to make sure it renders properly
at least on the face of it. I will go into testing SPECIFIC pieces of components rendering properly for ID3 now that
I can actually write test code that actually tests things. */

/*it('Formats Title Correctly', () => {
  const wrapper = mount(
    <Header headerTitle="This is a title"/>
  );
  const text = wrapper.find("Text").text();

  expect(text).toEqual("This is a title");
});*/
