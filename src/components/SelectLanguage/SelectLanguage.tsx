import { useCallback, useState } from "react";
import { Select } from "../Select/Select";
import styles from "./SelectLanguage.module.css";

enum Language {
  ru = "ru",
  en = "en",
  ch = "ch",
  es = "es",
  fr = "fr",
  de = "de",
  pt = "pt",
  ko = "ko",
  ja = "ja",
}

const fullLanguage: { [key in Language]: string } = {
  [Language.ru]: "Русский",
  [Language.en]: "English",
  [Language.ch]: "中国",
  [Language.es]: "Española",
  [Language.fr]: "Français",
  [Language.de]: "Deutsch",
  [Language.pt]: "Português",
  [Language.ko]: "한국어",
  [Language.ja]: "日本語",
};

const shortLanguage: { [key in Language]: string } = {
  [Language.ru]: "Ру",
  [Language.en]: "En",
  [Language.ch]: "中国",
  [Language.es]: "Es",
  [Language.fr]: "Fr",
  [Language.de]: "De",
  [Language.pt]: "Pt",
  [Language.ko]: "한국어",
  [Language.ja]: "日本語",
};

const langUrl: { [key in Language]: string } = {
  [Language.ru]: "ru",
  [Language.en]: "en",
  [Language.ch]: "ch",
  [Language.es]: "es",
  [Language.fr]: "fr",
  [Language.de]: "de",
  [Language.pt]: "pt",
  [Language.ko]: "ko",
  [Language.ja]: "ja",
};

const options = Object.values(Language);

export function SelectLanguage() {
  const [isOpen, setIsOpen] = useState(false);

  const onChange = useCallback((index: number) => {
    window.open(window.location.href + langUrl[options[index]], "_self");
  }, []);

  return (
    <>
      {isOpen && <div className={styles.switcher_overlay} aria-hidden></div>}
      <div className={styles.switcher}>
        <Select
          defaultSelected={0}
          options={options}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          renderHandler={(value) => shortLanguage[value as Language]}
          renderValue={(value) => fullLanguage[value as Language]}
          onChange={onChange}
        />
      </div>
    </>
  );
}
