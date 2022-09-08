import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    margin-left: auto;
    margin-right: auto;
    max-width: calc(87.5rem + 2rem * 2);
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (min-width: ${(props) => props.theme.largeBreakpoint}) {
      max-width: calc(87.5rem + 4rem * 2);
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
`;
