export default class {
  constructor(
    name,
    active,
    deaths,
    recovered,
    cases,
    newCases,
    newDeaths,
    critical
  ) {
    this.id = `${Math.random() * 10}`;
    this.country = name;
    this.active = active;
    this.deaths = deaths;
    this.recovered = recovered;
    this.cases = cases;
    this.newCases = newCases;
    this.newDeaths = newDeaths;
    this.critical = critical;
  }
}
