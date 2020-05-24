import {foo, baz} from '../../main/ts'

describe('index', () => {
  it('exports foo', () => {
    expect(foo).toBe('bar')
    expect(baz).toBe('qux')
  })
})
