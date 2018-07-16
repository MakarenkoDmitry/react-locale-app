"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Locale_1 = require("../Locale");
let Child = class Child extends React.Component {
    render() {
        return React.createElement("div", null, this.props.translate.name);
    }
};
Child = __decorate([
    Locale_1.PrintLocale("child/")
], Child);
exports.Child = Child;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbWFrYXJlbmtvZC9Eb2N1bWVudHMvcmVhY3QtbG9jYWxlLWFwcC9zcmMvQ2hpbGRDb21wb25lbnQvQ2hpbGRDb21wb25lbnQudHN4Iiwic291cmNlcyI6WyIvaG9tZS9tYWthcmVua29kL0RvY3VtZW50cy9yZWFjdC1sb2NhbGUtYXBwL3NyYy9DaGlsZENvbXBvbmVudC9DaGlsZENvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0Isc0NBQXVDO0FBR3ZDLElBQWEsS0FBSyxHQUFsQixXQUFtQixTQUFRLEtBQUssQ0FBQyxTQUFtQjtJQUN6QyxNQUFNO1FBQ1QsT0FBTyxpQ0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQU8sQ0FBQTtJQUNqRCxDQUFDO0NBQ0osQ0FBQTtBQUpZLEtBQUs7SUFEakIsb0JBQVcsQ0FBQyxRQUFRLENBQUM7R0FDVCxLQUFLLENBSWpCO0FBSlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByaW50TG9jYWxlIH0gZnJvbSBcIi4uL0xvY2FsZVwiXG5cbkBQcmludExvY2FsZShcImNoaWxkL1wiKVxuZXhwb3J0IGNsYXNzIENoaWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+e3RoaXMucHJvcHMudHJhbnNsYXRlLm5hbWV9PC9kaXY+XG4gICAgfVxufVxuIl19