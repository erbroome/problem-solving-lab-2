function sayHello() {
  const greetingElement = document.getElementById("message");
  greetingElement.textContent = "Hello World!";
}



function showName() {
  const inputElement = document.getElementById("nameInput");
  const name = inputElement.value;
  const output = document.getElementById("output");
  output.textContent = `Hello, ${name}!`;
}
