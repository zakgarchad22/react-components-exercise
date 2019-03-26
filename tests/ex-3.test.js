import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../src/App';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import { mount, render, shallow, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe("exercise3", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });   
      it("Passing a paramater above 30 should create a div with a class of 'hell-scape'", () => {
          const wrapper = mount(<App />);
         wrapper.instance().getClassName(40)
          let box = wrapper.find('div');
          console.log(box)
          expect(box).toHaveProperty('background-color', 'aqua')
      });
    //   it("Passing a paramater between 15 and 30 should create a div with a class of 'fair'", () => {
    //     const wrapper = shallow(<App />);
    //    wrapper.instance().getClassName(25)
    //     expect(wrapper.find('div').hasClass('hell-scape')).toBe(true);
    // });
    // it("Passing a paramater below 15 should create a div with a class of 'hell-scape'", () => {
    //     const wrapper = shallow(<App />);
    //    wrapper.instance().getClassName(10)
    //     expect(wrapper.find('div').hasClass('hell-scape')).toBe(true);
    // });
      

})






