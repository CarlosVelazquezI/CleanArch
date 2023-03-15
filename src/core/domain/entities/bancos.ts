type ConstructorParams = {
    description :string;
    age :number;
    url :string;
    bankName :string;
};

export class bancos {

    public description :string;
    public age :number;
    public url :string;
    public bankName :string;

    constructor({
        description,
        age,
        url,
        bankName
    }: ConstructorParams){

        this.description = description;
        this.age = age;
        this.url = url;
        this.bankName = bankName;
    };



}