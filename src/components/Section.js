export class Section {
    constructor(renderer, container) {
        this._renderer = renderer;
        this._containerSelector = container;
        
    }
    
    renderItems(items) {
        items.forEach(item => {
            this._renderer(item)
        });
    }
    addItem(element) {
        this._containerSelector.append(element)
    }

    prependAddNewItem(element){
        this._containerSelector.prepend(element)
    }
}