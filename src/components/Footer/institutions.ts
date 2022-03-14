import logoUfrgsNegative from '@assets/logoUfgNegativo.png';
import logoUfgNegative from '@assets/logoUfrgsNegativo.png';
import logoSabanciNormal from '@assets/logoSabanciNormal.png';
import logoUnb from '@assets/logoUnb.png';
import logoNCF from '@assets/logoNCF.png';

interface Institution {
	name: string;
	logoImage: string;
}

const institutionLogoImages: Institution[] = [
	{
		name: 'Federal University of Rio Grande do Sul',
		logoImage: logoUfrgsNegative,
	},
	{
		name: 'Federal University of Goiás',
		logoImage: logoUfgNegative,
	},
	{
		name: 'Sabanci University',
		logoImage: logoSabanciNormal,
	},
	{
		name: 'Federal University of Brasília',
		logoImage: logoUnb,
	},
	{
		name: 'New College of Florida',
		logoImage: logoNCF,
	},
];

export default institutionLogoImages;