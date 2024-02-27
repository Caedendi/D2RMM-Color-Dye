////=========================////
////=========================////
////                         ////
////   Color Dye for D2RMM   ////
////         v1.0.0          ////
////                         ////
////=========================////
////=========================////


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

class CharConstants {
  static empty = '';
  static space = ' ';
  static newLine = "\n";
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

class JewelryConstants {
  static amethyst = "Amethyst";
  static diamond  = "Diamond";
  static emerald  = "Emerald";
  static ruby     = "Ruby";
  static sapphire = "Sapphire";
  static topaz    = "Topaz";
  static skull    = "Skull";

  static chipped = "Chipped";
  static flawed = "Flawed";
  static flawless = "Flawless";
  static perfect = "Perfect";

  static clrAmethyst = ColorConstants.purple;
  static clrDiamond  = ColorConstants.white;
  static clrEmerald  = ColorConstants.green;
  static clrRuby     = ColorConstants.red;
  static clrSapphire = ColorConstants.blue;
  static clrTopaz    = ColorConstants.yellow;
  static clrSkull    = ColorConstants.gray;
  
  static clrName = ColorConstants.white;
}

class DyeConstants {
  static itemStatCosts = [
    { stat: "CD_White",   descStrPosNeg: "CDWhite",  isClr: true }, 
    { stat: "CD_Black",   descStrPosNeg: "CDBlack",  isClr: true }, 
    { stat: "CD_Blue",    descStrPosNeg: "CDBlue",   isClr: true }, 
    { stat: "CD_Red",     descStrPosNeg: "CDRed",    isClr: true }, 
    { stat: "CD_Green",   descStrPosNeg: "CDGreen",  isClr: true }, 
    { stat: "CD_Yellow",  descStrPosNeg: "CDYellow", isClr: true }, 
    { stat: "CD_Purple",  descStrPosNeg: "CDPurple", isClr: true }, 
    { stat: "CD_Tracker", descStrPosNeg: "",         isClr: false }, 
  ];

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

class AbstractTxtBuilder {
  target = CharConstants.empty;

  constructor(target) {
    if (new.target === AbstractTxtBuilder) {
      throw new TypeError("Cannot construct abstract AbstractTxtBuilder instances directly.");
    }

    this.target = target;
  }

  build() {
    throw new Error("Cannot call abstract AbstractTxtBuilder.build() function directly.");
  }
}

// class CubeMainBuilder extends AbstractTxtBuilder {
//   constructor() {
//     super(FileConstants.FILE_PATH_CUBEMAIN);
//   }

//   build() {
//     // do stuff
//   }
// }

// class ItemStatCostBuilder extends AbstractTxtBuilder {
//   constructor() {
//     super(FileConstants.FILE_PATH_ITEMSTATCOST);
//   }

// class PropertiesBuilder extends AbstractTxtBuilder {
//   constructor() {
//     super(FileConstants.FILE_PATH_PROPERTIES);
//   }

//   build() {
//     // do stuff
//   }
// }

// class StatesBuilder extends AbstractTxtBuilder {
//   constructor() {
//     super(FileConstants.FILE_PATH_STATES);
//   }

//   build() {
//     // do stuff
//   }
// }

class CubeMainBuilder {
  target = FileConstants.FILE_PATH_CUBEMAIN;

  build() {
    // do stuff
  }
}

class ItemStatCostBuilder {
  target = FileConstants.FILE_PATH_ITEMSTATCOST;

  build() {
    this.addDyes();
  }
  
  addDyes() {
    let file = D2RMM.readTsv(this.target);

    let id = file.rows.length
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
    // do stuff
  }
}

class StatesBuilder {
  target = FileConstants.FILE_PATH_STATES;

  build() {
    // do stuff
  }
}


//=====================================//
//   Color Dye Builders - JSON Files   //
//=====================================//

class ItemModifiersBuilder extends AbstractJsonBuilder {
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
    // (new      CubeMainBuilder()).build(); // Cube recipes
    (new  ItemStatCostBuilder()).build(); // Item stat values and shop costs
    // (new    PropertiesBuilder()).build(); // Item property names
    // (new        StatesBuilder()).build(); // Game states
    (new ItemModifiersBuilder()).build(); // Modifiers on items: "Color Dyed: xxx"
  }
}

let mod = new ColorDyeBuilder();
mod.build();
