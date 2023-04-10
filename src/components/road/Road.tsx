import roadStartImg from "@/components/road/road-start.svg";
import roadMiddleImg from "@/components/road/road-middle.svg";

export function Road() {
  return (
    <>
      <img src={roadStartImg.src} style={{ width: '100%', aspectRatio: '1 / 17' }} alt="" />
      <div dangerouslySetInnerHTML={{ __html: '<!-- Да, мы знаем, что картинки слегка великоваты 😘 -->' }} />
      <img src={roadMiddleImg.src} loading="lazy" style={{ width: '100%', aspectRatio: '488 / 16799' }} alt="" />
    </>
  );
}
