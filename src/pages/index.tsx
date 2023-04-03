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

export default function Home() {
  return (
    <>
      <Head>
        <title>Код Екатеринбурга</title>
      </Head>

      <Preview>
        <Header />
      </Preview>

      <Road />

      <Ecosystem />

      <main className={cn(styles.page)}>
        <h2>Экосистема Екатеринбурга</h2>

        {/*
          <p>
          Поздравляем!
          <br />
          Вы&nbsp;самый любопытный!
          <br />
          Вас мы&nbsp;и&nbsp;искали.
          </p>
        */}

        <h3>Что происходит</h3>

        <p>
          Сегодня город — это не просто место, чтобы жить жизнь, а невероятно
          сложная инфраструктура услуг, функций, событий, сценариев и
          взаимодействий, которые определяют комфорт и качество жизни.
          Разобраться во всём этом, мягко говоря, сложно.
        </p>

        <p>
          Поэтому мы планируем создать цифровую экосистему Екатеринбурга —
          объединение всех городских сфер в одном месте, чтобы упростить и
          автоматизировать жизнь горожан, бизнеса и администрации.
        </p>

        <h3>Почему здесь</h3>

        <p>
          Потому что Екатеринбург — город энтузиастов. Мы горим своим делом. Мы
          объединяемся, чтобы свернуть горы, а не конкурируем ради прибыли. Мы —
          сообщество.
        </p>

        <h3>Что уже есть и что в планах</h3>

        <p>
          Уже есть 10 проектов и заряженная команда — зацените, какой у нас{" "}
          <a href="https://github.com/ekaterinburgdev/" target="_blank">
            гитхаб
          </a>
          . В ближайшие месяцы планируются большие анонсы всех проектов и
          разработка новых.
        </p>

        <Iframe src="https://projects.ekaterinburg.dev/widget" />

        <h3>Кто нам нужен</h3>

        <p>
          Специалисты судьбы по следующим направлениям: AI, Big Data, Machine
          Learning, backend, frontend, C#, Python, Node.js, customer
          development, UI/UX design.
        </p>

        <p>
          Также мы ищем руководителей, арт-директоров, менеджеров продуктов,
          финансистов, продавцов, тестировщиков, аналитиков, продюсеров.
        </p>

        <p>И более того мы ищем инвесторов, спонсоров и партнёров!</p>

        <p>
          В нашей команде уже есть крутые ребята из Контура, Яндекса, Точки. И
          мы ждём к нам всех профессионалов, кто готов создать цифровой город
          будущего.
        </p>

        <Team />

        {/* <h3>Как к нам попасть</h3>

        <p>
          Что делать? Тут два варианта:{" "}
          <a href="https://t.me/nibach" target="_blank">
            написать нам в&nbsp;телегу
          </a>{" "}
          и&nbsp;пообщаться, либо заглянуть{" "}
          <a href="https://github.com/ekaterinburgdev/" target="_blank">
            на&nbsp;гитхаб
          </a>{" "}
          и&nbsp;просто сразу начать решать задачки.

					Но если что, можно и не ждать и сразу идти в гитхаб решать ишьюсы ;-)
        </p> */}

        <p>
          Наш локомотив уже несётся полным ходом. Залетайте, пока есть места.
        </p>
      </main>

      <MainAction />

      <Footer />
    </>
  );
}
