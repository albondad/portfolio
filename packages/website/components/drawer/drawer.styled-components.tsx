import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        .Drawer-overlay {
            background-color: #000000;
            cursor: pointer;
            height: 100vh;
            left: 0;
            opacity: 0.5;
            position: fixed;
            top: 0;
            transition: opacity 250ms;
            width: 100vw;
            z-index: 10;

            :hover {
                opacity: 0.25;
            }
        }

        .Drawer-mainContent {
            background-color: #ffffff;
            height: calc(100vh - 8rem);
            left: 0;
            overflow: auto;
            position: fixed;
            top: 8rem;
            width: 100vw;
            z-index: 10;

            .Drawer-constrainedContent {
                margin-left: auto;
                margin-right: auto;
                max-width: calc(62.5rem - 4rem);
                padding: 4rem;
                width: 100%;
            }

            .Drawer-header {
                align-items: center;
                display: flex;

                .Drawer-heading {
                    font-size: 1.5rem;
                    font-weight: 700;
                    line-height: 1.5em;
                }

                .Drawer-goBack {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    font-size: 1.25rem;
                    font-weight: 700;
                    line-height: 1.5em;
                    margin-left: auto;
                    transition: transform 0.125s;

                    :hover {
                        transform: scale(1.025);
                    }

                    .Drawer-icon {
                        margin-right: 0.125rem;
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
`
