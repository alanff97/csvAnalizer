import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reports/ConsoleReport';
import { WinsAnalysis } from './analizers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reports/HtmlReport';

//Create an object that satisfies the DataReader interface (for version 2)
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches

/* const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
  // new ConsoleReport()
);
 */

// Implementing static method in summary class

const summary = Summary.winsReportStatic('Man United');

summary.buildAndPrintReport(matchReader.matches);
