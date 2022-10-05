export const getGifs = async ( category ) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=9mn1v512cOcT87lyEFnI8QLnzmw7DRIk&q=${category}&limit=10`;
    const res = await  fetch( url );
    const { data } = await res.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
 
    // console.log(data);
   return gifs;
}


































/*
 // Uso de fetch sin asyn await
 // Promesa basica
 res.then( respuesta => {
     respuesta.json().then( data => {
         console.log( data );
     })
 });

 // Promesa en cadena
 res.then( respuesta => respuesta.json() )
 .then( ({data}) => {
     console.log( data );
 })
 .catch( console.log );
 */