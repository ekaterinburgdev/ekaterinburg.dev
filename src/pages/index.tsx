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
        <title>ekaterinburg.dev</title>
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
            <h2>Ecosistema digital de Ekaterimburgo</h2>

            <h3>Qué está pasando</h3>

            <p>
              Hoy en día, una ciudad no es solo un lugar para vivir, sino una compleja infraestructura de servicios, funciones, eventos, escenarios e interacciones que determinan la comodidad y calidad de vida. Entender todo esto por sí mismo, por decirlo suavemente, es difícil.
            </p>

            <p>
              Por eso, planeamos crear una unión de todos los ámbitos urbanos en un solo lugar: el ecosistema digital de Ekaterimburgo. Esto simplificará y automatizará la vida de los ciudadanos, los negocios y la administración.
            </p>

            <h3>Por qué aquí</h3>

            <p>
              Porque Ekaterimburgo es una ciudad de entusiastas. Nos apasiona nuestro trabajo. Nos unimos para mover montañas, no para competir por el beneficio. Somos una comunidad.
            </p>

            <h3>Qué tenemos y qué está planeado</h3>

            <p>
              Ya tenemos 10 proyectos y un equipo lleno de energía. En los próximos meses, se planean grandes anuncios de todos los proyectos y el desarrollo de nuevos. Suscríbete a <a href="https://github.com/ekaterinburgdev/" target="_blank">GitHub</a>.
            </p>

            <Iframe src="https://projects.ekaterinburg.dev/widget" />

            <h3>A quién buscamos</h3>

            <p>
              Entusiastas apasionados en las siguientes áreas: Inteligencia artificial, Big Data, Machine Learning, C#, Python, React, Node.js, desarrollo de iOS/Android, desarrollo de clientes, diseño de UI/UX.
            </p>

            <p>
              También estamos buscando líderes, directores de arte, gerentes de productos, financieros, vendedores, probadores, analistas, redactores y productores.
            </p>

            <p className={cn(styles.investors)}>
              Además, buscamos inversores, patrocinadores y socios. Correo de contacto:{" "}
              <a href="mailto:investor@ekaterinburg.dev">
                investor@ekaterinburg.dev
              </a>
            </p>

            <p>
              En nuestro equipo ya tenemos chicos geniales de Kontur, Yandex y Tochka. Y estamos esperando a todos los profesionales que estén listos para crear la ciudad digital del futuro.
            </p>

            <Team />

            <p className={cn(styles.final)}>
              Nuestra locomotora ya está corriendo a toda velocidad. Únete mientras haya espacio.
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
