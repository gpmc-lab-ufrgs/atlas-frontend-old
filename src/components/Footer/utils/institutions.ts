import logoTramontinaNegativo from '@assets/institutions/logoTramontinaNegativo.png';
import logoSabanciNormal from '@assets/institutions/logoSabanciNormal.png';
import logoUfrgsNegative from '@assets/institutions/logoUfrgsNegativo.png';
import logoUfgNegative from '@assets/institutions/logoUfgNegativo.png';
import logoFgvNegative from '@assets/institutions/logoNegativaFGV.png';
import logoMitNegative from '@assets/institutions/logoNegativaMIT.png';
import logoBologna from '@assets/institutions/logoBologna.png';
import logoUnb from '@assets/institutions/logoUnb.png';
import logoNCF from '@assets/institutions/logoNCF.png';
import logoCapes from '@assets/institutions/CAPES.png';
import logoCnpq from '@assets/institutions/CNPq.png';
import logoTram from '@assets/institutions/TRAMONTINA.png';
import logogovaust from '@assets/institutions/GOVERNO SUL AUSTRALIA.png';
import logobocconi from '@assets/institutions/BOCCONI.png';
import logofapergs from '@assets/institutions/FAPERGS.png';

interface Institutions {
  name: string;
  logoImage: string;
  size: number;
}

const developerInstitutionsLogoImages: Institutions[] = [
  {
    name: 'Massachusetts Institute of Technology',
    logoImage: logoMitNegative,
    size: 35,
  },
  {
    name: 'Federal University of Rio Grande do Sul',
    logoImage: logoUfrgsNegative,
    size: 30,
   },
   {
    name: 'Sabanci University',
    logoImage: logoSabanciNormal,
    size: 30,
  },
  {
    name: 'Bocconi',
    logoImage: logobocconi,
    size: 30,
  },
  {
    name: 'University of Bologna',
    logoImage: logoBologna,
    size: 30,
  },
  {
    name: 'Federal University of Goiás',
    logoImage: logoUfgNegative,
    size: 40,
  },
  {
    name: 'Federal University of Brasília',
    logoImage: logoUnb,
    size: 20,
  },
  {
    name: 'Fundação Getulio Vargas',
    logoImage: logoFgvNegative,
    size: 75,
  },
  {
    name: 'Governo Sul Austrália',
    logoImage: logogovaust,
    size: 35,
  },
];

const supporterInstitutionLogoImages: Institutions[] = [
  {
    name: 'Tramontina',
    logoImage: logoTram,
    size: 110,
  },
  {
    name: 'Cnpq',
    logoImage: logoCnpq,
    size: 80,
  },
  {
    name: 'Capes',
    logoImage: logoCapes,
    size: 90,
  },
  {
    name: 'Fapergs',
    logoImage: logofapergs,
    size: 35,
  },
];

export { developerInstitutionsLogoImages };
export { supporterInstitutionLogoImages };
