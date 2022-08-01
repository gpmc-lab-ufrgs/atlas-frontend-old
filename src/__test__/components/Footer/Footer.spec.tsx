import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@components/Footer';

describe('Footer', () => {
  test('Test Federal University of Goiás image', () => {
    render(<Footer/>);
    const UFG = screen.getAllByRole('img')[0] as HTMLImageElement;
    expect(UFG.src).toContain('/logoUfgNegativo.png');
    expect(UFG.alt).toContain('Logo image of Federal University of Goiás');
  });

  test('Test University of Bologna image', () => {
    render(<Footer/>);
    const UniBo = screen.getAllByRole('img')[1] as HTMLImageElement;
    expect(UniBo.src).toContain('/logoBologna.png');
    expect(UniBo.alt).toContain('Logo image of University of Bologna');
  });

  test('Test NCF image', () => {
    render(<Footer/>);
    const NCF = screen.getAllByRole('img')[2] as HTMLImageElement;
    expect(NCF.src).toContain('/logoNCF.png');
    expect(NCF.alt).toContain('Logo image of New College of Florida');
  });

  test('Test URFGS image', () => {
    render(<Footer/>);
    const UFRGS = screen.getAllByRole('img')[3] as HTMLImageElement;
    expect(UFRGS.src).toContain('/logoUfrgsNegativo.png');
    expect(UFRGS.alt).toContain('Logo image of Federal University of Rio Grande do Sul');
  });

  test('Test MIT image', () => {
    render(<Footer/>);
    const MIT = screen.getAllByRole('img')[4] as HTMLImageElement;
    expect(MIT.src).toContain('/logoNegativaMIT.png');
    expect(MIT.alt).toContain('Logo image of Massachusetts Institute of Technology');
  });

  test('Test Sabanci University image', () => {
    render(<Footer/>);
    const Sabancy = screen.getAllByRole('img')[5] as HTMLImageElement;
    expect(Sabancy.src).toContain('/logoSabanciNormal.png');
    expect(Sabancy.alt).toContain('Logo image of Sabanci University');
  });

  test('Test UNB image', () => {
    render(<Footer/>);
    const UNB = screen.getAllByRole('img')[6] as HTMLImageElement;
    expect(UNB.src).toContain('/logoUnb.png');
    expect(UNB.alt).toContain('Logo image of Federal University of Brasília');
  });

  test('Test FGV image', () => {
    render(<Footer/>);
    const FGV = screen.getAllByRole('img')[7] as HTMLImageElement;
    expect(FGV.src).toContain('/logoNegativaFGV.png');
    expect(FGV.alt).toContain('Logo image of Fundação Getulio Vargas');
  });

  test('Test Tramontina image', () => {
    render(<Footer/>);
    const UNB = screen.getAllByRole('img')[8] as HTMLImageElement;
    expect(UNB.src).toContain('/logoTramontinaNegativo.png');
    expect(UNB.alt).toContain('Logo image of Tramontina');
  });

  test('Test whether Footer contains "Apoio:"', () => {
    const { getByText } = render(<Footer />);
    const apoio = getByText('Apoio:');
    expect(apoio).toBeTruthy;
  });
});
