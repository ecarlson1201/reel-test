import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import Calculator from '../../components/calculator';
import store from '../../store';

describe('<Calculator />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><Calculator /></Provider>);
    });
});