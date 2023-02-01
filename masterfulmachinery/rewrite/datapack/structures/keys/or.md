# Structure Part - Or

The `mm:or` structure part is quite a cool part, this structure part will make it so the one block space can have EITHER the first entry or the second inorder for it to be correct.

e.g. A daylight detector and a sponge, inorder for it to detect complete one of these 2 blocks must be in the blockspace.

### The Structure Part Id
```json
{
    "type": "mm:or",
    ...
}
```

### Full Definition
```json
"D": {
  "type": "mm:or",
  "parts": [
    {
      "type": "mm:block",
      "block": "<block id>"
    },
    {
      "type": "mm:block",
      "block": "<block id>"
    }
  ]
}
```

### Full Example
```json
"D": {
  "type": "mm:or",
  "parts": [
    {
      "type": "mm:block",
      "block": "minecraft:daylight_detector"
    },
    {
      "type": "mm:block",
      "block": "minecraft:sponge"
    }
  ]
}
```