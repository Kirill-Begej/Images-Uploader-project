___
# Веб-приложение "IU - Images Uploader"

## Содержание
- [Описание проекта](#описание-проекта)
- [Время выполнения проекта](#время-выполнения-проекта)
- [Статус проекта](#статус-проекта)
- [Ссылка на деплой приложения](#ссылка-на-деплой-приложения)
- [Ссылки на материалы задания](#ссылки-на-материалы-задания)
- [Стек используемых технологий](#стек-используемых-технологий)
- [Установка проекта](#установка-проекта)
- [Запуск проекта](#запуск-проекта)
- [Проверка линтинга](#проверка-линтинга)
___
## Описание проекта
Репозиторий веб-приложения "IU - Images Uploader". Данный ленгинг реализовывался в рамках задания №2 стажировки компании DIGITAL SECTOR. Приложение представляет собой страницу с возможностью добавления изображений формата jpg, jpeg, png, валидации изображений, DnD изображений для сортировки и их добавления. Приложение написано на чистом JavaScript по ООП методологии. В приложении реализована задача: часть DOM рендерится с помощью JS, присутствует кастомный input type="file" с аттрибутом multiple, валидация изображений, отображение лоадеров и сообщений, DnD изображений для сортировки и их добавления. Для сборки приложения используется Webpack.
___

## Время выполнения проекта
Проект начат: 29.10.2024.\
Проект закончен: 04.11.2024.
___

## Статус проекта
Проект выполнен.
___

## Ссылка на деплой приложения
[iu-project](https://iu-project.vercel.app/)
___

## Ссылки на материалы задания
- [Описание задания](https://github.com/digitalSector47/traineeship-tasks/blob/master/task-2/description.md)
___

## Стек используемых технологий
- [HTML5](https://dev.w3.org/html5/spec-LC/)
- [CSS3](https://www.w3.org/Style/CSS/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [БЭМ](https://ru.bem.info/methodology/)
- [Webpack](https://webpack.js.org/)
___

## Установка проекта
Клонируйте проект при помощи HTTPS:
```sh
$ git clone https://github.com/Kirill-Begej/todo-list-project.git
```

Клонируйте проект при помощи SSH:
```sh
$ git clone git@github.com:Kirill-Begej/todo-list-project.git
```

Для установки зависимостей, выполните команду:
```sh
$ npm i
```
___

## Запуск проекта
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm run start
```

Чтобы выполнить development сборку, выполните команду: 
```sh
npm run build:dev
```

Чтобы выполнить production сборку, выполните команду: 
```sh
npm run build:prod
```
___

## Проверка линтинга
Для проверки JavaScript-файлов используется ESLint с конфигурацией airbnb-base.

Чтобы проверить js-файлы, выполните команду:
```sh
npm run lint:js
```

Чтобы проверить js-файлы и исправить их, выполните команду:
```sh
npm run lint:js:fix
```
