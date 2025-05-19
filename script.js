document.getElementById('form').addEventListener('submit', function(e) {
    //Сброс дефолтных параметров отправки
    e.preventDefault();

    //Сбор данных формы

    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        frequency: document.querySelector('input[name="frequency"]:checked')?.value,
        likes: Array.from(document.querySelectorAll('input[name="likes"]:checked')).map(el => el.value),
        suggestions: document.getElementById('suggestions').value
    };

    //Отображение результатов
    displayResults(formData);
});

function displayResults(data) {
    const resultContainer = document.getElementById('results');
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = '';

    // Преобразование значений для читаемого отображения
    const ageLabels = {
        'under18': 'Меньше 18 лет',
        '18-25': '18-25 лет',
        '26-35': '26-35 лет',
        'over35': 'Больше 35 лет'
    };

    const frequencyLabels = {
        'daily': 'Ежедневно',
        'weekly': 'Еженедельно',
        'monthly': 'Ежемесячно',
        'rarely': 'Редко'
    };

    const likesLabels = {
        'quality': 'Качество',
        'price': 'Цена',
        'design': 'Дизайн',
        'functionality': 'Функциональность'
    };

    // Создание HTML для результатов
    const resultTitle = document.createElement('h2');
    resultTitle.textContent = `Спасибо за участие в опросе, ${data.name}`;

    const resultAge = document.createElement('p');
    resultAge.textContent = `Возраст: ${ageLabels[data.age] || 'не указано'}`;

    const resultFrequency = document.createElement('p');
    resultFrequency.textContent = `Частота использования: ${frequencyLabels[data.frequency] || 'Не указано'}`;
    resultContainer.appendChild(resultTitle)
    resultContainer.appendChild(resultAge)
    resultContainer.appendChild(resultFrequency)

    if(data.likes.length > 0){
        const resultLikes = document.createElement('p');
        resultLikes.textContent = `Что вам нравится: ${data.likes.map(like => likesLabels[like]).join(', ')}`;
        resultContainer.appendChild(resultLikes)
    }

    if(data.suggestions) {
        const resultSuggestions = document.createElement('p');
        resultSuggestions.textContent = `Ваши предложения: ${data.suggestions}`;
        resultContainer.appendChild(resultSuggestions)
    }

    //Прокрутка к результатам
    resultContainer.scrollIntoView( {behavior: 'smooth'});

    // Очистка формы (опционально)
    document.getElementById('form').reset();
}
