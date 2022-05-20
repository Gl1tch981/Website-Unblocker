$(document).ready(function() {

    biUrls = {
      "items": {
        "urls": {
          "BRVM8RNWLXH1": "https://www.xbox.com/games/ace-combat-7-skies-unknown",
          "BW66X01WB2S8": "https://www.xbox.com/games/ace-combat-7-skies-unknown",
          "9MV56M8KK8WL": "https://www.xbox.com/games/age-of-empires-iv<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "BP9JQBJM0FNW": "https://www.xbox.com/games/anthem",
          "BV3M56BLPF8G": "https://www.xbox.com/games/anthem",
          "BV9ML45J2Q5V": "https://www.xbox.com/games/apex-legends",
          "9N3945F5H1QQ": "https://www.xbox.com/games/apex-legends",
          "9P4BFMSVNDS1": "https://www.xbox.com/games/apex-legends",
          "9MXPBVP26FGQ": "https://www.xbox.com/games/apex-legends",
          "C033FJRLPZVP": "https://www.xbox.com/games/assassins-creed-odyssey<exc>AR-AE, AR-SA, JA-JP, TR-TR",
          "BNC504GRS0SD": "https://www.xbox.com/games/assassins-creed-odyssey<exc>AR-AE, AR-SA, JA-JP, TR-TR",
          "BW9TWC8L4JCS": "https://www.xbox.com/games/assassins-creed-odyssey<exc>AR-AE, AR-SA, JA-JP, TR-TR",
          "C3LC9H239V2W": "https://www.xbox.com/games/assassins-creed-odyssey<exc>AR-AE, AR-SA, JA-JP, TR-TR",
          "BNF5Q9ZSD84Z": "https://www.xbox.com/games/assassins-creed-odyssey<exc>AR-AE, AR-SA, JA-JP, TR-TR",
          "BRQGNR1PZHP4": "https://www.xbox.com/games/assassins-creed-odyssey<exc>AR-AE, AR-SA, JA-JP, TR-TR",
          "9P4NJFH17MRT": "https://www.xbox.com/games/assassins-creed-valhalla",
          "9N91XSTFCHRQ": "https://www.xbox.com/games/assassins-creed-valhalla",
          "9N37LQMRHKN4": "https://www.xbox.com/games/assassins-creed-valhalla",
          "9NPBNN3DKZLJ": "https://www.xbox.com/games/assassins-creed-valhalla",
          "9NN57T22Z757": "https://www.xbox.com/games/assassins-creed-valhalla",
          "9N325RR1CXC8": "https://www.xbox.com/games/assassins-creed-valhalla",
          "9P5DB49C03W6": "https://www.xbox.com/games/atlas<exc>ja-jp, ko-kr",
          "9P5GSH8DLB28": "https://www.xbox.com/games/back-4-blood<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9PFB16V5492H": "https://www.xbox.com/games/back-4-blood<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9ND4WZR83HMR": "https://www.xbox.com/games/back-4-blood<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9PBGBFL3504L": "https://www.xbox.com/games/balan-wonderworld",
          "C2B4T86TXLRS": "https://www.xbox.com/games/bards-tale-iv-directors-cut<exc>ja-JP",
          "9NKGMNKRFN5Q": "https://www.xbox.com/games/battlefield-2042<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9MZ6SR8HR5CS": "https://www.xbox.com/games/battlefield-2042<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9PK077NP44X2": "https://www.xbox.com/games/battlefield-2042<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9PHN3JW0TZQ7": "https://www.xbox.com/games/battlefield-2042<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9N442DM2MD6F": "https://www.xbox.com/games/battlefield-v",
          "9NZKJ17BBH50": "https://www.xbox.com/games/battlefield-v/",
          "9N7GCF5SGCXC": "https://www.xbox.com/games/battletoads<exc>ja-jp",
          "BSN8BS8F8BBJ": "https://www.xbox.com/games/biomutant",
          "C1BBTRVB6BLF": "https://www.xbox.com/games/black-desert<exc>ar-ae, ar-sa, en-au, en-hk, en-in, en-nz, en-sg, es-ar, es-cl, es-co, es-mx, he-il, ja-jp, ko-kr, pt-br, zh-hk, zh-tw",
          "BR5134KX2SJ0": "https://www.xbox.com/games/black-desert<exc>ar-ae, ar-sa, en-au, en-hk, en-in, en-nz, en-sg, es-ar, es-cl, es-co, es-mx, he-il, ja-jp, ko-kr, pt-br, zh-hk, zh-tw",
          "BS0J9C1HRPGH": "https://www.xbox.com/games/black-desert<exc>ar-ae, ar-sa, en-au, en-hk, en-in, en-nz, en-sg, es-ar, es-cl, es-co, es-mx, he-il, ja-jp, ko-kr, pt-br, zh-hk, zh-tw",
          "9P3GFH1DX3CK": "https://www.xbox.com/games/black-desert<exc>ar-ae, ar-sa, en-au, en-hk, en-in, en-nz, en-sg, es-ar, es-cl, es-co, es-mx, he-il, ja-jp, ko-kr, pt-br, zh-hk, zh-tw",
          "9N0ZJTH4LPLK": "https://www.xbox.com/games/black-desert<exc>ar-ae, ar-sa, en-au, en-hk, en-in, en-nz, en-sg, es-ar, es-cl, es-co, es-mx, he-il, ja-jp, ko-kr, pt-br, zh-hk, zh-tw",
          "9NS9GT6FR6QC": "https://www.xbox.com/games/bleeding-edge",
          "BNT976QZJC80": "https://www.xbox.com/games/bless-unleashed",
          "C34NB0F1B5WQ": "https://www.xbox.com/games/borderlands-3<exc>EN-ZA, TR-TR",
          "9MV5SG2QHX8W": "https://www.xbox.com/games/call-of-duty-black-ops-cold-war<exc>ko-kr",
          "9N41CR72ZVSL": "https://www.xbox.com/games/call-of-duty-black-ops-cold-war<exc>ko-kr",
          "9NKRZ9PL3FJ4": "https://www.xbox.com/games/call-of-duty-black-ops-cold-war<exc>ko-kr",
          "C5DTJ99626K3": "https://www.xbox.com/games/call-of-duty-modern-warfare",
          "9NVD608BD8VC": "https://www.xbox.com/games/call-of-duty-modern-warfare",
          "9NVQBQ3F6W9W": "https://www.xbox.com/games/call-of-duty-modern-warfare",
          "C4Q7K19Q0VBZ": "https://www.xbox.com/games/code-vein",
          "9PF609V03NSX": "https://www.xbox.com/games/code-vein",
          "9NXR6469DM2P": "https://www.xbox.com/games/crackdown-3<exc>JA-JP",
          "C27XPR5XDMFT": "https://www.xbox.com/games/crash-bandicoot-n-sane-trilogy",
          "BQRB60PW2SDL": "https://www.xbox.com/games/crash-team-racing-nitro-fueled<exc>en-hk, en-sg, ja-jp, ko-kr, tr-tr, zh-hk, zh-tw",
          "9NJRX71M5X9P": "https://www.xbox.com/games/cuphead<exc>ko-kr",
          "BX3M8L83BBRW": "https://www.xbox.com/games/cyberpunk-2077",
          "BSVZCMGZV52L": "https://www.xbox.com/games/darksiders-III<exc>EN-SG, JA-JP, KO-KR",
          "C568X8SS5Q2T": "https://www.xbox.com/games/darksiders-III<exc>EN-SG, JA-JP, KO-KR",
          "BXZXM945LV54": "https://www.xbox.com/games/darksiders-III<exc>EN-SG, JA-JP, KO-KR",
          "BPQ955FQFPH6": "https://www.xbox.com/games/destiny-2<exc>ko-kr",
          "9NXXNTRZBS0Z": "https://www.xbox.com/games/destiny-2<exc>ko-kr",
          "9PPKG719QWH7": "https://www.xbox.com/games/devil-may-cry-5",
          "9PL7K5VQ9M77": "https://www.xbox.com/games/devil-may-cry-5",
          "BNDJXN87R0C0": "https://www.xbox.com/games/devil-may-cry-5",
          "BZK7KMB1PCLL": "https://www.xbox.com/games/devil-may-cry-5",
          "BXJKZ1WWHT9V": "https://www.xbox.com/games/devil-may-cry-5",
          "9PN1KCHT4WB5": "https://www.xbox.com/games/diablo-2-resurrected<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9PP4MWX0P4S0": "https://www.xbox.com/games/diablo-2-resurrected<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9N5V10LKDRPQ": "https://www.xbox.com/games/diablo-2-resurrected<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9MVN0W2374DD": "https://www.xbox.com/games/dirt-5",
          "9P8T8F2C26HC": "https://www.xbox.com/games/dirt-5",
          "BVQ3V30ZXVT5": "https://www.xbox.com/games/division-2",
          "BZQD437RJ0FX": "https://www.xbox.com/games/division-2",
          "BX1XTXKC18QP": "https://www.xbox.com/games/division-2",
          "C1BP73HRFT2P": "https://www.xbox.com/games/doom-eternal",
          "9MW61SW6H24J": "https://www.xbox.com/games/doom-eternal",
          "C0DGJD9BNJ73": "https://www.xbox.com/games/doom-eternal",
          "BZRK5C951KK7": "https://www.xbox.com/games/dragon-ball-fighterz",
          "C1LT7S106KZH": "https://www.xbox.com/games/dragon-ball-fighterz",
          "BPBZVTWFWS8F": "https://www.xbox.com/games/dragon-ball-fighterz",
          "BT5X0XGCWGD6": "https://www.xbox.com/games/dragon-ball-z-kakarot/",
          "9P9KP4WTMN5M": "https://www.xbox.com/games/dragon-ball-z-kakarot/",
          "9NRF1RCK2S8T": "https://www.xbox.com/games/dragon-ball-z-kakarot/",
          "9P570PB7BLNQ": "https://www.xbox.com/games/dragon-ball-z-kakarot/",
          "9PBDC0XZ8TXK": "https://www.xbox.com/games/dragon-quest-xi-s-echoes-of-an-elusive-age",
          "9NQZKQ65B8B3": "https://www.xbox.com/games/dying-light-2<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9P52DKFXV26C": "https://www.xbox.com/games/dying-light-2<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9P503B7T9QN5": "https://www.xbox.com/games/dying-light-2<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "BRKX5CRMRTC2": "https://www.xbox.com/games/elder-scrolls-online<exc>ES-AR, JA-JP, KO-KR, RU-RU",
          "C16HHTC9K79C": "https://www.xbox.com/games/elder-scrolls-online/",
          "BWNMZQ5CC5X5": "https://www.xbox.com/games/elder-scrolls-online/",
          "C0HKS76KK9Z8": "https://www.xbox.com/games/elder-scrolls-online/",
          "BQQ4XWFQPVHJ": "https://www.xbox.com/games/elder-scrolls-online/",
          "9NTBP4HV6P9V": "https://www.xbox.com/games/elder-scrolls-online/",
          "9N4XSWV9735L": "https://www.xbox.com/games/elder-scrolls-online/",
          "BS6WJ2L56B10": "https://www.xbox.com/games/fallout-76<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "BX3DSPQPVNQR": "https://www.xbox.com/games/fallout-76<exc>ja-jp",
          "9N8X5ZJBLQ1W": "https://www.xbox.com/games/fallout-76<exc>ja-jp",
          "9MVH9GNCTNQC": "https://www.xbox.com/games/fallout-76<exc>ja-jp",
          "9NZFM7CCKQ6R": "https://www.xbox.com/games/fallout-76<exc>ja-jp",
          "BP84LRZPDF7M": "https://www.xbox.com/games/fallout-76<exc>ja-jp",
          "9NVSDJFVSJTS": "https://www.xbox.com/games/fallout-76<exc>ja-jp",
          "9NKGNMNK3K3Z": "https://www.xbox.com/games/fallout-76<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "BR7X7MVBBQKM": "https://www.xbox.com/games/far-cry-5<exc>AR-AE, AR-SA, JA-JP",
          "9PP8XSN4PZQR": "https://www.xbox.com/games/Far-Cry-6<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9NP1699D9GRR": "https://www.xbox.com/games/Far-Cry-6<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9N22613XJ75F": "https://www.xbox.com/games/Far-Cry-6<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9N51CNXPNSBN": "https://www.xbox.com/games/fifa-21",
          "9NX7RF87CMFG": "https://www.xbox.com/games/fifa-21",
          "9PPBVTPB6X13": "https://www.xbox.com/games/fifa-21",
          "9N4DNRXMJ381": "https://www.xbox.com/games/fifa-21",
          "C38MX3F0KZ8Z": "https://www.xbox.com/games/final-fantasy-xv",
          "BNMRPFLB3PQW": "https://www.xbox.com/games/final-fantasy-xv",
          "BT5P2X999VH2": "https://www.xbox.com/games/fortnite<exc>en-hk, en-in, en-sg, ja-jp, ko-kr, zh-hk, zh-tw",
          "9N3NK5WW05HT": "https://www.xbox.com/games/forza-7",
          "9NSNSBW1JTJX": "https://www.xbox.com/games/forza-7",
          "9NV34NLCLG81": "https://www.xbox.com/games/forza-7",
          "9PNQKHFLD2WQ": "https://www.xbox.com/games/forza-horizon-4",
          "9PHKXB8RDKBC": "https://www.xbox.com/games/forza-horizon-4",
          "9P083RDJ4CBM": "https://www.xbox.com/games/forza-horizon-4",
          "9PNJXVCVWD4K": "https://www.xbox.com/games/forza-horizon-4",
          "9P7JJ1FKQWXH": "https://www.xbox.com/games/forza-horizon-4",
          "9P513P4MWC71": "https://www.xbox.com/games/forza-horizon-4",
          "9NKX70BBCDRN": "https://www.xbox.com/games/forza-horizon-5<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9MTLKM2DJMZ2": "https://www.xbox.com/games/forza-horizon-5<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9P1HX37NMJLT": "https://www.xbox.com/games/forza-horizon-5<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9MZ0SR207MG8": "https://www.xbox.com/games/forza-horizon-5<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "C2KDNLT2H7DM": "https://www.xbox.com/games/gears-5",
          "9NBLGGH4PBBM": "https://www.xbox.com/games/gears-of-war-4",
          "C3VVNLQQ54F8": "https://www.xbox.com/games/ghost-recon-breakpoint<exc>ja-jp",
          "9PJTHRNVH62H": "https://www.xbox.com/games/grounded",
          "BPJ686W6S0NH": "https://www.xbox.com/games/gta-v<exc>ja-jp",
          "C496CLVXMJP8": "https://www.xbox.com/games/gta-v<exc>ja-jp",
          "BV073NP0Q3XL": "https://www.xbox.com/games/gta-v<exc>ja-jp",
          "BQ5KC1NMPP8P": "https://www.xbox.com/games/gta-v<exc>ja-jp",
          "C54H8FDKTJPG": "https://www.xbox.com/games/gta-v<exc>ja-jp",
          "C2PN98HX8DSR": "https://www.xbox.com/games/gta-v<exc>ja-jp",
          "C1F1ZG7PZV4B": "https://www.xbox.com/games/gta-v<exc>ja-jp",
          "9P8DL6W0JBB8": "https://www.xbox.com/games/hades<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9MT8PTGVHX2P": "https://www.xbox.com/games/halo-the-master-chief-collection",
          "9N65BB0LJP3W": "https://www.xbox.com/games/Hello-Neighbor-2<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "BPQKC5TH07XF": "https://www.xbox.com/games/hitman-2<exc>ja-jp",
          "BRWRL73QBQN0": "https://www.xbox.com/games/hitman-2<exc>ja-jp",
          "9NNRGSSS2VS3": "https://www.xbox.com/games/hitman-3<exc>ja-jp",
          "9P7H3MQPMB75": "https://www.xbox.com/games/hitman-3<exc>ja-jp",
          "BPKVH4C4XV4N": "https://www.xbox.com/games/injustice-2",
          "BQQWKGXZGJ17": "https://www.xbox.com/games/injustice-2",
          "BRVF0X6ZXLBB": "https://www.xbox.com/games/injustice-2",
          "9N7RXHK6FN5B": "https://www.xbox.com/games/just-cause-4<exc>JA-JP, KO-KR",
          "9NBL72W4SZLV": "https://www.xbox.com/games/just-cause-4<exc>JA-JP, KO-KR",
          "9P9MC8B7R5FP": "https://www.xbox.com/games/just-cause-4<exc>JA-JP, KO-KR",
          "C08MW8XHQN9G": "https://www.xbox.com/games/kingdom-hearts-iii<exc>ko-KR",
          "9NX3P62G0WNC": "https://www.xbox.com/games/madden-21",
          "9MXL04BKF6PL": "https://www.xbox.com/games/madden-21",
          "9PBLVTGXLV7D": "https://www.xbox.com/games/madden-21",
          "9NTFD9Z6DCFL": "https://www.xbox.com/games/madden-21",
          "9PMQK6DG58D7": "https://www.xbox.com/games/madden-21",
          "9NL8CDTLHMB5": "https://www.xbox.com/games/madden-21",
          "9N8C9MNVQ8GS": "https://www.xbox.com/games/madden-21",
          "9PGXDSNWVSR1": "https://www.xbox.com/games/marvels-avengers",
          "BRX6HS1G5CDK": "https://www.xbox.com/games/marvels-avengers",
          "9N7LB4DCKLFS": "https://www.xbox.com/games/marvels-avengers",
          "BQPG2509CVJP": "https://www.xbox.com/games/mega-man/",
          "BS7R6V943794": "https://www.xbox.com/games/mega-man/",
          "C4VFVZGF3480": "https://www.xbox.com/games/mega-man/",
          "C21CVHMQ3ZZ7": "https://www.xbox.com/games/mega-man/",
          "BNTDMDCHX2M7": "https://www.xbox.com/games/mega-man/",
          "C38Z8L4RHSHS": "https://www.xbox.com/games/mega-man/",
          "C1TBTQBVJMFL": "https://www.xbox.com/games/metro-exodus<exc>ja-jp",
          "C2W8ZSC68VRH": "https://www.xbox.com/games/metro-exodus<exc>ja-jp",
          "C3BVG9LGGV75": "https://www.xbox.com/games/metro-exodus<exc>ja-jp",
          "9NQS8GH73B82": "https://www.xbox.com/games/microsoft-flight-simulator<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9NXN8GF8N9HT": "https://www.xbox.com/games/microsoft-flight-simulator<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9P382HPK14D1": "https://www.xbox.com/games/microsoft-flight-simulator<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9N8NNL97Q7RJ": "https://www.xbox.com/games/microsoft-flight-simulator<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9NX3HZZRSR4K": "https://www.xbox.com/games/microsoft-flight-simulator<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9PMDBL7963LD": "https://www.xbox.com/games/microsoft-flight-simulator<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9NBLGGH537BL": "https://www.xbox.com/games/minecraft",
          "9N8NJ74FZTG9": "https://www.xbox.com/games/minecraft-dungeons",
          "9NT49K2RZRMC": "https://www.xbox.com/games/minecraft-dungeons",
          "BNG91PT95LQN": "https://www.xbox.com/games/monster-hunter-world<exc>en-hk, en-sg, ja-jp, ko-kr, zh-hk, zh-tw",
          "C59XN50KM4D2": "https://www.xbox.com/games/monster-hunter-world<exc>en-hk, en-sg, ja-jp, ko-kr, zh-hk, zh-tw",
          "BNS4NCFZJDB0": "https://www.xbox.com/games/monster-hunter-world<exc>en-hk, en-sg, ja-jp, ko-kr, zh-hk, zh-tw",
          "BTHQ42GWNT93": "https://www.xbox.com/games/monster-hunter-world<exc>en-hk, en-sg, ja-jp, ko-kr, zh-hk, zh-tw",
          "BTC0L0BW6LWC": "https://www.xbox.com/games/mortal-kombat-11<exc>ko-KR, ja-jp",
          "C27H4156M7BF": "https://www.xbox.com/games/mortal-kombat-11<exc>ko-KR, ja-jp",
          "9P9KN2G4M2W0": "https://www.xbox.com/games/nba-2k20",
          "9P0Q1F7P0KR1": "https://www.xbox.com/games/nba-2k21",
          "9NQRJS6F3PGT": "https://www.xbox.com/games/nba-2k21",
          "9P67WG3M27N9": "https://www.xbox.com/games/nba-2k21",
          "BPPZVT8BZ15N": "https://www.xbox.com/games/nier-automata<exc>ar-sa",
          "9N8CD0XZKLP4": "https://www.xbox.com/games/ori-will-of-the-wisps",
          "9P2Q994ZWB64": "https://www.xbox.com/games/overwatch<exc>ja-JP",
          "C1C4DZJPBC2V": "https://www.xbox.com/games/overwatch",
          "9P1RSQ5MGPCR": "https://www.xbox.com/games/phantasy-star-online-2-new-genesis<exc>ja-jp",
          "9P533BT2GJ9W": "https://www.xbox.com/games/phantasy-star-online-2<exc>ar-ae, ar-sa, fr-be, ja-jp, ko-kr, nl-be, nl-nl",
          "9N9KDNWTFCWH": "https://www.xbox.com/games/phantasy-star-online-2<exc>ar-ae, ar-sa, fr-be, ja-jp, ko-kr, nl-be, nl-nl",
          "9N54X4GL81ZC": "https://www.xbox.com/games/phantasy-star-online-2<exc>ar-ae, ar-sa, fr-be, ja-jp, ko-kr, nl-be, nl-nl",
          "9NR7R9MN78Z9": "https://www.xbox.com/games/phantasy-star-online-2<exc>ar-ae, ar-sa, fr-be, ja-jp, ko-kr, nl-be, nl-nl",
          "9PFX3QW804TF": "https://www.xbox.com/games/phantasy-star-online-2<exc>ar-ae, ar-sa, fr-be, ja-jp, ko-kr, nl-be, nl-nl",
          "9PG3RX1SSFWF": "https://www.xbox.com/games/phantasy-star-online-2<exc>ar-ae, ar-sa, fr-be, ja-jp, ko-kr, nl-be, nl-nl",
          "9PPK8NMCJTN0": "https://www.xbox.com/games/phantasy-star-online-2<exc>ar-ae, ar-sa, fr-be, ja-jp, ko-kr, nl-be, nl-nl",
          "9P0DS62WSJZH": "https://www.xbox.com/games/phantasy-star-online-2<exc>ar-ae, ar-sa, fr-be, ja-jp, ko-kr, nl-be, nl-nl",
          "C0MN5DN8KR3F": "https://www.xbox.com/games/playerunknowns-battlegrounds",
          "9NBR2VXT87SJ": "https://www.xbox.com/games/psychonauts-2<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "C2DCJ95ZXBMS": "https://www.xbox.com/games/rage-2<exc>AR-AE, AR-SA, JA-JP, KO-KR",
          "BNWCTF2JTDTB": "https://www.xbox.com/games/rage-2<exc>AR-AE, AR-SA, JA-JP, KO-KR",
          "C12T09DSVP8J": "https://www.xbox.com/games/rainbow-six-siege",
          "BSK5FNCFN256": "https://www.xbox.com/games/rainbow-six-siege",
          "BWWLS19KBK7X": "https://www.xbox.com/games/rainbow-six-siege",
          "BVPSP8DBJGNG": "https://www.xbox.com/games/rainbow-six-siege",
          "9P30K2NXWH82": "https://www.xbox.com/games/rainbow-six-siege",
          "9PBH7HWC5C26": "https://www.xbox.com/games/rainbow-six-siege",
          "9P5S6PBQ10C2": "https://www.xbox.com/games/rainbow-six-siege",
          "BPSWGQBW7R3G": "https://www.xbox.com/games/red-dead-redemption-2<exc>JA-JP ",
          "BWMH951M3G3P": "https://www.xbox.com/games/resident-evil-2",
          "BZ271JBBZ9DC": "https://www.xbox.com/games/resident-evil-2",
          "9PLJWXG6ZKVQ": "https://www.xbox.com/games/resident-evil-3",
          "BQ1TN1T79V9K": "https://www.xbox.com/games/roblox",
          "BPHSZ44NGDB2": "https://www.xbox.com/games/rogue-company<exc>en-hk, ja-jp, zh-hk, zh-tw",
          "9N8D81THZX4K": "https://www.xbox.com/games/rogue-company<exc>en-hk, ja-jp, zh-hk, zh-tw",
          "9N3KGL9CKB6L": "https://www.xbox.com/games/scarlet-nexus<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9NKMV8PSF735": "https://www.xbox.com/games/scarlet-nexus<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9P2N57MC619K": "https://www.xbox.com/games/sea-of-thieves<exc>ja-jp",
          "9PCD5S0DMF5Z": "https://www.xbox.com/games/sea-of-thieves<exc>ja-jp",
          "BQD5WRRP2D6Q": "https://www.xbox.com/games/sekiro-shadows-die-twice<exc>en-hk, en-sg, ja-jp, ko-kr, zh-hk, zh-tw",
          "BRVK4W7RVCXR": "https://www.xbox.com/games/shadow-of-the-tomb-raider<exc>JA-JP, KO-KR",
          "BNQQ3WVBNZCQ": "https://www.xbox.com/games/shadow-of-the-tomb-raider<exc>JA-JP, KO-KR",
          "C2XNSJZQL5FT": "https://www.xbox.com/games/shadow-of-the-tomb-raider<exc>JA-JP, KO-KR",
          "C3V22FQD8N84": "https://www.xbox.com/games/soulcalibur-vi",
          "BR0PF83JQV5R": "https://www.xbox.com/games/soulcalibur-vi",
          "9NG5L58FD3X5": "https://www.xbox.com/games/spiritfarer",
          "9PMX5GK3GKGQ": "https://www.xbox.com/games/stalker-2<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9N8QT1P92R1G": "https://www.xbox.com/games/stalker-2<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9NZ2FGCWDP2Q": "https://www.xbox.com/games/stalker-2<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "C0GWTPD0S8S1": "https://www.xbox.com/games/star-wars-battlefront-II",
          "C2CSDTSCBZ0C": "https://www.xbox.com/games/star-wars-jedi-fallen-order",
          "C1KGCT464VSF": "https://www.xbox.com/games/star-wars-jedi-fallen-order",
          "BV9CWVQWNS4P": "https://www.xbox.com/games/star-wars-squadrons",
          "9NRGSJRMFLJQ": "https://www.xbox.com/games/star-wars-squadrons",
          "9NT4X7P8B9NB": "https://www.xbox.com/games/state-of-decay-2<exc>ja-jp",
          "9N62NTMD3336": "https://www.xbox.com/games/Tales-of-Arise<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9PGZ228CCTTB": "https://www.xbox.com/games/Tales-of-Arise<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9N7L69Q6FRZM": "https://www.xbox.com/games/Tales-of-Arise<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "BZBX8JFCDBPR": "https://www.xbox.com/games/tales-of-vesperia",
          "9NF83PRZK6K3": "https://www.xbox.com/games/tell-me-why",
          "9PPBVK3TK83M": "https://www.xbox.com/games/tetris-effect-connected",
          "9N8J0T5HCDB9": "https://www.xbox.com/games/the-falconeer",
          "9PLKR7KMQ6X4": "https://www.xbox.com/games/the-medium<exc>ja-jp",
          "BVTKN6CQ8W5F": "https://www.xbox.com/games/the-outer-worlds",
          "9N8XHNXGNZB5": "https://www.xbox.com/games/tony-hawks-pro-skater-1-2",
          "9N7MWWD6TP75": "https://www.xbox.com/games/tony-hawks-pro-skater",
          "BQ9T0JF0D3L4": "https://www.xbox.com/games/wasteland-3<exc>AR-SA, JA-JP, KO-KR",
          "9NG2DR7WVF5P": "https://www.xbox.com/games/wasteland-3<exc>ja-jp, ko-kr",
          "9NGH1FK0RJGL": "https://www.xbox.com/games/wasteland-remastered",
          "BS4DG5PLXMPJ": "https://www.xbox.com/games/watch-dogs-legion<exc>ar-ae,ar-sa",
          "C1WRX8ZD77M9": "https://www.xbox.com/games/watch-dogs-legion<exc>ar-ae,ar-sa",
          "9N5V65564VWJ": "https://www.xbox.com/games/watch-dogs-legion<exc>ar-ae,ar-sa",
          "9PBTMJ6PW9MK": "https://www.xbox.com/games/watch-dogs-legion<exc>ar-ae,ar-sa",
          "BRS451NNNSGB": "https://www.xbox.com/games/watch-dogs-legion<exc>ar-ae,ar-sa",
          "C3WKRXK2N2ZP": "https://www.xbox.com/games/watch-dogs-legion<exc>ar-ae,ar-sa",
          "BPR2TBS2KMQJ": "https://www.xbox.com/games/we-happy-few<exc>en-hk, en-sg, ja-jp, ko-kr, zh-hk, zh-tw",
          "BR2T1BL51DS9": "https://www.xbox.com/games/we-happy-few<exc>en-hk, en-sg, ja-jp, ko-kr, zh-hk, zh-tw",
          "BTW6W8X478S6": "https://www.xbox.com/games/we-happy-few<exc>en-hk, en-sg, ja-jp, ko-kr, zh-hk, zh-tw",
          "C4LLMHFQ1BXQ": "https://www.xbox.com/games/wolfenstein-ii-new-colossus<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "C181BBDG2NT5": "https://www.xbox.com/games/wolfenstein-ii-new-colossus<exc>ar-ae,ar-sa,ar-ae,ar-sa,cs-cz,da-dk,de-at,de-ch,de-de,el-gr,en-au,en-ca,en-gb,en-hk,en-ie,en-in,en-nz,en-sg,en-za,es-ar,es-cl,es-co,es-es,es-mx,fi-fi,fr-be,fr-ca,fr-ch,fr-fr,he-il,hu-hu,it-it,ja-jp,ko-kr,nb-no,nl-be,nl-nl,pl-pl,pt-br,pt-pt,ru-ru,sk-sk,sv-se,tr-tr,zh-hk,zh-tw",
          "9NXCSWCQTNFG": "https://www.xbox.com/games/yakuza-like-a-dragon<exc>ar-ae,ar-sa",
          "9P6FF3W7F0DC": "https://www.xbox.com/games/yakuza-like-a-dragon<exc>ar-ae,ar-sa",
          "9NFKLLL69V93": "https://www.xbox.com/games/yakuza-like-a-dragon<exc>ar-ae,ar-sa",
          "9NF464C2W777": "https://www.xbox.com/games/yakuza-like-a-dragon<exc>ar-ae,ar-sa",
          "9P1JNNJD9TGD": "https://www.xbox.com/games/yakuza-like-a-dragon<exc>ar-ae,ar-sa",
          "9MWFTJF7G5XF": "https://www.xbox.com/games/yakuza-like-a-dragon<exc>ar-ae,ar-sa",
          "9P27ZMZ7FDPZ": "https://www.xbox.com/games/call-of-the-sea",
          "9NPKKNBJ258V": "https://www.xbox.com/games/carrion<exc>ko-kr",
          "9MWWNMH6Z0JH": "https://www.xbox.com/games/call-of-duty-warzone",
          "9NDZ7NXFF622": "https://www.xbox.com/games/deaths-door",
          "9NBLGGH3ZB9T": "https://www.xbox.com/games/gears-tactics",
          "9NN3HCKW5TPC": "https://www.xbox.com/games/gears-tactics",
          "BZ8P16VH1GZP": "https://www.xbox.com/games/halo-the-master-chief-collection",
          "9NLGW5MXWKJ6": "https://www.xbox.com/games/halo-the-master-chief-collection",
          "9PGMLVNHR966": "https://www.xbox.com/games/Madden-22",
          "9NNRBCQV631V": "https://www.xbox.com/games/Madden-22",
          "9NNCNM05T8K9": "https://www.xbox.com/games/Madden-22",
          "9NJ2D534L4LP": "https://www.xbox.com/games/Madden-22",
          "9PNF5J31C36N": "https://www.xbox.com/games/mlb-the-show-21<exc>ko-kr",
          "9NC8F83CQB76": "https://www.xbox.com/games/mlb-the-show-21<exc>ko-kr",
          "9MZF8B6N2Q3S": "https://www.xbox.com/games/mlb-the-show-21<exc>ko-kr",
          "9NRV4BFLT958": "https://www.xbox.com/games/mlb-the-show-21<exc>ko-kr",
          "9N2S04LGXXH4": "https://www.xbox.com/games/resident-evil-village",
          "9P1SJ041LF3J": "https://www.xbox.com/games/resident-evil-village",
          "9P9ZV41FG0BZ": "https://www.xbox.com/games/resident-evil-village",
          "9P9JZLNFQ9PT": "https://www.xbox.com/games/second-extinction<exc>JA-JP,KO-KR,ZH-TW",
          "C27QL5JBKQ8M": "https://www.xbox.com/games/the-ascent<exc>ja-jp",
          "9P7KBLT2NQ2N": "https://www.xbox.com/games/tony-hawks-pro-skater-1-2"
        }
      }
    }
    
    gameIdArrays = {};
    
    fullGameArray = ["9NDBG69LCSPJ", "9P0Q38DWP4J8", "BZLN1W2ML7MG", "BZJH18QJVDVW", "BS8M9DCFB5BJ", "BTB6374NZGV3", "BPW3ZBM00G8X", "BR8G5BV9HQ9Q", "C0LLS796HB9G", "BQJVX0XGRHNH", "C121T6H3D233", "BVK0VM761V51", "BVWDCCL77443", "BZ53VHGD3J8Q", "BP2K9G8X3WW0", "C2GMPQD1809D", "BZ7FPSGCCMQQ", "BWTL2NJP5VG9", "C53VZ4C31G6R", "9P9H0RGLL29W", "BSN59ZHCMTRX", "9N9T9KWDC0BN", "BV4BW98S5GX0", "9NHD9TBK2M03", "BQF41W70ZLSV", "BQNGBLLH41P6", "BRL7GC0GP1BM", "BX7LV6RVGZK7", "C0CLMQ17922W", "BTQX4HZ6G5VK", "BV9V78HQ6PK3", "BX3P1BN115JP", "C2GM9K7BK6H2", "BX91DHSR4C5T", "BW0D9LH9GG6D", "C1Q2M0GDC8BM", "C2WF687RW19X", "BQ2NNLQPS8RS", "9P1VGZDD6M16", "BWVBNCMF22ZK", "9N8WL8TMMQBT", "BZR51XD70NKD", "BSQV6Z63N23C", "9MZX6T40V2KD", "C3XCXTFS6FFQ", "BQ2307M831ZG", "BQVB57F5HLRH", "C4K5HB6WRW0C", "BW6ZB59LJRXM", "BTXC8P2WNG1X", "BX6N8R62LHMC", "C1RCCQKPLH7W", "BNZDQD45BSWM", "BTCDB8K2CJ1H", "C0661GLDHZVZ", "BTPHDDMCGP2B", "BZK8NDMJ3F3S", "C03DZ68VZXKL", "C0NPN8N617LD", "BWJJP75ML9TW", "BT060D2W1FX1", "C2NJXP029250", "BNZN7FJ8M3X4", "C4QZ3K528LBQ", "BVTWRTBX5LZZ", "C2SJKSQW03VG", "C1158LCLBV44", "BNW04CBK999N", "C2ZDLHDZ0BWP", "BZNCRSX2J0V3", "C3J65HPFCW4D", "BTZLK948HPSX", "BSRJF8QXR9K4", "C3BZMXLFK5S9", "C1KZ1PCSF2FX", "BQMX1711RV94", "BVD0MSQDJH3V", "BNN0SP86TLV0", "BRSR1RHJ2QPK", "BT80Q9GJ5M64", "C174P718D45K", "BWKH7FS0163X", "C2TRC95968PT", "BZTN4PRB267R", "C364149TH5H6", "BPV1XV5LR8CP", "C51XZFW12T8D", "C2TD3K80R9GZ", "C3K0ZV53970M", "C35J5CRX49L9", "BTWMG1X9PPZB", "C2DWDJW40MRH", "BX3FLX00BGV2", "BNCR23L7NMG7", "C5140GRN09VF", "C2VCPPHVBD4C", "BSRTFTWSZ716", "BRJJ07DQMXRW", "C3XL1172VT6J", "C2J3KR86T10J", "C4MNPL0T17M9", "BTSGBQ7F9HWX", "BXL8WNLHRVWR", "BSZZJZWTFB3T", "C44C084KSK66", "BQNPXR9QNGPD", "BSCTGQ7FTNTJ", "BVMWZ6QSMRS5", "9NMX5QRJM1KJ", "BRVM8RNWLXH1", "C4DZWT2ZJZ2H", "BTPRW6R6XMPR", "C3Z3W9LGQ0BM", "BS6HBZBJ1TWS", "BZZWTQM3JK7Q", "BP8SBPTN8X5C", "9PNNQM55L3JV", "BV8NQFT1CW4D", "BZGT1PLMRBKX", "C3QT3QJ9GZPL", "9N3RM0M3VHD6", "9MZWLWHPT70M", "BW89DZ1S3QDM", "9NGNL7DKFPJS", "9NCLS1NXTKKG", "BWX0VLL96QM3", "BXKZ8TVZ9F28", "9P8PD9XNLH7P", "9PC5VBPLHWNV", "BQSW32RWSJW5", "C4BVWL544Q89", "BPTKRR85P0JW", "9MVHKHR8Z7Q8", "C07NM31J7HLP", "9NQMXCMB6MX1", "9P2VCBLZG73K", "BSRMNB8P5VFF", "BW1V96V2X5XB", "BW8G2QJKJ21S", "BZBVPG572765", "C303DJS3KL57", "C178XM0MT0VX", "BR3TMVZ9PNWZ", "9NKFV8Q5TDF6", "BTS6DT1DJHFJ", "9MVNJ4STLSGV", "9PNWBV3SC9SG", "C247SMCRRX72", "9MVJGBNNFPPS", "9N4PWWSQPDCF", "BZZ09B2B36P2", "C48LJQLV397R", "C4RKLHM8DJQQ", "BV02TBL15DX3", "C3K10N1VQTNB", "BPZMCH4W02TT", "9NH5NCHGQGVR", "BTT48FGF6SWM", "C0TW4V3VLQPC", "C2JLJJ4LT3PT", "BZRX9FCGKFRG", "BPDTC7H7RCSW", "9MX15SRHXVZB", "BSS5LJR2DTXM", "BQ52CP76239L", "9PDH6S74MD5J", "BNZDGM7WJWGJ", "C11W9R4R5MLP", "BP9JQBJM0FNW", "9N9D79QLM0VG", "C4R968DKNJ7Z", "9N655D14L90W", "C1HZV4PRZ39K", "BV9ML45J2Q5V", "9N0JHZ335D8V", "C3Z76F56GDDB", "C3HFNQD977TX", "BQCF7SZM8VRD", "C4FFZTSWHX91", "9PL5V82NZNJS", "BPPFWJZ0QTV2", "BV70995QL0QH", "BX2CS20ZVL3L", "BX7ZSF0MJTSJ", "BQPZGCHPFPV6", "BQJ3J7D8HVJ5", "C2TVKWCGTGR6", "9PJS2NZ34D3B", "BNBLC4ZGFNKB", "BT990QWD1DLF", "C17VP2K82LWR", "BNGH9BH86M7L", "BNLWDLTJ5D68", "C38N8BL4HM2V", "BSF9FVV3P8D9", "C0MP8G803VRR", "9NN6C36B7ZV9", "9N0423WXNJLQ", "9PBMHT7R51D3", "9PHF1VFSTHWZ", "9N25HH4JN0LC", "9N9WP26QG9VP", "9NVW440V1Z1K", "BQKJ05V9FQMZ", "C074JBFL23F8", "BNXLPPCVS0HN", "C1F40HXRSXTC", "BWT5L9P3L60X", "BRKMHZX1RCF2", "BZGJRJC1FGF3", "BRQH27C9RGXS", "BZQQ7HX8PZ05", "BTMS1PXLQ6P6", "BXQQQQ8HRBSF", "BPMJ413V6BB2", "BW9TWC8L4JCS", "BXVQ8M4J9HNM", "BQ9S8ZKCT3Q7", "BSBTJM430VVR", "BQX4TK49BXLC", "C27H5T4HD4WW", "C2B3HFJFGHS6", "9NBVZXRQJ8X1", "9NBLGGH43KZB", "BXM2RR6SD7WT", "C3ND23HM1J1P", "C3GVMVXVV7PS", "BQZXBCZXHHMP", "BTDHTTQ4KW6L", "BR3D0G4JZVZK", "9PC0F5HQ27RH", "9PNJFGL2LJP6", "C3QWVTZ6HTCB", "C596V0P64DD6", "BQ18XCWDPNNR", "BTK0RKVM95GP", "BZ5RJLM8NW91", "9P0BD1B6351B", "BPD69V4XZFLM", "C36FNWGM6PDC", "9N064LD6TDZ0", "C1CLVTZ63W0W", "BSZ8GLB2CL2N", "BXSGS7T2CRH1", "BX8DP94Q4K57", "9P8NZHFLN2GN", "BPLFS1B64JHG", "9N525KGM0P7X", "9N2HFRSNS8CP", "BR47R4J78FH8", "BXXGLRWTNXP1", "C3XNL89HZT9R", "9NCNBWZSHZR5", "BSRVV8TJGVVZ", "BRDV9ZW67F96", "C308TKBJMZ8W", "BXVGQMLM0C0N", "C0ZHSWVR0Q2B", "BVVP3LXMLP85", "BRW49CBS558D", "BQ2ZZ6WTZZJZ", "BSLX1RNXR6H7", "BQCLQ73MFGJ8", "BNVPW9NHWNM5", "BQ0T326DSPLQ", "BPH82WMZ6W7N", "BV58251XZ2HD", "9MVD12R8G6GS", "BQ29CK8F9918", "BPL68T0XK96W", "BP15SF17LH13", "C2WJ0ZTTWVQS", "9NZKJ17BBH50", "BPX2DBJS60SQ", "BXJ3GNW2FZK0", "C17DJVSST02N", "9N0LC68P5XVK", "BR41RP923NG4", "9P3FJK2XQ6L7", "BS1C1BS3SS0V", "BSF0BBTQPTXW", "9N4RQ1ZKWCR9", "BPV4628PQ0D0", "C3TWVMK3BNNJ", "C2TKN8H27M78", "BTQ96QTQ58F3", "9NBLGGH1P62D", "BTKVC4KNHZ8T", "C0JF4GKTQRMT", "C0JDF1N3TWMW", "9MZX8MNDFPPP", "C35H9BGPTFLG", "BQD45PQR4F4J", "BSPQTJSG1ZN9", "C2LXXCC8TB61", "C2HCDG7L1469", "9NS7T3JRFZBN", "9PC89C77ZC02", "BVX8PBW5M6XZ", "C2RQLL92FRXH", "BR5134KX2SJ0", "C29QZC55CCZG", "9N3JNPBXRWWZ", "C2DQNHGBSXB7", "BNML23T1PNZ9", "BNHPW11QV69F", "C02P796T0GW6", "BZ70BNL21NR7", "9NG7LG421V0Q", "9P0478ZTXLZ4", "BRDMLRH8WFN0", "9PPHPHP0PDT6", "BS41PBV1CZSN", "9N5P2152RBPM", "BVDG19SHG495", "9NS9GT6FR6QC", "BPR721XZ2KBH", "9N53NKJ2J283", "BTG951RGX7QD", "9P9K78101LCW", "C3Z7H6LR7223", "BVBZ8DC2WFF6", "C1KMFMVCD885", "BXB7P9W3DC13", "BSWKX5K46W7M", "C58BNJCDWJ4X", "C5D97L34VG3L", "C348248BJZCQ", "9N79MG04BVQ1", "BW74N5298SRC", "BT24WP5F0JCB", "9P07RFN16NFS", "C1TXS9V9LJDB", "C3NGPJHHWPW6", "BSN0SF08LGD4", "C4J8PCXK5XLQ", "C34NB0F1B5WQ", "BVMMV3Q3ZB1F", "C4DQHRNN1ZN5", "9NPZFZX1ZF66", "C4L5FF5CN1XX", "9N6JK9210XNR", "9NSFV0KTM8HT", "C3B1V55CDL0C", "C2W2WF8QHL9M", "BTN7965QZB3N", "BPGTSKHCKFN9", "C2P1CF27VVDF", "BWG6LFT5QDR3", "BNRX1DN6GXM6", "BVDXPTTTG0DL", "C17FTPBWL0ZQ", "9MV5R4JQJD4T", "BNT2NF1S3HNN", "C4Q29CMJ31NX", "C3VZ4S50346D", "BZ5WXVG6180X", "BT4HDS04K6FW", "BPFDTJTHJ8G8", "BQMQ3K1BLV1T", "BRHB1G8F8ZCB", "C3139H58BV4B", "BRFN69XBZPLR", "BQZ10L79X0FP", "BSR5BPN8NMMJ", "BZJWV056VNPB", "C492DG1TQQ09", "BVTFP7L3CVL8", "BTBXS3M5QQSM", "9NVQBQ3F6W9W", "BQ55HQMNMC92", "BWP0Q27QDNWQ", "C0N9CL9QKSCC", "BS95882KBB4F", "C4NWPX63JMZV", "BV26W4BTCLKG", "9N67PCVR0DLZ", "9MX4DXKMSCZW", "9NP9N5L5X9Q4", "9NJ40S9SVMS3", "C36LT5HKHBJP", "BZKS084ZSXJ4", "BPLQD16T5ZTV", "9PGMF226KNR7", "BX7HFJCZFDF9", "C0L2WKWPP5RS", "BRR15CC1W05Q", "C291VFXS3PNG", "C10GWTNNNBZ8", "BT6MZXZQH0VD", "C5F0X1NS204R", "BP3M4THZP6GG", "9PHM9KWZC44F", "9PMH7F7GD178", "BRVGBNLB5M9R", "BQBQ968QQW82", "BWMQL2RPWBHB", "BQH8WK0ZS533", "C4L49DLK5R1N", "BWHK1713PW2L", "BSNJMZJH6HJW", "BQ9Q620NC614", "9P675WH90SB4", "C2LGZHT2HMLW", "BWTWXQRHVX6F", "9NGRKZ1K1QQK", "BX61LLSH9L7L", "C0LCBG9WS57L", "C4GH8N6ZXG5L", "9P3TX1C1KRK1", "C4KWWRBWC5NP", "9P267T7LVZRZ", "BTRRGQQQ49GH", "C5CZ41LM1DLM", "C10WNR4SJM9G", "9N67QTH4Z1GP", "BT0G0RCNDBFZ", "BX4J85JZNGXQ", "BSS424N935KS", "C4Q7K19Q0VBZ", "C4PZGZ61TF28", "BXF6K0CJZKMW", "9PG4RWBM5DGM", "9NZQRXN9B0B0", "9P33QDV1QWCH", "C2X6ZCNKN2WR", "C1VP5VMB1RC6", "BVWJDX4NNQCV", "BRVQ1WG51NVG", "9P33MNHFM833", "9N3XQ7HX9RQ3", "9MWM1C56H8HB", "BSLTQT4L0RLV", "BZ6W9LRPC26W", "9P6X1T5X3CMC", "BZ92FB6PWXFJ", "9NXR6469DM2P", "C27XPR5XDMFT", "9P492HKR7P3H", "BQRB60PW2SDL", "BPCB20M0XF53", "BXNV9ZLK1CX9", "BSHCRCX9MGR4", "9P3SWZZJ1M4B", "9P9JH5L65R5S", "C4S0FV1HP0DB", "BV05F8VT7JJ4", "9NTT51922L20", "BS7LQTHJGRM7", "9P0WWB5TV9LB", "C52GX7JZ5HR6", "C0FZNGPNQQRQ", "BZHL37CPGP4X", "BSQTKKTCLNP5", "C13PSB6WJ5FN", "C3NNLTHW9T9W", "9NJRX71M5X9P", "9P12S426J0ZV", "BX3M8L83BBRW", "BVGQMLJFSSZG", "9P1R2BPJRPZM", "C13B30356JXW", "9PN2CSGW99VN", "C0LQH891MWM0", "BQQD1KHRWWL8", "BTZPFVFF9XJ6", "BPPZVT53HMWB", "9NTDHC46672V", "BRMV7D6CLMSJ", "BZLXW6KX9935", "C0TJ9C60KQZ9", "9NBLGGH3SWJ3", "BW2XDRNSCCPZ", "BS18VCF4NLQ9", "BQMWB8LGQX81", "BSMX2D9V0C8B", "BSVZCMGZV52L", "C2S06Z61NJ9J", "9N2H63Z2GLBC", "9N8Q2DKWVLNX", "9NQ0V4DWRK49", "9MXKHQBB0ZB3", "BSR9NLHVF1KL", "C59QBPB8P1XJ", "C360XV52R4NL", "BS50BVRTW46G", "BP0D0CXNR435", "C0N22P73QZ60", "BQSCNS1T8PHQ", "C19X513V5F62", "9NQ2CB7Z7J0W", "BS7F51G3DP8R", "BXQ6MXMCSNR7", "BXQ32G8GSX27", "C5GDG0CQ99RJ", "BQ5WNW5NCPKR", "BZV7W98B3XN4", "C3CSPBFVQ80K", "C06SJCBMPNKN", "BR8LLZGSDHX3", "C0SKP911GZMV", "9N2HJXR0MV0D", "BXDTBRPVQZHK", "C02R74432KQ2", "C56K7FD8VCW3", "BS32QFXVPWBC", "9NLC1PPGS4DN", "9PPB9CZ5L98V", "9P7HVSGW34MX", "C0C4090N6D9W", "BWJN32TJMQ44", "BR607QB1QGZ9", "9NHFVWX1V7QJ", "9PHSB15X7FG2", "C1TBCX541JW7", "BRK1B5GSB6W4", "BQ4N085F9HX1", "9PDV7NCNJTQP", "BVM1NFSWDH0M", "9N7LBM65MM5Z", "9NMX1KJ2H29J", "C21QTH7T677W", "9N5344N0TFR7", "BP4KBX8HM6F1", "C1ZJGF2JXSHM", "9PB5CXNHGQNR", "9PBSCTZKG0Z1", "C37XBX7DCBZ0", "C5JNN7BZF8CC", "C3GDK9QKWLRD", "BPQ955FQFPH6", "BT12X09G3F4C", "BQKSXQGJTN43", "BPZT3CQCCWKG", "BVNRFF9XJ6KM", "9MVLS2C346LD", "9N01N6BZ8HD3", "C09XZ31GMN2N", "C2R5R5P2DF3C", "C0VQQNCVM8W5", "C3Z6ZH7WH8JR", "C316H6H3K2HR", "C16HCWJK3VL3", "BX6T2L66T497", "C2MBDNDS3H5W", "BZR9GX1MVHCG", "BRPGP6H8P26F", "C2CQF93GDHKS", "BSZM480TSWGP", "C5F2XDQPPJKZ", "9PHP9DZGP2H2", "C1B77BPDGKZ4", "9N6Z8DQXSQWH", "9P76J95X6RCH", "C0K7JZ4DGKC9", "BPPQJ0K402W8", "BW8PVL4CJ2Q6", "C27LHB0DH095", "C26XXBZ3L134", "BVR7L43JNHTL", "C4MMTDXPW01W", "9PJGTBK7P7FS", "C0XBNVR137DZ", "9N6V2181GHLM", "9PDGRSZS54LF", "9N5JRPQS65QX", "BTG75RR3VHC6", "C3QH42WRGM3R", "9PLZPHBNHTMF", "9NSL68D814GC", "9WZDNCRDNFBL", "C0DGJD9BNJ73", "9PLT62LRF9V7", "9NQ7XB6HSMKF", "9MZNXNW0277Z", "9PMCZBNFVFMS", "9PFJ3H2R6TF3", "C5828HS8K39D", "9P641Z19NT2S", "BWNG265CPDH3", "C5911MLTLXK1", "BZRK5C951KK7", "BQ023H8GXZ3T", "BX03760D0QGN", "9N9V2PC90ZCN", "9NKWRSBG61M6", "9N5PZVL9QNN6", "C4R1DGLMN22X", "9N26TKM4N4J1", "C1MP1QHQFVJ5", "BX7BC0M2NCGJ", "9N7RB1X6FKM4", "BVCPR6991NVN", "C3M1WX0CQFQQ", "C48SDZ8QBL59", "9NSD4PD0PD1J", "9N5H9JMVTMZL", "C0CQ0MDKCCVZ", "9NDCS7WQGSNT", "BZF309Q32MDT", "BZFB1F31614J", "BT56B4R21179", "C4MKXTRWTQ6G", "BPHRGGQ6RLXL", "C4KFCMZVH53H", "C0PX97V7F5J3", "C0063L7M250T", "BZ7982MK3FWD", "BPRNXX08RL94", "C2QCKTNWJNWB", "BWMB5JS5X7XV", "C19VR3KMN3ML", "BTVFFDDZ0TL4", "BV433V4B23LM", "C1GB81VDXPR3", "BX4RTV7M28VS", "C2BTFXNW3TTT", "C1C16ZZZ79VD", "BPMMFJDVP9NF", "C1C4G73R9K4H", "BXWM93RWR5XN", "BVJNXD9V4FVP", "BS3S7S0QMLJB", "9PLCR0FR564K", "9P7GH69G7S8Z", "BZ5ZJ38JWVFV", "BP4KK0NCLCHQ", "BRKX5CRMRTC2", "BQ1W1T1FC14W", "BNJL0X82JT46", "BPMKJ066RSZP", "BNJJGRCSH3RM", "C3LW50BQJ878", "9NJHXB90R2XW", "BS4X1F4L1PXT", "BQ925ZLV26LQ", "C2RQ137HS8L4", "C5102KNGBQS5", "BSKCKZ9K41P4", "9MXB5MBTLJW6", "BPKF486VRKDR", "C250XSFRKNGT", "BZ8C3Q470WQ6", "9NB65S6LFZRT", "BS3J1GCV36R4", "BZDK396HW2G8", "BZTZV149BZ44", "9N7PL7D5CDJ8", "9NMWN2217QDR", "9P17K8J4TFKQ", "C1FW8QCKRHM1", "9NGLCHKNKNS2", "BPDWH28HM2W7", "BTH9PQJ284G8", "C1B79109ZNN9", "C50K3Z0K68VP", "9MWDMLK2G1KL", "9NBLGGH4SF90", "C2M8HBNVPT1T", "C40860J5R2MP", "BPWHP3HGHXKL", "BSSKLHHH96DS", "BWDZZGDHX47M", "C0HJ4C6S1GLH", "C2N5TTQ86BC6", "BP4H9HD3FSWB", "BNZJ3XP0DJ52", "9MSWWJWRF4WC", "C5B84LR72JB7", "BW9M9JCMKQV8", "C3KLDKZBHNCZ", "BX3DSPQPVNQR", "9NBLGGH556N4", "BR7X7MVBBQKM", "BV6BRSLFJW3W", "BV2ZVP7PJZWL", "C1DDW4PRF6K5", "9P5X7892QPDL", "9MXSDJXFZQ25", "C08SKT5BZXSW", "C1NJFJM3FPWN", "BPJ24T8CZ35P", "BQW91W950J67", "BZW2R4STVDNK", "C14QX7KBWHSN", "9PCFF4P8R22D", "C4ZFNCJGFP86", "BTP7VK91B2Z3", "9PBS8M93F1BF", "9PDTN43FLJM4", "9P9778WSJTQC", "BX9SVQ6J7CWN", "BWPKGQV97N7N", "C3C71TV51SQC", "9PF3NCDG22K1", "9NQTZ3MFVFD9", "9NPGTNQFC8B5", "C1F1HJK2NJPJ", "BWKXQC5BL5R1", "9NNTSPSC35ZB", "C0KSN20BRP7Z", "BXDH919M16G9", "C0WQRR1PP63D", "BNMRPFLB3PQW", "9PHGB3PW2FG0", "BWVG5W03KWMN", "BQQKG9H2STC0", "BVM002M8HH0S", "BPR4TX9NRWRW", "9P0CN8J4XG1W", "9N54Z5F19HJP", "9N5253J559LR", "9NBR2ZSD99FX", "9P6N7LQ4HZFD", "9PLDLMPLR7JV", "C0VMK0L6VJ0W", "BP6BZKR83D6S", "BVG1SP245LHZ", "9NKPT48M8RT2", "9PM8BXR2D26R", "9P8RGJG295RQ", "C3HQKX3B35PD", "BP2BW45WZ45Z", "BSB39N2RT01V", "C1XJKZ9JSPHN", "BQMPK93Q7561", "C0X06G413MZR", "BXWNX8ST04JS", "BT5P2X999VH2", "9NBLGGH4X6T9", "9PNJXVCVWD4K", "9N3NK5WW05HT", "BXNRVZ2J1PBK", "BRNJB8KFLQWL", "BWM4M53929JN", "9P2CL8BQQL3Z", "BXX0NHDR1FNZ", "BRSTPT3K37KN", "9N255CN609QK", "9PGC64G34T2F", "C59WFH3X9XFS", "C0723XB6XJSX", "C1M8WBR71JTP", "BZGD2P8R696V", "9NP539LHJD8S", "BRFHK8R9ZX53", "C3Q8BGFJZ05N", "BTKFDF4DHWRZ", "9P236GP3KTVH", "BZ1MGC7WB6KZ", "BXV82FZ6Q2H9", "BRX02HKCFJZG", "BV4MF73Q1X61", "BQF42H1MSW99", "BP8RRGC7X0PJ", "9NW1R7H0LJS8", "C280P52G89XN", "9NL1BJRKN9P8", "BPQZT43FWD49", "9N17LX250Z01", "BRQH5GKV7912", "C2KDNLT2H7DM", "BPKDQSSFQ9WV", "9NBLGGH4PBBM", "BXTSDCDF642S", "BVX9CHS4FR5W", "BSD19LV8DMRN", "BQZKFWSZX483", "C28M1CDQZSR2", "C20WW4W29FQ1", "BQ3KRVCCLBVZ", "BZKMXC4MVHJF", "BT0MDT228WRP", "C41PHGKPPCG9", "BZZFJVTCWKR2", "C232CL8LQQ9N", "9NBGKZ46Z2SC", "C2B96BFHN0NG", "C48XJRK40VC4", "9NC6B6Q3FR6K", "9MVM12TGGP7C", "BXMZKPHQK37H", "9P08MS65RDSL", "BPDSHPTJW0LG", "C2B5FH6QGMSF", "BZD5CBDZSBZT", "9NKGD8Z7JGD0", "BW0JHMW2X7WH", "BV0NM309K1TL", "BQ9D6D2XXB09", "9NQQT40WQ60P", "C1H4ZFWT8216", "9MWFZNVBLZMS", "9P7LH4QVNCQD", "BP1MPFB1J2LP", "C08XR9BB6TH5", "BRWKPK2MPXB5", "BP74GQ3N60Z1", "BRJ4KRC08BTQ", "9NB5XZ7DK7L7", "BWXMN4QRZ0VT", "C41M2F4NWB2S", "BWTH23DT25H3", "C3FL7DRCFD8W", "BPJ686W6S0NH", "9P0KSSJH8W81", "BTDH0LJRWNWC", "C11GZGMKRTCV", "9NK47Z4QF18W", "BWMH4RQ4Q06F", "9MWM0JW3H5KN", "BS0PFBB91B3V", "BX2DKFVVG3KZ", "BZMG5M432LWV", "C11TK3P8P2BW", "C01FGSV71GFB", "BSP8H31KRM93", "BSGX2J8TCMVM", "C4NKB71ZT5CP", "9NVK1W7L093S", "BTX10NSL9P28", "9NMKBMTK5L8M", "C4B39136C8KR", "BT2F8LHH10GS", "C0JZJRMF1VW2", "9P20H23MB4S8", "BZ52FLPJXMSJ", "BZF5CKBH439R", "9NBLGGH51QT4", "C2PJQDG2MMRL", "BT776JQ1PG3S", "BSXZVK24CMR3", "BRRC2BP0G9P0", "C42KCJCLX6MX", "BPRPQSKXTD1L", "9N9WZT3PJ27W", "BV0K9LMLQ9W5", "9MT8PTGVHX2P", "9P0LXX23PTSF", "BTSLS8RHRHRW", "BV0LH18Q1VHW", "9PL085Q81C5H", "BPHW1QWRDVTV", "BV95S3CSP2DW", "BWCXFW8V0HBH", "C552DWD77M2C", "C470PSN68T66", "C3V2MJWRL8KW", "C1JXWJR46913", "BVGX58F7HZGH", "9NV1RH3114HP", "9NCRNCPZTM76", "BNPJV2Z29721", "BZT9L33KT1KP", "BPM91W8NNS17", "9N6QQN752H2Q", "C4Z7QM8FSXM2", "9MSTTVV5NK1B", "9N0DC6K77QC5", "C0G1L18DT97K", "9N0HKBMZKC15", "C3CS50CDDC83", "BQ50F9KRV4K7", "9PM5MXT618PH", "9NZR1TZV0K1H", "9NK3QLQSLG7K", "9NB0WXN3NL39", "BTVZ6X9X9QN3", "BPQKC5TH07XF", "9PLBB8M900G0", "9P49JPQJKXNH", "BPF4QH72W50T", "9MW9469V91LM", "C4B4K16TJG7Z", "BRGLM9V090GW", "9PCS36FCPW1W", "BV3FZP8HC2T5", "BP66RSLVWGGL", "C04B8DGRNP9Q", "BS39NGVS2SP7", "9NP9N9JZV55T", "BR7H2605L0QQ", "C3K1HT81Z3QC", "BXLH97R22VM2", "BSMZH25V6V46", "C3NHWKLR94M9", "9NCMQ9DXGXF6", "C3FKBJ2Z5PCX", "9PB5X5WVZTB6", "C1N2LVW7NNJ7", "BRJ6VLLZ4QJ5", "BZJNW8N57SHJ", "BW4SRK2M7Z33", "BSRNQD2QRT71", "C1SPD35KVPJ0", "9N4ZN4L7KW44", "9PH74QBKLPLS", "C3Z4C9CNSLRJ", "BTLJC3359RQX", "BXQJ9T399PFW", "C210ZQR369CW", "BNZ2TD4Q2PVD", "BVG29T744DZS", "9NF88QWDJNPB", "9PBF6JPMHQ5T", "BS8KC7HC7V8V", "BWNRT1QMQWD6", "BZJ96QCRQWGT", "BT4KVQ198M8P", "BRXWDG1B9BB1", "BW1WF4K45C78", "BX11KNLHDZ5K", "9NBFQMP69N1S", "C0RMR5WFFZH7", "9N2PZSK8LLPP", "9MVTBW1N24LD", "9NB9MRZR1T79", "BPKVH4C4XV4N", "C2262194Z6XQ", "BRHJKPW34Z0P", "C31QL60HVLT3", "9P798W4VDT91", "C17GQF31D617", "BWQ4PN1XP16R", "BXFRMQWRBP1J", "C4791HSKR1NM", "BQ5Q29N73KGH", "BZL493J2LQSH", "BTNW7XGLQL30", "9P5LSKGVS3SW", "C1TG0Q14NCNG", "9PHBVB32238T", "BXSP3TS3RMFP", "BZPJNRTBL765", "BTF4L389V68B", "C37R0HR8SL4K", "BTN76HBBL9SM", "9NHT47XNSJ87", "BNZ7B20VDXML", "9NQ45D373W6S", "C042ST52414P", "C12M59WTB2S9", "BVWPHR3TVQ6F", "BWR1VZJD64H9", "BWCBMJNX58K9", "BP7C3BT70BVD", "9P5J6TFW812B", "BVG8N7M5NZHD", "BQKTZHL91458", "BSJQ8S0T2S74", "9NK26P7HK9G0", "BV4S8N6C2R24", "C1LD4244XCNJ", "BR2F4DG4WXF8", "9P9MC8B7R5FP", "BNGLPXGWK6CC", "C30G7K5R4SQ0", "9P1X46GMHRZM", "C25K1D8B4H2B", "9PMFN912ZTVP", "9NTXRMMXVGWT", "9NS2PTV2WZGG", "BRBD7BDK271P", "BQ0TGL55T3N2", "BPN4BFRVKGCN", "BQDSRXRC1K57", "BP4S3XLJG78M", "BSB132ZQVWZM", "9NGK7V4RRR9X", "C4ZJGMMWGNK7", "BRHSML8030ZN", "BTK86T84DFSV", "BNBWFH89FCF1", "C2S06DT65XX4", "BQF513DGZ7H8", "C08MW8XHQN9G", "BWT2GPVWCH2F", "C3L6F8GL5LJK", "BVVFPLQNSWG0", "9NBLGGH5F8V0", "BRMFLRV79C3H", "C2F67LCVGF8W", "BQ9C40MT0WWK", "9P3XSG3180NT", "BXDSG249D6Q2", "BS4R9GLTJBRL", "BVK1LRW59L64", "C0QV4P26NNDW", "BRMRVL00XV67", "C5347LXVMJDD", "BQDVBCS5Z4N1", "BW4CQF2N2L9D", "BQH1S9925B1R", "9N87N603XJQR", "BXL6W3Z84RHZ", "C3553MB4P5TT", "C09N5TW8Q4D1", "BZPM47XW2HZ7", "BSZFRVD8JTJF", "BNKXZ9WFM6H3", "9NJ2PWQ3R61H", "9P8FDMW1MW7G", "9P6BG167T9LB", "9PMZS0XZLW48", "9NHDM5WPX3GX", "C3BTM5SJXLVL", "BZGZ3G053NTH", "C0GMW8QH429T", "BS5RXLL3WQ2J", "BQXVSGCX6K8W", "C3QJ2Z8Q7HFR", "BPTWSRMJH2JF", "C0G91V37489H", "BRW7FLNQ19PK", "BSHZGCGJNCN5", "BZP3R43F8DNH", "BWPV4QXW8W2C", "9NT3L7KFZ07S", "BTWXL6VXS87B", "C0BBTP2979PF", "9NHPR05080C6", "9MSNLN470QVP", "9P8L7RCGV5X1", "9NDM2WVNCJT7", "BNPRK9HB5LHG", "9PL3QMWPTMD1", "C1W6DR9Z9684", "BQ3B6130C6BM", "BVJK7V1BDQRF", "9PB9C0582142", "BWW2TX71WJC0", "C205FBSPZ3W8", "BSW8GKBVB5W8", "BRB2J2GKCC3H", "C297XSQN050C", "BZ6PS8TDB5QF", "9P2001LNV456", "BRPGHH01G5PV", "BQFQJ0RMWCK4", "BTQMHK78ZPF9", "BWD88K55MK5W", "9PB67KJHL7PK", "BNJTSCTSMXGM", "9MV6MCVLT8GR", "C0D9BDGXHFM7", "C5FP8DQ3R1WF", "9PL4PL5PZWZV", "9PJGL58M9KX6", "9PGL9JBK2C8N", "9PN11W6W1LQ1", "BPC4T0XMRCW3", "C4NP28PB9B5X", "C0FC4GRRJ2FC", "9PC2NXSD00KP", "BZ6XR01BVH4J", "BQN4N3CGBV1N", "BNVQ3TXZ3JH4", "9N04QS268GFH", "9NGKDN96RBQR", "9PN35MDV3CL5", "BQ2F1LGNL6M1", "BXRMHT4MV6G3", "C2KV821GS8X5", "BS36XT3Z5ZKL", "BVF5ZGD9NM52", "BZ289TV4QVCK", "BVV8LHVGPBS3", "9NT39ZMLJZHW", "C3S0NLB4QFG7", "BRWCPXT4HX7V", "BZ8T21T2CR4R", "BSTXLSRZWKH8", "C4477GNRJPTJ", "C1N8NK80CLXV", "BPW4Q628L5CV", "9MTCB5K8MLC2", "C1HPV7ZS3XT4", "BQ4J4CST4H41", "BSSVQ12JCBNH", "9NPPBQW88B9B", "BTQSPR43SR63", "9PGSCB1X2P7G", "BS37BWWP2PZ1", "C2484ZR2BWNQ", "BRZ0KJF2QZ8F", "C0SFCF4PBRSZ", "BW78QB54KF88", "9NDF6PDK8MCD", "BNW6Z1S65CHG", "9N455N4ZRL7J", "BRM6SS1W7LDK", "BQPG2509CVJP", "C4VFVZGF3480", "9PPJG1PQ7MQM", "C38Z8L4RHSHS", "9NSQS1TKSKDQ", "9MTRX759ZJKT", "9P9WV5XRGM7Q", "C2SLS7FF8BF5", "9NBLGGH6D286", "9N9NWNT5BZ7Z", "C0MH97VDRS26", "BVJVR9W3TPZJ", "9N77SDQKLJZG", "C253HWJP0L18", "BR6DLJ4RDR9Q", "9P72G60JZDC4", "9P96VHK4JW9D", "9N5V64V59RNG", "BPPTRQZRJ341", "C1TBTQBVJMFL", "C03J6WR23XQ9", "C02JLRKV8RPM", "BPBKTSC16MWT", "9PDV8FKWP3B4", "9N8LQF49147H", "C1CJ25XTKDSB", "9MTNN82JP2MW", "BVLC0VRRNBSH", "9PC44QBXSSS6", "C2PXH3XXLCZ0", "9NBLGGH537BL", "9NQF1WZL3RC9", "C2QPC99GJGZZ", "9PFB4J68QC6X", "9NRPPQHL2MZM", "C120V2WGRMCH", "C48LBRJJCP2L", "BQRHDQ1NRW6R", "9PBDT4PWMHFT", "9P3R29Q9VK8F", "BW7KJWDBDLHN", "BPKQZ245CQ2H", "BPJ6Z5B445DV", "9P06RC712MB4", "BRG6J553L5KT", "9N9Q5GL4LHPM", "C0CB2CVZVSNR", "C4PCN1CK76MR", "BXMPGZDSVVFK", "C22KC9H7NPT6", "9PKT2B6HFJDV", "BNG91PT95LQN", "C2MDS4V6NKNX", "BNSMH3MF1BCC", "BXQLCH4PF1PD", "C50L88B8L9TW", "9P8XJRLCLH2P", "9NTJRL415ZTL", "C4MXZ1C8GDDP", "BP1X6CCP4N49", "BTC0L0BW6LWC", "C20209H1D7LZ", "C111TBH1L3BH", "C5KFH4XKWVKN", "C2J3KXBTV02K", "C3VCWTXHWN1Z", "BQXN1S3V3FN9", "9NBNG6V26LDP", "BR68TKRKBWSX", "BS3X8KWG86LZ", "BZJH12CJ6N3R", "9P85R412JV3G", "9N80L1CTZ86W", "BP5XCJQK5HQH", "9PNH28JRP6MM", "9P0RP2XV3NM0", "C2T1SFV91Q3R", "9NMP9B9KMKLF", "BWW1MP5KDLPB", "C50MCJDHVK7J", "9NNKVXG45WQ5", "BPW6DQR9RPD9", "BQ765BPQ7JGL", "BTDHX5Z7GL0W", "9P5NW32VJQQF", "9PN00JGV48R1", "9P16M6LF0QFH", "BVFF56S7PXFJ", "C3DTXQND7CRN", "9NRJZL3LPBBZ", "BX1FZX1X4132", "C3QLXK59G1N3", "C53SZPDW3QFW", "C4CP6WTZ5KND", "C0ML5ZXHLJ71", "9NBLGGH1NZFW", "C1KX6KNB7XMM", "BRX56LQJMZ4G", "BT07RFFP4D57", "9NL2WTLX21HQ", "9N7JX1RB5TJZ", "BSC0RPMPF8VH", "BXL4538LK4DK", "BNW34B7V705C", "9P9KN2G4M2W0", "BNC55P9WC4XX", "BNX8Q4J8NF9Z", "C355T88BBX1S", "C3VM0TMWNZ5M", "BXWJNW4170RM", "BRZZLBF5T245", "BTM8M1CD9PSK", "BQ26HJ8LS3PD", "9PBKJXMH6K11", "9P33WBGKGL5J", "9N48W01XWW41", "BTKWG4P1Q2X5", "BVPXC5S3574J", "C3ZHXSD83K2H", "9N0DQP52TH6V", "C0GQP41KXPVZ", "9P2LJ5G6DNBC", "9PLJWPMQJQ18", "BQS7GXV4PSDT", "C2HHTCSZRK9G", "C2KJR9VG1L97", "BS04D131Z77T", "BPPZVT8BZ15N", "9P5WRQ5N5GQB", "C501VQFW8FQG", "BXN1NF0DWTRC", "BW45DJCZTLGJ", "BZ292DNW53RF", "BZM82SL2TP6V", "C3FQP5VKN9J9", "9PLLT24V1QFK", "BPN65MSHS43G", "9NPV214603Q3", "BQVQTL3PCH05", "BR07QWGDPPL1", "BRVPDHDTJ8F9", "C4TXVZXD64NM", "9NS90JN63VN7", "C36C4T4TB7KN", "C19SSPQFRQH4", "BNFW4D6L2VLT", "C0K72P573FSC", "BWXCGZ7T8X0D", "C3X4TZHJ89Q9", "C1ZSX0Z50VW2", "C3H7ZJKZ75SQ", "BR1JD76JZ6H5", "9P5JCWKXJDWP", "C4CSS7QSS98C", "9NZD3JK2DQ1L", "9PLM68SH6NPH", "BZ8JX8NK5X4N", "C09RRCL0CM5S", "C2GG08DB7WTT", "C0W6P6N2Q4QF", "9N0RSV9DHLPR", "C1B2VZ28CX32", "BNR4SFLN2Q2K", "BXGCBDSZ51Q0", "9NVNVLH2KR2W", "9PD0LHKS21XB", "BQ0TM0H5BFBZ", "BQSB9CXNFQ9Q", "9P4VFFC16C43", "9PNW513JSJMP", "9NGF0LHSHPVX", "BP95H7BN67D4", "9N1MZCFFL4TV", "BT3RWJD102LX", "9NM8GVNPS86X", "9NGW6DNHGGDF", "9NBLGGH1NRVB", "C5DPVBV408D1", "9N7NSLN5TBD8", "BVT0L7DZJ5VC", "BPT02H7D9BLJ", "9P5SL4LDLMG3", "9PFKKZ5T89NL", "9N8CD0XZKLP4", "9PJJZTLWBXHM", "BQ5HJ270WNLT", "9NR6CXM0TMR4", "BVZHPKZ3VTSF", "BSJCH71J6BZF", "C596FKDKMQN7", "BP3GH4D3HP2H", "BZVPNM21TCJC", "BR1M1XW5TDGC", "BP8WDV3T37N7", "BVJLKDG2TX8H", "9NZPL5KG2R8F", "9NTTRPB44P91", "BVCFS7L1X3TH", "BVJDZWS270F7", "BZK08LZ460L5", "9P2Q994ZWB64", "9ND4DMPS8J7J", "C1PHTB54976G", "BSK1GN27RB8R", "C30KBQJP0RH4", "BPV04QGBN8J8", "BS5WKRGTNCKQ", "C4PZ0V39GXN2", "9P8Q4W21QQZ2", "BP6L3W5VRV3B", "9NHH4JSJGCFW", "9MZQ50CFX7PS", "9N3WWJV5FC8H", "C4717QJDFR4S", "BXVBZGL29961", "9MXQLQ4QJ037", "BQBZSPGTP66M", "BWC95BZPFBS7", "9NDFXJXRL224", "9PHS5Q7KQMJM", "9NKCX0MJF9LR", "BPG82PZ92FL0", "9P1B60DJ4W2L", "C2Z9D406G0KQ", "9NF66PS9L3WC", "9PGTZH51B3S8", "BNCZHKWRZ7BR", "BXTW857WS0C3", "9NTMDZ0KH4F7", "BZT9XFJV12XQ", "9PCDNBHR11MR", "9NMCJ2JT2PNW", "BVZ24XQKWQZ4", "C1KMTP26BWNR", "C4R4RB3SB1NN", "BZTK3BSJ90C9", "9P6M19D9V21G", "9N87GJWXM6TB", "9PJD2KMX7TZ6", "9N47HW6824D7", "BX1JCFLJT5KX", "9PCKBVF3P67H", "9N5Q3G6XK5R9", "9PJGSRC7HBL3", "BTCRQ7V311BM", "BP8WVVCMF11B", "C57JS25D29W2", "9N3FD79FG6SS", "BNRN5CLM2ZQH", "9NKC145N4NTM", "C5H1QLDGJPM7", "BRJK2LH5R6WV", "9N25XS38SP38", "BSS43MTLGFQR", "9NCDH8CSML7Z", "9PGN9SMQLWMT", "BNVZJ5ZB3WH6", "BRDXL8VZP636", "9PM9SQLCRP8M", "C32HBQK8FK32", "BTJ0T8C04ZBV", "C4HZC7LJG6PX", "BNRH7BRC1D02", "C2320MJQP0MS", "C0MN5DN8KR3F", "9NTF6CWQBSJ0", "C0D102LM66W5", "C4ZKQTQVZTK5", "BQHBC8V3WQMM", "9P22Z73FVPDW", "BNHGFC82HN48", "BP98Z2XRBT1K", "BPQM748J3LLT", "C30H5JGW0F6H", "BNWM9F3C08B6", "9N1JM5Q0TTZ6", "9P5VMG8D4P4B", "BNQ94HH98ZTP", "C17WDRJWSPQH", "BQMVWCMB8P59", "C4LP4CCXMHHW", "BSWF567PL81W", "C0NHVWV6NXRK", "BT9C33WFB1K3", "BW3P8NLFK6CV", "C2RW501BD5VF", "C17SFN1NXZ37", "BXHS8P0PC19F", "BXT6TD05Q930", "BTB6374NZGV3", "C3H56C11VWHM", "BX1N3BP6QK83", "BVKZ930DVZL3", "BS1V82FLTGKJ", "BS12VXVR47X0", "C1JFC3374WDT", "BQ0B04MG31TZ", "BNWBBMNNBBN2", "BPNTP8WJHGH9", "9P97L913PHMD", "BZHX5S3XV477", "BP6FD6X4XM9F", "C3FXTTH4NFQN", "BZLN7C49MTWG", "BV7ZH6L703RX", "BPNDKQN84N6L", "BVW8ZCF6L99G", "9PLV7ZZDZW1S", "9NW5LJ3GHS1Q", "9P4F8NBPVDNH", "BSWTDR8HBM1W", "BZ3PGGF8L81J", "BWHBPRJDJ9RV", "BTVMPDW6GH5S", "BQLF1TJL4HZB", "9PLKW273Z2P0", "C50KFXWMQSFW", "BS32DZLXBQ02", "9N1JLJR48FBG", "C1F2Q3KCXPBT", "BNPTHWMGDFBR", "C2DCJ95ZXBMS", "C3VBNR48TR1R", "BXC1K12NQFTF", "9P4D41K02WB8", "BW8JQLJ2GDT8", "9P8R3JMR87S9", "9NBLGGH5G7LV", "C22T53SQ7FLM", "C26K4DVGR45B", "C27W5Q3P0KJ7", "BNCQRBBGPMN4", "BTQKSHJSRP40", "C35NTVN04WK5", "9NHQJD5B40P0", "C3MVXTCDKT77", "C0WPPQVS27Q7", "9NBLGGH1Z6FQ", "BPSWGQBW7R3G", "C0QVR372HZ91", "9MZV25JSH9LC", "C3349K4QQLJS", "9NMGCNN245LW", "9P4ZGZ2HGV5X", "9P6WL40NHJ9R", "9PBHXGWZTS2N", "C488J2NND5LJ", "BQ19273KDVTK", "C0X8F2F021PR", "BNZQJ2FBTDM7", "BXHG2GX28L23", "BWMH951M3G3P", "9PLJWXG6ZKVQ", "C1XHZ605DZPG", "C08CV6MR919R", "BXCVNFBPZHXQ", "BVFDTJ1XF6CS", "C2BD1F6CB3L5", "9N1KHMGVNLS1", "9N185QL77D27", "C4WZBL6K5DL3", "9PM1HTWKBR83", "9P1G1ZBD2TVJ", "9NWKWM0Z1DQV", "9PBF1CZQ2156", "BZV77FBXR0CR", "BWKQNQ1LB3BG", "C1Z2DK71ZRWF", "C5D7449R6SDR", "C4MSTXCKBXGL", "BSM6ZPCDSJ0N", "9P8FPMCF5X1F", "BSSVKMCKBB3W", "BSQZ03S3RV54", "C1FJZ2L207F1", "9NBLGGH68LSX", "BR2C25ZF5LK7", "BR3152PVJV5J", "9NHNLQ0M5QGD", "C4S60FPWF4XN", "C2FCHJG6RNPR", "9P7XX5LQN0ZD", "9P6F6TBGGVK3", "BTDRTXBKDBRR", "BWJSL0D2PT61", "BWSQ6832LWNL", "9NN69HFJ8SX1", "C1R51ZV4ZZ28", "BV5GLFHZTHQH", "C2LWVQF6W9XX", "9PM80QS19D7L", "BQ1TN1T79V9K", "9N7B74SMT0RP", "9N0DK99Z0KRQ", "BRS6ZCKHRNVX", "BX37QNK12GHR", "C0JTLXFRCL6R", "C125W9BG2K0V", "9PBD8JRPW37R", "BZML4526CPCW", "C38H3N2V4083", "BVN6M64JCHTL", "BQC3S5ZJJ9H5", "C1JXWKNFVJ7L", "BQZHCKXXZJ0G", "9MWNL6SB15W0", "9NQT1336LCNZ", "BP4LVT41S1QK", "9NDVDB9P32NS", "BVS4LZKG9ST4", "BZR1DDL02STZ", "9PHZNMPS51R5", "C43GG36FBJZ2", "9NLQTDKD0PMT", "BTFTN6N7GN18", "9NN1R85TQ39S", "9P3PL76N0KWZ", "BQBC0WHWX9J3", "C4F7ZHLN6B2J", "9PGTT5QMG310", "BQD7NTQP0CD9", "9P813RKQSD4X", "C4V7CD6W5TSK", "9PBHTL1S3T3B", "BR28N4T3DTXM", "C4ZV59KRZL61", "9NNHB89JDZ85", "9P1468J5QG2D", "9NV5ZJVK4NRR", "BW893R0DPNN6", "BQ4M1XWXFKHB", "BPJPX9FHSBXF", "BXJ5GK6MCMVJ", "BZRB09RQK88P", "C4060P46HH4D", "9PCD5S0DMF5Z", "9NXQ4PX4TZJZ", "BVJRH8WMB3BG", "BR5BK5PNZKVH", "9P7GBPGT90L3", "9N39K0L8JTXN", "C5FNHQSQMSL6", "BQD5WRRP2D6Q", "9N9HB2FNCZ5B", "BSHQQW66XVBB", "BPP935F82L43", "9NNWK1DTB2G9", "9PM0F4TQ3KT0", "BRVK4W7RVCXR", "BNQQ3WVBNZCQ", "BR7ZJJHGWT5X", "BP79KKVGDDH1", "9N1217LTQQS8", "C1LMJJ64FV3J", "9PGXZDQC92TK", "BTQP8RRP1PKD", "C016H4M7FPRC", "9N7W3BCVXLP0", "C1B6DL0T68Q5", "BPC739P6MTQK", "BPRJN4SWDHQ8", "BZX1G0C724KC", "BZZP5HFC3PGJ", "C3CDLWXMPL77", "C2DHMPHX520Q", "C56MD02TBXSN", "C36LCCGGHKL1", "BRDJFDXXRP7H", "BSC9DFLVJK69", "BXFP2QC134V7", "BX2DBXJ4LD8J", "C1GGJFSB6WRM", "BPFVSMS2MN7L", "BPQ6PCKS8KPX", "9N4RSG99KV1X", "BRJ5JRCJ8M6N", "9NS825HR2BJ9", "9NBLGGH557RV", "9NV2HJQTR4LZ", "9P015XPL7QZH", "C2GLN6KHJ6SZ", "9PHQF8SKVZDS", "BT8CSKSR2L49", "BXBM72LSWFJ0", "BPT4J5TL5B4Z", "BSDNW9S294FR", "C4KFRH30DW92", "BX0TSX0MD6Z7", "BP9SND40W5T9", "BNGSLFJ8Q53X", "9NT16G4T4K4P", "BRB2XN908F4K", "BP1K0SQKGSDH", "9P6W46XMDJM5", "BS2S6B326WJD", "BP25WLQVLF30", "BT54Q80SNLDQ", "C2NC88M7NWZ1", "BZC7VBR9WT91", "C2MHS238PDNS", "BWK9FSCZLQCR", "9P8ZMZ363BNZ", "BQB5V4PFQ502", "9NZV89BQ8ZWX", "BZ5VLVX84STW", "9P2Z085BXSXD", "BTLHXRCN1JFN", "9PFBBLC9MBDF", "9N9L7RP9R0HJ", "9P9V13MZQZ41", "C256X5ZJ375P", "BZ85PVXH4JLF", "BZH012CR67SR", "BS3C23B3ZSDD", "9N3JT7B78L9L", "C45070XMSGQV", "9NXMFBKVQ1J9", "9NBLGGH4WJHM", "9PLD39R1NF87", "C23M2TC1ZFPJ", "C503XK54W8JJ", "9PNZT76ZG95N", "C4K9SQC799ZG", "BXH46NQT9W4Q", "C3V22FQD8N84", "C4VLMWJWM7BG", "C0QDQ0KX4HDV", "C0WV60NNCN20", "BXZTB63NTG3P", "BRX5RDKZ44NV", "C3ZC9K2SQPKF", "9N36DLDC7ZR4", "C3GGVFH3VBKJ", "C4SG1RCNH1PM", "C0MHLGD6CP84", "BTC15PQNTK9N", "C3PB0BP0G04L", "BP5FM5BGFKP3", "9NT716FP33X6", "9NBLGGH42536", "9NPKR7N9JC1B", "BTWL97XSD0WT", "BTSQF5T410C6", "BTJH9Q47G3TG", "9P9KTDR4SMVM", "BQ82RH14B9MV", "BTS53SJ098HJ", "BWHFZNSL0PB5", "BSFZLNB9R9RX", "BVZ0ZNK4RKMZ", "C3LF9PCRP9RP", "C2CSDTSCBZ0C", "C0GWTPD0S8S1", "C3D891Z6TNQM", "BXF6JL9FG2LL", "BT3KQ8HLLZ6K", "BZMMH8HQ50NR", "C19XZL7CPS4Z", "C2SBLMSQ5H73", "BP8F95F6NVHM", "9NT4X7P8B9NB", "C4HXGZ1X0881", "C55B4NCBVQ8F", "C2CDKBWFP1ZP", "9PKCT24V6JR7", "BR26S2C6SKN1", "BXCPVTQ7T64Q", "C289KCH8WP0F", "9P45LLRNDP1R", "C59P7FDT7GHV", "C24WP4DMNNWJ", "C350VBGGCL6P", "9N5KN782GJWX", "BWL72GR7Z7GK", "9NQ0C38ZLCKT", "C4TS3RK0KDRJ", "C36X13QTJ3V5", "BV8C35XSMJMK", "9N46B8WQR3P0", "BPLB9K9C4DVZ", "9NNHZX41P7JV", "9N8LSNMV8HB4", "9MZLL81KTDP6", "9P9P3M3XH9T7", "BNK358CGCZ9F", "9NCT0QGGX6XD", "C24T2MRDBB3W", "9NZZVB747LN4", "9MZVTHHJKD3G", "9NL7PZ3J6G9M", "9N9JH00F67CB", "BXDT91NTZNDV", "BV4V52XXVZJJ", "9NJ9W8Z9WGWK", "9P8BXWGMPHGP", "BNK369Q6JJ5T", "BTBWJ7WC1Q76", "BNV25GB7512B", "9NG9M9TZSRH8", "9MTP483JT6DV", "BQWR4PH8X3PZ", "BTLLWKRPBRG2", "C01189NK5C8W", "BX3S1Q5DVHRD", "BQT43569VWF2", "BSQLNP8TV73X", "C2S4B065B6J1", "BXV4GV63THR1", "9P6QQG59N2P3", "BRZHFR5XBLQS", "BPB9HCVVBJGB", "9PHT427SRZ02", "BVXMRFGQP17J", "9PDCJH5SLLKL", "C48LJJ3KQ8VB", "C20FH72T45NK", "9NMVWMMMRVGN", "BR36ZLXRTK08", "C1TBHSSM08SH", "BVC559V7J867", "9PLMGFWCFZ9G", "C3PXRMHMW3ZF", "BNV84CCNXB7J", "9NRJ8NX3R1WG", "C5DP7MGFR583", "C14DN8WJF5G5", "9N07SJVJHBNV", "9PK9SRK7XK0L", "C0T1DCKWD8W3", "9P8HQ3DWTVT5", "BS33QFX5JWN6", "C0ZJ976BH91X", "9NK7F23QF7WR", "9NLDT9SHWSJD", "9P7CXK9B48C2", "9NBB2W25HP3C", "BVZ0D05W8MP2", "BRKXCB2MD7S8", "BXC7CS90NX6S", "9P40CJ0QJRHH", "BPN58B90HWGR", "BWH56DK175P1", "BNF1MDX12NG3", "BRXK34KJJXH8", "BNZ3MF0RWCSN", "BWMB1BF5D69N", "9P4WKZXWP1QW", "9PJT36QS7DVC", "C33TT9JFNKNQ", "BZBX8JFCDBPR", "C1TJ5KT8LT9J", "BXCGZFRKJWQN", "9NZ4CW91B890", "C2Q9FW49H8K3", "BSN5GB25HM2M", "BRJGPRMBV1NT", "C28VPJV3NZM9", "BQGVM408P8D1", "C5JFNCNK58CT", "BZX8LHQFCCRH", "9PJLG22DLCHN", "BS70ZCL9NZ9N", "9P9CXWVQP6M9", "BTNPS60N3114", "BW8JRRWQ246B", "C5HGQXZ7PZW1", "BSDD0QJNF1Z5", "BVQRZRBC5CSW", "BWZNH0TM7KBZ", "9NS6C0W5JTB2", "9NQTQVZ56DQP", "C2B4T86TXLRS", "9MVN4ND41DD3", "C4DBVZKQPK80", "9PM3XWPKKRX9", "BXKJN3WVT1C2", "C59RQ0ZVVG2V", "9MVFW9BC7F5C", "9NR6KRZMN67G", "BTPLXWW2G1KT", "9PF89V8WNK21", "C4DQXWTP8SS4", "C43QQ48KM38G", "C2HGH4LXTPK9", "C16HHTC9K79C", "BS8XGCLL3VQZ", "BV7JZ6MTR47K", "BPRHCSPK9VX2", "BX8HV1B694PC", "9P3DRLT4ZV59", "C4HDZQPWW306", "BXKLDP56HFGZ", "9NL908L2L3D0", "9P4Z4TW66LPV", "BP25HLJ6H3C4", "BTTP8K3CZLF8", "BVSSLBL5C3F8", "BPDJRQS4M203", "BSWL46TWR3QC", "9N2GDZTHPJZX", "9NZ5057NL64C", "9NL7M00G95C0", "BRGVJJB8S6FV", "C42GGWF64WH8", "BX89DK9KLJ89", "C41ZDFQ82M1G", "C4X7FCGX1NRM", "BSC246MT070F", "9NCP1745JF7B", "9P9P4RFWH0P1", "BW3MV344W84X", "BWF6QT9CNZWN", "BR9NVBNGKMFR", "BQCZS6STLGQX", "9PNV1L1M09P6", "9NCW8TQ7C3V3", "BVTKN6CQ8W5F", "9PFNWJ477GP9", "C18D48H6HC2R", "9N8QZZKPZNBL", "C3QDK7R638H2", "C1PJX1J6RT8T", "9NCNJ43HGVMM", "C08JXNK0VG5L", "BPZ6Z3VDCVXC", "9P8PV36QLJ60", "BPRZ8D8NTRKL", "C1WRVQG6430C", "BT3SDT0FSP7F", "BPM55KQ2GTP3", "BNNSLV91CTKJ", "BRKVPTHJW525", "BSWTLFKMV96K", "BXSPZM4KZS5F", "C4HMNPGDC80T", "9NRDW2L5XBN4", "9N2QB8QRPC5H", "C0VQBXFNZ1Q0", "9PPDLH53M8PM", "BXBJQ1932138", "9PLXV2VJR0QL", "BNQCGR7BX08D", "9NDDFVR7LP40", "9NBLGGH40DCM", "C2RRR8QJM5FH", "C375VTTBG2X2", "C2JFN44MMK4P", "BSZ576R612B0", "BQZSCK80F075", "BW9QK4KTPHNW", "BS8K8PJ8SBFL", "9MSRK8J7CJHN", "C09LFD39HKLW", "BRXFTCCPH3MC", "9PHV10KXLJZT", "9PJZXCCK7VLW", "9NNKH5L42LZ8", "C1S6VB1XRQ5L", "9NV2SQ7N9ZG5", "BS30VMKD7RVX", "BNGGCHZMV0L3", "BV26R4HMV7D3", "C5FW127K9XHF", "BNC1BNGGSWHV", "C0X2HNVH08FB", "9P8SMMTLH98S", "BPSLCP7Q6V2Z", "9NVC78LKGMRR", "9PJF9CW7L2RR", "C5BCKWNT306G", "9NVLQST85DSH", "C3VVNLQQ54F8", "C2N9CS4FS1QR", "BSK5FNCFN256", "BRGPD72KHM3Q", "BVQ3V30ZXVT5", "BQXTS0SX4W0N", "BZC4XC42ZHH7", "9P4JNFBS2RSS", "C3FK18TN91JD", "BQND4NQXFFV2", "BPD9XZWWFS8T", "BPM9498RR5GD", "BPGF7MXCWBM1", "C1WM3781H275", "C0QB90JXN0TF", "BR6KJS3QSRK0", "BNZ03NT5PGH5", "C06HH0WLCGWC", "C3SQQG5Q6Z64", "9PCTJNL0GDS9", "C2NFZ872BXKC", "9NSFGM8J6MBJ", "C31Q991VB6V9", "9P32WWJ0PJJK", "BXKFL4Q6WXVP", "C0RNBFHQ7X96", "BWVPS3BB0637", "9PGWNCB2D0FJ", "BRPXWXVLQLRW", "9PKP696HVL7T", "BVCRSR6XSDW5", "BPPR6D5C2GLF", "BP6V6QZBMFP0", "C4FL0L6C09LG", "BQNG40GVNR9K", "BQ0FVQF4MV8Z", "C4Q2GXQKZMSG", "C210S1DD8BK2", "BSMG6RBZH4LQ", "C4KBHNHRPLN6", "C4M5BK5HMGJD", "9MZ88PTGV7C5", "9P17K8G4H6HG", "C2HQVXVVLMKG", "BV4JDL5JB65D", "C1SHGH9P2NPR", "BP7R6JL7QN4R", "BS2MMFVLKXRK", "C31NLMB7T1B2", "C3FDP0NTC0JM", "BQ6ZXPCGHGC0", "9MVQ33PZW0CG", "BPJF0GGZD4L0", "9PKM0HK8HKFL", "9P31S2P58BGR", "BWHP7PWRRLVN", "BS2V537JPRPB", "BQ5F0BTQHL9W", "BNNMLWZRNQF6", "BV701FMDP6SX", "9N9N2V8JN74B", "C35FMCR4428S", "C01XK01QTZB1", "C531GX9LB3BZ", "9NJNQQ13CL42", "9MZG29LRCCK0", "BWH2Q8NM07PC", "BQCBWN0VWPMQ", "BZ51H6TBP5SP", "9NVJ140K4PNK", "C2P43HVQX0XL", "BNSDHDK45KBR", "C11KKHB5H7QJ", "C4VKLMG1HLZW", "9NBC54MT6KHX", "9MVTCTDTHH23", "BTMWHLNK4QH0", "BZSBN4JQJBKR", "9NDDSFPB5W56", "BW46281WW48B", "C0X15TR4NP0B", "C4RQNBKSLJG7", "C346VJHCG26X", "9N171CGFVT1L", "C3JPD73R365S", "BS8SSR429S95", "9N1NLQKZHZXM", "9P836S0RRWKN", "9N4FP732SGTN", "BVM2KN4FVL20", "9N3FRJ9KBTND", "C1N8H8WTPDSC", "9N510DK5KFQQ", "BQF16S6FK28J", "BQ6NN0JBZ8Z2", "9N253PVJ49WT", "C4H20NKG7012", "9NHD1JTF2MRK", "BQL8L17RV09Z", "C32XK5TG6RNM", "C4VQ205DNR53", "9PJL0VR9K32X", "9N584LPFG1GM", "9NLBBNGWJ4PB", "C0LGZMBCCD6T", "9NBLGGH42XC3", "9NTT77B0QS1V", "C3B585LPZQD5", "C2FFPF3QPHK1", "BQR7QS0F8SJ3", "C2XNJC9WK15X", "BW6B077FCH11", "9NTZZFKN3BF8", "BQGQZ19KLW03", "9ND3Z0QH0NKB", "9NVCM1N4725Q", "BX1DTCBD1HXJ", "BQ49WQ00XTWX", "BPS3XF74B9V1", "9NRPTTJ94PCK", "BPG20784Z9S4", "BZ68VJLQ64FQ", "9PCZXZLZT094", "C0GMGV6XH996", "BWX7S94S2LMJ", "BXZWT67JBZJH", "9PM8LDS55QVP", "9PPLFHZ2HXDR", "BNQT3LCMJTRS", "C4N7CV3Q90X8", "C521HDXRTS7F", "9NG2DR7WVF5P", "BSXLFN5QQZSC", "C4DMGRPNSHXG", "C4SHKFSN3FJ3", "BPR2TBS2KMQJ", "9P695V9561VB", "9P4QNQJBSJGR", "9N6GVB6SP7L9", "9PKMKQDCCN35", "9PNR01X9NDSZ", "BWBVJBBG4T9T", "9PMKBWQ2Q3L7", "BVVWBV3QB1D7", "BNPFHX941QJ1", "BSLGLG8P9T01", "BSH15RJ4VC1T", "BZVWRF6V5MKM", "BNLPMG5L2P22", "9P5591C1FMQG", "9NNWST597QP7", "9NZ4VDDDB7TS", "BRVH9KPJJSRW", "9NXD511TTSB6", "BVBGTNTR4BV9", "BWFSJG0ST8M3", "BR765873CQJD", "BX1WPT5RJSB2", "C40HL7DFHWCX", "9N68TB47KSFP", "C02SL8LBS5K2", "BT9FFLG51VVG", "C421ZX7RCG0W", "C4LLMHFQ1BXQ", "BVG6N37LFL8M", "BNZGDS14LMW6", "BNW16MD4GCRT", "9NRN0G8KJPSL", "BR4C6XCRSL72", "C3D89V4NH8F2", "C57L9GR0HHB7", "BWNWBTBKF61V", "C1ZT6N30L1WH", "9PDJV5ZLPTZS", "C22B66Z814J0", "BWQ5FC9WDJ6H", "C42G8H61ZZWZ", "BSFCZ5066BLJ", "C4BZ7X545J1T", "9N2DJNN4TLT4", "9N69Q08C1XVP", "BPNCTLMSFQR5", "BS4FRQ7PS1KR", "9N6N1X63M5SK", "BRJNRZ9N734V", "C0VT6528FZ91", "BQ5BD1F5VZHB", "C31WRP7QCC8C", "9NQCSR9JRTZ6", "BQWGBMCKRMSQ", "9PNBGZTL0Z1S", "BPD53XCH282V", "BXZSWTZX4H4R", "BTGRP642SC5F", "9NPX9CKMLNW6", "BXB5DM2CF32M", "BZ014X1JTNW1", "9P2K372075SQ", "BZH49H6J7469", "9NX09HDT0RZC", "BNDZ00KQ76JJ", "C0988KFJN8BL", "BP63MT1VJV6X", "9N6HCRMGZ7NG", "BZK6TK63SVMP", "9PGPPZW59JB8", "BZBB19TJXSVG", "BZHCZ2T1GC54", "BNSRQV4C66X9", "C20VH7BD75NG", "9NX5DHGK8W6B", "9P7JBQJ691KL", "BS96H6038P1K", "9P0XFHH60T1Q", "C5KB75GH44FB", "9PH4XP51PS04", "BR03N9C6Z9G6", "9NLSLFQHNDVS", "C0TMGF97V9LJ", "BVN6K0MHDDWZ", "C1J950S3JFDK", "BSMTPPDTN966", "9NK4X6H3CPP8", "9PJ06TZX4NMH", "BZJ8BW2B3FNX", "9VWGNH0VBZNS", "9NWXN4K3RMC6", "9P3NKL4B8RCL", "BRZJ7GX24Z60", "9P570PB7BLNQ", "9NH15GMNM2L7", "9PKSJZPLPPS0","9NPCD8S1ZRVD","BPCL0TXCGJ1W","9NFRN3NDXR2D","9P6JDPXGK975"];
    
    gameIdArrays["HDRGaming"] = ["BZR51XD70NKD", "BP9JQBJM0FNW", "C4R968DKNJ7Z", "BNBLC4ZGFNKB", "C1F40HXRSXTC", "BZGJRJC1FGF3", "BW9TWC8L4JCS", "9NBLGGH43KZB", "BR5134KX2SJ0", "BWP0Q27QDNWQ", "BSNJMZJH6HJW", "C06SJCBMPNKN", "9NHFVWX1V7QJ", "9N6Z8DQXSQWH", "BRKX5CRMRTC2", "C0HJ4C6S1GLH", "BWPKGQV97N7N", "9NBLGGH4X6T9", "9PNJXVCVWD4K", "9N3NK5WW05HT", "C2KDNLT2H7DM", "9NBLGGH4PBBM", "BX2DKFVVG3KZ", "C42KCJCLX6MX", "BPKVH4C4XV4N", "C08MW8XHQN9G", "BQDVBCS5Z4N1", "BS36XT3Z5ZKL", "BVV8LHVGPBS3", "C4477GNRJPTJ", "9PDV8FKWP3B4", "9NBLGGH537BL", "BNG91PT95LQN", "BXL4538LK4DK", "BPPZVT8BZ15N", "9N8CD0XZKLP4", "C0MN5DN8KR3F", "C17SFN1NXZ37", "9P4D41K02WB8", "BW8JQLJ2GDT8", "9NBLGGH1Z6FQ", "BVFDTJ1XF6CS", "9P3PL76N0KWZ", "9PCD5S0DMF5Z", "C0GWTPD0S8S1", "9NT4X7P8B9NB", "BRKVPTHJW525", "C2N9CS4FS1QR", "C57L9GR0HHB7", "9PJ06TZX4NMH"];
    
    gameIdArrays["TryForFree.homepage"] = ["BQF41W70ZLSV", "BW0D9LH9GG6D", "BZBVPG572765", "C1HZV4PRZ39K", "BV9ML45J2Q5V", "BNLWDLTJ5D68", "BQCLQ73MFGJ8", "BQ0T326DSPLQ", "BPH82WMZ6W7N", "9NBLGGH1P62D", "C3B1V55CDL0C", "C5CZ41LM1DLM", "9P33QDV1QWCH", "C0FZNGPNQQRQ", "9N8Q2DKWVLNX", "9NQ0V4DWRK49", "C59QBPB8P1XJ", "C5GDG0CQ99RJ", "BQ4N085F9HX1", "BPQ955FQFPH6", "BZFB1F31614J", "9NBLGGH556N4", "BVM002M8HH0S", "BT5P2X999VH2", "BRFHK8R9ZX53", "BQZKFWSZX483", "C4NKB71ZT5CP", "9NBLGGH51QT4", "BV95S3CSP2DW", "C1JXWJR46913", "BNZ2TD4Q2PVD", "9P798W4VDT91", "9NTXRMMXVGWT", "BRMFLRV79C3H", "BS4R9GLTJBRL", "BWW2TX71WJC0", "C205FBSPZ3W8", "9NBLGGH6D286", "9NBLGGH1NZFW", "C0GQP41KXPVZ", "9PLLT24V1QFK", "9NBLGGH1NRVB", "C5DPVBV408D1", "C4PZ0V39GXN2", "BWC95BZPFBS7", "9PCDNBHR11MR", "BX1JCFLJT5KX", "9PCKBVF3P67H", "BNQ94HH98ZTP", "BXT6TD05Q930", "9P4D41K02WB8", "C35NTVN04WK5", "C2BD1F6CB3L5", "BQ1TN1T79V9K", "BPT4J5TL5B4Z", "C2MHS238PDNS", "9NBLGGH4WJHM", "C3LF9PCRP9RP", "C36X13QTJ3V5", "9PJLG22DLCHN", "BS70ZCL9NZ9N", "C4M5BK5HMGJD", "BPS3XF74B9V1", "C57L9GR0HHB7", "9NX09HDT0RZC", "9VWGNH0VBZNS"];
    
    gameIdArrays["enhanced"] = ["C121T6H3D233", "BZ7FPSGCCMQQ", "BX7LV6RVGZK7", "BQ2NNLQPS8RS", "BWVBNCMF22ZK", "9N8WL8TMMQBT", "BZR51XD70NKD", "C3XCXTFS6FFQ", "BTPRW6R6XMPR", "BV8NQFT1CW4D", "9P8PD9XNLH7P", "BPTKRR85P0JW", "9MVHKHR8Z7Q8", "C07NM31J7HLP", "9NQMXCMB6MX1", "BW8G2QJKJ21S", "9NKFV8Q5TDF6", "9PNWBV3SC9SG", "C247SMCRRX72", "C48LJQLV397R", "9NH5NCHGQGVR", "9PDH6S74MD5J", "BP9JQBJM0FNW", "C4R968DKNJ7Z", "9N655D14L90W", "BV9ML45J2Q5V", "BNBLC4ZGFNKB", "9NN6C36B7ZV9", "BNXLPPCVS0HN", "C1F40HXRSXTC", "BWT5L9P3L60X", "BZGJRJC1FGF3", "BPMJ413V6BB2", "BW9TWC8L4JCS", "BSBTJM430VVR", "9NBLGGH43KZB", "C596V0P64DD6", "BPD69V4XZFLM", "C36FNWGM6PDC", "9N064LD6TDZ0", "BR47R4J78FH8", "BNVPW9NHWNM5", "BPL68T0XK96W", "C3TWVMK3BNNJ", "BTQ96QTQ58F3", "C0JDF1N3TWMW", "BR5134KX2SJ0", "9N3JNPBXRWWZ", "9NG7LG421V0Q", "9PPHPHP0PDT6", "9P9K78101LCW", "C348248BJZCQ", "9N79MG04BVQ1", "C34NB0F1B5WQ", "BVMMV3Q3ZB1F", "C3B1V55CDL0C", "C2W2WF8QHL9M", "C17FTPBWL0ZQ", "BPFDTJTHJ8G8", "BQMQ3K1BLV1T", "BQZ10L79X0FP", "BZJWV056VNPB", "BTBXS3M5QQSM", "BQ55HQMNMC92", "BWP0Q27QDNWQ", "BS95882KBB4F", "C0L2WKWPP5RS", "BSNJMZJH6HJW", "C4GH8N6ZXG5L", "C4KWWRBWC5NP", "9P267T7LVZRZ", "BTRRGQQQ49GH", "C4Q7K19Q0VBZ", "C2X6ZCNKN2WR", "C1VP5VMB1RC6", "BRVQ1WG51NVG", "9NXR6469DM2P", "C27XPR5XDMFT", "9P492HKR7P3H", "BQRB60PW2SDL", "BXNV9ZLK1CX9", "9P9JH5L65R5S", "BV05F8VT7JJ4", "9NTT51922L20", "C0FZNGPNQQRQ", "C3NNLTHW9T9W", "BX3M8L83BBRW", "BTZPFVFF9XJ6", "BPPZVT53HMWB", "9NTDHC46672V", "BS18VCF4NLQ9", "BSMX2D9V0C8B", "BSVZCMGZV52L", "C2S06Z61NJ9J", "9NQ0V4DWRK49", "BSR9NLHVF1KL", "BQ5WNW5NCPKR", "C06SJCBMPNKN", "BR607QB1QGZ9", "9NHFVWX1V7QJ", "C37XBX7DCBZ0", "C2R5R5P2DF3C", "BRPGP6H8P26F", "BSZM480TSWGP", "C5F2XDQPPJKZ", "9N6Z8DQXSQWH", "BW8PVL4CJ2Q6", "9N6V2181GHLM", "9PDGRSZS54LF", "9N5JRPQS65QX", "C3QH42WRGM3R", "9NSL68D814GC", "C5828HS8K39D", "BZRK5C951KK7", "BVCPR6991NVN", "C0CQ0MDKCCVZ", "9NDCS7WQGSNT", "BWMB5JS5X7XV", "BV433V4B23LM", "C2BTFXNW3TTT", "BXWM93RWR5XN", "BP4KK0NCLCHQ", "BRKX5CRMRTC2", "BQ1W1T1FC14W", "BNJL0X82JT46", "BNJJGRCSH3RM", "C3LW50BQJ878", "9MXB5MBTLJW6", "C250XSFRKNGT", "9N7PL7D5CDJ8", "C1B79109ZNN9", "9NBLGGH4SF90", "C40860J5R2MP", "BPWHP3HGHXKL", "C0HJ4C6S1GLH", "C2N5TTQ86BC6", "9MSWWJWRF4WC", "C3KLDKZBHNCZ", "BX3DSPQPVNQR", "BR7X7MVBBQKM", "BV2ZVP7PJZWL", "C1DDW4PRF6K5", "9MXSDJXFZQ25", "BPJ24T8CZ35P", "BQW91W950J67", "BZW2R4STVDNK", "BWPKGQV97N7N", "C3C71TV51SQC", "C0KSN20BRP7Z", "BXDH919M16G9", "BNMRPFLB3PQW", "9PHGB3PW2FG0", "BQQKG9H2STC0", "BVM002M8HH0S", "C3HQKX3B35PD", "BP2BW45WZ45Z", "BQMPK93Q7561", "BXWNX8ST04JS", "BT5P2X999VH2", "9NBLGGH4X6T9", "9PNJXVCVWD4K", "9N3NK5WW05HT", "C2KDNLT2H7DM", "BPKDQSSFQ9WV", "9NBLGGH4PBBM", "C28M1CDQZSR2", "C20WW4W29FQ1", "C232CL8LQQ9N", "BV0NM309K1TL", "BQ9D6D2XXB09", "C1H4ZFWT8216", "9P7LH4QVNCQD", "C08XR9BB6TH5", "C41M2F4NWB2S", "BWTH23DT25H3", "9P0KSSJH8W81", "BTDH0LJRWNWC", "BWMH4RQ4Q06F", "BX2DKFVVG3KZ", "BZMG5M432LWV", "BSP8H31KRM93", "9NVK1W7L093S", "9NMKBMTK5L8M", "BSXZVK24CMR3", "BRRC2BP0G9P0", "C42KCJCLX6MX", "9PL085Q81C5H", "C4Z7QM8FSXM2", "C0G1L18DT97K", "9PM5MXT618PH", "9NK3QLQSLG7K", "BTVZ6X9X9QN3", "BPQKC5TH07XF", "9PLBB8M900G0", "BRGLM9V090GW", "BV3FZP8HC2T5", "BS39NGVS2SP7", "9PB5X5WVZTB6", "BRJ6VLLZ4QJ5", "BZJNW8N57SHJ", "BS8KC7HC7V8V", "BWNRT1QMQWD6", "BX11KNLHDZ5K", "9NB9MRZR1T79", "BPKVH4C4XV4N", "C31QL60HVLT3", "9PHBVB32238T", "BNZ7B20VDXML", "BQKTZHL91458", "BSJQ8S0T2S74", "C1LD4244XCNJ", "9P9MC8B7R5FP", "9NS2PTV2WZGG", "BP4S3XLJG78M", "BSB132ZQVWZM", "9NGK7V4RRR9X", "BNBWFH89FCF1", "C2S06DT65XX4", "BQF513DGZ7H8", "C08MW8XHQN9G", "BWT2GPVWCH2F", "BVVFPLQNSWG0", "BQDVBCS5Z4N1", "BQXVSGCX6K8W", "C3QJ2Z8Q7HFR", "C0G91V37489H", "BSW8GKBVB5W8", "BRB2J2GKCC3H", "BNVQ3TXZ3JH4", "BS36XT3Z5ZKL", "BVF5ZGD9NM52", "BZ289TV4QVCK", "BVV8LHVGPBS3", "C4477GNRJPTJ", "BPW4Q628L5CV", "BQ4J4CST4H41", "9PGSCB1X2P7G", "BS37BWWP2PZ1", "BRZ0KJF2QZ8F", "BQPG2509CVJP", "9MTRX759ZJKT", "9N9NWNT5BZ7Z", "BR6DLJ4RDR9Q", "9P72G60JZDC4", "C1TBTQBVJMFL", "C02JLRKV8RPM", "9PDV8FKWP3B4", "9NBLGGH537BL", "9NQF1WZL3RC9", "C2QPC99GJGZZ", "9NRPPQHL2MZM", "C48LBRJJCP2L", "9P3R29Q9VK8F", "BW7KJWDBDLHN", "BXMPGZDSVVFK", "C22KC9H7NPT6", "BNG91PT95LQN", "C2MDS4V6NKNX", "BP1X6CCP4N49", "BTC0L0BW6LWC", "C111TBH1L3BH", "C2J3KXBTV02K", "C3VCWTXHWN1Z", "C2T1SFV91Q3R", "9NMP9B9KMKLF", "BWW1MP5KDLPB", "9PN00JGV48R1", "C3DTXQND7CRN", "BXL4538LK4DK", "BNW34B7V705C", "9P9KN2G4M2W0", "C355T88BBX1S", "BQ26HJ8LS3PD", "9P33WBGKGL5J", "9N48W01XWW41", "9N0DQP52TH6V", "C2HHTCSZRK9G", "BPPZVT8BZ15N", "BW45DJCZTLGJ", "BZM82SL2TP6V", "BQVQTL3PCH05", "BRVPDHDTJ8F9", "C4TXVZXD64NM", "C0W6P6N2Q4QF", "9NVNVLH2KR2W", "9PD0LHKS21XB", "BQ0TM0H5BFBZ", "BP95H7BN67D4", "BPT02H7D9BLJ", "9PFKKZ5T89NL", "9N8CD0XZKLP4", "BVZHPKZ3VTSF", "C596FKDKMQN7", "BZVPNM21TCJC", "9P2Q994ZWB64", "9ND4DMPS8J7J", "C4PZ0V39GXN2", "9N3WWJV5FC8H", "C4717QJDFR4S", "9MXQLQ4QJ037", "BWC95BZPFBS7", "9P1B60DJ4W2L", "9NF66PS9L3WC", "BXTW857WS0C3", "BNVZJ5ZB3WH6", "9PM9SQLCRP8M", "C0MN5DN8KR3F", "9NTF6CWQBSJ0", "9P22Z73FVPDW", "BNWM9F3C08B6", "BQMVWCMB8P59", "C0NHVWV6NXRK", "C17SFN1NXZ37", "C3FXTTH4NFQN", "BPNDKQN84N6L", "9PLV7ZZDZW1S", "9NW5LJ3GHS1Q", "C2DCJ95ZXBMS", "9P4D41K02WB8", "BW8JQLJ2GDT8", "C22T53SQ7FLM", "BTQKSHJSRP40", "C35NTVN04WK5", "9NBLGGH1Z6FQ", "BPSWGQBW7R3G", "C0QVR372HZ91", "9MZV25JSH9LC", "C3349K4QQLJS", "C488J2NND5LJ", "BWMH951M3G3P", "BVFDTJ1XF6CS", "9N185QL77D27", "BSM6ZPCDSJ0N", "BSQZ03S3RV54", "C4S60FPWF4XN", "C1R51ZV4ZZ28", "BQ1TN1T79V9K", "9N7B74SMT0RP", "C125W9BG2K0V", "BZR1DDL02STZ", "9P3PL76N0KWZ", "C4060P46HH4D", "9PCD5S0DMF5Z", "BQD5WRRP2D6Q", "9NNWK1DTB2G9", "BRVK4W7RVCXR", "BNQQ3WVBNZCQ", "9N7W3BCVXLP0", "C56MD02TBXSN", "BXFP2QC134V7", "9NS825HR2BJ9", "C2NC88M7NWZ1", "C2MHS238PDNS", "BWK9FSCZLQCR", "9NZV89BQ8ZWX", "9P2Z085BXSXD", "9N9L7RP9R0HJ", "9P9V13MZQZ41", "C256X5ZJ375P", "C4K9SQC799ZG", "BXH46NQT9W4Q", "C3V22FQD8N84", "BXZTB63NTG3P", "C0MHLGD6CP84", "BTWL97XSD0WT", "BTSQF5T410C6", "BTJH9Q47G3TG", "BWHFZNSL0PB5", "C2CSDTSCBZ0C", "C0GWTPD0S8S1", "BT3KQ8HLLZ6K", "C19XZL7CPS4Z", "BP8F95F6NVHM", "9NT4X7P8B9NB", "BXCPVTQ7T64Q", "C350VBGGCL6P", "9N5KN782GJWX", "9NNHZX41P7JV", "9N8LSNMV8HB4", "BNK358CGCZ9F", "9MZVTHHJKD3G", "9MTP483JT6DV", "BX3S1Q5DVHRD", "BSQLNP8TV73X", "9PLMGFWCFZ9G", "C3PXRMHMW3ZF", "C5DP7MGFR583", "9PK9SRK7XK0L", "C0T1DCKWD8W3", "BVZ0D05W8MP2", "BRKXCB2MD7S8", "BXC7CS90NX6S", "BWH56DK175P1", "9P4WKZXWP1QW", "C1TJ5KT8LT9J", "C2Q9FW49H8K3", "BQGVM408P8D1", "BZX8LHQFCCRH", "C5HGQXZ7PZW1", "C16HHTC9K79C", "9N2GDZTHPJZX", "C41ZDFQ82M1G", "BVTKN6CQ8W5F", "C1WRVQG6430C", "BRKVPTHJW525", "BSWTLFKMV96K", "BXBJQ1932138", "C2JFN44MMK4P", "9PHV10KXLJZT", "BNC1BNGGSWHV", "C0X2HNVH08FB", "C3VVNLQQ54F8", "C2N9CS4FS1QR", "BSK5FNCFN256", "BRGPD72KHM3Q", "BVQ3V30ZXVT5", "C31Q991VB6V9", "9P32WWJ0PJJK", "BXKFL4Q6WXVP", "9PKP696HVL7T", "BP6V6QZBMFP0", "C2HQVXVVLMKG", "C1SHGH9P2NPR", "9P31S2P58BGR", "9NJNQQ13CL42", "C4VKLMG1HLZW", "9NBC54MT6KHX", "C4RQNBKSLJG7", "C3JPD73R365S", "BS8SSR429S95", "9N3FRJ9KBTND", "9N510DK5KFQQ", "9N253PVJ49WT", "BQL8L17RV09Z", "C3B585LPZQD5", "9NVCM1N4725Q", "BX1DTCBD1HXJ", "BQ49WQ00XTWX", "BPS3XF74B9V1", "BPG20784Z9S4", "C0GMGV6XH996", "BWX7S94S2LMJ", "BXZWT67JBZJH", "C4N7CV3Q90X8", "BPR2TBS2KMQJ", "BNLPMG5L2P22", "9P5591C1FMQG", "BR765873CQJD", "C40HL7DFHWCX", "C4LLMHFQ1BXQ", "BNW16MD4GCRT", "9NRN0G8KJPSL", "C3D89V4NH8F2", "C57L9GR0HHB7", "BWQ5FC9WDJ6H", "BS4FRQ7PS1KR", "BQ5BD1F5VZHB", "C31WRP7QCC8C", "9NQCSR9JRTZ6", "BQWGBMCKRMSQ", "BPD53XCH282V", "BXB5DM2CF32M", "C0988KFJN8BL", "9N6HCRMGZ7NG", "9PJ06TZX4NMH"];
    
    gameIdArrays["fourk"] = ["BZR51XD70NKD", "BP9JQBJM0FNW", "C4R968DKNJ7Z", "C1F40HXRSXTC", "BZGJRJC1FGF3", "BW9TWC8L4JCS", "BSBTJM430VVR", "9NBLGGH43KZB", "BR5134KX2SJ0", "BQMQ3K1BLV1T", "BTBXS3M5QQSM", "BWP0Q27QDNWQ", "BTRRGQQQ49GH", "C0FZNGPNQQRQ", "BTZPFVFF9XJ6", "BSMX2D9V0C8B", "C2S06Z61NJ9J", "C2R5R5P2DF3C", "BSZM480TSWGP", "C5F2XDQPPJKZ", "9N6Z8DQXSQWH", "C2BTFXNW3TTT", "BRKX5CRMRTC2", "BNJJGRCSH3RM", "C3LW50BQJ878", "C0HJ4C6S1GLH", "BPJ24T8CZ35P", "BZW2R4STVDNK", "BWPKGQV97N7N", "9NBLGGH4X6T9", "9PNJXVCVWD4K", "9N3NK5WW05HT", "C2KDNLT2H7DM", "9NBLGGH4PBBM", "BX2DKFVVG3KZ", "BRRC2BP0G9P0", "C42KCJCLX6MX", "9PL085Q81C5H", "C0G1L18DT97K", "BX11KNLHDZ5K", "BP4S3XLJG78M", "C08MW8XHQN9G", "BQDVBCS5Z4N1", "BRB2J2GKCC3H", "BS36XT3Z5ZKL", "BVV8LHVGPBS3", "C4477GNRJPTJ", "9PDV8FKWP3B4", "9NBLGGH537BL", "BP1X6CCP4N49", "BXL4538LK4DK", "BPPZVT8BZ15N", "BQ0TM0H5BFBZ", "BZVPNM21TCJC", "BNWM9F3C08B6", "C3FXTTH4NFQN", "BW8JQLJ2GDT8", "9P3PL76N0KWZ", "9PCD5S0DMF5Z", "BNQQ3WVBNZCQ", "BTSQF5T410C6", "BTJH9Q47G3TG", "9NT4X7P8B9NB", "9PLMGFWCFZ9G", "C5DP7MGFR583", "9PHV10KXLJZT", "BXKFL4Q6WXVP", "C1SHGH9P2NPR", "BS8SSR429S95", "C4LLMHFQ1BXQ", "C57L9GR0HHB7", "BS4FRQ7PS1KR", "9PJ06TZX4NMH"];
    
    gameIdArrays["IDXPAgaming.homepage"] = ["BNBLC4ZGFNKB", "9NBLGGH43KZB", "9NJRX71M5X9P", "9NBLGGH4SF90", "9NBLGGH556N4", "C2KDNLT2H7DM", "9NBLGGH4PBBM", "BP4S3XLJG78M", "9PDV8FKWP3B4", "9NBLGGH1Z6FQ", "BVFDTJ1XF6CS", "9NBLGGH68LSX", "9PCD5S0DMF5Z", "9NBLGGH557RV", "9NBLGGH42536", "9NT4X7P8B9NB", "C2B4T86TXLRS"];
    
    gameIdArrays["editors"] = ["BQ2307M831ZG", "BS6HBZBJ1TWS", "BQSW32RWSJW5", "BR3TMVZ9PNWZ", "BV70995QL0QH", "BZGJRJC1FGF3", "BRDV9ZW67F96", "C2HCDG7L1469", "C4DQHRNN1ZN5", "BWP0Q27QDNWQ", "BSNJMZJH6HJW", "9NJRX71M5X9P", "C0LQH891MWM0", "C06SJCBMPNKN", "C2R5R5P2DF3C", "C5F2XDQPPJKZ", "BRKX5CRMRTC2", "BQ1W1T1FC14W", "C40860J5R2MP", "9MSWWJWRF4WC", "C3KLDKZBHNCZ", "BV6BRSLFJW3W", "BWPKGQV97N7N", "BXWNX8ST04JS", "9N3NK5WW05HT", "C0723XB6XJSX", "9NBLGGH4PBBM", "9NBLGGH51QT4", "BRRC2BP0G9P0", "C42KCJCLX6MX", "BRGLM9V090GW", "C1N2LVW7NNJ7", "BP4S3XLJG78M", "C4ZJGMMWGNK7", "BSZFRVD8JTJF", "BSHZGCGJNCN5", "BS36XT3Z5ZKL", "C253HWJP0L18", "9PDV8FKWP3B4", "BXL4538LK4DK", "C355T88BBX1S", "C0GQP41KXPVZ", "BP8WDV3T37N7", "C17SFN1NXZ37", "BPNDKQN84N6L", "9NBLGGH1Z6FQ", "BXHG2GX28L23", "BVFDTJ1XF6CS", "BRS6ZCKHRNVX", "C125W9BG2K0V", "BQZHCKXXZJ0G", "BP4LVT41S1QK", "9P3PL76N0KWZ", "C2NC88M7NWZ1", "C2MHS238PDNS", "C4K9SQC799ZG", "C0GWTPD0S8S1", "C289KCH8WP0F", "C350VBGGCL6P", "BTBWJ7WC1Q76", "9PLMGFWCFZ9G", "BVZ0D05W8MP2", "9P4WKZXWP1QW", "C0X2HNVH08FB", "BSK5FNCFN256", "BRGPD72KHM3Q", "BSXLFN5QQZSC", "BR765873CQJD", "C57L9GR0HHB7", "BQWGBMCKRMSQ"];
    
    gameIdArrays["indie"] = ["BNXLPPCVS0HN", "C4NWPX63JMZV", "C0N22P73QZ60", "BPZT3CQCCWKG", "BNKXZ9WFM6H3", "C2KV821GS8X5", "BTDHX5Z7GL0W", "9P16M6LF0QFH", "BQS7GXV4PSDT", "BPPZVT8BZ15N", "9P8Q4W21QQZ2", "C1KMTP26BWNR", "BVKZ930DVZL3", "C0X8F2F021PR", "9NLQTDKD0PMT", "BP79KKVGDDH1", "BZX1G0C724KC", "BXBM72LSWFJ0", "BSWL46TWR3QC", "BW9QK4KTPHNW", "BZC4XC42ZHH7", "C1WM3781H275", "C06HH0WLCGWC", "9PCTJNL0GDS9", "C35FMCR4428S", "C2P43HVQX0XL", "BW6B077FCH11", "BXZWT67JBZJH", "BT9FFLG51VVG", "BR4C6XCRSL72", "C42G8H61ZZWZ"];
    
    gameIdArrays["startingat"] = ["BZJH18QJVDVW", "BS8M9DCFB5BJ", "BTB6374NZGV3", "BVK0VM761V51", "BZ53VHGD3J8Q", "BP2K9G8X3WW0", "C2GMPQD1809D", "BRL7GC0GP1BM", "C4DZWT2ZJZ2H", "BS6HBZBJ1TWS", "C07NM31J7HLP", "BR3TMVZ9PNWZ", "BP9JQBJM0FNW", "BPPFWJZ0QTV2", "BV70995QL0QH", "BX2CS20ZVL3L", "BX7ZSF0MJTSJ", "BQPZGCHPFPV6", "BNBLC4ZGFNKB", "BT990QWD1DLF", "BSF9FVV3P8D9", "9PHF1VFSTHWZ", "BRKMHZX1RCF2", "BZGJRJC1FGF3", "BRQH27C9RGXS", "BZQQ7HX8PZ05", "BTMS1PXLQ6P6", "BXQQQQ8HRBSF", "BXVQ8M4J9HNM", "BQ9S8ZKCT3Q7", "C1CLVTZ63W0W", "BRDV9ZW67F96", "C0ZHSWVR0Q2B", "BRW49CBS558D", "BSLX1RNXR6H7", "BPL68T0XK96W", "C2WJ0ZTTWVQS", "BPX2DBJS60SQ", "BS1C1BS3SS0V", "BVDG19SHG495", "BPR721XZ2KBH", "C3NGPJHHWPW6", "BSN0SF08LGD4", "C4J8PCXK5XLQ", "C2P1CF27VVDF", "BWG6LFT5QDR3", "BVDXPTTTG0DL", "BPFDTJTHJ8G8", "BVTFP7L3CVL8", "BWP0Q27QDNWQ", "BS95882KBB4F", "BRR15CC1W05Q", "BQ9Q620NC614", "C4GH8N6ZXG5L", "C10WNR4SJM9G", "BX4J85JZNGXQ", "BXF6K0CJZKMW", "BV05F8VT7JJ4", "C52GX7JZ5HR6", "C0FZNGPNQQRQ", "BX3M8L83BBRW", "BTZPFVFF9XJ6", "BPPZVT53HMWB", "BRMV7D6CLMSJ", "C0TJ9C60KQZ9", "BW2XDRNSCCPZ", "BSMX2D9V0C8B", "BSVZCMGZV52L", "C2S06Z61NJ9J", "BXQ6MXMCSNR7", "BXQ32G8GSX27", "C5GDG0CQ99RJ", "BZV7W98B3XN4", "C3CSPBFVQ80K", "C06SJCBMPNKN", "BXDTBRPVQZHK", "C3GDK9QKWLRD", "BQKSXQGJTN43", "BPZT3CQCCWKG", "BSZM480TSWGP", "C5F2XDQPPJKZ", "C0XBNVR137DZ", "C5828HS8K39D", "BZRK5C951KK7", "BQ023H8GXZ3T", "BX03760D0QGN", "C4R1DGLMN22X", "BPRNXX08RL94", "BTVFFDDZ0TL4", "C1GB81VDXPR3", "BX4RTV7M28VS", "C2BTFXNW3TTT", "C1C16ZZZ79VD", "BPMMFJDVP9NF", "BPMKJ066RSZP", "C3LW50BQJ878", "BZTZV149BZ44", "C50K3Z0K68VP", "C3KLDKZBHNCZ", "BX3DSPQPVNQR", "BR7X7MVBBQKM", "BV6BRSLFJW3W", "C1DDW4PRF6K5", "C1NJFJM3FPWN", "BPJ24T8CZ35P", "BWPKGQV97N7N", "C3C71TV51SQC", "BPR4TX9NRWRW", "C3HQKX3B35PD", "BXWNX8ST04JS", "9NBLGGH4X6T9", "9PNJXVCVWD4K", "9N3NK5WW05HT", "C2KDNLT2H7DM", "BPKDQSSFQ9WV", "9NBLGGH4PBBM", "BZKMXC4MVHJF", "BV0NM309K1TL", "C3FL7DRCFD8W", "BPJ686W6S0NH", "BTDH0LJRWNWC", "BS0PFBB91B3V", "C01FGSV71GFB", "BRRC2BP0G9P0", "C42KCJCLX6MX", "BV0LH18Q1VHW", "C0G1L18DT97K", "BPQKC5TH07XF", "BRGLM9V090GW", "BXLH97R22VM2", "BT4KVQ198M8P", "BW1WF4K45C78", "BX11KNLHDZ5K", "BPKVH4C4XV4N", "C17GQF31D617", "BQKTZHL91458", "BSJQ8S0T2S74", "BV4S8N6C2R24", "BR2F4DG4WXF8", "C08MW8XHQN9G", "BVVFPLQNSWG0", "BRMFLRV79C3H", "9P3XSG3180NT", "BVK1LRW59L64", "C5347LXVMJDD", "BSZFRVD8JTJF", "BNKXZ9WFM6H3", "C0GMW8QH429T", "C0G91V37489H", "BRW7FLNQ19PK", "BSHZGCGJNCN5", "BZP3R43F8DNH", "C1W6DR9Z9684", "BRB2J2GKCC3H", "C5FP8DQ3R1WF", "BVF5ZGD9NM52", "BZ289TV4QVCK", "BVV8LHVGPBS3", "C1N8NK80CLXV", "9PGSCB1X2P7G", "BS37BWWP2PZ1", "C4VFVZGF3480", "C38Z8L4RHSHS", "C253HWJP0L18", "BPPTRQZRJ341", "C03J6WR23XQ9", "BXMPGZDSVVFK", "BNG91PT95LQN", "BTC0L0BW6LWC", "C2T1SFV91Q3R", "BXL4538LK4DK", "BNW34B7V705C", "9P9KN2G4M2W0", "C355T88BBX1S", "C3VM0TMWNZ5M", "BXWJNW4170RM", "BQ26HJ8LS3PD", "BVPXC5S3574J", "BXN1NF0DWTRC", "BW45DJCZTLGJ", "BZ292DNW53RF", "C36C4T4TB7KN", "BNR4SFLN2Q2K", "BVZHPKZ3VTSF", "BP8WDV3T37N7", "BZK08LZ460L5", "9P2Q994ZWB64", "C4PZ0V39GXN2", "BXVBZGL29961", "BWC95BZPFBS7", "BNCZHKWRZ7BR", "BTJ0T8C04ZBV", "C4HZC7LJG6PX", "BPQM748J3LLT", "BSWF567PL81W", "C0NHVWV6NXRK", "BW3P8NLFK6CV", "BS1V82FLTGKJ", "BQ0B04MG31TZ", "BNWBBMNNBBN2", "C2DCJ95ZXBMS", "9P4D41K02WB8", "BXHG2GX28L23", "9PLJWXG6ZKVQ", "C1XHZ605DZPG", "C08CV6MR919R", "BXCVNFBPZHXQ", "BVFDTJ1XF6CS", "BSM6ZPCDSJ0N", "BTDRTXBKDBRR", "BX37QNK12GHR", "BQC3S5ZJJ9H5", "BQBC0WHWX9J3", "BW893R0DPNN6", "BRVK4W7RVCXR", "BR7ZJJHGWT5X", "BZX1G0C724KC", "C36LCCGGHKL1", "BRJ5JRCJ8M6N", "BT8CSKSR2L49", "BXBM72LSWFJ0", "C2MHS238PDNS", "BZ5VLVX84STW", "C4K9SQC799ZG", "C4VLMWJWM7BG", "BRX5RDKZ44NV", "C3ZC9K2SQPKF", "BP5FM5BGFKP3", "BWHFZNSL0PB5", "BSFZLNB9R9RX", "C0GWTPD0S8S1", "BZMMH8HQ50NR", "9NT4X7P8B9NB", "BR26S2C6SKN1", "C350VBGGCL6P", "C4TS3RK0KDRJ", "BNK369Q6JJ5T", "BTBWJ7WC1Q76", "BTLLWKRPBRG2", "BRZHFR5XBLQS", "BR36ZLXRTK08", "C14DN8WJF5G5", "C0ZJ976BH91X", "9P40CJ0QJRHH", "BWH56DK175P1", "BXCGZFRKJWQN", "BRJGPRMBV1NT", "BS70ZCL9NZ9N", "BXKJN3WVT1C2", "C59RQ0ZVVG2V", "C16HHTC9K79C", "BV7JZ6MTR47K", "BX8HV1B694PC", "BX89DK9KLJ89", "C08JXNK0VG5L", "BNNSLV91CTKJ", "BRKVPTHJW525", "BXSPZM4KZS5F", "C4HMNPGDC80T", "BXBJQ1932138", "BW9QK4KTPHNW", "C0X2HNVH08FB", "C2N9CS4FS1QR", "BSK5FNCFN256", "BRGPD72KHM3Q", "BVQ3V30ZXVT5", "C06HH0WLCGWC", "BVCRSR6XSDW5", "C01XK01QTZB1", "BNSDHDK45KBR", "C346VJHCG26X", "BQ6NN0JBZ8Z2", "BWX7S94S2LMJ", "C4N7CV3Q90X8", "BSXLFN5QQZSC", "C4DMGRPNSHXG", "BT9FFLG51VVG", "C4LLMHFQ1BXQ", "BSFCZ5066BLJ", "C4BZ7X545J1T", "BPNCTLMSFQR5", "BS4FRQ7PS1KR", "BQ5BD1F5VZHB", "9NQCSR9JRTZ6", "BQWGBMCKRMSQ", "BXB5DM2CF32M", "BZH49H6J7469", "9NLSLFQHNDVS","9N9J38LPVSM3","9P4SH7HLMLFS","9N1CS194W1Q6"];
    
    gameIdArrays["physical"] = [""];
    
    allGamesData = function(callback, gamearray) {
    
      var urlRegion = document.URL.toLowerCase().split("xbox.com/")[1].slice(0, 5);
      if (urlRegion === "en-ae") {
        urlRegion = "ar-ae";
      } else if (urlRegion === "en-sa") {
        urlRegion = "ar-sa";
      } else if (urlRegion === "en-il") {
        urlRegion = "he-il";
      }
    
      if (gamearray !== undefined && gamearray.length > 0) { fullGameArray = gamearray }
    
      //overrides
      fullcarouselimages = ["9PGSCB1X2P7G", "BRKX5CRMRTC2", "BZGJRJC1FGF3", "BPL68T0XK96W", "BV0NSD4NN4V4", "BPQ955FQFPH6", "BZRK5C951KK7", "BWPKGQV97N7N", "BPJ686W6S0NH", "9PDV8FKWP3B4", "BNG91PT95LQN", "C0QN5M9ZTC38", "C0GWTPD0S8S1", "C40860J5R2MP", "BR7X7MVBBQKM", "C4LLMHFQ1BXQ", "9NDDH3R9DF40", "BS36XT3Z5ZKL", "C17SFN1NXZ37", "BVFDTJ1XF6CS", "C4VLMWJWM7BG", "C57L9GR0HHB7", "BX4RTV7M28VS", "BS37BWWP2PZ1", "BW2XDRNSCCPZ", "BSZM480TSWGP", "BRGPD72KHM3Q", "C3KLDKZBHNCZ", "C3HQKX3B35PD", "C2N9CS4FS1QR", "C0X2HNVH08FB", "9NBLGGH51QT4", "BPBC39LH0Q9B", "BVV8LHVGPBS3", "BWC95BZPFBS7", "BXL4538LK4DK", "BQMVWCMB8P59", "C2BTFXNW3TTT", "9P4WKZXWP1QW", "BRJGPRMBV1NT"]
      omitimages = ["https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcB7WVDn.f4Uli2dyqvJAR1iMrHLquSMr6CthfgctOtrvg54xKrmjYXQ1BkhiG4i6RT1HzvxN47vdGKnWcFR1BrIpKbs257dc4YHkUyePffX5a.c3Z9hfO6bkguMWKak4QJZyll1iBDl8IFZ12EEgxVXSW2Bh6iGMM6qEszDFtB80-&w=980&format=jpg"]
      specialexclusives = ["9P5SL4LDLMG3"];
      // games excluded in particular locale
      var locExclusions = ["9NT4X7P8B9NB:ja-jp", "9PDV8FKWP3B4:ja-jp"];
    
      for (var i = 0; i < locExclusions.length; i++) {
        var thegame = locExclusions[i].split(":")[0];
        var theloc = locExclusions[i].split(":")[1];
        if (urlRegion === theloc) {
          fullGameArray = fullGameArray.filter(function(v) { return v !== thegame});
        }
      }
      // games only included in particular locale
      var locInclusions = ["9NLM45C6729Z:ja-jp"];
      for (var i = 0; i < locInclusions.length; i++) {
        var thegame = locInclusions[i].split(":")[0];
        var theloc = locInclusions[i].split(":")[1];
        if (urlRegion !== theloc) {
          fullGameArray = fullGameArray.filter(function(v) { return v !== thegame});
        }
      }
      //end overrides
    
      GUID_pop(fullGameArray);
    
      var catGuidArray = ["HDRGaming", "IDXPAgaming.homepage", "TryForFree.homepage"];
      //var catClassArray = ["catFeatured", "catRecent", "catMs", "catId", "catAll"];
      var fullGameListId = "SpringSale2017All.games";
      var countcheckUrl = "http://reco-public.rec.mp.microsoft.com/channels/Reco/v8.0/lists/collection/CATEGORY?itemTypes=Game&DeviceFamily=Windows.Xbox&market=US&count=1";
      var listUrl = "http://reco-public.rec.mp.microsoft.com/channels/Reco/v8.0/lists/collection/CATEGORY?itemTypes=Game&DeviceFamily=Windows.Xbox&market=US&count=200&skipItems=0";
    
      var chunktotal = Math.ceil(fullGameArray.length / 20)
    
      function GUID_pop(rawGuids) {
        var countryCode = urlRegion.split("-")[1].toUpperCase();
        var guidUrl = 'https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=GAMEIDS&market=' + countryCode + '&languages=' + urlRegion + '&MS-CV=DGU1mcuYo0WMMp+F.1'
    
        var first12 = rawGuids.slice(0,12)
        rawGuids = rawGuids.slice(12)
    
        var firstToUrl = first12.join(",");
        guidUrl = guidUrl.replace("GAMEIDS", firstToUrl)
        $.get(guidUrl)
            .done(function(responseData) {
              var apiData = responseData;
              populate(apiData, 0, firstToUrl);
              guidUrl = 'https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=GAMEIDS&market=' + countryCode + '&languages=' + urlRegion + '&MS-CV=DGU1mcuYo0WMMp+F.1'
              restPop();
            })
    
        function restPop() {
          var m,n,temparray,chunk = 20;
          var arrayCount = 1
          for (m=0,n=rawGuids.length; m<n; m+=chunk) {
            (function(m,n) {
            temparray = rawGuids.slice(m,m+chunk);
            var guidsToUrl = temparray.join(",");
            guidUrl = guidUrl.replace("GAMEIDS", guidsToUrl)
    
            $.get(guidUrl)
              .done(function(responseData) {
                var apiData = responseData;
                populate(apiData, arrayCount, guidsToUrl);
                arrayCount++
              })
            guidUrl = 'https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=GAMEIDS&market=' + countryCode + '&languages=' + urlRegion + '&MS-CV=DGU1mcuYo0WMMp+F.1'
          })(m,n);
          }
        }
    
        var popcounter = 0;
        var bigidUrls = biUrls.items.urls;
        var biuArray = Object.keys(bigidUrls);
        allGames = {};
        gameIdArrays["exclusives"] = [];
        gameIdArrays["newreleases"] = [];
        gameIdArrays["multiplayer"] = [];
        gameIdArrays["upcoming"] = [];
        gameIdArrays["kidsfamily"] = [];
        gameIdArrays["onsale"] = [];
    
        selectedGames = [];
        prunedGames = [];
        shownGames = [];
    
        var nowdate = new Date();
        var nowmonthsdate = new Date();
        var monthsagofilterdate = new Date(nowmonthsdate.setMonth(nowmonthsdate.getMonth() - 2));
        var locgamesremoved = 0;
    
        function populate(data, count, bigidsgiven) {
          // var now = new Date();
          // var monthsago = new Date(now.setMonth(now.getMonth() - 9));
          var productQuantity = data.Products.length;
    
          bigidsgiven = bigidsgiven.split(",");
          var allprodids = [];
          for (var s = 0; s < productQuantity; s++) {
            allprodids.push(data.Products[s].ProductId);
          }
          var eliminated = [];
          eliminated = bigidsgiven.filter(function(v) { return allprodids.indexOf(v) === -1});
    
          for (var w = 0; w < eliminated.length; w++) {
            locgamesremoved++
            var idind = fullGameArray.indexOf(eliminated[w]);
            if (idind !== -1) { fullGameArray.splice(idind, 1); }
            var idind1 = gameIdArrays["HDRGaming"].indexOf(eliminated[w]);
            if (idind1 !== -1) { gameIdArrays["HDRGaming"].splice(idind1, 1); }
            var idind2 = gameIdArrays["TryForFree.homepage"].indexOf(eliminated[w]);
            if (idind2 !== -1) { gameIdArrays["TryForFree.homepage"].splice(idind2, 1); }
            var idind3 = gameIdArrays["enhanced"].indexOf(eliminated[w]);
            if (idind3 !== -1) { gameIdArrays["enhanced"].splice(idind3, 1); }
            var idind4 = gameIdArrays["fourk"].indexOf(eliminated[w]);
            if (idind4 !== -1) { gameIdArrays["fourk"].splice(idind4, 1); }
            var idind5 = gameIdArrays["IDXPAgaming.homepage"].indexOf(eliminated[w]);
            if (idind5 !== -1) { gameIdArrays["IDXPAgaming.homepage"].splice(idind5, 1); }
            var idind6 = gameIdArrays["exclusives"].indexOf(eliminated[w]);
            if (idind6 !== -1) { gameIdArrays["exclusives"].splice(idind6, 1); }
            var idind7 = gameIdArrays["kidsfamily"].indexOf(eliminated[w]);
            if (idind7 !== -1) { gameIdArrays["kidsfamily"].splice(idind7, 1); }
            var idind8 = gameIdArrays["newreleases"].indexOf(eliminated[w]);
            if (idind8 !== -1) { gameIdArrays["newreleases"].splice(idind8, 1); }
            var idind9 = gameIdArrays["multiplayer"].indexOf(eliminated[w]);
            if (idind9 !== -1) { gameIdArrays["multiplayer"].splice(idind9, 1); }
            var idind10 = gameIdArrays["upcoming"].indexOf(eliminated[w]);
            if (idind10 !== -1) { gameIdArrays["upcoming"].splice(idind10, 1); }
            var idind11 = gameIdArrays["editors"].indexOf(eliminated[w]);
            if (idind11 !== -1) { gameIdArrays["editors"].splice(idind11, 1); }
            var idind12 = gameIdArrays["onsale"].indexOf(eliminated[w]);
            if (idind12 !== -1) { gameIdArrays["onsale"].splice(idind12, 1); }
            var idind13 = gameIdArrays["physical"].indexOf(eliminated[w]);
            if (idind13 !== -1) { gameIdArrays["physical"].splice(idind13, 1); }
          }
    
          for (var t = 0; t < allprodids.length; t++) {
            var excludetest = false;
           // if (allprodids.indexOf(bigidsgiven[t]) !== -1) {
              var producttest = data.Products[t];
              var excludeit404 = 0;
              var excludeitpurch = 0;
              producttest.DisplaySkuAvailabilities.forEach(function(d) {
                d.Availabilities.forEach(function(av) {
                  if (av.Actions.indexOf("Purchase") !== -1) {
                    excludeit404+= 1;
                    excludeitpurch+= 1;
                  }
                  if (av.Actions.indexOf("Details") !== -1) {
                    excludeit404+= 1;
                  } 
                })
              })
              if (excludeit404 === 0 && excludeitpurch === 0) {
                excludetest = true;
              }
            //}
            
            if (excludetest === true) {
              console.log("NOTE: BigID " + allprodids[t] + " unavailable to buy in this locale. Removing from game lists.");
              locgamesremoved++
              popcounter--
              var idind = fullGameArray.indexOf(allprodids[t]);
              if (idind !== -1) { fullGameArray.splice(idind, 1); }
              var idind1 = gameIdArrays["HDRGaming"].indexOf(allprodids[t]);
              if (idind1 !== -1) { gameIdArrays["HDRGaming"].splice(idind1, 1); }
              var idind2 = gameIdArrays["TryForFree.homepage"].indexOf(allprodids[t]);
              if (idind2 !== -1) { gameIdArrays["TryForFree.homepage"].splice(idind2, 1); }
              var idind3 = gameIdArrays["enhanced"].indexOf(allprodids[t]);
              if (idind3 !== -1) { gameIdArrays["enhanced"].splice(idind3, 1); }
              var idind4 = gameIdArrays["fourk"].indexOf(allprodids[t]);
              if (idind4 !== -1) { gameIdArrays["fourk"].splice(idind4, 1); }
              var idind5 = gameIdArrays["IDXPAgaming.homepage"].indexOf(allprodids[t]);
              if (idind5 !== -1) { gameIdArrays["IDXPAgaming.homepage"].splice(idind5, 1); }
              var idind6 = gameIdArrays["exclusives"].indexOf(allprodids[t]);
              if (idind6 !== -1) { gameIdArrays["exclusives"].splice(idind6, 1); }
              var idind7 = gameIdArrays["kidsfamily"].indexOf(allprodids[t]);
              if (idind7 !== -1) { gameIdArrays["kidsfamily"].splice(idind7, 1); }
              var idind8 = gameIdArrays["newreleases"].indexOf(allprodids[t]);
              if (idind8 !== -1) { gameIdArrays["newreleases"].splice(idind8, 1); }
              var idind9 = gameIdArrays["multiplayer"].indexOf(allprodids[t]);
              if (idind9 !== -1) { gameIdArrays["multiplayer"].splice(idind9, 1); }
              var idind10 = gameIdArrays["upcoming"].indexOf(allprodids[t]);
              if (idind10 !== -1) { gameIdArrays["upcoming"].splice(idind10, 1); }
              var idind11 = gameIdArrays["editors"].indexOf(allprodids[t]);
              if (idind11 !== -1) { gameIdArrays["editors"].splice(idind11, 1); }
              var idind12 = gameIdArrays["onsale"].indexOf(allprodids[t]);
              if (idind12 !== -1) { gameIdArrays["onsale"].splice(idind12, 1); }
              var idind13 = gameIdArrays["physical"].indexOf(allprodids[t]);
              if (idind13 !== -1) { gameIdArrays["physical"].splice(idind13, 1); }
            }
          }
          
          for (var i = 0; i < productQuantity; i++) {
            var itemId = data.Products[i].ProductId.toUpperCase();
    
            var itemTitle = data.Products[i].LocalizedProperties[0].ProductTitle;
            if (itemTitle === undefined) {
              itemTitle = "";
            }
            var titleClickname = itemTitle.toLowerCase().replace(/\s/g, "-").replace(/[^>a-z0-9-]/gi,'');
            if (titleClickname === "") {
              titleClickname = "-";
            }
    
            var shortdesc = data.Products[i].LocalizedProperties[0].ShortDescription;
            if (shortdesc === "") {
              shortdesc = data.Products[i].LocalizedProperties[0].ProductDescription;
            }
            if (shortdesc === undefined) {
              shortdesc = "";
            }
    
            // determine physical or download
            if (gameIdArrays["physical"].indexOf(itemId) !== -1) {
              var phys = "true";
            } else {
              var phys = "false";
            }
    
            // get boxshot
            if (phys === "false" && data.Products[i].LocalizedProperties[0].Images !== undefined) {
              var imagesNum = data.Products[i].LocalizedProperties[0].Images.length;
              var imageInd = 999;
              for (var j = 0; j < imagesNum; j++) {
                if (data.Products[i].LocalizedProperties[0].Images[j].ImagePurpose === "Poster") {
                  imageInd = j;
                  break;
                }
              }
              if (imageInd === 999) {
                for (var j = 0; j < imagesNum; j++) {
                  if (data.Products[i].LocalizedProperties[0].Images[j].Width < data.Products[i].LocalizedProperties[0].Images[j].Height) {
                    imageInd = j;
                    break;
                  }
                }
              }
              if (imageInd === 999) {
                imageInd = 1
              }
              if (data.Products[i].LocalizedProperties[0].Images[imageInd]) {
                var itemBoxshot = data.Products[i].LocalizedProperties[0].Images[imageInd].Uri.replace("http:", "https:");
                var itemBoxshotSmall;
              } else {
                var itemBoxshot = "https://compass-ssl.xbox.com/assets/3b/7a/3b7a3497-fc6a-4cae-b37e-48c487b084c5.jpg?n=X1-Standard-digital-boxshot_584x800.jpg";
                var itemBoxshotSmall = "https://compass-ssl.xbox.com/assets/3b/7a/3b7a3497-fc6a-4cae-b37e-48c487b084c5.jpg?n=X1-Standard-digital-boxshot_584x800.jpg";
              }
              if (itemBoxshot.indexOf("xboxlive.com") !== -1) {
                itemBoxshotSmall = itemBoxshot + "&w=140&format=jpg";
                itemBoxshot = itemBoxshot + "&w=200&format=jpg"; 
              } else {
                itemBoxshotSmall = itemBoxshot;
              }
            } else if (phys === "true" && data.Products[i].LocalizedProperties[0].Images !== undefined) {
                var imagesNum = data.Products[i].LocalizedProperties[0].Images.length;
                var imageInd = 999;
                for (var j = 0; j < imagesNum; j++) {
                  if (data.Products[i].LocalizedProperties[0].Images[j].ImagePurpose === "Poster") {
                    imageInd = j;
                    break;
                  }
                }
                if (data.Products[i].LocalizedProperties[0].Images[imageInd]) {
                  var itemBoxshot = data.Products[i].LocalizedProperties[0].Images[imageInd].Uri.replace("http:", "https:");
                  var itemBoxshotSmall;
                } else {
                  if (data.Products[i].LocalizedProperties[0].Images[0]) {
                    if (data.Products[i].LocalizedProperties[0].Images[0].Uri.toLowerCase().indexOf("s-microsoft") === -1) {
                      var itemBoxshot = data.Products[i].LocalizedProperties[0].Images[0].Uri.replace("http:", "https:") + "&w=231&h=197&q=90&m=6&b=%23FFFFFFFF&o=f";
                    } else {
                      var itemBoxshot = data.Products[i].LocalizedProperties[0].Images[0].Uri.replace("http:", "https:")
                    }
                    var itemBoxshotSmall = itemBoxshot;
                  } else {
                    var itemBoxshot = "https://compass-ssl.xbox.com/assets/3b/7a/3b7a3497-fc6a-4cae-b37e-48c487b084c5.jpg?n=X1-Standard-digital-boxshot_584x800.jpg";
                    var itemBoxshotSmall = "https://compass-ssl.xbox.com/assets/3b/7a/3b7a3497-fc6a-4cae-b37e-48c487b084c5.jpg?n=X1-Standard-digital-boxshot_584x800.jpg";
                  }
                } 
              } else {
                var itemBoxshot = "https://compass-ssl.xbox.com/assets/3b/7a/3b7a3497-fc6a-4cae-b37e-48c487b084c5.jpg?n=X1-Standard-digital-boxshot_584x800.jpg";
                var itemBoxshotSmall = "https://compass-ssl.xbox.com/assets/3b/7a/3b7a3497-fc6a-4cae-b37e-48c487b084c5.jpg?n=X1-Standard-digital-boxshot_584x800.jpg";
              }
    
            // get screenshot
            if (phys === "false" && data.Products[i].LocalizedProperties[0].Images !== undefined) {
              var imagesNum = data.Products[i].LocalizedProperties[0].Images.length;
              var imageInd = 1;
              for (var j = 0; j < imagesNum; j++) {
                var im = data.Products[i].LocalizedProperties[0].Images[j];
                if ((im.ImagePurpose === "ImageGallery" || im.ImagePurpose === "Screenshot") && (im.Height < im.Width)) {
                  imageInd = j;
                  break;
                }
              }
              if (data.Products[i].LocalizedProperties[0].Images[imageInd]) {
                var itemScreenshot = data.Products[i].LocalizedProperties[0].Images[imageInd].Uri.replace("http:", "https:");
              } else {
                var itemScreenshot = "https://compass-ssl.xbox.com/assets/3b/7a/3b7a3497-fc6a-4cae-b37e-48c487b084c5.jpg?n=X1-Standard-digital-boxshot_584x800.jpg";
              }
              if (itemScreenshot.indexOf("xboxlive.com") !== -1) {
                itemScreenshot = itemScreenshot + "&w=480&format=jpg"; 
              }
            } else {
              if (data.Products[i].LocalizedProperties[0].Images !== undefined && data.Products[i].LocalizedProperties[0].Images[0]) {
                var itemScreenshot = data.Products[i].LocalizedProperties[0].Images[0].Uri.replace("http:", "https:") + "&w=231&h=197&q=90&m=6&b=%23FFFFFFFF&o=f";
              } else {
                var itemScreenshot = "https://compass-ssl.xbox.com/assets/3b/7a/3b7a3497-fc6a-4cae-b37e-48c487b084c5.jpg?n=X1-Standard-digital-boxshot_584x800.jpg";
              }
            }
    
            // get screenshot array
            var ssarray = [];
            if (phys === "false" && data.Products[i].LocalizedProperties[0].Images !== undefined) {
              var imagesNum = data.Products[i].LocalizedProperties[0].Images.length;
              var sslimit = 5;
              var imageInd = 1;
              for (var j = 0; j < imagesNum; j++) {
                var im = data.Products[i].LocalizedProperties[0].Images[j];
                if ((im.ImagePurpose.toLowerCase() === "imagegallery" || im.ImagePurpose.toLowerCase() === "screenshot") && (im.Height < im.Width)) {
                  if (im.Uri.indexOf("xboxlive.com") !== -1) {
                    var ssimg = im.Uri.replace("http:", "https:") + "&w=980&format=jpg";
                  } else {
                    var ssimg = im.Uri.replace("http:", "https:");
                  }
                  if (ssarray.length < sslimit) {
                    if (ssarray.indexOf(ssimg) === -1 && omitimages.indexOf(ssimg) === -1) {
                      ssarray.push(ssimg);
                    }
                  } else {
                    break;
                  } 
                }
              }
            }
            
            
            var releaseDate = data.Products[i].MarketProperties[0].OriginalReleaseDate;
            if (releaseDate === undefined) {
              releaseDate = 0;
            }
            var msproduct = data.Products[i].IsMicrosoftProduct;
            if (specialexclusives.indexOf(itemId) !== -1) {
              msproduct = true;
            }
            var multiplayer = "false";
            var coop = "false";
            var mptest = data.Products[i].Properties;
            if (mptest.Attributes) {
              for (var n = 0; n < mptest.Attributes.length; n++) {
                if (mptest.Attributes[n].Name.toLowerCase().indexOf("multiplayer") !== -1) {
                  multiplayer = "true";
                }
                if (mptest.Attributes[n].Name.toLowerCase().indexOf("coop") !== -1) {
                  coop = "true";
                }
              }
            }
    
            //get prices
            var listprice;
            var msrpprice;
            var currencycode;
            var onsale = "false";
            var gwg = "false";
            var golddiscount = "false"; // deals with gold ... and gold member sale prices?
            var goldandsilversale = "false";
            var goldandsilversalegoldprice = 100000000;
            var specialprice = 100000000;
            var eaaccessgame = "false";
            var gamepassgame = "false";
            var purchasable = "false";
            var tempea = "false"
            var tempgs = "false";
            var goldaffids = [];
            if (phys === "false") {
              if (data.Products[i].LocalizedProperties[0].EligibilityProperties !== null && data.Products[i].LocalizedProperties[0].EligibilityProperties !== undefined && 
                  data.Products[i].LocalizedProperties[0].EligibilityProperties !== "undefined") {
                if (data.Products[i].LocalizedProperties[0].EligibilityProperties.Affirmations.length > 0) {
                  data.Products[i].LocalizedProperties[0].EligibilityProperties.Affirmations.forEach(function(aff) {
                    if (aff.Description.toLowerCase().indexOf("ea access") !== -1) {
                      tempea = "true";
                    }
                    if (aff.Description.toLowerCase().indexOf("game pass") !== -1) {
                      gamepassgame = "true";
                    }
                    if (aff.Description.toLowerCase().indexOf("gold") !== -1) {
                      tempgs = "true";
                      goldaffids.push(aff.AffirmationProductId);
                    }
                  })
                }
              }
              data.Products[i].DisplaySkuAvailabilities.forEach(function(sku) {
                var purchnum = 0;
                sku.Availabilities.forEach(function(av, ind) {
                  if (av.Actions.indexOf("Purchase") !== -1) {
                    purchasable = "true";
                    purchnum++;
                    if (purchnum > 1 && tempgs === "true" && av.RemediationRequired === true && goldaffids.indexOf(av.Remediations[0].BigId) !== -1) {
                      goldandsilversale = "true";
                    }
                  }
                  if (av.Actions.indexOf("Purchase") !== -1 && (av.OrderManagementData.Price.MSRP !== 0 || (av.OrderManagementData.Price.MSRP === 0 && av.OrderManagementData.Price.ListPrice === 0)) && 
                      sku.Sku.Properties.IsTrial === false) {
                    if ((av.OrderManagementData.Price.ListPrice !== av.OrderManagementData.Price.MSRP || (av.OrderManagementData.Price.MSRP === 0 && av.OrderManagementData.Price.ListPrice === 0)) && ind !== 0) {
                      specialprice = av.OrderManagementData.Price.ListPrice;
                    } else {
                      listprice = av.OrderManagementData.Price.ListPrice;
                    }
                    if (ind === 0) {
                      msrpprice = av.OrderManagementData.Price.MSRP;
                    }
                    currencycode = av.OrderManagementData.Price.CurrencyCode;
                    if (av.Properties.MerchandisingTags !== undefined) {
                      if (av.Properties.MerchandisingTags.indexOf("LegacyGamesWithGold") !== -1) {
                        gwg = "true";
                        specialprice = listprice;
                        listprice = msrpprice;
                      }
                      if (av.Properties.MerchandisingTags.indexOf("LegacyDiscountGold") !== -1) {
                        golddiscount = "true";
    
                      }
                    }
                    if (goldandsilversale === "true" && av.DisplayRank === 1) {
                      goldandsilversalegoldprice = av.OrderManagementData.Price.ListPrice;
                    }
                    if (tempea === "true" && av.Actions.length === 2) {
                      eaaccessgame = "true";
                    }
                    if (listprice < msrpprice) { 
                      onsale = "true";
                      if (gameIdArrays["onsale"].indexOf(itemId) === -1) {
                        gameIdArrays["onsale"].push(itemId); 
                      }
                    }
                  }
                })
              })
              
            } else {
              data.Products[i].DisplaySkuAvailabilities.forEach(function(sku) {
                sku.Availabilities.forEach(function(av) {
                  if (av.Actions.indexOf("Purchase") !== -1 && av.Actions.indexOf("Browse") !== -1 && (av.OrderManagementData.Price.MSRP !== 0 || (av.OrderManagementData.Price.MSRP === 0 && av.OrderManagementData.Price.ListPrice === 0)) && av.Actions.length > 2) {
                    listprice = av.OrderManagementData.Price.ListPrice;
                    msrpprice = av.OrderManagementData.Price.MSRP;
                    currencycode = av.OrderManagementData.Price.CurrencyCode;
                    if (listprice < msrpprice) { 
                      onsale = "true";
                      if (gameIdArrays["onsale"].indexOf(itemId) === -1) {
                        gameIdArrays["onsale"].push(itemId); 
                      }
                    };
                  }
                })
              })
            }
            
    
            if (listprice === undefined) {
              console.log("NOTE: BigID " + itemId + " has no price information.");
              listprice = 100000000;
              msrpprice = 100000000;
              currencycode = "USD";
            }
    
            var rating = "none";
            var ratingcode = "";
            var ratingage  = 99;
            var ratingsystem = "none";
            var kidfamilyratings = ["ESRB:T", "ESRB:E10", "ESRB:E", "PEGI:3", "PEGI:7", "PEGI:12", "COB-AU:G", "COB-AU:PG", "OFLC-NZ:G", "OFLC-NZ:PG", "OFLC-NZ:R13", "USK:Everyone", "USK:6", "USK:12", 
                                    "PCBP:0", "PCBP:6", "PCBP:12", "DJCTQ:L", "DJCTQ:10", "DJCTQ:12", "DJCTQ:14", "CSRR:G", "CSRR:PG12", "CSRR:PG15"]
            var rawdescriptors = "none";
            if (data.Products[i].MarketProperties[0].ContentRatings !== undefined && data.Products[i].MarketProperties[0].ContentRatings !== null && data.Products[i].MarketProperties[0].ContentRatings.length > 0) {
              ratingcode = data.Products[i].MarketProperties[0].ContentRatings[0].RatingId;
              if (ratingcode.indexOf(":RP") === -1) {
                ratingage = osgratings["ageRatings"][ratingcode];
              }
              if (osgratings["displayData"][ratingcode][urlRegion] !== undefined) {
                var osgregion = urlRegion;
              } else {
                var osgregion = "en-us";
              }
              rating = osgratings["displayData"][ratingcode][osgregion].longName;
              ratingsystem = data.Products[i].MarketProperties[0].ContentRatings[0].RatingSystem;
              if (kidfamilyratings.indexOf(rating) !== -1) {
                gameIdArrays["kidsfamily"].push(itemId);
              }
              rawdescriptors = data.Products[i].MarketProperties[0].ContentRatings[0].RatingDescriptors.join(", ");
            } 
            if (urlRegion === "ja-jp" || urlRegion === "ko-kr") {
              $(".c-label[data-game='kids and family']").remove()
            }
    
            if (biuArray.indexOf(itemId) === -1 || bigidUrls[itemId].toLowerCase().indexOf(urlRegion) !== -1) {
              var itemhref = 'https://www.microsoft.com/' + urlRegion + '/p/' + titleClickname + '/' + itemId;
            } else {
              var itemhref = bigidUrls[itemId].split("<exc>")[0];
              var splitHref = itemhref.split("/");
              splitHref.splice(3, 0, urlRegion);
              itemhref = splitHref.join("/");
            }
    
            var avgstars = 0;
            var ratingcount = 0;
            if (data.Products[i].MarketProperties[0].UsageData) {
              // avgstars = data.Products[i].MarketProperties[0].UsageData[0].AverageRating;
               avgstars = 1.0;
              ratingcount = 1;
            } 
    
    
            if (itemId === "9NBLGGH1Z6FQ") {
              itemBoxshot =  "https://compass-ssl.xbox.com/assets/31/f7/31f7fa75-a7ec-4769-893f-12cc0752373e.jpg?n=ReCore_Boxshot-digital-X1_294x215.jpg";
              itemBoxshotSmall =  "https://compass-ssl.xbox.com/assets/31/f7/31f7fa75-a7ec-4769-893f-12cc0752373e.jpg?n=ReCore_Boxshot-digital-X1_294x215.jpg";
            }
            if (itemId === "BZFK7WNK7R4M") {
              itemBoxshot = "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc6LYEXhNheFwp2halN6MiJq0hK8tHwcOslhHzFcqc.uw90wjv2YtwC_mZJs.lEh1cto.K33xsXgRNctiGCKrDjVsG9PhS5GzkLXFMF5wlXsJAfaI6.Hc6zR2KrB00Sjgkn0kvJZv.PD1.7g.ytDgP368SN3vocTlHhhyS_BQ8qZs-&w=200&format=jpg";
              itemBoxshotSmall = "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc6LYEXhNheFwp2halN6MiJq0hK8tHwcOslhHzFcqc.uw90wjv2YtwC_mZJs.lEh1cto.K33xsXgRNctiGCKrDjVsG9PhS5GzkLXFMF5wlXsJAfaI6.Hc6zR2KrB00Sjgkn0kvJZv.PD1.7g.ytDgP368SN3vocTlHhhyS_BQ8qZs-&w=200&format=jpg";
            }    
    
            // genres
            if (data.Products[i].Properties.Categories !== undefined && data.Products[i].Properties.Categories !== null) {
              var gamegenres = data.Products[i].Properties.Categories.join(", ").toLowerCase();
            } else if (data.Products[i].Properties.Category !== undefined && data.Products[i].Properties.Category !== null) {
              var gamegenres = data.Products[i].Properties.Category.toLowerCase();
            } else {
              var gamegenres = "unlisted";
            }
    
            allGames[itemId] = {releasedate : releaseDate, msproduct : msproduct, multiplayer : multiplayer, coop: coop, rating : rating, ratingage: ratingage, ratingsystem : ratingsystem, 
                                gameurl : itemhref, titleclickname : titleClickname, boxshot : itemBoxshot, boxshotsmall : itemBoxshotSmall, title : itemTitle, msrpprice: msrpprice, 
                                listprice: listprice, currencycode: currencycode, onsale: onsale, upcoming: "false", newrelease: "false", physical: phys, genres: gamegenres, 
                                screenshot: itemScreenshot, descriptors: rawdescriptors, stars: avgstars, starcount: ratingcount, screenarray: ssarray, description: shortdesc, 
                                gameswithgold: gwg, golddiscount: golddiscount, goldandsilversale: goldandsilversale, goldandsilversalegoldprice: goldandsilversalegoldprice, 
                                specialprice: specialprice, eaaccessgame: eaaccessgame, gamepassgame: gamepassgame, purchasable: purchasable};
    
            //make API-provided lists        
            if (msproduct === true) {
              gameIdArrays["exclusives"].push(itemId);
            }
            if (multiplayer === "true") {
              gameIdArrays["multiplayer"].push(itemId);
            }
            var reldate = new Date(releaseDate);
            if (reldate > nowdate) {
              gameIdArrays["upcoming"].push(itemId);
              allGames[itemId]["upcoming"] = "true";
            }
            if (reldate < nowdate && monthsagofilterdate < reldate) {
              gameIdArrays["newreleases"].push(itemId);
              allGames[itemId]["newrelease"] = "true";
            }
    
            popcounter++;
            
            //console.log("itemId:" + itemId + "  " + i + ":" + (productQuantity -1) + "   " + popcounter + ":" + (fullGameArray.length) + "  locagamesremoved:" + locgamesremoved + "   " + count + ":" + chunktotal)
            
            if ((i === (productQuantity - 1)) && count === chunktotal - 1) {
              var activecheck = setInterval(function() {
                                  var activeAjax = $.active;
                                  if (activeAjax === 0) {
                                    callback();
                                    clearInterval(activecheck);
                                  }
                                }, 500);
    
            }
          }    
        }
      }
    
    }
    });