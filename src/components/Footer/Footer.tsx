import * as Styles from './styles';
import institutionLogoImages from './institutions';

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
