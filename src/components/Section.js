export class Section {
    constructor({items, renderer}, container) {
        this._renderItems = items;
        this._renderer = renderer;
        this._containerSelector = container;
        
    }
    
    renderItems() {
        this._renderItems.forEach(item => {
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