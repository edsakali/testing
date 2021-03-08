const fetchData = async <T>(value: string): Promise<T> => {
  const response = await fetch(
    `http://localhost:3000/DATASET?search=${value}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};

export const getNamesList = async (value: string) => {
  return await fetchData<string[]>(value);
};
