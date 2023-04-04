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

        <h3>Что происходит</h3>

        <p>
          Сегодня город&nbsp;&mdash; это не&nbsp;просто место, чтобы жить жизнь,
          а&nbsp;невероятно сложная инфраструктура услуг, функций, событий,
          сценариев и взаимодействий, которые определяют комфорт и&nbsp;качество
          жизни. Разобраться во&nbsp;всём этом, мягко говоря, сложно.
        </p>

        <p>
          Поэтому мы&nbsp;планируем создать цифровую экосистему Екатеринбурга
          &mdash; объединение всех городских сфер в&nbsp;одном месте, чтобы
          упростить и автоматизировать жизнь горожан, бизнеса
          и&nbsp;администрации.
        </p>

        <h3>Почему здесь</h3>

        <p>
          Потому что Екатеринбург&nbsp;&mdash; город энтузиастов. Мы&nbsp;горим
          своим делом. Мы объединяемся, чтобы свернуть горы,
          а&nbsp;не&nbsp;конкурируем ради прибыли. Мы &mdash; сообщество.
        </p>

        <h3>Что уже есть и&nbsp;что в&nbsp;планах</h3>

        <p>
          Уже есть 10&nbsp;проектов и&nbsp;заряженная команда&nbsp;&mdash;
          зацените, какой у&nbsp;нас
          <a href="https://github.com/ekaterinburgdev/" target="_blank">
            гитхаб
          </a>
          . В&nbsp;ближайшие месяцы планируются большие анонсы всех проектов и
          разработка новых.
        </p>

        <Iframe src="https://projects.ekaterinburg.dev/widget" />

        <h3>Кто нам нужен</h3>

        <p>
          Специалисты судьбы по&nbsp;следующим направлениям: AI, Big Data,
          Machine Learning, backend, frontend, C#, Python, Node.js, customer
          development, UI/UX design.
        </p>

        <p>
          Также мы&nbsp;ищем руководителей, арт-директоров, менеджеров
          продуктов, финансистов, продавцов, тестировщиков, аналитиков,
          продюсеров.
        </p>

        <p>
          И&nbsp;более того мы&nbsp;ищем инвесторов, спонсоров и&nbsp;партнёров!
        </p>

        <p>
          В&nbsp;нашей команде уже есть крутые ребята из&nbsp;Контура, Яндекса,
          Точки. И мы&nbsp;ждём к&nbsp;нам всех профессионалов, кто готов
          создать цифровой город будущего.
        </p>

        <Team />

        <p>
          Наш локомотив уже несётся полным ходом. Залетайте, пока есть места.
        </p>
      </main>

      <MainAction />

      <Footer />
    </>
  );
}
