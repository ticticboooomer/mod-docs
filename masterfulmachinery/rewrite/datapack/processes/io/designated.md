# Entry - Port Designated

The `mm:port_designated` recipe entry, simple takes other recipe entries, but only checks and applies them to the designated port of the given id

### The Recipe Entry Id
```json
{
    "type": "mm:port_designated",
    ...
}
```

### Full Definition
```json
{
    "type": "mm:port_designated",
    "portId": "my_funky_port",
    "entry": {
        // another recipe entry goes here
        ...
    }
}
```

### Common Example

This example (as an input) will consume `10000FE` of energy from the energy port which has been given the id (when defined in the structure) of "my_funky_port"

```json
{
    "type": "mm:port_designated",
    "portId": "my_funky_port",
    "entry": {
        "type": "mm:simple",
        "ingredient": {
            "type": "mm:energy",
            "amount": 10000
        }
    }
}
```


