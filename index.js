function findAllPermutations(string){
    let lettersSplit = string.split('')
    let results = [[lettersSplit.shift()]]
    while (lettersSplit.length){
        const currLetter = lettersSplit.shift()
        let tmpResults =[]
        results.forEach(result=>{
            let index = 0
            while (index <= result.length){
                const tmp = [...result]
                tmp.splice(index, 0, currLetter)
                tmpResults.push(tmp)
                index++




            }
            
        })
        
        results = tmpResults


        }
        return results
        .map(letterArray => letterArray.join(''))
        .filter((el, idx, self) => (self.indexOf(el) === idx))
        .sort()


}
 