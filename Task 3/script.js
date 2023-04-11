/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

class User {
  constructor({ login, avatar_url }) {
    this.login = login;
    this.avatar_url = avatar_url;
    return this.render();
  }
  render() {
    this.userDiv = document.createElement('div');
    this.userDiv.classList.add('user');
    this.userImg = document.createElement('img');
    this.userImg.setAttribute('src', this.avatar_url);
    this.userImg.setAttribute('alt', `${this.login} photo`);
    this.loginH2 = document.createElement('h2');
    this.loginH2.innerText = this.login;
    this.userDiv.append(this.userImg, this.loginH2);
    return this.userDiv;
  }
}

document.querySelector('#btn').addEventListener('click', () => {
  (document.querySelector('#message')).remove();
  fetch(ENDPOINT)
    .then(res => res.json())
    .then(users => {
      const output = document.querySelector('#output');
      users.forEach(user => output.append(new User(user)));
    })
})