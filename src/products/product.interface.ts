export interface Product {
    name : string,
    price : string;
    quantity : string;
    image : string;
}

export interface UnitProduct extends Product {
    id : string
}

export interface Products {
    [key : string] : UnitProduct
}