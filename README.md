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

<p float="left">
  <img src="https://i.imgur.com/todo.png" alt="todo1" width="49%">
  <img src="https://i.imgur.com/todo.png" alt="todo2" width="49%">
</p>


## Changelog

### 1.0.0
- Initial D2RMM release, feature parity with [ColorDye](https://www.nexusmods.com/diablo2resurrected/mods/418)
  - Some lines in cubemain.txt are shifted, this mod's order makes more sense.
- The added entries' IDs are generated dynamically (not hardcoded), so it's compatible with any (D2RMM) mod that touches the same files.


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
|          states.txt |  28   |    189    |    217    |       255       |
|        cubemain.txt |  224  |    154    |    378    | unknown (150k+) |
|      properties.txt |   8   |    276    |    288    |                 |
| item-modifiers.json |   7   |  27374 *  |  48006 *  |      65535      |

\* _The highest entry in item-modifiers.json has ID 27374 (even though the game does not utilize all available IDs up to that number). To prevent incompatibility with a future game update, this mod mirrors Bonesy's Vanilla++ (and Slim for that matter) by starting the new entries at ID 48000. All other entries use the first available IDs so scale with other mods._

## Known Issues

None at the moment.


## Roadmap

- [x] Full feature parity with the original mods
- [ ] Make item-modifiers.json's IDs scalable
- [ ] Update recommended mods section


## Recommended Mods

In addition to this, I recommend you also use the following D2RMM mods:

| Mod                                                                                                |                                    Creator                                    | Notes                                                                                                                                  |
|----------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------:|----------------------------------------------------------------------------------------------------------------------------------------|
| [Disable Battle.net](https://github.com/olegbl/d2rmm.mods)                                         |                      [olegbl](https://github.com/olegbl)                      | So you don't accidentally get yourself banned.                                                                                         |
| [Skip Videos](https://www.nexusmods.com/diablo2resurrected/mods/179)                               | [Caedendi](https://www.nexusmods.com/diablo2resurrected/users/179695179) (me) | Disable launch intro videos and cinematic cutscenes when transitioning between acts.                                                   |
| [Improved Potion Visibility](https://www.nexusmods.com/diablo2resurrected/mods/384)                |   [MetalTxus](https://www.nexusmods.com/diablo2resurrected/users/18894694)    | Changes healing/mana potion sprites so it's easier to distinguish different potion levels.                                             |
| [UI Fixes](https://www.nexusmods.com/diablo2resurrected/mods/387)                                  |   [MetalTxus](https://www.nexusmods.com/diablo2resurrected/users/18894694)    | Fixes the placement of a few item grids.                                                                                               |
| [Move Cain and Teleports for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/310)         |  [night0wl117](https://www.nexusmods.com/diablo2resurrected/users/33697975)   | Move town starting points, TP locations and Cain's position in Act 5.                                                                  |
| [Town Cast](https://www.nexusmods.com/diablo2resurrected/mods/183)                                 |                      [olegbl](https://github.com/olegbl)                      | Teleport and buff in town. _(BREAKING: allows teleporting past Jerhyn during the Act 2 questline)_                                     |
| [Pseudo Loot Filter (D2RMM)](https://www.nexusmods.com/diablo2resurrected/mods/467)                |    [icalexci](https://www.nexusmods.com/diablo2resurrected/users/29547100)    | Loot filter for preventing unwanted items from dropping. Sets drop chance to NoDrop without influencing the other items' drop chances. |
| [Caedendi's Extended Loot Filter for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/361) | [Caedendi](https://www.nexusmods.com/diablo2resurrected/users/179695179) (me) | Loot filter for name shortening/highlighting, light pillars, drop sounds, big tooltips && more.                                        |
| [Settings Font Fix](https://www.nexusmods.com/diablo2resurrected/mods/200)                         |                      [olegbl](https://github.com/olegbl)                      | In case any mod touches __profilehd_ and screws up the font size in the settings menu.                                                 |


## License/Permissions

This code is licensed under GPL. 

You are free to use and distribute all code in this mod, as long as you ask for permission (and permission is granted), it stays open source, free of charge and all due credit is given. 

If you are trying to profit off this mod in any way, then you're a dick and forbidden from using this code.


## Credits

The Color Dye System concept was created by [Bonesy](https://www.nexusmods.com/users/42415920) ([YouTube](https://www.youtube.com/@locbones1), [D2RModding](https://www.d2rmodding.com/)) and is featured in his [ReMoDDeD](https://www.d2rmodding.com/remodded) and [Vanilla++](https://www.d2rmodding.com/d2rlaunch) mods and his [YouTube tutorial](https://www.youtube.com/watch?v=LRQeFO0Y3Y4). The JavaScript code to recreate this and make it compatible with D2RMM was written by [me](https://www.nexusmods.com/users/179695179) with permission from Bonesy.

I initially learned of Bonesy's Color Dye System through the [ColorDye](https://www.nexusmods.com/diablo2resurrected/mods/418) mod by Slim/[roryskys](https://www.nexusmods.com/users/74559688) on Nexus Mods. He is unclear on his sources/credits other than that he mentions "it was created by Bonesy" in his [YouTube video](https://www.youtube.com/watch?v=okYJVotnwYw&), but looking at his mod files Bonesy and I concluded he basically 1:1 ripped them from Vanilla++ without permission, simplifying the cube recipes to only use Perfect Gems and omit the mod-specific items Storage Bag, Empty Bottle and [Color] Bottles.

For transparancy's sake: I ripped off Slim, who ripped off Bonesy, but at least I asked Bonesy for permission (and Slim for that matter but he never responded).

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
| [Bonesy's Color Dye System for D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/xxx)       | [GitHub](https://github.com/Caedendi/D2RMM-Color-Dye)            |
