const addButton = document.querySelector('#add-btn');
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  bindData();
});

function bindData() {
  const userCardContainer = document.getElementById("user-card-container");
  const userCardTemplate = document.getElementById("user-card-template");
  const userCardClone = userCardTemplate.content.cloneNode(true);
  
  const userNameInput = document.getElementById('userName');
  const userImageUrlInput = document.getElementById('userImageUrl');
  const userEmailInput = document.getElementById('userEmail');
  const userBioInput = document.getElementById('userBio');
  const userCityInput = document.getElementById('userCity');
  const userStateInput = document.getElementById('userState');
  const userZipInput = document.getElementById('userZip');
  const maleRadioInput = document.getElementById('male');
  const femaleRadioInput = document.getElementById('female');
  
  fillDataInCard(userCardClone, userNameInput, userImageUrlInput, userBioInput, userEmailInput, userCityInput, userStateInput, userZipInput, maleRadioInput, femaleRadioInput);
  
  let deleteButton = userCardClone.querySelector('#delete-btn');
  deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    let cardToRemove = event.target.closest('.user-card');
    userCardContainer.removeChild(cardToRemove);
  });
  
  userCardContainer.appendChild(userCardClone);
}

function fillDataInCard(userCardClone, userNameInput, userImageUrlInput, userBioInput, userEmailInput, userCityInput, userStateInput, userZipInput, maleRadioInput, femaleRadioInput) {
  const userImage = userCardClone.querySelector("#user-img");
  const userName = userCardClone.querySelector('#user-name');
  const userEmail = userCardClone.querySelector("#user-email");
  const userBio = userCardClone.querySelector('#user-bio');
  const userAddress = userCardClone.querySelector("#user-address");
  const userGender = userCardClone.querySelector('#user-gender');
  
  userImage.src = userImageUrlInput.value;
  userName.innerHTML = userNameInput.value;
  userEmail.href = `mailto:${userEmailInput.value}`;
  userEmail.innerHTML = userEmailInput.value;
  userBio.innerHTML = userBioInput.value;
  
  const selectedGender = maleRadioInput.checked ? "Male" : "Female";
  userGender.innerHTML = selectedGender;
  
  const address = `${userCityInput.value}, ${userStateInput.value}, ${userZipInput.value}`;
  userAddress.innerHTML = address;
}
