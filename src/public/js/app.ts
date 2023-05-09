const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    removeSpinner();
    throw new Error('That image could not be generated');
  }

  if (json) {
    const data = await res.json();

    return data.data;
  }
};

const image = document.querySelector('#image') as HTMLImageElement;
const msg = document.querySelector('.msg') as HTMLElement;
const promptInput = document.querySelector('#prompt') as HTMLInputElement;
const sizeInput = document.querySelector('#size') as HTMLInputElement;

const onSubmit = (e: SubmitEvent) => {
  e.preventDefault();

  msg.textContent = '';
  image.src = '';

  const promptValue = promptInput.value;
  const sizeValue = sizeInput.value;

  if (promptValue === '') {
    alert('Please add some text');
    return;
  }

  generateImageRequest(promptValue, sizeValue);
};

const generateImageRequest = async (prompt: string, size: string) => {
  try {
    showSpinner();

    const data = await fetcher({
      url: '/api/image',
      method: 'POST',
      body: { prompt, size },
    });
    // console.log(data);

    const imageUrl = data;
    // image.src = imageUrl;

    removeSpinner();
  } catch (error) {
    document.querySelector('.msg').textContent = error;
  }
};
function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}
function removeSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);
