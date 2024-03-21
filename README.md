# Bonesy's Color Dye System for D2RMM

A D2RMM implementation for the [Color Dye System](https://www.youtube.com/watch?v=LRQeFO0Y3Y4) created by [Bonesy](https://www.nexusmods.com/users/42415920) of [D2RModding](https://www.d2rmodding.com/), [ReMoDDeD](https://www.d2rmodding.com/remodded) and [Vanilla++](https://www.d2rmodding.com/d2rlaunch).


## Table of Contents

- [Screenshots](#screenshots)
- [Changelog](#changelog)
  - [1.0.0](#100)
- [How to Install](#how-to-install)
- [Technicalities \& Limitations](#technicalities--limitations)
- [Known Issues](#known-issues)
- [Roadmap](#roadmap)
- [Recommended Mods](#recommended-mods)
- [License/Permissions](#licensepermissions)
- [Credits](#credits)
- [My Mods + Source](#my-mods--source)


## Screenshots

To do. In the meantime, see [ColorDye](https://www.nexusmods.com/diablo2resurrected/mods/418).


## Changelog

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

The current highest entry in item-modifiers.json has ID 27379. To prevent incompatibility with a future game update, this mod mirrors Bonesy's Vanilla++ (and Slim for that matter) by starting the new entries at ID 48000, if available. If not, it assumes the entries are properly sequentially sorted and takes the ID of the last entry and works up from there. All other files/entries also scale with other mods.


## Known Issues

The game will crash if you disable this mod and then try to load a save file with dyed items in it. Be sure to remove all color dyes from items when you stop using it.

## Roadmap

- [x] Full feature parity with the original mods
- [x] Add option to use quantity=3 to match D2RLaunch


## Recommended Mods

In addition to this, I recommend you also take a look at the other D2RMM mods I use (in order):

| Mod                                                                                                |                                    Creator                                    | Notes                                                                                                                                  |
|----------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------:|----------------------------------------------------------------------------------------------------------------------------------------|
| [Diablood (D2RMM)](https://www.nexusmods.com/diablo2resurrected/mods/305)                          |   [anwjrzlffj](https://www.nexusmods.com/diablo2resurrected/users/3346450)    | More blood! More gore!                                                                                                                 |
| [Enhanced effects and sounds (D2RMM)](https://www.nexusmods.com/diablo2resurrected/mods/423)       |   [anwjrzlffj](https://www.nexusmods.com/diablo2resurrected/users/3346450)    | Mostly visual/animation changes.                                                                                                       |
| [Disable Battle.net](https://github.com/olegbl/d2rmm.mods)                                         |                      [olegbl](https://github.com/olegbl)                      | So you don't accidentally get yourself banned.                                                                                         |
| [Skip Videos for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/179)                     | [Caedendi](https://www.nexusmods.com/diablo2resurrected/users/179695179) (me) | Disable launch intro videos and cinematic cutscenes when transitioning between acts.                                                   |
| [Improved Potion Visibility for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/384)      |   [MetalTxus](https://www.nexusmods.com/diablo2resurrected/users/18894694)    | Changes healing/mana potion sprites so it's easier to distinguish different potion levels.                                             |
| [Move Cain and Teleports for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/310)         |  [night0wl117](https://www.nexusmods.com/diablo2resurrected/users/33697975)   | Move town starting points, TP locations and Cain's position in Act 5.                                                                  |
| [Town Cast for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/183)                       |                      [olegbl](https://github.com/olegbl)                      | Teleport and buff in town. _(BREAKING: allows teleporting past Jerhyn during the Act 2 questline)_                                     |
| [Pseudo Loot Filter (D2RMM)](https://www.nexusmods.com/diablo2resurrected/mods/467)                |    [icalexci](https://www.nexusmods.com/diablo2resurrected/users/29547100)    | Loot filter for preventing unwanted items from dropping. Sets drop chance to NoDrop without influencing the other items' drop chances. |
| [Caedendi's Extended Loot Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/361) | [Caedendi](https://www.nexusmods.com/diablo2resurrected/users/179695179) (me) | Loot filter for name shortening/highlighting, light pillars, drop sounds, big tooltips & more.                                         |
| [Bonesy's Color Dye System for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/474)       | [Caedendi](https://www.nexusmods.com/diablo2resurrected/users/179695179) (me) | Dye your equipment to custom colors.                                                                                                   |
| [UI Fixes for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/387)                        |   [MetalTxus](https://www.nexusmods.com/diablo2resurrected/users/18894694)    | Fixes the placement of a few item grids.                                                                                               |
| [Settings Font Fix for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/200)               |                      [olegbl](https://github.com/olegbl)                      | In case any mod touches __profilehd_ and screws up the font size in the settings menu.                                                 |


## License/Permissions

This code is licensed under GPL. 

You are free to use and distribute all code in this mod, as long as you ask for permission (and permission is granted), it stays open source, free of charge and all due credit is given. 

If you are trying to profit off this mod in any way, then you're a dick and forbidden from using this code.


## Credits

The Color Dye System concept was created by [Bonesy](https://www.nexusmods.com/users/42415920) ([YouTube](https://www.youtube.com/@locbones1), [D2RModding](https://www.d2rmodding.com/)) and is featured in his [ReMoDDeD](https://www.d2rmodding.com/remodded) and [Vanilla++](https://www.d2rmodding.com/d2rlaunch) mods and his [YouTube tutorial](https://www.youtube.com/watch?v=LRQeFO0Y3Y4). The JavaScript code to recreate this and make it compatible with D2RMM was written by [me](https://www.nexusmods.com/users/179695179) with permission from Bonesy.

I initially learned of Bonesy's Color Dye System through the [ColorDye](https://www.nexusmods.com/diablo2resurrected/mods/418) mod by Slim/[roryskys](https://www.nexusmods.com/users/74559688) on Nexus Mods. He is unclear on his sources/credits other than that he mentions "it was created by Bonesy" in his [YouTube video](https://www.youtube.com/watch?v=okYJVotnwYw&), but looking at his mod files Bonesy and I concluded he basically 1:1 ripped them from Vanilla++ without permission, simplifying the cube recipes to only use Perfect Gems and omit the mod-specific items Storage Bag, Empty Bottle and [Color] Bottles.

For transparancy's sake: I ripped off Slim, who ripped off Bonesy, but at least I asked Bonesy for permission. Slim never responded.

Major thanks to:
- [Bonesy](https://www.d2rmodding.com/) for creating the [Color Dye System](https://www.youtube.com/watch?v=LRQeFO0Y3Y4) and his numerous other contributions to the D2R modding community
  - Be sure to check out his [ReMoDDeD](https://www.d2rmodding.com/remodded) and [Vanilla++](https://www.d2rmodding.com/d2rlaunch) mods!
- [olegbl](https://github.com/olegbl) for creating [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169)


## My Mods + Source

### Diablo II: Resurrected ###

| Nexus Mods Page                                                                                    | Source                                                           |
|:---------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|
| [Caedendi's Extended Loot Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/361) | [GitHub](https://github.com/Caedendi/D2RMM-Loot-Filter-Extended) |
| [Caedendi's Simple Loot Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/360)   | [GitHub](https://github.com/Caedendi/D2RMM-Loot-Filter-Simple)   |
| [Skip Videos for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/397)                     | [GitHub](https://github.com/Caedendi/D2RMM-Skip-Videos)          |
| [Bonesy's Color Dye System for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/474)       | [GitHub](https://github.com/Caedendi/D2RMM-Color-Dye)            |
