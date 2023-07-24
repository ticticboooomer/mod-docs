---
sidebar_position: 3
---

# Layout

These are arrays of strings where each line represents a block layout like you where looking down on a slice of your machine.

The top of the array is `north`, bottom `south`, right is `east`, left is `west`

Each array is a different Y level in your structure, the top layer in the file is the very top layer of your structure

A capital `C` is specifically reserved for the controller, this is automatically defined by setting the `controllerId` at the top of the file

For a structure file to be valid it needs to have a capital `C` in the layout somewhere

The code below is of a 3x3x3 structure, where...
* 1 = cobblestone (Very top layer)
* 2 = stone (Central layer)
* 3 = oak_log (Very bottom layer)
* C = the controller

```json
"layout": [
  [
    "111",
    "111",
    "111"
  ],
  [
    "2C2",
    "222",
    "222"
  ],
  [
    "333",
    "333",
    "333"
  ]
]
```