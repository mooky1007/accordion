class Accordion {
    constructor(el, config) {
        this.el = document.querySelector(el);
        this.open = config?.open || false;
        this.multi = config?.multi || false;
        this.className = config?.className || 'active';
        this.init();
    }

    init() {
        this.items = [...this.el.querySelectorAll('.accordion_item')]
            .map(item => new AccordionItem(item, this.el, this.className));
        if(this.open) this.openAll();
        if(!this.multi) this.el.addEventListener('accOpen', () => this.closeAll());
    }

    openNum(idx) { this.items[idx - 1].open(); }
    closeNum(idx) { this.items[idx - 1].close(); }
    openAll() { this.items.forEach(item => item.open()); }
    closeAll() { this.items.forEach(item => item.active ? item.close() : null); }
}

class AccordionItem {
    constructor(el, parent, className) {
        this.container = parent;
        this.el = el;
        this.calssName = className;
        this.init();
    }

    get active() { return this._active; }
    set active(value) { this._active = value; }

    init() {
        this._active = false;
        this.title = this.el.querySelector('.accordion_title');
        this.content = this.el.querySelector('.accordion_content');
        this.style = this.el.style;
        this.originContentHeight = `${this.content.scrollHeight}px`;
        this.accOpen = new CustomEvent('accOpen');
        this.style.maxHeight = `${this.title.scrollHeight}px`;
        this.style.overflow = 'hidden';
        this.el.addEventListener('click', () => this.toggle());
        if(this.el.classList.contains(this.calssName)) this.open();
    }

    open() {
        this.container.dispatchEvent(this.accOpen);
        this.active = true;
        this.el.classList.add(this.calssName);
        this.style.maxHeight = `${this.title.scrollHeight + this.content.scrollHeight}px`;
    }

    close() {
        this.active = false;
        this.el.classList.remove(this.calssName);
        this.style.maxHeight = `${this.title.scrollHeight}px`;
    }

    toggle() {
        if(!this.active) this.open();
        else this.close();
    }
}