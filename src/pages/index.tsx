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
            <h2>Ecossistema digital de Ecaterimburgo</h2>

            <h3>O que está acontecendo</h3>

            <p>
              Hoje, a cidade não é apenas um lugar para viver, mas uma infraestrutura complexa de serviços, funções, eventos, cenários e interações que determinam o conforto e a qualidade de vida. Para entender tudo isso por conta própria, para dizer o mínimo, é difícil.
            </p>

            <p>
              Por isso, planejamos criar uma união de todas as esferas urbanas em um só lugar — o ecossistema digital de Ecaterimburgo. Isso simplificará e automatizará a vida dos cidadãos, empresas e administração.
            </p>

            <h3>Por que aqui</h3>

            <p>
              Porque Ecaterimburgo é uma cidade de entusiastas. Somos apaixonados pelo que fazemos. Nos unimos para mover montanhas, não para competir por lucro. Somos uma comunidade.
            </p>

            <h3>O que já temos e o que está planejado</h3>

            <p>
              Já temos 10 projetos e uma equipe cheia de energia. Nos próximos meses, estão planejados grandes anúncios de todos os projetos e desenvolvimento de novos. Inscreva-se no <a href="https://github.com/ekaterinburgdev/" target="_blank">GitHub</a>.
            </p>

            <Iframe src="https://projects.ekaterinburg.dev/widget" />

            <h3>Quem estamos procurando</h3>

            <p>
              Entusiastas loucos nas seguintes áreas: Inteligência artificial, Big Data, Aprendizado de máquina, C#, Python, React, Node.js, desenvolvimento iOS/Android, desenvolvimento de clientes, design de UI/UX.
            </p>

            <p>
              Também estamos procurando líderes, diretores de arte, gerentes de produto, financeiros, vendedores, testadores, analistas, redatores e produtores.
            </p>

            <p className={cn(styles.investors)}>
              Além disso, procuramos investidores, patrocinadores e parceiros! E-mail para contato:{" "}
              <a href="mailto:investor@ekaterinburg.dev">
                investor@ekaterinburg.dev
              </a>
            </p>

            <p>
              Em nossa equipe, já temos pessoas incríveis da Kontur, Yandex e Tochka. E estamos esperando todos os profissionais que estão prontos para criar a cidade digital do futuro.
            </p>

            <Team />

            <p className={cn(styles.final)}>
              Nossa locomotiva já está a todo vapor. Entre enquanto há espaço.
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
