# A lesser-known shortcut to setup mock instances

This mock for Cloudflare ...

```php
$cloudflare = Mockery::mock(Cloudflare::class);

$this->app->instance(Cloudflare::class, $cloudflare);
```

Can also be created like this ...

```php
$cloudflare = $this->mock(Cloudflare::class);
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Taylor Otwell](https://mobile.twitter.com/taylorotwell/status/1075867481548447744)|
