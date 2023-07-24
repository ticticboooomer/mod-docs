---
sidebar_position: 3
---

# Kubejs

below are some examples of hows to use the kubejs integration. more details will come soon.


`startup_scripts`

```js
// Add Controllers
onEvent("mm.controllers", event => {
    event.create("test").name("My Controller").build()
})

// Add Port Blocks
onEvent("mm.ports", event => {
    event.create("test_input").name("My Port").input(true).port("mm:item").config({
        slotRows: 3,
        slotCols: 3
    }).build();
    event.create("test_output").name("My Port").input(false).port("mm:item").config({
        slotRows: 2,
        slotCols: 2
    }).build();
})
```

`server_scripts`

```js

// Add Structures
onEvent("mm.structures", event => {
    event.build("test:forge_hammer", {
        name: {
            text: "Primitive Forge Hammer"
        },
        controllerId: "mm:test",
        layout: [
            [
                "ACB"
            ]
        ],
        key: {
            A: {
                type: "mm:port",
                port: "mm:item",
                input: true
            },
            B: {
                type: "mm:port",
                port: "mm:item",
                input: false
            },
            E: {
                type: "mm:tag",
                tag: "forge:stone"
            }
        }
    });
})

// Add Processing Recipes 
onEvent("mm.recipes", event => {
    event.build("test:hammer_tings", {
        duration: 20,
        structureId: "test:forge_hammer",
        name: {
            text: "Hammer Time"
        },
        inputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    count: 2,
                    item: "minecraft:stick"
                }
            }
        ],
        outputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "minecraft:dirt",
                    count: 1
                }
            }
        ]
    })
})
```