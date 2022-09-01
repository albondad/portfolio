import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & .SkillList-constrainedContent {
    .SkillList-heading {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5em;
    }

    .SkillList-list {
      display: flex;
      gap: 1.25rem;
      flex-wrap: wrap;
      margin-top: 1.25rem;
    }
  }
`;
