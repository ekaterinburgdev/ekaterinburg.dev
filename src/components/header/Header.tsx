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
            "<!-- Esta cuestión ya está en GitHub y esperando por usted: https://github.com/ekaterinburgdev/ekaterinburg.dev/issues/29 -->",
        }}
      />

      <div className={cn(styles.header__text)}>
        <h1 className={cn(styles.headline)}>Esto es — Código Ekaterimburgo</h1>

        <p data-id="header-text">
          Un equipo que logrará lo imposible. Irreal, complicado y loco. Este es el proyecto con el que has soñado. Este es — el proyecto del destino.
        </p>

        <a
          className={cn(mainStyles.mainaction, mainStyles.mainactionHeader)}
          href="#about"
          data-id="header-more"
        >
          Haz clic<br/>para descubrir<br/>qué haremos
        </a>

        <span className={cn(styles.emoji)}>😉</span>
      </div>
    </header>
  );
}
