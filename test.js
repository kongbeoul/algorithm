function solution(type, id, listener) {
    return {
        type,
        id,
        listener,
        children: [],
        parentNode: null,
        onEvent(event) {
            listener(event);
            if(this.parentNode !== null) {
                this.parentNode.onEvent(event);
            }
        },
        addChild(node) {
            if(node.parentNode !== null) throw new Error(`${node.id}는 이미 ${node.parentNode.id}를 부모로 가지고 있음`)
            if(node === this.parentNode) throw new Error(`${node.id}는 ${id}의 부모임`);
            this.children.push(node);
            node.parentNode = this;
        },
        removeChild(node) {
            if(node.parentNode !== this) throw new Error(`${node.id}는 ${id}의 자식이 아님`);
            this.children = this.children.filter(child => child !== node);
            node.parentNode = null;
        },
    }
}

const div = solution('div', 'foo', event => console.log('foo', event));
const button = solution('button', 'bar', event => console.log('bar', event));
const div2 = solution('div', 'baz', event => console.log('baz', event));

div.addChild(button);
button.addChild(div2);
div2.onEvent("click");

