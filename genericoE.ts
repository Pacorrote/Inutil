const mynumber=32;
const mystring="Treinta y Dos"

type genericfuntion<T> = (param:T)=>T;

const retursanme:genericfuntion<T>=(variable:T)=>{
    return variable;
}

const resultado=retursanme(mynumber);

const resultado2=retursanme(mystring);