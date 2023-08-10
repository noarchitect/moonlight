import {Product} from "./product";

export class ProductRepo {
    private products: Product[];

    constructor() {
        this.products=[
            {id: 1, brand: "A", model: "for Curly Hairs", price: "305", img: "elidor.jpeg", button: "Add to Cart", cartItemCount: 0, isSelected: false},
            {id: 2, brand: "B", model: "for Dry Hairs", price: "205" , img: "elidor.jpeg", button: "Add to Cart", cartItemCount: 0, isSelected: false},
            {id: 3, brand: "C", model: "for Straight Hairs", price: "105", img: "elidor.jpeg", button: "Add to Cart", cartItemCount: 0, isSelected: false},
            {id: 4, brand: "D", model: "for Wavy Hairs", price: "345", img: "elidor.jpeg", button: "Add to Cart", cartItemCount: 0, isSelected: false},
            {id: 5, brand: "F", model: "for Colored Hairs", price: "105", img: "elidor.jpeg", button: "Add to Cart", cartItemCount: 0, isSelected: false},
            {id: 6, brand: "E", model: "for Short Hairs", price: "355", img: "elidor.jpeg", button: "Add to Cart", cartItemCount: 0, isSelected: false},
            {id: 7, brand: "G", model: "for Oily Hairs", price: "195", img: "elidor.jpeg", button: "Add to Cart", cartItemCount: 0, isSelected: false},
        ];
    }
    getProducts(): Product[] {
        return this.products;
    }
    getProductByID(id: number): Product {
        return this.products.find(i=>i.id==id);
    } 
    toggleProductSelection(id: number): void {
        const product = this.products.find(p => p.id === id);
        if (product) {
            product.isSelected = !product.isSelected;
        }
    }
}