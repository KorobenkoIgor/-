document.addEventListener('DOMContentLoaded', function() {
  // Инициализация глав
  let currentChapter = 1;
  const chapters = document.querySelectorAll('.chapter');

  // Функция для обновления глав
  function updateChapter() {
    // Скрыть все главы
    chapters.forEach(chapter => {
      chapter.style.display = 'none';
    });

    // Показать текущую главу
    document.getElementById('chapter' + currentChapter).style.display = 'block';
  }

  // Функция для создания кнопок
  function createNavigationButtons() {
    const navigationDiv = document.createElement('div');
    navigationDiv.classList.add('navigation');
    
    // Кнопка "Предыдущая глава"
    const prevBtn = document.createElement('button');
    prevBtn.id = 'prevBtn';
    prevBtn.textContent = 'Предыдущая глава';
    prevBtn.addEventListener('click', function() {
      if (currentChapter > 1) {
        currentChapter--;
        updateChapter();
      }
    });

    // Кнопка "Следующая глава"
    const nextBtn = document.createElement('button');
    nextBtn.id = 'nextBtn';
    nextBtn.textContent = 'Следующая глава';
    nextBtn.addEventListener('click', function() {
      if (currentChapter < chapters.length) {
        currentChapter++;
        updateChapter();
      }
    });

    // Добавляем кнопки в блок
    navigationDiv.appendChild(prevBtn);
    navigationDiv.appendChild(nextBtn);

    // Добавляем блок с кнопками в контейнер
    document.querySelector('.book').appendChild(navigationDiv);
  }

  // Инициализация: создание кнопок и показ первой главы
  createNavigationButtons();
  updateChapter();
});
