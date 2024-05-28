import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {ProductComponent} from "../../components/product/index.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        return [
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGacWb0r1MpkfiKwAPpHJdF-tntD1Ak-DtzPxDAnX7Yg&s",
            title: `Карандаши по скидке`,
            text: "Вместо 50 рублей за штуку, теперь они стоят 30 рублей за штуку!"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDtTvqaM9Ml-qb9uUUKHnSxnj4s-Ta5ZLH2ugamSehQ&s",
            title: `Тетради по скидке`,
            text: "Вместо 10 рублей за штуку, теперь они стоят 6 рублей за штуку!"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEvksVSofO9ay2zA0XYDpODzOlrw1U_mjqrnazzBD_g&s",
            title: `Рюкзаки по скидке`,
            text: "Вместо 5000 рублей за штуку, теперь они стоят 4000 рублей за штуку!"
        },
    
    ]
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    
        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data[this.id-1])
    }
}