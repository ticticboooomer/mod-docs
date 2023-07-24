---
sidebar_position: 2
---

# Structure Id

This is the structure id you set in one of your structure.json files

Do note that the namespace for the structureId is actually the namespace of the folder you put the structures into.
so the `namespace` folder in this example `datapackName\data\namespace\mm\recipes\`

```json
"structureId": "namespace:drying_rack"
```

Do note if you have your structure files in a folder you will need to write the entire path to them, 
for example if your structure is in a folder called structure1 `datapackName\data\namespace\mm\structures\structure1\cheese_maker.json` then your structure id is
```json
"structureId": "namespace:structure1/cheese_maker"
```

