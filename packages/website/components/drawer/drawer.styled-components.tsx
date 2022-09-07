import styled from "styled-components";
import { Box } from "..";

export const StyledBox = styled(Box)`
  & {
    .Drawer-overlay {
      background-color: #000000;
      height: 100vh;
      position: fixed;
      width: 100vw;
      z-index: 10;
      top: 0;
      left: 0;
      opacity: 0.5;
      transition: transform 200ms;
    }

    .Drawer-mainContent {
      background-color: #ffffff;
      height: 100vh;
      left: 0;
      position: fixed;
      top: 8rem;
      z-index: 10;
      width: 100vw;

      .Drawer-constrainedContent {
        width: 100%;
        max-width: calc(50% - 4rem);
        margin-left: auto;
        margin-right: auto;
        padding: 4rem;
      }

      .Drawer-header {
        display: flex;
        align-items: center;

        .Drawer-heading {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.5em;
        }

        .Drawer-goBack {
          font-size: 1.25rem;
          line-height: 1.5em;
          margin-left: auto;
        }
      }

      .Drawer-images {
        height: 10rem;
        width: 100%;

        .Drawer-mainImage {
          width: 100%;
          margin-top: 1.25rem;

          .Drawer-image {
            background-color: #cccccc;
            border-radius: 0.5rem;
            padding-top: 56.25%;
            width: 100%;
          }
        }

        .Drawer-otherImages {
          margin-top: 1.25rem;
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          .Drawer-item {
            max-width: calc((100% - 1.25rem * 3) / 4);
            width: 100%;

            .Drawer-image {
              background-color: #cccccc;
              border-radius: 0.5rem;
              padding-top: 56.25%;
              width: 100%;
            }
          }
        }
      }
    }
  }

  &.Drawer-isOpenFalse {
    display: none;
  }

  &.Drawer-isOpenTrue {
    display: block;
  }
`;
