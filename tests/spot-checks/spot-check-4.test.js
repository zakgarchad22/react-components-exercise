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

describe("spotcheck4", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("You must render a div with a class of banner which says 'THE LOGO'", () => {
    const wrapper = mount(<App />);
    expect(banner.exists(), "There should be a div with a class of 'banner'").toBeTruthy()
    expect(banner.text().toUpperCase().trim(), "Your div should have the text 'THE LOGO'").toBe('THE LOGO')
    })
})






