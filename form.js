let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let confirmEmailEl = document.getElementById("confirm-email");
let confirmEmailErrMsgEl = document.getElementById("confirmEmailErrMsg");
let countryEl = document.getElementById("country");
let countryErrMsgEl = document.getElementById("countryErrMsg");
let numberEl = document.getElementById("phone");
let numberErrMsgEl = document.getElementById("numberErrMsg");

let academicLevelEl = document.getElementById("academicLevel");
let academicLevelErrMsgEl = document.getElementById("academicLevelErrMsg");
let subjectAreaEl = document.getElementById("subjectArea");
let subjectAreaErrMsgEl = document.getElementById("subjectAreaErrMsg");
let areaOfResearchEl = document.getElementById("areaOfResearch");
let areaOfResearchErrMsgEl = document.getElementById("areaOfResearchErrMsg");
let topicOfResearchEl = document.getElementById("topicOfResearch");
let topicOfResearchErrMsgEl = document.getElementById("topicOfResearchErrMsg");
let serviceRequiredEl = document.getElementById("serviceRequired");
let serviceRequiredErrMsgEl = document.getElementById("serviceRequiredErrMsg");

let researchObjectivesEl = document.getElementById("researchObjectives");
let researchObjectivesErrMsgEl = document.getElementById("researchObjectivesErrMsg");
let researchHypothesisEl = document.getElementById("researchHypothesis");
let researchHypothesisErrMsgEl = document.getElementById("researchHypothesisErrMsg");
let timelineEl = document.getElementById("timeline");
let timelineErrMsgEl = document.getElementById("timelineErrMsg");
let instructionsEl = document.getElementById("instructions");
let instructionsErrMsgEl = document.getElementById("instructionsErrMsg");

let proposalEl = document.getElementById("proposal");
let submitButtonEl = document.getElementById("submitButton");
let successMessageEl = document.getElementById("successMessage");

let currentStep = 1;
let steps = document.getElementsByClassName("step");

function validateStep(step) {
    if (step === 1) {
        if (nameEl.value === "") {
            nameErrMsgEl.textContent = "Please enter name";
            return false;
        } else {
            nameErrMsgEl.textContent = "";
        }

        if (emailEl.value === "") {
            emailErrMsgEl.textContent = "Please enter email address";
            return false;
        } else {
            emailErrMsgEl.textContent = "";
        }

        if (confirmEmailEl.value === "") {
            confirmEmailErrMsgEl.textContent = "Please confirm your email address";
            return false;
        } else {
            confirmEmailErrMsgEl.textContent = "";
        }

        if (emailEl.value !== confirmEmailEl.value) {
            confirmEmailErrMsgEl.textContent = "Email addresses do not match";
            return false;
        } else {
            confirmEmailErrMsgEl.textContent = "";
        }

        if (countryEl.value === "") {
            countryErrMsgEl.textContent = "Please enter your country name";
            return false;
        } else {
            countryErrMsgEl.textContent = "";
        }

        if (numberEl.value === "") {
            numberErrMsgEl.textContent = "Please enter your phone number";
            return false;
        } else if (!/^\d+$/.test(numberEl.value)) {
            numberErrMsgEl.textContent = "Please enter only numbers";
            return false;
        } else {
            numberErrMsgEl.textContent = "";
        }
    }

    if (step === 2) {
        if (academicLevelEl.value === "") {
            academicLevelErrMsgEl.textContent = "Please select your academic level";
            return false;
        } else {
            academicLevelErrMsgEl.textContent = "";
        }

        if (subjectAreaEl.value === "") {
            subjectAreaErrMsgEl.textContent = "Please select your subject area";
            return false;
        } else {
            subjectAreaErrMsgEl.textContent = "";
        }

        if (areaOfResearchEl.value === "") {
            areaOfResearchErrMsgEl.textContent = "Please select your area of research";
            return false;
        } else {
            areaOfResearchErrMsgEl.textContent = "";
        }

        if (topicOfResearchEl.value === "") {
            topicOfResearchErrMsgEl.textContent = "Please enter your topic of research";
            return false;
        } else {
            topicOfResearchErrMsgEl.textContent = "";
        }

        if (serviceRequiredEl.value === "") {
            serviceRequiredErrMsgEl.textContent = "Please select the service required";
            return false;
        } else {
            serviceRequiredErrMsgEl.textContent = "";
        }
    }

    if (step === 3) {
        if (researchObjectivesEl.value === "") {
            researchObjectivesErrMsgEl.textContent = "Please enter your research objectives";
            return false;
        } else {
            researchObjectivesErrMsgEl.textContent = "";
        }

        if (researchHypothesisEl.value === "") {
            researchHypothesisErrMsgEl.textContent = "Please enter your research hypothesis";
            return false;
        } else {
            researchHypothesisErrMsgEl.textContent = "";
        }

        if (timelineEl.value === "") {
            timelineErrMsgEl.textContent = "Please enter your timeline";
            return false;
        } else {
            timelineErrMsgEl.textContent = "";
        }

        if (instructionsEl.value === "") {
            instructionsErrMsgEl.textContent = "Please enter any further instructions";
            return false;
        } else {
            instructionsErrMsgEl.textContent = "";
        }
    }
    return true;
}

function showStep(step) {
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.display = "none";
    }
    steps[step - 1].style.display = "block";
}

function nextStep() {
    if (currentStep < steps.length) {
        if (validateStep(currentStep)) {
            currentStep++;
            showStep(currentStep);
        }
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        successMessageEl.classList.add("d-none");
    }
}

showStep(currentStep);

submitButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    successMessageEl.classList.remove("d-none");
});