"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyNode = (function () {
    function MyNode() {
    }
    return MyNode;
}());
exports.MyNode = MyNode;
var MyElement = (function (_super) {
    __extends(MyElement, _super);
    function MyElement(content, id) {
        var _this = this;
        _super.call(this);
        if (id !== undefined) {
            this.tagId = id;
        }
        this.childNodes = content;
        this.childNodes.forEach(function (n) {
            n.parent = _this;
        });
    }
    return MyElement;
}(MyNode));
exports.MyElement = MyElement;
var MyText = (function (_super) {
    __extends(MyText, _super);
    function MyText(content) {
        _super.call(this);
        this.content = content;
    }
    return MyText;
}(MyNode));
exports.MyText = MyText;
