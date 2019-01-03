---
snippet: |
    User::where([
        'confirmed' => true,
        'active' => true,
    ]);
---

# You can pass an array of constraints to the "where" method

Did you know that you can pass an array of constraints to the "where" method on Laravel's query builder?

```php
User::where([
    'confirmed' => true,
    'active' => true,
]);
```

You can even include operators ...

```php
User::where([
    ['confirmed_at', '!=', null],
    'active' => true,
]);
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Joseph Silber](https://mobile.twitter.com/joseph_silber/status/1017394114185388032)|
