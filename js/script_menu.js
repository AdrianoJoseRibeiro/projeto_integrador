//Ancoras (A)/Botões menu superior que interferem no dropdown
const anchorQuerid = document.getElementById("anchor-querid");
const anchorPetisc = document.getElementById("anchor-petisc");
const anchorCarnes = document.getElementById("anchor-carnes");
const anchorFrutos = document.getElementById("anchor-frutos");
const anchorExecut = document.getElementById("anchor-execut");
const anchorMassas = document.getElementById("anchor-massas");
const anchorAcompa = document.getElementById("anchor-acompa");
const anchorBebida = document.getElementById("anchor-bebida");
const anchorSobre = document.getElementById("anchor-sobrem");

//------------------------------------------------------------------//

//Botões do dropdown
const dropBtnQuerid = document.getElementById("link-queridinhos");
const dropBtnPetisco = document.getElementById("link-petiscos");
const dropBtnCarne = document.getElementById("link-carnes");
const dropBtnFrutos = document.getElementById("link-frutos");
const dropBtnExecut = document.getElementById("link-exec");
const dropBtnMassas = document.getElementById("link-massas");
const dropBtnAcompa = document.getElementById("link-acomp");
const dropBtnBebida = document.getElementById("link-bebidas");
const dropBtnSobre = document.getElementById("link-sobremesa");

//------------------------------------------------------------------//

//blocos dos menus dropdown
const dropQuerid = document.getElementById("wrapper-queridinhos");
const dropPetisco = document.getElementById("wrapper-petiscos");
const dropCarne = document.getElementById("wrapper-carnes");
const dropFrutos = document.getElementById("wrapper-frutos");
const dropExecut = document.getElementById("wrapper-exec");
const dropMassas = document.getElementById("wrapper-massas");
const dropAcompa = document.getElementById("wrapper-acomp");
const dropBebida = document.getElementById("wrapper-bebidas");
const dropSobre = document.getElementById("wrapper-sobremesa");

//------------------------------------------------------------------//

//Cliques nos ancoras (A)/Botões menu superior que interferem no dropdown
anchorQuerid.addEventListener("click", () => dropQuerid.classList.toggle('hide'))
anchorPetisc.addEventListener("click", () => dropPetisco.classList.toggle('hide'))
anchorCarnes.addEventListener("click", () => dropCarne.classList.toggle('hide'))
anchorFrutos.addEventListener("click", () => dropFrutos.classList.toggle('hide'))
anchorExecut.addEventListener("click", () => dropExecut.classList.toggle('hide'))
anchorMassas.addEventListener("click", () => dropMassas.classList.toggle('hide'))
anchorAcompa.addEventListener("click", () => dropAcompa.classList.toggle('hide'))
anchorBebida.addEventListener("click", () => dropBebida.classList.toggle('hide'))
anchorSobre.addEventListener("click", () => dropSobre.classList.toggle('hide'))


//------------------------------------------------------------------//

//Cliques nos Botões do dropdown, que ficam como título de cada categoria
dropBtnQuerid.addEventListener("click", () => dropQuerid.classList.toggle('hide'))
dropBtnPetisco.addEventListener("click", () => dropPetisco.classList.toggle('hide'))
dropBtnCarne.addEventListener("click", () => dropCarne.classList.toggle('hide'))
dropBtnFrutos.addEventListener("click", () => dropFrutos.classList.toggle('hide'))
dropBtnExecut.addEventListener("click", () => dropExecut.classList.toggle('hide'))
dropBtnMassas.addEventListener("click", () => dropMassas.classList.toggle('hide'))
dropBtnAcompa.addEventListener("click", () => dropAcompa.classList.toggle('hide'))
dropBtnBebida.addEventListener("click", () => dropBebida.classList.toggle('hide'))
dropBtnSobre.addEventListener("click", () => dropSobre.classList.toggle('hide'))


