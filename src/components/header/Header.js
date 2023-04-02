import { useEffect } from "react";
import cn from "classnames";
import styles from "./Header.module.css";
import { initSmoothScroll } from "./smooth-scroll";

export function Header() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <header className={cn(styles.header)}>
      <div dangerouslySetInnerHTML={{ __html:
        '<!-- Кстати, раз ты это заметил — при скролле шапка немного скачет, нам бы пригодилась твоя помощь на GitHub 🎩 -->' 
        }} />

      <div className={cn(styles.header__text)}>
        <p data-id="header-text">
          Это Код Екатеринбурга&nbsp;&mdash; команда, которая сделает
          невозможное. Невыполнимое, сложное и&nbsp;безумное. Сделает&nbsp;то,
          что никто не&nbsp;сможет. Это тот проект, о&nbsp;котором
          вы&nbsp;мечтали. Это&nbsp;&mdash; проект судьбы.
        </p>
        <a
          className={cn(styles.header__more)}
          href="#about"
          data-id="header-more"
        >
          Узнать, что мы&nbsp;будем делать
        </a>
      </div>
    </header>
  );
}
