const checkIfElementExists = (array = [], n) => {
    return array.length >= n;
};

const getLover = (array = [], n) => {
    if (checkIfElementExists(array, n)) {
        return array[n - 1]
    }
}

const getLoveTrianglesCount = (preferences = []) => {
    // your implementation
    let loveTrianglesCount = 0;

    preferences.forEach((item, index) => {

        const secondLover = getLover(preferences, item);

        if (secondLover) {
            const thirdLover = getLover(preferences, secondLover)

            if (thirdLover === index + 1) {
                loveTrianglesCount++
            }
        }

    });

    return Math.floor(loveTrianglesCount / 3);
};

/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
// module.exports = getLoveTrianglesCount;
export { getLoveTrianglesCount };