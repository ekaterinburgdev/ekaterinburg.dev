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
            <h2>叶卡捷琳堡的数字生态系统</h2>

            <h3>正在发生什么</h3>

            <p>
              如今，城市不仅仅是生活的地方，还是一个包含服务、功能、事件、场景和互动的复杂基础设施，这些共同决定了生活的舒适度和质量。一个人要弄清楚这一切，说得轻一点，是很困难的。
            </p>

            <p>
              因此，我们计划在一个地方将所有城市领域统一起来——叶卡捷琳堡的数字生态系统。它将简化和自动化市民、企业和管理部门的生活。
            </p>

            <h3>为什么在这里</h3>

            <p>
              因为叶卡捷琳堡是一个热情洋溢的城市。我们对自己的事业充满激情。我们团结起来，为了实现目标，而不是为了利润而竞争。我们是一个社区。
            </p>

            <h3>已经有什么和计划中的什么</h3>

            <p>
              我们已经有10个项目和一个充满活力的团队。在接下来的几个月里，计划公布所有项目的重大消息并开发新项目。在 <a href="https://github.com/ekaterinburgdev/" target="_blank">GitHub</a> 上关注我们。
            </p>

            <Iframe src="https://projects.ekaterinburg.dev/widget" />

            <h3>我们在寻找谁</h3>

            <p>
              在以下领域的疯狂热衷者：人工智能、大数据、机器学习、C#、Python、React、Node.js、iOS/Android开发、客户开发、UI/UX设计。
            </p>

            <p>
              我们还在寻找领导者、艺术总监、产品经理、金融家、销售人员、测试人员、分析师、撰稿人、制片人。
            </p>

            <p className={cn(styles.investors)}>
              此外，我们还在寻找投资者、赞助商和合作伙伴！联系邮箱：{" "}
              <a href="mailto:investor@ekaterinburg.dev">
                investor@ekaterinburg.dev
              </a>
            </p>

            <p>
              我们的团队已经有了来自 Kontur、Yandex、Tochka 的酷小伙伴。我们期待所有准备好创建未来数字城市的专业人士加入我们。
            </p>

            <Team />

            <p className={cn(styles.final)}>
              我们的火车已经全速前进。赶快上车，还有空位。
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
