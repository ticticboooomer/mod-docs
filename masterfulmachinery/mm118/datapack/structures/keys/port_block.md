# Structure Part - Port Block

The `mm:block` structure part is simply a key for a specific block in a structure.

### The Structure Part Id
```json
{
    "type": "mm:port_block",
    ...
}
```

### Full Definition
```json
{
    "type": "mm:port_block",
    // the id field is optional, it is used for the mm:port_designated recipe entry to designate specific ports in a structure for an ingredient 
    "id": "<unique id of port in structure>",
    "portId": "<id of the port you created in the config>"
}
```

### Full Example
```json
{
    "type": "mm:port_block",
    // the id field is optional, it is used for the mm:port_designated recipe entry to designate specific ports in a structure for an ingredient 
    "id": "my_funky_port",
    "portId": "mm:large_item_input"
}
```