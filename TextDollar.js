// TextDollar

const singleDigits = {"1":"One", "2":"Two", "3":"Three", "4":"Four", "5":"Five", "6":"Six", "7":"Seven", "8":"Eight", "9":"Nine"}

const teenDigits = {"10":"Ten", "11":"Eleven", "12":"Twelve", "13":"Thirteen", "14":"Fourteen", "15":"Fifteen", "16":"Sixteen", "17":"Seventeen", "18":"Eighteen","19":"Nineteen"}

const tensDigits = {
	"2":"Twenty", "3":"Thirty","4":"Forty","5":"Fifty","6":"Sixty","7":"Seventy","8":"Eighty","9":"Ninety"
}

function getOnes(val){
	return singleDigits[val] + "Dollars"
}

function getTens(val){
	if(val[0] == 1){
		return teenDigits[val] + "Dollars"
	} else {
		val = val.split("")
		return tensDigits[val[0]] + singleDigits[val[1]] + "Dollars"
	}	
}

function textDollar(val){
	val = val.toString()
	let temp = ""
	
	if(val.length == 1){
		return getOnes(val)
	}
	
	if(val.length == 2){
		return getTens(val)
	}
	
	if(val.length == 3){
		val = val.split("")
		
		let hundreds = val.shift()
		temp += getOnes(hundreds)+"Hundred" 
		
		if(val[0] !== "0"){
			temp += getTens(val.join(""))
		} else {
			temp += getOnes(val.pop())
		}
		return temp
	}
		
	if(val.length == 4){
		let temp = val[2] + val[3]
		return getOnes(val[0]) + "Thousand" + getOnes(val[1]) + "Hundred" + getTens(temp)
		
	}
			
	if(val.length == 5){
		let temp = val[3] + val[4]
		return getTens(val[0] + val[1]) + "Thousand" + getOnes(val[2]) + "Hundred" + getTens(temp)	
	}
				
	if(val.length == 6){
		return getOnes(val[0]) + "Hundred" + getTens(val[1] + val[2]) + "Thousand" + getOnes(val[3]) + "Hundred" + getTens(val[4] + val[5])
	}
					
	if(val.length == 7){
		return getOnes(val[0]) + "Million" + getOnes(val[1]) + "Hundred" + getTens(val[2]+val[3]) + "Thousand" + getOnes(val[4]) + "Hundred" + getTens(val[5] + val[6])
	}
						
	if(val.length == 8){
		return getTens(val[0]+val[1]) + "Million" + getOnes(val[2]) + "Hundred" + getTens(val[3]+val[4]) + "Thousand" + getOnes(val[5]) + "Hundred" + getTens(val[6] + val[7])
	}
							
	if(val.length == 9){
		return getOnes(val[0]) + "Hundred" + getTens(val[1] + val[2]) + "Million" + getOnes(val[3]) + "Hundred" + getTens(val[4] + val[5]) + "Thousand" + getOnes(val[6]) + "Hundred" + getTens(val[7] + val[8])
		
	}
								
	if(val.length == 10){
		console.log("Billions")
		return "OneBillionDollars"
	}
}