import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import {About, SignUp, Blurb} from '../../src/App';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import { mount, render, shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("spotcheck5", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<About />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Your About component should render your SignUp component', () => {
    const wrapper = mount(<About />);
    let signupComponents = wrapper.find(SignUp);
    expect(signupComponents).toHaveLength(1);
    })
    it('Your About component should render your SignUp component', () => {
        const wrapper = mount(<About />);
        let blurbComponent = wrapper.find(Blurb);
        expect(blurbComponent).toHaveLength(1);
        })
})






