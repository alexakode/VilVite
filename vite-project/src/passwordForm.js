const passwordForm = (formElement) => {
  formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const hashedPassword = await hashPassword(formData.get("password"));
    alert(`Hashed Password: ${hashedPassword}`);
  });
};
