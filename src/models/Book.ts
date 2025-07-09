export class Book {
    private _id: number;
    private _title: string;
    private _author: string;
    private _isbn: string;


    constructor(id: number, title: string, author: string, isbn: string) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._isbn = isbn;
    }


    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }

    get isbn(): string {
        return this._isbn;
    }
}