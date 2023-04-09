import { ProjectsPanel, PROJECT_DEV, Theme } from "ekb";
import styles from "@/components/footer/Footer.module.css";
import tgSocialSrc from "@/components/footer/social/telegram-white.svg";
import ghSocialSrc from "@/components/footer/social/github-white.svg";
import "ekb/style.css";
import { ACTION_LINK } from "../action/constants";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ProjectsPanel activeProjectId={PROJECT_DEV.id} theme={Theme.DARK} />
      <div className={styles.footerlinks}>
        <a
          className={styles.footerlinks__item}
          href="https://t.me/ekaterinburgdev"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            className={styles.footerlinks__image}
            src={tgSocialSrc.src}
            alt="telegram"
          />
        </a>
        <a
          className={styles.footerlinks__item}
          href="https://github.com/ekaterinburgdev"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            className={styles.footerlinks__image}
            src={ghSocialSrc.src}
            alt="github"
          />
        </a>
      </div>
      <a className={styles.footerAction} href={ACTION_LINK}>
        문의하기
      </a>
    </footer>
  );
}
