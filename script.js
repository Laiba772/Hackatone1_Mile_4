document.addEventListener('DOMContentLoaded', function () {
    // Ensure that the DOM is fully loaded before executing JavaScript
    document.getElementById("resumeForm").addEventListener("submit", function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        event.preventDefault(); // Prevent form from submitting and refreshing the page
        // Fetch values from form inputs
        var name = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || '';
        var email = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value) || '';
        var phone = ((_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value) || '';
        var education = ((_d = document.getElementById("Education")) === null || _d === void 0 ? void 0 : _d.value) || '';
        var experience = ((_e = document.getElementById("Experience")) === null || _e === void 0 ? void 0 : _e.value) || '';
        var skills = ((_f = document.getElementById("Skills")) === null || _f === void 0 ? void 0 : _f.value) || '';
        // Display the fetched values in the resume display section
        (_g = document.getElementById("display-name")) === null || _g === void 0 ? void 0 : _g.innerText = name;
        (_h = document.getElementById("display-email")) === null || _h === void 0 ? void 0 : _h.innerText = email;
        (_j = document.getElementById("display-phone")) === null || _j === void 0 ? void 0 : _j.innerText = phone;
        (_k = document.getElementById("display-education")) === null || _k === void 0 ? void 0 : _k.innerText = education;
        (_l = document.getElementById("display-experience")) === null || _l === void 0 ? void 0 : _l.innerText = experience;
        (_m = document.getElementById("display-skills")) === null || _m === void 0 ? void 0 : _m.innerText = skills;
    });
    // Allow the resume display section to be editable directly by the user
    document.querySelectorAll('#resume-display [contenteditable="true"]').forEach(function (element) {
        element.addEventListener('input', function () {
            console.log("Content changed in: " + element.id);
        });
    });
});
