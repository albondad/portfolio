import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
  & {
    background-color: #000000;
    padding: 4rem 0;

    .HeroHeader-constrainedContent {
      display: flex;
      gap: 1.25rem;
      flex-direction: column;
      align-items: center;

      @media screen and (min-width: ${(props) => props.theme.largeBreakpoint}) {
        align-items: flex-start;
        flex-direction: row;
      }

      .HeroHeader-image {
        background-color: #cccccc;
        border-radius: 0.5rem;
        height: 12rem;
        overflow: hidden;
        position: relative;
        width: 12rem;
      }

      .HeroHeader-heading {
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 700;max
        line-height: 1.5rem;
        text-align: center;

        @media screen and (min-width: ${(props) =>
            props.theme.largeBreakpoint}) {
            text-align: left;
        }
      }

      .HeroHeader-description {
        color: #ffffff;
        font-size: 1.125rem;
        line-height: 1.5em;
        margin-top: 0.5rem;
        max-width: 32rem;
        text-align: center;

        @media screen and (min-width: ${(props) =>
            props.theme.largeBreakpoint}) {
            text-align: left;
        }
      }

      .HeroHeader-actions {
        color: #ffffff;
        display: flex;
        margin-left: unset;
        margin-top: auto;
        
        @media screen and (min-width: ${(props) =>
            props.theme.largeBreakpoint}) {
            align-items: flex-end;
            margin-left: auto;
        }
      }
    }
  }
`
