import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & .CardList-mainContent {
    .CardList-heading {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5em;
    }

    .CardList-list {
      display: flex;
      gap: 1.25rem;
      flex-wrap: wrap;
      margin-top: 1.25rem;

      .CardList-item {
        width: 100%;

        @media screen and (min-width: ${(props) =>
            props.theme.smallBreakpoint}) {
          width: calc((100% - 1.25rem * 1) / 2);
        }

        @media screen and (min-width: ${(props) =>
            props.theme.largeBreakpoint}) {
          width: calc((100% - 1.25rem * 2) / 3);
        }

        @media screen and (min-width: ${(props) =>
            props.theme.extraLargeBreakpoint}) {
          width: calc((100% - 1.25rem * 3) / 4);
        }
      }
    }
  }
`;
