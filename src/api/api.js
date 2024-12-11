export const api = async () => {
  const response = await fetch(
    "https://kala-textiles-api.vercel.app/api/products"
  );
  if (!response.ok) throw new Error("Failed to fetch datafs");
  const data = await response.json();
  return data;
};
