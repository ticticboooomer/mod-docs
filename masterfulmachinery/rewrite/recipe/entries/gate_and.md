# Entry - And Gate

If you need to use multiple requirements and processes within a single entry, use the `mm:gate/and` Entry Type.

This can be used inside of an `mm:gate/or` to effectively require "(a group on inputs) OR (an alternate group of inputs)"

This is a recursive recipe entry; meaning, you can effectively put recipe entries inside of recipe entries. Note this can get confusing (remember discord support is always an option. We are happy to help)

### The Recipe Entry Id
```json
{
    "type": "mm:gate/and",
    ...
}
```

### Full Definition
```json
{
    "type": "mm:gate/and",
    "conditions": [
        // list of recipe entry objects
        ...
    ] 
}
```

### Common Example
```json
{
    "type": "mm:gate/and",
    "conditions": [
        {
            "type": "mm:simple",
            "ingredient": {
                "type": "mm:energy",
                "amount": 1000 
            }
        },
        {
            "type": "mm:tick_modifier",
            "newDuration": 10
        }
    ] 
}
```


