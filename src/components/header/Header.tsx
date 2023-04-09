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
            "<!-- 该问题已经在GitHub上，等待着你的到来: https://github.com/ekaterinburgdev/ekaterinburg.dev/issues/29 -->",
        }}
      />

      <div className={cn(styles.header__text)}>
        <h1 className={cn(styles.headline)}>这是叶卡捷琳堡的代码</h1>

        <p data-id="header-text">
          一个能够实现不可能的团队。无法完成的、复杂的和疯狂的。这是你一直梦想的项目。这是命运的项目。
        </p>

        <a
          className={cn(mainStyles.mainaction, mainStyles.mainactionHeader)}
          href="#about"
          data-id="header-more"
        >
          点击查看我们将要做什么
        </a>

        <span className={cn(styles.emoji)}>😉</span>
      </div>
    </header>
  );
}
