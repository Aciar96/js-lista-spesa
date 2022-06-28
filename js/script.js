// Rivediamo l’esercizio della lista della spesa visto insieme, ma questa volta con il ciclo while al posto del ciclo for. 
// Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, 
// in particolare alla variabile di indice. 

// creiamo un arrey contenetnte la lista della spesa da inserire poi
let shopping = document.getElementById('shopping');
const sohpItems = ['Uova', 'pane', 'Latte' , ' Biscotti' ,' Pasta', ' Affettati' , 'Formaggio' , '  Verdura',' Frutta'];
console.log(sohpItems)
// // ciclo for
// for(let i = 0; i <sohpItems.lengt ; i++){
    //         listItem += `<li>${sohpItems[i]}</li>`
    //     }
    
    // shopping.innerHTML = listItem;
    
    
    let i = 0 ;
    
    let listItem = ''
    // ciclo while
//    condizione : 
while(i < sohpItems.length){
    //monto i <li> da inserire in html dinamicamente 
    listItem += `<li>${sohpItems[i]}</li>`
    console.log(sohpItems[i])
    i++
  console.log(sohpItems[i])
}
shopping.innerHTML = listItem;
