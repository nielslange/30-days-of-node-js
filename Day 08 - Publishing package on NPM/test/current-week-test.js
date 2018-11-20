'use strict';

var assert = require('chai').assert;
var currentWeek = require('../current-week.js');

describe('number of the current week', function () {
  it('must be a numeric value', function () {
    assert.typeOf(currentWeek.getWeekNumber(), 'number');
  });
  it('must be least 1', function () {
    assert.isAtLeast(currentWeek.getWeekNumber(), 1);
  });
  it('must not exceed 53', function () {
    assert.isAtMost(currentWeek.getWeekNumber(), 53);
  });
});

describe('first day of the current week', function () {
  it('must be a mixed value', function () {
    assert.typeOf(currentWeek.getFirstWeekDay(), 'string');
  });
});

describe('last day of the current week', function () {
  it('must be a mixed value', function () {
    assert.typeOf(currentWeek.getLastWeekDay(), 'string');
  });
});