# Clearing LocalStoage and Cookies after each Dusk test

Dusk already provides a method to clean cookies between tests, but there is no native way to clear the local storage. You can however execute code in the Javascript console through dusk which can be used to easily clear the local storage.

```php
public function tearDown()
{
    parent::tearDown();

    $this->browse(function (Browser $browser) {
        $browser->driver->manage()->deleteAllCookies();
        $browser->script("localStorage.clear()");
    });
}
```

The next test will run with all cookies and loca stoarage cleared.

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[ghost](https://github.com/laravel/dusk/issues/100#issuecomment-324449559)|
