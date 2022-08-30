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
    height: 16rem;
    width: 16rem;
    border-radius: 0.5rem;
  }

  & .Hero-title {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5em;
  }

  & .Hero-description {
    font-size: 1.25em;
    line-height: 1.5em;
    color: #ffffff;
    max-width: 32rem;
  }

  & .Hero-actions {
    color: #ffffff;
    margin-left: auto;
    display: flex;
    align-items: flex-end;
  }
`;