import { ACTION_LINK } from "./constants";
import styles from "./MainAction.module.css";

export function MainAction() {
  return (
    <div className={styles.mainaction__wrapper}>
      <a className={styles.mainaction} href={ACTION_LINK}>
        Колл ту экшн
      </a>
    </div>
  );
}
