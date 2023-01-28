---
sidebar_position: 4
---

# Process

This file is located `ModpackInstance\config\openloader\data\datapackName\data\NameSpace\mm\processes\solar_panel\ `

This file is called `50_energy.json`



```json
{
  "duration": 1,
  "structureId": "NameSpace:solar_panel",
  "name": {
    "text": "Solar Generator"
  },
  "inputs": [],
  "outputs": [
    {
      "type": "mm:simple",
      "ingredient": {
        "type": "mm:energy",
        "amount": 50
      }
    }
  ]
}
```