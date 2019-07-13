import React from 'react';
import { shallow } from 'enzyme';

import StatusButton from '../../components/statusButton';

describe('<StatusButton />', () => {
    it('Renders without crashing', () => {
        shallow(<StatusButton />);
    });
});