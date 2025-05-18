export const loginFetch = async (email: string, password: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

export const signupFetch = async (name: string, email: string, password: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
};