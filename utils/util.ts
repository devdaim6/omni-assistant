export const getSecret = async (secretAccess: string) => {
  const res = await fetch(`/api/gemini-api/${secretAccess}`);
  const response = await res.json();
  return await response?.secret;
};
