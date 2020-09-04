import React from 'react';
import AddTodoForm from './index';
import { store } from '../../store'
import { Provider } from 'react-redux';
import {render} from '@testing-library/react'

describe('AddTodoForm', () => {
    it('should check add to do component inputs labels', () => {
        const result = render(<Provider store={store}>
                <AddTodoForm/>
            </Provider>);
        
        const {queryByLabelText, queryByText} = result

        expect(queryByText('Enter todo text')).not.toBeNull()
        expect(queryByLabelText('Due date')).not.toBeNull()
        expect(queryByText('Add todo')).not.toBeNull()
    })
})