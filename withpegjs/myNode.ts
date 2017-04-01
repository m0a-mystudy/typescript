
export class MyNode {
	parent: MyNode;
}

export class MyElement extends MyNode {
  tagId: number;
  childNodes: MyNode[];
  constructor(content: MyNode[], id?: number) {
    super();
    if (id !== undefined) {
      this.tagId = id;
    }

    this.childNodes = content;
    this.childNodes.forEach( n => {
      n.parent = this;
    });
  }
}


export class MyText extends MyNode {
  content: string;
  pointer: Node;
  constructor(content: string) {
    super();
    this.content = content;
  }
}
