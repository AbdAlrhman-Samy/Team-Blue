const bigTest = document.getElementById("committeeQs");
const one = document.getElementById("allCommitteeQs");
const two = document.getElementById("sciCommitteeQs");
const sciQ1 = document.getElementById("sciQ1");
const sciQ2 = document.getElementById("sciQ2");
const subBtn = document.getElementById("sub-btn");
const all = document.getElementById("all");
const teaser = document.getElementById("teaser");

let today = new Date();
let recDay = new Date(2020, 10, 14, 19, 50, 0);

if (today >= recDay) {
  subBtn.setAttribute("type", "submit");
  teaser.classList.add("d-none");
  all.classList.remove("d-none");
}

subBtn.hidden = true;

const check = (bruh) => {
  switch (bruh) {
    case 0:
      subBtn.hidden = false;
      bigTest.classList.remove("d-none");
      one.classList.remove("d-none");
      two.classList.add("d-none");
      sciQ1.setAttribute("rules", "");
      sciQ2.setAttribute("rules", "");
      break;

    case 1:
      subBtn.hidden = false;
      bigTest.classList.remove("d-none");
      one.classList.remove("d-none");
      two.classList.remove("d-none");
      sciQ1.setAttribute("rules", "required");
      sciQ2.setAttribute("rules", "required");
      sciQ1.required = true;
      sciQ2.required = true;
      break;

    default:
      subBtn.hidden = true;
      bigTest.classList.add("d-none");
      one.classList.add("d-none");
      two.classList.add("d-none");
      sciQ1.required = false;
      sciQ2.required = false;
      break;
  }
};
