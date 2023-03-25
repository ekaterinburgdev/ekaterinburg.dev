import { ReactNode, useEffect } from "react";
import cn from "classnames";
import previewLogo from "@/components/preview/logo.svg";
import styles from "./Preview.module.css";
import { initPreviewAnimation } from "./preview-animation";

export function Preview({ children }: { children: ReactNode }) {
  useEffect(() => {
    initPreviewAnimation();
  }, []);

  return (
    <div className={cn("preview", styles.preview)}>
      <div className={cn(styles.preview__scroller)}>
        <svg
          className={cn("preview__graphics", styles.preview__graphics)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            href={previewLogo.src}
            width="50%"
            height="50%"
            x="25%"
            y="-75%"
          ></image>
        </svg>
      </div>
      <div className={cn(styles.preview__content)}></div>

      {children}
    </div>
  );
}
