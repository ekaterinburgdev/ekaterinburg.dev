import { ACTION_LINK } from "./constants";
import styles from "./FooterAction.module.css";

export function FooterAction() {
  return (
    <a className={styles.footerAction} href={ACTION_LINK}>
      Присоединиться к нам
    </a>
  );
}
