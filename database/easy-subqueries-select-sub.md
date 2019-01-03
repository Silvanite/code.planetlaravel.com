# Subqueries made easy with `selectSub`

Subqueries allow us to select extra columns (attributes) right in our primary database query.

```php
$lastLogin = Login::select('created_at')
    ->whereColumn('user_id', 'users.id')
    ->latest()
    ->limit(1)
    ->getQuery();

$users = User::select('users.*')
    ->selectSub($lastLogin, 'last_login_at')
    ->get();
```

```php
@foreach ($users as $user)
    <tr>
        <td>{{ $user->name }}</td>
        <td>{{ $user->email }}</td>
        <td>
            @if ($user->last_login_at)
                {{ $user->last_login_at->format('M j, Y \a\t g:i a') }}
            @else
                Never
            @endif
        </td>
    </tr>
@endforeach
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Jonathan Reinink](https://reinink.ca/articles/dynamic-relationships-in-laravel-using-subqueries)|
