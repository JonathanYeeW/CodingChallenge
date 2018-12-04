// Max Range Sum

function findMaxRange(array){
	let sum = 0
	for(let i=0; i < array.length; i++){
		let temp = 0
		for(let x=i; x < array.length; x++){
			temp += array[x]
			if(temp > sum){
				sum = temp
			}
		}
	}
	console.log(sum)
}

const test1 = [10,7,-3,-10,4,2,8,-2,4,-5,-6]
const test2 = [1,2,5,3,4]
const test3 = [7,-3,-10,4,2,8,-2,4,-5,-2] // 16
const test4 = [-1,-2,-3] // 0

findMaxRange(test1)
findMaxRange(test2)
findMaxRange(test3)
findMaxRange(test4)