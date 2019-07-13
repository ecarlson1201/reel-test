import React from 'react';
import { shallow } from 'enzyme';

import Item from '../../components/item';

describe('<Item />', () => {
    it('Renders without crashing', () => {
        shallow(<Item />);
    });
});