import { useTranslations } from "next-intl";
import { ACTION_LINK } from "./constants";
import styles from "./FooterAction.module.css";

export function FooterAction() {
  const t = useTranslations("Dev");

  return (
    <a className={styles.footerAction} href={ACTION_LINK}>
      {t("Write to us")}
    </a>
  );
}
