import { readFileSync } from 'fs';
import { Posibilities } from './gamePosibilities';
import { Column } from "./columns";
import { FileReader } from "./FileReader";
import { DataAnalysis } from "./DataAnalysis";

interface Match {
    date: string,
    homeTeam: string,
    awayTeam: string,
    homeGoals: number,
    awayGoals: number,
    winner: string,
    referee: string
}

function analysisWinner(data: string[][], winnerTeam: string): any {

    let wins: number = 0;

    for(var match of data) {
        if(match[Column.HOME_TEAM] == winnerTeam && match[Column.WINNER] === Posibilities.HOME_WIN) {
            wins++;
        }

        if(match[Column.AWAY_TEAM] == winnerTeam && match[Column.WINNER] === Posibilities.AWAY_WIN) {
            wins++;
        }

        if(match[Column.HOME_TEAM] || match[Column.AWAY_TEAM] == winnerTeam && match[Column.WINNER] == Posibilities.DRAW) {
            "It's a draw!"
        }
    }
    console.log(1)
    return `${winnerTeam} won ${wins} games!`

}

const url = 'football.csv';
// const data = loadFileContent(url);
// const first_parse = parseFileContent(data);
// const second_parse = parseIndividualEntitie(first_parse);
// const third_parse = parseStringToNumber(second_parse);
// const quar_parse = analysisWinner(third_parse, 'Man United');
// console.log(quar_parse);

const fileReader = new FileReader(url);
const analysis = new DataAnalysis(fileReader);
console.log(analysis.analysisWinner('Man United'))
// fileReader.read()
// fileReader.parseIndividualMatches()
// console.log(fileReader.getData());
