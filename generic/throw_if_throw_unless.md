# Get rid of unnecessary conditionals with `throw_if` and `throw_unless`

Make use of more expressive code using the "throw_if" and "throw_unless" helper functions in Laravel PHP

```php
// throw an exception if the condition is true
throw_if($condition = true, new SomeException);

// throw an exception unless the condition is true
throw_unless($condition = true, new SomeException);
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Marcel Pociot](https://mobile.twitter.com/marcelpociot/status/1075744056679038976)|
