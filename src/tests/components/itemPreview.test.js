import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import ItemPreview from '../../components/itemPreview';
import store from '../../store'

describe('<ItemPreview />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><ItemPreview /></Provider>);
    });
});