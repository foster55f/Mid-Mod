import React from 'react';
import { shallow } from 'enzyme'
import ReservationForm from './ReservationForm'
import { isTSAnyKeyword } from '@babel/types';

describe('ReservationForm', () => {
    let wrapper;
    const mockAddReservation = jest.fn()

    beforeEach(() => {
        wrapper=shallow(<ReservationForm addReservation={mockAddReservation}/>)
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})