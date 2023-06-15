//Cadenas de texto
//Adaptarse a escribir las cadenas de texto entre comillas simples y no dobles 

const nombre = 'Carlos';
const parrafo = "Este es un 'parrafo'"; //Para poner un texto con comiilas dentro se hace de esta forma y viceversa si se empieza con comiilas simples
const parrafo2 = 'Este es un "parrafo"'; //Como por ejemplo este caso que es a la inversa
const parrafo3 = 'Este es un \'parrafo\''; //De esta manera se puede hacer con el mismo tipo de comillas pero no tiene mucho sentido


//Numero
//Los tipos de datos de numeros pueden guardar cualquier tipo de numero sea negativo o de cualquier tipo si excepcion (yo me entiendo)

const numero = 4;
const numero2 = -4.2345;

//Boleanos
//Yo se que es para guardar tipos de datos Verdadero o Falso pero me conozco y es mejor anotarlo todo

const usuarioConectado = true;
//Ejemplo practico sencillo

const mayorQue = 1 > 2;
console.log(mayorQue)

//Arrays - Arreglos
//Permite guardar multiples valores en una o mas variables, para definir los arreglos se hace con brackets o corchetes ([])
//En los arreglos se pueden guardar diferentes tipos de datos en la misma variable, ya sea numero, texto, objetos u otro.
//Incluso dentro del arreglo se pueden guardar otros arreglos
//Ejemplo basico

const arreglo = ['texto', 490, true, {propiedad: 'valor'}, [1, 2, 3]];
console.log(arreglo);

//Objetos
//Los objetos son muy parecidos a los arreglos porque nos van a permitir guardar informacion pero con la diferencia de que va a guardar la informacion en pareja donde dentro de esa pareja se guarda una (clave y un valor) o (propiedad y valor), se guardan los datos entre llaver ( {} )
//Tambien como en los arreglos se puede guardar un objeto dentro de otro
//En este ejemplo para ver la variable simplemente con un console.log mostramos la variable (persona) pero si queremos un dato espesifico accedemos con (persona.datoQueQueremosDelObjeto)
//Ejemplo

const persona = {
    nombre: 'Carlos',
    edad: 31,
    carro: {
        marca: 'Ferrari',
        modelo: 'Berlinetta',
        color: 'Rojo'
    }
};
//console.log(persona.carro.color);


//Functions
//Son bloques de codigo que podemos reutilizar
//Ejemplo en el que quisiera reutilizar el mensaje de Hola por consola o en pantalla x100 no tengo que escribirlo tantas veces sino que utilizo la funcion para mostrarlo cuando quiera y cuantas veces necesite sin tener que escribirlo nuevamente

function hola(){
    console.log('Hola');
}
//hola();


//Valores Null
// Se usa cuando queremos espesificar que un valor sea nulo
//Tambien se puede utilizar cuando quieres reiniciar el valor de una variable y no sabes que ponerle

//Valores Undefined 
// Al igual que los null este tipo se utiliza para indicar que un valor no esta definido.
//Realmente nunca se debe establecer manualmente 