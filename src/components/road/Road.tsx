import { AnimatedLogo } from "ekb";
import roadStartImg from "@/components/road/road-start.svg";
import roadMiddleImg from "@/components/road/road-middle.svg";
import styles from "./Road.module.css";

export function Road() {
  return (
    <div>
      <img src={roadStartImg.src} alt="" />
      <img src={roadMiddleImg.src} alt="" />
      <div className={styles.road__logo} id="about">
        <AnimatedLogo
          radius="clamp(80px, 30vw, 400px)"
          withLogoHover={false}
          shadowed
        />
      </div>
    </div>
  );
}
