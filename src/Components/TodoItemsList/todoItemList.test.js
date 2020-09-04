import React from 'react';
import TodoItemList from './index';
import { store } from '../../store'
import { Provider } from 'react-redux';
import {render} from '@testing-library/react'

describe('TodoItemList', () => {
    it('should check TodoItemList component texts', () => {
        const result = render(<Provider store={store}>
                <TodoItemList/>
            </Provider>);
        
        const { queryByText } = result;
        
        expect(queryByText('Active')).not.toBeNull()
        expect(queryByText('Expired')).not.toBeNull()
        expect(queryByText('Completed')).not.toBeNull()
    })
})