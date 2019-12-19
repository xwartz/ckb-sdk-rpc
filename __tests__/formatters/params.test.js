const { default: paramsFmt } = require('../../lib/paramsFormatter')
const fixtures = require('./params.fixtures.json')

describe('params formatter', () => {
  describe.each(Object.keys(fixtures))('%s', methodName => {
    const fixtureTable = Object.values(fixtures[methodName]).map(({ param, expected, exception }) => [
      param,
      expected,
      exception,
    ])
    test.each(fixtureTable)('%j => %j', (param, expected, exception) => {
      if (undefined !== expected) {
        const formatted = paramsFmt[methodName](param)
        expect(formatted).toEqual(expected)
      }
      if (undefined !== exception) {
        expect(() => paramsFmt[methodName](param)).toThrow(new Error(exception))
      }
    })
  })

  describe('toOptional', () => {
    it('toOptional with other format should return the formatted value', () => {
      expect(paramsFmt.toOptional(paramsFmt.toNumber)(BigInt(20))).toBe('0x14')
    })

    it("toOptional with other format should return the raw value if it's undefined or null", () => {
      expect(paramsFmt.toOptional(paramsFmt.toNumber)(null)).toBe(null)
      expect(paramsFmt.toOptional(paramsFmt.toNumber)(undefined)).toBe(undefined)
    })

    it('toOptional without other format should return the raw value', () => {
      expect(paramsFmt.toOptional()(20)).toBe(20)
    })

    it('toOptional should throw errors which are thrown from other format', () => {
      expect(() => paramsFmt.toOptional(paramsFmt.toNumber)('20')).toThrow('Hex string 20 should start with 0x')
    })
  })
})
