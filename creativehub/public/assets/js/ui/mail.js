class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.statusText = document.getElementById("form-status");
        this.submitBtn = this.form.querySelector("button");

        this.kvkkCheckbox = this.form.querySelector("#kvkk-consent");
        this.kvkkLink = this.form.querySelector("#kvkk-link");
        this.kvkkText = this.form.querySelector("#kvkk-text");

        emailjs.init("q-piqx8aTI4rxRlvt");

        this.bindEvents();
    }

    bindEvents() {
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));

        if (this.kvkkLink) {
            this.kvkkLink.addEventListener("click", () => this.toggleKvkkText());
        }
    }

    toggleKvkkText() {
        this.kvkkText.style.display =
            this.kvkkText.style.display === "block" ? "none" : "block";
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.kvkkCheckbox && !this.kvkkCheckbox.checked) {
            this.statusText.textContent = "Lütfen KVKK onayını verin.";
            this.statusText.style.color = "red";
            return;
        }

        this.submitBtn.disabled = true;
        this.statusText.textContent = "Gönderiliyor...";
        this.statusText.style.color = "#4da6ff";

        this.form.querySelector("#time").value =
            new Date().toLocaleString("tr-TR");

        emailjs.sendForm(
            "service_kzoso0r",
            "template_px0hey7",
            this.form
        )
            .then(() => this.onSuccess())
            .catch(() => this.onError())
            .finally(() => this.onFinally());
    }

    onSuccess() {
        this.statusText.textContent = "Mesaj başarıyla gönderildi ✔";
        this.statusText.style.color = "#4da6ff";
        this.form.reset();
        if (this.kvkkText) this.kvkkText.style.display = "none";
    }

    onError() {
        this.statusText.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
        this.statusText.style.color = "red";
    }

    onFinally() {
        this.submitBtn.disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ContactForm("contact-form");
});