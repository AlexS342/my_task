# my_task

### Создание проекта

1. На GitHub создаем репозиторий для проекта, копируем подсказку по инициализации Git
2. В созданой для проекта папке инициализируем Git:
   1. `echo "# my_task" >> README.md` 
   2. `git init`
   3. `git add README.md`
   4. `git commit -m "first commit"`
   5. `git branch -M main`
   6. `git remote add origin git@github.com:AlexS342/my_task.git`
   7. `git push -u origin main`

3. Создаем frontend-приложение на React:
   1. В папке проекта создам папку для frontend-приложения `my-task_react`
   2. В терминале в папке `my-task_react` вводим команду `npm create vite@latest .` и в диалоге выбираем `React`  и `JavaScript`
   3. Выполняем команду `npm install`
   4. Если нужно, то меняем версию Node.js на рекомендуемую. В моем случае `nvm use 18` и повторяем `npm install`
   5. Приложение создано!
   6. Добавляем свою иконку для вкладки в папку `public`
   7. Удаляем стандартную иконку из папки `public`
   8. Правим <meta>, <link rel="icon>, <title>
   9. В файле `App.jsx` добавляем fetch запрос к серверу с фиксированым адресом `http://127.0.0.1:8000/api/default`
   10. переписываем ретурн для вывода ответа с сервера
4. Создаем backend-приложение на Laravel:
   1. Проверяем установлены ли php, node, npm, nvm, composer командами `php -v`, `node -v`, `npm -v`, `nvm -v`, `composer -v`. Если что-то не установлено, но устанавливаем самостоятельно.
   2. В терминале в папке проекта `00_my-task` создаем проект Laravel: `composer create-project laravel/laravel my-task_laravel`
   3. В терминале переходим в папку `my-task_laravel`
   4. Выполняем команду `composer install`
   5. Создаем файл .env: `cp .env.example .env`
   6. Генерируем ключ: `php artisan key:generate`
   7. Приложение создано!
   8. Создаем контроллер DefaultController.php командой `php artisan make:controller DefaultController`
   9. В контроллере создаем метод checkingConnection, принимает request и возвращает response
   10. В файле `my-task_laravel/routes/api.php` пишем api `default` (полный адрес api: http://127.0.0.1:8000/api/default)
5. Запускаем frontend и backend приложения в разных терминалах и убеждаемся в том, что обмен данными пршел успешно