import React from 'react';
import { shallow } from 'enzyme';
import ReservationCard from './ReservationCard';

describe('ReservationCard', () => {
    it('renders the title of the idea in <h1> tags', () => {
      const wrapper = shallow(<ReservationCard name="foster" />);
      const name = <h1>foster</h1>;
  
      expect(wrapper.contains(name)).toEqual(true);
    });
  });