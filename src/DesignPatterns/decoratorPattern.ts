// Decorator Pattern is in general used when there is a base thing and we have to add more features to it 
// as we want

export interface Text {
    render(): string;
}

class PlainText implements Text {
    private content: string;
    constructor(content: string) {
        this.content = content;
    }

    render(): string {
        return this.content;
    }
}


class BoldDecorator implements Text {
    private component: Text;
    constructor(component: Text) {
        this.component = component;
    }

    render(): string {
        return `<b>${this.component.render()}<b>`
    }
}

class ItalicDecorator implements Text {
    private component: Text;
    constructor(component: Text) {
        this.component = component;
    }

    render(): string {
        return `<i>${this.component.render()}<i>`
    }
}


const plainText = new PlainText("Hi this is a text");
console.log("Plain", plainText.render());

const boldText = new BoldDecorator(plainText);
console.log("Bold", boldText.render());

const italicText = new ItalicDecorator(boldText);
console.log("Italic", italicText.render());

