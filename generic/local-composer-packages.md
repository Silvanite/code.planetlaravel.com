# Developing Laravel Packages with Local Composer Dependencies

You can tell composer to look for packages on your local disk ...

```json
    // composer.json
    ...
    "repositories": {
        "package-name": {
            "type": "path",
            "url": "~/path/to/package"
        }
    }
    ...
```

Now you can simply require your local package ...

```sh
composer require my/package
```

Composer will create a link inside your vendor directory to your local folder so changes you make will immediately be available inside your application.

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Laravel News](https://laravel-news.com/developing-laravel-packages-with-local-composer-dependencies)|
