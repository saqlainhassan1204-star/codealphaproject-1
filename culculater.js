document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value) - 1; // JavaScript months: 0-11
  const year = parseInt(document.getElementById('year').value);
  const result = document.getElementById('result');

  const dob = new Date(year, month, day);
  const today = new Date();

  // Input validation
  if (isNaN(dob.getTime()) || day < 1 || day > 31 || month < 0 || month > 11 || year < 1900 || dob > today) {
    result.textContent = "Please enter a valid date of birth.";
    return;
  }

  // Age calculation
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});
