let rowsp = '';
let colltext = '';
var a = fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSLpT6gXQGdhIr0Hjjus-eeWIil4z4qn61dde06FqqgXte4F3ae_LrzcbK51xlfnkVhcXPbHrYIsjlc/pub?output=csv')
.then(response => response.text())
.then(text => {
    colltext = text;
    const rows = colltext.split('\n');
    var rlr = rows.length;
    var rl = (rlr - 2)/10;
    console.log(rows.length);
    console.log(rl);
    itmpagi(rl);
    mainf(1);

    
});

const btnf = document.getElementById("nfbtn");
const btof = document.getElementById("ofbtn"); 
const mbtn = document.getElementById("btnmsb"); 

btnf.addEventListener("click", function() {
    // Add your action for "Newest First" here
    mainf(2);
    // You can replace the alert with your desired action
});

btof.addEventListener("click", function() {
    // Add your action for "Oldest First" here
    mainf(1);
    // You can replace the alert with your desired action
});



function mainf(k) {
    if (k == 1) {
        const rows = colltext.split('\n');
        rowsp = rows.slice(1);
        var idvalue = 1;
        var rowl = 11;
        idvalue = 1;
        for (; idvalue < rowl; idvalue++) {
            
        };
        

        mbtn.innerText = "Oldest First";
        paginClick(1);

    }
    else if (k == 2) {
        var idvalue = 0;
        var rowl = 11;
        const inrow = colltext.split('\n');
        const rvrows = inrow.reverse();
        rvrows.pop();
        // const rows = text.split('\n');
        const rows = rvrows;
        rowsp = rows;
        mbtn.innerText = "Newest First";
        
        paginClick(1);

    }


}

function itmpagi(rl) {
    console.log(rl);
    var rldiv = 1 + Math.trunc(rl);
    console.log(rldiv);
    for (let i= 1; i <= rldiv; i++) { 
        const paginationlot = `
        <li class="page-item"><a class="page-link" href="#" onclick="paginClick(${i});">${i}</a></li>    
        `;
        document.getElementById('pagiitmn').insertAdjacentHTML("beforebegin", paginationlot);
        
    }
    // pagiClick(rowsq, i);

    
}

function paginClick(i) { 
    let divc = document.getElementById('cbody');
    divc.replaceChildren();
    var idvalue = ((i*10))-10;
    var rowl = (i*10);
    if (rowl > rowsp.length) {
        rowl = rowsp.length;
    }
    else {
        var rowl = (i*10);
    }
    for (; idvalue < rowl; idvalue++) {    
        var rowColData = rowsp[idvalue].split(',');
        createcard(rowColData,idvalue);
    };
    

}



function createcard(rowColData,idvalue) {

    const icard = document.createElement("div");
    icard.id = "card"+idvalue;
    icard.className = "col";

    const cin = document.createElement("div");
    cin.className = "card h-100";
    cin.id = "cardbox"+idvalue;

    const detdata = rowColData[7];

    const cimg = document.createElement("img");
    cimg.className ="card-img-top";
    var ilink = rowColData[6];
    if (ilink == null || ilink =="") {
        // break;
    }
    cimg.src = ilink.replace("https://drive.google.com/open?id=","https://drive.google.com/uc?export=view&id=");
    
    const crdbdy = document.createElement("div");
    crdbdy.id = "cardbdy"+idvalue;
    crdbdy.className = "card-body";

    const ttlp = document.createElement("p");
    ttlp.className ="card-title fw-semibold fs-6";
    ttlp.innerText = rowColData[2];     

    const ttlpb = document.createElement("p");
    ttlpb.className ="card-text fw-semibold text-danger";
    ttlpb.innerText = rowColData[5];

    const crdrow = document.createElement("div");
    crdrow.id = "cardrow"+idvalue;
    crdrow.className = "row g-2";

    const cpbtn = document.createElement("button");
    cpbtn.className = "btn btn-outline-danger";
    cpbtn.innerHTML = "Buy Now";
    cpbtn.id = "buyNow";
    cpbtn.onclick = "PbuyNow();";

    const cdbtn = document.createElement("button");
    cdbtn.className = "btn btn-outline-success";
    cdbtn.innerHTML = "Details";
    cdbtn.id = "st-btn";
    cdbtn.onclick = function() {
        const detcont = rowColData[2]; 
        const detprice = rowColData[5];
        const detilink = rowColData[6].replace("https://drive.google.com/open?id=", "https://drive.google.com/uc?export=view&id=");
        const modalId = "myModal"+idvalue;
        const modalContent = `
            <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content bg-dark" data-bs-theme="dark">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row row-cols-1 row-cols-sm-2">
                                <div class="col">
                                    <img class="img-fluid rounded" src="${detilink}" alt="Image">
                                </div>
                                <div class="col mt-2">
                                    <h6 class="title">${detcont}</h6>
                                    <p class="div-data">${detdata.replace(/ -/g, "<br> -")}</p>
                                    <p class="fw-semibold text-white">${detprice}</p>
                                    <button type="button" onclick="PbuyNow();" id="buyNow" class="btn btn-outline-danger mx-2">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        // Append the modal HTML to the document body
        document.body.insertAdjacentHTML("beforeend", modalContent);
    
        // Show the modal
        const myModal = new bootstrap.Modal(document.getElementById(modalId));
        myModal.show();
    };
    
    document.getElementById("cbody").appendChild(icard);
    document.getElementById("card"+idvalue).appendChild(cin);
    document.getElementById("cardbox"+idvalue).appendChild(cimg);
    document.getElementById("cardbox"+idvalue).appendChild(crdbdy);
    document.getElementById("cardbdy"+idvalue).appendChild(ttlp);
    document.getElementById("cardbdy"+idvalue).appendChild(ttlpb);
    document.getElementById("cardbdy"+idvalue).appendChild(crdrow);
    
    document.getElementById("cardrow"+idvalue).appendChild(cdbtn);
    document.getElementById("cardrow"+idvalue).appendChild(cpbtn); 

};



