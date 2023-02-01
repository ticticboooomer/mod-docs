# Structure Part - And

The `mm:and` structure part is quite a cool part, this structure part will make it so the one block space MUST have both of the required properties inorder for it to be correct.
e.g. A daylight detector and a specific power level of that daylight detector.

### The Structure Part Id
```json
{
    "type": "mm:and",
    ...
}
```

### Full Definition
```json
"D": {
  "type": "mm:and",
  "parts": [
    {
      "type": "mm:block",
      "block": "<block id>"
    },
    {
      "type": "mm:blockstate",
      "blockstates": {
        "<state>": "<Value>"         <-- All values must be encased in double quotes even integers and booleans
      }
    }
  ]
}
```

### Full Example
```json
"D": {
  "type": "mm:and",
  "parts": [
    {
      "type": "mm:block",
      "block": "minecraft:daylight_detector"
    },
    {
      "type": "mm:blockstate",
      "blockstates": {
        "inverted": "true"
      }
    }
  ]
}
```