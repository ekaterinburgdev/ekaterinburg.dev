import { useEffect } from "react";
import { useTranslations } from "next-intl";
import cn from "classnames";
import styles from "./Header.module.css";
import mainStyles from "../action/MainAction.module.css";
import { initSmoothScroll } from "./smooth-scroll";

export function Header() {
  const t = useTranslations("Dev");

  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <header className={cn(styles.header)}>
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<!-- Кстати, раз ты это заметил — при скролле шапка немного скачет, нам бы пригодилась твоя помощь на GitHub 🎩 -->",
        }}
      />

      <div className={cn(styles.header__text)}>
        <p
          data-id="header-text"
          dangerouslySetInnerHTML={{ __html: t.raw("header") }}
        ></p>
        <a
          className={cn(mainStyles.mainaction)}
          href="#about"
          data-id="header-more"
          dangerouslySetInnerHTML={{ __html: t.raw("Learn more") }}
        />
      </div>
    </header>
  );
}
