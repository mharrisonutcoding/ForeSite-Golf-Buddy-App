const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#grid-first-name").value.trim();
  const last_name = document.querySelector("#grid-last-name").value.trim();
  const email = document.querySelector("#grid-email").value.trim();
  const password = document.querySelector("#grid-password").value.trim();
  const compStyle = document.querySelector("#grid-comp").value.trim();
  const laxStyle = document.querySelector("#grid-lax").value.trim();
  const handicap = document.querySelector("#grid-handicap").value.trim();
  const gender = document.querySelector("#grid-gender").value.trim();
  const user_name = document.querySelector("#grid-username").value.trim();
console.log(first_name);
  if (user_name) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({
        // gender,
        user_name,
        first_name,
        last_name,
        email,
        password,
        // compStyle,
        // laxStyle,
        // handicap,
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
