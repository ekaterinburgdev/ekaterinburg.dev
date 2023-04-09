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
            "<!-- Ce problème est déjà sur GitHub et vous attend: https://github.com/ekaterinburgdev/ekaterinburg.dev/issues/29 -->",
        }}
      />

      <div className={cn(styles.header__text)}>
        <h1 className={cn(styles.headline)}>C’est le Code d’Iekaterinbourg</h1>

        <p data-id="header-text">
          Une équipe qui accomplira l’impossible. Impraticable, compliqué et fou. C’est le projet dont vous avez rêvé. C’est le projet du destin.
        </p>

        <a
          className={cn(mainStyles.mainaction, mainStyles.mainactionHeader)}
          href="#about"
          data-id="header-more"
        >
          Cliquez pour<br/>découvrir ce que<br/>nous allons faire
        </a>

        <span className={cn(styles.emoji)}>😉</span>
      </div>
    </header>
  );
}
