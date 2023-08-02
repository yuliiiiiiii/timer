let timeStringArray = process.argv.slice(2)
let timeArray = timeStringArray.map(timeSring => parseInt(timeSring));

for (let time of timeArray) {
  if (time < 0) {
    continue;
  }
  if (isNaN(time)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  },time * 1000);
};
