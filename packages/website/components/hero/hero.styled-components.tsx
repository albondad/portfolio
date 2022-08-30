import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    background-color: #000000;
    padding: 6rem 0;
  }

  & .Hero-mainContent {
    display: flex;
    gap: 1.25rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 100rem;
  }

  & .Hero-image {
    background-color: #cccccc;
    border-radius: 0.5rem;
    height: 16rem;
    overflow: hidden;
    position: relative;
    width: 16rem;
  }

  & .Hero-heading {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5em;
  }

  & .Hero-description {
    color: #ffffff;
    font-size: 1.25em;
    line-height: 1.5em;
    max-width: 32rem;
  }

  & .Hero-actions {
    align-items: flex-end;
    color: #ffffff;
    display: flex;
    margin-left: auto;
  }
`;
