let arrayPyramid = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 01, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ];
  
  function calcular(arrayPyramid, i, j) {
    
    if (i == arrayPyramid.length) {
      return 0;
    }
    let suma;
    suma = arrayPyramid[i][j] + 
        Math.max(
            calcular(arrayPyramid, i + 1, j), 
            calcular(arrayPyramid, i + 1, j + 1));
    return suma;
  }
  
  function ChangeColor(){
    var mayor = 0;
    var j=0, i=0;
  
    var changeElemente = document.getElementById((i+1)+"-"+ (j+1) + "-" +arrayPyramid[i][j]);
    changeElemente.className = "recorrdio";
  
    for( i = 1; i < arrayPyramid.length; i++ ){
      console.log( arrayPyramid[i][j]);
  
      if(arrayPyramid[i][j] > arrayPyramid[i][j+1] ){
        mayor = arrayPyramid[i][j];
      }else {
        mayor = arrayPyramid[i][j+1];
        j +=1;
      }
      console.log((i+1)+"-"+mayor);
      changeElemente = document.getElementById((i+1)+"-"+ (j+1) + "-"+mayor);
      changeElemente.className = "recorrdio";
      mayor = 0;
    } 
  };
  
  
  function ChangeColor2(){
    var mayor = 0;
    var j=0, i=0;
    for( i = 0; i < arrayPyramid.length; i++ ){
      console.log( arrayPyramid[i][j]);
      for(j = 0; j < arrayPyramid[i].length; j++ ){
        if(arrayPyramid[i][j] > mayor){
          mayor = arrayPyramid[i][j];
          console.log("mayor " + mayor);
        } 
        console.log("recor" + i+"-"+j)
  
      }
      console.log((i+1)+"-"+mayor);
      const changeElemente = document.getElementById((i+1)+"-"+mayor);
      changeElemente.className = "recorrdio";
      mayor = 0;
    } 
  };
  
  
  var sumAlta = 0;
  
  function Sumatot(arrayPyramid) {
    return calcular(arrayPyramid, 0, 0);
  }
  
  function respuesta() {
    document.getElementById("sumFinal").innerHTML= Sumatot(arrayPyramid);
    console.log(Sumatot(arrayPyramid));
    ChangeColor();
  
  }
   
  piramide();
  
  function piramide(){
    let count = 0;
    const div = document.getElementById("piramyd");
    arrayPyramid.forEach((rows) => {
      count++;
      const parentDiv = document.createElement("div");
      parentDiv.id = "parent" + count;
      div.appendChild(parentDiv);
      var posi = 1;
      rows.forEach((column) => {
  
        const divParent = document.getElementById("parent" + count);
        const childDiv = document.createElement("div");
        childDiv.textContent = column;
        childDiv.id = (count + "-" +  posi + "-" + column) ;
        divParent.appendChild(childDiv);
        posi ++;
      });
    });
  }