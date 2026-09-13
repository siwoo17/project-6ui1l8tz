export type Category = 'all' | 'wellness' | 'aesthetic' | 'children'

export interface Service {
  id: number
  name: string
  duration: string
  price: string
  category: Exclude<Category, 'all'>
  description: string
}

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'Все направления' },
  { id: 'wellness', label: 'Оздоровительный' },
  { id: 'aesthetic', label: 'Эстетический' },
  { id: 'children', label: 'Детский' },
]

export const services: Service[] = [
  {
    id: 1,
    name: 'Общий классический массаж',
    duration: '60 мин',
    price: '3 500 ₽',
    category: 'wellness',
    description:
      'Время замедлиться. Последовательная работа со всем телом для расслабления и ощущения лёгкости.',
  },
  {
    id: 2,
    name: 'Массаж лица',
    duration: '20 мин',
    price: '800 ₽',
    category: 'aesthetic',
    description:
      'Деликатная работа с мышцами лица. Небольшая пауза для себя и приятное чувство расслабления.',
  },
  {
    id: 3,
    name: 'Массаж спины',
    duration: '30 мин',
    price: '1 800 ₽',
    category: 'wellness',
    description:
      'Особое внимание спине — той части тела, которая каждый день берёт на себя так много.',
  },
  {
    id: 4,
    name: 'Массаж воротниковой зоны',
    duration: '20 мин',
    price: '1 000 ₽',
    category: 'wellness',
    description: 'Локальный массаж области шеи и плеч.',
  },
  {
    id: 5,
    name: 'Массаж при заболеваниях органов грудной клетки',
    duration: '30 мин',
    price: '800 ₽',
    category: 'wellness',
    description:
      'Возможность проведения и показания обсуждаются перед записью.',
  },
  {
    id: 6,
    name: 'Массаж поясничного отдела позвоночника',
    duration: '20 мин',
    price: '1 000 ₽',
    category: 'wellness',
    description: 'Локальная работа с поясничной областью.',
  },
  {
    id: 7,
    name: 'Массаж нижних конечностей',
    duration: '30 мин',
    price: '1 500 ₽',
    category: 'wellness',
    description: 'Массаж ног с вниманием к вашим ощущениям.',
  },
  {
    id: 8,
    name: 'Массаж верхних конечностей',
    duration: '30 мин',
    price: '800 ₽',
    category: 'wellness',
    description: 'Внимательная работа с мышцами рук.',
  },
  {
    id: 9,
    name: 'Поясничный отдел и нижние конечности',
    duration: '45 мин',
    price: '2 000 ₽',
    category: 'wellness',
    description: 'Комплексный массаж поясницы и ног.',
  },
  {
    id: 10,
    name: 'Точечно-рефлекторный массаж стоп',
    duration: '20 мин',
    price: '800 ₽',
    category: 'wellness',
    description: 'Локальная работа со стопами.',
  },
  {
    id: 11,
    name: 'Грудничковый массаж (0–2 года)',
    duration: '30 мин',
    price: '1 200 ₽',
    category: 'children',
    description:
      'Массаж для самых маленьких. Особенности сеанса необходимо обсудить с мастером заранее.',
  },
  {
    id: 12,
    name: 'Массаж живота',
    duration: '15 мин',
    price: '1 000 ₽',
    category: 'wellness',
    description: 'Локальный массаж области живота.',
  },
  {
    id: 13,
    name: 'Общий массаж для детей',
    duration: 'Уточняется при записи',
    price: '1 500 / 2 000 ₽',
    category: 'children',
    description:
      '2–5 лет — 1 500 ₽, 6–14 лет — 2 000 ₽. Продолжительность уточняется у мастера.',
  },
  {
    id: 14,
    name: 'Массаж спины (дети 6–14 лет)',
    duration: '20 мин',
    price: '1 000 ₽',
    category: 'children',
    description: 'Локальный массаж спины с учётом возраста ребёнка.',
  },
  {
    id: 15,
    name: 'Массаж нижних конечностей (дети 2–14 лет)',
    duration: '20 мин',
    price: '800 ₽',
    category: 'children',
    description: 'Массаж ног для детей от 2 до 14 лет.',
  },
  {
    id: 16,
    name: 'Массаж верхних конечностей (дети 2–14 лет)',
    duration: '20 мин',
    price: '600 ₽',
    category: 'children',
    description: 'Массаж рук для детей от 2 до 14 лет.',
  },
  {
    id: 17,
    name: 'Массаж грудной клетки (дети 2–14 лет)',
    duration: '20 мин',
    price: '600 ₽',
    category: 'children',
    description: 'Возможность проведения обсуждается с мастером перед записью.',
  },
  {
    id: 18,
    name: 'Антицеллюлитный массаж: живот, бёдра, ягодицы',
    duration: '45 мин',
    price: '2 500 ₽',
    category: 'aesthetic',
    description: 'Направленная работа с областью живота, бёдер и ягодиц.',
  },
  {
    id: 19,
    name: 'Антицеллюлитный массаж: бёдра, ягодицы',
    duration: '30 мин',
    price: '2 000 ₽',
    category: 'aesthetic',
    description: 'Локальный массаж бёдер и ягодиц.',
  },
  {
    id: 20,
    name: 'Антицеллюлитный массаж: руки, живот, бёдра, ягодицы',
    duration: '50 мин',
    price: '2 500 ₽',
    category: 'aesthetic',
    description: 'Комплексная работа с несколькими зонами тела.',
  },
  {
    id: 21,
    name: 'Лимфодренажный общий массаж',
    duration: '60 / 90 мин',
    price: '4 000 / 5 500 ₽',
    category: 'aesthetic',
    description:
      'Плавный ритм и внимание к каждому движению. Два формата сеанса — выберите время для себя.',
  },
  {
    id: 22,
    name: 'Лимфодренажный массаж — нижние конечности',
    duration: '40 мин',
    price: '2 300 ₽',
    category: 'aesthetic',
    description: 'Лимфодренажный массаж с акцентом на область ног.',
  },
]

export function filterServices(category: Category): Service[] {
  return services.filter(
    (service) => category === 'all' || service.category === category,
  )
}

export function featuredServices(category: Category): Service[] {
  if (category === 'all')
    return services.filter((service) => [1, 3, 21].includes(service.id))
  return filterServices(category).slice(0, 3)
}
