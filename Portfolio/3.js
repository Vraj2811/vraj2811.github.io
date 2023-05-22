const contactform = document.querySelector("#contactForm");
const submitBtn = document.querySelector("#button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const mobInput = document.querySelector("#phone");
const messageInput = document.querySelector("#feedback");


const publickey = "HWt8cmifLwCeIfywY"
const serviceID = "service_6ynxd21";
const templateID = "template_xe56f86"

emailjs.init(publickey);

contactform.addEventlistener("submit", e => {
    e.preventDefault();
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }

    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            console.log("finally");
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }, (error) => {
            console.log(error);
            submitBtn.innerText = "Something went wrong";
        });
});