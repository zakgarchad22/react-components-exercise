import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, render, shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("exercise3", () => {
    it('dummy test', () => {
        expect(1).toEqual(1);
    })
})






