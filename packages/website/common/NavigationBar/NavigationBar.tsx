// external modules
import { FunctionComponent } from "react";
import { useRouter } from "next/router";

// internal modules
import * as S from "./NavigationBar.styles";

// component
export const NavigationBar: FunctionComponent = () => {
  // hooks
  const router = useRouter();

  // event handlers
  const onNavigationBarMainLinksItemClick = (url: string): void => {
    router.push(url);
  }

  // return
  return (
    <S.NavigationBar>
      <S.NavigationBarMain>
        <S.NavigationBarMainBrand>AL BONDAD</S.NavigationBarMainBrand>
        <S.NavigationBarMainLinks>
          <S.NavigationBarMainLinksItem onClick={(): void => onNavigationBarMainLinksItemClick("/")}>HOME</S.NavigationBarMainLinksItem>
          <S.NavigationBarMainLinksItem onClick={(): void => onNavigationBarMainLinksItemClick("/blog")}>BLOG</S.NavigationBarMainLinksItem>
        </S.NavigationBarMainLinks>
      </S.NavigationBarMain>
    </S.NavigationBar>
  );
};
