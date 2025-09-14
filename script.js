document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  if (!name.value.trim()) {
    formMessage.textContent = "⚠️ Please enter your name.";
    formMessage.style.color = "red";
    name.focus();
    return;
  }

  if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
    formMessage.textContent = "⚠️ Please enter a valid email.";
    formMessage.style.color = "red";
    email.focus();
    return;
  }

  if (!message.value.trim()) {
    formMessage.textContent = "⚠️ Please enter your message.";
    formMessage.style.color = "red";
    message.focus();
    return;
  }

  // Mock endpoint
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  .then(res => res.json())
  .then(data => {
    formMessage.textContent = "✅ Message sent successfully!";
    formMessage.style.color = "green";
    document.getElementById("contactForm").reset();
  })
  .catch(() => {
    formMessage.textContent = "❌ Something went wrong. Try again!";
    formMessage.style.color = "red";
  });
});
