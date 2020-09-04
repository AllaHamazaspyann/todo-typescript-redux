import React from 'react';
import TodoItem from './index';
import { store } from '../../store'
import { Provider } from 'react-redux';
import {render} from '@testing-library/react'

describe('TodoItem', () => {
    it('should check TodoItem component texts', () => {
        const result = render(<Provider store={store}>
                <TodoItem singleTodo={{text: 'test data', complete: 'test boolean', date: 'test date', section: 'test section'}}/>
            </Provider>);
        
        const {queryByLabelText, queryByText} = result;

        expect(queryByLabelText('test data')).not.toBeNull()
        expect(queryByText('Remaining Time')).not.toBeNull()
        expect(queryByText('Delete Todo')).not.toBeNull()
    })
})