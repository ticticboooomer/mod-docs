---
sidebar_position: 8
---

# Step By Step


## Minecraft 1.18+
1. Add Masterful Machinery to your modpack
2. Come up with a real use case for the multiBlock like do you want a grinder, a smelter, a power gen machine ect
3. Load your game up once to generate the required MM folders

### Controller
4. Goto your `config` folder inside your modpacks instance
5. Goto the `MM` folder, then to `controllers` folder
6. Inside the controllers folder create a new text file and call it the name of your machine you want to create then add .json to end,
   (make sure the file isn't `blah_name.json.txt`, or `blah_name.txt.json` these will not work)

   (make sure its lower case and if you must have a space to separate your words use a underscore instead `_` like so `drying_rack.json`)
7. Inside the controller file, we add
```json
      {
        "type": "mm:fixed",
        "id": "drying_rack",
        "name": {
          "text": "Drying Rack"
        }
      }
```
Where `drying_rack` is the name of your .json file but minus the .json part of the file name.

And `"text": "Drying Rack"` is the friendly name (What people will actually see) this can be anything as long as the whole thing is enclosed in quote marks.

Now that the controller file is done if you were to load up your game you would see the controller ingame WOOOT, but alas this is useless without the rest of the files

Next we must create the ports that we want to use, so if it's a solar panel for example we are trying to create then you would only need an RF energy output port since we are relying on the power of the sun as an input for our recipe

### Ports
8. Goto `config/mm/ports` folder and create a new json file with the name styled like so `controller_name_port_type_input/output.json` e.g. `drying_rack_energy_input.json`, `drying_rack_item_output.json`
9. Inside that new json file we have to add some properties that define the port, depending on the port being used we have different properties check out [This Page](./config/ports/) for information about what stuff does
10. Inside the port file, we add
```json
{
      "id": "solar_panel_energy_input",
         "name": {
         "text": "Battery Bank"
         },
         "port": "mm:energy",
         "input": true,
         "config": {
         "capacity": 20000000
         }
      }
```
where - 

`id` is the name of the json file you just created

`name` is the friendly name

`port` is the type of port you want to use

`input` defines if the port is a input or output port

`config` is the ports properties

Now if we were to load up the game we would see our controller block and our port block/blocks depending on how many youve added

This is where it gets more complicated, so if you have been struggling this is only going to get harder sorry but ill try and explain everything to make it easier to understand

### Structure
11. First of all we need a valid datapack check out [This page](./datapack/) for help with this.
12. now we need to create some folders to sort out what we are doing, first create the structures and recipes folders, they belong here

`datapackName\data\nameSpace\mm\structures\(optional for further sorting e.g. sort by controller)\structure.json`

`datapackName\data\nameSpace\mm\recipes\(optional for further sorting e.g. sort by structure)\recipe.json`

Where `datpackName` is anything you want this is just a name that is unique to your datapack

And `nameSpace` is anything you want, this is also a unique name so make sure to not use another mod, but you can if needed, I generally like to have a folder that is an abbreviation of the modpacks name e.g. Modpack Name `All the mods 6` so your namespace would be `atm6`

13. Right once all the folders are set up, load your game then load into a world
14. Start making your structure, this will be what you want your machine to look like, so a giant furnace for example
15. Once you have your structure created add the controller and port blocks that you created earlier added to your structure and made sure they are where you want them
16. Next give yourself the `Structure Wand` item, with this item we can right-click 2 blocks to set the first and second position of the structure

This will quickly select and save your structure to a file so we can fill in the blanks to quickly create Masterful Machinery Structures

17. Now we need to navigate to the `mm_generated` folder in your instance root, you will notice a json file with a obscure name, find your most recent one or the one that is correct
18. Now move this file into your datapack into the `datapackName\data\nameSpace\mm\structures\` folder
19. Rename this file so its easily identifiable later on like `solar_panel_structure.json` or similar
20. Open this file, Now you will see some lines are missing `controllerID` and `name`, fill these in with the required values

where `controllerId` is the id of the controller you set, inside the controller file inside the config section. This needs to be in the format of `"mm:controllerID"` so the full line reads 
```json
"controllerId": "mm:solar_panel",
```

and `name` is the friendly name of the Structure
```json
"name": {
    "text": "Drying Rack"
  },
```

### Process/Recipe

WIP Still to write :/

If all done correctly we should have our controller, ports a structure and now a recipe YAY.
We can verify these files by loading the game up and searching JEI `@MM` this will show us all the blocks/items Masterful Machinery adds, if you see your blocks here then we know that the controller and ports files are working.
If you look at the uses of the controller press `U` by default while hovering over the controller you will see your recipes.
As for the structure there is no way of checking besides right-clicking the structure controller of a fully setup structure