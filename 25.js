const cityData = [
    {
    city: 'San Diego',
    vehicles: 1541,
    accidents: 11,
    }
    ,
    {
    city: 'Miami',
    vehicles: 6666,
    accidents: 66,   
    }
    ,
    {
    city: 'San Francisco',
    vehicles: 1800,
    accidents: 80, 
    }]


let c = 0;

let highestAccidents = {accidents: 0}


while(c < cityData.length) {
    const item = cityData[c];
    if(item.accidents > highestAccidents.accidents) {
    highestAccidents.accidents = item.accidents
    }
    c++
}
console.log(highestAccidents)

c = 0

let lowestAccidents;

while(c < cityData.length) {
    const item = cityData[c];
    if(item.accidents < lowestAccidents || !lowestAccidents) {
    lowestAccidents = item.accidents
    }
    c++
}
console.log(lowestAccidents)


i = cityData.length
total = 0

while(i--) { 
    total += cityData[i].vehicles
}

console.log(total/cityData.length)

sum = 0
i = cityData.length

while(i--) {
    const item = cityData[i]
    if (item.vehicles < 2000){
    sum += item.vehicles
    }
}

console.log(sum/cityData.length)










