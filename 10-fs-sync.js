 const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./context/first.txt', 'utf8')
const test = readFileSync('./context/test.txt', 'utf8')

writeFileSync(
	'./context/result.txt',
	`Here is the result : ${first}, ${test}`,
	{ flag : 'a'}
)