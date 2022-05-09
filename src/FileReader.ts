import { readFileSync } from "fs";
import { Column } from "./columns";
import { Posibilities } from "./gamePosibilities";

export class FileReader {
    file: string = '';
    data: string[][] = [];

    // constructor(file: string) {
    //     this.file = file;
    // }

    read(): string[] {
        return readFileSync(this.file, {
            encoding: 'utf-8'
        }).split("\n");
    }

    parseIndividualMatches(): string[][] {
        this.data = this.read().map((row: string): string[] => {
            return row.split(',');
        })

        return this.data;

    }

    parseGoalsToNumber(): string[][] {
        for(const element of this.parseIndividualMatches()) {
            for(let j = 3; j < element.length; j++) {
                element[j] = parseInt(element[j]);
                if(j == 4) {
                    break;
                }
            }
        }
        return this.data;
    }

    getData(): string[][] {
        this.read();
        this.parseIndividualMatches();
        this.parseGoalsToNumber();
        return this.data;
    }
}