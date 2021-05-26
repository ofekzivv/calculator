let uiDriver = {
    getEmployeeFromDocument: function (obj) {
        let value = {};
        for (let key in obj) {
            if (key === 'action') continue;
            value[key] = document.getElementById('input-' + key).value
        }
        return value
    },

    renderToDocument: function (tableName, obj, array, searchSpecific) {
        if (!searchSpecific) {
            searchSpecific = {}
        }

        let tbody = '';

        // let employees = localStorageFunctions.selectFromDB(tableName);

        outer:
            for (let i = 0; i < array.length; i++) {
                let obj = array[i];

                for (let key in obj) {
                    if (key === 'id') continue;
                    if (searchSpecific[key] && obj[key].indexOf(searchSpecific[key]) === -1) {
                        continue outer;
                    }
                }

                tbody += '<tr>';

                for (let key in obj) {
                    if (key === 'id') continue;
                    let cellId = obj.id + "_" + key;
                    tbody +=
                        `<td id="${cellId}" ondblclick="uiDriver.editCell('${cellId}')" 
                     onfocusout="uiDriver.updateCell('${cellId}')">` + obj[key] + '</td>'
                }
                tbody +=
                    '<td><button onclick="employeeKey.action.delete(' + obj.id + ')">delete</button> ' +
                    '<button onclick="employeeKey.action.update(' + obj.id + ')">edit</button>' +
                    '</td>' +
                    '</tr>'
            }
        document.getElementById(tableName + '-tbody').innerHTML = tbody;
    },
    editCell: function (cellID) {
        var cell = document.getElementById(cellID);
        cell.innerHTML = `<input id="${cellID}_input" type="text" value="${cell.innerHTML}">`
    },
    updateCell: function (cellID) {
        let inputValue = document.getElementById(`${cellID}_input`).value;
        let cell = document.getElementById(cellID);
        cell.innerHTML = inputValue;
        let splitted = cellID.split('_')
        let id = splitted[0];
        let key = splitted[1];
        let obj = {};
        obj[key] = inputValue;
        localStorageFunctions.updateDb(tableName, id, obj)
    }
}
