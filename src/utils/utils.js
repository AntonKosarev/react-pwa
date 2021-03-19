export default async function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = function (e) {
      e.target.result ? resolve(e.target.result) : reject('No files loaded');
    };
  })
}
