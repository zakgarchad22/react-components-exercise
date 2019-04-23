import React from 'react';
import ReactDOM from 'react-dom';
import { App, AboutUs, SignUp, Blurb } from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, render, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("spotcheck5", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AboutUs />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('You should render the AboutUs component inside #spotcheck-5', () => {
        const wrapper = mount(<App />);
        let aboutUsComponent = wrapper.find('#spotcheck-5 > AboutUs');
        expect(aboutUsComponent.exists(), 'Could not find an AboutUs component inside the #spotcheck-5 div').toBeTruthy();
    })

    it('Your About component should render your SignUp component', () => {
        const wrapper = mount(<AboutUs />);
        let signupComponents = wrapper.find(SignUp);
        expect(signupComponents, 'Could not find a SignUp component inside AboutUs component').toHaveLength(1);
    })
    it('Your About component should render your SignUp component', () => {
        const wrapper = mount(<AboutUs />);
        let blurbComponent = wrapper.find(Blurb);
        expect(blurbComponent, 'Could not find a Blurb component inside AboutUs component').toHaveLength(1);
    })
})






