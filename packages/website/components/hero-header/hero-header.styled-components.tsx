import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    background-color: #000000;
    padding: 6rem 0;
  }

  & .HeroHeader-mainContent {
    display: flex;
    gap: 1.25rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 100rem;
  }

  & .HeroHeader-image {
    background-color: #cccccc;
    border-radius: 0.5rem;
    height: 16rem;
    overflow: hidden;
    position: relative;
    width: 16rem;
  }

  & .HeroHeader-heading {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5em;
  }

  & .HeroHeader-description {
    color: #ffffff;
    font-size: 1.25em;
    line-height: 1.5em;
    max-width: 32rem;
  }

  & .HeroHeader-actions {
    align-items: flex-end;
    color: #ffffff;
    display: flex;
    margin-left: auto;
  }
`;
