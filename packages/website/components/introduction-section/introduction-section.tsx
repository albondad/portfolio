import {
  IntroductionSectionActions,
  IntroductionSectionContainer,
  IntroductionSectionContainerPropsType,
  IntroductionSectionDescription,
} from "..";
import classNames from "classnames";

export type IntroductionSectionPropsType =
  IntroductionSectionContainerPropsType & {};

export const IntroductionSection = ({
  className: classNameProp,
  ...restProps
}: IntroductionSectionPropsType) => {
  return (
    <IntroductionSectionContainer
      className={classNames("IntroductionSection", classNameProp)}
      {...restProps}
    >
      <IntroductionSectionDescription />
      <IntroductionSectionActions />
    </IntroductionSectionContainer>
  );
};
