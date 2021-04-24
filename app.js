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
  await worker.terminate();
})();
