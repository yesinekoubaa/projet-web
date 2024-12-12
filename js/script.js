function submitQuiz() {
  var totalQuestions = 7;
  var score = 0;

  // Récupérer les réponses
  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.querySelector('input[name="q3"]:checked');
  var q4 = document.querySelector('input[name="q4"]:checked');
  var q5 = document.querySelector('input[name="q5"]:checked');
  var q6 = document.querySelector('input[name="q6"]:checked');
  var q7 = document.querySelector('input[name="q7"]:checked');

  // Vérifier les réponses
  if (q1 && q1.value === "Hypertext Markup Language") score++;
  if (q2 && q2.value === "Styliser des pages web") score++;
  if (q3 && q3.value === "PHP") score++;
  if (q4 && q4.value === "Ajouter des animations et interactivité aux pages web") score++;
  if (q5 && q5.value === ".css") score++;
  if (q5 && q6.value === ".html") score++;
  if (q5 && q7.value === ".js") score++;

  // Afficher le résultat
  var resultText = "Vous avez obtenu " + score + " sur " + totalQuestions + " bonnes réponses.";
  document.getElementById('result').innerText = resultText;
}
