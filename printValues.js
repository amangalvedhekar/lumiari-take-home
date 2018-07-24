export const printValues = printObject => {
  printObject.map(object => {
    object.map(userJob => {
      console.log('User ', userJob.userId, 'matched to ', userJob.job);
    });
  });
};
