import { useTranslations } from "next-intl";
import cn from "classnames";
import styles from "@/components/page/Page.module.css";

export function Page() {
  const t = useTranslations("Dev");

  return (
    <main className={cn(styles.page)}>
      <p
        className={cn(styles.page__text)}
        dangerouslySetInnerHTML={{ __html: t.raw("Congratulations") }}
      />

      <details dangerouslySetInnerHTML={{ __html: t.raw("Details") }} />

      <div dangerouslySetInnerHTML={{ __html: t.raw("Description") }} />
    </main>
  );
}
