import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../../src/App';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import { mount, render, shallow, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe("spot-check-3", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      
      it("The first item in the array that you return in your render function should be your morning greeting function", () => {
        App.prototype.getMorningGreeting = function () {
            return <div>mock</div>
        }
        const wrapper = mount(<App />);
        let text = wrapper.find('div').first().text()
        expect(text).toBe("mock");
    });
    it("The second item in the array that you return in your render function should be your evening greeting function", () => {
        App.prototype.getEveningGreeting = function () {
            return <div>mock</div>
        }
        const wrapper = mount(<App />);
        let text = wrapper.find('div').at(1).text()
        console.log(text)
        expect(text).toBe("mock");
    });
    it('The third item in the array that you return in your render function should be a <p> element which says "some text" ', () => {
        const wrapper = mount(<App />);
        let text = wrapper.find('p').text()
        console.log(text)
        expect(text).toBe("some text");
    });
})






