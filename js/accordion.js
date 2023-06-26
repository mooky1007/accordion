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
    closeAll() { this.items.forEach(item => item.close()); }
}

class AccordionItem {
    constructor(el, parent, className) {
        this.container = parent;
        this.el = el;
        this.className = className;
        this.active = false;
        this.title = this.el.querySelector('.accordion_title');
        this.content = this.el.querySelector('.accordion_content');
        this.style = this.el.style;
        this.accOpen = new CustomEvent('accOpen');
        
        this.init();
    }

    init() {
        this.style.maxHeight = `${this.title.scrollHeight}px`;
        this.style.overflow = 'hidden';
        this.el.addEventListener('click', () => this.toggle());
        if(this.el.classList.contains(this.className)) this.open();
    }

    open() {
        this.container.dispatchEvent(this.accOpen);
        this.active = true;
        this.el.classList.add(this.className);
        this.style.maxHeight = `${this.title.scrollHeight + this.content.scrollHeight}px`;
    }

    close() {
        this.active = false;
        this.el.classList.remove(this.className);
        this.style.maxHeight = `${this.title.scrollHeight}px`;
    }

    toggle() {
        this.active ? this.close() : this.open();
    }
}