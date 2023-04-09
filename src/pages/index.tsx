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
            <h2>Ekaterinburg Digital Ecosystem</h2>

            <h3>What’s happening</h3>

            <p>
              Today, a city is not just a place to live but a complex infrastructure of services, functions, events, scenarios, and interactions that determine the comfort and quality of life. For one person to understand it all is, to put it mildly, difficult.
            </p>

            <p>
              That’s why we plan to create a unification of all urban spheres in one place—the digital ecosystem of Ekaterinburg. It will simplify and automate the lives of citizens, businesses, and government.
            </p>

            <h3>Why here</h3>

            <p>
              Because Ekaterinburg is a city of enthusiasts. We are passionate about what we do. We unite to move mountains, not compete for profit. We are a community.
            </p>

            <h3>What we already have and what’s in the plans</h3>

            <p>
              We already have 10 projects and an energized team. In the coming months, major announcements of all projects and the development of new ones are planned. Follow us on <a href="https://github.com/ekaterinburgdev/" target="_blank">GitHub</a>.
            </p>

            <Iframe src="https://projects.ekaterinburg.dev/widget" />

            <h3>Who we are looking for</h3>

            <p>
              Crazy enthusiasts in the following fields: Artificial Intelligence, Big Data, Machine Learning, C#, Python, React, Node.js, iOS/Android development, customer development, UI/UX design.
            </p>

            <p>
              We are also looking for leaders, art directors, product managers, financiers, salespeople, testers, analysts, copywriters, producers.
            </p>

            <p className={cn(styles.investors)}>
              Moreover, we are looking for investors, sponsors, and partners! Contact email:{" "}
              <a href="mailto:investor@ekaterinburg.dev">
                investor@ekaterinburg.dev
              </a>
            </p>

            <p>
              Our team already has cool guys from Kontur, Yandex, Tochka. And we are waiting for all professionals who are ready to create a digital city of the future.
            </p>

            <Team />

            <p className={cn(styles.final)}>
              Our locomotive is already racing at full speed. Hop on while there’s room.
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
