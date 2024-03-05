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

class CharConstants {
  static empty = '';
  static newLine = "\n";
  static newLineTxt = "\r";
}

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
    enabled:     "*enabled",
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

class BaseColorConstants {
  static prefix = "ÿc";

  // all known colors in the game code
  // note: all numbered colors that are not a v2 are the exact same color as their non-number counterpart
  static white           = `${this.prefix}0`;
  static whiteSmoke      = `${this.prefix}=`;
  static whiteSmoke2     = `${this.prefix}E`;
  static whiteSmoke3     = `${this.prefix}F`;
  static whiteSmoke4     = `${this.prefix}G`;
  static whiteSmoke5     = `${this.prefix}H`;
  static grayDim         = `${this.prefix}I`;
  static grayDim2        = `${this.prefix}K`;
  static grayDimmer      = `${this.prefix}5`;
  static black           = `${this.prefix}6`;
  static red             = `${this.prefix}U`;
  static tomato          = `${this.prefix}1`;
  static crimson         = `${this.prefix}S`;
  static lime            = `${this.prefix}2`;
  static lime2           = `${this.prefix}Q`;
  static lime_v2         = `${this.prefix}C`;
  static limeGreen       = `${this.prefix}<`;
  static green           = `${this.prefix}A`;
  static green2          = `${this.prefix}:`;
  static deepSkyBlue     = `${this.prefix}N`;
  static lightSkyBlue    = `${this.prefix}T`;
  static mediumSlateBlue = `${this.prefix}P`;
  static cornFlowerBlue  = `${this.prefix}3`;
  static cornFlowerBlue2 = `${this.prefix}B`;
  static yellow          = `${this.prefix}9`;
  static lightYellow     = `${this.prefix}R`;
  static orange          = `${this.prefix}8`;
  static orange1         = `${this.prefix}J`;
  static orange2         = `${this.prefix}L`;
  static orange3         = `${this.prefix}@`;
  static violet          = `${this.prefix}O`;
  static darkViolet      = `${this.prefix};`;
  static tan             = `${this.prefix}4`;
  static tan2            = `${this.prefix}D`;
  static tan_v2          = `${this.prefix}7`;
  static wheat           = `${this.prefix}M`;
}

class ColorConstants {
  // loot filter colors
  static none      = CharConstants.empty;
  static white     = BaseColorConstants.white;
  static gray      = BaseColorConstants.grayDimmer;
  static black     = BaseColorConstants.black;
  static red       = BaseColorConstants.tomato;
  static green     = BaseColorConstants.lime;
  static darkGreen = BaseColorConstants.green;
  static blue      = BaseColorConstants.cornFlowerBlue;
  static lightBlue = BaseColorConstants.lightSkyBlue;
  static yellow    = BaseColorConstants.yellow;
  static orange    = BaseColorConstants.orange;
  static gold      = BaseColorConstants.tan;
  static purple    = BaseColorConstants.darkViolet;
  static pink      = BaseColorConstants.violet;
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

class DyeConstants {
  static items = {
    gpw: "gpw",
    skz: "skz",
    gpb: "gpb",
    gpr: "gpr",
    gpg: "gpg",
    gpy: "gpy",
    gpv: "gpv",
    yps: "yps",
  };

  static none   = { name: "Clear",  dyeItem: "yps", value: 0, prop: ""          };
  static white  = { name: "White",  dyeItem: "gpw", value: 1, prop: "CD-White"  };
  static black  = { name: "Black",  dyeItem: "skz", value: 2, prop: "CD-Black"  };
  static blue   = { name: "Blue",   dyeItem: "gpb", value: 3, prop: "CD-Blue"   };
  static red    = { name: "Red",    dyeItem: "gpr", value: 4, prop: "CD-Red"    };
  static green  = { name: "Green",  dyeItem: "gpg", value: 5, prop: "CD-Green"  };
  static yellow = { name: "Yellow", dyeItem: "gpy", value: 6, prop: "CD-Yellow" };
  static purple = { name: "Purple", dyeItem: "gpv", value: 7, prop: "CD-Purple" };

  static itemStatCosts = [
    { stat: "CD_White",   descStrPosNeg: "CDWhite",  isClr: true  }, 
    { stat: "CD_Black",   descStrPosNeg: "CDBlack",  isClr: true  }, 
    { stat: "CD_Blue",    descStrPosNeg: "CDBlue",   isClr: true  }, 
    { stat: "CD_Red",     descStrPosNeg: "CDRed",    isClr: true  }, 
    { stat: "CD_Green",   descStrPosNeg: "CDGreen",  isClr: true  }, 
    { stat: "CD_Yellow",  descStrPosNeg: "CDYellow", isClr: true  }, 
    { stat: "CD_Purple",  descStrPosNeg: "CDPurple", isClr: true  }, 
    { stat: "CD_Tracker", descStrPosNeg: "",         isClr: false }, 
  ];

  static properties = [
    { code: "CD-White",   stat1: "CD_White"   }, 
    { code: "CD-Black",   stat1: "CD_Black"   }, 
    { code: "CD-Blue",    stat1: "CD_Blue"    }, 
    { code: "CD-Red",     stat1: "CD_Red"     }, 
    { code: "CD-Green",   stat1: "CD_Green"   }, 
    { code: "CD-Yellow",  stat1: "CD_Yellow"  }, 
    { code: "CD-Purple",  stat1: "CD_Purple"  }, 
    { code: "CD-Tracker", stat1: "CD_Tracker" }, 
  ];

  static equipment = [
    { name: "Weapon", itemType: "weap" }, 
    { name: "Helm",   itemType: "helm" }, 
    { name: "Shield", itemType: "shld" }, 
    { name: "Armor",  itemType: "tors" }, 
  ];

  static statesColors = [
    { name: "White",  itemTrans: EquipmentColorConstants.white  }, 
    { name: "Black",  itemTrans: EquipmentColorConstants.black  }, 
    { name: "Blue",   itemTrans: EquipmentColorConstants.blue   }, 
    { name: "Red",    itemTrans: EquipmentColorConstants.red    }, 
    { name: "Green",  itemTrans: EquipmentColorConstants.green  }, 
    { name: "Yellow", itemTrans: EquipmentColorConstants.yellow }, 
    { name: "Purple", itemTrans: EquipmentColorConstants.purple }, 
  ];

  // todo: make id scalable.
  static itemModifers = [ // order/ids match the original ColorDye item-modifiers.json file
    { id: 48000, name: "White",  clr: ColorConstants.white  },
    { id: 48001, name: "Black",  clr: ColorConstants.gray   },
    { id: 48002, name: "Blue",   clr: ColorConstants.blue   },
    { id: 48003, name: "Red",    clr: ColorConstants.red    },
    { id: 48004, name: "Green",  clr: ColorConstants.green  },
    { id: 48005, name: "Yellow", clr: ColorConstants.yellow },
    { id: 48006, name: "Purple", clr: ColorConstants.purple },
  ];
}


//====================================//
//   Color Dye Builders - TXT Files   //
//====================================//

class CubeMainBuilder {
  target = FileConstants.FILE_PATH_CUBEMAIN;

  build() {
    this.addDyes();
  }

  addDyes() {
    let file = D2RMM.readTsv(this.target);

    let id = file.rows.length;
    DyeConstants.equipment.forEach(type => {
        if (true) { // todo
          return;
        }

        file.rows.push(this.createColorDyeEntry(id, type, dye)); // push new entry to end of file
        id++;
      });
    
    D2RMM.writeTsv(this.target, file);
  }

  createNormalToColorRecipe() {
    var desc = `${eq.name} Dye - ${dye.from} -> ${dye.to}`;
  }

  createColorToColorRecipe() {

  }

  createColorToNormalRecipe() {

  }


  //===========//
  //   noice   //
  //===========//

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

  initRecipe(recipe, description, currentColorValue, itemType, dyeItem) {
    recipe[FileConstants.cubeMainColumns.description] = description; // `${type.name} Dye - ${dye.from} -> ${dye.to}`;
    recipe[FileConstants.cubeMainColumns.value]       = currentColorValue; // 0 normal, 1 white, 2 black, etc reset at next equip type
    recipe[FileConstants.cubeMainColumns.input1]      = itemType; // weap, helm, shld, tors
    recipe[FileConstants.cubeMainColumns.input2]      = dyeItem; // gpw, skz, gpb, gpr, gpg, gpy, gpv, yps - white, black, blue, red, green, yellow, purple, remove
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
    recipe[FileConstants.cubeMainColumns.mod1]      = targetClr;
    recipe[FileConstants.cubeMainColumns.mod1min]   = value;
    recipe[FileConstants.cubeMainColumns.mod1max]   = value;
    recipe[FileConstants.cubeMainColumns.mod2]      = FileConstants.statesColumns.state;
    recipe[FileConstants.cubeMainColumns.mod2param] = stateId;
    recipe[FileConstants.cubeMainColumns.mod2min]   = value;
    recipe[FileConstants.cubeMainColumns.mod2max]   = value;
  }

  addMod3(recipe, value) {
    recipe[FileConstants.cubeMainColumns.mod3] = "CD-Tracker"; // todo: fix magic string in DyeConstants.properties
    recipe[FileConstants.cubeMainColumns.mod3min] = value;
    recipe[FileConstants.cubeMainColumns.mod3max] = value;
  }

  addMod45(recipe, currentClr, stateId) {
    recipe[FileConstants.cubeMainColumns.mod4] = currentClr;
    recipe[FileConstants.cubeMainColumns.mod4min] = -1;
    recipe[FileConstants.cubeMainColumns.mod4max] = -1;
    recipe[FileConstants.cubeMainColumns.mod5] = FileConstants.statesColumns.state;
    recipe[FileConstants.cubeMainColumns.mod5param] = stateId;
    recipe[FileConstants.cubeMainColumns.mod5min] = -1;
    recipe[FileConstants.cubeMainColumns.mod5max] = -1;
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
      file.rows.push(this.createColorDyeEntry(id, dye)); // push new entry to end of file
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
      file.rows.push(this.createColorDyeEntry(dye)); // push new entry to end of file
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
        file.rows.push(this.createColorDyeEntry(id, eq, dye)); // push new entry to end of file
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
      file.push(this.createEntry(dye.id, `CD${dye.name}`, `${ColorConstants.gold}Color Dyed: ${dye.clr}${dye.name}`)); // push new entry to end of file
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
    // (new      CubeMainBuilder()).build(states); // Cube recipes
    (new ItemModifiersBuilder()).build();       // Modifiers on items: "Color Dyed: xxx"
  }
}

let mod = new ColorDyeBuilder();
mod.build();
