class KiwiJucieEasy {
    
    constructor() {
    }

    thePouring(capacities, bottles, fromId, toId) {
        for(let i=0; i<fromId.length; i++) {
            let from = fromId[i];
            let to = toId[i];
            
            let fromCap = capacities[from];
            let fromBottle = bottles[from];

            let toCap = capacities[to];
            let toBottle = bottles[to];
            
            let sumBottle = fromBottle + toBottle;

            //to 에 용량이 꽉 찾을 경우.
            if( toCap <= sumBottle) {
                bottles[from] = sumBottle - toCap;
                bottles[to] = toCap;
            } else {
                bottles[from] = 0;
                bottles[to] = sumBottle;
            }
            
        }

        return bottles;
    }
};



const kiwiJucieEasy = new KiwiJucieEasy();

const result = kiwiJucieEasy.thePouring([700000, 800000, 900000, 1000000],
                                        [478478, 478478, 478478, 478478],
                                        [2, 3, 2, 0, 1],
                                        [0, 1, 1, 3, 2]);
console.log(`result : ${result}`);