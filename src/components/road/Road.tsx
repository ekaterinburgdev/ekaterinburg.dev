import { AnimatedLogo } from "ekb";
import roadStartImg from "@/components/road/road-start.svg";
import roadMiddleImg from "@/components/road/road-middle.svg";
import styles from "./Road.module.css";

export function Road() {
  return (
    <div>
      <img src={roadStartImg.src} alt="" />
      <div dangerouslySetInnerHTML={{ __html: '<!-- Да, мы знаем, что картинки слегка великоваты 😘 -->' }} />
      <img src={roadMiddleImg.src} alt="" />
      <figure className={styles.road__logo}>
        <div className={styles.road__logoimg} id="about">
          <AnimatedLogo
            radius="clamp(80px, 80vw, 60vh)"
            withLogoHover={false}
            shadowed
          />
        </div>

        <figcaption className={styles.road__caption}>
          Экосистема Екатеринбурга
        </figcaption>
      </figure>
    </div>
  );
}
