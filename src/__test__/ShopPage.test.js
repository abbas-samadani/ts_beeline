
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Main } from '../components/main/Main';
import { Header } from '../components/header/Header';

it('shopping page must have element ', () => {
    render(<Main />);
    const productsBox = screen.queryByTestId('product_list');
    expect(productsBox).toContainElement;
});


it('card should have a value in the first render ', () => {
    render(<Header />);
    const card = screen.getByTestId('qty');
    expect(card).toHaveValue;
});

