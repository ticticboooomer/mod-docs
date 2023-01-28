---
sidebar_position: 3
---

# Structure

This file is located `ModpackInstance\config\openloader\data\datapackName\data\NameSpace\mm\structures\solar_panel\ `

This file is called `solar_panel.json`



```json
{
  "controllerId": "mm:solar_panel",
  "name": {
    "text": "Solar Panel Blockstate Edition"
  },
  "layout": [
    [
      "DDDDD",
      "DDDDD",
      "  D  ",
      "DDDDD",
      "DDDDD"
    ],
    [
      "     ",
      "     ",
      "  B  ",
      "     ",
      "     "
    ],
    [
      "     ",
      "     ",
      "  B  ",
      "     ",
      "     "
    ],
    [
      "     ",
      "     ",
      "  B  ",
      "     ",
      "     "
    ],
    [
      "     ",
      "     ",
      "  C  ",
      "     ",
      "     "
    ],
    [
      "     ",
      "     ",
      "  A  ",
      "     ",
      "     "
    ]
  ],
  "key": {
    "A": {
      "type": "mm:port",
      "port": "mm:energy",
      "id": "solar_panel_output",
      "input": false
    },
    "B": {
      "type": "mm:tag",
      "tag": "minecraft:walls"
    },
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
    },
    "E": {
      "type": "mm:and",
      "parts": [
        {
          "type": "mm:block",
          "block": "minecraft:daylight_detector"
        },
        {
          "type": "mm:or",
          "parts": [
            {
              "type": "mm:blockstate",
              "blockstates": {
                "inverted": "false",
                "power": "14"
              }
            },
            {
              "type": "mm:blockstate",
              "blockstates": {
                "inverted": "false",
                "power": "13"
              }
            },
            {
              "type": "mm:blockstate",
              "blockstates": {
                "inverted": "false",
                "power": "12"
              }
            },
            {
              "type": "mm:blockstate",
              "blockstates": {
                "inverted": "false",
                "power": "11"
              }
            },
            {
              "type": "mm:blockstate",
              "blockstates": {
                "inverted": "false",
                "power": "10"
              }
            },
            {
              "type": "mm:blockstate",
              "blockstates": {
                "inverted": "false",
                "power": "9"
              }
            },
            {
              "type": "mm:blockstate",
              "blockstates": {
                "inverted": "false",
                "power": "8"
              }
            },
            {
              "type": "mm:blockstate",
              "blockstates": {
                "inverted": "false",
                "power": "7"
              }
            },
            {
              "type": "mm:blockstate",
              "blockstates": {
                "inverted": "false",
                "power": "6"
              }
            },
            {
              "type": "mm:blockstate",
              "blockstates": {
                "inverted": "false",
                "power": "5"
              }
            }
          ]
        }
      ]
    }
  }
}
```