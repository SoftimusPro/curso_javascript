/*    Operadores Aritmeticos
    =   Operador de asignacion. Se usa asignar valores a una variable.
    +   Suma
    -   Resta
    *   Multiplicacion
    /   Division
    %   Modulo
    ++  Aumento
    --  Disminucion
    Los operadores son importantisimos y se utilizan en casi todo para no ser absoluto
*/

//Ejemplos basicos de uso

// const resultado = 10 + 10;
// const resultado2 = 10 - 10;
// const resultado3 = 10 % 3; //Para obtener el restante de la operacion(en este caso restaria 1 porque en 10 hay 3 veces 3) osea lo que sobra de la division de los dos numeros


// let numero = 1; //La variable es de tipo let porque se le va a asignar otro valor luego
// numero++; //Lo mismo funciona para --


/*    Operadores de Asignacion
    +=  Suma un numero al valor de una variable
    -=  Resta un numero al valor de una variable
    *=  Resta un numero al valor de una variable
    /=  Resta un numero al valor de una variable
    %=  Obtiene el sobrante de una division y lo asigna a la variable
*/
//Ejemplo
let numero = 10; // Si le queremos aumentar 5
// numero = numero +5 ; Seria asi de esta forma 

numero += 5; //Pero de esta forma es mas sencillo y mas rapido


/*    Operadores de Comparacion
Nos permiten comparar valores
    ==  Igual que
    === Igual en valor y tipo de valor
    !=  Diferente
    !== Diferente en valor y diferente en tipo
    >   Mayor que
    <   Menor que
    >=  Mayor o igual que
    <=  Menor o igual que
    ?   Operador ternario
*/
//Ejemplo

// const resultado = 5 > 1; //true
// const resultado = 20 >= 20; //true
// const resultado = 10 == 10; //true *solo para comparar
//const resultado = 10 === '10'; //true *para comprobar si son iguales y al mismo tiempo si son del mismo tipo

const resultado = 7 > 1 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero'; //(?) Permite hacer condicionales de una sola linea de codigo
console.log(resultado);