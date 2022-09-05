import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100rem + 4rem * 2);
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;
