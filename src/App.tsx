import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Copy,
  Flower2,
  HeartHandshake,
  MapPin,
  Menu,
  Phone,
  Plus,
  Star,
  X,
} from 'lucide-react'
import {
  categories,
  featuredServices,
  filterServices,
  services,
} from './services'
import type { Category, Service } from './services'

const mapsUrl = 'https://yandex.ru/maps/-/CTtnfF03'
const reviewsUrl = 'https://yandex.ru/maps/org/gago/204302137873/reviews/'
const phone = '+7 (977) 261-66-35'
const phoneHref = 'tel:+79772616635'

function Emblem({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="44"
      height="49"
      viewBox="0 0 44 49"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 45C6 36 3 24 9 15c4-6 9-8 13-13 4 5 9 7 13 13 6 9 3 21-12 30"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M22 43C9 32 12 23 22 14c10 9 13 18 0 29Zm0-29V2M11 16c0 12 7 15 11 27m11-27c0 12-7 15-11 27"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand ${light ? 'brand-light' : ''}`}
      href="#home"
      aria-label="Гагик — на главную"
    >
      <Emblem />
      <span className="brand-word">
        GAGIK<span>ИСКУССТВО МАССАЖА</span>
      </span>
    </a>
  )
}

function Stars() {
  return (
    <span className="stars" aria-label="5 из 5">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={13} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

function BookingDialog({
  selected,
  onClose,
}: {
  selected: Service | null
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const [serviceId, setServiceId] = useState(selected?.id.toString() ?? '')
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const service = services.find((item) => item.id.toString() === serviceId)

  useEffect(() => {
    const dialog = ref.current
    dialog?.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  function closeDialog() {
    ref.current?.close()
    onClose()
  }

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(phone)
      setCopied(true)
      setCopyFailed(false)
    } catch {
      setCopyFailed(true)
    }
  }

  return (
    <dialog
      ref={ref}
      className="booking-dialog"
      aria-labelledby="booking-title"
      onCancel={(event) => {
        event.preventDefault()
        closeDialog()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog()
      }}
    >
      <div className="dialog-inner">
        <button
          className="icon-button dialog-close"
          onClick={closeDialog}
          aria-label="Закрыть запись"
        >
          <X size={22} />
        </button>
        <Emblem />
        <p className="eyebrow">ВРЕМЯ ДЛЯ СЕБЯ</p>
        <h2 id="booking-title">
          Начнём с заботы
          <br />
          <em>о вас.</em>
        </h2>
        <p className="muted">
          Позвоните Гагику, чтобы обсудить ваши пожелания и выбрать удобное
          время.
        </p>
        <label htmlFor="booking-service">Какой массаж вас интересует?</label>
        <div className="select-wrap">
          <select
            id="booking-service"
            value={serviceId}
            onChange={(event) => setServiceId(event.target.value)}
          >
            <option value="">Помогите выбрать</option>
            {services.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <ChevronDown size={16} />
        </div>
        {service && (
          <div className="booking-service-info">
            <span>
              <Clock3 size={14} /> {service.duration}
            </span>
            <strong>{service.price}</strong>
          </div>
        )}
        <a className="button button-primary booking-phone" href={phoneHref}>
          <Phone size={17} />
          {phone}
          <ArrowUpRight size={18} />
        </a>
        <button className="copy-button" onClick={copyPhone}>
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? 'Номер скопирован' : 'Скопировать номер'}
        </button>
        <p className="copy-status" role="status">
          {copyFailed
            ? `Скопируйте номер вручную: ${phone}`
            : copied
              ? 'Теперь можно вставить номер в контакты.'
              : 'Время и окончательная стоимость согласовываются по телефону.'}
        </p>
      </div>
    </dialog>
  )
}

function ServiceArt({ variant }: { variant: number }) {
  return (
    <svg
      className="service-art"
      viewBox="0 0 180 130"
      fill="none"
      aria-hidden="true"
    >
      {variant === 0 ? (
        <>
          <path d="M66 9c-2 15-8 24-21 37S23 63 22 79c-1 22 22 31 50 28M112 9c2 15 8 24 21 37s22 17 23 33c1 22-22 31-50 28" />
          <path d="M79 13c-4 17-11 24-25 37S38 67 39 81c1 13 16 18 33 15m29-83c4 17 11 24 25 37s16 17 15 31c-1 13-16 18-33 15M89 37v60" />
          <path d="M79 54c-14 9-19 27-7 42m29-42c14 9 19 27 7 42" />
        </>
      ) : variant === 1 ? (
        <>
          <path d="M66 7c4 18-6 23-20 30-17 8-22 24-22 45v34m88-109c-4 18 6 23 20 30 17 8 22 24 22 45v34M88 23v95" />
          <path d="M39 55c22-5 32 1 35 17s-1 32-8 45m73-62c-22-5-32 1-35 17s1 32 8 45M76 24c-5 14-14 17-29 24m53-24c5 14 14 17 29 24" />
          {[44, 54, 64, 74, 84, 94, 104].map((y) => (
            <path key={y} d={`M83 ${y}h10`} />
          ))}
        </>
      ) : (
        <>
          <path d="M29 105c28-22 66 22 110 0M29 88c28-22 66 22 110 0M29 71c28-22 66 22 110 0M29 54c28-22 66 22 110 0" />
          <path d="M88 7c-6 13-16 20-16 30a16 16 0 0 0 32 0C104 27 94 20 88 7Z" />
          <path d="M95 35c1 5-2 9-6 10" />
        </>
      )}
    </svg>
  )
}

const reviews = [
  {
    name: 'Анна Крайнова',
    initial: 'А',
    date: '24 февраля 2025',
    text: 'Работает с душой. Профессионал своего дела. Хорошо «чувствует» клиента. Приятный, интеллигентный, уважительный в общении. Рекомендую.',
  },
  {
    name: 'Anna Moroz',
    initial: 'A',
    date: '17 ноября 2022',
    text: 'Он — мастер своего дела, работает с душой и умом, что самое главное. И ещё хотела добавить, что он очень деликатный и добрый человек.',
  },
  {
    name: 'Марина Малышева',
    initial: 'М',
    date: '13 января 2023',
    text: 'Очень грамотный, вдумчивый и профессиональный массажист — рекомендуем всей семьёй!',
  },
]

const faqs = [
  {
    question: 'Как выбрать подходящий массаж?',
    answer:
      'Расскажите Гагику, что вас беспокоит и какой результат вы хотели бы получить. Позвоните до записи: вместе вы сможете выбрать направление и продолжительность сеанса.',
  },
  {
    question: 'Как подготовиться к первому сеансу?',
    answer:
      'При записи уточните, что нужно взять с собой. Перед сеансом расскажите мастеру о своём самочувствии, травмах и ограничениях. Если есть заболевания или сомнения, заранее обсудите возможность массажа с лечащим врачом.',
  },
  {
    question: 'Есть ли массаж для детей?',
    answer:
      'Да, в прайсе есть грудничковый массаж (0–2 года), общий массаж для детей 2–5 и 6–14 лет, а также массаж отдельных зон. Подходящий формат и особенности сеанса обсудите с Гагиком.',
  },
  {
    question: 'Как записаться и где проходит приём?',
    answer:
      'Запись по телефону +7 (977) 261-66-35. Адрес: Москва, улица Академика Бакулева, 3, 2-й этаж. Ближайшее метро — Тропарёво. Удобное время и детали визита согласуйте по телефону.',
  },
]

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [category, setCategory] = useState<Category>('all')
  const [showAllPrices, setShowAllPrices] = useState(false)
  const [booking, setBooking] = useState<{ selected: Service | null } | null>(
    null,
  )
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const bookingTrigger = useRef<HTMLElement | null>(null)
  const menuToggle = useRef<HTMLButtonElement>(null)
  const visibleServices = featuredServices(category)
  const allServices = filterServices(category)

  function openBooking(selected: Service | null = null) {
    bookingTrigger.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    setMobileMenu(false)
    setBooking({ selected })
  }

  function closeBooking() {
    const trigger = bookingTrigger.current
    setBooking(null)
    requestAnimationFrame(() => {
      const target = trigger?.isConnected ? trigger : menuToggle.current
      target?.focus({ preventScroll: true })
    })
  }

  function changeCategory(next: Category) {
    setCategory(next)
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <header className="header" id="home">
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#about">О мастере</a>
            <a href="#services">Массаж и цены</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <div className="header-actions">
            <a className="header-phone" href={phoneHref}>
              {phone}
            </a>
            <button
              className="button header-book"
              onClick={() => openBooking()}
            >
              Записаться <ArrowUpRight size={16} />
            </button>
          </div>
          <button
            ref={menuToggle}
            className="icon-button menu-toggle"
            aria-label={mobileMenu ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={mobileMenu}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
        {mobileMenu && (
          <nav
            className="mobile-nav"
            id="mobile-menu"
            aria-label="Мобильная навигация"
          >
            {[
              ['#about', 'О мастере'],
              ['#services', 'Массаж и цены'],
              ['#reviews', 'Отзывы'],
              ['#contacts', 'Контакты'],
            ].map(([href, label]) => (
              <a href={href} key={href} onClick={() => setMobileMenu(false)}>
                {label}
                <ArrowUpRight size={17} />
              </a>
            ))}
            <a href={phoneHref}>
              {phone}
              <Phone size={17} />
            </a>
            <button
              className="button button-primary"
              onClick={() => openBooking()}
            >
              Записаться на массаж <ArrowUpRight size={16} />
            </button>
          </nav>
        )}
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="small-line" />
              ЧАСТНАЯ ПРАКТИКА · МОСКВА
            </p>
            <h1 id="hero-title">
              Вернуться
              <br />к <em>лёгкости.</em>
            </h1>
            <p className="hero-description">
              Оставьте напряжение за порогом.
              <br />
              Массаж с вниманием к вашему телу
              <br className="desktop-break" /> и к тому, как вы себя чувствуете.
            </p>
            <div className="hero-buttons">
              <button
                className="button button-primary"
                onClick={() => openBooking()}
              >
                Записаться на массаж <ArrowUpRight size={18} />
              </button>
              <a href="#services" className="text-link">
                Выбрать массаж <ArrowDown size={15} />
              </a>
            </div>
            <a className="hero-location" href="#contacts">
              <MapPin size={16} />
              <span>
                Москва, ул. Академика Бакулева, 3<br />
                <span className="location-secondary">
                  м. Тропарёво · 2-й этаж
                </span>
              </span>
            </a>
            <div className="hero-bottom">
              <span>ВНИМАНИЕ. БАЛАНС. ВОССТАНОВЛЕНИЕ.</span>
              <a href="#services" aria-label="К направлениям массажа">
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-image"
              src="/images/massage-hero.webp"
              alt="Бережный массаж спины — крупный план рук мастера"
              fetchPriority="high"
              width="1024"
              height="1536"
            />
            <div className="image-label">
              <span className="status-dot" />
              ПРОСТРАНСТВО ЗАБОТЫ О СЕБЕ
            </div>
            <div className="hero-image-caption">
              <span>
                Сильные руки.
                <br />
                <em>Бережный подход.</em>
              </span>
              <span className="caption-number">G / 01</span>
            </div>
            <div className="hero-seal">
              <Emblem />
              <span>
                С ЗАБОТОЙ
                <br />О ВАС
              </span>
            </div>
          </div>
        </section>

        <section className="trust-bar container" aria-label="О практике">
          <a
            className="trust-item rating-item"
            href={reviewsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="rating-number">5.0</span>
            <div>
              <Stars />
              <span>
                36 оценок на Яндекс Картах <ArrowUpRight size={12} />
              </span>
            </div>
          </a>
          <div className="trust-item">
            <Flower2 size={31} strokeWidth={1} />
            <div>
              <strong>Для тела и внутреннего баланса</strong>
              <span>Оздоровительный и эстетический массаж</span>
            </div>
          </div>
          <div className="trust-item">
            <HeartHandshake size={31} strokeWidth={1} />
            <div>
              <strong>Индивидуально. Внимательно.</strong>
              <span>С учётом ваших ощущений и пожеланий</span>
            </div>
          </div>
        </section>

        <section className="services-section section container" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / МАССАЖ И ЦЕНЫ</p>
              <h2>
                Слушать тело.
                <br />
                <em>Выбирать своё.</em>
              </h2>
            </div>
            <p className="section-description">
              От расслабления после насыщенного дня
              <br className="desktop-break" /> до направленной работы с
              отдельными зонами.
              <br className="desktop-break" /> Найдём то, что нужно именно вам.
            </p>
          </div>
          <div
            className="category-tabs"
            role="group"
            aria-label="Направления массажа"
          >
            {categories.map((item) => (
              <button
                key={item.id}
                aria-pressed={category === item.id}
                onClick={() => changeCategory(item.id)}
                className={category === item.id ? 'active' : ''}
              >
                {item.label}
                {category === item.id && (
                  <span>
                    {filterServices(item.id).length.toString().padStart(2, '0')}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="service-grid" aria-live="polite">
            {visibleServices.map((service, index) => (
              <article
                className={`service-card service-card-${index}`}
                key={service.id}
              >
                <div className="card-top">
                  <span className="service-index">
                    {service.id.toString().padStart(2, '0')}
                  </span>
                  {service.id === 1 ? (
                    <span className="service-tag">ВЫБОР ДЛЯ ЗНАКОМСТВА</span>
                  ) : (
                    <ArrowDownRight size={19} strokeWidth={1} />
                  )}
                </div>
                <ServiceArt variant={index} />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service-duration">
                  <Clock3 size={13} />
                  {service.duration}
                </div>
                <div className="service-card-footer">
                  <strong>{service.price}</strong>
                  <button
                    className="circle-button"
                    onClick={() => openBooking(service)}
                    aria-label={`Записаться: ${service.name}`}
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="price-action">
            <button
              className="text-link"
              aria-expanded={showAllPrices}
              aria-controls="full-pricelist"
              onClick={() => setShowAllPrices(!showAllPrices)}
            >
              {showAllPrices
                ? 'Свернуть полный прайс'
                : `Смотреть все услуги${category === 'all' ? ' · 22' : ` · ${allServices.length}`}`}
              <span className="small-circle">
                {showAllPrices ? <X size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <span>
              Не знаете, что выбрать?{' '}
              <button onClick={() => openBooking()}>
                Давайте обсудим <ArrowUpRight size={13} />
              </button>
            </span>
          </div>
          {showAllPrices && (
            <div className="full-pricelist" id="full-pricelist">
              <div className="price-table-heading">
                <h3>Полный прайс</h3>
                <a href="/price-list.jpg" target="_blank" rel="noreferrer">
                  Оригинал прайса <ArrowUpRight size={14} />
                </a>
              </div>
              {allServices.map((service) => (
                <div className="price-row" key={service.id}>
                  <div>
                    <span className="price-row-index">
                      {service.id.toString().padStart(2, '0')}
                    </span>
                    <div>
                      <h4>{service.name}</h4>
                      {service.id === 13 && <p>2–5 лет / 6–14 лет</p>}
                    </div>
                  </div>
                  <span className="price-duration">{service.duration}</span>
                  <strong>{service.price}</strong>
                  <button
                    className="icon-button"
                    aria-label={`Записаться: ${service.name}`}
                    onClick={() => openBooking(service)}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              ))}
              <p className="price-note">
                Цены — по предоставленному прайсу. Актуальную стоимость и
                длительность уточняйте при записи.
              </p>
            </div>
          )}
        </section>

        <section className="about-section" id="about">
          <div className="about-grid container">
            <div className="about-image-wrap">
              <img
                src="/images/gagik.webp"
                alt="Гагик за работой в своём массажном кабинете"
                loading="lazy"
                width="960"
                height="1280"
              />
              <div className="photo-note">
                <span className="status-dot" />
                МАСТЕР ЗА РАБОТОЙ
              </div>
            </div>
            <div className="about-content">
              <p className="eyebrow">02 / ЗНАКОМСТВО С МАСТЕРОМ</p>
              <h2>
                Гагик.
                <br />
                Искусство <em>чувствовать.</em>
              </h2>
              <p className="about-intro">
                За каждым движением — внимание.
                <br />
                За каждым сеансом — человек.
              </p>
              <p className="muted">
                Массаж — это время, когда можно остановиться и прислушаться к
                себе. Здесь есть место спокойствию, бережному отношению и работе
                с вашим запросом.
              </p>
              <p className="muted">
                В отзывах клиенты Гагика особенно отмечают его деликатность,
                профессионализм и умение чувствовать человека. Приходят сами и
                рекомендуют близким.
              </p>
              <div className="about-values">
                <span>
                  <Check size={15} />
                  Внимание к вашим ощущениям
                </span>
                <span>
                  <Check size={15} />
                  Массаж для взрослых и детей
                </span>
                <span>
                  <Check size={15} />
                  Спокойное общение и бережный подход
                </span>
              </div>
              <a
                className="text-link"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Познакомиться на Яндекс Картах <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="ritual-section section container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ВАША ПЕРВАЯ ВСТРЕЧА</p>
              <h2>
                Просто прийти.
                <br />
                <em>И выдохнуть.</em>
              </h2>
            </div>
            <p className="section-description">
              Маленькая пауза в большом городе.
              <br />
              Всё начинается с разговора о вас.
            </p>
          </div>
          <div className="ritual-grid">
            {[
              [
                '01',
                'Знакомство',
                'Обсудим ваше самочувствие, пожелания и то, на что стоит обратить внимание.',
              ],
              [
                '02',
                'Ваш массаж',
                'Выберем направление и продолжительность. Во время сеанса рассказывайте о своих ощущениях.',
              ],
              [
                '03',
                'Время для себя',
                'Не спешите возвращаться к делам. Позвольте себе немного побыть в этом спокойствии.',
              ],
            ].map(([number, title, text]) => (
              <div className="ritual-item" key={number}>
                <span className="ritual-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="reviews-section" id="reviews">
          <div className="container section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 / СЛОВА, КОТОРЫМ ДОВЕРЯЮТ</p>
                <h2>
                  Забота чувствуется.
                  <br />
                  <em>И запоминается.</em>
                </h2>
              </div>
              <a
                className="review-rating"
                href={reviewsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>5.0</span>
                <div>
                  <Stars />
                  <p>
                    на Яндекс Картах
                    <br />
                    <small>36 оценок · 30 отзывов</small>
                  </p>
                </div>
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="reviews-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-card-top">
                    <Stars />
                    <span className="yandex-mark" aria-label="Яндекс">
                      Я
                    </span>
                  </div>
                  <blockquote>«{review.text}»</blockquote>
                  <div className="review-author">
                    <span className="avatar">{review.initial}</span>
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a
              className="text-link all-reviews"
              href={reviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Все отзывы на Яндекс Картах <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="faq-section section container">
          <div>
            <p className="eyebrow">ПЕРЕД ВИЗИТОМ</p>
            <h2>
              Возможно,
              <br />
              <em>вам интересно.</em>
            </h2>
            <p className="muted">
              Остались вопросы?
              <br />
              <a href={phoneHref}>
                Позвоните — всё обсудим <ArrowUpRight size={14} />
              </a>
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                key={faq.question}
              >
                <h3>
                  <button
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    {faq.question}
                    <Plus size={20} />
                  </button>
                </h3>
                <div id={`faq-answer-${index}`} hidden={openFaq !== index}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contacts-section" id="contacts">
          <div className="contacts-grid container">
            <div className="contacts-content">
              <p className="eyebrow">04 / ВСТРЕТИМСЯ ЗДЕСЬ</p>
              <h2>
                Ваше время
                <br />
                <em>для лёгкости.</em>
              </h2>
              <p>
                Сделайте первый шаг к заботе о себе.
                <br />
                Остальное обсудим при встрече.
              </p>
              <a className="contact-phone" href={phoneHref}>
                {phone}
                <ArrowUpRight size={24} />
              </a>
              <div className="contact-details">
                <MapPin size={20} strokeWidth={1.3} />
                <div>
                  <strong>Москва, ул. Академика Бакулева, 3</strong>
                  <span>2-й этаж · м. Тропарёво</span>
                  <span>Время приёма — по договорённости</span>
                </div>
              </div>
              <div className="contact-buttons">
                <button
                  className="button button-cream"
                  onClick={() => openBooking()}
                >
                  Записаться на массаж <ArrowUpRight size={17} />
                </button>
                <a
                  className="contact-route"
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Построить маршрут <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div className="contact-visual">
              <img
                src="/images/building.webp"
                alt="Здание по адресу улица Академика Бакулева, 3 — ориентир для визита"
                loading="lazy"
                width="800"
                height="600"
              />
              <a
                className="map-card"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="map-pin">
                  <MapPin size={21} />
                </span>
                <div>
                  <strong>Гагик · Gago</strong>
                  <span>ул. Академика Бакулева, 3</span>
                </div>
                <ArrowUpRight size={23} />
              </a>
              <span className="contact-photo-label">
                ВАШ ОРИЕНТИР · ВХОД В ЗДАНИЕ
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-main">
          <Brand />
          <span>Бережно к телу. Внимательно к вам.</span>
          <a href="#home" className="back-top">
            Наверх <ArrowRight size={16} />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Гагик. Частная практика массажа.
          </span>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            Мы на Яндекс Картах <ArrowUpRight size={12} />
          </a>
        </div>
      </footer>
      <div className="mobile-book-bar">
        <a href={phoneHref} aria-label="Позвонить Гагику">
          <Phone size={20} />
        </a>
        <button className="button button-primary" onClick={() => openBooking()}>
          Записаться на массаж <ArrowUpRight size={17} />
        </button>
      </div>
      {booking && (
        <BookingDialog selected={booking.selected} onClose={closeBooking} />
      )}
    </>
  )
}
