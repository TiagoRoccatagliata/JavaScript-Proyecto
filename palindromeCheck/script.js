// Función para limpiar y preparar el texto
function cleanText(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]/g, ''); // Remueve cualquier carácter que no sea una letra o número
  }
  
  // Función para verificar si un texto es palíndromo
  function isPalindrome(text) {
    const cleanedText = cleanText(text);
    const reversedText = cleanedText.split('').reverse().join('');
    return cleanedText === reversedText;
  }
  
  // Evento que se ejecuta al hacer clic en el botón "Check"
  document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value.trim();
    const resultSpan = document.getElementById('result');
    
    if (!textInput) {
      alert("Please input a value");
      return;
    }
  
    const isPalin = isPalindrome(textInput);
    resultSpan.textContent = `"${textInput}" ${isPalin ? 'is' : 'is not'} a palindrome.`;
  });