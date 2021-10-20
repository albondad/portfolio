// external modules
import { FunctionComponent } from "react";
import { useRouter } from "next/router";

// internal modules
import * as S from "./Banner.styles";

// component
export const Banner: FunctionComponent = () => {
  // return
  return (
    <S.Banner>
      <S.BannerMain>
        <S.BannerMainImage></S.BannerMainImage>
        <S.BannerMainDescrition>
          <S.BannerMainDescritionHeader>THIS A HEADER</S.BannerMainDescritionHeader>
          <S.BannerMainDescritionParagraph>Hi there, thanks for dropping by! A little bit about me, I’m a web developer based in Illinois with about a year’s experience. I’ve worked with a couple startups and organizations as a contracted developer, and would be looking forward to working with you!</S.BannerMainDescritionParagraph>
        </S.BannerMainDescrition>
      </S.BannerMain>
    </S.Banner>
  );
};
