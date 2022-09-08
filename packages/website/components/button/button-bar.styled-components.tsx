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
    transition: transform 0.125s;

    :hover {
      transform: scale(1.1);
    }
  }
`;
