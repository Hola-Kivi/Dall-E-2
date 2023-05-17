import fetcher from "./utils/fetcher";

import "./css/style.css";
import "./css/spinner.css";

const image = document.querySelector("#image") as HTMLImageElement;
const sizeInput = document.querySelector("#size") as HTMLInputElement;
const promptInput = document.querySelector("#prompt") as HTMLInputElement;
const msg = document.querySelector(".msg") as HTMLElement;
const spinner = document.querySelector(".spinner") as HTMLElement;
const btnForm = document.querySelector("#image-form") as HTMLElement;

const onSubmit = (e: SubmitEvent) => {
  e.preventDefault();

  msg.textContent = "";
  image.src = "";

  const promptValue = promptInput.value;
  const sizeValue = sizeInput.value;

  if (promptValue === "") {
    alert("Please add some text");
    return;
  }

  generateImageRequest(promptValue, sizeValue);
};

const generateImageRequest = async (prompt: string, size: string) => {
  try {
    showSpinner();

    const data = await fetcher({
      url: "/api/image",
      method: "POST",
      body: { prompt, size },
    });

    image.src = data;

    removeSpinner();
  } catch (error: any) {
    msg.textContent = error;
    removeSpinner();
  }
};
function showSpinner() {
  spinner.classList.add("show");
}
function removeSpinner() {
  spinner.classList.remove("show");
}

btnForm.addEventListener("submit", onSubmit);
