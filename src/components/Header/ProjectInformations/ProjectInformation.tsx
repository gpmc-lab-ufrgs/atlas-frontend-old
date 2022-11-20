import React from 'react';

import { Link } from 'react-router-dom';

import { sections } from './const';

import * as Styles from './styles';

interface Props {
  setOpen: (bool: boolean) => void;
}

const ProjectInformations: React.FC<Props> = ({ setOpen }) => {
  const handleCloseDrawer = () => setOpen(false);

  return (
    <Styles.ProjectInformationWrapper>
      <Styles.TitleWrapper>
        <Styles.Title> Atlas de Oportunidades </Styles.Title>

        <div aria-label="close-button">
          <Styles.CloseButton onClick={() => handleCloseDrawer()} />
        </div>
      </Styles.TitleWrapper>

      <Styles.SectionWrapper>
        {sections.map((choices, id) => (
          <Styles.Section key={id}>
            {choices.map((choice) => (
              <Link key={choice.title} to={choice.url} onClick={() => handleCloseDrawer()}>
                {choice.title}
              </Link>
            ))}
          </Styles.Section>
        ))}
      </Styles.SectionWrapper>
    </Styles.ProjectInformationWrapper>
  );
};

export default ProjectInformations;
