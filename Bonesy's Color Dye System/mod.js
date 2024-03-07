////=========================================////
////=========================================////
////                                         ////
////   Bonesy's Color Dye System for D2RMM   ////
////                 v1.0.0                  ////
////                                         ////
////=========================================////
////=========================================////


//===============//
//   Constants   //
//===============//

class FileConstants {
  // extensions
  static FILE_EXTENSION_JSON = ".json";
  static FILE_EXTENSION_TXT  = ".txt";
  
  // localized jsons
  static PATH_LOCAL_LNG_STRINGS   = "local\\lng\\strings\\";
  static FILE_PATH_ITEM_MODIFIERS = `${this.PATH_LOCAL_LNG_STRINGS}item-modifiers${this.FILE_EXTENSION_JSON}`;
  
  // excel
  static PATH_GLOBAL_EXCEL      = "global\\excel\\"
  static FILE_PATH_CUBEMAIN     = `${this.PATH_GLOBAL_EXCEL}cubemain${this.FILE_EXTENSION_TXT}`;
  static FILE_PATH_ITEMSTATCOST = `${this.PATH_GLOBAL_EXCEL}itemstatcost${this.FILE_EXTENSION_TXT}`;
  static FILE_PATH_PROPERTIES   = `${this.PATH_GLOBAL_EXCEL}properties${this.FILE_EXTENSION_TXT}`;
  static FILE_PATH_STATES       = `${this.PATH_GLOBAL_EXCEL}states${this.FILE_EXTENSION_TXT}`;
  
  static cubeMainColumns = {
    description: "description",
    enabled:     "enabled",
    version:     "version",
    op:          "op",
    param:       "param",
    value:       "value",
    numinputs:   "numinputs",
    input1:      "input 1",
    input2:      "input 2",
    output:      "output",
    mod1:        "mod 1",
    mod1min:     "mod 1 min",
    mod1max:     "mod 1 max",
    mod2:        "mod 2",
    mod2param:   "mod 2 param",
    mod2min:     "mod 2 min",
    mod2max:     "mod 2 max",
    mod3:        "mod 3",
    mod3min:     "mod 3 min",
    mod3max:     "mod 3 max",
    mod4:        "mod 4",
    mod4min:     "mod 4 min",
    mod4max:     "mod 4 max",
    mod5:        "mod 5",
    mod5param:   "mod 5 param",
    mod5min:     "mod 5 min",
    mod5max:     "mod 5 max",
    eol:         "*eol\r",
  };
  
  static itemStatCostColums = {
    stat:         "Stat",
    id:           "*ID",
    sendBits:     "Send Bits",
    add:          "Add",
    multiply:     "Multiply",
    valShift:     "ValShift",
    saveBits109:  "1.09-Save Bits",
    saveAdd109:   "1.09-Save Add",
    saveBits:     "Save Bits",
    saveAdd:      "Save Add",
    descPriority: "descpriority",
    descFunc:     "descfunc",
    descVal:      "descval",
    descStrPos:   "descstrpos",
    descStrNeg:   "descstrneg",
    eol:          "*eol\r",
  };
  
  static propertiesColumns = {
    code:    "code",
    enabled: "*Enabled",
    func1:   "func1",
    stat1:   "stat1",
    eol:     "*eol\r",
  };
  
  static statesColumns = {
    state:     "state",
    id:        "*ID",
    itemType:  "itemtype",
    itemTrans: "itemtrans",
    eol:       "*eol\r",
  };

  static jsonProperties = {
      id:   "id",
     key:  "Key",
    enus: "enUS",
    zhtw: "zhTW",
    dede: "deDE",
    eses: "esES",
    frfr: "frFR",
    itit: "itIT",
    kokr: "koKR",
    plpl: "plPL",
    esmx: "esMX",
    jajp: "jaJP",
    ptbr: "ptBR",
    ruru: "ruRU",
    zhcn: "zhCN"
  };
}

class ColorConstants {
  static prefix = "ÿc";
  static white  = `${this.prefix}0`;
  static gray   = `${this.prefix}5`;
  static blue   = `${this.prefix}3`;
  static red    = `${this.prefix}1`;
  static green  = `${this.prefix}2`;
  static yellow = `${this.prefix}9`;
  static purple = `${this.prefix};`;
  static gold   = `${this.prefix}4`;
}

class ColorNameConstants {
  static white   = "White"
  static black   = "Black"
  static blue    = "Blue"
  static red     = "Red"
  static green   = "Green"
  static yellow  = "Yellow"
  static purple  = "Purple"
  // static clear   = "Clear";
  static tracker = "Tracker";
}

class EquipmentColorConstants {
  static white  = "whit";
  static black  = "blac";
  static blue   = "cblu";
  static red    = "cred";
  static green  = "cgrn";
  static yellow = "lyel";
  static purple = "lpur";
}

class ItemConstants {
  static perfectDiamond  = "gpw";
  static perfectSkull    = "skz";
  static perfectSapphire = "gpb";
  static perfectRuby     = "gpr";
  static perfectEmerald  = "gpg";
  static perfectTopaz    = "gpy";
  static perfectAmethyst = "gpv";
  static antidotePotion  = "yps";
}

class cdConstants {
  static prefix = "CD";
  static white  = `${this.prefix}${ColorNameConstants.white}`;
  static black  = `${this.prefix}${ColorNameConstants.black}`;
  static blue   = `${this.prefix}${ColorNameConstants.blue}`;
  static red    = `${this.prefix}${ColorNameConstants.red}`;
  static green  = `${this.prefix}${ColorNameConstants.green}`;
  static yellow = `${this.prefix}${ColorNameConstants.yellow}`;
  static purple = `${this.prefix}${ColorNameConstants.purple}`;
}

class cdUnderscoreConstants {
  static prefix  = "CD_";
  static white   = `${this.prefix}${ColorNameConstants.white}`;
  static black   = `${this.prefix}${ColorNameConstants.black}`;
  static blue    = `${this.prefix}${ColorNameConstants.blue}`;
  static red     = `${this.prefix}${ColorNameConstants.red}`;
  static green   = `${this.prefix}${ColorNameConstants.green}`;
  static yellow  = `${this.prefix}${ColorNameConstants.yellow}`;
  static purple  = `${this.prefix}${ColorNameConstants.purple}`;
  static tracker = `${this.prefix}${ColorNameConstants.tracker}`;
}

class cdDashConstants {
  static prefix  = "CD-";
  static white   = `${this.prefix}${ColorNameConstants.white}`;
  static black   = `${this.prefix}${ColorNameConstants.black}`;
  static blue    = `${this.prefix}${ColorNameConstants.blue}`;
  static red     = `${this.prefix}${ColorNameConstants.red}`;
  static green   = `${this.prefix}${ColorNameConstants.green}`
  static yellow  = `${this.prefix}${ColorNameConstants.yellow}`;
  static purple  = `${this.prefix}${ColorNameConstants.purple}`;
  static tracker = `${this.prefix}${ColorNameConstants.tracker}`;
}

class DyeConstants {
  static itemStatCosts = [
    { stat: cdUnderscoreConstants.white,   descStrPosNeg: cdConstants.white,  isClr: true  }, 
    { stat: cdUnderscoreConstants.black,   descStrPosNeg: cdConstants.black,  isClr: true  }, 
    { stat: cdUnderscoreConstants.blue,    descStrPosNeg: cdConstants.blue,   isClr: true  }, 
    { stat: cdUnderscoreConstants.red,     descStrPosNeg: cdConstants.red,    isClr: true  }, 
    { stat: cdUnderscoreConstants.green,   descStrPosNeg: cdConstants.green,  isClr: true  }, 
    { stat: cdUnderscoreConstants.yellow,  descStrPosNeg: cdConstants.yellow, isClr: true  }, 
    { stat: cdUnderscoreConstants.purple,  descStrPosNeg: cdConstants.purple, isClr: true  }, 
    { stat: cdUnderscoreConstants.tracker, descStrPosNeg: "",                 isClr: false }, 
  ];

  static properties = [
    { code: cdDashConstants.white,   stat1: cdUnderscoreConstants.white,   }, 
    { code: cdDashConstants.black,   stat1: cdUnderscoreConstants.black,   }, 
    { code: cdDashConstants.blue,    stat1: cdUnderscoreConstants.blue,    }, 
    { code: cdDashConstants.red,     stat1: cdUnderscoreConstants.red,     }, 
    { code: cdDashConstants.green,   stat1: cdUnderscoreConstants.green,   }, 
    { code: cdDashConstants.yellow,  stat1: cdUnderscoreConstants.yellow,  }, 
    { code: cdDashConstants.purple,  stat1: cdUnderscoreConstants.purple,  }, 
    { code: cdDashConstants.tracker, stat1: cdUnderscoreConstants.tracker, }, 
  ];

  static equipment = [
    { name: "Weapon", itemType: "weap" }, 
    { name: "Helm",   itemType: "helm" }, 
    { name: "Shield", itemType: "shld" }, 
    { name: "Armor",  itemType: "tors" }, 
  ];

  static cubeMainColors = [
    { name: ColorNameConstants.white,  itemCode: ItemConstants.perfectDiamond,  trackerValue: 1 }, 
    { name: ColorNameConstants.black,  itemCode: ItemConstants.perfectSkull,    trackerValue: 2 }, 
    { name: ColorNameConstants.blue,   itemCode: ItemConstants.perfectSapphire, trackerValue: 3 }, 
    { name: ColorNameConstants.red,    itemCode: ItemConstants.perfectRuby,     trackerValue: 4 }, 
    { name: ColorNameConstants.green,  itemCode: ItemConstants.perfectEmerald,  trackerValue: 5 }, 
    { name: ColorNameConstants.yellow, itemCode: ItemConstants.perfectTopaz,    trackerValue: 6 }, 
    { name: ColorNameConstants.purple, itemCode: ItemConstants.perfectAmethyst, trackerValue: 7 } 
  ];

  static cubeMainClear = { itemCode: ItemConstants.antidotePotion, trackerValue: 0 };

  static statesColors = [
    { name: ColorNameConstants.white,  itemTrans: EquipmentColorConstants.white  }, 
    { name: ColorNameConstants.black,  itemTrans: EquipmentColorConstants.black  }, 
    { name: ColorNameConstants.blue,   itemTrans: EquipmentColorConstants.blue   }, 
    { name: ColorNameConstants.red,    itemTrans: EquipmentColorConstants.red    }, 
    { name: ColorNameConstants.green,  itemTrans: EquipmentColorConstants.green  }, 
    { name: ColorNameConstants.yellow, itemTrans: EquipmentColorConstants.yellow }, 
    { name: ColorNameConstants.purple, itemTrans: EquipmentColorConstants.purple }, 
  ];

  // order/ids match the original ColorDye item-modifiers.json file. todo: make id scalable.
  static itemModifers = [
    { id: 48000, name: ColorNameConstants.white,  clr: ColorConstants.white  },
    { id: 48001, name: ColorNameConstants.black,  clr: ColorConstants.gray   },
    { id: 48002, name: ColorNameConstants.blue,   clr: ColorConstants.blue   },
    { id: 48003, name: ColorNameConstants.red,    clr: ColorConstants.red    },
    { id: 48004, name: ColorNameConstants.green,  clr: ColorConstants.green  },
    { id: 48005, name: ColorNameConstants.yellow, clr: ColorConstants.yellow },
    { id: 48006, name: ColorNameConstants.purple, clr: ColorConstants.purple },
  ];
}


//====================================//
//   Color Dye Builders - TXT Files   //
//====================================//

class CubeMainBuilder {
  target = FileConstants.FILE_PATH_CUBEMAIN;

  build(states) {
    this.addDyes(states);
  }

  addDyes(states) {
    let file = D2RMM.readTsv(this.target);

    // create recipes for Weapon, Helm, Shield, Armor
    DyeConstants.equipment.forEach(eq => {
      // create Normal => Color
      DyeConstants.cubeMainColors.forEach(dyeTo => {
        let recipe = this.createNormalToColorRecipe(eq, dyeTo, states);
        file.rows.push(recipe);
      });

      // create Color => Color 
      DyeConstants.cubeMainColors.forEach(dyeFrom => {
        DyeConstants.cubeMainColors.forEach(dyeTo => {
          if (dyeFrom.name === dyeTo.name) {
            return;
          }
          let recipe = this.createColorToColorRecipe(eq, dyeFrom, dyeTo, states);
          file.rows.push(recipe);
        });
        
        // create Color => Clear
        let recipe = this.createColorToNormalRecipe(eq, dyeFrom, states);
        file.rows.push(recipe);
      });
    });
    
    D2RMM.writeTsv(this.target, file);
  }

  createNormalToColorRecipe(eq, dyeTo, states) {
    let desc = `${eq.name} Dye - Normal -> ${dyeTo.name}`;
    let targetColorStateId = this.getStateId(states, eq.itemType, dyeTo.name);
    let trackerValue = this.calculateTrackerValue(0, dyeTo.trackerValue);

    let recipe = this.createRecipe();
    this.initRecipe(recipe, desc, 0, eq.itemType, dyeTo.itemCode);
    this.addColor(recipe, dyeTo.name, targetColorStateId, trackerValue);

    return recipe;
  }

  createColorToColorRecipe(eq, dyeFrom, dyeTo, states) {
    let desc = `${eq.name} Dye - ${dyeFrom.name} -> ${dyeTo.name}`;
    let currentColorStateId = this.getStateId(states, eq.itemType, dyeFrom.name);
    let targetColorStateId = this.getStateId(states, eq.itemType, dyeTo.name);
    let trackerDiffValue = this.calculateTrackerValue(dyeFrom.trackerValue, dyeTo.trackerValue);

    let recipe = this.createRecipe();
    this.initRecipe(recipe, desc, dyeFrom.trackerValue, eq.itemType, dyeTo.itemCode);
    this.changeColor(recipe, dyeFrom.name, currentColorStateId, dyeTo.name, targetColorStateId, trackerDiffValue);

    return recipe;
  }

  createColorToNormalRecipe(eq, dyeFrom, states) {
    let desc = `${eq.name} Dye - ${dyeFrom.name} -> Clear`;
    let currentColorStateId = this.getStateId(states, eq.itemType, dyeFrom.name);
    let trackerValue = this.calculateTrackerValue(dyeFrom.trackerValue, 0);

    let recipe = this.createRecipe();
    this.initRecipe(recipe, desc, dyeFrom.trackerValue, eq.itemType, DyeConstants.cubeMainClear.itemCode);
    this.clearColor(recipe, dyeFrom.name, currentColorStateId, trackerValue)

    return recipe;
  }

  getStateId(states, type, clr) {
    for (const state of states) {
      if (state.type === type && state.clr === clr) {
        return state.id;
      }
    }

    return "no_state_id";
  }

  calculateTrackerValue(currentValue, desiredValue) {
    return desiredValue - currentValue;;
  }


  //=====================//
  //   recipe assembly   //
  //=====================//

  createRecipe() {
    let recipe = {};

    recipe[FileConstants.cubeMainColumns.enabled]     = 1;
    recipe[FileConstants.cubeMainColumns.version]     = 100;
    recipe[FileConstants.cubeMainColumns.op]          = 18;
    recipe[FileConstants.cubeMainColumns.param]       = 368;
    recipe[FileConstants.cubeMainColumns.numinputs]   = 2;
    recipe[FileConstants.cubeMainColumns.output]      = "useitem";
    recipe[FileConstants.cubeMainColumns.eol]         = 0;

    return recipe;
  }

  initRecipe(recipe, description, currentColorTrackerValue, itemType, dyeItem) {
    recipe[FileConstants.cubeMainColumns.description] = description;              // `${type.name} Dye - ${dye.from} -> ${dye.to}`;
    recipe[FileConstants.cubeMainColumns.value]       = currentColorTrackerValue; // 0 normal, 1 white, 2 black, etc reset at next equip type
    recipe[FileConstants.cubeMainColumns.input1]      = itemType;                 // weap, helm, shld, tors
    recipe[FileConstants.cubeMainColumns.input2]      = dyeItem;                  // gpw, skz, gpb, gpr, gpg, gpy, gpv, yps - white, black, blue, red, green, yellow, purple, remove
  }

  addColor(recipe, targetColor, targetColorStateId, trackerValue) {
    this.addMod12(recipe, targetColor, 1, targetColorStateId);
    this.addMod3(recipe, trackerValue);
  }

  changeColor(recipe, currentColor, currentColorStateId, targetColor, targetColorStateId, trackerValue) {
    this.addMod12(recipe, targetColor, 1, targetColorStateId);
    this.addMod3(recipe, trackerValue);
    this.addMod45(recipe, currentColor, currentColorStateId);
  }

  clearColor(recipe, currentColor, stateId, trackerValue) {
    this.addMod12(recipe, currentColor, -1, stateId);
    this.addMod3(recipe, trackerValue);
  }

  addMod12(recipe, targetClr, value, stateId) {
    recipe[FileConstants.cubeMainColumns.mod1]      = `${cdDashConstants.prefix}${targetClr}`;
    recipe[FileConstants.cubeMainColumns.mod1min]   = value;
    recipe[FileConstants.cubeMainColumns.mod1max]   = value;
    recipe[FileConstants.cubeMainColumns.mod2]      = FileConstants.statesColumns.state;
    recipe[FileConstants.cubeMainColumns.mod2param] = stateId;
    recipe[FileConstants.cubeMainColumns.mod2min]   = value;
    recipe[FileConstants.cubeMainColumns.mod2max]   = value;
  }

  addMod3(recipe, value) {
    recipe[FileConstants.cubeMainColumns.mod3]    = `${cdDashConstants.tracker}`;
    recipe[FileConstants.cubeMainColumns.mod3min] = value;
    recipe[FileConstants.cubeMainColumns.mod3max] = value;
  }

  addMod45(recipe, currentClr, stateId) {
    recipe[FileConstants.cubeMainColumns.mod4]      = `${cdDashConstants.prefix}${currentClr}`;
    recipe[FileConstants.cubeMainColumns.mod4min]   = -1;
    recipe[FileConstants.cubeMainColumns.mod4max]   = -1;
    recipe[FileConstants.cubeMainColumns.mod5]      = FileConstants.statesColumns.state;
    recipe[FileConstants.cubeMainColumns.mod5param] = stateId;
    recipe[FileConstants.cubeMainColumns.mod5min]   = -1;
    recipe[FileConstants.cubeMainColumns.mod5max]   = -1;
  }
}

class ItemStatCostBuilder {
  target = FileConstants.FILE_PATH_ITEMSTATCOST;

  build() {
    this.addDyes();
  }
  
  addDyes() {
    let file = D2RMM.readTsv(this.target);

    let id = file.rows.length;
    DyeConstants.itemStatCosts.forEach(dye => {
      file.rows.push(this.createColorDyeEntry(id, dye));
      id++;
    });
    
    D2RMM.writeTsv(this.target, file);
  }

  createColorDyeEntry(id, dye) {
    let entry = {};

    entry[FileConstants.itemStatCostColums.stat]        = dye.stat;
    entry[FileConstants.itemStatCostColums.id]          = id;
    entry[FileConstants.itemStatCostColums.sendBits]    = 16;
    entry[FileConstants.itemStatCostColums.add]         = 102;
    entry[FileConstants.itemStatCostColums.multiply]    = 20;
    entry[FileConstants.itemStatCostColums.valShift]    = 1024;
    entry[FileConstants.itemStatCostColums.saveBits109] = 10;
    entry[FileConstants.itemStatCostColums.saveAdd109]  = 10;
    entry[FileConstants.itemStatCostColums.saveBits]    = 11;
    entry[FileConstants.itemStatCostColums.saveAdd]     = 10;
    entry[FileConstants.itemStatCostColums.eol]         = 0;
    
    if (dye.isClr) {
      entry[FileConstants.itemStatCostColums.descPriority] = 997;
      entry[FileConstants.itemStatCostColums.descFunc]     = 3;
      entry[FileConstants.itemStatCostColums.descVal]      = 0;
      entry[FileConstants.itemStatCostColums.descStrPos]   = dye.descStrPosNeg;
      entry[FileConstants.itemStatCostColums.descStrNeg]   = dye.descStrPosNeg;
    }
    
    return entry;
  }
}

class PropertiesBuilder {
  target = FileConstants.FILE_PATH_PROPERTIES;

  build() {
    this.addDyes();
  }

  addDyes() {
    let file = D2RMM.readTsv(this.target);

    let id = file.rows.length;
    DyeConstants.properties.forEach(dye => {
      file.rows.push(this.createColorDyeEntry(dye));
      id++;
    });
    
    D2RMM.writeTsv(this.target, file);
  }

  createColorDyeEntry(dye) {
    let entry = {};

    entry[FileConstants.propertiesColumns.code]    = dye.code;
    entry[FileConstants.propertiesColumns.enabled] = 1;
    entry[FileConstants.propertiesColumns.func1]   = 17;
    entry[FileConstants.propertiesColumns.stat1]   = dye.stat1;
    entry[FileConstants.itemStatCostColums.eol]    = 0;
    
    return entry;
  }
}

class StatesBuilder {
  target = FileConstants.FILE_PATH_STATES;

  build(states) {
    this.addDyes(states);
  }

  addDyes(states) {
    let file = D2RMM.readTsv(this.target);

    let id = file.rows.length;
    DyeConstants.equipment.forEach(eq => {
      DyeConstants.statesColors.forEach(dye => {
        file.rows.push(this.createColorDyeEntry(id, eq, dye));
        states.push({ type: eq.itemType, clr: dye.name, id: id });
        id++;
      });
    });

    D2RMM.writeTsv(this.target, file);
  }

  createColorDyeEntry(id, eq, dye) {
    let entry = {};

    entry[FileConstants.statesColumns.state]     = `${eq.name}_${dye.name}`;
    entry[FileConstants.statesColumns.id]        = id;
    entry[FileConstants.statesColumns.itemType]  = eq.itemType;
    entry[FileConstants.statesColumns.itemTrans] = dye.itemTrans;
    entry[FileConstants.statesColumns.eol]       = 0;
    
    return entry;
  }
}


//=====================================//
//   Color Dye Builders - JSON Files   //
//=====================================//

class ItemModifiersBuilder {
  target = FileConstants.FILE_PATH_ITEM_MODIFIERS;

  build() {
    this.addDyes();
  }

  addDyes() {
    let file = D2RMM.readJson(this.target);
    DyeConstants.itemModifers.forEach(dye => {
      let newEntry = this.createEntry(dye.id, `${cdConstants.prefix}${dye.name}`, `${ColorConstants.gold}Color Dyed: ${dye.clr}${dye.name}`);
      file.push(newEntry);
    });
    D2RMM.writeJson(this.target, file);
  }

  createEntry(id, key, value) {
    let entry = {};
    entry[FileConstants.jsonProperties.id]  = id;
    entry[FileConstants.jsonProperties.key] = key;

    Object.values(FileConstants.jsonProperties).forEach(prop => {
      if ( prop === FileConstants.jsonProperties.id
        || prop === FileConstants.jsonProperties.key) {
        return;
      }
        entry[prop] = value;
    });

    return entry;
  }
};


//=========================================//
//   Color Dye Builders - Master Builder   //
//=========================================//

class ColorDyeBuilder {
  build() {
    var states = []; // type: "weap", clr: White, id: 192

    (new  ItemStatCostBuilder()).build();       // Item stat values and shop costs
    (new    PropertiesBuilder()).build();       // Item property names
    (new        StatesBuilder()).build(states); // States
    (new      CubeMainBuilder()).build(states); // Cube recipes
    (new ItemModifiersBuilder()).build();       // Modifiers on items: "Color Dyed: xxx"
  }
}

let mod = new ColorDyeBuilder();
mod.build();
