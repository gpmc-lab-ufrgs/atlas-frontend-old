import * as Styles from './styles';
import logoUfrgsNegative from '@assets/logoUfgNegativo.png';
import logoUfgNegative from '@assets/logoUfrgsNegativo.png';
import logoSabanciNormal from '@assets/logoSabanciNormal.png'; //change

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
];

function Footer() {
	return (
		<Styles.FooterContainer>
			{institutionLogoImages.map((institution, index) => {
				return (
					<Styles.InstitutionsLogo
						src={institution.logoImage}
						alt={`Logo image of ${institution.name}`}
					/>
				);
			})}
		</Styles.FooterContainer>
	);
}

export default Footer;
