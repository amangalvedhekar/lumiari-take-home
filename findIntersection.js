const intersection = require('ramda').intersection;

export const findIntersectionWithRamda = (listOne = [], listTwo = []) => {
  return listOne.map(user => {
    let intersect = [];
    listTwo.map(job => {
      const match = intersection(user.tags, job.tags);
      if (match.length >= 2) {
        intersect.push(Object.assign({ userId: user.id }, { job }));
      }
    });
    return intersect;
  });
};
