export default {
    searching: function (tableName, array, objSearched) {
        let sortedArr = [];

        loop1:
            for (let i = 0; i < array.length; i++) {
                let obj = array[i];

                for (let key in obj) {
                    if (key === 'id') continue;
                    if (objSearched[key] && obj[key].indexOf(objSearched[key]) === -1) {
                        continue loop1;
                    }
                }
                sortedArr.push(obj);
            }
        return sortedArr
    },
}


