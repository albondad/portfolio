import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & .CardList-mainContent {
    max-width: 100rem;
    margin-left: auto;
    margin-right: auto;

    .CardList-heading {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5em;
    }

    .CardList-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem;
      margin-top: 1.25rem;

      .CardList-item {
        width: calc((100% - 1.25rem * 4) / 4);
      }
    }
  }
`;
