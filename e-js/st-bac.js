// let rowsp = '';
// let colltext = '';
// var a = fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSLpT6gXQGdhIr0Hjjus-eeWIil4z4qn61dde06FqqgXte4F3ae_LrzcbK51xlfnkVhcXPbHrYIsjlc/pub?output=csv')
// .then(response => response.text())
// .then(text => {
    
//     colltext = text;
//     const rows = colltext.split('\n');
//     var rl = (rows.length/10);
//     itmpagi(rl);
//     mainf(1);

    
// });


// const btnf = document.getElementById("nfbtn");
// const btof = document.getElementById("ofbtn"); 
// const mbtn = document.getElementById("btnmsb"); 

// btnf.addEventListener("click", function() {
//     // Add your action for "Newest First" here
//     mainf(2);
//     // You can replace the alert with your desired action
// });

// btof.addEventListener("click", function() {
//     // Add your action for "Oldest First" here
//     mainf(1);
//     // You can replace the alert with your desired action
// });

// function mainf(k) {
//     if (k == 1) {
//         const rows = colltext.split('\n');
//         rowsp = rows.slice(1);
//         var idvalue = 1;
//         var rowl = 11;

//         idvalue = 1;
//         for (; idvalue < rowl; idvalue++) {

            
//         };
        

//         mbtn.innerText = "Oldest First";
//         paginClick(1);

//     }
//     else if (k == 2) {
//         var idvalue = 0;
//         var rowl = 11;
//         const inrow = colltext.split('\n');
//         const rvrows = inrow.reverse();
//         rvrows.pop();
//         // const rows = text.split('\n');
//         const rows = rvrows;
//         rowsp = rows;
//         mbtn.innerText = "Newest First";
        
//         paginClick(1);

//     }



    


// }


// function createcard(rowColData,idvalue) {

//     const icard = document.createElement("div");
//     icard.id = "card"+idvalue;
//     icard.className = "col";

//     const cin = document.createElement("div");
//     cin.className = "card h-100";
//     cin.id = "cardbox"+idvalue;

//     const detdata = rowColData[7];

//     const cimg = document.createElement("img");
//     cimg.className ="card-img-top";
//     var ilink = rowColData[6];
//     if (ilink == null || ilink =="") {
//         // break;
//     }
//     cimg.src = ilink.replace("https://drive.google.com/open?id=","https://drive.google.com/uc?export=view&id=");
    
//     const crdbdy = document.createElement("div");
//     crdbdy.id = "cardbdy"+idvalue;
//     crdbdy.className = "card-body";

//     const ttlp = document.createElement("p");
//     ttlp.className ="card-title fw-semibold fs-6";
//     ttlp.innerText = rowColData[2];     

//     const ttlpb = document.createElement("p");
//     ttlpb.className ="card-text fw-semibold text-danger";
//     ttlpb.innerText = rowColData[5];

//     const cpbtn = document.createElement("button");
//     cpbtn.className = "btn btn-outline-danger mx-2";
//     cpbtn.innerHTML = "Buy Now";
//     cpbtn.id = "st-btn";

//     const cdbtn = document.createElement("button");
//     cdbtn.className = "btn btn-outline-success";
//     cdbtn.innerHTML = "Details";
//     cdbtn.id = "st-btn";
//     cdbtn.onclick = function() {
//         const detcont = rowColData[2]; 
//         const detprice = rowColData[5];
//         const detilink = rowColData[6].replace("https://drive.google.com/open?id=", "https://drive.google.com/uc?export=view&id=");
//         const modalId = "myModal"+idvalue;
//         const modalContent = `
//             <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div class="modal-dialog modal-lg">
//                     <div class="modal-content bg-dark" data-bs-theme="dark">
//                         <div class="modal-header">
//                             <h5 class="modal-title" id="exampleModalLabel">Details</h5>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                             <div class="row row-cols-1 row-cols-sm-2">
//                                 <div class="col">
//                                     <img class="img-fluid rounded" src="${detilink}" alt="Image">
//                                 </div>
//                                 <div class="col mt-2">
//                                     <h6 class="title">${detcont}</h6>
//                                     <p class="div-data">${detdata.replace(/ -/g, "<br> -")}</p>
//                                     <p class="fw-semibold text-white">${detprice}</p>
//                                     <button type="button" class="btn btn-outline-danger mx-2">Buy Now</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
    
//         // Append the modal HTML to the document body
//         document.body.insertAdjacentHTML("beforeend", modalContent);
    
//         // Show the modal
//         const myModal = new bootstrap.Modal(document.getElementById(modalId));
//         myModal.show();
//     };
    
//     document.getElementById("cbody").appendChild(icard);
//     document.getElementById("card"+idvalue).appendChild(cin);
//     document.getElementById("cardbox"+idvalue).appendChild(cimg);
//     document.getElementById("cardbox"+idvalue).appendChild(crdbdy);
//     document.getElementById("cardbdy"+idvalue).appendChild(ttlp);
//     document.getElementById("cardbdy"+idvalue).appendChild(ttlpb);

//     document.getElementById("cardbdy"+idvalue).appendChild(cdbtn);
//     document.getElementById("cardbdy"+idvalue).appendChild(cpbtn); 

// };


// function itmpagi(rl) {
//     var rldiv = 1 + (rl >>> 0);
//     for (let i= 1; i < rldiv; i++) { 
//         const paginationlot = `
//         <li class="page-item"><a class="page-link" href="#" onclick="paginClick(${i});">${i}</a></li>    
//         `;
//         document.getElementById('pagiitmn').insertAdjacentHTML("beforebegin", paginationlot);
        
//     }
//     // pagiClick(rowsq, i);

    
// }

// function paginClick(i) { 
//     let divc = document.getElementById('cbody');
//     divc.replaceChildren();
//     var idvalue = ((i*10))-10;
//     var rowl = (i*10);
//     if (rowl > rowsp.length) {
//         rowl = rowsp.length;
//     }
//     else {
//         var rowl = (i*10);
//     }
//     for (; idvalue < rowl; idvalue++) {    
//         var rowColData = rowsp[idvalue].split(',');
//         createcard(rowColData,idvalue);
//     };
    

// }

let rowsp="",colltext="";
var a=fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSLpT6gXQGdhIr0Hjjus-eeWIil4z4qn61dde06FqqgXte4F3ae_LrzcbK51xlfnkVhcXPbHrYIsjlc/pub?output=csv")
.then(e=>e.text())
.then(e=>{itmpagi((colltext=e).split("\n").length/10),mainf(1)});
const btnf=document.getElementById("nfbtn"),btof=document.getElementById("ofbtn"),mbtn=document.getElementById("btnmsb");
function mainf(e){
    if(1==e){
        var t=colltext.split("\n"),d=(rowsp=t.slice(1),1),n=11;
        for(d=1;d<n;d++);mbtn.innerText="Oldest First",paginClick(1)
    }else 2==e&&(d=0,n=11,(t=colltext.split("\n").reverse()).pop(),e=t,rowsp=e,mbtn.innerText="Newest First",paginClick(1))
}
function createcard(a,l){
    var e=document.createElement("div"),t=(e.id="card"+l,e.className="col",document.createElement("div"));
    t.className="card h-100",t.id="cardbox"+l;
    const o=a[7];
    var d=document.createElement("img"),n=(d.className="card-img-top",a[6]),n=(d.src=n.replace("https://drive.google.com/open?id=","https://drive.google.com/uc?export=view&id="),document.createElement("div")),c=(n.id="cardbdy"+l,n.className="card-body",document.createElement("p")),i=(c.className="card-title fw-semibold fs-6",c.innerText=a[2],document.createElement("p")),s=(i.className="card-text fw-semibold text-danger",i.innerText=a[5],document.createElement("button")),m=(s.className="btn btn-outline-danger mx-2",s.innerHTML="Buy Now",s.id="st-btn",document.createElement("button"));
    m.className="btn btn-outline-success",m.innerHTML="Details",m.id="st-btn",m.onclick=function(){
        var e=a[2],t=a[5],d=a[6].replace("https://drive.google.com/open?id=","https://drive.google.com/uc?export=view&id="),n="myModal"+l,d=`
            <div class="modal fade" id="${n}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content bg-dark" data-bs-theme="dark">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row row-cols-1 row-cols-sm-2">
                                <div class="col">
                                    <img class="img-fluid rounded" src="${d}" alt="Image">
                                </div>
                                <div class="col mt-2">
                                    <h6 class="title">${e}</h6>
                                    <p class="div-data">${o.replace(/ -/g,"<br> -")}</p>
                                    <p class="fw-semibold text-white">${t}</p>
                                    <button type="button" class="btn btn-outline-danger mx-2">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;document.body.insertAdjacentHTML("beforeend",d),new bootstrap.Modal(document.getElementById(n)).show()},document.getElementById("cbody").appendChild(e),document.getElementById("card"+l).appendChild(t),document.getElementById("cardbox"+l).appendChild(d),document.getElementById("cardbox"+l).appendChild(n),document.getElementById("cardbdy"+l).appendChild(c),document.getElementById("cardbdy"+l).appendChild(i),document.getElementById("cardbdy"+l).appendChild(m),document.getElementById("cardbdy"+l).appendChild(s)}function itmpagi(e){var t=1+(e>>>0);for(let e=1;e<t;e++){var d=`
        <li class="page-item"><a class="page-link" href="#" onclick="paginClick(${e});">${e}</a></li>    
        `;document.getElementById("pagiitmn").insertAdjacentHTML("beforebegin",d)}}function paginClick(e){document.getElementById("cbody").replaceChildren();var t=10*e-10,d=10*e;for(d=d>rowsp.length?rowsp.length:10*e;t<d;t++)createcard(rowsp[t].split(","),t)}btnf.addEventListener("click",function(){mainf(2)}),btof.addEventListener("click",function(){mainf(1)});