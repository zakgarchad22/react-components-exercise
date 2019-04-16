import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import { mount, render, shallow, configure } from 'enzyme';
import App from '../../src/App';
import NavBar from '../../src/components/NavBar';
import Menu from '../../src/components/Menu';
import Checkout from '../../src/components/Checkout';
import Item from '../../src/components/Item';


configure({ adapter: new Adapter() });

describe("exercise4", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Your App component should render the NavBar, Menu, and Checkout components', () => {
        const wrapper = mount(<App />);
        let navComponent = wrapper.find(NavBar);
        let menuComponent = wrapper.find(Menu);
        let checkoutComponent = wrapper.find(Checkout);
        expect(navComponent, 'The NavBar component should be returned in the render function of App').toHaveLength(1);
        expect(menuComponent, 'The Menu component should be returned in the render function of App').toHaveLength(1);
        expect(checkoutComponent, 'The Checkout component should be returned in the render function of App').toHaveLength(1);

    })
    it('The Menu component should render the Item component once', () => {
        const wrapper = mount(<Menu />);
        let itemComponent = wrapper.find(Item);
        expect(itemComponent, 'The Item component should be returned in the render function of the Menu component').toHaveLength(1);

    })
    it('The Checkout component should render the Item component once', () => {
        const wrapper = mount(<Checkout />);
        let itemComponent = wrapper.find(Item);
        expect(itemComponent, 'The Item component should be returned in the render function of the Checkout component').toHaveLength(1);
    })
    it("Each Component should render a div with its class' name as text", () => {
        const wrapper = mount(<App />);
        let itemComponent = wrapper.find(Item).first();
        let navComponent = wrapper.find(NavBar);
        let menuComponent = wrapper.find(Menu);
        let checkoutComponent = wrapper.find(Checkout);
        expect(itemComponent.text(), "The Item component should render a div with the word 'Item'").toBe('Item');
        expect(navComponent.text(), "The NavBar component should render a div with the word 'NavBar'").toBe('NavBar');
        expect(menuComponent.text(), "The Menu component should render a div with the word 'Menu'").toContain('Menu');
        expect(checkoutComponent.text(), "The Checkout component should render a div with the word 'Checkout'").toContain('Checkout');

    })
})






