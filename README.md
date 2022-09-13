## **Описание**
### **Веб-приложение «Чат». Проектная работа.**

https://github.com/s-gumerov/middle.messenger.praktikum.yandex/pull/3

* Реализован роутер. У всех страниц имеется собственный роут:
  * [/auth/signin](/auth/signin) — страница входа,
  * [/auth/signup](/auth/signup) — страница регистрации,
  * [/user](/user) — настройки профиля пользователя,
  * [/messenger](/messenger) — чат.
* Реализованы методы работы с `API`
* Реализованы методы для работы с `WebSocket` для работы с сообщениями в реальном времени
* Реализованы контроллеры для взаимодействия приложения с `API` 
* Реализовано хранилище состояния приложения `Store.ts`
`WebSocket` и хранилищем состояния приложения `Store`
* В приложении реализованы следующее возможности:
  * Регистрация
  * Вход
  * Обновление данных профиля пользователя
  * Изменение аватара пользователя
  * Создание и удаление чата
  * Изменение аватара чата
  * Поиск, добавление и удаление пользователей в чат
  * Отправка и получение сообщений
* Частично покрыто тестами (`Mocha`, `Chai`)


**Макеты в [figma](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1)** - https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1


**Демонстрация на 
[Netlify](https://sweet-biscuit-08a16e.netlify.app/chat)** - https://sweet-biscuit-08a16e.netlify.app/chat


### Установка

Установка зависимостей приложения:

```bash
npm i
```

### Сборка и запуск

Сборка приложения. Используемый сборщик [Parcel](https://parceljs.org/):

```bash
npm run build
```

Выполняется сборка приложения и его запуск на сервера Express, на 3000 порту. http://localhost:3000:

```bash
npm run start
```

Сборка приложения. Раздача статичеких файлов на сервере Express, на 3000 порту. http://localhost:3000:

```bash
npm run dev
```

Проверка на стилистические и типовые ошибки. Используются правила Airbnb.

```bash
npm run lint
```

Запуск тестов

```bash
npm run test
```