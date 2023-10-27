---
sidebar_position: 1
---

# Input
This page defines what type of ingredient you can use as an input for your recipes.

## Base Mod
These types are already implemented into Masterful Machinery no extra addons are required.


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
### `mm:dimension`
This type will allow you to limit what dimension your recipe can process in. You can only use this as a input requirement.

#### Example
```json
{
  "type": "mm:dimension",
  "dimension": "modId:dimId"
}
```

#### Full Example
```json
{
   "type": "mm:dimension",
   "dimension": "minecraft:the_end"
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

### `mm:mekanism_laser`
This can onl be used as a `input`, `output` will not work.

This type will accept Mekanism Lasers energy beams as an input for your machine.

#### Example
```json
{
  "type": "mm:mekanism_laser",
  "energy": doubleNumber
}
```

#### Full Example
```json
{
  "type": "mm:simple",
  "ingredient": {
    "type": "mm:mekansim_laser",
    "energy": 99123456789
  }
}
```

--------------------------------

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
    "gas": "mekanism:hydrogen",
    "amount": 1000
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
    "amount": 3333
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
    "amount": 500
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
    "pigment": "mekanism:pink",
    "amount": 500
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
    "type": "mm:mekanism_slurry",
    "slurry": "mekanism:dirty_copper",
    "amount": 666
  }
}
```

--------------------------------
