import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML = () => `
        <div id="main-page" class="d-flex flex-wrap"></div>
    `;
        
  getData = () => [
    {
        id1: 1,
        src1: "https://sneg.top/uploads/posts/2023-04/thumbs/1681935219_sneg-top-p-kartinka-den-tsvetnikh-karandashei-krasivo-63.jpg",
        title1: "Акция на карандаши",

        id2: 2,
        src2: "https://brpv.ru/upload/iblock/c67/c67f34bf4263f8bfc8b2a8efd98d77f5.jpg",
        title2: "Акция на тетради",

        id3: 3,
        src3: "https://i.ytimg.com/vi/6_5X1XDSnXk/maxresdefault.jpg",
        title3: "Акция на рюкзаки",
    },
];
  
render = () => {
    this.parent.innerHTML = '';
    const html = this.getHTML();
    this.parent.insertAdjacentHTML('beforeend', html);

    const data = this.getData();
    const productCard = new ProductCardComponent(this.pageRoot);
    productCard.render(data[0], this.clickCard);
};
    
    
clickCard = (e) => {
    const cardId = e.currentTarget.dataset.id;
    const data = this.getData();
    
    // Найдем данные для соответствующего слайда
    const selectedItem = data.find(item => item.id1 === parseInt(cardId) || item.id2 === parseInt(cardId) || item.id3 === parseInt(cardId));

    // Создадим ProductPage, передав правильный id
    const productPage = new ProductPage(this.parent, cardId);
    productPage.render();
};
}