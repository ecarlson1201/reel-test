import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import Nav from '../../components/nav';
import store from '../../store'

describe('<Nav />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><Nav /></Provider>);
    });
});