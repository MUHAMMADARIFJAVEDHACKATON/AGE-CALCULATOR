function calculateAge() {
    let birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        document.getElementById('result').innerHTML = "Please select a valid date.";
        return;
    }

    let birthDate = new Date(birthdate);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if current month/day is less than birth month/day
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }

    document.getElementById('result').innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
}
