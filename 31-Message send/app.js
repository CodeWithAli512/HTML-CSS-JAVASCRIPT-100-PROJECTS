(function () {
    const form = document.getElementById("message-form");
    const inputmessage = document.getElementById("inputmessage");
    const output = document.querySelector(".message-content");
    const feedback = document.querySelector(".feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        if (inputmessage.value === "") {
            feedback.classList.add('error');
            setTimeout(() => {
                feedback.classList.remove('error');
            }, 4000);
        }
        else {
            output.textContent = inputmessage.value;
            inputmessage.value = "";
        }

    }
    )
})();