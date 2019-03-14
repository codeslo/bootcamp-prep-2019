function Bookshelf(t1,t2,t3){
    this.title_1 = t1;
    this.title_2 = t2;
    this.title_3 = t3;
}

let myShelf = new Bookshelf("Beloved","The Fifth Season","Stranger in a Strange Land");

let myOtherShelf = new Bookshelf("Angle of Repose","Snow Falling on Cedars","The Kite Runner");

for(let key in myShelf){
    console.log(key,":",myShelf[key]);
    console.log("Other Shelf:",key,":",myOtherShelf[key]);
}