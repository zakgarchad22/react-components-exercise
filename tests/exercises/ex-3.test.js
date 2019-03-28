import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../../src/App';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import { mount, render, shallow, configure} from 'enzyme';
// import jsdom from "jsdom";

configure({ adapter: new Adapter() });
// const dom = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.document = dom;
// global.window = dom.defaultView;

describe("exercise3", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });   
      it("Passing a paramater above 30 should create a div with a red background color", () => {
          const wrapper = mount(<App />);
          let para = wrapper.find('div').getElement();
          console.log(para)
          let compStyles = wrapper.getComputedStyle(para);
          console.log(compStyles)
          expect(compStyles).to.have.property({backgroundColor: 'red'})       });

})






