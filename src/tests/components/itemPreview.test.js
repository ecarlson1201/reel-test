import React from 'react';
import { shallow } from 'enzyme';

import ItemPreview from '../../components/itemPreview';

describe('<ItemPreview />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemPreview />);
    });
});