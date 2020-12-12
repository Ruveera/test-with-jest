const {sum, data} = require('./index.js')
// const data = require('./index.js')

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3)
})

test('adds 1 + 4 to equal 5', () => {
	expect(sum(1, 4)).toBe(5)
})


test('two plus two is four', () => {
	expect(sum(2, 2)).toBe(4)
})

test('object assignment', () => {
	expect(data).toEqual({one: 1, two: 2})
})
// test('object assignment', () => {
//   const data = {one: 1};
//   data['two'] = 2;
//   expect(data).toEqual({one: 1, two: 2});
// });


test('adding positive numbers is not zero', () => {
	for (let a = 1; a < 10; a++) {
		for (let b = 1; b < 10; b++) {
			expect(a + b).not.toBe(0)
		}
	}
})