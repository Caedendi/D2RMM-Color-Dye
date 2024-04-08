# Bonesy's Color Dye System for D2RMM

A D2RMM implementation for the [Color Dye System](https://www.youtube.com/watch?v=LRQeFO0Y3Y4) created by [Bonesy](https://www.nexusmods.com/users/42415920) of [D2RModding](https://www.d2rmodding.com/), [ReMoDDeD](https://www.d2rmodding.com/remodded) and [Vanilla++](https://www.d2rmodding.com/d2rlaunch).


## Table of Contents

- [Screenshots](#screenshots)
- [Changelog](#changelog)
  - [2.0.0](#200)
  - [1.0.0](#100)
- [How to Install](#how-to-install)
- [Technicalities \& Limitations](#technicalities--limitations)
- [Known Issues](#known-issues)
- [Roadmap](#roadmap)
- [Recommended Mods](#recommended-mods)
- [Credits](#credits)
- [License/Permissions](#licensepermissions)


## Screenshots

To do. In the meantime, see [the Nexus Mods page](https://www.nexusmods.com/diablo2resurrected/mods/474).


## Changelog

### 2.0.0

This update introduces a breaking change that is incompatible with the previous version. Remove all your applied color dyes before updating because the game will either not load or will not be able to read your save files with these old dyes.

- BREAKING CHANGE: Color Dye stats now only use 2 bits of save data, as opposed to the previously unnecessarily high 16
- Changed the cube recipes to take 3 gems/potions instead of 1 to match D2RLaunch
  - Previous version's cube recipe quantities added as an optional setting
- Changed Color Dye stat priority from 997 to 999

### 1.0.0

- Initial D2RMM release, feature parity with [ColorDye](https://www.nexusmods.com/diablo2resurrected/mods/418)
  - Some lines in cubemain.txt are shifted, this mod's order makes more sense.
  - Bonesy's trademark values for ValShift, Save Bits and Save Add in itemstatcost.txt have been altered/removed on his suggestion.
- The added entries' IDs are generated dynamically, so it's compatible with any D2RMM mod that touches the same files.


## How to Install

- Download and install [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169), then run it.
- Download and extract this mod folder to /D2RMM/mods/.
- See D2RMM instructions on how to configure and enable.
- Play the game!


## Technicalities & Limitations

This mod adds new entries to the following files:

|           .txt File | Added | Base Game | New Total |      Limit      |
|--------------------:|:-----:|:---------:|:---------:|:---------------:|
|    itemstatcost.txt |   8   |    360    |    368    |       511       |
|          states.txt |  28   |    189    |    217    |       511       |
|        cubemain.txt |  224  |    154    |    378    | unknown (150k+) |
|      properties.txt |   8   |    276    |    288    |        ?        |
| item-modifiers.json |   7   |   27379   |   48006   |      65535      |

The current highest entry in item-modifiers.json has ID 27379. To prevent incompatibility with a future game update, this mod mirrors Bonesy's Vanilla++ (and Slim for that matter) by starting the new entries at ID 48000, if available. If not, it assumes the entries are properly sequentially sorted and takes the ID of the last entry and works up from there. The other files/entries should also scale with other mods.


## Known Issues

The game will crash if you disable this mod and then try to load a save file with dyed items in it. Be sure to remove all color dyes from items when you stop using it.


## Roadmap

- [x] Full feature parity with the original mods
- [x] Add option to use quantity=3 to match D2RLaunch


## Recommended Mods

Visit [this GitHub page](https://github.com/Caedendi/D2RMM-Mod-List) for the list of D2RMM mods that I use, you might like some of 'em! 

A list of the other mods I created/ported can also be found there, as well as directly on [my Nexus Mods page](https://www.nexusmods.com/diablo2resurrected/users/179695179?tab=user+files).


## Credits

The Color Dye System concept was created by [Bonesy](https://www.nexusmods.com/users/42415920) ([YouTube](https://www.youtube.com/@locbones1), [D2RModding](https://www.d2rmodding.com/)) and is featured in his [ReMoDDeD](https://www.d2rmodding.com/remodded) and [Vanilla++](https://www.d2rmodding.com/d2rlaunch) mods and his [YouTube tutorial](https://www.youtube.com/watch?v=LRQeFO0Y3Y4). The JavaScript code to recreate this and make it compatible with D2RMM was written by [me](https://www.nexusmods.com/users/179695179) with permission from Bonesy.

I initially learned of Bonesy's Color Dye System through the [ColorDye](https://www.nexusmods.com/diablo2resurrected/mods/418) mod by Slim/[roryskys](https://www.nexusmods.com/users/74559688) on Nexus Mods. He is unclear on his sources/credits other than that he mentions "it was created by Bonesy" in his [YouTube video](https://www.youtube.com/watch?v=okYJVotnwYw&), but looking at his mod files Bonesy and I concluded he basically 1:1 ripped them from Vanilla++ without permission, simplifying the cube recipes to only use Perfect Gems and omit the mod-specific items Storage Bag, Empty Bottle and [Color] Bottles.

For transparancy's sake: I ripped off Slim, who ripped off Bonesy, but at least I asked Bonesy for permission. Slim never responded.

Major thanks to:
- [Bonesy](https://www.d2rmodding.com/) for creating the [Color Dye System](https://www.youtube.com/watch?v=LRQeFO0Y3Y4) and his numerous other contributions to the D2R modding community
  - Be sure to check out his [ReMoDDeD](https://www.d2rmodding.com/remodded) and [Vanilla++](https://www.d2rmodding.com/d2rlaunch) mods!
- [olegbl](https://github.com/olegbl) for creating [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169)


## License/Permissions

This code is licensed under GPL. 

You are free to use and distribute all code in this mod, as long as you ask for permission (and permission is granted), it stays open source, free of charge and all due credit is given. 

If you are trying to profit off this mod in any way, then you're a dick and forbidden from using this code.
