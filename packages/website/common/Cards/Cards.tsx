// external modules
import { FunctionComponent } from "react";

// internal modules
import * as S from "./Cards.styles";

interface CardsProps {
  header: string;
  items: Array<item>;
  variation: any;
}

interface item {
  header: string;
  details: Array<string>;
  imageSrc: string;
}

// component
export const Cards: FunctionComponent<CardsProps> = (props: CardsProps) => {
  // return
  return (
    <S.Cards>
      <S.CardsMain>
        <S.CardsMainHeader>{props.header}</S.CardsMainHeader>
        <S.CardsMainList>
          {
            props.items.map(
              (item) => {
                return (
                  <S.CardsMainListItem>
                    <S.CardsMainListItemImage />
                    <S.CardsMainListItemDetails>
                      <S.CardsMainListItemDetailsHeader>{item.header}</S.CardsMainListItemDetailsHeader>
                      {
                        item.details.map(
                          (detail) => {
                            return (
                              <S.CardsMainListItemDetailsItem>{detail}</S.CardsMainListItemDetailsItem>
                            )
                          }
                        )
                      }
                    </S.CardsMainListItemDetails>
                  </S.CardsMainListItem>
                )
              }
            )
          }
        </S.CardsMainList>
      </S.CardsMain>
    </S.Cards>
  );
};
