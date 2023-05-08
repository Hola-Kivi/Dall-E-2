import { fetcher } from '../../utils/fetcher';

const image = document.querySelector('#image') as HTMLInputElement;
const msg = document.querySelector('.msg') as HTMLInputElement;
const prompt = document.querySelector('#prompt') as HTMLInputElement;
const size = document.querySelector('#size') as HTMLInputElement;

const onSubmit = (e: SubmitEvent) => {
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
