import { useEffect } from "react";
import cn from "classnames";
import styles from "./Header.module.css";
import mainStyles from "../action/MainAction.module.css";
import { initSmoothScroll } from ".";

export function Header() {
  useEffect(() => {
    const unsubscribe = initSmoothScroll();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <header className={cn(styles.header)}>
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<!-- 이 이슈는 이미 GitHub에서 여러분을 기다리고 있습니다: https://github.com/ekaterinburgdev/ekaterinburg.dev/issues/29 -->",
        }}
      />

      <div className={cn(styles.header__text)}>
        <h1 className={cn(styles.headline)}>이것은 예카테린부르크 코드입니다.</h1>

        <p data-id="header-text">
          불가능한 것을 이룰 팀입니다. 불완전하고 복잡하며 미친 것들이죠. 이것은 당신이 꿈꾸던 프로젝트입니다. 이것은 운명의 프로젝트입니다.
        </p>

        <a
          className={cn(mainStyles.mainaction, mainStyles.mainactionHeader)}
          href="#about"
          data-id="header-more"
        >
          우리가 할 일을 알아보려면 클릭하세요.
        </a>

        <span className={cn(styles.emoji)}>😉</span>
      </div>
    </header>
  );
}
