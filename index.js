const users = require('./users');
const jobs = require('./jobs');
import {commonBetweenArrays } from './commonBetweenArrays';
import {printValues} from './printValues';
import {findIntersectionWithRamda} from './findIntersection';

const findUserMatchedJobs = (usersList, jobsList) => {
  return usersList.map(user => {
    let intersect = [];
    jobsList.map(job => {
      const match = commonBetweenArrays(user.tags, job.tags);
      if (match.length >= 2) {
        intersect.push(Object.assign({ userId: user.id }, { job }));
      }
    });
    return intersect;
  });
};

console.log('\n\n\n/////// output using hash table////////\n\n\n');
printValues(findUserMatchedJobs(users, jobs));

//using ramda
console.log('\n\n\n////// output using ramda//////\n\n\n');
printValues(findIntersectionWithRamda(users, jobs));
