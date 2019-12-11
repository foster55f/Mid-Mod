import React from 'react';
import { shallow } from 'enzyme'
import ReservationForm from './ReservationForm'

describe('ReservationForm', () => {
    let wrapper;
    const mockAddReservation = jest.fn()

    beforeEach(() => {
        wrapper=shallow(<ReservationForm addReservation={mockAddReservation}/>)
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should update state when handleChange is called', () => {
        const mockEvent = { target: { name: 'name', value: 'Foster'} };
        const expected = 'Foster';
      
        wrapper.instance().handleChange(mockEvent);
      
        expect(wrapper.state('name')).toEqual(expected);
    });
    
    it('should call addReservation when submitReservation is called', () => {
        const mockEvent = { preventDefault: jest.fn() };
        wrapper.instance().submitReservation(mockEvent);
        
        expect(mockAddReservation).toHaveBeenCalled();
      });
    
})