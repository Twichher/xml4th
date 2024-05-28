export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
            <div class="card-container">
                
                <div id="carouselExampleControls-${data.id}" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <button type="button" id="click-card-${data.id1}" data-id="${data.id1}"><img src="${data.src1}" class="d-block w-100" alt="..."> </button>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>${data.title1}</h5>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <button type="button" id="click-card-${data.id2}" data-id="2"><img src="${data.src2}" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${data.title2}</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <button type="button" id="click-card-${data.id3}" data-id="3"><img src="${data.src3}" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${data.title3}</h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-${data.id}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Предыдущий</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-${data.id}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Следующий</span>
                    </button>
                </div>
            </div>
            `
        )
    }
    
    addListeners(data, listener) {
        
        document
            .getElementById(`click-card-${data.id1}`)
            .addEventListener("click", listener)
        document
            .getElementById(`click-card-${data.id2}`)
            .addEventListener("click", listener)
        document
            .getElementById(`click-card-${data.id3}`)
            .addEventListener("click", listener)
    }
    
    render(data, listener) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listener);
    }
    
}