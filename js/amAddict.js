let formContainer = document.querySelector(".form-container");
let button = document.querySelector("#form-button");
let container = document.querySelector(".container");
formContainer.innerHTML = `<h3>Алкогольна залежність</h3>
<label class="question">Чи були в вас приводи в поліцію через наркотики?
  <label>Так<input type="radio" name="police" value="yes" required ></label>
  <label>Ні<input type="radio" name="police" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="job" value="yes" required ></label>
<label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label class="question">Чи крали ви гроші на  наркотики?
<label>Так<input type="radio" name="steal" value="yes" required ></label>
<label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label class="question">Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>
<p class="container"></p>`;
let whatAddiction = "alco";
let formQuestionCounter;
document.querySelector(".alco").addEventListener("click", () => {
  whatAddiction = "alco";
  container.innerText = " ";
  formContainer.innerHTML = `<h3>Алкогольна залежність</h3>
    <label class="question">Чи були в вас приводи в поліцію через наркотики?
      <label>Так<input type="radio" name="police" value="yes" required ></label>
      <label>Ні<input type="radio" name="police" value="no" ></label>
    </label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
    <label>Так<input type="radio" name="job" value="yes" required ></label>
    <label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label class="question">Чи крали ви гроші на  наркотики?
  <label>Так<input type="radio" name="steal" value="yes" required ></label>
  <label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label class="question">Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>
<p class="container"></p>`;
});
document.querySelector(".narco").addEventListener("click", () => {
  whatAddiction = "narco";
  container.innerText = " ";
  formContainer.innerHTML = `<section class="narco-form" id="form">
    <h3>Хімічна залежність</h3>
    <label class="question">Чи були в вас приводи в поліцію через наркотики?
      <label>Так<input type="radio" name="police" value="yes" required ></label>
      <label>Ні<input type="radio" name="police" value="no" ></label>
    </label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
    <label>Так<input type="radio" name="job" value="yes" required ></label>
    <label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label class="question">Чи крали ви гроші на  наркотики?
  <label>Так<input type="radio" name="steal" value="yes" required ></label>
  <label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label class="question">Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>
  
    <p class="container"></p>
  </section>`;
});
document.querySelector(".gamble").addEventListener("click", () => {
  whatAddiction = "gamble";
  container.innerText = " ";
  formContainer.innerHTML = `<section class="gamble-form" id="form">
 <h3>Патологічний азарт</h3>
 <p>(Ігрова залженість)</p>
 <label class="question">Чи були в вас приводи в поліцію через наркотики?
   <label>Так<input type="radio" name="police" value="yes" required ></label>
   <label>Ні<input type="radio" name="police" value="no" ></label>
 </label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
 <label>Так<input type="radio" name="job" value="yes" required ></label>
 <label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label class="question">Чи крали ви гроші на  наркотики?
<label>Так<input type="radio" name="steal" value="yes" required ></label>
<label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label class="question">Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>

 <p class="container"></p>
</section>`;
});
document.querySelector(".relatives").addEventListener("click", () => {
  whatAddiction = "relatives";
  container.innerText = " ";
  formContainer.innerHTML = `<section class="relatives-form" id="form">
   <h3>Співзалежність</h3>
   <p>(Родичі залежних)</p>
   <label class="question">Чи були в вас приводи в поліцію через наркотики?
     <label>Так<input type="radio" name="police" value="yes" required ></label>
     <label>Ні<input type="radio" name="police" value="no" ></label>
   </label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
   <label>Так<input type="radio" name="job" value="yes" required ></label>
   <label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label class="question">Чи крали ви гроші на  наркотики?
 <label>Так<input type="radio" name="steal" value="yes" required ></label>
 <label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label class="question">Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>
 
   <p class="container"></p>
 </section>`;
});
document.querySelector(".internet").addEventListener("click", () => {
  whatAddiction = "internet";
  container.innerText = " ";
  formContainer.innerHTML = `<section class="internet-form" id="form">;
    <h3>Залежність від інтернету чи комп'ютерних ігор</h3>
    <label class="question">Чи були в вас приводи в поліцію через наркотики?
      <label>Так<input type="radio" name="police" value="yes" required ></label>
      <label>Ні<input type="radio" name="police" value="no" ></label>
    </label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
    <label>Так<input type="radio" name="job" value="yes" required ></label>
    <label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label class="question">Чи крали ви гроші на  наркотики?
  <label>Так<input type="radio" name="steal" value="yes" required ></label>
  <label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label class="question">Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label class="question">Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>
    <p class="container"></p>
  </section>`;
});

button.addEventListener("click", () => {
  let arrOfValues = Array.from(
    document.querySelectorAll('input[type="radio"]:checked')
  ).map((a) => a.value);
  let filteredArr = arrOfValues.filter((value) => value === "yes");
  if (arrOfValues.length >= 11) {
    switch (whatAddiction) {
      case "alco":
        if (filteredArr.length > 6)
          container.innerText =
            "Ви залежна людина,скоріше зверніться по домопомогу!!!";
        else container.innerText = "На щастя, ви не залежна особистість.";
        break;
      case "narco":
        if (filteredArr.length > 5)
          container.innerText =
            "Ви залежна людина,скоріше зверніться по домопомогу!!!";
        else container.innerText = "На щастя, ви не залежна особистість.";
        break;
      case "gamble":
        if (filteredArr.length > 4)
          container.innerText =
            "Ви залежна людина,скоріше зверніться по домопомогу!!!";
        else container.innerText = "На щастя, ви не залежна особистість.";
        break;
      case "relatives":
        if (filteredArr.length > 3)
          container.innerText =
            "Ви залежна людина,скоріше зверніться по домопомогу!!!";
        else container.innerText = "На щастя, ви не залежна особистість.";
        break;
      case "internet":
        if (filteredArr.length > 2)
          container.innerText =
            "Ви залежна людина,скоріше зверніться по домопомогу!!!";
        else container.innerText = "На щастя, ви не залежна особистість.";
        break;
    }
  } else {
    container.innerText = "Дайте відповідь на всі запитання!";
  }
  if(container.innerText!=="Дайте відповідь на всі запитання!")button.style = "display:none"
});
let radio = document.querySelectorAll('input[type="radio"]:checked');
radio.forEach(a => a.style = "color:black");
