import { readFileSync } from "fs";

export class FileReader {
    file: string = '';
    data: string[][] | undefined;

    constructor(file: string) {
        this.file = file;
    }

    read(): string[] {
        return readFileSync(this.file, {
            encoding: 'utf-8'
        }).split("\n");
    }

    parseIndividualEntitie(): string[][] {
        this.data = this.read().map((row: string): string[] => {
            return row.split(',');
        })

        return this.data;

    }

    
}

const fileReader = new FileReader('football.csv');
console.log(fileReader.parseIndividualEntitie());