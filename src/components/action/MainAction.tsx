import classNames from "classnames";
import { ACTION_LINK } from "./constants";
import styles from "./MainAction.module.css";

export function MainAction() {
  return (
    <a
      className={classNames(styles.mainaction, styles.mainactionFooter)}
      href={ACTION_LINK}
    >
      行动呼吁 <div className={classNames(styles.rocket)}>🚀</div>
    </a>
  );
}
