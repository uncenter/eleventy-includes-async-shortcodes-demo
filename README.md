### Normal loop

In the normal loop section, we are doing a simple loop from 0 to 10, and printing the number 42 and %% on each iteration.

```twig
{% for i in range(0, 10) %}
    42
    <p>%%</p>
{% endfor %}
```

![Normal loop](./loop.png)

This works as expected, and the output is correct.

### Loop with include

If we include the 42.njk file, which just contains '42', the output is also correct.

```twig
{% for i in range(0, 10) %}
    {% include '42.njk' %}
    <p>%%</p>
{% endfor %}
```

![Loop with include](./loop_includes.png)

### Loop with include and async shortcode

If we include the `boop.njk`, which contains `{% beep %}` (an _async_ shortcode that returns '42'), and then do the loop, the output is incorrect.

```twig
{% for i in range(0, 10) %}
    {% include 'boop.njk' %}
    <p>%%</p>
{% endfor %}
```

![Loop with include and async shortcode](./loop_includes_async.png)

The 42 is not outputted, and the %% is also not outputted.

### Loop with include and sync shortcode

However, if we include the `boopSync.njk`, which contains `{% beepSync %}` (a _sync_ shortcode that returns '42'), and then do the loop, the output is correct.

```twig
{% for i in range(0, 10) %}
    {% include 'boopSync.njk' %}
    <p>%%</p>
{% endfor %}
```

![Loop with include and sync shortcode](./loop_includes_sync.png)

We see the 42 and the %% on each iteration.
