import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectInformations from '@components/Header/ProjectInformations';
import { BrowserRouter } from 'react-router-dom';

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
});
