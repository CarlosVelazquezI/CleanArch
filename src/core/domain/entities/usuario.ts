type ConstructorParams = {
    id: number;
    nombre: string;
    apellidoPaterno: string;
    edad: number;
    fechaRegistro?: string;
};

export class usuario {
    public id: number;
    public nombre: string;
    public apellidoPaterno: string;
    public edad: number;
    public fechaRegistro?: string;

    constructor({
        id,
        nombre,
        apellidoPaterno,
        edad,
        fechaRegistro
    }: ConstructorParams){
        this.id = id;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.edad = edad;
        this.fechaRegistro = fechaRegistro;

    };



}