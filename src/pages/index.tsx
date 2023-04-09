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
            <h2>Écosystème numérique d’Iekaterinbourg</h2>

            <h3>Ce qui se passe</h3>

            <p>
              Aujourd’hui, une ville n’est pas seulement un lieu de vie, mais une infrastructure complexe de services, fonctions, événements, scénarios et interactions qui déterminent le confort et la qualité de vie. Pour une personne, comprendre tout cela est, pour le dire gentiment, difficile.
            </p>

            <p>
              C’est pourquoi nous prévoyons de créer une unification de tous les domaines urbains en un seul endroit — l’écosystème numérique d’Iekaterinbourg. Il simplifiera et automatisera la vie des citoyens, des entreprises et de l’administration.
            </p>

            <h3>Pourquoi ici</h3>

            <p>
              Parce qu’Iekaterinbourg est une ville d’enthousiastes. Nous sommes passionnés par ce que nous faisons. Nous nous unissons pour déplacer des montagnes, et non pas pour rivaliser pour le profit. Nous sommes une communauté.
            </p>

            <h3>Ce que nous avons déjà et ce qui est prévu</h3>

            <p>
              Nous avons déjà 10 projets et une équipe motivée. Dans les mois à venir, des annonces majeures concernant tous les projets et le développement de nouveaux projets sont prévues. Suivez-nous sur <a href="https://github.com/ekaterinburgdev/" target="_blank">GitHub</a>.
            </p>

            <Iframe src="https://projects.ekaterinburg.dev/widget" />

            <h3>Qui nous recherchons</h3>

            <p>
              Des passionnés fous dans les domaines suivants : Intelligence Artificielle, Big Data, Apprentissage Automatique, C#, Python, React, Node.js, développement iOS/Android, développement client, design UI/UX.
            </p>

            <p>
              Nous recherchons également des leaders, des directeurs artistiques, des chefs de produit, des financiers, des commerciaux, des testeurs, des analystes, des rédacteurs, des producteurs.
            </p>

            <p className={cn(styles.investors)}>
              De plus, nous recherchons des investisseurs, des sponsors et des partenaires ! E-mail de contact :{" "}
              <a href="mailto:investor@ekaterinburg.dev">
                investor@ekaterinburg.dev
              </a>
            </p>

            <p>
              Notre équipe compte déjà des personnes formidables de Kontur, Yandex, Tochka. Et nous attendons tous les professionnels prêts à créer une ville numérique du futur.
            </p>

            <Team />

            <p className={cn(styles.final)}>
              Notre locomotive est déjà lancée à pleine vitesse. Montez à bord tant qu’il y a de la place.
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
