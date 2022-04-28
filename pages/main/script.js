'use strict'

window.addEventListener('load', (evt) => scrollTo());

function scrollTo() {
  const btn = document.querySelector("#make-friend-btn");
  btn.addEventListener('click', () => document.location="#our-pets");
}
