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
            <h2>예카테린부르크의 디지털 생태계</h2>

            <h3>무슨 일이 일어나고 있는가</h3>

            <p>
              오늘날 도시는 단순한 거주지가 아니라, 삶의 편안함과 질을 결정하는 서비스, 기능, 이벤트, 시나리오 및 상호 작용의 복잡한 인프라입니다. 말하자면, 한 사람이 모두 이해하는 것은 어렵습니다.
            </p>

            <p>
              그래서 우리는 모든 도시 영역을 한 곳에 모으려고 합니다. 예카테린부르크의 디지털 생태계입니다. 이것은 시민들, 기업들, 그리고 행정의 삶을 단순화하고 자동화할 것입니다.
            </p>

            <h3>왜 여기서</h3>

            <p>
              예카테린부르크는 열정 가득한 도시이기 때문입니다. 우리는 열정을 가지고 일합니다. 우리는 이익을 위해 경쟁하는 것이 아니라 산을 옮기기 위해 뭉칩니다. 우리는 커뮤니티입니다.
            </p>

            <h3>이미 있는 것과 계획 중인 것은 무엇인가</h3>

            <p>
              우리는 이미 10개의 프로젝트와 활력 넘치는 팀이 있습니다. 앞으로 몇 달 안에 모든 프로젝트의 큰 발표와 새로운 프로젝트의 개발이 계획되어 있습니다. <a href="https://github.com/ekaterinburgdev/" target="_blank">GitHub</a>에서 팔로우하세요.
            </p>

            <Iframe src="https://projects.ekaterinburg.dev/widget" />

            <h3>누구를 찾고 있나요</h3>

            <p>
              다음 분야에서 미친 열정을 가진 엔지니어를 찾고 있습니다: 인공지능, 빅데이터, 머신러닝, C#, 파이썬, 리액트, Node.js, iOS/Android 개발, 고객 개발, UI/UX 디자인.
            </p>

            <p>
              또한, 우리는 지도자, 아트 디렉터, 제품 관리자, 재무 담당자, 판매원, 테스터, 분석가, 카피라이터, 프로듀서를 찾고 있습니다.
            </p>

            <p className={cn(styles.investors)}>
              게다가, 우리는 투자자, 스폰서, 파트너를 찾고 있습니다! 연락처 이메일:{" "}
              <a href="mailto:investor@ekaterinburg.dev">
                investor@ekaterinburg.dev
              </a>
            </p>

            <p>
              우리 팀에는 이미 Kontur, Yandex, Tochka의 멋진 사람들이 있습니다. 그리고 우리는 미래의 디지털 도시를 만들 준비가 된 모든 전문가들을 기다리고 있습니다.
            </p>

            <Team />

            <p className={cn(styles.final)}>
              우리의 기관차는 이미 최고 속도로 달려가고 있습니다. 자리가 남아있는 동안 뛰어들어보세요.
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
