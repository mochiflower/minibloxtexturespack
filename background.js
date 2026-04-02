const URL_MAP = {
  "||miniblox.*assets/default-DKNlYibk.png": "https://i.imgur.com/IiTmJ.jpg",
  "||miniblox.*textures/entity/chicken/chicken.png": "https://t.novaskin.me/fca1ab0bd210b9dec73befefbd709b62a68db4d01dd758327f222cd1c7a5382a",
  "||miniblox.*textures/entity/cow/cow.png": "https://t.novaskin.me/340992e52fe08a69cb7f03aa7682468ce1437d189c661edfe33d463d325b8eac",
  "||miniblox.*textures/entity/creeper/creeper.png": "https://t.novaskin.me/f04703624aa3bf4ce77a3ad13051c593ddbe4a0b8a91f45bc2d0079160ab92cc",
  "||miniblox.*textures/entity/pig/pig.png": "https://t.novaskin.me/9b46029e0cefccf776713597eb7af640c62b2a36ce77d489f058ac19129f951a", 
  "||miniblox.*textures/entity/sheep/sheep_fur.png": "https://t.novaskin.me/98380b50bbffcaa1ace6a3e3b4eff9b293998d66160e844bda8da14794bb84a8",
  "||miniblox.*textures/entity/skeleton/skeleton.png": "https://t.novaskin.me/8e8d5110b703b976e7bcc12068dd4b9cfb73bf8ab9b38d5f3f306aa93667b692",
  "||miniblox.*textures/entity/slime/slime.png": "https://t.novaskin.me/4e261b07db3bed12737e5e3c04b8011fcd3394911aa52ef10ee142cccbd6c89f",
  "||miniblox.*textures/entity/spider/spider.png": "https://t.novaskin.me/bd1f8c2353f550806bb1825a869dabcae450d52378a80b8ffcab35fca3e8e6c7",
  "||miniblox.*textures/entity/zombie/zombie.png": "https://t.novaskin.me/44310b5c8b5294898bee8c50386046d3e33bbd3fd6f8ac631b439820834a5a1c",
  "||miniblox.*textures/entity/ghost/ghost.png": "https://t.novaskin.me/93dd9e2a6b60228acc62c70e418e5dbcd2a9b1353374ab3b95305a0201f42afb",
  "||miniblox.*textures/entity/zombie_cowman/zombie_cowman.png": "https://t.novaskin.me/9a0ade1a3da5e97da922070ed617ed804e9c6819aedf5add7ebcc3c7b5186f29",
  "||miniblox.*textures/entity/snowman/snowman.png": "https://t.novaskin.me/f012164b6b9b23d12a816523edd7b28f1c2f84eddb90639251e0657d5518c913",
  "||miniblox.*textures/entity/arrow.png": "https://t.novaskin.me/85155e568c92a35d2ad7aa255fe20447d37cff6cbbd7dc94146524c2398ba91e",
  "||miniblox.*textures/misc/enchanted_item_glint.png": "https://t.novaskin.me/df09d729624122bad23a03cc503b132167c2a9b2ad6859a8db60cbf70459d6f6"
};

let rules = [];
let idx = 1;

for (const [src, dst] of Object.entries(URL_MAP)) {
  rules.push({
    "id": idx++,
    "action": {
      "type": "redirect",
      "redirect": { "url": dst }
    },
    "condition": {
      "urlFilter": src,
      "resourceTypes": src.endsWith(".otf") ? ["font"] : ["image"]
    }
  });
}

chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: rules,
    removeRuleIds: rules.map(rule => rule.id)
  },
  () => {
    if (chrome.runtime.lastError) {
      console.error("Error updating:", chrome.runtime.lastError);
    } else {
      console.log("Rules updated");
    }
  }
);

