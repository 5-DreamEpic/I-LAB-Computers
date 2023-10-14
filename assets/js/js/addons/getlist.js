let rowsq = '';

var a = fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSLpT6gXQGdhIr0Hjjus-eeWIil4z4qn61dde06FqqgXte4F3ae_LrzcbK51xlfnkVhcXPbHrYIsjlc/pub?output=csv')
.then(response => response.text())
.then(text => {
    const rows = text.split('\n');
    rowsq = rows;
    var idvalue = 1;
    var rowl = 5;
    for (; idvalue < rowl; idvalue++) {
        
        var rowColData = rows[idvalue].split(',');
        // createtable(rowColData,idvalue);

        
        
    };
    
    var rl = (rows.length/5);
    // pagiClick(rows);
    itmpagination(rl,rows);
    pagiClick(1)
    

});

function createtable(rowColData,idvalue) {
    
    const itmid = rowColData[0];
    const itmdate = rowColData[1];
    const itmname = rowColData[2];
    const itmbrnd = rowColData[3];
    const itmqty = rowColData[4];
    const itmdis = rowColData [8];
    const itmpric = rowColData[5];

    const trow = `
        <tr>
            <td> ${itmid} </td>
            <td> ${itmdate} </td>
            <td> ${itmname} </td>
            <td> ${itmbrnd} </td>
            <td> ${itmqty} </td>
            <td class="text-primary"> ${itmpric} </td>
            <td> ${itmdis} </td>
            <td><a href=""><i class="material-icons" style="color: rgb(112,112,112);">delete</i></a></td>
        </tr>
    
    `;
    document.getElementById('tbllist').insertAdjacentHTML("beforeend", trow);
};

function itmpagination(rl, rows) {
    var rldiv = 1 + (rl >>> 0);
    for (let i= 1; i < rldiv; i++) {
        const paginationlot = `
            <li class="page-item"><a class="page-link active" href="#" onclick="pagiClick(${i});">${i}</a></li>    
        `;
        document.getElementById('pagiItmn').insertAdjacentHTML("beforebegin", paginationlot);
        
    }
    console.log(rldiv);
    // pagiClick(rowsq, i);

    
}

function pagiClick(i) { 
    let divc = document.getElementById('tbllist');
    divc.replaceChildren();
    
    var idvalue = ((i*5)+1)-5;
    var rowl = (i*5)+1;

    if (rowl > rowsq.length) {
        rowl = rowsq.length;
    }
    else {
        var rowl = (i*5)+1;
        

    }
    for (; idvalue < rowl; idvalue++) {
            
        var rowColData = rowsq[idvalue].split(',');
        createtable(rowColData,idvalue);
        
    };
    

}

