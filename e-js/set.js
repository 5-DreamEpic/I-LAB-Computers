const detdatast = [];
const detdata = [];


var a = fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRwA7ScYW-qlcurArWdWQcEu6T8XjCys9IItTUjKoUqCqhTfgs9lyyBoFyKl7IlUwGTda24_0xZ_g4s/pub?output=csv')
  .then(response => response.text())
  .then(text => {
    const rows = text.split('\n');
    const data = rows.map(row => row.split(','));
    var dbody= document.getElementById("up-cbody").getElementsByClassName("cbody")[0];
    dbody.innerHTML = "";
    var idvalue = 0;
    for (var row = 1; row < rows.length; row++) {
        idvalue++;

        const box = document.createElement("div");
        box.id = "card"+idvalue;
        box.className = "acard";

        var rowColData = rows[row].split(',');
        detdatast[idvalue] = rowColData[6];
        

        const cin = document.createElement("div");
        cin.className = "card-info";
        cin.id = "card-info"+idvalue;

        const cimg = document.createElement("img");
        cimg.className ="c-img";
        var ilink = rowColData[5];
        if (ilink == null || ilink =="") {
          break;
        }
        cimg.src = ilink.replace("https://drive.google.com/open?id=","https://drive.google.com/uc?export=view&id=");
        
        const ttlp = document.createElement("p");
        ttlp.className ="title";
        ttlp.innerText = rowColData[1];     

        const ttlpb = document.createElement("p");
        ttlpb.className ="i-price";
        ttlpb.innerText = rowColData[4];

        const cpbtn = document.createElement("button");
        cpbtn.className = "btn-cart";
        cpbtn.innerHTML = "Buy Now";
        cpbtn.id = "st-btn";

        const detdata = rowColData[6];
        

        const cdbtn = document.createElement("button");
        cdbtn.className = "btn-det";
        cdbtn.innerHTML = "Details";
        cdbtn.id = "st-btn";
        cdbtn.onclick = function() {
          const Adetdiv = document.createElement("div");
          Adetdiv.className ="Adetails";
          Adetdiv.id = "Adet-div";
          
          const detdiv = document.createElement("div");
          detdiv.className ="details";
          detdiv.id = "det-div";

          

          const detimg = document.createElement("img");
          detimg.className = "det-img";
          var detilink = rowColData[5];
          detimg.src = detilink.replace("https://drive.google.com/open?id=","https://drive.google.com/uc?export=view&id=");
          
          const detrow = detdata;
          const detrowa = "<br> -";
          const detrout = detrow.split(" -").join(detrowa);
          console.log(detrout);
          // for (e = 0; e<detdata.length;e++) {
          //   detrow[e] = detdata[e].split(',');
          //   detrow[e] = detrow[e]+"<br>";

          // }
          

          const detdivm = document.createElement("p");
          detdivm.className ="div-data";
          detdivm.id = "det-divm"+idvalue;
          detdivm.innerHTML = detrout;

          document.getElementById("cbody").appendChild(detdiv);
          document.getElementById("cbody").appendChild(Adetdiv);
          document.getElementById("det-div").appendChild(detdivm);
          document.getElementById("det-div").appendChild(detimg);

          const clsbtn = document.createElement("button");
          clsbtn.className ="clsbtn";
          clsbtn.id = "btn-cls";
          clsbtn.innerHTML = "Close";
          clsbtn.onclick = function() {
            document.getElementById("cbody").removeChild(detdiv);
          }

          document.getElementById("det-div").appendChild(clsbtn);

        };

        document.getElementById("cbody").appendChild(box);
        document.getElementById("card"+idvalue).appendChild(cin);
        document.getElementById("card-info"+idvalue).appendChild(cimg);
        document.getElementById("card-info"+idvalue).appendChild(ttlp);
        document.getElementById("card-info"+idvalue).appendChild(ttlpb);
        document.getElementById("card-info"+idvalue).appendChild(cdbtn);
        document.getElementById("card-info"+idvalue).appendChild(cpbtn);      

    }
    
  });



  