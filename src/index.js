const checkIfElementExists = (array = [], n) => {
    return array.length >= n;
};

const getLoveTrianglesCount = (preferences = []) => {
    // your implementation
    let loveTrianglesCount = 0;

    preferences.forEach((item, index) => {

        if (checkIfElementExists(preferences, item)) {

            const secondLover = preferences[item - 1];

            if (checkIfElementExists(preferences, secondLover)) {
                const thirdLover = preferences[secondLover - 1]

                if (thirdLover === index + 1) {
                    loveTrianglesCount++
                }
            }
        }

    });

    return Math.floor(loveTrianglesCount / 3);
};

/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = getLoveTrianglesCount;