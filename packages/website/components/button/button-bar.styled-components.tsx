import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    background-color: #ffffff;
    border-radius: 0.5rem;
    cursor: pointer;
    height: 3rem;
    min-width: 3rem;
  }

  &:hover {
    opacity: 0.5;
  }
`;
