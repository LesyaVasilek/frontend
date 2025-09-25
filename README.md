Frontend 1.0 (React + Vite)

Скрипты:

- dev: локальный запуск с прокси на бэкенд
- build: сборка продакшн
- preview: предпросмотр собранной версии

Запуск:

1) Установите зависимости:

   npm install

2) Запустите дев-сервер:

   npm run dev

Браузер: http://localhost:5173

Отправка данных:
- Форма отправляет POST на `/api/submit` (см. proxy в `vite.config.js`)
- Proxy перенаправляет на `http://localhost:5000/submit`

Ожидаемый бэкенд v1.0:
- POST /submit
- body: { "text": "..." }


