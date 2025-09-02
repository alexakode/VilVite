import { v4 as uuidv4 } from "uuid";

export const generateUUIDButton = (buttonElement) => {
  buttonElement.addEventListener("click", () => {
    const newUUID = uuidv4();
    alert(`Generated UUID: ${newUUID}`);
  });
};
