function showValue() {
  const value = document.getElementById("nameInput").value;
  document.getElementById("output").innerHTML = value; // intentional unsafe sink
}