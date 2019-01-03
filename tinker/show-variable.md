# In Tinker you can type `show $variable` to display the underlying code of a class

Start a new tinker session.

```sh
php artisan tinker
```

Select what class code you want to display.

```php
$user = App\User::first();

show $user;
```

See the class code output.

```php
 9| class User extends Authenticatable
10| {
11|     use Notifiable;
12|
13|     protected $fillable = [
14|         'name', 'email', 'password',
15|     ];
16|
17|     protected $hidden = [
18|         'password', 'remember_token',
19|     ];
20| }
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Tim MacDonald](https://twitter.com/timacdonald87/status/1060746690729205761)|
