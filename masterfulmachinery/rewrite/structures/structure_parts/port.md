# Structure Parts - Port

The `mm:port` structure part defines a key for a port block as defined in the config jsons

### The Structure Part Id
```json
{
    "type": "mm:port",
    ...
}
```

### Full Definition
```json
{
    "type": "mm:port",
    "port": "<port type id>",
    "input": <true|false>
}
```

### Full Example
```json
{
    "type": "mm:port",
    "port": "mm:item",
    "input": false
}
```