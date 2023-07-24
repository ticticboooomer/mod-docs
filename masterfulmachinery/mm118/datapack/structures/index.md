---
sidebar_position: 1
---

# Structures

structures are the json defined blocks and their placement relative to the controller.

## Define a simple Structure
```json
{
    "controllerId": "mm:my_controller",
    "name": {
        "text": "My Structure"
    },
    "layout": [
        // Each array inside of the layout is a new y level for your structure
        // The top array is the heighest y level of your structure
        [
            // You must define uppercase C only once, it tells the structure where the controller will be placed
            // Make sure you put the controller and the structure facing upwards in the file or in other words facing north
            "ACA",
            "BBB",
            "DDD"
        ],
        [
            "EEE",
            "EEE",
            "EEE"
        ]
    ]
    // next you find the key object which defines the structure parts for each letter in your layout
    "key": {
        // this is the structure part, it defines what the character from the layout actually stands for
        "A": {
            "type": "mm:block",
            "block": "minecraft:glass"
        },
        "B": {
            "type": "mm:block",
            "block": "minecraft:sand"
        },
        "D": {
            "type": "mm:tag",
            "tag": "minecraft:wool"
        },
        "E": {
            "type": "mm:block",
            "block": "minecraft:dirt"
        }
    }
}
```