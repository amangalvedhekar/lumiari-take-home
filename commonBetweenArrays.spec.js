const assert = require('chai').assert;
const expect = require('chai').expect;
const listOne = ['a', 'b', 'c', 'd'];
const listTwo = ['a', 'e', 'c', 'f'];
const intersection = ['a', 'c'];
const emptyArray = [];
import {commonBetweenArrays} from './commonBetweenArrays';

const elementsIntersection = () => {
  const actualValue = commonBetweenArrays(listOne, listTwo);
  expect(actualValue).to.be.an('array');
  assert.deepEqual(intersection, actualValue)
};

const emptyArrayIntersection = () => {
  const actualValue = commonBetweenArrays([], []);
  expect(actualValue).to.be.an('array');
};

const oneEmptyArrayIntersection = () => {
  const actualValue = commonBetweenArrays([], listTwo);
  expect(actualValue).to.be.an('array').that.is.empty;

};

describe('Intersection elements between arrays', () => {

  it(
    'should return elements common to both elements',
    elementsIntersection,
  );

  it('should return empty array if no arguments are passed',
    emptyArrayIntersection,
  );

  it('should return empty array if either one of the argument is empty',
    oneEmptyArrayIntersection,
  );
});
