import { a } from "./a";

// rename this file to `HTTPUtils`

export class Foo {
    method() {
        console.log(a)
        console.log(b) // and then trigger quick fix for auto import here
    }
}