// FUNCTION TO CALC ANSW AND REDIRECT TO SPECIFIC PAGE

function checkAnswers() {
  document.getElementById('submit').style.display = 'none';
  // VARIABLES FOR CHOICES
  let partyAnswer = 0;
  let beachAnswer = 0;
  let adrenalineAnswer = 0;
  let mysticAnswer = 0;
  let noAnswer = 0;
  // EXTRACTING INPUT VALUES FOR CALC

  const choices = document.getElementsByTagName('input');
  /// CHECK ALL INPUT, ADD POINT FOR EACH ANSWER
  for (i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      if (choices[i].value == 'p') {
        partyAnswer += 1;
      }
      if (choices[i].value == 'b') {
        beachAnswer += 1;
      }
      if (choices[i].value == 'a') {
        adrenalineAnswer += 1;
      }
      if (choices[i].value == 'm') {
        mysticAnswer += 1;
      }
      if (choices[i].value == null || undefined) {
        noAnswer += 1;
      }
    }
  }

  // CALCULATE MAX SCORES
  const maxscore = Math.max(partyAnswer, beachAnswer, adrenalineAnswer, mysticAnswer, noAnswer);

  // <a> href WILL CHANGE ACCORDING TO ANSWERS
  if (partyAnswer == maxscore) {
    document.getElementById('submit-quiz').href = './destinations/party.html';
  }
  if (beachAnswer == maxscore) {
    document.getElementById('submit-quiz').href = './destinations/beach.html';
  }
  if (adrenalineAnswer == maxscore) {
    document.getElementById('submit-quiz').href = './destinations/adrenaline.html';
  }
  if (mysticAnswer == maxscore) {
    document.getElementById('submit-quiz').href = './destinations/mystical.html';
  }
  if (noAnswer == maxscore) {
    alert('You forgot to answer, please try again.');
    location.reload();
  }

  // QUIZ WILL BE HIDDEN
  document.getElementById('quiz-form').style.display = 'none';
  document.getElementById('quiz').style.height = '50vh';
  // BUTTON TO CONTINUE WILL APPEAR
  document.getElementById('answer').style.display = 'block';
}

