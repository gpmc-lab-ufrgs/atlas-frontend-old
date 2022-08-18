import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProjectInformations from '@components/Header/ProjectInformations';
import Drawer from '@components/Drawer';
import { BrowserRouter } from 'react-router-dom';
import Header from '@components/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Project Informations', () => {
  test('Test title name',  () => {
    const { getByText } = render(
      <BrowserRouter>
        <ProjectInformations setOpen={jest.fn()}/>
      </BrowserRouter>
    );
    const title = getByText('Atlas de Oportunidades');
    expect(title).toBeTruthy;
  });

  test('Test to close button behavior', async () => {
    const { getByRole } = render( 
      <BrowserRouter>
        <Header isComparisonModeOn comparisonType="grid" setComparisonType={() => {}} />
        <Drawer anchor='right' open={false} setOpen={jest.fn()}/>
        <ProjectInformations setOpen={jest.fn()}/>
      </BrowserRouter>
    );
    const MenuButton = await getByRole('MenuButton');

    const closeButton = await getByRole('closeButton');

    fireEvent(
      MenuButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(closeButton).toBeInTheDocument();
  });

  test('Test sections names', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ProjectInformations setOpen={jest.fn()}/>
      </BrowserRouter>
    );
    const sections = ['Atlas de Oportunidades', 'Sobre o Atlas', 'Contribuidores'];
    sections.forEach(section => {
      const sectionName = getByText(section);
      expect(sectionName).toBeTruthy;
    } );

  } );
});
