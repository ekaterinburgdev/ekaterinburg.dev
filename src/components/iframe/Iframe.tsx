import React, { useEffect } from "react";
import styles from "./Iframe.module.css";

interface IframeProps {
  src: string;
}

export function Iframe({ src }: IframeProps) {
  useEffect(() => {
    function handleIframeMessage(event: MessageEvent) {
      if (event.data.type === "iframeHeight") {
        const iframe = document.getElementById("my-iframe");
        if (iframe) {
          iframe.style.setProperty("height", `${event.data.height}px`);
        }
      }
    }

    window.addEventListener("message", handleIframeMessage);

    return () => {
      window.removeEventListener("message", handleIframeMessage);
    };
  }, [src]);

  return (
    <div className={styles.iframeWrap}>
      <iframe
      id="my-iframe" 
      className={styles.iframe} 
      src={src} 
      sandbox="allow-scripts allow-top-navigation allow-same-origin allow-popups" 
      loading="lazy"
      />
    </div>
  );
}
