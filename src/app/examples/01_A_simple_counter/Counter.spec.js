import Counter from './Counter'

describe('Counter object', () => {
  it('should be an instance of Counter', () => {
    const counter = new Counter()
    expect(counter).to.be.an.instanceof(Counter)
  })
})
