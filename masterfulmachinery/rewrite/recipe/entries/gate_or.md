# Entry - Or Gate

If you need to use multiple requirements and processes within a single entry, use the `mm:gate/or` to run an entry OR another entry;

This is a recursive recipe entry; meaning, you can effectively put recipe entries inside of recipe entries. Note this can get confusing (remember discord support is always an option. We are happy to help)

### The Recipe Entry Id
```json
{
    "type": "mm:gate/or",
    ...
}
```

### Full Definition
```json
{
    "type": "mm:gate/or",
    "conditions": [
        // list of recipe entry objects
        ...
    ] 
}
```

### Common Example
```json
{
    "type": "mm:gate/or",
    "conditions": [
        {
            "type": "mm:simple",
            "ingredient": {
                "type": "mm:energy",
                "amount": 1000 
            }
        },
        {
            "type": "mm:simple",
            "ingredient": {
                "type": "mm:item",
                "item": "minecraft:coal",
                "count": 1 
            }
        }
    ] 
}
```


