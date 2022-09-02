import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    background-color: #000000;

    .Footer-constrainedContent {
      align-items: center;
      display: flex;
      padding-bottom: 4rem;
      padding-top: 4rem;

      .Footer-heading {
        color: #ffffff;
        font-size: 1.5rem;
      }

      .Footer-actions {
        margin-left: auto;
      }
    }
  }
`;
