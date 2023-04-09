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
            "<!-- Dieses Issue ist bereits auf GitHub und wartet auf Sie: https://github.com/ekaterinburgdev/ekaterinburg.dev/issues/29 -->",
        }}
      />

      <div className={cn(styles.header__text)}>
        <h1 className={cn(styles.headline)}>Das ist der Jekaterinburg-Code</h1>

        <p data-id="header-text">
          Ein Team, das das Unmögliche schafft. Das Unausführbare, komplexe und verrückte. Das ist das Projekt, von dem Sie geträumt haben. Das ist das Schicksalsprojekt.
        </p>

        <a
          className={cn(mainStyles.mainaction, mainStyles.mainactionHeader)}
          href="#about"
          data-id="header-more"
        >
          Klicken Sie,<br/>um herauszufinden,<br/>was wir tun werden
        </a>

        <span className={cn(styles.emoji)}>😉</span>
      </div>
    </header>
  );
}
