import React from "react";

import { Link } from "react-router-dom";

import { sections } from "./const";

import * as Styles from "./styles";

interface Props {
  setOpen: (bool: boolean) => void;
}

const ProjectInformations: React.FC<Props> = ({ setOpen }) => {
  return (
    <Styles.ProjectInformationWrapper>
      <Styles.TitleWrapper>
        <Styles.Title> Atlas of Opportunity </Styles.Title>

        <Styles.CloseButton onClick={() => setOpen(false)} />
      </Styles.TitleWrapper>

      <Styles.SectionWrapper>
        {sections.map((choices, id) => (
          <Styles.Section key={id}>
            {choices.map((choice, id) => (
              <Link key={id} to={choice.url} onClick={() => setOpen(false)}>
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
