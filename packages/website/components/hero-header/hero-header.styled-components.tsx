import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    background-color: #000000;
    padding: 4rem 0;

    .HeroHeader-constrainedContent {
      display: flex;
      gap: 1.25rem;

      .HeroHeader-image {
        background-color: #cccccc;
        border-radius: 0.5rem;
        height: 16rem;
        overflow: hidden;
        position: relative;
        width: 16rem;
      }

      .HeroHeader-heading {
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.5rem;
      }

      .HeroHeader-description {
        color: #ffffff;
        font-size: 1.25rem;
        line-height: 1.5em;
        margin-top: 0.5rem;
        max-width: 32rem;
      }

      .HeroHeader-actions {
        align-items: flex-end;
        color: #ffffff;
        display: flex;
        margin-left: auto;
      }
    }
  }
`;
