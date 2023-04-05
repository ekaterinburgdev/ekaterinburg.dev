import { useTranslations } from "next-intl";
import { ACTION_LINK } from "./constants";
import styles from "./MainAction.module.css";

export function MainAction() {
  const t = useTranslations("Dev");

  return (
    <div className={styles.mainaction__wrapper}>
      <a className={styles.mainaction} href={ACTION_LINK}>
        {t("Join us")}
      </a>
    </div>
  );
}
