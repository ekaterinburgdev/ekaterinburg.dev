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
            "<!-- A edição já está em Github e à sua espera: https://github.com/ekaterinburgdev/ekaterinburg.dev/issues/29 -->",
        }}
      />

      <div className={cn(styles.header__text)}>
        <h1 className={cn(styles.headline)}>Isto é — Código de Ecaterimburgo</h1>

        <p data-id="header-text">
          Uma equipe que fará o impossível. O inalcançável, complexo e louco. Este é o projeto dos seus sonhos. Este é — o projeto do destino.
        </p>

        <a
          className={cn(mainStyles.mainaction, mainStyles.mainactionHeader)}
          href="#about"
          data-id="header-more"
        >
          Clique para<br/>descobrir o que faremos
        </a>

        <span className={cn(styles.emoji)}>😉</span>
      </div>
    </header>
  );
}
