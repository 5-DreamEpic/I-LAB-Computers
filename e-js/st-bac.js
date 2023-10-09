
// var a = fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSLpT6gXQGdhIr0Hjjus-eeWIil4z4qn61dde06FqqgXte4F3ae_LrzcbK51xlfnkVhcXPbHrYIsjlc/pub?output=csv')
// .then(response => response.text())
// .then(text => {
//     const rows = text.split('\n');
//     const data = rows.map(row => row.split(','));
//     // var dbody= document.getElementById("cbody").getElementsByClassName("col")[0];
//     // dbody.innerHTML = "";
//     var idvalue = 0;
//     for (var row = 1; row < rows.length; row++) {
//         idvalue = row;
//         var rowColData = rows[row].split(',');
//         createcard(rowColData,idvalue);
//     };

// });

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


function _0x40cf(){const _0xb34cbf=['947814lZsaUP','btn\x20btn-outline-success','onclick','map','body','card-img-top','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22fw-semibold\x20text-white\x22>','cardbdy','1045228LPiRCS','9PtYahE','createElement','appendChild','innerText','div','className','card','then','myModal','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal\x20fade\x22\x20id=\x22','https://drive.google.com/open?id=','cbody','27234EifgjD','split','innerHTML','<br>\x20-','Modal','length','replace','card-title\x20fw-semibold\x20fs-6','insertAdjacentHTML','src','https://drive.google.com/uc?export=view&id=','st-btn','6706820goTAif','card-body','2242740GbQgzu','btn\x20btn-outline-danger\x20mx-2','151859xSiJDz','text','beforeend','Buy\x20Now','getElementById','cardbox','Details','https://docs.google.com/spreadsheets/d/e/2PACX-1vSLpT6gXQGdhIr0Hjjus-eeWIil4z4qn61dde06FqqgXte4F3ae_LrzcbK51xlfnkVhcXPbHrYIsjlc/pub?output=csv','2493808AyFWZc','\x22\x20tabindex=\x22-1\x22\x20aria-labelledby=\x22exampleModalLabel\x22\x20aria-hidden=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-dialog\x20modal-lg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x20bg-dark\x22\x20data-bs-theme=\x22dark\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20class=\x22modal-title\x22\x20id=\x22exampleModalLabel\x22>Details</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22\x20aria-label=\x22Close\x22></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20row-cols-1\x20row-cols-sm-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22img-fluid\x20rounded\x22\x20src=\x22','3xRLAkB','card-text\x20fw-semibold\x20text-danger','7kytLxs'];_0x40cf=function(){return _0xb34cbf;};return _0x40cf();}function _0x4ad7(_0x26d8da,_0x389334){const _0x40cf45=_0x40cf();return _0x4ad7=function(_0x4ad7e7,_0x30fc5f){_0x4ad7e7=_0x4ad7e7-0x1ef;let _0x191318=_0x40cf45[_0x4ad7e7];return _0x191318;},_0x4ad7(_0x26d8da,_0x389334);}const _0x47287f=_0x4ad7;(function(_0x5a018d,_0x31e0fa){const _0xcde52b=_0x4ad7,_0x597cf1=_0x5a018d();while(!![]){try{const _0x19170d=-parseInt(_0xcde52b(0x1ff))/0x1+-parseInt(_0xcde52b(0x20c))/0x2+parseInt(_0xcde52b(0x209))/0x3*(parseInt(_0xcde52b(0x214))/0x4)+parseInt(_0xcde52b(0x1fd))/0x5+parseInt(_0xcde52b(0x1ef))/0x6*(-parseInt(_0xcde52b(0x20b))/0x7)+-parseInt(_0xcde52b(0x207))/0x8*(parseInt(_0xcde52b(0x215))/0x9)+parseInt(_0xcde52b(0x1fb))/0xa;if(_0x19170d===_0x31e0fa)break;else _0x597cf1['push'](_0x597cf1['shift']());}catch(_0x4262c0){_0x597cf1['push'](_0x597cf1['shift']());}}}(_0x40cf,0x6b0ea));var a=fetch(_0x47287f(0x206))[_0x47287f(0x21c)](_0x211b47=>_0x211b47[_0x47287f(0x200)]())[_0x47287f(0x21c)](_0x93a4fd=>{const _0x27623d=_0x47287f,_0x47f9d2=_0x93a4fd[_0x27623d(0x1f0)]('\x0a'),_0x488cd7=_0x47f9d2[_0x27623d(0x20f)](_0x378aca=>_0x378aca['split'](','));var _0x2d0abe=0x0;for(var _0x5afcc3=0x1;_0x5afcc3<_0x47f9d2[_0x27623d(0x1f4)];_0x5afcc3++){_0x2d0abe=_0x5afcc3;var _0x41e7f6=_0x47f9d2[_0x5afcc3][_0x27623d(0x1f0)](',');createcard(_0x41e7f6,_0x2d0abe);};});function createcard(_0x2eb174,_0x5be034){const _0x54d21a=_0x47287f,_0x30ec1d=document[_0x54d21a(0x216)](_0x54d21a(0x219));_0x30ec1d['id']='card'+_0x5be034,_0x30ec1d[_0x54d21a(0x21a)]='col';const _0x86b51b=document[_0x54d21a(0x216)]('div');_0x86b51b[_0x54d21a(0x21a)]='card\x20h-100',_0x86b51b['id']=_0x54d21a(0x204)+_0x5be034;const _0x1590c7=_0x2eb174[0x7],_0xb79ae1=document['createElement']('img');_0xb79ae1['className']=_0x54d21a(0x211);var _0x10df2a=_0x2eb174[0x6];if(_0x10df2a==null||_0x10df2a==''){}_0xb79ae1[_0x54d21a(0x1f8)]=_0x10df2a[_0x54d21a(0x1f5)](_0x54d21a(0x21f),_0x54d21a(0x1f9));const _0x4e6713=document[_0x54d21a(0x216)](_0x54d21a(0x219));_0x4e6713['id']=_0x54d21a(0x213)+_0x5be034,_0x4e6713[_0x54d21a(0x21a)]=_0x54d21a(0x1fc);const _0x2bbbd3=document['createElement']('p');_0x2bbbd3[_0x54d21a(0x21a)]=_0x54d21a(0x1f6),_0x2bbbd3[_0x54d21a(0x218)]=_0x2eb174[0x2];const _0x3f31fc=document[_0x54d21a(0x216)]('p');_0x3f31fc[_0x54d21a(0x21a)]=_0x54d21a(0x20a),_0x3f31fc[_0x54d21a(0x218)]=_0x2eb174[0x5];const _0xf044ff=document[_0x54d21a(0x216)]('button');_0xf044ff[_0x54d21a(0x21a)]=_0x54d21a(0x1fe),_0xf044ff[_0x54d21a(0x1f1)]=_0x54d21a(0x202),_0xf044ff['id']='st-btn';const _0x5bc5f4=document[_0x54d21a(0x216)]('button');_0x5bc5f4[_0x54d21a(0x21a)]=_0x54d21a(0x20d),_0x5bc5f4['innerHTML']=_0x54d21a(0x205),_0x5bc5f4['id']=_0x54d21a(0x1fa),_0x5bc5f4[_0x54d21a(0x20e)]=function(){const _0x29bba1=_0x54d21a,_0x2fed38=_0x2eb174[0x2],_0x9557f2=_0x2eb174[0x5],_0x1fe925=_0x2eb174[0x6][_0x29bba1(0x1f5)](_0x29bba1(0x21f),_0x29bba1(0x1f9)),_0x4bba13=_0x29bba1(0x21d)+_0x5be034,_0x2110e7=_0x29bba1(0x21e)+_0x4bba13+_0x29bba1(0x208)+_0x1fe925+'\x22\x20alt=\x22Image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col\x20mt-2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22title\x22>'+_0x2fed38+'</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22div-data\x22>'+_0x1590c7[_0x29bba1(0x1f5)](/ -/g,_0x29bba1(0x1f2))+_0x29bba1(0x212)+_0x9557f2+'</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-danger\x20mx-2\x22>Buy\x20Now</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-footer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-outline-light\x22\x20data-bs-dismiss=\x22modal\x22>Close</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';document[_0x29bba1(0x210)][_0x29bba1(0x1f7)](_0x29bba1(0x201),_0x2110e7);const _0x17e88b=new bootstrap[(_0x29bba1(0x1f3))](document[_0x29bba1(0x203)](_0x4bba13));_0x17e88b['show']();},document[_0x54d21a(0x203)](_0x54d21a(0x220))[_0x54d21a(0x217)](_0x30ec1d),document['getElementById'](_0x54d21a(0x21b)+_0x5be034)[_0x54d21a(0x217)](_0x86b51b),document[_0x54d21a(0x203)](_0x54d21a(0x204)+_0x5be034)[_0x54d21a(0x217)](_0xb79ae1),document[_0x54d21a(0x203)](_0x54d21a(0x204)+_0x5be034)[_0x54d21a(0x217)](_0x4e6713),document[_0x54d21a(0x203)](_0x54d21a(0x213)+_0x5be034)[_0x54d21a(0x217)](_0x2bbbd3),document[_0x54d21a(0x203)](_0x54d21a(0x213)+_0x5be034)[_0x54d21a(0x217)](_0x3f31fc),document[_0x54d21a(0x203)](_0x54d21a(0x213)+_0x5be034)[_0x54d21a(0x217)](_0x5bc5f4),document[_0x54d21a(0x203)](_0x54d21a(0x213)+_0x5be034)['appendChild'](_0xf044ff);};