import React from 'react';

import { developerInstitutionsLogoImages, supporterInstitutionLogoImages } from './utils/institutions';

import { Box } from '@mui/material';

import * as Styles from './styles';

const isEnglish = window.location.href.includes('/en');

function Footer() {
  return (
    <Styles.FooterContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center" paddingRight={5} >
        {developerInstitutionsLogoImages.map((institution, id) => (
          <Styles.InstitutionsLogo
            key={id}
            src={institution.logoImage}
            alt={`Logo image of ${institution.name}`}
            size={institution.size}
            aria-label="institution-logo"
          />
        ))}
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Styles.FooterText>&nbsp;&nbsp;<b>Support:</b></Styles.FooterText>
        {supporterInstitutionLogoImages.map((institution, id) => (
          <Styles.InstitutionsLogo
            key={id}
            src={institution.logoImage}
            alt={`Logo image of ${institution.name}`}
            size={institution.size}
            aria-label="institution-logo"
          />
        ))}
      </Box>
    </Styles.FooterContainer>
  );
}

export default Footer;
