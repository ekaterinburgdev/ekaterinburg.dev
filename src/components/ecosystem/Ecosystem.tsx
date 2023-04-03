import { AnimatedLogo } from "ekb";
import styles from "./Ecosystem.module.css";

export function Ecosystem() {
  return (
    <div className={styles.ecosystem}>
      <div className={styles.ecosystem__logo} id="about">
        <AnimatedLogo
          radius="clamp(80px, 80vw, 60vh)"
          withLogoHover={false}
          shadowed
        />
      </div>
    </div>
  );
}
