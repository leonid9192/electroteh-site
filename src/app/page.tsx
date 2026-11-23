
const categories = [
  {
    number: "01",
    title: "Кабель и провод",
    description:
      "Силовой, контрольный, бронированный, установочный кабель, провод связи и специальные марки",
    icon: "〰",
  },
  {
    number: "02",
    title: "Низковольтное оборудование",
    description:
      "Автоматические выключатели, пускатели, контакторы, рубильники и предохранители",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Крановое оборудование",
    description:
      "Гидротолкатели, тормоза, командоконтроллеры и токоприёмники",
    icon: "↗",
  },
  {
    number: "04",
    title: "Щитовое оборудование",
    description:
      "ШРС, ВРУ, ОЩВ, КТПН, 2КТПН, ячейки КСО и панели ЩО-70",
    icon: "▤",
  },
  {
    number: "05",
    title: "Светотехника",
    description:
      "Оборудование и комплектующие для промышленного и технического освещения",
    icon: "✳",
  },
  {
    number: "06",
    title: "Электромонтажные материалы",
    description:
      "Кабель-каналы, гофротрубы, металлорукава, скобы и хомуты",
    icon: "⌘",
  },
  {
    number: "07",
    title: "Нагревательное оборудование",
    description:
      "ТЭНы, электрокалориферы, электроводонагреватели и тепловые пушки",
    icon: "◉",
  },
  {
    number: "08",
    title: "Поставка под заказ",
    description:
      "Подберём и поставим необходимую электротехническую продукцию под вашу задачу",
    icon: "＋",
  },
];

function Bolt() {
  return (
    <svg viewBox="0 0 100 120" className="h-24 w-20" fill="none">
      <path
        d="M57 4 17 68h29l-5 48 43-69H54L57 4Z"
        fill="url(#boltGradient)"
        stroke="#BFDBFE"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="boltGradient" x1="20" y1="10" x2="80" y2="110">
          <stop stopColor="#DBEAFE" />
          <stop offset=".45" stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function EnergyCore() {
  return (
    <div className="relative flex aspect-square w-full max-w-[470px] items-center justify-center">
      <div className="absolute inset-[4%] rounded-full border border-blue-400/10" />
      <div className="absolute inset-[10%] rounded-full border border-blue-400/20 [animation:spin_35s_linear_infinite]" />
      <div className="absolute inset-[17%] rounded-full border border-dashed border-blue-300/50 [animation:spin_28s_linear_infinite_reverse]" />
      <div className="absolute inset-[25%] rounded-full border border-blue-400/20 [animation:spin_22s_linear_infinite]" />
      <div className="absolute inset-[33%] rounded-full border border-dashed border-cyan-300/30 [animation:spin_18s_linear_infinite_reverse]" />

      <div className="absolute h-[65%] w-[65%] rounded-full bg-blue-600/20 blur-[65px]" />
      <div className="absolute h-[42%] w-[42%] rounded-full bg-cyan-500/15 blur-[45px]" />

      <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-blue-300/40 bg-[#071a38]/90 shadow-[0_0_45px_rgba(37,99,235,0.35),inset_0_0_35px_rgba(59,130,246,0.18)] sm:h-44 sm:w-44">
        <Bolt />
      </div>

      <div className="absolute left-[14%] top-[25%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_5px_rgba(103,232,249,0.55)]" />
      <div className="absolute bottom-[18%] right-[20%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_18px_5px_rgba(96,165,250,0.65)]" />
      <div className="absolute right-[13%] top-[35%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,0.5)]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <header className="relative z-20 border-b border-white/[0.08] bg-[#07111f]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-black shadow-lg shadow-blue-600/30">
              Э
            </div>
            <div>
              <div className="text-xl font-bold tracking-wide">ЭЛЕКТРОТЕХ</div>
              <div className="text-[10px] tracking-[0.25em] text-blue-300">
                ЭЛЕКТРОТЕХНИЧЕСКАЯ КОМПАНИЯ
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#catalog" className="transition hover:text-blue-300">Каталог</a>
            <a href="#about" className="transition hover:text-blue-300">О компании</a>
            <a href="#contacts" className="transition hover:text-blue-300">Контакты</a>
          </nav>

          <a
            href="tel:+73832924127"
            className="rounded-xl border border-blue-400/40 px-4 py-3 text-sm font-semibold transition hover:bg-blue-500/15"
          >
            +7 (383) 292-41-27
          </a>
        </div>
      </header>

      <section className="relative border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(29,78,216,0.18),transparent_42%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(96,165,250,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.2)_1px,transparent_1px)] [background-size:55px_55px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-10">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-4 py-2 text-xs font-semibold tracking-wider text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60A5FA]" />
              ЭЛЕКТРОТЕХНИЧЕСКИЕ РЕШЕНИЯ ДЛЯ БИЗНЕСА
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Энергия для
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">
                ваших проектов
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Поставляем электротехническое оборудование и комплектующие.
              Помогаем подобрать решения для промышленных, коммерческих
              и инфраструктурных объектов.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#catalog"
                className="rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Смотреть каталог <span className="ml-2">→</span>
              </a>
              <a
                href="#contacts"
                className="rounded-xl border border-white/15 px-7 py-4 text-sm font-bold text-slate-200 transition hover:border-blue-400/60 hover:bg-white/5"
              >
                Связаться с нами
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
              <div>
                <div className="text-2xl font-bold text-white">B2B</div>
                <div className="mt-1 text-xs text-slate-500">Работа с бизнесом</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">08</div>
                <div className="mt-1 text-xs text-slate-500">Направлений продукции</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">НСК</div>
                <div className="mt-1 text-xs text-slate-500">Новосибирск</div>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[340px] items-center justify-center md:min-h-[500px]">
            <EnergyCore />
            <div className="absolute bottom-4 right-0 hidden rounded-xl border border-white/10 bg-[#0b1b30]/80 px-5 py-4 backdrop-blur sm:block">
              <div className="text-xs tracking-widest text-blue-300">ELECTRICAL ENGINEERING</div>
              <div className="mt-1 text-lg font-semibold">Технологии для бизнеса</div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-4 text-xs font-bold tracking-[0.25em] text-blue-400">НАШ АССОРТИМЕНТ</div>
              <h2 className="text-3xl font-bold sm:text-4xl">Каталог продукции</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Основные направления поставок электротехнического оборудования
                для различных отраслей.
              </p>
            </div>
            <a href="#contacts" className="text-sm font-semibold text-blue-300 transition hover:text-white">
              Запросить стоимость <span className="ml-2">→</span>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <article
                key={category.number}
                className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#10243d] to-[#0a1728] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-950/40"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-blue-500/20" />
                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-2xl text-blue-300">
                    {category.icon}
                  </div>
                  <span className="text-xs tracking-widest text-slate-600">{category.number}</span>
                </div>
                <h3 className="relative mt-7 text-lg font-bold">{category.title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-400">{category.description}</p>
                <a href="#contacts" className="relative mt-auto pt-5 text-sm font-semibold text-blue-300 transition group-hover:text-white">
                  Запросить стоимость <span className="ml-1">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/[0.06] bg-[#0a192b] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center lg:px-10">
          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.25em] text-blue-400">ООО «ЭЛЕКТРОТЕХ»</div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Надёжные поставки.
              <span className="block text-blue-300">Технический подход.</span>
            </h2>
            <p className="mt-7 leading-8 text-slate-400">
              Компания «Электротех» предлагает электротехническую продукцию
              для предприятий, монтажных организаций и коммерческих объектов.
              Помогаем с подбором оборудования и обработкой заявок на поставку.
            </p>
            <p className="mt-4 leading-8 text-slate-400">
              Если нужной позиции нет в списке, отправьте запрос — уточним
              возможность поставки под вашу задачу.
            </p>
            <a
              href="#contacts"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold transition hover:bg-blue-500"
            >
              Обсудить поставку <span className="ml-2">→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/[0.07] p-7">
              <div className="text-4xl font-bold text-blue-300">01</div>
              <div className="mt-4 font-semibold">Подбор оборудования</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">Помогаем определить подходящие позиции.</p>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-4xl font-bold text-blue-300">02</div>
              <div className="mt-4 font-semibold">Запрос поставки</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">Принимаем заявки на нужную продукцию.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-4xl font-bold text-blue-300">03</div>
              <div className="mt-4 font-semibold">Работа с компаниями</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">Ориентируемся на задачи организаций.</p>
            </div>
            <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/[0.07] p-7">
              <div className="text-4xl font-bold text-blue-300">04</div>
              <div className="mt-4 font-semibold">Комплексный ассортимент</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">Различные категории электротехники.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs font-bold tracking-[0.25em] text-blue-400">ОСТАЛИСЬ ВОПРОСЫ?</div>
            <h2 className="text-3xl font-bold sm:text-5xl">Обсудим вашу задачу</h2>
            <p className="mt-5 leading-8 text-slate-400">
              Позвоните нам или отправьте запрос на почту.
              Поможем сориентироваться по ассортименту и стоимости.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <a href="tel:+73832924127" className="rounded-2xl border border-white/10 bg-[#0d2036] p-7 transition hover:border-blue-400/50">
              <div className="text-sm text-slate-400">Электротехнический отдел</div>
              <div className="mt-4 text-xl font-bold">+7 (383) 292-41-27</div>
              <div className="mt-4 text-sm text-blue-300">Позвонить →</div>
            </a>
            <a href="tel:+73833350168" className="rounded-2xl border border-white/10 bg-[#0d2036] p-7 transition hover:border-blue-400/50">
              <div className="text-sm text-slate-400">Кабельный отдел</div>
              <div className="mt-4 text-xl font-bold">+7 (383) 335-01-68</div>
              <div className="mt-4 text-sm text-blue-300">Позвонить →</div>
            </a>
            <a href="mailto:elektroteh-nsk@yandex.ru" className="rounded-2xl border border-white/10 bg-[#0d2036] p-7 transition hover:border-blue-400/50">
              <div className="text-sm text-slate-400">Электронная почта</div>
              <div className="mt-4 break-all text-lg font-bold">elektroteh-nsk@yandex.ru</div>
              <div className="mt-4 text-sm text-blue-300">Написать →</div>
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/[0.07] p-7 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="text-lg font-bold">Нужна помощь с подбором?</div>
              <p className="mt-2 text-sm text-slate-400">Отправьте список необходимых позиций на нашу почту.</p>
            </div>
            <a href="mailto:elektroteh-nsk@yandex.ru?subject=Запрос%20на%20поставку" className="mt-5 inline-flex rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold transition hover:bg-blue-500 sm:mt-0">
              Отправить запрос →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] bg-[#050d18]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div className="font-bold tracking-wider text-slate-300">ЭЛЕКТРОТЕХ</div>
          <div>Электротехническое оборудование и комплектующие</div>
          <div>© 2026 ООО «Электротех»</div>
        </div>
      </footer>
    </main>
  );
}
