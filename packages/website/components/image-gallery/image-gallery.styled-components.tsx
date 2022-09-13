import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        .ImageGallery-image {
            backgorund-color: #eeeeee;
            border-radius: 0.5rem;
            overflow: hidden;
            padding-top: 56.25%;
            position: relative;
            width: 100%;
        }

        .ImageGallery-items {
            display: flex;
            flex-wrap: wrap;
            margin-top: 1.25rem;
            gap: 1.25rem;

            .ImageGallery-item {
                cursor: pointer;
                filter: saturate(0.5);
                transition: opacity 250ms, transform 250ms, filter 250ms;
                width: calc((100% - 1.25rem * 1) / 2);

                @media screen and (min-width: ${(props) =>
                        props.theme.smallBreakpoint}) {
                    width: calc((100% - 1.25rem * 3) / 4);
                }
            }

            .ImageGallery-item.ImageGallery-isDisabledFalse {
                :hover {
                    filter: saturate(1);
                    transform: scale(1.05);
                }
            }

            .ImageGallery-item.ImageGallery-isDisabledTrue {
                filter: saturate(0);
                opacity: 0.5;
                pointer-events: none;
            }
        }
    }
`
