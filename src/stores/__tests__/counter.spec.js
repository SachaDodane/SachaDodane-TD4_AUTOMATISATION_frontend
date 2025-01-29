import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '../counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initialize with count 0', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
  })

  it('should increment count', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  it('should decrement count', () => {
    const store = useCounterStore()
    store.decrement()
    expect(store.count).toBe(-1)
  })

  it('should handle multiple operations', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    store.decrement()
    expect(store.count).toBe(1)
  })

  it('should allow negative numbers', () => {
    const store = useCounterStore()
    store.decrement()
    store.decrement()
    expect(store.count).toBe(-2)
  })
})
