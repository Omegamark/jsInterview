function getTravelTime(distance) {
    return function(speed) {
        return distance / speed;
    };
}

// Since the distance between Boston and NYC is always 400km.
const travelTimeBosNyc = getTravelTime(400);

// Only need to pass in the speed to get the time.
console.log(travelTimeBosNyc(40))