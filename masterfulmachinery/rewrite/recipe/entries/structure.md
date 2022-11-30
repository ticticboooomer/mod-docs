# Entry - Structure Part

The `mm:structure_part` recipe entry will only work as an input to a recipe.

The purpose of the `mm:structure_part` recipe entry is to require an extra block not defined in the structure at a position relative to the controller

the relative postion: `relativePos` assumes the structure is facing north and will rotate the `relativePos` around per other rotations. When defining `relativePos` think as though your structure is facing north and it should work.

### The Recipe Entry Id
```json
{
    "type": "mm:structure_part",
    ...
}
```

### Full Definition
```json
{
    "type": "mm:structure_part",
    "relativePos": {
        "x": <controller relative x position>,
        "y": <controller relative y position>,
        "z": <controller relative z position>
    },
    "structurePart": {
        // a structure part
        ...
    }
}
```

### Common Example
```json
{
    "type": "mm:structure_part",
    "relativePos": {
        "x": 0,
        "y": 1,
        "z": 0
    },
    "structurePart": {
        "type": "mm:block",
        "block": "minecraft:glass"
    }
}
```


