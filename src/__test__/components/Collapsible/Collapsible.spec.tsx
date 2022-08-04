import Collapsible from "@components/Collapsible";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('Collapsible', () => {
    test('Checking collapsible title', () => {
        render(<Collapsible title={'Teste'} />);
        const button = screen.getByRole('button', {name: 'Teste'});
        
        expect(button).not.toBeDisabled();
        expect(button).toHaveTextContent('Teste');
    });
});
