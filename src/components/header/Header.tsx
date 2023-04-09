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
            "<!-- この課題は、すでにGitHubであなたを待っています： https://github.com/ekaterinburgdev/ekaterinburg.dev/issues/29 -->",
        }}
      />

      <div className={cn(styles.header__text)}>
        <h1 className={cn(styles.headline)}>これはエカテリンブルグのコードです</h1>

        <p data-id="header-text">
          不可能を成し遂げるチーム。達成不可能で、複雑で、狂気じみています。これはあなたが夢見ていたプロジェクトです。これは運命のプロジェクトです。
        </p>

        <a
          className={cn(mainStyles.mainaction, mainStyles.mainactionHeader)}
          href="#about"
          data-id="header-more"
        >
          私たちが何をするのか知るには、ここをクリックしてください
        </a>

        <span className={cn(styles.emoji)}>😉</span>
      </div>
    </header>
  );
}
