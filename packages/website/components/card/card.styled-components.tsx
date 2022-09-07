import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    filter: saturate(0.25);
    transition: transform 0.125s, filter 0.125s;
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.025) translate(0, -0.25rem);
    filter: saturate(1);
  }

  & .Card-image {
    background-color: #eeeeee;
    border-radius: 0.5rem;
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
  }

  & .Card-heading {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.5em;
    margin-top: 0.75rem;
  }

  & .Card-details {
    font-size: 1rem;
    line-height: 1.5em;
    margin-top: 0.125em;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
`;
