import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../../src/App';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import { mount, render, shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("spotcheck2", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("The first div rendered on your page should have an id of 'nav'", () => {
        const wrapper = mount(<App />);
        let navDiv = wrapper.find('#nav')
        expect(navDiv.exists(), "There should be a div with an id of 'nav'").toBeTruthy()
    });
    it("You must render an h1 element which says welcome after the NavBar component", () => {
        const wrapper = mount(<App />);
        let welcome = wrapper.find('#spotcheck-2').children().at(2)
        expect(welcome.exists(), "There should be an h1 element after the NavBar div").toBeTruthy()
        expect(welcome.text().trim(), "The h1 text must say 'Welcome!'").toBe('Welcome!')
    });
})






