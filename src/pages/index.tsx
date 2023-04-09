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
            <h2>エカテリンブルグのデジタルエコシステム</h2>

            <h3>何が起こっているのか</h3>

            <p>
              今日、都市とは単なる生活の場ではなく、サービス、機能、イベント、シナリオ、相互作用の複雑なインフラであり、それらがこの人生の快適さと品質を決定します。一人の人間がすべてを理解するのは、言わば難しいことです。
            </p>

            <p>
              そこで、私たちはすべての都市領域を一つの場所に統合することを計画しています - エカテリンブルグのデジタルエコシステム。これにより、市民、ビジネス、行政の生活が簡素化され、自動化されます。
            </p>

            <h3>なぜここに</h3>

            <p>
              なぜなら、エカテリンブルグは熱意に満ちた街だからです。私たちは自分の仕事に情熱を持っています。山を動かすために団結し、利益のために競争しないのです。私たちはコミュニティです。
            </p>

            <h3>すでにあるものと今後の予定</h3>

            <p>
              すでに10のプロジェクトと活力に満ちたチームがあります。今後数ヶ月で、すべてのプロジェクトの大きな発表と新しいものの開発が予定されています。<a href="https://github.com/ekaterinburgdev/" target="_blank">GitHub</a>でフォローしてください。
            </p>

            <Iframe src="https://projects.ekaterinburg.dev/widget" />

            <h3>私たちが探している人物</h3>

            <p>
              以下の分野の熱狂的な愛好家：人工知能、ビッグデータ、機械学習、C#、Python、React、Node.js、iOS/Android開発、顧客開発、UI/UXデザイン。
            </p>

            <p>
              また、リーダー、アートディレクター、プロダクトマネージャー、ファイナンシャルアドバイザー、セールス、テスター、アナリスト、コピーライター、プロデューサーを探しています。
            </p>

            <p className={cn(styles.investors)}>
              さらに、投資家、スポンサー、パートナーを探しています！連絡先メール：{" "}
              <a href="mailto:investor@ekaterinburg.dev">
                investor@ekaterinburg.dev
              </a>
            </p>

            <p>
              私たちのチームには、Kontur、Yandex、Tochkaからの素晴らしいメンバーがすでにいます。そして、未来のデジタルシティを創造する準備ができているすべてのプロフェッショナルを待っています。
            </p>

            <Team />

            <p className={cn(styles.final)}>
              私たちの機関車はすでに全速力で走っています。まだ間に合ううちに乗ってください。
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
