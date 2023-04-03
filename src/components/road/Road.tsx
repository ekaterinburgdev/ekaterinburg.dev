import roadStartImg from "@/components/road/road-start.svg";
import roadMiddleImg from "@/components/road/road-middle.svg";

export function Road() {
  return (
    <>
      <img src={roadStartImg.src} alt="" />
      <div dangerouslySetInnerHTML={{ __html: '<!-- Да, мы знаем, что картинки слегка великоваты 😘 -->' }} />
      <img src={roadMiddleImg.src} alt="" />
    </>
  );
}
