const defaultConfig = {
  background_color: "#f0f9ff",
  card_color: "#ffffff",
  primary_color: "#3b82f6",
  text_color: "#1e293b",
  accent_color: "#10b981",
  font_family: "Segoe UI",
  font_size: 16,
  quiz_title: "Quiz TOEIC",
  start_button_text: "Commencer le Quiz",
  add_question_button: "Ajouter une Question"
};

let allQuestions = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const dataHandler = {
  onDataChanged(data) {
    allQuestions = data;
    updateQuestionCount();
    renderQuestionList();
  }
};

async function onConfigChange(config) {
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const cardColor = config.card_color || defaultConfig.card_color;
  const primaryColor = config.primary_color || defaultConfig.primary_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const accentColor = config.accent_color || defaultConfig.accent_color;
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;
  const baseFontStack = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';

  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = textColor;
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  document.getElementById('quiz-title').textContent = config.quiz_title || defaultConfig.quiz_title;
  document.getElementById('start-btn').textContent = config.start_button_text || defaultConfig.start_button_text;
  document.getElementById('manage-questions-btn').textContent = config.add_question_button || defaultConfig.add_question_button;

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.backgroundColor = cardColor;
  });

  const statItems = document.querySelectorAll('.stat-item');
  statItems.forEach(item => {
    item.style.backgroundColor = backgroundColor;
  });

  document.querySelector('.progress-bar').style.backgroundColor = backgroundColor;
  document.getElementById('progress-fill').style.backgroundColor = primaryColor;

  const primaryButtons = document.querySelectorAll('.btn-primary');
  primaryButtons.forEach(btn => {
    btn.style.backgroundColor = primaryColor;
    btn.style.color = '#ffffff';
  });

  const secondaryButtons = document.querySelectorAll('.btn-secondary');
  secondaryButtons.forEach(btn => {
    btn.style.backgroundColor = cardColor;
    btn.style.color = primaryColor;
    btn.style.border = `2px solid ${primaryColor}`;
  });

  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.style.backgroundColor = backgroundColor;
    option.style.color = textColor;
  });

  const explanation = document.getElementById('explanation');
  explanation.style.backgroundColor = backgroundColor;
  explanation.style.borderLeftColor = accentColor;

  const scoreCircle = document.getElementById('score-circle');
  scoreCircle.style.borderColor = accentColor;
  scoreCircle.style.color = accentColor;

  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.style.borderColor = primaryColor;
    input.style.color = textColor;
  });

  const questionItems = document.querySelectorAll('.question-item');
  questionItems.forEach(item => {
    item.style.backgroundColor = backgroundColor;
    item.style.borderColor = primaryColor;
  });

  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(btn => {
    btn.style.backgroundColor = '#ef4444';
    btn.style.color = '#ffffff';
  });

  document.querySelector('.header h1').style.fontSize = `${baseSize * 3}px`;
  document.querySelector('.header p').style.fontSize = `${baseSize * 1.25}px`;
  document.querySelectorAll('.stat-number').forEach(el => el.style.fontSize = `${baseSize * 2.25}px`);
  document.querySelectorAll('.stat-label').forEach(el => el.style.fontSize = `${baseSize}px`);
  document.querySelectorAll('.btn').forEach(el => el.style.fontSize = `${baseSize * 1.125}px`);
  document.querySelectorAll('.btn-primary').forEach(el => el.style.fontSize = `${baseSize * 1.25}px`);
  document.querySelector('.question-number').style.fontSize = `${baseSize * 1.125}px`;
  document.querySelector('.question-text').style.fontSize = `${baseSize * 1.5}px`;
  document.querySelectorAll('.option').forEach(el => el.style.fontSize = `${baseSize * 1.125}px`);
  document.querySelector('.explanation-title').style.fontSize = `${baseSize * 1.125}px`;
  document.querySelector('.explanation-text').style.fontSize = `${baseSize}px`;
  document.querySelector('.score-number').style.fontSize = `${baseSize * 4}px`;
  document.querySelector('.score-label').style.fontSize = `${baseSize * 1.25}px`;
  document.querySelector('.results-message').style.fontSize = `${baseSize * 1.5}px`;
  document.querySelectorAll('.form-group label').forEach(el => el.style.fontSize = `${baseSize}px`);
  document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => el.style.fontSize = `${baseSize}px`);
}

/**
 * [FONCTION CORRIGÉE]
 * Initialise l'application sans les SDK.
 */
async function init() {
  // 1. On charge manuellement les questions depuis 'questions.js'
  // 'seedQuestions' DOIT exister grâce au fichier questions.js
  if (typeof seedQuestions !== 'undefined') {
      allQuestions = seedQuestions;
      updateQuestionCount();
      renderQuestionList();
  } else {
      console.error("ERREUR: Le fichier questions.js n'a pas été chargé avant script.js.");
      showToast('Erreur: Fichier questions.js manquant', '#ef4444');
      return;
  }

  // 2. On applique la configuration par défaut (car elementSdk n'est pas là)
  await onConfigChange(defaultConfig);

  // 3. On attache les écouteurs d'événements (très important)
  setupEventListeners();
}

function setupEventListeners() {
  document.getElementById('start-btn').addEventListener('click', startQuiz);
  document.getElementById('manage-questions-btn').addEventListener('click', showAddQuestionScreen);
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
  document.getElementById('finish-btn').addEventListener('click', showResults);
  document.getElementById('restart-btn').addEventListener('click', startQuiz);
  document.getElementById('back-home-btn').addEventListener('click', showStartScreen);
  document.getElementById('cancel-btn').addEventListener('click', showStartScreen);
  document.getElementById('question-form').addEventListener('submit', saveQuestion);
}

function updateQuestionCount() {
  document.getElementById('total-questions').textContent = allQuestions.length;
}

function showToast(message, color) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.backgroundColor = color;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function startQuiz() {
  if (allQuestions.length < 10) {
    showToast('Ajoutez au moins 10 questions pour commencer', '#ef4444');
    return;
  }

  currentQuestions = getRandomQuestions(10);
  currentQuestionIndex = 0;
  score = 0;
  answered = false;

  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById('results-screen').style.display = 'none';
  document.getElementById('add-question-screen').style.display = 'none';

  displayQuestion();
}

function getRandomQuestions(count) {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function displayQuestion() {
  const question = currentQuestions[currentQuestionIndex];
  answered = false;

  document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}/10`;
  
  const questionText = question.question.replace('_____', '<span class="blank">_____</span>');
  document.getElementById('question-text').innerHTML = questionText;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  const options = [
    { letter: 'A', text: question.option_a },
    { letter: 'B', text: question.option_b },
    { letter: 'C', text: question.option_c },
    { letter: 'D', text: question.option_d }
  ];

  options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.innerHTML = `<strong>${option.letter}.</strong> ${option.text}`;
    optionDiv.addEventListener('click', () => selectOption(option.letter, question.correct_answer));
    optionsContainer.appendChild(optionDiv);
  });

  document.getElementById('explanation').classList.remove('show');
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('finish-btn').style.display = 'none';

  const progress = ((currentQuestionIndex + 1) / 10) * 100;
  document.getElementById('progress-fill').style.width = `${progress}%`;
}

function selectOption(selected, correct) {
  if (answered) return;
  answered = true;

  const options = document.querySelectorAll('.option');
  options.forEach((option, index) => {
    const letter = ['A', 'B', 'C', 'D'][index];
    option.classList.add('disabled');
    
    if (letter === correct) {
      option.classList.add('correct');
    }
    if (letter === selected && selected !== correct) {
      option.classList.add('incorrect');
    }
    if (letter === selected) {
      option.classList.add('selected');
    }
  });

  if (selected === correct) {
    score++;
  }

  const question = currentQuestions[currentQuestionIndex];
  document.getElementById('explanation-text').textContent = question.explanation;
  document.getElementById('explanation').classList.add('show');

  if (currentQuestionIndex < 9) {
    document.getElementById('next-btn').style.display = 'inline-block';
  } else {
    document.getElementById('finish-btn').style.display = 'inline-block';
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  displayQuestion();
}

function showResults() {
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('results-screen').style.display = 'block';

  document.getElementById('score-number').textContent = score;

  let message = '';
  if (score === 10) {
    message = '🎉 Parfait ! Excellent travail !';
  } else if (score >= 7) {
    message = '👏 Très bien ! Continuez comme ça !';
  } else if (score >= 5) {
    message = '👍 Pas mal ! Encore un peu de pratique !';
  } else {
    message = '💪 Continuez à vous entraîner !';
  }
  document.getElementById('results-message').textContent = message;
}

function showStartScreen() {
  document.getElementById('start-screen').style.display = 'block';
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('results-screen').style.display = 'none';
  document.getElementById('add-question-screen').style.display = 'none';
  document.getElementById('question-form').reset();
}

function showAddQuestionScreen() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('add-question-screen').style.display = 'block';
  renderQuestionList();
}

/**
 * [FONCTION CORRIGÉE]
 * Simule la sauvegarde en local (disparaît à l'actualisation).
 */
async function saveQuestion(e) {
  e.preventDefault();

  if (allQuestions.length >= 999) {
    showToast('Limite de 999 questions atteinte', '#ef4444');
    return;
  }

  const saveBtn = document.getElementById('save-question-btn');
  saveBtn.disabled = true;
  saveBtn.textContent = 'Enregistrement...';

  const questionData = {
    id: Date.now().toString(),
    question: document.getElementById('question-input').value,
    option_a: document.getElementById('option-a').value,
    option_b: document.getElementById('option-b').value,
    option_c: document.getElementById('option-c').value,
    option_d: document.getElementById('option-d').value,
    correct_answer: document.querySelector('input[name="correct"]:checked').value,
    explanation: document.getElementById('explanation-input').value,
    created_at: new Date().toISOString()
  };

  // ----- SIMULATION LOCALE (le SDK est supprimé) -----
  allQuestions.push(questionData);
  dataHandler.onDataChanged(allQuestions); // Met à jour l'UI
  const result = { isOk: true }; // On simule une réussite
  // ----------------------------------------------------

  saveBtn.disabled = false;
  saveBtn.textContent = 'Enregistrer';

  if (result.isOk) {
    showToast('Question ajoutée (session locale) !', '#10b981');
    document.getElementById('question-form').reset();
  } else {
    showToast('Erreur lors de l\'ajout de la question', '#ef4444');
  }
}

function renderQuestionList() {
  const listContainer = document.getElementById('question-list');
  listContainer.innerHTML = '';

  if (allQuestions.length === 0) {
    listContainer.innerHTML = '<p style="text-align: center; opacity: 0.6; padding: 20px;">Aucune question ajoutée</p>';
    return;
  }

  allQuestions.forEach(question => {
    const item = document.createElement('div');
    item.className = 'question-item';
    
    const preview = document.createElement('div');
    preview.className = 'question-preview';
    preview.textContent = question.question.substring(0, 60) + (question.question.length > 60 ? '...' : '');
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.addEventListener('click', () => deleteQuestion(question));
    
    item.appendChild(preview);
    item.appendChild(deleteBtn);
    listContainer.appendChild(item);
  });
}

/**
 * [FONCTION CORRIGÉE]
 * Simule la suppression en local (disparaît à l'actualisation).
 */
async function deleteQuestion(question) {
  // ----- SIMULATION LOCALE (le SDK est supprimé) -----
  allQuestions = allQuestions.filter(q => q.id !== question.id);
  dataHandler.onDataChanged(allQuestions); // Met à jour l'UI
  const result = { isOk: true }; // On simule une réussite
  // ----------------------------------------------------
  
  if (result.isOk) {
    showToast('Question supprimée (session locale)', '#10b981');
  } else {
    showToast('Erreur lors de la suppression', '#ef4444');
  }
}

// Lance l'application
init();