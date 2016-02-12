var code = require('../main.js')
var expect = require('chai').expect

describe('leapYear', function(){
  it('today', function(){
    expect(code.leapYear(2016)).to.equal(true)
  })
})

describe('leapYear', function(){
  it('even 400', function(){
    expect(code.leapYear(2000)).to.equal(true)
  })
})

describe('leapYear', function(){
  it('even not 400', function(){
    expect(code.leapYear(1700)).to.equal(false)
  })
})
