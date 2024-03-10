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
  static codePrefix = "ÿc";
  static codes = {
    white:  `${this.codePrefix}0`,
    gray:   `${this.codePrefix}5`,
    blue:   `${this.codePrefix}3`,
    red:    `${this.codePrefix}1`,
    green:  `${this.codePrefix}2`,
    yellow: `${this.codePrefix}9`,
    purple: `${this.codePrefix};`,
    gold:   `${this.codePrefix}4`,
  }

  static names = {
    white:   "White",
    black:   "Black",
    blue:    "Blue",
    red:     "Red",
    green:   "Green",
    yellow:  "Yellow",
    purple:  "Purple",
    normal:  "Normal",
    clear:   "Clear",
    tracker: "Tracker",
  }

  static equipment = {
    white:  "whit",
    black:  "blac",
    blue:   "cblu",
    red:    "cred",
    green:  "cgrn",
    yellow: "lyel",
    purple: "lpur",
  }
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
  static prefixShort      = "CD";
  static prefixUnderscore = "CD_";
  static prefixDash       = "CD-";

  static short = {
    white:  `${this.prefixShort}${ColorConstants.names.white}`,
    black:  `${this.prefixShort}${ColorConstants.names.black}`,
    blue:   `${this.prefixShort}${ColorConstants.names.blue}`,
    red:    `${this.prefixShort}${ColorConstants.names.red}`,
    green:  `${this.prefixShort}${ColorConstants.names.green}`,
    yellow: `${this.prefixShort}${ColorConstants.names.yellow}`,
    purple: `${this.prefixShort}${ColorConstants.names.purple}`,
  }

  static underscore = {
    white:   `${this.prefixUnderscore}${ColorConstants.names.white}`,
    black:   `${this.prefixUnderscore}${ColorConstants.names.black}`,
    blue:    `${this.prefixUnderscore}${ColorConstants.names.blue}`,
    red:     `${this.prefixUnderscore}${ColorConstants.names.red}`,
    green:   `${this.prefixUnderscore}${ColorConstants.names.green}`,
    yellow:  `${this.prefixUnderscore}${ColorConstants.names.yellow}`,
    purple:  `${this.prefixUnderscore}${ColorConstants.names.purple}`,
    tracker: `${this.prefixUnderscore}${ColorConstants.names.tracker}`,
  }

  static dash = {
    white:   `${this.prefixDash}${ColorConstants.names.white}`,
    black:   `${this.prefixDash}${ColorConstants.names.black}`,
    blue:    `${this.prefixDash}${ColorConstants.names.blue}`,
    red:     `${this.prefixDash}${ColorConstants.names.red}`,
    green:   `${this.prefixDash}${ColorConstants.names.green}`,
    yellow:  `${this.prefixDash}${ColorConstants.names.yellow}`,
    purple:  `${this.prefixDash}${ColorConstants.names.purple}`,
    tracker: `${this.prefixDash}${ColorConstants.names.tracker}`,
  }
}

class DyeConstants {
  static equipment = [
    { name: "Weapon", itemType: "weap" }, 
    { name: "Helm",   itemType: "helm" }, 
    { name: "Shield", itemType: "shld" }, 
    { name: "Armor",  itemType: "tors" }, 
  ];

  static itemStatCost = [
    { statId: cdConstants.underscore.white,   descStrPosNeg: cdConstants.short.white  }, 
    { statId: cdConstants.underscore.black,   descStrPosNeg: cdConstants.short.black  }, 
    { statId: cdConstants.underscore.blue,    descStrPosNeg: cdConstants.short.blue   }, 
    { statId: cdConstants.underscore.red,     descStrPosNeg: cdConstants.short.red    }, 
    { statId: cdConstants.underscore.green,   descStrPosNeg: cdConstants.short.green  }, 
    { statId: cdConstants.underscore.yellow,  descStrPosNeg: cdConstants.short.yellow }, 
    { statId: cdConstants.underscore.purple,  descStrPosNeg: cdConstants.short.purple }, 
  ];

  static properties = [
    { propertyId: cdConstants.dash.white,   statId: cdConstants.underscore.white   }, 
    { propertyId: cdConstants.dash.black,   statId: cdConstants.underscore.black   }, 
    { propertyId: cdConstants.dash.blue,    statId: cdConstants.underscore.blue    }, 
    { propertyId: cdConstants.dash.red,     statId: cdConstants.underscore.red     }, 
    { propertyId: cdConstants.dash.green,   statId: cdConstants.underscore.green   }, 
    { propertyId: cdConstants.dash.yellow,  statId: cdConstants.underscore.yellow  }, 
    { propertyId: cdConstants.dash.purple,  statId: cdConstants.underscore.purple  }, 
    { propertyId: cdConstants.dash.tracker, statId: cdConstants.underscore.tracker }, 
  ];

  static states = [
    { clrName: ColorConstants.names.white,  eqClrCode: ColorConstants.equipment.white  }, 
    { clrName: ColorConstants.names.black,  eqClrCode: ColorConstants.equipment.black  }, 
    { clrName: ColorConstants.names.blue,   eqClrCode: ColorConstants.equipment.blue   }, 
    { clrName: ColorConstants.names.red,    eqClrCode: ColorConstants.equipment.red    }, 
    { clrName: ColorConstants.names.green,  eqClrCode: ColorConstants.equipment.green  }, 
    { clrName: ColorConstants.names.yellow, eqClrCode: ColorConstants.equipment.yellow }, 
    { clrName: ColorConstants.names.purple, eqClrCode: ColorConstants.equipment.purple }, 
  ];

  static cubeMain = [
    { clrName: ColorConstants.names.white,  itemCode: ItemConstants.perfectDiamond,  trackerValue: 1 }, 
    { clrName: ColorConstants.names.black,  itemCode: ItemConstants.perfectSkull,    trackerValue: 2 }, 
    { clrName: ColorConstants.names.blue,   itemCode: ItemConstants.perfectSapphire, trackerValue: 3 }, 
    { clrName: ColorConstants.names.red,    itemCode: ItemConstants.perfectRuby,     trackerValue: 4 }, 
    { clrName: ColorConstants.names.green,  itemCode: ItemConstants.perfectEmerald,  trackerValue: 5 }, 
    { clrName: ColorConstants.names.yellow, itemCode: ItemConstants.perfectTopaz,    trackerValue: 6 }, 
    { clrName: ColorConstants.names.purple, itemCode: ItemConstants.perfectAmethyst, trackerValue: 7 } 
  ];

  static cubeMainClear = { itemCode: ItemConstants.antidotePotion, trackerValue: 0 };

  static itemModifers = [
    { clrName: ColorConstants.names.white,  clrCode: ColorConstants.codes.white  },
    { clrName: ColorConstants.names.black,  clrCode: ColorConstants.codes.gray   },
    { clrName: ColorConstants.names.blue,   clrCode: ColorConstants.codes.blue   },
    { clrName: ColorConstants.names.red,    clrCode: ColorConstants.codes.red    },
    { clrName: ColorConstants.names.green,  clrCode: ColorConstants.codes.green  },
    { clrName: ColorConstants.names.yellow, clrCode: ColorConstants.codes.yellow },
    { clrName: ColorConstants.names.purple, clrCode: ColorConstants.codes.purple },
  ];
}


//====================================//
//   Color Dye Builders - TXT Files   //
//====================================//

class CubeMainBuilder {
  target = FileConstants.FILE_PATH_CUBEMAIN;

  build(colorDyeGlobals) {
    this.addDyes(colorDyeGlobals);
  }

  addDyes(colorDyeGlobals) {
    let file = D2RMM.readTsv(this.target);

    // create recipes for Weapon, Helm, Shield, Armor
    DyeConstants.equipment.forEach(eq => {
      // create Normal => Color
      DyeConstants.cubeMain.forEach(dyeTo => {
        file.rows.push(this.createNormalToColorRecipe(eq, dyeTo, colorDyeGlobals.states, colorDyeGlobals.trackerStatId));
      });

      // create Color => Color 
      DyeConstants.cubeMain.forEach(dyeFrom => {
        DyeConstants.cubeMain.forEach(dyeTo => {
          if (dyeFrom.clrName === dyeTo.clrName) {
            return;
          }
          file.rows.push(this.createColorToColorRecipe(eq, dyeFrom, dyeTo, colorDyeGlobals.states, colorDyeGlobals.trackerStatId));
        });
        
        // create Color => Clear
        file.rows.push(this.createColorToNormalRecipe(eq, dyeFrom, colorDyeGlobals.states, colorDyeGlobals.trackerStatId));
      });
    });
    
    D2RMM.writeTsv(this.target, file);
  }

  createNormalToColorRecipe(eq, dyeTo, states, trackerStatId) {
    let desc = this.createDescription(eq.name, ColorConstants.names.normal, dyeTo.clrName);
    let targetColorStateId = this.findStateId(states, eq.itemType, dyeTo.clrName);
    let trackerValue = this.calculateTrackerValue(0, dyeTo.trackerValue);

    let recipe = this.createRecipeBase(desc, trackerStatId, 0, eq.itemType, dyeTo.itemCode);
    this.addColor(recipe, dyeTo.clrName, targetColorStateId, trackerValue);

    return recipe;
  }

  createColorToColorRecipe(eq, dyeFrom, dyeTo, states, trackerStatId) {
    let desc = this.createDescription(eq.name, dyeFrom.clrName, dyeTo.clrName);
    let currentColorStateId = this.findStateId(states, eq.itemType, dyeFrom.clrName);
    let targetColorStateId = this.findStateId(states, eq.itemType, dyeTo.clrName);
    let trackerDiffValue = this.calculateTrackerValue(dyeFrom.trackerValue, dyeTo.trackerValue);

    let recipe = this.createRecipeBase(desc, trackerStatId, dyeFrom.trackerValue, eq.itemType, dyeTo.itemCode);
    this.changeColor(recipe, dyeFrom.clrName, currentColorStateId, dyeTo.clrName, targetColorStateId, trackerDiffValue);

    return recipe;
  }

  createColorToNormalRecipe(eq, dyeFrom, states, trackerStatId) {
    let desc = this.createDescription(eq.name, dyeFrom.clrName, ColorConstants.names.clear);
    let currentColorStateId = this.findStateId(states, eq.itemType, dyeFrom.clrName);
    let trackerValue = this.calculateTrackerValue(dyeFrom.trackerValue, 0);

    let recipe = this.createRecipeBase(desc, trackerStatId, dyeFrom.trackerValue, eq.itemType, DyeConstants.cubeMainClear.itemCode);
    this.clearColor(recipe, dyeFrom.clrName, currentColorStateId, trackerValue)

    return recipe;
  }

  createDescription(eqName, dyeFromName, dyeToName) {
    return `${eqName} Dye - ${dyeFromName} -> ${dyeToName}`
  }

  findStateId(states, type, clr) {
    return states.find(state => state.type === type && state.clr === clr).id;
  }

  calculateTrackerValue(currentValue, desiredValue) {
    return desiredValue - currentValue;
  }


  //=====================//
  //   recipe assembly   //
  //=====================//

  createRecipeBase(description, trackerStatId, currentColorTrackerValue, itemType, dyeItem) {
    let recipe = {};

    recipe[FileConstants.cubeMainColumns.enabled]     = 1;
    recipe[FileConstants.cubeMainColumns.version]     = 100;
    recipe[FileConstants.cubeMainColumns.op]          = 18;
    recipe[FileConstants.cubeMainColumns.param]       = trackerStatId; // itemstatcost.txt ID for CD_Tracker, tracks item's current color
    recipe[FileConstants.cubeMainColumns.numinputs]   = 2;
    recipe[FileConstants.cubeMainColumns.output]      = "useitem";
    recipe[FileConstants.cubeMainColumns.eol]         = 0;

    recipe[FileConstants.cubeMainColumns.description] = description;              // `${type.name} Dye - ${dye.from} -> ${dye.to}`;
    recipe[FileConstants.cubeMainColumns.value]       = currentColorTrackerValue; // 0 normal, 1 white, 2 black, etc reset at next equip type
    recipe[FileConstants.cubeMainColumns.input1]      = itemType;                 // weap, helm, shld, tors
    recipe[FileConstants.cubeMainColumns.input2]      = dyeItem;                  // gpw, skz, gpb, gpr, gpg, gpy, gpv, yps - white, black, blue, red, green, yellow, purple, remove

    return recipe;
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
    recipe[FileConstants.cubeMainColumns.mod1]      = `${cdConstants.prefixDash}${targetClr}`;
    recipe[FileConstants.cubeMainColumns.mod1min]   = value;
    recipe[FileConstants.cubeMainColumns.mod1max]   = value;
    recipe[FileConstants.cubeMainColumns.mod2]      = FileConstants.statesColumns.state;
    recipe[FileConstants.cubeMainColumns.mod2param] = stateId;
    recipe[FileConstants.cubeMainColumns.mod2min]   = value;
    recipe[FileConstants.cubeMainColumns.mod2max]   = value;
  }

  addMod3(recipe, value) {
    recipe[FileConstants.cubeMainColumns.mod3]    = `${cdConstants.dash.tracker}`;
    recipe[FileConstants.cubeMainColumns.mod3min] = value;
    recipe[FileConstants.cubeMainColumns.mod3max] = value;
  }

  addMod45(recipe, currentClr, stateId) {
    recipe[FileConstants.cubeMainColumns.mod4]      = `${cdConstants.prefixDash}${currentClr}`;
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

  build(colorDyeGlobals) {
    this.addDyes(colorDyeGlobals);
  }
  
  addDyes(colorDyeGlobals) {
    let file = D2RMM.readTsv(this.target);
    let index = file.rows.length;

    // add dye stats
    DyeConstants.itemStatCost.forEach(dye => {
      file.rows.push(this.createColorDyeEntry(index, dye));
      index++;
    });
    
    // add tracker stat
    file.rows.push(this.createColorDyeEntryBase(index, cdConstants.underscore.tracker));
    colorDyeGlobals.trackerStatId = index; // used in cubemain.txt
    
    D2RMM.writeTsv(this.target, file);
  }

  createColorDyeEntry(index, dye) {
    let entry = this.createColorDyeEntryBase(index, dye.statId);

    entry[FileConstants.itemStatCostColums.descPriority] = 997;
    entry[FileConstants.itemStatCostColums.descFunc]     = 3;
    entry[FileConstants.itemStatCostColums.descVal]      = 0;
    entry[FileConstants.itemStatCostColums.descStrPos]   = dye.descStrPosNeg;
    entry[FileConstants.itemStatCostColums.descStrNeg]   = dye.descStrPosNeg;
    
    return entry;
  }

  createColorDyeEntryBase(index, statId) {
    let entry = {};

    // todo: change bit values (Bonesy trademark)
    entry[FileConstants.itemStatCostColums.stat]        = statId;
    entry[FileConstants.itemStatCostColums.id]          = index;
    entry[FileConstants.itemStatCostColums.sendBits]    = 16;
    entry[FileConstants.itemStatCostColums.add]         = 102;
    entry[FileConstants.itemStatCostColums.multiply]    = 20;
    entry[FileConstants.itemStatCostColums.valShift]    = 1024;
    entry[FileConstants.itemStatCostColums.saveBits109] = 10;
    entry[FileConstants.itemStatCostColums.saveAdd109]  = 10;
    entry[FileConstants.itemStatCostColums.saveBits]    = 11;
    entry[FileConstants.itemStatCostColums.saveAdd]     = 10;
    entry[FileConstants.itemStatCostColums.eol]         = 0;
    
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

    entry[FileConstants.propertiesColumns.code]    = dye.propertyId;
    entry[FileConstants.propertiesColumns.enabled] = 1;
    entry[FileConstants.propertiesColumns.func1]   = 17;
    entry[FileConstants.propertiesColumns.stat1]   = dye.statId;
    entry[FileConstants.itemStatCostColums.eol]    = 0;
    
    return entry;
  }
}

class StatesBuilder {
  target = FileConstants.FILE_PATH_STATES;

  build(colorDyeGlobals) {
    this.addDyes(colorDyeGlobals);
  }

  addDyes(colorDyeGlobals) {
    let file = D2RMM.readTsv(this.target);

    let id = file.rows.length;
    DyeConstants.equipment.forEach(eq => {
      DyeConstants.states.forEach(dye => {
        file.rows.push(this.createColorDyeEntry(id, eq, dye));
        colorDyeGlobals.states.push({ type: eq.itemType, clr: dye.clrName, id: id }); // these new states will be referenced in cubemain.txt, so we need to save these for later
        id++;
      });
    });

    D2RMM.writeTsv(this.target, file);
  }

  createColorDyeEntry(id, eq, dye) {
    let entry = {};

    entry[FileConstants.statesColumns.state]     = `${eq.name}_${dye.clrName}`;
    entry[FileConstants.statesColumns.id]        = id;
    entry[FileConstants.statesColumns.itemType]  = eq.itemType;
    entry[FileConstants.statesColumns.itemTrans] = dye.eqClrCode;
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

    let id = this.determineFirstId(file, 48000);
    DyeConstants.itemModifers.forEach(dye => {
      file.push(this.createEntry(id, dye));
      id++;
    });

    D2RMM.writeJson(this.target, file);
  }

  createEntry(id, dye) {
    let entry = {};
    entry[FileConstants.jsonProperties.id]  = id;
    entry[FileConstants.jsonProperties.key] = `${cdConstants.prefixShort}${dye.clrName}`;

    Object.values(FileConstants.jsonProperties).forEach(prop => {
      if ( prop === FileConstants.jsonProperties.id || prop === FileConstants.jsonProperties.key) {
        return;
      }
      entry[prop] = `${ColorConstants.codes.gold}Color Dyed: ${dye.clrCode}${dye.clrName}`;
    });

    return entry;
  }

  // assumes item-modifiers.json is properly sequentially ordered. returns the provided startingPoint if it is available, else returns the highest ID + 1.
  determineFirstId(file, preferredId) {
    let lastId = file[file.length - 1].id;

    return lastId < preferredId ? preferredId : lastId + 1;;
  }
};


//=========================================//
//   Color Dye Builders - Master Builder   //
//=========================================//

class ColorDyeBuilder {
  colorDyeGlobals = {
    trackerStatId: 0,
    states: [], // type: "weap", clr: White, id: 192
  };

  build() {
    (new  ItemStatCostBuilder()).build(this.colorDyeGlobals); // Item stat values and shop costs
    (new    PropertiesBuilder()).build();                     // Item property names
    (new        StatesBuilder()).build(this.colorDyeGlobals); // States
    (new      CubeMainBuilder()).build(this.colorDyeGlobals); // Cube recipes
    (new ItemModifiersBuilder()).build();                     // Modifiers on items: "Color Dyed: xxx"
  }
}

let mod = new ColorDyeBuilder();
mod.build();
