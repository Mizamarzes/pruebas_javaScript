const book01={
    titulo:"El Arte de la guerra",
    autor:"Sun Tzu",
    genero:"No-ficcion",
    año:1521,
    editorial: "Alianza Editorial"
}

function showDetailsbook(book){
    console.log(book.titulo);
    console.log(book.autor);
    console.log(book.genero);
    console.log(book.año);
    console.log(book.editorial);
}

showDetailsbook(book01);