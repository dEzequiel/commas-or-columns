import { match } from 'assert';
import { readFileSync } from 'fs';
import { type } from 'os';
import { parse } from 'path';

interface Match {
    date: string,
    homeTeam: string,
    awayTeam: string,
    homeGoals: number,
    awayGoals: number,
    winner: string,
    referee: string
}

function loadFileContent(url: string): string {
    return readFileSync(url, {
        encoding: 'utf-8'
    })
};

function parseFileContent(data: string): string [] {
    return  data.split("\n");
}

function parseIndividualEntitie(data: string[]): string[][] {
    return data.map((row: string): string[] => {
        return row.split(',');
    })
}

function parseStringToNumber(data: string[][]): string[][] {
    for(let i = 0; i < data.length; i++) {
        for(let j = 3; j < data[i].length; j++) {
            data[i][j] = parseInt(data[i][j]);
            if(j == 4) {
                break;
            }
        }
    }
    return data
}



// const url= 'football.csv';
// const data = loadFileContent(url);
// const first_parse = parseFileContent(data);
// const second_parse = parseIndividualEntitie(first_parse);
// const third_parse = parseStringToNumber(second_parse);
// const quar_parse = analysisWinner(third_parse, 'Man United');
// console.log(quar_parse);