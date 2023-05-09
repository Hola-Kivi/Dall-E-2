interface contentParams {
  prompt: string;
  size: string;
}
interface apiParams {
  url: string;
  method: string;
  body: contentParams | '';
  json?: boolean;
}

export const fetcher = async ({
  url,
  method,
  body,
  json = true,
}: apiParams) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('That image could not be generated');
  }
  if (json) {
    const data = await res.json();

    return data.data;
  }
};
