# Using Ajax for user authentication

If you are building an Ajax based login form you can use the `authenticated` method to send an ajax response instead of the default Laravel redirect.

```php
// LoginController.php

...
    /**
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function authenticated(Request $request, $user)
    {
        // Send required response here
    }
...
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Medium](https://codeburst.io/using-ajax-user-login-in-laravel-5-3-5-4-5-5-5-6-d4e30b47985f)|
