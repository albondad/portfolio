import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & .Card-image {
    background-color: #eeeeee;
    padding-top: 56.25%;
    border-radius: 0.5rem;
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
