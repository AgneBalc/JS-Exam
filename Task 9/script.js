/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = this.wasExpensive();
  };
  wasExpensive() {
    if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(new Movie('The Dark Knight', 'Christopher Nolan', 185000000))