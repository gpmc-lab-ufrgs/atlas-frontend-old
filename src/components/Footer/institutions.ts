import logoTramontina from '@assets/logoTramontina.png';
import logoSabanci from '@assets/logoSabanci.png';
import logoUfrgs from '@assets/logoUFRGS.png';
import logoUfg from '@assets/logoUFG.png';
import logoFgv from '@assets/logoFGV.png';
import logoMit from '@assets/logoMIT.png';
import logoBologna from '@assets/logoBologna.svg';
import logoUnb from '@assets/logoUNB.png';
import logoNCF from '@assets/logoNCF.png';

interface DeveloperInstitutions {
  name: string;
  logoImage: string;
  size: number;
}

interface SupporterInstiturions {
  name: string;
  logoImage: string;
  size: number;
}

const developerInstitutionsLogoImages: DeveloperInstitutions[] = [
  {
    name: 'Federal University of Goiás',
    logoImage: logoUfg,
    size: 70,
  },
  {
    name: 'University of Bologna',
    logoImage: logoBologna,
    size: 45,
  },
  {
    name: 'New College of Florida',
    logoImage: logoNCF,
    size: 35,
  },
  {
    name: 'Federal University of Rio Grande do Sul',
    logoImage: logoUfrgs,
    size: 35,
  },
  {
    name: 'Massachusetts Institute of Technology',
    logoImage: logoMit,
    size: 25,
  },
  {
    name: 'Sabanci University',
    logoImage: logoSabanci,
    size: 70,
  },
  {
    name: 'Federal University of Brasília',
    logoImage: logoUnb,
    size: 31,
  },
  {
    name: 'Fundação Getulio Vargas',
    logoImage: logoFgv,
    size: 20,
  },
];

const supporterInstitutionLogoImages: SupporterInstiturions[] = [
  {
    name: 'Tramontina',
    logoImage: logoTramontina,
    size: 150,
  },
];

export { developerInstitutionsLogoImages };
export { supporterInstitutionLogoImages };
