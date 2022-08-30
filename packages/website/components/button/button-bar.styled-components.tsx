import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    height: 3rem;
    minwidth: 3rem;
    backgroundcolor: #ffffff;
  }

  &:hover {
    opacity: 0.5;
  }
`;
