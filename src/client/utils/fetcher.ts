interface Fetcher {
  url: string;
  method: string;
  body: {};
  json?: boolean;
}

const fetcher = async ({ url, method, body, json = true }: Fetcher) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("That image could not be generated");
  }

  if (json) {
    const data = await res.json();

    return data.data;
  }
};

export default fetcher;
