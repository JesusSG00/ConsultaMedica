/*function Id(){
    const idsGenerados = [];
  let id;
  do {
    id = Math.floor(Math.random() * 100) + 1;
  } while (idsGenerados.includes(id));
  idsGenerados.push(id);
  return id;
}*/

function generador(){
    const ids=[];
    let id;
    id = Math.floor(Math.random() * 500) + 1;
    for(var i=0;i<ids.length;i++){
        for(var j=0;j<ids.length;j++){
         if(id==ids[j]){
          id = Math.floor(Math.random() * 500) + 1;  
        }else{
            return id;
        }   
     }
        
    }
    return id;
}