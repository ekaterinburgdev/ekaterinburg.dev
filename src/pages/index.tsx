/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import cn from "classnames";
import styles from "@/components/page/Page.module.css";
import { Preview } from "@/components/preview/Preview";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Road } from "@/components/road/Road";
import { Iframe } from "@/components/iframe/Iframe";
import { Team } from "@/components/team/Team";
import { MainAction } from "@/components/action/MainAction";
import { Ecosystem } from "@/components/ecosystem/Ecosystem";

import ghSocialSrc from "@/components/footer/social/github-white.svg";
import tgSocialSrc from "@/components/footer/social/telegram-white.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Код Екатеринбурга</title>
      </Head>

      <div data-id="scroller-wrapper">
        <div data-id="scroller-preview">
          <Preview>
            <Header />
          </Preview>
        </div>
        <div data-id="scroller-content">
          <Road />

          <Ecosystem />

          <main className={cn(styles.page)}>
            <h2>Экосистема Екатеринбурга</h2>

            <h3>Что происходит</h3>

            <p>
              Сегодня город — это не просто место для жизни, а сложная
              инфраструктура услуг, функций, событий, сценариев
              и взаимодействий, которые определяют комфорт и качество этой
              жизни. Разобраться во всём одному человеку, мягко говоря, сложно.
            </p>

            <p>
              Поэтому мы планируем создать объединение всех городских сфер
              в одном месте — цифровую экосистему Екатеринбурга. Она упростит
              и автоматизирует жизнь горожан, бизнеса и администрации.
            </p>

            <h3>Почему здесь</h3>

            <p>
              Потому что Екатеринбург&nbsp;&mdash; город энтузиастов.
              Мы&nbsp;горим своим делом. Мы объединяемся, чтобы свернуть горы,
              а&nbsp;не&nbsp;конкурируем ради прибыли. Мы &mdash; сообщество.
            </p>

            <h3>Что уже есть и&nbsp;что в&nbsp;планах</h3>

            <p>
              У нас уже 10&nbsp;проектов и&nbsp;заряженная команда.
              В&nbsp;ближайшие месяцы планируются большие анонсы всех проектов
              и&nbsp;разработка новых. Подписывайтесь на{" "}
              <a className={styles.social} href="https://github.com/ekaterinburgdev/" target="_blank">
                <img src={ghSocialSrc.src} alt="" />гитхаб</a>{" "}
              и{" "}
              <a className={styles.social} href="https://t.me/ekaterinburgdev" target="_blank">
                <img src={tgSocialSrc.src} alt="" />телеграм</a>{" "}
              и ждите новый дроп.
            </p>

            <Iframe src="https://projects.ekaterinburg.dev/widget" />

            <h3>Кого мы ищем</h3>

            <p>
              Сумасшедших энтузиастов по&nbsp;следующим направлениям: Artificial
              intelligence, Big Data, Machine Learning, C#, Python, React,
              Node.js, iOS/Android development, customer development, UI/UX
              design.
            </p>

            <p>
              Также мы&nbsp;ищем руководителей, арт-директоров, менеджеров
              продуктов, финансистов, продавцов, тестировщиков, аналитиков,
              копирайтеров, продюсеров.
            </p>

            <p className={cn(styles.investors)}>
              Более того, мы&nbsp;ищем спонсоров и&nbsp;партнёров!
              Почта для связи:{" "}
              <a href="mailto:investor@ekaterinburg.dev">
                investor@ekaterinburg.dev
              </a>
            </p>

            <p>
              В&nbsp;нашей команде уже есть крутые ребята из&nbsp;Контура,
              Яндекса, Точки. И мы&nbsp;ждём к&nbsp;нам всех профессионалов, кто
              готов cоздать цифровой город будущего.
            </p>

            <Team />

            <p className={cn(styles.final)}>
              Наш локомотив уже несётся полным ходом. Залетайте, пока есть
              места.
            </p>
          </main>

          <MainAction />

          <div className={cn(styles.email__wrap)}>
            <a className={cn(styles.email)} href="mailto:mail@ekaterinburg.dev">
              mail@ekaterinburg.dev
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
