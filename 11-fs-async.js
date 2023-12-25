const { readFile, writeFile } = require('fs')

readFile('./context/first.txt', 'utf8', (err, result) => {
	if(err){
		console.log(err);
		return
	}
	const first = result
	readFile('./context/test.txt', 'utf8', (err, result) => {
		if(err){
			console.log(err);
			return
		}
		const second = result
		writeFile(
			'./context/result-async.txt',
			`Here is the result : ${first}, ${second}`,
			(err, result) => {
				if(err) {
					console.log(err);
					return
				}
				console.log(result);
			}
		)
	})
})