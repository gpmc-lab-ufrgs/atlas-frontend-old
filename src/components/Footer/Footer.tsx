import {
  developerInstitutionsLogoImages,
  supporterInstitutionLogoImages,
} from "./institutions";

import { Box } from "@mui/material";

import * as Styles from "./styles";

function Footer() {
  return (
    <Styles.FooterContainer>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingRight={5}
      >
        {developerInstitutionsLogoImages.map((institution) => (
          <Styles.InstitutionsLogo
            src={institution.logoImage}
            alt={`Logo image of ${institution.name}`}
            size={institution.size}
          />
        ))}
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Styles.FooterText>Apoio:</Styles.FooterText>
        {supporterInstitutionLogoImages.map((institution) => (
          <Styles.InstitutionsLogo
            src={institution.logoImage}
            alt={`Logo image of ${institution.name}`}
            size={institution.size}
          />
        ))}
      </Box>
    </Styles.FooterContainer>
  );
}

export default Footer;
