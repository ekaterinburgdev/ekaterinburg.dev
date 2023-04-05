/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useTranslations } from "next-intl";
import { Preview } from "@/components/preview/Preview";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Road } from "@/components/road/Road";
import { MainText } from "@/components/main-text/MainText";
import { Iframe } from "@/components/iframe/Iframe";
import { Team } from "@/components/team/Team";
import { MainAction } from "@/components/action/MainAction";
import { Ecosystem } from "@/components/ecosystem/Ecosystem";
import { GetStaticProps } from "next";

export default function Home() {
  const t = useTranslations("Dev");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>

      <Preview>
        <Header />
      </Preview>

      <Road />

      <Ecosystem />

      <MainText
        projects={<Iframe src="https://projects.ekaterinburg.dev/widget" />}
        team={<Team />}
      />

      <Team />

      <MainAction />

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../locales/${context.locale}.json`)).default,
    },
  };
};
