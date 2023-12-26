const { readFile, writeFile } = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
	try {
		const first = await readFile('./context/first.txt', 'utf8')
		const second = await readFile('./context/test.txt', 'utf8')
		await writeFile(
			'./context/result-promise.txt',
			`This is Awesome: ${first} And ${second}`,
			{ flag : 'a' }
		)
		console.log(first, second);
	} catch (error) {
		console.log(error)
	}
}

start()

// getPath('./context/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))

// getPath = (path) => {
// 	return new Promise ((resolve, reject) => {
// 		readFile(path, 'utf8', (err, data) => {
// 			if(err){
// 				reject(err)
// 			}
// 			else {
// 				resolve(data)
// 			}
// 		})
// 	})
// }