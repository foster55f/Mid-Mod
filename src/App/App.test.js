import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should update the state with a new reservation when addReservation is called', () => {
    const wrapper = shallow(<App />)
    const mockReservation = { id: 55998882, name: 'foster', date: "2019-12-15", time: "5:00", number: "55" };
    const expected=[mockReservation]
    expect(wrapper.state('reservations')).toEqual();
    wrapper.instance().addReservation(mockReservation)
    expect(wrapper.state('reservations')).toEqual([expected]);
  })
})
