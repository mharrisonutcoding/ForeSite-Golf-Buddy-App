const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#first-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const compStyle = document.querySelector("#comp").value.trim();
  const laxStyle = document.querySelector("#lax").value.trim();
  const handicap = document.querySelector("#handicap").value.trim();
  const gender = document.querySelector("#gender").value.trim();
  const userName = document.querySelector("#username").value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        gender,
        userName,
        firstName,
        lastName,
        email,
        password,
        compStyle,
        laxStyle,
        handicap,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
