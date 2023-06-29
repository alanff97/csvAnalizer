import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

//Create an object that satisfies the DataReader interface (for version 2)
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches


console.log(`Manchester United won ${manUnitedWins} games`);
