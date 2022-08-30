import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    align-items: center;
    background-color: #ffffff;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    height: 3rem;
    justify-content: center;
    min-width: 3rem;
  }

  &:hover {
    opacity: 0.5;
  }
`;
