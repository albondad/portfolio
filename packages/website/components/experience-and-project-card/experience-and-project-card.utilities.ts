export const getStyles = () => `
  &.ExperienceAndProjectsCard {
    background-color: #ffffff;
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 0.75rem;
  }

  &.ExperienceAndProjectsCard:hover {
    opacity: 0.5;
  }

  &.ExperienceAndProjectsCard .ExperienceAndProjectsCardImageContainer  {
    background-color: #cccccc;
    padding-top: calc(100% * (9 / 16));
    width: 100%;
  }

  &.ExperienceAndProjectsCard .ExperienceAndProjectsCardHeadingText {
    font-size: 1.5rem;
    line-height: 1.5em;
    margin-bottom: 0.25rem;
  }

  &.ExperienceAndProjectsCard .ExperienceAndProjectsCardBodyText {
    font-size: 1rem;
    line-height: 1.5em;
  }
`;
