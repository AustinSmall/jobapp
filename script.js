document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  // Highlight all text inputs and selects green on page load
  form.querySelectorAll('input[type="text"], select').forEach(el => {
    el.style.backgroundColor = '#c8f7c5';
  });

  const firstName = document.getElementById('firstName');

  // Helper to highlight fields
  function highlightField(element, correct) {
    if (!element) return;
    element.style.backgroundColor = correct ? '#c8f7c5' : '#f7c5c5';
  }

  // Helper to highlight radio group
  function highlightRadio(name, correct) {
    const radios = form.querySelectorAll(`input[name="${name}"]`);
    radios.forEach(radio => {
      radio.parentElement.style.backgroundColor = correct ? '#c8f7c5' : '#f7c5c5';
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Reset all highlights
    form.querySelectorAll('input[type="text"], select').forEach(el => el.style.backgroundColor = '');
    form.querySelectorAll('input[type="radio"]').forEach(el => {
      if (el.parentElement) el.parentElement.style.backgroundColor = '';
    });

    const lastName = document.getElementById('lastName');
    const gender = form.querySelector('input[name="gender"]:checked')?.value;
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

    let allCorrect = true;

    // Donshea logic
    if (norm(firstName.value) === 'donshea') {
      highlightField(lastName, norm(lastName.value) === 'blanding');
      if (norm(lastName.value) !== 'blanding') allCorrect = false;

      highlightRadio('gender', gender === 'male');
      if (gender !== 'male') allCorrect = false;

      highlightField(month, norm(month.value) === 'may');
      if (norm(month.value) !== 'may') allCorrect = false;

      highlightField(day, norm(day.value) === '28');
      if (norm(day.value) !== '28') allCorrect = false;

      highlightField(year, norm(year.value) === '2008');
      if (norm(year.value) !== '2008') allCorrect = false;

      highlightField(age, norm(age.value) === '17');
      if (norm(age.value) !== '17') allCorrect = false;

      highlightField(address, norm(address.value) === '1509 chapel hill rd');
      if (norm(address.value) !== '1509 chapel hill rd') allCorrect = false;

      highlightField(city, norm(city.value) === 'durham');
      if (norm(city.value) !== 'durham') allCorrect = false;

      highlightField(state, norm(state.value) === 'north carolina');
      if (norm(state.value) !== 'north carolina') allCorrect = false;

      highlightField(zip, norm(zip.value) === '27701');
      if (norm(zip.value) !== '27701') allCorrect = false;

      highlightField(emergencyName, norm(emergencyName.value) === 'mary blanding');
      if (norm(emergencyName.value) !== 'mary blanding') allCorrect = false;

      highlightField(relationship, norm(relationship.value) === 'grandmother');
      if (norm(relationship.value) !== 'grandmother') allCorrect = false;

      highlightField(phone, norm(phone.value) === '919-808-0361');
      if (norm(phone.value) !== '919-808-0361') allCorrect = false;

      if (!allCorrect) {
        alert('One or more fields are incorrect for Donshea. Correct fields are green, incorrect are red.');
        const firstError = form.querySelector('input[style*="f7c5c5"], select[style*="f7c5c5"], label[style*="f7c5c5"]');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // DeShaun logic
    if (firstName.value === 'DeShaun') {
      highlightField(lastName, lastName.value === 'Dorty');
      if (lastName.value !== 'Dorty') allCorrect = false;

      highlightRadio('gender', gender === 'male');
      if (gender !== 'male') allCorrect = false;

      highlightField(month, month.value === 'January');
      if (month.value !== 'January') allCorrect = false;

      highlightField(day, day.value === '03');
      if (day.value !== '03') allCorrect = false;

      highlightField(year, year.value === '2006');
      if (year.value !== '2006') allCorrect = false;

      highlightField(age, age.value === '19');
      if (age.value !== '19') allCorrect = false;

      highlightField(address, address.value === '1200 Leon St. Apt C1');
      if (address.value !== '1200 Leon St. Apt C1') allCorrect = false;

      highlightField(city, city.value === 'Durham');
      if (city.value !== 'Durham') allCorrect = false;

      highlightField(state, state.value === 'North Carolina');
      if (state.value !== 'North Carolina') allCorrect = false;

      highlightField(zip, zip.value === '27701');
      if (zip.value !== '27701') allCorrect = false;

      highlightField(emergencyName, emergencyName.value === 'Malissa Alston');
      if (emergencyName.value !== 'Malissa Alston') allCorrect = false;

      highlightField(relationship, relationship.value === 'Mother');
      if (relationship.value !== 'Mother') allCorrect = false;

      highlightField(phone, phone.value === '919-423-0485');
      if (phone.value !== '919-423-0485') allCorrect = false;

      if (!allCorrect) {
        alert('One or more fields are incorrect for DeShaun. Correct fields are green, incorrect are red.');
        const firstError = form.querySelector('input[style*="f7c5c5"], select[style*="f7c5c5"], label[style*="f7c5c5"]');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    // Evelin logic
    if (firstName.value === 'Evelin') {
      highlightField(lastName, lastName.value === 'Pavon-gonzalez');
      if (lastName.value !== 'Pavon-gonzalez') allCorrect = false;

      highlightRadio('gender', gender === 'female');
      if (gender !== 'female') allCorrect = false;

      highlightField(month, month.value === 'December');
      if (month.value !== 'December') allCorrect = false;

      highlightField(day, day.value === '13');
      if (day.value !== '13') allCorrect = false;

      highlightField(year, year.value === '2006');
      if (year.value !== '2006') allCorrect = false;

      highlightField(age, age.value === '18');
      if (age.value !== '18') allCorrect = false;

      highlightField(address, address.value === '2401 Nation Ave C');
      if (address.value !== '2401 Nation Ave C') allCorrect = false;

      highlightField(city, city.value === 'Durham');
      if (city.value !== 'Durham') allCorrect = false;

      highlightField(state, state.value === 'North Carolina');
      if (state.value !== 'North Carolina') allCorrect = false;

      highlightField(zip, zip.value === '27707');
      if (zip.value !== '27707') allCorrect = false;

      highlightField(emergencyName, emergencyName.value === 'Adela Pavon-gonzalez');
      if (emergencyName.value !== 'Adela Pavon-gonzalez') allCorrect = false;

      highlightField(relationship, relationship.value === 'Mother');
      if (relationship.value !== 'Mother') allCorrect = false;

      highlightField(phone, phone.value === '919-592-4761');
      if (phone.value !== '919-592-4761') allCorrect = false;

      if (!allCorrect) {
        alert('One or more fields are incorrect for Evelin. Correct fields are green, incorrect are red.');
        const firstError = form.querySelector('input[style*="f7c5c5"], select[style*="f7c5c5"], label[style*="f7c5c5"]');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
      // Jason logic
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

      highlightField(age, age.value === '17');
      if (age.value !== '17') allCorrect = false;

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
        const firstError = form.querySelector('input[style*="f7c5c5"], select[style*="f7c5c5"], label[style*="f7c5c5"]');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    // Melvin logic
    if (firstName.value === 'Melvin') {
      highlightField(lastName, lastName.value === 'Leiva');
      if (lastName.value !== 'Leiva') allCorrect = false;

      highlightRadio('gender', gender === 'male')
        if (gender !== 'male') allCorrect = false;
      highlightField(month, month.value === 'March');
        if (month.value !== 'March') allCorrect = false;

      highlightField(day, day.value === '20');
        if (day.value !== '20') allCorrect = false;

      highlightField(year, year.value === '2007');
        if (year.value !== '2007') allCorrect = false;

      highlightField(age, age.value === '18');
        if (age.value !== '18') allCorrect = false;

      highlightField(address, address.value === '1101 Angier Ave, C');
        if (address.value !== '1101 Angier Ave, C') allCorrect = false;

      highlightField(city, city.value === 'Durham');
        if (city.value !== 'Durham') allCorrect = false;

      highlightField(state, state.value === 'North Carolina');
        if (state.value !== 'North Carolina') allCorrect = false;

      highlightField(zip, zip.value === '27703');
        if (zip.value !== '27703') allCorrect = false;

      highlightField(emergencyName, emergencyName.value === 'Blanca Leiva');
        if (emergencyName.value !== 'Blanca Leiva') allCorrect = false;

      highlightField(relationship, relationship.value === 'Mother');
        if (relationship.value !== 'Mother') allCorrect = false;

      highlightField(phone, phone.value === '919-824-8652');
        if (phone.value !== '919-824-8652') allCorrect = false;
        if (!allCorrect) { 
            alert('One or more fields are incorrect for Melvin. Correct fields are green, incorrect are red.');
            const firstError = form.querySelector('input[style*="f7c5c5"], select[style*="f7c5c5"], label[style*="f7c5c5"]');
            if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        return;
    }
  });
});