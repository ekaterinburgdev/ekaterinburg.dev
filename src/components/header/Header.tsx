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
        <h1 className={cn(styles.headline)}>Это — Код Екатеринбурга</h1>

        <p data-id="header-text">
          Команда, которая сделает невозможное. Невыполнимое, сложное
          и безумное. Это тот проект, о котором вы мечтали. Это — проект судьбы.
        </p>

        <a
          className={cn(mainStyles.mainaction, mainStyles.mainactionHeader)}
          href="#about"
          data-id="header-more"
        >
          Нажми, чтобы узнать,
          <br />
          что мы&nbsp;будем делать
        </a>

        <span className={cn(styles.emoji)}>😉</span>
      </div>
    </header>
  );
}
