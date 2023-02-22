---
sidebar_position: 2
---

# Structure Id

This is the structure id you set in one of your structure.json files

Do note that the namespace for the structureId is actually the namespace of the folder you put the structures into.
so the `nameSpace` folder in this example `datapackName\data\nameSpace\mm\recipes\`

```json
"structureId": "nameSpace:drying_rack"
```

Do note if you have your structure files in a folder you will need to write the entire path to them, 
for example if your structure is in a folder called structure1 `datapackName\data\nameSpace\mm\structures\structure1\cheese_maker.json` then your structure id is
```json
"structureId": "nameSpace:structure1/cheese_maker"
```

