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

class EndgameConstants {
  static essences = [
    { id: "tes", name: "Twisted Essence of Suffering"     }, // Twisted Essence of Suffering
    { id: "ceh", name: "Charged Essense of Hatred"        }, // Charged Essense of Hatred
    { id: "bet", name: "Burning Essence of Terror"        }, // Burning Essence of Terror
    { id: "fed", name: "Festering Essence of Destruction" }, // Festering Essence of Destruction
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
}

class CubeMainBuilder extends AbstractTxtBuilder {
  build() {
    if ( !config.ShouldDyeWithEssences 
      && !config.ShouldDyeWithGems) {
      return;
    }

    // do stuff
  }
}

class ItemStatCostBuilder extends AbstractTxtBuilder {
  constructor() {
    super(FileConstants.FILE_PATH_ITEMSTATCOST);
  }

  build() {
    if ( !config.ShouldDyeWithEssences 
      && !config.ShouldDyeWithGems) {
      return;
    }

    // do stuff
  }
}

class PropertiesBuilder extends AbstractTxtBuilder {
  build() {
    if ( !config.ShouldDyeWithEssences 
      && !config.ShouldDyeWithGems) {
      return;
    }

    // do stuff
  }
}

class StatesBuilder extends AbstractTxtBuilder {
  build() {
    if ( !config.ShouldDyeWithEssences 
      && !config.ShouldDyeWithGems) {
      return;
    }

    // do stuff
  }
}


//=====================================//
//   Color Dye Builders - JSON Files   //
//=====================================//

// class AbstractJsonBuilder {
//   target = CharConstants.empty;

//   constructor(target) {
//     if (new.target === AbstractJsonBuilder) {
//       throw new TypeError("Cannot construct abstract AbstractJsonBuilder instances directly.");
//     }

//     this.target = target;
//   }
// }

class ItemModifiersBuilder {
// class ItemModifiersBuilder extends AbstractJsonBuilder {
//   constructor() {
//     super(FileConstants.FILE_PATH_ITEM_MODIFIERS);
//   }
  target = FileConstants.FILE_PATH_ITEM_MODIFIERS;

  build() {
    if ( !config.ShouldDyeWithEssences 
      && !config.ShouldDyeWithGems) {
      return;
    }

    this.addDyes();
  }

  addDyes() {
    let dyeList = [ // order/ids match the original ColorDye item-modifiers.json file
      { id: 48000, name: "White",  clr: ColorConstants.white  },
      { id: 48001, name: "Black",  clr: ColorConstants.gray   },
      { id: 48002, name: "Blue",   clr: ColorConstants.blue   },
      { id: 48003, name: "Red",    clr: ColorConstants.red    },
      { id: 48004, name: "Green",  clr: ColorConstants.green  },
      { id: 48005, name: "Yellow", clr: ColorConstants.yellow },
      { id: 48006, name: "Purple", clr: ColorConstants.purple },
    ];

    let file = D2RMM.readJson(this.target); // copy existing file
    dyeList.forEach(dye => { 
      file.push(this.createNewDyeModifier(dye));
    });
    D2RMM.writeJson(this.target, file); // overwrite existing file with new file
  }

  createNewDyeModifier(dye) {
    let newMod = {};

    Object.values(FileConstants.jsonProperties).forEach(prop => {
      if (prop === FileConstants.jsonProperties.id) {
        newMod[prop] = dye.id;
      }
      else if (prop === FileConstants.jsonProperties.key) {
        newMod[prop] = `CD${dye.name}`
      }
      else {
        newMod[prop] = `${ColorConstants.gold}Color Dyed: ${dye.clr}${dye.name}`;
      }
    });

    return newMod;
  }
};


//=========================================//
//   Color Dye Builders - Master Builder   //
//=========================================//

class ColorDyeBuilder {
  build() {
    // (new      CubeMainBuilder()).build(); // Cube recipes
    // (new  ItemStatCostBuilder()).build(); // Item stats
    // (new    PropertiesBuilder()).build(); // Item property names
    // (new        StatesBuilder()).build(); // Game states
    (new ItemModifiersBuilder()).build(); // Modifiers on items: "Color Dyed: xxx"
  }
}

let mod = new ColorDyeBuilder();
mod.build();
