function placeOrder() {
  // Get values
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = document.getElementById("age").value;
  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value;
  const type = document.getElementById("type").value;

  // Get selected gender
  const genderInput = document.querySelector('input[name="gender"]:checked');

  // Validation
  if (!name || !phone || !age || !from || !to || !date) {
    alert("Please fill all details");
    return;
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Enter valid 10 digit phone number");
    return;
  }

  // Age validation
  if (age <= 0 || age > 120) {
    alert("Enter valid age");
    return;
  }

  // Gender validation
  if (!genderInput) {
    alert("Please select gender");
    return;
  }

  const gender = genderInput.value;

  // 🔴 YOUR WHATSAPP NUMBER
  const yourNumber = "918436490311";

  // Message
  const message = `Hello, I want to book a ticket:

Name: ${name}
Phone: ${phone}
Age: ${age}
Gender: ${gender}
From: ${from}
To: ${to}
Date: ${date}
Type: ${type}

👉 I will send Aadhaar photo here.`;

  // Open WhatsApp
  const url = `https://wa.me/${8436490311}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}