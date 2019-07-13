import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import ItemList from '../../components/itemList';
import store from '../../store'

describe('<ItemList />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><ItemList /></Provider>);
    });
});