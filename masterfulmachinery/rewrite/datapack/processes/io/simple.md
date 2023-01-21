# Entry - Simple

For inputs, the `mm:simple` recipe entry defines a required ingredient with the option to specify a chance of the input being consumed.

For outputs, the `mm:simple` recipe entry defines an output ingredient also with the option to specify a chance of whether the ingredient will be output or not.

### The Recipe Entry Id
```json
{
    "type": "mm:simple",
    ...
}
```

### Full Definition
```json
{
    "type": "mm:simple",
    "chance": <chance between 0 (0% chance) to 1 (100% chance)>,
    "ingredient": {
        // port type ingredient
        ...
    }
}
```

### Common Example
```json
{
    "type": "mm:simple",
    "chance": 0.6,
    "ingredient": {
        "type": "mm:energy",
        "amount": 1000
    }
}
```

