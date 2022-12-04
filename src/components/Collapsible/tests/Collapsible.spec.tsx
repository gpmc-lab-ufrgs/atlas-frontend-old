import { screen } from '@testing-library/react';
import { render } from '@tests/helpers/render';
import userEvent from '@testing-library/user-event';

import Collapsible from '@components/Collapsible';

describe('<Collapsible />', () => {
  test('should render checking collapsible title', async () => {
    render(<Collapsible title="Test">test content</Collapsible>);
    const button = screen.getByRole('button', { name: 'Test' });

    await userEvent.click(button);

    screen.getByText('Test');
    screen.getByText('test content');
  });
});
