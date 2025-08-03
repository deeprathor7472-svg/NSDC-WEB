
function verifyCertificate() {
  const certId = document.getElementById("certId").value.trim();
  const result = document.getElementById("resultMessage");
  const downloadBtn = document.getElementById("downloadBtn");

  const validCertificates = {
    "NSDC2025001235": "certificates/NSDC2025001235.pdf"
  };

  downloadBtn.style.display = "none";
  result.style.color = "black";

  if (certId === "") {
    result.style.color = "orange";
    result.textContent = "Please enter a certificate number.";
  } else if (validCertificates.hasOwnProperty(certId)) {
    result.style.color = "green";
    result.textContent = `✅ Certificate ${certId} verified successfully!`;
    downloadBtn.href = validCertificates[certId];
    downloadBtn.style.display = "inline-block";
  } else {
    result.style.color = "red";
    result.textContent = "❌ Certificate not found. Please check the number.";
  }
}
