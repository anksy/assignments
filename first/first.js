/**
 * 
 * @param {*} string - word to get combinations... 
 */
const wordCombinations = string => [...string].reduce(accumulator => [accumulator[0].substring(1) + accumulator[0].substring(0, 1), ...accumulator], [string]);

/**
 * 
 * @param {*} cities - list of cities in array
 */
const matchingBlocks = cities => {
    return cities.reduce((accumulator, city) => {

        const combinations = accumulator.find(elem => wordCombinations(city.toLowerCase()).includes(elem[0].toLowerCase()));

        combinations
            ? accumulator.splice(accumulator.indexOf(combinations), 1, [...combinations, city])
            : accumulator.push([city]);

        return accumulator;
    }, []);
};

/** Init Timer */
console.time("timer");
/** Execute Function */
const exec = matchingBlocks([ "Tokyo", "London", "Rome", "Donlon", "Kyoto", "Paris" ]);
/** Log result */
console.log({ exec });
/** Return Functoin Execution time*/
console.timeEnd("timer")