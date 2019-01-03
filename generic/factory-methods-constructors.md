# Consider static factory methods instead of constructors

Unlike constructors, static factory methods can have names making the code easier to read - the DateTime class in PHP is a good example.

This is much more expressive ...

```php
$format = 'Y-m-d H:i:s';

$date = DateTime::createFromFormat($format, '2018-07-28 13:37:00');
```

than this ...

```php
$format = 'Y-m-d H:i:s';

$date = new DateTime($format, '2018-07-28 13:37:00');
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Nuno Maduro](https://mobile.twitter.com/enunomaduro/status/1077879686695448576)|
