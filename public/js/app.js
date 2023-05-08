const fetcher = async ({ url, method, body, json = true }) => {
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

const image = document.querySelector('#image');
const msg = document.querySelector('.msg');
const prompt = document.querySelector('#prompt');
const size = document.querySelector('#size');

const onSubmit = (e) => {
  e.preventDefault();

  msg.textContent = '';
  image.src = '';

  const promptValue = prompt.value;
  const sizeValue = size.value;

  if (promptValue === '') {
    alert('Please add some text');
    return;
  }

  generateImageRequest(promptValue, sizeValue);
};

const generateImageRequest = async (prompt, size) => {
  try {
    showSpinner();

    const data = await fetcher({
      url: 'http://localhost:3001/api/image',
      method: 'POST',
      body: { prompt, size },
    });
    // console.log(data);

    const imageUrl = data;
    image.src = imageUrl;

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
