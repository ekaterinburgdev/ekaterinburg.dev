import { useTranslations } from "next-intl";
import cn from "classnames";
import styles from "@/components/main-text/MainText.module.css";

interface MainTextProps {
  projects: JSX.Element;
  team: JSX.Element;
}

// TODO: translate to english
export function MainText({ projects, team }: MainTextProps) {
  const t = useTranslations("Dev");

  return (
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

      {projects}

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

      {team}

      <p>
        Наш локомотив уже несётся полным ходом. Залетайте, пока есть места.
      </p>
    </main>
  );
}
