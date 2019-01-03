# Using the responsible interface to build dedicated view objects

Dedicated view objects are a great use case for Laravel 5.5's new `Responsable` interface.

Let's take this pseudo controller which actually returns a rendered view with specific parameters.

```php
class ProductSalesController
{
    public function show(Product $product)
    {
        return new SalesReport($product);
    }
}
```

The implementation is a simple class which implements the Responsible interface.

```php
class SalesReport implements Responsible
{
    ...

    public function totalRevenue()
    {
        return $this->product->sales->sum('amount');
    }

    public function toResponse()
    {
        return view('product-sales.show')->with('total_revenue', $this->totalRevenue());
    }
}
```

|Added by|Found via|
|--------|--------|
|[Marco Mark](https://twitter.com/m2de_io)|[Adam Wathan](https://mobile.twitter.com/adamwathan/status/897836363885797376)|
