let formContainer = document.querySelector(".form-container");
let button = document.querySelector("#form-button");
let container = document.querySelector(".container");
button.style = "display:none";
document.querySelector(".alco").addEventListener("click", () => {
  button.style = "display:true";
  formContainer.innerHTML = `<h3>Алкогольна залежність</h3>
    <label>Чи були в вас приводи в поліцію через наркотики?
      <label>Так<input type="radio" name="police" value="yes" required ></label>
      <label>Ні<input type="radio" name="police" value="no" ></label>
    </label>
<br><label>Чи забивали ви на роботу через наркотики?
    <label>Так<input type="radio" name="job" value="yes" required ></label>
    <label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label>Чи крали ви гроші на  наркотики?
  <label>Так<input type="radio" name="steal" value="yes" required ></label>
  <label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label>Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>
<p class="container"></p>`;
});
document.querySelector(".narco").addEventListener("click", () => {
  button.style = "display:true";
  formContainer.innerHTML = `<section class="narco-form" id="form">
    <h3>Хімічна залежність</h3>
    <label>Чи були в вас приводи в поліцію через наркотики?
      <label>Так<input type="radio" name="police" value="yes" required ></label>
      <label>Ні<input type="radio" name="police" value="no" ></label>
    </label>
<br><label>Чи забивали ви на роботу через наркотики?
    <label>Так<input type="radio" name="job" value="yes" required ></label>
    <label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label>Чи крали ви гроші на  наркотики?
  <label>Так<input type="radio" name="steal" value="yes" required ></label>
  <label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label>Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>
  
    <p class="container"></p>
  </section>`;
});
document.querySelector(".gamble").addEventListener("click", () => {
  button.style = "display:true";
  formContainer.innerHTML = `<section class="gamble-form" id="form">
 <h3>Патологічний азарт</h3>
 <p>(Ігрова залженість)</p>
 <label>Чи були в вас приводи в поліцію через наркотики?
   <label>Так<input type="radio" name="police" value="yes" required ></label>
   <label>Ні<input type="radio" name="police" value="no" ></label>
 </label>
<br><label>Чи забивали ви на роботу через наркотики?
 <label>Так<input type="radio" name="job" value="yes" required ></label>
 <label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label>Чи крали ви гроші на  наркотики?
<label>Так<input type="radio" name="steal" value="yes" required ></label>
<label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label>Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>

 <p class="container"></p>
</section>`;
});
document.querySelector(".relatives").addEventListener("click", () => {
  button.style = "display:true";
  formContainer.innerHTML = `<section class="relatives-form" id="form">
   <h3>Співзалежність</h3>
   <p>(Родичі залежних)</p>
   <label>Чи були в вас приводи в поліцію через наркотики?
     <label>Так<input type="radio" name="police" value="yes" required ></label>
     <label>Ні<input type="radio" name="police" value="no" ></label>
   </label>
<br><label>Чи забивали ви на роботу через наркотики?
   <label>Так<input type="radio" name="job" value="yes" required ></label>
   <label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label>Чи крали ви гроші на  наркотики?
 <label>Так<input type="radio" name="steal" value="yes" required ></label>
 <label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label>Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>
 
   <p class="container"></p>
 </section>`;
});
document.querySelector(".internet").addEventListener("click", () => {
  button.style = "display:true";
  formContainer.innerHTML = `<section class="internet-form" id="form">;
    <h3>Залежність від інтернету чи комп'ютерних ігор</h3>
    <label>Чи були в вас приводи в поліцію через наркотики?
      <label>Так<input type="radio" name="police" value="yes" required ></label>
      <label>Ні<input type="radio" name="police" value="no" ></label>
    </label>
<br><label>Чи забивали ви на роботу через наркотики?
    <label>Так<input type="radio" name="job" value="yes" required ></label>
    <label>Ні<input type="radio" name="job" value="no" ></label>
</label>
<br><label>Чи крали ви гроші на  наркотики?
  <label>Так<input type="radio" name="steal" value="yes" required ></label>
  <label>Ні<input type="radio" name="steal" value="no" ></label>
</label>
<br>
<label>Чи чинили насилля заради наркотиків?
<label>Так<input type="radio" name="violence" value="yes" required ></label>
<label>Ні<input type="radio" name="violence" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="x" value="yes" required ></label>
<label>Ні<input type="radio" name="x" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="y" value="yes" required ></label>
<label>Ні<input type="radio" name="y" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="z" value="yes" required ></label>
<label>Ні<input type="radio" name="z" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="g" value="yes" required ></label>
<label>Ні<input type="radio" name="g" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="t" value="yes" required ></label>
<label>Ні<input type="radio" name="t" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="v" value="yes" required ></label>
<label>Ні<input type="radio" name="v" value="no" ></label>
</label>
<br><label>Чи забивали ви на роботу через наркотики?
<label>Так<input type="radio" name="n" value="yes" required ></label>
<label>Ні<input type="radio" name="n" value="no" ></label>
</label>
    <p class="container"></p>
  </section>`;
});
button.addEventListener("click", () => {
  let arrOfValues = (Array.from(document.querySelectorAll('input[type="radio"]:checked'))).map((a) => a.value);
  let filteredArr = arrOfValues.filter((value) => value === "yes");
  filteredArr.length > 7
    ? (container.innerText = "ADDICTED")
    : (container.innerText = "NOT ADDICTED");
    console.log(filteredArr)
    console.log(arrOfValues)
}
    );
