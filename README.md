# Position «Strong Junior Full-Stack Developer» © SoloWay.

### Stack

- [Laravel](https://laravel.com/) `Back-end`
- [React](https://react.dev/) `Front-end`
  - [TypeScript](https://www.typescriptlang.org/)
  - [React Hook Form](https://react-hook-form.com/)
  - [Axios](https://axios-http.com/docs/intro)
  - [Chakra UI](https://v2.chakra-ui.com/)
- [Vite](https://vitejs.dev/) `Bundler`

### Quick start

```sh
$ composer install
$ yarn (or npm install)
```

#### Database configuration (.env):

```
DB_CONNECTION=mysql
DB_HOST=mysql-5.7
DB_PORT=3306
DB_DATABASE=teachers_schedule
DB_USERNAME=root
DB_PASSWORD=
```

Run:

```sh
$ php artisan mirgrate:fresh --seed
$ php artisan serve
```

## Технічне тестове завдання

### Фронт частина

Створити форму заповнення і збереження даних, тобто поля (день тижня, предмет)
Форма для об'єднання викладача з предметом, два поля предмет списком (які ми витягуємо з бази schedule(subject)), поки предметів немає форма має приховуватись, також список викладачів. Якщо викладач доданий до предмета, має підтягувати його Ім'я біля предмету. Дані виводити просто списком.
Список викладачів можна додати сідом тобто статично в базу перед роботою.

### Бек частина

Валідація форми на непорожні поля
Збереження форми в базу даних

### База даних

Дві таблиці teachers(id, first_name, last_name), schedule(day, subject)
Проміжна таблиця teacher_schedule (teacher_id, schedule_id) для об'єднання предмета з викладачем
