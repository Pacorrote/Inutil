let viejo="Hola";

export function agregarF(nuevo:string){
    return viejo+=nuevo;
}

export function agregarI(nuevo:string){
    return nuevo+=viejo;
}

export function modificarviejo(modificar:string){
    return viejo=modificar;
}

export function replanzar(caracter:string){
    return viejo.split(caracter);
}

export class textito{
    primero="Hola";
    segundo="K ase"; 
}