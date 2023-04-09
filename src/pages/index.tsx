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
            <h2>Digitales Ökosystem von Jekaterinburg</h2>

            <h3>Was passiert</h3>

            <p>
              Heute ist eine Stadt nicht nur ein Ort zum Leben, sondern eine komplexe Infrastruktur von Dienstleistungen, Funktionen, Ereignissen, Szenarien und Interaktionen, die den Komfort und die Lebensqualität bestimmen. Für eine Person ist es gelinde gesagt schwierig, all das zu verstehen.
            </p>

            <p>
              Deshalb planen wir, alle städtischen Bereiche an einem Ort zu vereinen — das digitale Ökosystem von Jekaterinburg. Es wird das Leben von Bürgern, Unternehmen und Verwaltung vereinfachen und automatisieren.
            </p>

            <h3>Warum hier</h3>

            <p>
              Weil Jekaterinburg eine Stadt von Enthusiasten ist. Wir sind leidenschaftlich bei dem, was wir tun. Wir vereinen uns, um Berge zu versetzen, nicht um Gewinne zu konkurrieren. Wir sind eine Gemeinschaft.
            </p>

            <h3>Was wir bereits haben und was in Planung ist</h3>

            <p>
              Wir haben bereits 10 Projekte und ein motiviertes Team. In den kommenden Monaten sind große Ankündigungen aller Projekte und die Entwicklung neuer geplant. Folgen Sie uns auf <a href="https://github.com/ekaterinburgdev/" target="_blank">GitHub</a>.
            </p>

            <Iframe src="https://projects.ekaterinburg.dev/widget" />

            <h3>Wen wir suchen</h3>

            <p>
              Verrückte Enthusiasten in den folgenden Bereichen: Künstliche Intelligenz, Big Data, maschinelles Lernen, C#, Python, React, Node.js, iOS/Android-Entwicklung, Kundengewinnung, UI/UX-Design.
            </p>

            <p>
              Wir suchen auch Führungskräfte, Art-Direktoren, Produktmanager, Finanziers, Verkäufer, Tester, Analysten, Texter, Produzenten.
            </p>

            <p className={cn(styles.investors)}>
              Darüber hinaus suchen wir Investoren, Sponsoren und Partner! Kontakt-E-Mail:{" "}
              <a href="mailto:investor@ekaterinburg.dev">
                investor@ekaterinburg.dev
              </a>
            </p>

            <p>
              In unserem Team sind bereits coole Leute von Kontur, Yandex, Tochka. Und wir warten auf alle Fachleute, die bereit sind, eine digitale Stadt der Zukunft zu schaffen.
            </p>

            <Team />

            <p className={cn(styles.final)}>
              Unsere Lokomotive rast bereits mit voller Geschwindigkeit. Steigen Sie ein, solange es noch Platz gibt.
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
