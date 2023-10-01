
var a = fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSLpT6gXQGdhIr0Hjjus-eeWIil4z4qn61dde06FqqgXte4F3ae_LrzcbK51xlfnkVhcXPbHrYIsjlc/pub?output=csv')
.then(response => response.text())
.then(text => {
    const rows = text.split('\n');
    const data = rows.map(row => row.split(','));
    var dbody= document.getElementById("up-cbody").getElementsByClassName("cbody")[0];
    dbody.innerHTML = "";
    var idvalue = 0;
    for (var row = 1; row < rows.length; row++) {
        idvalue = row;
        var rowColData = rows[row].split(',');
        createcard(rowColData,idvalue);


    };

});

function createcard(rowColData,idvalue) {

    const box = document.createElement("div");
    box.id = "card"+idvalue;
    box.className = "acard";

    const cin = document.createElement("div");
    cin.className = "card-info";
    cin.id = "card-info"+idvalue;

    const cimg = document.createElement("img");
    cimg.className ="c-img";
    var ilink = rowColData[5];
    if (ilink == null || ilink =="") {
        // break;
    }
    cimg.src = ilink.replace("https://drive.google.com/open?id=","https://drive.google.com/uc?export=view&id=");
    
    


    document.getElementById("cbody").appendChild(box);
    document.getElementById("card"+idvalue).appendChild(cin);
    document.getElementById("card-info"+idvalue).appendChild(cimg);
    document.getElementById("card-info"+idvalue).appendChild(ttlp);
    document.getElementById("card-info"+idvalue).appendChild(ttlpb);
    document.getElementById("card-info"+idvalue).appendChild(cdbtn);
    document.getElementById("card-info"+idvalue).appendChild(cpbtn); 



};