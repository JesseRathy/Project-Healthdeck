import CardDetail from '../CardDetail';
import { shallow,configure,mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import sinon from "sinon";
//Imports to get Enzyme to work if possible -> will work on later
configure({ adapter: new Adapter() });

//const willMount = sinon.spy();
//const didMount = sinon.spy();
//const willUnmount = sinon.spy();


test('renders correctly', () => {
  /*you can't write these out individually; you have to call
  the entire card structure and then destructure it, giving it
  each piece. Would be nice if we could call each piece separately
  (functions, whatever) because this kind of sucks.*/

  const cardVals = {
    title:'Test',
    artist:'Smith',
    thumbnail_image:"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
    image:"https://i.imgur.com/K3KJ3w4h.jpg",
    url: 'google.ca'
  };

  const wrapper = shallow(<CardDetail card={cardVals}/>);

  expect(wrapper.find('card')).toBeDefined();

  expect(wrapper).toMatchSnapshot();

  });


  test('it puts each item in the card properly', () =>{
    const cardVals = {
      title:'Test',
      artist:'Smith',
      thumbnail_image:"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
      image:"https://i.imgur.com/K3KJ3w4h.jpg",
      url: 'google.ca'
    };

    const wrapper = mount(<CardDetail card={cardVals}/>);
    expect(wrapper.prop('card':'title')).toBeDefined();
    expect(wrapper.prop('card':'artist')).toBeDefined();
    expect(wrapper.prop('card':'thumbnail_image')).toBeDefined();
    expect(wrapper.prop('card':'image')).toBeDefined();
    expect(wrapper.prop('card':'url')).toBeDefined();
    //expect(wrapper.)
    //expect(wrapper.prop('artist')).toBeDefined();



});


/* Test idea modified from
https://medium.com/@indvinoth/react-native-how-to-test-onpress-event-using-jest-1cb19115863e
thanks!
Note: Doesn't work.... I'll have to figure out how to test the button.
*/
/*test('Button Works Correctly', () => {
  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('Link on press');
  const wrapper = shallow(<CardDetail card={"Test","Artist",null,null,"google.ca"} onPress={onPressEvent}/>);

  wrapper.find(Button).first().props().onPress();
  expect(onPressEvent.mock.calls.length).toBe(1);
});*/


//Alternate way to test; testing via mocking and sinon and Enzyme
  //This is a path I want to look at later as it seems like a much more solid way to show things have been tested
  //However, the issue is that it doesn't work, so I gotta go with a more suboptimal test.

 /*var mock = jest.mock('TouchableHighlight', () =>{
   const mockComponent = require('jest-react-native');
  return mockComponent('TouchableHighlight');
  });

   const spy = sinon.spy();
   const wrapper = shallow( <CardDetail card={"Test","Artist",null,null,"google.ca"}
                              onPress={spy}/>);
  find div and simulate click
    wrapper
     .find("Button")
        .simulate("press");
          expect(spy.calledOnce).toBe(true);
      expect(spy).to.have.property('callCount',1);
      expect(spy.calledWith(1)).to.equal(true);
      ensure it was clicked.
    /expect(spy.calledOnce).toBe(true);
  });*/
