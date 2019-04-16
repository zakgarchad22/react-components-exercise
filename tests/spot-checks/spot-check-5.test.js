import React from 'react';
import ReactDOM from 'react-dom';
import { AboutUs, SignUp, Blurb } from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("spotcheck5", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AboutUs />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Your About component should render your SignUp component', () => {
        const wrapper = mount(<AboutUs />);
        let signupComponents = wrapper.find(SignUp);
        expect(signupComponents, 'could not find a SignUp component').toHaveLength(1);
    })
    it('Your About component should render your SignUp component', () => {
        const wrapper = mount(<AboutUs />);
        let blurbComponent = wrapper.find(Blurb);
        expect(blurbComponent, 'could not find a Blurb component').toHaveLength(1);
    })
})






