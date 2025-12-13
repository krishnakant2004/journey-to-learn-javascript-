// order matter

let mp = new Map()
mp.set('in','india')
mp.set('us','united state of america')
mp.set('fr','france')
mp.set('eg','england')

for(let ele of mp){ // iterate over each value of iterable
    console.log(ele)
}

//deconstruct

for(let [key , value] of mp){ // iterate over each value of iterable
    console.log(`${key} :- ${value}`)
}