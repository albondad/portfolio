import styled from "styled-components";

export const Banner = styled.div`
    background-color: #141414;
    padding-top: 4rem;
    padding-bottom: 4rem;
`;

export const BannerMain = styled.div`
    display: flex;
    margin-right: auto;
    margin-left: auto;
    max-width: 100rem;
    padding-right: 4rem;
    padding-left: 4rem;
`

export const BannerMainImage = styled.div`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    border-radius: 2px;
    background-color: #ffffff;
    max-width: 16rem;
    padding-top: 16rem;
`

export const BannerMainDescrition = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    margin-left: 1.25rem;
`

export const BannerMainDescritionHeader = styled.div`
    color: #ffffff;
    font-size: 1.5rem;
    line-height: 1.2em;
`

export const BannerMainDescritionParagraph = styled.div`
    margin-top: 1rem;
    max-width: 24rem;
    color: #ffffff;
    line-height: 1.5em;
    font-size: 1.125rem;
`