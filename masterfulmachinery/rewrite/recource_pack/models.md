---
sidebar_position: 2
---

# Models

This will probably be the most common way of replacing a controller or port texture

1. create your blocks and load the game at least once to generate the new models files
2. get your blocks model file from `modpackInstance/config/mm/dont_edit/assets/models/block/(json file here)`
3. place it into your resource pack `solar_panel_resouce_pack.zip/assets/mm/models/block/(json file here)`
4. open the `.json` file with any notepad editor
5. scroll down until you see 
```json
{
  "layers": {
    "solid": {
      "parent": "minecraft:block/block",
      "textures": {
        "base": "mm:block/base_block"
      }
    }
  }
}
```
> Remember this is a texture file we are referencing not a model file.

6. where it says `"base": "mm:block/base_block"` set `"mm:block/base_block"` to your blocks texture. I.e - `"minecraft:block/sponge"`

> you must have `block` and all the folders inside in of it in the block path name I.e - `"tconstruct:block/smeltery/seared/bricks"`

> press f3 + T to reload the resource pack
