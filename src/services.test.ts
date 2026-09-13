import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  categories,
  featuredServices,
  filterServices,
  services,
} from './services.ts'

test('the complete price list includes each source row exactly once', () => {
  assert.equal(services.length, 22)
  assert.deepEqual(
    services.map((service) => service.id),
    Array.from({ length: 22 }, (_, index) => index + 1),
  )
  assert.equal(new Set(services.map((service) => service.name)).size, 22)
})

test('category filters partition the full price list without omissions or duplicates', () => {
  const filtered = categories
    .filter((category) => category.id !== 'all')
    .flatMap((category) => {
      const matches = filterServices(category.id)
      assert.ok(matches.length > 0)
      assert.ok(matches.every((service) => service.category === category.id))
      return matches.map((service) => service.id)
    })
  assert.deepEqual(
    filtered.sort((a, b) => a - b),
    services.map((service) => service.id),
  )
  assert.deepEqual(filterServices('all'), services)
})

test('featured services always belong to the selected category and full list', () => {
  for (const category of categories) {
    const featured = featuredServices(category.id)
    assert.equal(featured.length, 3)
    assert.equal(
      new Set(featured.map((service) => service.id)).size,
      featured.length,
    )
    assert.ok(
      featured.every((service) =>
        filterServices(category.id).includes(service),
      ),
    )
  }
})

test('ambiguous source durations and paired prices are preserved without inventing values', () => {
  const children = services.find((service) => service.id === 13)
  assert.equal(children?.duration, 'Уточняется при записи')
  assert.equal(children?.price, '1 500 / 2 000 ₽')
  const drainage = services.find((service) => service.id === 21)
  assert.equal(drainage?.duration, '60 / 90 мин')
  assert.equal(drainage?.price, '4 000 / 5 500 ₽')
})
