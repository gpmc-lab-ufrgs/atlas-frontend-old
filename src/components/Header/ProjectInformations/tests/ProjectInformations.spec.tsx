import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '@tests/helpers/render';

import ProjectInformations from '@components/Header/ProjectInformations';
import Header from '@components/Header';

describe('Project Informations', () => {
  const setOpenMock = jest.fn();

  test('should rendet title name', () => {
    render(<ProjectInformations setOpen={setOpenMock} />);

    screen.getByText('Atlas de Oportunidades');
  });

  test('should render close button', async () => {
    render(
      <>
        <Header isComparisonModeOn comparisonType="grid" setComparisonType={() => {}} />
        <ProjectInformations setOpen={setOpenMock} />
      </>,
    );

    screen.getByLabelText('close-button');
    const menuButton = screen.getByLabelText('menu-button');

    userEvent.click(menuButton);
  });

  test('should render sections names', () => {
    render(<ProjectInformations setOpen={setOpenMock} />);

    const sections = ['Atlas de Oportunidades', 'Sobre o Atlas', 'Contribuidores'];

    sections.forEach((section) => {
      screen.getByText(section);
    });
  });
});
