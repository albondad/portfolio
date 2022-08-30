import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    background-color: #cccccc;
  }

  & .NavigationBar-mainContent {
    display: flex;
    align-items: center;
    height: 4rem;
    border-radius: 0 0 0.5rem 0.5rem;
    max-width: 100rem;
    margin: 0 auto;
  }

  & .NavigationBar-logo {
    font-size: 1.5rem;
    line-height: 1.5em;
    font-weight: 700;
  }

  & .NavigationBar-links {
    display: flex;
    gap: 3rem;
    margin-left: auto;
  }

  & .NavigationBar-linkItem {
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.5em;
  }

  & .NavigationBar-linkItem:hover {
    opacity: 0.5;
  }
`;
