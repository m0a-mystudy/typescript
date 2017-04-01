{
  const node = require('./MyNode');
}

Block = c:(Content+) EOL {
  /*my test code 001*/
  return new node.MyElement(c, 0);
}

Content = open:OpenTag c:Content+ close:CloseTag {
  // return { type:'element', id:open, content:c};
  return new node.MyElement(c,open);
}
/
txt:ContentText {
  //return {type:'txt', content:txt.trim()}
  return new node.MyText(txt.trim());
}

ContentText = [^<\n]+ { return text();}

OpenTag = "<" id:[0-9]+ ">" { return parseInt(id.join(''))}
CloseTag = "</" id:[0-9]+ ">" { return parseInt(id.join(''))}

EOL = [\n]*
