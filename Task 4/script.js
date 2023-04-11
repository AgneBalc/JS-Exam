/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

class Car {
  constructor({ brand, models }) {
    this.brand = brand;
    this.models = models;
    return this.render();
  }
  render() {
    this.brandCard = document.createElement('div');
    this.brandCard.classList.add('brandCard');
    this.brandName = document.createElement('h2');
    this.brandName.innerText = this.brand;
    this.modelsList = document.createElement('ul');
    this.models.forEach(model => {
      const modelEl = document.createElement('li');
      modelEl.innerText = model;
      this.modelsList.append(modelEl);
    })
    this.brandCard.append(this.brandName, this.modelsList);
    return this.brandCard;
  }
}

window.addEventListener("load", () => {
  const allCars = document.querySelector('#output');
  fetch(ENDPOINT)
    .then(res => res.json())
    .then(cars => {
      cars.forEach(car => allCars.append(new Car(car)))
    })
});