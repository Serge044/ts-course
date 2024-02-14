const emailInput = document.getElementById("email") as HTMLInputElement;
const titleInput = document.getElementById("title") as HTMLInputElement;
const textInput = document.getElementById("text") as HTMLInputElement;
const checkboxInput = document.getElementById("checkbox") as HTMLInputElement;

interface FormData {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
}

const formData: FormData = {
  email: "",
  title: "",
  text: "",
  checkbox: false,
} as FormData;



const forms = document.querySelectorAll("form") as NodeListOf<HTMLFormElement>;

if (forms) {
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      //   console.log("Form submitted!");

      formData.email = emailInput.value;
      formData.title = titleInput.value;
      formData.text = textInput.value;
      formData.checkbox = checkboxInput.checked;
      //   console.log(formData);
      //   console.log(`All values filled? ${isAllValuesTrue(formData)}`);
      //   validateFormData(formData);
      if (validateFormData(formData)) {
        checkFormData(formData);
      }
    });
  });
}

function isAllValuesTrue(data: FormData): boolean {
  if (
    data.email !== undefined &&
    data.email !== "" &&
    data.title !== undefined &&
    data.title !== "" &&
    data.text !== undefined &&
    data.text !== ""
  ) {
    return true;
  }
  return false;
}

function validateFormData(data: FormData) {
  if (isAllValuesTrue(data)) {
    return true;
  } else {
    console.log("Please, complete all fields");
    return false;
  }
}

function checkFormData(data: FormData): void {
  const { email } = data;
  const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

  if (emails.includes(email)) {
    console.log("This email is already exist");
  } else {
    console.log("Posting data...");
  }
}
