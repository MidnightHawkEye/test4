function checkAge() {
    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);
    const output = document.getElementById("output");

    if (!name) {
        output.innerText = "❌ Please enter your name.";
        return;
    }

    if (isNaN(age) || age <= 0) {
        output.innerText = "❌ Please enter a valid age.";
        return;
    }

    if (age < 18) {
        output.innerText = `🚫 Sorry ${name}, entry is allowed from 18+.`;
    } else {
        output.innerText = `✅ Welcome ${name}! You are old enough to enter.`;
        document.getElementById("cashSection").style.display = "block";
    }
}

function checkCash() {
    const cash = Number(document.getElementById("cash").value);
    const output = document.getElementById("output");

    if (isNaN(cash) || cash < 0) {
        output.innerText = "❌ Please enter a valid cash amount.";
        return;
    }

    if (cash === 0) {
        output.innerText += "\n😬 No cash? This might be a short night...";
    } else if (cash < 20) {
        output.innerText += "\n🍺 Enough for maybe one drink.";
    } else if (cash < 50) {
        output.innerText += "\n🍹 Solid amount, a few drinks are possible!";
    } else {
        output.innerText += "\n🔥 VIP vibes! Looks like a great night!";
    }
}




