import institutionLogoImages from "./institutions";

import { Box } from "@mui/material";

import * as Styles from "./styles";

function Footer() {
  return (
    <Styles.FooterContainer>
      <Box
        width="60%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {institutionLogoImages.map((institution) => (
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
