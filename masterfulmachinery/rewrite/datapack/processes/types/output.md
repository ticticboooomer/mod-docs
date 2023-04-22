---
sidebar_position: 2
---

# Output
This page defines what type of ingredient you can use as an output for your recipes.

## Base Mod
These types are already implemented into Masterful Machinery no extra addons are required.

### `mm:item`
This type will allow you to use items as part of the recipe, you CANNOT use tags it must be a single item output, though you can have multiple item output entries.

#### Example
```json
{
  "type": "mm:item",
  "item": "modId:blockId",
  "count": 1
}
```

#### Full Example
```json
{
  "type": "mm:simple",
  "ingredient": {
    "type": "mm:item",
    "item": "minecraft:orange_concrete",
    "count": 1
  }
}
```

--------------------------------
### `mm:energy`
This type will allow you to use RF Energy as part of the recipe

#### Example
```json
{
  "type": "mm:energy",
  "amount": intNumber
}
```

#### Full Example
```json
{
  "type": "mm:simple",
  "ingredient": {
    "type": "mm:energy",
    "amount": 42069
  }
}
```

--------------------------------
### `mm:fluid`
This type will allow you to use liquids in your recipe.

#### Example
```json
{
  "type": "mm:fluid",
  "fluid": "modId:fluidId",
  "amount": intNumber
}
```

#### Full Example
```json
{
  "type": "mm:simple",
  "ingredient": {
    "type": "mm:fluid",
    "fluid": "minecraft:lava",
    "amount": 100
  }
}
```

--------------------------------
## Create mod
In order to use these ingredient types you must first have these dependencies
1. [Create mod](https://www.curseforge.com/minecraft/mc-mods/create) and its dependencies installed in your modpack
2. Created a `create_rotation` capable port inside your `config/ports` folder

### `mm:create_rotation`
This type will allow you to use creates rotational force in order for your machine to operate.

#### Example
```json
{
  "type": "mm:create_rotation",
  "speed": floatNumber
}
```

#### Full Example
```json
{
  "type": "mm:simple",
  "ingredient": {
    "type": "mm:create_rotation",
    "speed": 256
  }
}
```

--------------------------------
## Mekanism Mod
In order to use these ingredient types you must first have these dependencies
1. [Mekanism mod](https://www.curseforge.com/minecraft/mc-mods/mekanism) and its dependencies installed in your modpack
2. Created a `mekanism_X` capable port inside your `config/ports` folder

> Do note you cannot use Mekanism Laser as an output.

### `mm:mekanism_gas`
This type will allow mekanism gasses to be used as an input for your machine.

#### Example
```json
{
  "type": "mm:mekanism_gas",
  "gas": "modId:gasId",
  "amount": intNumber
}
```

#### Full Example
```json
{
  "type": "mm:simple",
  "ingredient": {
    "type": "mm:mekanism_gas",
    "gas": "mekanism:hydrogen"
  }
}
```

--------------------------------

### `mm:mekanism_heat`
This type will allow mekanism heat to be used as an input for your machine.

#### Example
```json
{
  "type": "mm:mekanism_heat",
  "amount": intNumber
}
```

#### Full Example
```json
{
  "type": "mm:simple",
  "ingredient": {
    "type": "mm:mekanism_heat",
    "amount": 1000
  }
}
```

--------------------------------

### `mm:mekanism_infuse`
This type will allow mekanism infuse types to be used as an input for your machine.

#### Example
```json
{
  "type": "mm:mekanism_infuse",
  "infuseType": "modId:infuseId",
  "amount": intNumber
}
```

#### Full Example
```json
{
  "type": "mm:simple",
  "ingredient": {
    "type": "mm:mekanism_infuse",
    "infuseType": "mekanism:redstone",
    "amount": 1000
  }
}
```

--------------------------------

### `mm:mekanism_pigment`
This type will allow mekanism pigments to be used as an input for your machine.

#### Example
```json
{
  "type": "mm:mekanism_pigment",
  "pigment": "modId:pigmentId",
  "amount": intNumber
}
```

#### Full Example
```json
{
  "type": "mm:simple",
  "ingredient": {
    "type": "mm:mekanism_pigment",
    "pigment": "mekanism:orange",
    "amount": 125
  }
}
```

--------------------------------

### `mm:mekanism_slurry`
This type will allow mekanism slurries to be used as an input for your machine.

#### Example
```json
{
  "type": "mm:mekanism_slurry",
  "slurry": "modId:slurryId",
  "amount": intNumber
}
```

#### Full Example
```json
{
  "type": "mm:simple",
  "ingredient": {
    "type": "mm:mekanism_gas",
    "slurry": "mekanism:hydrogen",
    "amount": 333
  }
}
```

--------------------------------
