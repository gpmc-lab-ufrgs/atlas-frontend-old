import logoTramontinaNegativo from '@assets/logoTramontinaNegativo.png';
import logoSabanciNormal from '@assets/logoSabanciNormal.png';
import logoUfrgsNegative from '@assets/logoUfrgsNegativo.png';
import logoUfgNegative from '@assets/logoUfgNegativo.png';
import logoFgvNegative from '@assets/logoNegativaFGV.png';
import logoMitNegative from '@assets/logoNegativaMIT.png';
import logoUnb from '@assets/logoUnb.png';
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
		name: 'Fundação Getulio Vargas',
		logoImage: logoFgvNegative,
		size: 110,
	},
	{
		name: 'Federal University of Rio Grande do Sul',
		logoImage: logoUfrgsNegative,
		size: 35,
	},
	{
		name: 'New College of Florida',
		logoImage: logoNCF,
		size: 30,
	},
	{
		name: 'Federal University of Goiás',
		logoImage: logoUfgNegative,
		size: 50,
	},
	{
		name: 'Massachusetts Institute of Technology',
		logoImage: logoMitNegative,
		size: 50,
	},
	{
		name: 'Federal University of Brasília',
		logoImage: logoUnb,
		size: 30,
	},
	{
		name: 'Sabanci University',
		logoImage: logoSabanciNormal,
		size: 40,
	},
];

const supporterInstitutionLogoImages: SupporterInstiturions[] = [
	{
		name: 'Tramontina',
		logoImage: logoTramontinaNegativo,
		size: 150,
	},
];

export { developerInstitutionsLogoImages };
export { supporterInstitutionLogoImages };
