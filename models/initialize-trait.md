# Hook into the __construct() method of a model from a trait

Since 5.7, Laravel will automatically look for and execute any `initialize{TraitName}` methods when a model instance is created, givin you full access to the object (e.g. `$this`).

Create a trait with the initialize function and perform whatever logic you need.

```php
trait HasMembership
{
    // Use the initialize{TraitName} convention
    public function initializeHasMembership
    {
        $this->casts = array_merge($this->casts, [
            'membership_started_at' => 'datetime',
        ]);
    }
}
```

Add the trait to your model.

```php
class User extends Eloquent
{
    use HasMembership;

    protected $casts = [
        'age' => 'int',
    ];
}
```

Use your new functionality.

```php
User::first()->membership_started_at; // Carbon Instance
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Tim MacDonald](https://twitter.com/timacdonald87/status/1076117855911866369)|