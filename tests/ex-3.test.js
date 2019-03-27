import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../src/App';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import { mount, render, shallow, configure} from 'enzyme';
import jsdom from "jsdom";

configure({ adapter: new Adapter() });
const dom = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = dom;
global.window = dom.defaultView;

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
          expect(box.get(0).getDOMNode().getComputedStyle()).to.have.property({backgroundColor: 'red'})       });

})






