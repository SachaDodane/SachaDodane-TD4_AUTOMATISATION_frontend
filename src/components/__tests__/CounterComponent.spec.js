import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import CounterComponent from '../CounterComponent.vue'

describe('CounterComponent', () => {
  it('mounts properly', () => {
    setActivePinia(createPinia())
    const wrapper = mount(CounterComponent)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays initial counter value', () => {
    setActivePinia(createPinia())
    const wrapper = mount(CounterComponent)
    expect(wrapper.find('#counter').text()).toBe('0')
  })

  it('increments counter when increment button is clicked', async () => {
    setActivePinia(createPinia())
    const wrapper = mount(CounterComponent)
    await wrapper.find('#increment').trigger('click')
    expect(wrapper.find('#counter').text()).toBe('1')
  })

  it('decrements counter when decrement button is clicked', async () => {
    setActivePinia(createPinia())
    const wrapper = mount(CounterComponent)
    await wrapper.find('#decrement').trigger('click')
    expect(wrapper.find('#counter').text()).toBe('-1')
  })

  it('handles multiple clicks correctly', async () => {
    setActivePinia(createPinia())
    const wrapper = mount(CounterComponent)
    
    await wrapper.find('#increment').trigger('click')
    await wrapper.find('#increment').trigger('click')
    await wrapper.find('#decrement').trigger('click')
    
    expect(wrapper.find('#counter').text()).toBe('1')
  })

  it('renders buttons with correct text', () => {
    setActivePinia(createPinia())
    const wrapper = mount(CounterComponent)
    
    expect(wrapper.find('#increment').text()).toBe('Increment')
    expect(wrapper.find('#decrement').text()).toBe('Decrement')
  })

  it('updates store value correctly', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const wrapper = mount(CounterComponent)
    
    await wrapper.find('#increment').trigger('click')
    await wrapper.find('#increment').trigger('click')
    
    const store = wrapper.vm.counterStore
    expect(store.count).toBe(2)
  })
})
