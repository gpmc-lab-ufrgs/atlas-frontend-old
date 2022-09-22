import Collapsible from "@components/Collapsible";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('Collapsible', () => {
    test('Checking collapsible title', () => {
        render(<Collapsible title={'Teste'} />);
        const button = screen.getByRole('button', { name: 'Teste' });

        expect(button).not.toBeDisabled();
        expect(button).toHaveTextContent('Teste');
    });

    test('Checking if collapsible is opened', () => {
        const collapsible = render(<Collapsible title={'Teste'} />);

        const button = collapsible.getByRole('button');
        expect(button.className).toEqual('Collapsible__trigger is-open');
    });

    test('Checking if collapsible is closed', () => {
        const collapsible = render(<Collapsible title={'Teste'} />);

        const button = collapsible.getByRole('button');
        expect(button.className).not.toEqual('Collapsible__trigger is-close');
    });
});
