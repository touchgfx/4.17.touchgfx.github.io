!function(){"use strict";var e,a,f,c,b,d={},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,n),f.loaded=!0,f.exports}n.m=d,n.c=t,e=[],n.O=function(a,f,c,b){if(!f){var d=1/0;for(o=0;o<e.length;o++){f=e[o][0],c=e[o][1],b=e[o][2];for(var t=!0,r=0;r<f.length;r++)(!1&b||d>=b)&&Object.keys(n.O).every((function(e){return n.O[e](f[r])}))?f.splice(r--,1):(t=!1,b<d&&(d=b));t&&(e.splice(o--,1),a=c())}return a}b=b||0;for(var o=e.length;o>0&&e[o-1][2]>b;o--)e[o]=e[o-1];e[o]=[f,c,b]},n.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(a,{a:a}),a},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);n.r(b);var d={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((function(a){d[a]=function(){return e[a]}}));return d.default=function(){return e},n.d(b,d),b},n.d=function(e,a){for(var f in a)n.o(a,f)&&!n.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(a,f){return n.f[f](e,a),a}),[]))},n.u=function(e){return"assets/js/"+({3:"23407fb3",7:"cbe79322",39:"a07c7efb",41:"b15627b5",53:"935f2afb",66:"16e413fc",72:"385c4476",88:"c63ee249",90:"daff6b2d",117:"7e9ff4d7",139:"f9abf00f",207:"970aa6d9",217:"cd41fdc0",222:"4a6de492",231:"0049329e",268:"0120660c",300:"557269e0",320:"ef83f141",380:"e7c99b5d",441:"8c53953f",481:"640f3f1e",487:"7b0bcb1e",490:"ee393ddf",495:"59e2ce5b",497:"27130570",512:"216fb7f3",520:"65b7f032",567:"eac0d30d",592:"ee3e9a55",603:"8402a4a6",617:"f9d638a0",619:"8c44e976",628:"b018a17f",639:"69df4d70",648:"99f596fc",687:"6981e3ac",710:"603eee8f",716:"aed9d842",733:"69c3866c",813:"f53ec3db",841:"2e85d049",843:"0bba519c",851:"f2d51172",859:"b32a877c",866:"6a7ef8b5",949:"b71ceab0",965:"08d01845",987:"4a67e737",1056:"cf1dfe19",1090:"53f6ab98",1098:"616e852c",1099:"36b93779",1106:"3f09f8af",1111:"f7502e0e",1158:"bb4016dd",1211:"3ed5ea71",1251:"2d57a8a2",1272:"c313f5f5",1292:"a8f4585e",1296:"ebcf67c1",1317:"59f865c0",1335:"771fac87",1342:"faf08f2d",1360:"4919feb1",1361:"52e410a6",1439:"d95661b0",1453:"46d36df2",1468:"74a52f00",1476:"1465bd70",1478:"1a40be87",1495:"b71da64d",1497:"b9324434",1506:"bd67ee2d",1608:"4ee63344",1657:"a7769684",1661:"1deb28d7",1712:"84bc7d93",1815:"4cbc1c11",1836:"4da08aa5",1869:"0816a3ae",1887:"296510d8",2011:"d1b3a4a9",2015:"420da06c",2059:"446df646",2080:"7b6a6240",2126:"0fad6bea",2128:"597a4243",2138:"cfb26125",2159:"600c8a13",2167:"3e65b7a7",2183:"33cde92a",2236:"8306361b",2246:"3ff74c7f",2256:"1aadd970",2266:"b96db529",2304:"714e361c",2329:"e8fe4130",2374:"3dc411cb",2400:"d57f806f",2430:"1d54589c",2499:"abf334c8",2565:"36cba453",2573:"0e23c27c",2584:"2e514c65",2600:"a308880e",2609:"dc1befaf",2648:"5b6aa6d1",2678:"83784921",2702:"5860c098",2717:"d44afb5d",2720:"23e1b906",2723:"e3439559",2757:"0d079aa4",2780:"65e30163",2786:"52e20b7b",2808:"c01b1550",2835:"46129694",2845:"314e41ea",2853:"e988a298",2891:"fbe6c5f6",2904:"ddf84993",2926:"7437d38a",2948:"52fe8fd5",2950:"10973705",2975:"fcff58bd",2980:"b13a415c",2995:"05d1f97d",3028:"1aec40de",3168:"ed058aea",3190:"3f0dd5aa",3207:"04a6022f",3213:"0ee48416",3290:"81a5d003",3317:"6800c54e",3329:"4c0a9072",3365:"2fdf6922",3427:"613876b8",3486:"811ba24b",3487:"7dfc7253",3488:"1d66edd2",3502:"cb933696",3504:"cbe94da6",3510:"ee0743da",3515:"2cfb2e89",3517:"a6e97be6",3545:"41c3c6ab",3549:"93a250ca",3555:"57e88f21",3567:"cbc3a91f",3577:"475d42aa",3599:"0e75d824",3675:"55d807b2",3689:"050dac83",3706:"766ae12e",3725:"65820de3",3757:"0a82eee5",3794:"ba91b2cc",3803:"aa13842e",3824:"ccd5d6a6",3847:"31d603ab",3856:"b34f28a3",3890:"29c2da25",3948:"505e2596",3950:"7f217b36",3953:"7f63d1a8",3960:"3676ca78",3986:"42b9577c",4073:"cdc557a4",4131:"a573b271",4139:"10b0da0c",4159:"4e9f7470",4192:"4e9bd552",4211:"316b2a86",4216:"6117b587",4224:"ffa5ab1e",4241:"073b662d",4251:"9933b217",4288:"a4b1cc7b",4326:"ffbdfedd",4334:"117aa051",4379:"8baa87a4",4383:"be4832fc",4387:"b4979a91",4390:"9603b5ab",4403:"826b4a15",4534:"f0a9a604",4536:"47d7ac54",4570:"567ca90c",4588:"ff061034",4591:"c2394415",4622:"5395b0aa",4644:"639dfede",4646:"a41418a1",4652:"54c8e2d2",4667:"6b2b114c",4690:"77d4039c",4697:"d4fe5409",4701:"50138275",4749:"afde50d4",4766:"342832e4",4804:"b5a21e25",4816:"d092804a",4820:"574a5675",4823:"eb5d9e95",4830:"4c9ba2ef",4867:"948393ba",4870:"69c017ff",4916:"6a37b1ac",4964:"372c02ca",4985:"ff079616",4987:"4dba5f3f",5049:"bdc925f4",5057:"4bc45af0",5068:"e49537b5",5071:"b1e71839",5073:"44f189d9",5114:"4d4a78ad",5158:"ce00a569",5220:"48503e91",5246:"4d9072ac",5254:"8f29083c",5257:"5897af75",5261:"16b693ee",5275:"997d3e0c",5293:"4733ce4b",5337:"dc075be5",5372:"7afd1ebf",5387:"1339f42d",5394:"d33b6bb3",5395:"4e9e53c3",5407:"1b3e380a",5460:"7da8d63d",5467:"bf054acf",5469:"adc92131",5477:"430e29c5",5482:"a44d54a2",5506:"7f36e24d",5533:"8cd7d457",5545:"b469e7a6",5549:"c326a0c5",5573:"030328bc",5596:"5e30d629",5619:"347f9548",5674:"b44c12c6",5676:"1523961d",5697:"910b6264",5737:"4f38a5c3",5780:"8b1f6b18",5787:"4c79040f",5788:"283dc9ca",5797:"aacde538",5847:"38c8bf15",5863:"96a01de2",5876:"a3ce9a4e",5904:"7a536274",5922:"97a358ee",5997:"0f6282d9",6e3:"1b59b1a6",6045:"ef388862",6062:"6eb390c4",6108:"aa8c7de9",6135:"a6669be5",6219:"524700c1",6258:"8826647e",6293:"ae4e6af0",6326:"b31bb912",6366:"6c4b7d19",6384:"013b82e0",6405:"60bdd2fb",6430:"a3adbb23",6439:"d22da5ad",6455:"152408de",6474:"53efd644",6498:"0334275d",6537:"ba0b5c0e",6594:"e0695e47",6675:"998532a3",6685:"67678de5",6696:"0dfe9501",6722:"d62832a6",6732:"aabefc5d",6740:"c2f8d0b8",6743:"37e92a50",6764:"cc5034ef",6776:"5b3bea2a",6847:"37928f55",6872:"b24899c6",6886:"46a1f17b",6921:"4ae472f4",6922:"58b4db47",6928:"b16505a9",6944:"9ee4e275",6951:"1fbba42c",6952:"4e968095",6988:"d56168e0",6989:"1d4bcc29",6992:"7e7b89ed",7016:"03402014",7022:"3ebab998",7068:"09ea0297",7172:"322e0b67",7182:"1a454bcd",7217:"82cf4a85",7249:"228300a4",7258:"3789a018",7302:"833b270c",7326:"db69d456",7368:"39a7a4a7",7402:"651c37da",7415:"5df93c4b",7470:"38bee2e4",7505:"6f14bb03",7530:"fa60577e",7533:"5fa30c3e",7549:"4c86038c",7585:"fd53321c",7602:"09081007",7630:"a2c72581",7687:"f993aed9",7688:"6e6a9ee5",7689:"af1fcb28",7701:"53b991d8",7747:"736a6123",7763:"3694036e",7827:"5c1676b0",7829:"2952d6aa",7879:"c71b5243",7883:"1f86f5ac",7889:"4be08c27",7894:"dc19fd5c",7903:"5e066807",7918:"17896441",7948:"b74dd890",7949:"e42d881e",7966:"7958e8ad",7969:"fe8c95ca",7984:"d96d0fc3",7995:"069353d5",8010:"77de5e01",8028:"47e98586",8050:"096121a1",8066:"d3f6e585",8071:"52af338f",8100:"97746d46",8166:"e66c27a9",8189:"fad0edd7",8216:"ef1ba873",8234:"7e64752b",8246:"ed92d27b",8277:"0da192b2",8290:"a43f1741",8317:"43e31cff",8321:"f714445a",8346:"0c144252",8372:"1963135f",8399:"f717796f",8400:"dccfe8b0",8456:"89a3134e",8542:"58a3a694",8545:"e6ddf0b5",8579:"6767ee63",8637:"4a4179c7",8694:"abeaa039",8724:"9ea59211",8747:"e78b943e",8770:"77e81cf0",8796:"eb7e85fa",8814:"0936f0f5",8820:"e68ce9eb",8901:"ba82ce85",8920:"00e7ba5b",8944:"776757ca",8952:"c19fe27b",9037:"143ae93d",9041:"923dc8af",9101:"05c44d96",9116:"86107fbe",9123:"bad53bdb",9152:"cec9ef43",9168:"0aa64dce",9214:"e77985c6",9223:"ada1fa0f",9302:"fa4db6fc",9321:"5ee6a624",9379:"0ce452f9",9391:"b565fe5e",9427:"3134e3ca",9449:"ee522d91",9482:"46fa7a6d",9500:"54df46f0",9514:"1be78505",9606:"20cc033f",9629:"2dfe76bb",9716:"2908211d",9780:"a2b17aaa",9827:"c050ff5a",9865:"fc3c1fe3",9872:"c2b149e4",9901:"e4bb945e",9913:"3b9e34ce",9925:"418a8953",9953:"ee631a03",9955:"c13a9068",9988:"bdfb44a0"}[e]||e)+"."+{3:"be95f789",7:"c8c6439e",39:"9039284f",41:"df611c9b",53:"5489ecc5",66:"42b32174",72:"c6ad7a26",88:"e2c9f80b",90:"d8952f8d",117:"dbe48d79",139:"5c7622fd",207:"b1d1b5f7",217:"b405e064",222:"925fff0a",231:"873b6ab1",268:"253b70ea",300:"3d209bf4",320:"5c7452f6",380:"18ef5224",441:"5204bef8",481:"a0c9974a",487:"c15670af",490:"67305ac2",495:"0d5a6257",497:"f9b38373",512:"35a6d784",520:"724535f2",567:"948f17e6",592:"34a77fba",603:"5b4c3c42",617:"c3f19e22",619:"0f25c5c8",628:"239b4d99",639:"bbeffe55",648:"37bd4cb9",687:"f1f5f8e9",710:"dbf6c3f0",716:"0f2d0fcd",733:"9bb8cdc7",813:"610eacf8",841:"28358e82",843:"75b3b470",851:"c63994b2",859:"bb2719dc",866:"6e4f1e40",949:"cc8bddf9",965:"082e0221",987:"d09ec78a",1056:"9eab631b",1090:"f9d21a08",1098:"e73754ed",1099:"db1dcd43",1106:"49c2685b",1111:"d3c72d5a",1158:"9d61f772",1211:"6ef15e69",1251:"10945377",1272:"d80d2a93",1292:"45f4ace4",1294:"cffdf72a",1296:"1ee98677",1317:"8588ef85",1335:"9abfad1a",1342:"df17f632",1360:"6195e872",1361:"2a96ddb3",1439:"2a0f7b2e",1453:"99e34ff4",1468:"379ddf3b",1476:"ea088dce",1478:"940a899b",1495:"d0c15235",1497:"82f570a8",1506:"c4733411",1608:"ba9430e7",1657:"c4b5b82a",1661:"95666dd7",1712:"2f8ca227",1721:"893a9f60",1815:"62e9108d",1836:"94cfa7ed",1869:"230647b3",1887:"19469786",2011:"411e722c",2015:"ceaf5fcd",2059:"50f6a5c4",2080:"80308581",2126:"795b3af9",2128:"ef39c970",2138:"ed527627",2159:"ea6d27a0",2167:"46625084",2183:"26357639",2236:"5037cb34",2246:"4f518af3",2256:"ea8295ed",2266:"1b2a0358",2304:"cef99344",2329:"8ca812e4",2374:"bb6066d6",2400:"a5fa6249",2430:"21e1ca28",2499:"5cb5ee60",2565:"7465d4b3",2573:"4a278598",2584:"be0e818d",2600:"2196ef23",2609:"6801f203",2648:"467a077e",2678:"6eff5ddb",2702:"18d6b69f",2717:"0b4e81a7",2720:"e7567746",2723:"1e880923",2757:"e350c396",2780:"eaed03e3",2786:"a6203454",2808:"a226ed90",2835:"71775174",2845:"426c86ef",2853:"1960aec8",2891:"fc40369b",2904:"c2b074de",2926:"14feb4c0",2948:"4eb43eb0",2950:"584fb6c2",2975:"413e2646",2980:"be006a8b",2995:"f7b6efe0",3028:"06072e05",3168:"f7b6c46a",3190:"9f85cca4",3207:"3c31c754",3213:"b13cd83a",3290:"0038f0b2",3317:"af8e09c8",3329:"044c52ce",3365:"86a7694d",3427:"c6ac5726",3486:"1a2cbb9d",3487:"28dedd8f",3488:"10f30e03",3502:"132dd26e",3504:"593406c3",3510:"56ce63c1",3515:"dd5ec6c9",3517:"e9573842",3545:"a68952cf",3549:"f4636ffc",3555:"9a0fa943",3567:"9fec281b",3577:"91087e94",3599:"f852ae5a",3675:"49254828",3689:"39475b3f",3706:"3b3ef926",3725:"67213f61",3757:"fb13c52e",3794:"c67535ac",3803:"d7b9a09b",3824:"0a1292e9",3847:"5d16e093",3856:"6cc9dfef",3890:"4bba88a0",3948:"b7bf72d8",3950:"83e92b40",3953:"3aec172f",3960:"6936089b",3986:"83dca9d1",4073:"107ab879",4131:"c195922b",4139:"b7fec40a",4159:"ce35fbe1",4192:"a510e4d1",4211:"d9d5e709",4216:"8c1bc16d",4224:"d145fa37",4241:"ec30a36c",4251:"41ec28a9",4288:"1017ee08",4326:"74226f03",4334:"50f07942",4379:"37f60ada",4383:"2f4a503e",4387:"134ffd68",4390:"ab90d35c",4403:"054700f9",4534:"275d4f57",4536:"dea1b37c",4570:"0ab9d280",4588:"f1c27c82",4591:"077f966b",4622:"df525edc",4644:"e1e918bd",4646:"95302b8e",4652:"6b4d8d03",4667:"27a70d35",4690:"f90432ed",4697:"af358e2d",4701:"6a0e29ba",4749:"77f12f4c",4766:"03fb8386",4804:"60b7026c",4816:"b05c80fa",4820:"b8d72e89",4823:"f8f30b7d",4830:"92ab3dfe",4867:"26cfafbc",4870:"9a1e163b",4916:"20ba4f6a",4964:"6f8da708",4985:"6336706b",4987:"c945bbf1",5049:"4d4f5be6",5057:"2a675306",5068:"54ca1def",5071:"9131dd45",5073:"8d7c271f",5114:"fc42bdb1",5158:"07d0d670",5220:"2209386e",5246:"1905148d",5254:"72de64fa",5256:"04542871",5257:"9f69af14",5261:"0405b9a8",5275:"4ded9fec",5293:"97990175",5337:"71955984",5345:"164d9cb7",5372:"05c8cc43",5387:"583bf9e1",5394:"95bd607f",5395:"0f246608",5407:"bdcdc7e4",5460:"203c818d",5467:"10e03d4a",5469:"bcb30b94",5477:"5ca6ebb2",5482:"a0322cc1",5506:"ab4b7b69",5533:"e01ad394",5545:"04a99d00",5549:"d6fd2a00",5573:"48fa67e4",5596:"4f7f41bb",5619:"3972c5b5",5674:"31441bb6",5676:"875c6b93",5697:"83bed31a",5737:"91f61ecb",5780:"70c4cc20",5787:"e2a4524a",5788:"4d824af1",5797:"74f06def",5847:"8f4d4db1",5863:"c2b23423",5876:"ad1c63fe",5904:"0bbd4097",5922:"a5cadd9c",5997:"9371cee0",6e3:"4c1bf187",6045:"20ab7291",6062:"c640ffde",6108:"e7428300",6135:"ebf39b00",6219:"89320a14",6258:"4ae3a2c6",6293:"0d5c4e09",6326:"cef9c118",6366:"0351ab1f",6384:"25d97eb7",6405:"fd125f07",6430:"2ad3b615",6439:"468d55e1",6455:"32c0b7c2",6474:"bc2f3540",6498:"0da09812",6537:"d2c0a125",6594:"f9a840a5",6675:"01102d5d",6685:"c80c1952",6696:"dd0769ec",6722:"1141199b",6732:"700830e7",6740:"2848be74",6743:"d08f05fe",6764:"5b16a34b",6776:"870da1d5",6847:"b71c53ec",6872:"7e5450bf",6886:"3ab7a8c6",6921:"160419b8",6922:"96ce63d3",6928:"27a590c0",6944:"6621e379",6945:"c747560d",6951:"349fe879",6952:"4675d0e7",6988:"f0f1309c",6989:"d3103b54",6992:"f47ab36d",7016:"c4ab5f39",7022:"693e7de6",7068:"b76e72f6",7172:"ccd89a49",7182:"5a95ae7a",7217:"79973a85",7249:"7b992fa5",7258:"e5dece1e",7302:"010a1330",7326:"7c1281e6",7368:"4c5dc349",7402:"1e8a9dc1",7415:"391e30b0",7470:"66d12023",7505:"e998418a",7530:"0a9e3787",7533:"faab115b",7549:"88389b30",7585:"eb561a5d",7602:"6255b179",7630:"e36f67ca",7687:"b3c57241",7688:"1a89ba17",7689:"a014c893",7701:"08a06437",7747:"014b4ec0",7763:"166d4995",7827:"1bec29bc",7829:"b74cd347",7879:"5268592f",7883:"8e2243ce",7889:"7df54dbe",7894:"d761a995",7903:"1c36a21e",7918:"0288ff31",7948:"6e62ae18",7949:"812c27b1",7966:"645e3dd5",7969:"9f5c085f",7984:"026ab051",7995:"8db83318",8010:"4d2743fd",8017:"ae0928d4",8028:"e68ae610",8050:"feb189ad",8066:"3e7d33f2",8071:"e9d1221e",8100:"e208cc12",8166:"e4d7f33a",8189:"ab5b87bf",8216:"ce51e178",8234:"006430dc",8246:"4cce47ef",8277:"ddb3cb3c",8290:"b6327496",8317:"b30c5284",8321:"b3bce68c",8346:"ca756034",8372:"8210e7d7",8399:"3ba0334d",8400:"9b899dee",8456:"a129d874",8542:"0cdbeb07",8545:"073ef2d4",8579:"827fd8aa",8637:"10b24882",8694:"5c719cc5",8724:"3a98fca0",8747:"bdc9cb50",8770:"377c7b78",8796:"27933f46",8814:"fd765c41",8820:"6f093459",8878:"ace6c6f4",8901:"8da40ee4",8920:"261d3871",8944:"57e58c32",8952:"db635659",9037:"5521a15e",9041:"1ba4cc18",9101:"3140b303",9116:"5b0cefc1",9123:"ce274f8b",9152:"e25b97eb",9168:"ed802d30",9214:"3dfa548e",9223:"516b66f0",9302:"09752b36",9321:"c3b65cfa",9379:"49fd09d6",9391:"6d55db66",9427:"12d3fe3d",9449:"7a0a46ad",9482:"29c5b95f",9500:"fb8b82d3",9501:"525d67fd",9514:"c4becccf",9606:"f8084ad6",9629:"43bb5e1d",9716:"86a9c338",9780:"c3ce7d6d",9827:"d72f8d0a",9865:"14eabb35",9872:"e9218a48",9901:"4e3bc6fb",9913:"b7adb2f2",9925:"32535cd9",9953:"9ac745f1",9955:"9660c2e8",9988:"712d6430"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.1507df0a.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c={},b="touchgfx-documentation:",n.l=function(e,a,f,d){if(c[e])c[e].push(a);else{var t,r;if(void 0!==f)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==b+f){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",b+f),t.src=e),c[e]=[a];var l=function(a,f){t.onerror=t.onload=null,clearTimeout(s);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((function(e){return e(f)})),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/4.17/zh-TW/",n.gca=function(e){return e={10973705:"2950",17896441:"7918",27130570:"497",46129694:"2835",50138275:"4701",83784921:"2678","23407fb3":"3",cbe79322:"7",a07c7efb:"39",b15627b5:"41","935f2afb":"53","16e413fc":"66","385c4476":"72",c63ee249:"88",daff6b2d:"90","7e9ff4d7":"117",f9abf00f:"139","970aa6d9":"207",cd41fdc0:"217","4a6de492":"222","0049329e":"231","0120660c":"268","557269e0":"300",ef83f141:"320",e7c99b5d:"380","8c53953f":"441","640f3f1e":"481","7b0bcb1e":"487",ee393ddf:"490","59e2ce5b":"495","216fb7f3":"512","65b7f032":"520",eac0d30d:"567",ee3e9a55:"592","8402a4a6":"603",f9d638a0:"617","8c44e976":"619",b018a17f:"628","69df4d70":"639","99f596fc":"648","6981e3ac":"687","603eee8f":"710",aed9d842:"716","69c3866c":"733",f53ec3db:"813","2e85d049":"841","0bba519c":"843",f2d51172:"851",b32a877c:"859","6a7ef8b5":"866",b71ceab0:"949","08d01845":"965","4a67e737":"987",cf1dfe19:"1056","53f6ab98":"1090","616e852c":"1098","36b93779":"1099","3f09f8af":"1106",f7502e0e:"1111",bb4016dd:"1158","3ed5ea71":"1211","2d57a8a2":"1251",c313f5f5:"1272",a8f4585e:"1292",ebcf67c1:"1296","59f865c0":"1317","771fac87":"1335",faf08f2d:"1342","4919feb1":"1360","52e410a6":"1361",d95661b0:"1439","46d36df2":"1453","74a52f00":"1468","1465bd70":"1476","1a40be87":"1478",b71da64d:"1495",b9324434:"1497",bd67ee2d:"1506","4ee63344":"1608",a7769684:"1657","1deb28d7":"1661","84bc7d93":"1712","4cbc1c11":"1815","4da08aa5":"1836","0816a3ae":"1869","296510d8":"1887",d1b3a4a9:"2011","420da06c":"2015","446df646":"2059","7b6a6240":"2080","0fad6bea":"2126","597a4243":"2128",cfb26125:"2138","600c8a13":"2159","3e65b7a7":"2167","33cde92a":"2183","8306361b":"2236","3ff74c7f":"2246","1aadd970":"2256",b96db529:"2266","714e361c":"2304",e8fe4130:"2329","3dc411cb":"2374",d57f806f:"2400","1d54589c":"2430",abf334c8:"2499","36cba453":"2565","0e23c27c":"2573","2e514c65":"2584",a308880e:"2600",dc1befaf:"2609","5b6aa6d1":"2648","5860c098":"2702",d44afb5d:"2717","23e1b906":"2720",e3439559:"2723","0d079aa4":"2757","65e30163":"2780","52e20b7b":"2786",c01b1550:"2808","314e41ea":"2845",e988a298:"2853",fbe6c5f6:"2891",ddf84993:"2904","7437d38a":"2926","52fe8fd5":"2948",fcff58bd:"2975",b13a415c:"2980","05d1f97d":"2995","1aec40de":"3028",ed058aea:"3168","3f0dd5aa":"3190","04a6022f":"3207","0ee48416":"3213","81a5d003":"3290","6800c54e":"3317","4c0a9072":"3329","2fdf6922":"3365","613876b8":"3427","811ba24b":"3486","7dfc7253":"3487","1d66edd2":"3488",cb933696:"3502",cbe94da6:"3504",ee0743da:"3510","2cfb2e89":"3515",a6e97be6:"3517","41c3c6ab":"3545","93a250ca":"3549","57e88f21":"3555",cbc3a91f:"3567","475d42aa":"3577","0e75d824":"3599","55d807b2":"3675","050dac83":"3689","766ae12e":"3706","65820de3":"3725","0a82eee5":"3757",ba91b2cc:"3794",aa13842e:"3803",ccd5d6a6:"3824","31d603ab":"3847",b34f28a3:"3856","29c2da25":"3890","505e2596":"3948","7f217b36":"3950","7f63d1a8":"3953","3676ca78":"3960","42b9577c":"3986",cdc557a4:"4073",a573b271:"4131","10b0da0c":"4139","4e9f7470":"4159","4e9bd552":"4192","316b2a86":"4211","6117b587":"4216",ffa5ab1e:"4224","073b662d":"4241","9933b217":"4251",a4b1cc7b:"4288",ffbdfedd:"4326","117aa051":"4334","8baa87a4":"4379",be4832fc:"4383",b4979a91:"4387","9603b5ab":"4390","826b4a15":"4403",f0a9a604:"4534","47d7ac54":"4536","567ca90c":"4570",ff061034:"4588",c2394415:"4591","5395b0aa":"4622","639dfede":"4644",a41418a1:"4646","54c8e2d2":"4652","6b2b114c":"4667","77d4039c":"4690",d4fe5409:"4697",afde50d4:"4749","342832e4":"4766",b5a21e25:"4804",d092804a:"4816","574a5675":"4820",eb5d9e95:"4823","4c9ba2ef":"4830","948393ba":"4867","69c017ff":"4870","6a37b1ac":"4916","372c02ca":"4964",ff079616:"4985","4dba5f3f":"4987",bdc925f4:"5049","4bc45af0":"5057",e49537b5:"5068",b1e71839:"5071","44f189d9":"5073","4d4a78ad":"5114",ce00a569:"5158","48503e91":"5220","4d9072ac":"5246","8f29083c":"5254","5897af75":"5257","16b693ee":"5261","997d3e0c":"5275","4733ce4b":"5293",dc075be5:"5337","7afd1ebf":"5372","1339f42d":"5387",d33b6bb3:"5394","4e9e53c3":"5395","1b3e380a":"5407","7da8d63d":"5460",bf054acf:"5467",adc92131:"5469","430e29c5":"5477",a44d54a2:"5482","7f36e24d":"5506","8cd7d457":"5533",b469e7a6:"5545",c326a0c5:"5549","030328bc":"5573","5e30d629":"5596","347f9548":"5619",b44c12c6:"5674","1523961d":"5676","910b6264":"5697","4f38a5c3":"5737","8b1f6b18":"5780","4c79040f":"5787","283dc9ca":"5788",aacde538:"5797","38c8bf15":"5847","96a01de2":"5863",a3ce9a4e:"5876","7a536274":"5904","97a358ee":"5922","0f6282d9":"5997","1b59b1a6":"6000",ef388862:"6045","6eb390c4":"6062",aa8c7de9:"6108",a6669be5:"6135","524700c1":"6219","8826647e":"6258",ae4e6af0:"6293",b31bb912:"6326","6c4b7d19":"6366","013b82e0":"6384","60bdd2fb":"6405",a3adbb23:"6430",d22da5ad:"6439","152408de":"6455","53efd644":"6474","0334275d":"6498",ba0b5c0e:"6537",e0695e47:"6594","998532a3":"6675","67678de5":"6685","0dfe9501":"6696",d62832a6:"6722",aabefc5d:"6732",c2f8d0b8:"6740","37e92a50":"6743",cc5034ef:"6764","5b3bea2a":"6776","37928f55":"6847",b24899c6:"6872","46a1f17b":"6886","4ae472f4":"6921","58b4db47":"6922",b16505a9:"6928","9ee4e275":"6944","1fbba42c":"6951","4e968095":"6952",d56168e0:"6988","1d4bcc29":"6989","7e7b89ed":"6992","03402014":"7016","3ebab998":"7022","09ea0297":"7068","322e0b67":"7172","1a454bcd":"7182","82cf4a85":"7217","228300a4":"7249","3789a018":"7258","833b270c":"7302",db69d456:"7326","39a7a4a7":"7368","651c37da":"7402","5df93c4b":"7415","38bee2e4":"7470","6f14bb03":"7505",fa60577e:"7530","5fa30c3e":"7533","4c86038c":"7549",fd53321c:"7585","09081007":"7602",a2c72581:"7630",f993aed9:"7687","6e6a9ee5":"7688",af1fcb28:"7689","53b991d8":"7701","736a6123":"7747","3694036e":"7763","5c1676b0":"7827","2952d6aa":"7829",c71b5243:"7879","1f86f5ac":"7883","4be08c27":"7889",dc19fd5c:"7894","5e066807":"7903",b74dd890:"7948",e42d881e:"7949","7958e8ad":"7966",fe8c95ca:"7969",d96d0fc3:"7984","069353d5":"7995","77de5e01":"8010","47e98586":"8028","096121a1":"8050",d3f6e585:"8066","52af338f":"8071","97746d46":"8100",e66c27a9:"8166",fad0edd7:"8189",ef1ba873:"8216","7e64752b":"8234",ed92d27b:"8246","0da192b2":"8277",a43f1741:"8290","43e31cff":"8317",f714445a:"8321","0c144252":"8346","1963135f":"8372",f717796f:"8399",dccfe8b0:"8400","89a3134e":"8456","58a3a694":"8542",e6ddf0b5:"8545","6767ee63":"8579","4a4179c7":"8637",abeaa039:"8694","9ea59211":"8724",e78b943e:"8747","77e81cf0":"8770",eb7e85fa:"8796","0936f0f5":"8814",e68ce9eb:"8820",ba82ce85:"8901","00e7ba5b":"8920","776757ca":"8944",c19fe27b:"8952","143ae93d":"9037","923dc8af":"9041","05c44d96":"9101","86107fbe":"9116",bad53bdb:"9123",cec9ef43:"9152","0aa64dce":"9168",e77985c6:"9214",ada1fa0f:"9223",fa4db6fc:"9302","5ee6a624":"9321","0ce452f9":"9379",b565fe5e:"9391","3134e3ca":"9427",ee522d91:"9449","46fa7a6d":"9482","54df46f0":"9500","1be78505":"9514","20cc033f":"9606","2dfe76bb":"9629","2908211d":"9716",a2b17aaa:"9780",c050ff5a:"9827",fc3c1fe3:"9865",c2b149e4:"9872",e4bb945e:"9901","3b9e34ce":"9913","418a8953":"9925",ee631a03:"9953",c13a9068:"9955",bdfb44a0:"9988"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(a,f){var c=n.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise((function(f,b){c=e[a]=[f,b]}));f.push(c[2]=b);var d=n.p+n.u(a),t=new Error;n.l(d,(function(f){if(n.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,c[1](t)}}),"chunk-"+a,a)}},n.O.j=function(a){return 0===e[a]};var a=function(a,f){var c,b,d=f[0],t=f[1],r=f[2],o=0;for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n);for(a&&a(f);o<d.length;o++)b=d[o],n.o(e,b)&&e[b]&&e[b][0](),e[d[o]]=0;return n.O(u)},f=self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}()}();