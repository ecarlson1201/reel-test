import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import StatusButton from '../../components/statusButton';
import store from '../../store'

describe('<StatusButton />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><StatusButton /></Provider>);
    });
});