export const userEntityFactory = () => {
  return function userEntity({ name, email }: { name: string; email: string }) {
    if (!name) throw new Error("Name is required");
    if (!email.includes("@")) throw new Error("Invalid email");

    return Object.freeze({
      getName: () => name,
      getEmail: () => email,
    });
  };
};
