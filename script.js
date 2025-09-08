function validateForm(event) {
  event.preventDefault(); // stop actual form submission

  const form = document.getElementById("registrationForm");
  const formData = new FormData(form);

  // Build result content
  let output = `<h3>Submitted Details</h3>`;
  output += `<p><strong>First Name:</strong> ${formData.get("firstName")}</p>`;
  output += `<p><strong>Last Name:</strong> ${formData.get("lastName")}</p>`;
  output += `<p><strong>Father's Name:</strong> ${formData.get("fatherName")}</p>`;
  output += `<p><strong>Mother's Name:</strong> ${formData.get("motherName")}</p>`;
  output += `<p><strong>Date of Birth:</strong> ${formData.get("dob")}</p>`;
  output += `<p><strong>Gender:</strong> ${formData.get("gender")}</p>`;
  output += `<p><strong>Address:</strong> ${formData.get("address")}</p>`;
  output += `<p><strong>Qualification:</strong> ${formData.get("qualification")}</p>`;
  output += `<p><strong>Education Details:</strong> ${formData.get("education")}</p>`;
  output += `<p><strong>Email:</strong> ${formData.get("email")}</p>`;
  output += `<p><strong>Phone:</strong> ${formData.get("phone")}</p>`;

  // Show uploaded file names
  const photo = formData.get("photo");
  const signature = formData.get("signature");
  if (photo && photo.name) output += `<p><strong>Photo:</strong> ${photo.name}</p>`;
  if (signature && signature.name) output += `<p><strong>Signature:</strong> ${signature.name}</p>`;

  // Display inside result div
  document.getElementById("result").innerHTML = output;
document.getElementById("result").style.display = "block";
  return false; // prevent actual submission
}