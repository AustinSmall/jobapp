 const form = document.querySelector('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const gender = document.querySelector('input[name="gender"]:checked');
const month = document.getElementById('month');
const day = document.getElementById('day');
const year = document.getElementById('year');
const age = document.getElementById('age');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const emergencyName = document.getElementById('emergency-contact-name');
const relationship = document.getElementById('relationship');
const phone = document.getElementById('phone-number');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let allCorrect = true;

  if (firstName.value === 'Jason') {
    highlightField(lastName, lastName.value === 'Rigsbee');
    if (lastName.value !== 'Rigsbee') allCorrect = false;

    highlightRadio('gender', gender === 'male');
    if (gender !== 'male') allCorrect = false;

    highlightField(month, month.value === 'July');
    if (month.value !== 'July') allCorrect = false;

    highlightField(day, day.value === '09');
    if (day.value !== '09') allCorrect = false;

    highlightField(year, year.value === '2008');
    if (year.value !== '2008') allCorrect = false;

    highlightField(age, age.value === '16');
    if (age.value !== '16') allCorrect = false;

    highlightField(address, address.value === '108 Edgewood Dr');
    if (address.value !== '108 Edgewood Dr') allCorrect = false;

    highlightField(city, city.value === 'Durham');
    if (city.value !== 'Durham') allCorrect = false;

    highlightField(state, state.value === 'North Carolina');
    if (state.value !== 'North Carolina') allCorrect = false;

    highlightField(zip, zip.value === '27704');
    if (zip.value !== '27704') allCorrect = false;

    highlightField(emergencyName, emergencyName.value === 'Matthew Rigsbee');
    if (emergencyName.value !== 'Matthew Rigsbee') allCorrect = false;

    highlightField(relationship, relationship.value === 'Father');
    if (relationship.value !== 'Father') allCorrect = false;

    highlightField(phone, phone.value === '919-358-5538');
    if (phone.value !== '919-358-5538') allCorrect = false;

    if (!allCorrect) {
      alert('One or more fields are incorrect for Jason. Correct fields are green, incorrect are red.');
      const firstError = form.querySelector('select[style*="f7c5c5"], label[style*="f7c5c5"]');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  form.submit();
});

function highlightField(field, isCorrect) {
  if (isCorrect) {
    field.style.backgroundColor = '#c5f7c5';
  } else {
    field.style.backgroundColor = '#f7c5c5';
  }
}

function highlightRadio(name, isCorrect) {
  const radios = document.getElementsByName(name);
  radios.forEach(radio => {
    if (isCorrect) {
      radio.parentNode.style.backgroundColor = '#c5f7c5';
    } else {
      radio.parentNode.style.backgroundColor = '#f7c5c5';
    }
  });
}
