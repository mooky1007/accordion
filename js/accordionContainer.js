class Accordion {
    constructor(el) {
        this.el = el;
        this.init();
    }

    init() {
        this.items = [...this.el.querySelectorAll('.accordion_item')].map(item => new AccordionItem(item));
        this.el.addEventListener('accOpen', () => this.closeAll());
    }

    closeAll() {
        this.items.forEach(item => item.active ? item.close() : null);
    }
}

class AccordionItem {
    constructor(el) {
        this.container = el.closest('.accordion_container');
        this.el = el;
        this.active = false;
        this.title = this.el.querySelector('.accordion_title');
        this.content = this.el.querySelector('.accordion_content');
        this.style = this.el.style;
        this.originContentHeight = `${this.content.scrollHeight}px`;
        this.accOpen = new CustomEvent('accOpen');
        this.init();
    }

    init() {
        this.style.maxHeight = this.title.scrollHeight + 'px';
        this.style.overflow = 'hidden';
        this.el.addEventListener('click', () => this.toggle());
    }

    open() {
        this.container.dispatchEvent(this.accOpen);
        this.active = true;
        this.style.maxHeight = this.title.scrollHeight + this.content.scrollHeight + 'px';
    }

    close() {
        this.active = false;
        this.style.maxHeight = this.title.scrollHeight + 'px';
    }

    toggle() {
        if(!this.active) this.open();
        else this.close();
    }
}