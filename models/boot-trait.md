# Hook into model events from a trait

You can hook into a model's boot method from your trait by creating a `boot{TraitName}` method. This is somewhat hidden in the [official documentation](https://laravel.com/docs/5.0/eloquent#global-scopes).

Here's a basic example of how you could use this functionality.

```php
trait NotifyWhenCreated
{
    public static function bootNotifyWhenCreated()
    {
        static::created(function ($item) {
            Notification::send($recipients, new ItemCreated($item));
        });
    }
}
```

Add the trait to your model.

```php
class User extends Eloquent
{
    use NotifyWhenCreated;
}
```

Use your new functionality.

```php
User::create([...]); // Your notification will be sent
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Laravel Docs](https://laravel.com/docs/5.0/eloquent#global-scopes)|