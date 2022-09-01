import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    .NavigationBar-constrainedContent {
      align-items: center;
      border-radius: 0 0 0.5rem 0.5rem;
      display: flex;
      height: 4rem;
    }

    .NavigationBar-logo {
      font-size: 1.5rem;
      line-height: 1.5em;
      font-weight: 700;
    }

    .NavigationBar-links {
      display: flex;
      gap: 3rem;
      margin-left: auto;

      .NavigationBar-item {
        cursor: pointer;
        font-size: 1rem;
        line-height: 1.5em;
      }

      .NavigationBar-item:hover {
        opacity: 0.5;
      }
    }
  }
`;
