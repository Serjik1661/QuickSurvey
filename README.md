# **Опросник "QuickSurvey"**  
**Простой и удобный инструмент для создания опросов на чистом JavaScript**  

---

## **📌 Описание проекта**  
**QuickSurvey** – это веб-приложение для создания и прохождения опросов. Пользователь заполняет форму, отвечая на вопросы, а после отправки видит результаты в удобном формате.  

### **🔹 Основные функции:**  
✅ **Сбор данных** – имя, возраст, частота использования продукта, предпочтения, предложения.  
✅ **Валидация** – проверка заполнения обязательных полей.  
✅ **Динамический вывод** – результаты отображаются сразу после отправки.  
✅ **Адаптивный дизайн** – корректно отображается на ПК и мобильных устройствах.  
✅ **Сброс формы** – очистка полей после отправки.  

---

## **🛠 Технологии**  
- **HTML5** – структура формы и элементов интерфейса.  
- **CSS3** – стилизация, адаптивный дизайн.  
- **JavaScript (Vanilla JS)** – логика обработки формы, динамическое отображение результатов.  

---

## **📂 Структура проекта**  
```
quicksurvey/
├── index.html          # Основная HTML-страница с формой
├── styles.css         # Стили для оформления
├── script.js          # Логика обработки формы
└── README.md          # Описание проекта (можно добавить)
```

---

## **🚀 Как это работает?**  

### **1️⃣ Форма опроса**  
Пользователь видит форму с вопросами:  
- **Текстовое поле** – ввод имени.  
- **Выпадающий список** – выбор возрастной группы.  
- **Радиокнопки** – частота использования продукта.  
- **Чекбоксы** – что нравится в продукте.  
- **Текстовая область** – предложения по улучшению.  

### **2️⃣ Обработка данных**  
При нажатии **"Отправить"**:  
- Форма **не перезагружает страницу** (`e.preventDefault()`).  
- Данные собираются в объект `formData`.  
- Проверяются выбранные варианты.  

### **3️⃣ Вывод результатов**  
- Создаётся **динамический HTML** с ответами пользователя.  
- Результаты отображаются в блоке под формой.  
- Страница плавно прокручивается к результатам (`scrollIntoView`).  

### **4️⃣ Очистка формы**  
После отправки форма автоматически сбрасывается (`reset()`).  

---

## **🎨 Особенности дизайна**  
- **Чистый и минималистичный интерфейс**  
- **Адаптивная вёрстка** (корректно отображается на любых устройствах)  
- **Плавные анимации** (прокрутка к результатам)  

---

## **📌 Возможные улучшения**  
🔹 **Локализация** – поддержка нескольких языков.  
🔹 **Сохранение результатов** – в `localStorage` или отправка на сервер.  
🔹 **Дополнительные типы вопросов** – шкалы, множественный выбор.  
🔹 **Визуализация данных** – диаграммы для статистики.  

### **🎯 Итог**  
**QuickSurvey** – это удобный инструмент для быстрого создания опросов без использования сторонних библиотек.
