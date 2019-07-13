import React from 'react';
import { shallow } from 'enzyme';

import ItemList from '../../components/itemList';

describe('<ItemList />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemList />);
    });
});