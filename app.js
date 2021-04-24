const fs = require('fs');
const { createWorker } = require('tesseract.js');

const worker = createWorker({
  logger: (m) => console.log(m),
});
(async () => {
  await worker.load();
  await worker.loadLanguage('heb');
  await worker.initialize('heb');
  const {
    data: { text },
  } = await worker.recognize('../../../Pictures/ocr/Capture.PNG');
  console.log(text);
  let array = text.split(' ');
  console.log(array);
  for (let word of array) {
    console.log(word.split('').reverse().join(''));
  }
  const tostring = array.join(' ');
  console.log(tostring);

  await worker.terminate();
})();
