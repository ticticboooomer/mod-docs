# Structure Part - Port

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
    // the id field is optional, it is used for the mm:port_designated recipe entry to designate specific ports in a structure for an ingredient 
    "id": "<unique id of port in structure>",
    "port": "<port type id>",
    "input": <true|false>
}
```

### Full Example
```json
{
    "type": "mm:port",
    // the id field is optional, it is used for the mm:port_designated recipe entry to designate specific ports in a structure for an ingredient 
    "id": "my_funky_port",
    "port": "mm:item",
    "input": false
}
```