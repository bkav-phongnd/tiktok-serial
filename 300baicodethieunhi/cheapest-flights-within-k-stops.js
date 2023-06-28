const n = 3, flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src = 0, dst = 2, k = 1;
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    if (n == 2) {
        if (k != 0) {
            return -1;
        } else {
            return flights[0][2];
        }
    }else {
        const rs = nearestPointer(src, flights, dst, []);
        
    }

};
function nearestPointer (number, flights, dst, acc) {
    if(number == dst){
        return acc.map( i => [...i, number])
    }else {
        const nested = flights.filter(i => i[0] == number).map(i => i[1]);
        nested.forEach(element => {
            const findIndexRs = acc.filter(i => i[0] == number & i == i[1] == element);
            if
        });
    }
     
}

findCheapestPrice(n, flights, src, dst, k);