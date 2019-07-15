import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import Item from '../../components/item';
import store from '../../store';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><Item /></Provider>);
    });
});