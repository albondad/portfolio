import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    .Skill-image {
      align-items: center;
      background-color: #cccccc;
      display: flex;
      height: 4rem;
      justify-content: center;
      width: 4rem;
    }

    .Skill-detail {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }
`;
