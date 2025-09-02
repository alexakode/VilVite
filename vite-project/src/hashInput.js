import bcrypt, { hash } from "bcryptjs";
export const hashInput = async (input) => {
  console.log(input);
  const hashedPassword = await bcrypt.hash(input, 10);
  return hashedPassword;
};
