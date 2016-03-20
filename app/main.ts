import {Component} from 'angular2/core';

// Annotation section
@Component({
    selector: 'my-app',
    template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
export default class MyApp {
    constructor() {
        this.name = 'Max';
    }
}