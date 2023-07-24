---
sidebar_position: 3
---

# Texture Override

When you use this on the controller it will apply this texture the controller and to all ports that are registered in the same file.

When used on a port it will apply this texture to that specific port.

When used on both the controller and port, it will apply this texture to the specific port FIRST, then it will apply to the controller and other ports, this will allow you to have 2 different textures.

The texture path can be found by opening the mods jar file you want to use the texture of, inside said mod you will see a folder named `assets`, inside that folder is the `modID`, then inside that is the `textures` folder, inside this is the `block` folder you need to start your texture path here. If there is subfolders inside the `block` folder you need to include these folder names in your texture path

| :memo:        | You do not need to include the .png extension in the texture path. |
|---------------|:-------------------------------------------------------------------|

Example
```json
"textureOverride": "modID:block/(subfolders if applicable)/blockID"
```