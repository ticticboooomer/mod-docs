# Entry - Per Tick

For inputs, `mm:per_tick` will consume the specified ingredient every tick that the recipe is processing for.

For outputs, `mm:per_tick` will output the specified ingredient every tick that the recipe is processing for.

### The Recipe Entry Id
```json
{
    "type": "mm:per_tick",
    ...
}
```

### Full Definition
```json
{
    "type": "mm:per_tick",
    "ingredient": {
        // port type ingredient
        ...
    }
}
```

### Common Example
```json
{
    "type": "mm:per_tick",
    "ingredient": {
        "type": "mm:energy",
        "amount": 1000
    }
}
```


