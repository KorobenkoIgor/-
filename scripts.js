let currentChapter = 1; // Начальная глава

// Список всех глав
const chapters = document.querySelectorAll('.chapter');

// Функция для обновления видимой главы
function updateChapter() {
  // Скрыть все главы
  chapters.forEach(chapter => chapter.style.display = 'none');
  
  // Показать текущую главу
  document.getElementById('chapter' + currentChapter).style.display = 'block';
  
  // Включить/выключить кнопки
  if (currentChapter === 1) {
    document.getElementById('prevBtn').disabled = true;
  } else {
    document.getElementById('prevBtn').disabled = false;
  }
  
  if (currentChapter === chapters.length) {
    document.getElementById('nextBtn').disabled = true;
  } else {
    document.getElementById('nextBtn').disabled = false;
  }
}

// Функции для навигации
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentChapter < chapters.length) {
    currentChapter++;
    updateChapter();
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentChapter > 1) {
    currentChapter--;
    updateChapter();
  }
});

// Инициализация
updateChapter();
