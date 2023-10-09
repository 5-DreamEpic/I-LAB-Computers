var a = fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSLpT6gXQGdhIr0Hjjus-eeWIil4z4qn61dde06FqqgXte4F3ae_LrzcbK51xlfnkVhcXPbHrYIsjlc/pub?output=csv')
.then(response => response.text())
.then(text => {
    const rows = text.split('\n');
    const data = rows.map(row => row.split(','));
    // var dbody= document.getElementById("cbody").getElementsByClassName("col")[0];
    // dbody.innerHTML = "";
    var idvalue = 0;
    for (var row = 1; row < rows.length; row++) {
        idvalue = row;
        var rowColData = rows[row].split(',');
        createtable(rowColData,idvalue);
    };

});

function createtable(rowColData,idvalue) {
    const itmid = rowColData[0];
    const itmname = rowColData[2];
    const itmbrnd = rowColData[3];
    const itmqty = rowColData[4];
    const itmpric = rowColData[5];

    const trow = `
        <tr>
            <td> ${itmid} </td>
            <td> ${itmname} </td>
            <td> ${itmbrnd} </td>
            <td> ${itmqty} </td>
            <td class="text-primary"> ${itmpric} </td>
            <td><a href=""><i class="material-icons" style="color: rgb(112,112,112);">delete</i></a></td>
        </tr>
    
    `;
    document.getElementById('tbllist').insertAdjacentHTML("afterend", trow);
};