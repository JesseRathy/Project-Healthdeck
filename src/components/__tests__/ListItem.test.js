
import { shallow,configure,mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import {connect} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import sinon from "sinon";
import ListItem from '../ListItem';
//Imports to get Enzyme to work if possible -> will work on later
configure({ adapter: new Adapter() });

test('renders correctly', () => {


  const wrapper = shallow(<ListItem myCards= {
    /*I've just created a const of all the values and called the card with these values.
    I have to call it */
  { name:'Test',
    bio:'I like Cats.',
    pro:"Doctor"}
  }/>);
  expect(wrapper).toMatchSnapshot();
});

test('it puts each item in the list item correctly', () => {


  const wrapper = shallow(<ListItem myCards= {
    /*I've just created a const of all the values and called the card with these values.
    I'm calling it like this for now as this works, but later I'd like to test and see if it works with putting them in one card and testing like that.
    --Jesse   */
  { name:'Steven',
    bio:'Fan of Matryoshka dolls and cicadas.',
    pro:"Physician"
  }}/>);
  const myProps = wrapper.props();
  console.log(myProps);
  console.log('\n');
  console.log(myProps.children.props.children.props.children.props.children + '\n');

  const nameProp = myProps.children.props.children.props.children.props.children[4];
  /*name Log*/
  console.log("Name =" + myProps.children.props.children.props.children.props.children[4]);

  const proProp = myProps.children.props.children.props.children.props.children[0];
  /*profession log*/
  console.log("Profession =" + myProps.children.props.children.props.children.props.children[0]);
  /*
  You have to get the props of whatever is mounted
  then you gotta call that prop even though you just got it
  then you gotta get the prop of that prop.
  Note: You have to do some 'deep diving' into each child to get the prop to compare to.
  I'll console.log() these to show it's actually pulling out what I need, and put them each in their own prop.
  There has to be a better way then just deep reaching into each of these to get one prop; I'll investigate later if I have time.
  /*

  --Jesse*/

  expect(nameProp).toEqual('Steven');
  expect(proProp).toEqual("Physician")

});
