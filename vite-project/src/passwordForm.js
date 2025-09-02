const passwordForm = (formElement) => {
  formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const hashedPassword = await hashPassword(formData.get("password"));
    alert(`Email: ${email}\n Hashed Password: ${hashedPassword}`);
    console.log(`Email: ${email}\n Hashed Password: ${hashedPassword}`);
  });
};
