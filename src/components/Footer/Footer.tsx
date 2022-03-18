import * as Styles from './styles';
import institutionLogoImages from './institutions';

function Footer() {
	return (
		<Styles.FooterContainer>
			{institutionLogoImages.map((institution, index) =>
				(
					<Styles.InstitutionsLogo
						key={index}
						src={institution.logoImage}
						alt={`Logo image of ${institution.name}`}
					/>
				)
			)}
		</Styles.FooterContainer>
	);
}

export default Footer;
