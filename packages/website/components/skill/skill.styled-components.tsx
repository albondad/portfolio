import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    .Skill-icon {
      align-items: center;
      display: flex;
      height: 4rem;
      justify-content: center;
      width: 4rem;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    .Skill-label {
      font-size: 1rem;
      margin-top: 0.5rem;
      text-align: center;
    }
  }
`;
