# Did you know about the `array_wrap` function?

Nice little wrapper for a snippet we've all written at least once in our lives

```php
$posts = is_array($posts) ? $posts : [$posts];

// is the same as

$posts = array_wrap($posts);
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Raul](https://twitter.com/rcubitto/status/877877903995936769)|
