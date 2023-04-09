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
            "<!-- Этот ишью уже на гитхабе и ждёт тебя: https://github.com/ekaterinburgdev/ekaterinburg.dev/issues/29 -->",
        }}
      />

      <div className={cn(styles.header__text)}>
        <h1 className={cn(styles.headline)}>This is the ekaterinburg.dev</h1>

        <p data-id="header-text">
          A team that will accomplish the impossible. The unachievable, complex, and insane. This is the project you’ve been dreaming of. This is the project of destiny.
        </p>

        <a
          className={cn(mainStyles.mainaction, mainStyles.mainactionHeader)}
          href="#about"
          data-id="header-more"
        >
          Click to find out what we will do
        </a>

        <span className={cn(styles.emoji)}>😉</span>
      </div>
    </header>
  );
}
