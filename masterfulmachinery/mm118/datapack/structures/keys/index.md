---
sidebar_position: 4
---

# Key

Each key has to be unique and must be one of these characters `a-z`, `A-Z`, `0-9`, `!@#$%^&*`, but not capital `C` as this is reserved for the controller

Note: a-z and A-Z are different characters so having "a" and "A" as 2 keys is perfectly valid

| :memo:        | You dont have to define the controller in the list of keys, since we put this information in the `controllerId` value at the top, but you still need `C` in the layout |
|---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|


### What are Structure Parts?

Structure Parts are different types of json objects which can be used in the key of a structure. To define what and where each block goes. You can have and / or gates in this as well.

### What Structure Parts currently exist?

* [Block](./block)
* [Port](./port)
* [Port Block](./port_block)
* [Tag](./tag)