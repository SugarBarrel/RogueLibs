(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[488],{1497:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return k},toc:function(){return m},default:function(){return u}});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),i=(n(8952),n(9309),n(4996),["components"]),d={},o="\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",k={unversionedId:"dev/items/inventory-checks",id:"dev/items/inventory-checks",isDocsHomePage:!1,title:"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",description:"InventoryChecks",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/inventory-checks.mdx",sourceDirName:"dev/items",slug:"/dev/items/inventory-checks",permalink:"/RogueLibs/ru/docs/dev/items/inventory-checks",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/master/website/docs/dev/items/inventory-checks.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0441\u043d\u0430\u0440\u044f\u0434\u044b*",permalink:"/RogueLibs/ru/docs/dev/items/weapons/custom-projectiles"},next:{title:"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c",permalink:"/RogueLibs/ru/docs/dev/items/abilities/create-ability"}},m=[{value:"<code>InventoryChecks</code>",id:"inventorychecks",children:[]},{value:"\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a",id:"ignoring-checks",children:[]},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a",id:"adding-checks",children:[]},{value:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",id:"default-checks",children:[{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 <code>IItemUsable</code>",id:"iitemusable-checks",children:[]},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 <code>IItemCombinable</code>",id:"iitemcombinable-checks",children:[]},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 <code>IItemTargetable</code>",id:"iitemtargetable-checks",children:[]}]}],p={toc:m};function u(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0435-\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"},"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"),(0,r.kt)("h2",{id:"inventorychecks"},(0,r.kt)("inlineCode",{parentName:"h2"},"InventoryChecks")),(0,r.kt)("p",null,"\u0418\u0442\u0430\u043a, \u0441 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u043c\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u043c\u0438, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u043a\u043e\u0434:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'if (Owner.statusEffects.hasTrait("BloodRestoresHealth"))\n{\n    Owner.SayDialogue("WontEatThis");\n    return;\n}\nif (Owner.statusEffects.hasTrait("OilRestoresHealth"))\n{\n    Owner.SayDialogue("WontEatThat");\n    return;\n}\nif (Owner.health == Owner.maxHealth)\n{\n    Owner.SayDialogue("NoImFull");\n    return;\n}\n...\n')),(0,r.kt)("p",null,"RogueLibs \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c ",(0,r.kt)("strong",{parentName:"p"},"\u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"),', \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430 \u0432\u0441\u0435\u0445 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430\u0445 \u0432 \u0438\u0433\u0440\u0435, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f "Food" \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e "Alcohol"). \u0422\u0430\u043a\u0438\u0435 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0442\u0430\u043a\u0436\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u0448\u0442\u0443\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0434\u0434\u0435\u0440\u044b \u0438\u043d\u043e\u0433\u0434\u0430 \u0437\u0430\u0431\u044b\u0432\u0430\u044e\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0438\u0437 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f \u0438\u043b\u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0440\u0430\u0432\u043d\u044b\u043c 0.'),(0,r.kt)("h2",{id:"ignoring-checks"},"\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a"),(0,r.kt)("p",null,"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"IgnoreChecks"),"."),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"IgnoreChecks")," \u043d\u0430 \u043a\u043b\u0430\u0441\u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0438\u043b\u0438 \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0438\u0437 \u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[ItemCategories(RogueCategories.Food, RogueCategories.Weird, "Meat")]\npublic class MysteryFood : CustomItem, IItemUsable\n{\n    // highlight-next-line\n    [IgnoreChecks("VegetarianCheck")]\n    public bool UseItem()\n    {\n        e.User.ChangeHealth(Item.healthChange);\n        Count--;\n        e.User.Say("Huh, tasty. I wonder what that was..."); // O_o\n        return true;\n    }\n}\n')),(0,r.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0432 RogueLibs ",(0,r.kt)("a",{parentName:"p",href:"#default-checks"},"\u043f\u043e\u0437\u0436\u0435 \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"),"."),(0,r.kt)("h2",{id:"adding-checks"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a"),(0,r.kt)("p",null,"\u0423 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"RogueEventArgs")," \u0435\u0441\u0442\u044c \u0434\u0432\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430: ",(0,r.kt)("inlineCode",{parentName:"p"},"Cancel")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"Handled"),". \u0415\u0441\u043b\u0438 \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"Handled")," \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", \u0442\u043e \u0432\u0441\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u044b. \u0415\u0441\u043b\u0438 \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"Cancel")," \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", \u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0442\u0438, \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442. \u041e\u0431\u044b\u0447\u043d\u043e, \u043e\u043d\u0438 \u0441\u0442\u0430\u0432\u044f\u0442\u0441\u044f \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e."),(0,r.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u0442\u044c \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},'"Vegetarian"')," \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0434\u0430\u0432\u0430\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0443 \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0442\u044c \u0435\u0434\u0443 \u0441 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0435\u0439 ",(0,r.kt)("inlineCode",{parentName:"p"},'"Meat"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'InventoryChecks.AddItemUsingCheck("VegetarianCheck", VegetarianCheck);\n...\npublic static void VegetarianCheck(OnItemUsingArgs e)\n{\n    if (e.Item.itemType == ItemTypes.Food && e.User.HasTrait("Vegetarian") && e.Item.Categories.Contains("Meat"))\n    {\n        // \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u0447\u0435\u043c\u0443 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\n        e.User.gc.audioHandler.Play(e.User, "CantDo");\n        e.User.SayDialogue("WontEatMeat");\n        // \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c Cancel \u0438 Handled \u043d\u0430 true\n        e.Cancel = e.Handled = true;\n    }\n};\n')),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u0443\u044e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043c\u043e\u0434\u0430, \u0442\u043e \u0432\u0430\u043c \u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f \u043f\u0430\u0442\u0447\u0438\u0442\u044c \u0435\u0451 \u0441 Harmony."),(0,r.kt)("h2",{id:"default-checks"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),(0,r.kt)("h3",{id:"iitemusable-checks"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 ",(0,r.kt)("inlineCode",{parentName:"h3"},"IItemUsable")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u0440\u0438\u0442\u0435\u0440\u0438\u0438"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0424\u0440\u0430\u0437\u0430"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Ghost")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0418\u0433\u0440\u043e\u043a - \u043f\u0440\u0438\u0437\u0440\u0430\u043a."),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PeaBrained")),(0,r.kt)("td",{parentName:"tr",align:null},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u0411\u0435\u0437\u043c\u043e\u0437\u0433\u043b\u044b\u0439", \u0442\u0438\u043f ',(0,r.kt)("strong",{parentName:"td"},"\u041d\u0415")," Food."),(0,r.kt)("td",{parentName:"tr",align:null},'"\u0420-\u0440-\u0440-\u0440-\u0440!!!!!"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnlyOil")),(0,r.kt)("td",{parentName:"tr",align:null},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u0411\u0435\u043d\u0437\u0438\u043d\u043e\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c", \u0442\u0438\u043f Food \u0438 (\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Food \u0438\u043b\u0438 Alcohol).'),(0,r.kt)("td",{parentName:"tr",align:null},'"\u041c\u043d\u0435 \u043d\u0443\u0436\u0435\u043d \u0431\u0435\u043d\u0437\u0438\u043d..."')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnlyOilMedicine")),(0,r.kt)("td",{parentName:"tr",align:null},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u0411\u0435\u043d\u0437\u0438\u043d\u043e\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c", \u0442\u0438\u043f Consumable \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Health.'),(0,r.kt)("td",{parentName:"tr",align:null},'"\u041c\u043d\u0435 \u043d\u0443\u0436\u0435\u043d \u0431\u0435\u043d\u0437\u0438\u043d..."')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnlyBlood")),(0,r.kt)("td",{parentName:"tr",align:null},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u041a\u0440\u043e\u0432\u043e\u043f\u0438\u0439\u0446\u0430", \u0442\u0438\u043f Food \u0438 (\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Food \u0438\u043b\u0438 Alcohol).'),(0,r.kt)("td",{parentName:"tr",align:null},'"\u0424\u0443, \u0433\u0430\u0434\u043e\u0441\u0442\u044c, \u044f \u043d\u0435 \u0431\u0443\u0434\u0443 \u044d\u0442\u043e \u0435\u0441\u0442\u044c!"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnlyBloodMedicine")),(0,r.kt)("td",{parentName:"tr",align:null},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u041a\u0440\u043e\u0432\u043e\u043f\u0438\u0439\u0446\u0430", \u0442\u0438\u043f Consumable \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Health.'),(0,r.kt)("td",{parentName:"tr",align:null},'"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0430 \u0434\u043b\u044f \u043b\u044e\u0434\u0435\u0439, \u043c\u043d\u0435 \u043d\u0443\u0436\u043d\u0430 \u041a\u0420\u041e\u0412\u042c!"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnlyCharge")),(0,r.kt)("td",{parentName:"tr",align:null},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439", \u0442\u0438\u043f Food \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Food.'),(0,r.kt)("td",{parentName:"tr",align:null},'"\u0423 \u043c\u0435\u043d\u044f \u043d\u0435\u0442 \u0436\u0435\u043b\u0443\u0434\u043a\u0430."')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OnlyHumanFlesh")),(0,r.kt)("td",{parentName:"tr",align:null},'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c "\u042f\u0440\u044b\u0439 \u043a\u0430\u043d\u043d\u0438\u0431\u0430\u043b\u0438\u0437\u043c", \u0442\u0438\u043f Food \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f Food.'),(0,r.kt)("td",{parentName:"tr",align:null},'"\u0424\u0443, \u0433\u0430\u0434\u043e\u0441\u0442\u044c, \u044f \u043d\u0435 \u0431\u0443\u0434\u0443 \u044d\u0442\u043e \u0435\u0441\u0442\u044c!"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FullHealth")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0423 \u0438\u0433\u0440\u043e\u043a\u0430 \u043f\u043e\u043b\u043d\u043e\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435 \u0438 ",(0,r.kt)("inlineCode",{parentName:"td"},"healthChange")," \u0443 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 0."),(0,r.kt)("td",{parentName:"tr",align:null},'"\u041d\u0435 \u043d\u0430\u0434\u043e, \u0443 \u043c\u0435\u043d\u044f \u0438 \u0442\u0430\u043a \u0432\u0441\u0435 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435!"')))),(0,r.kt)("p",null,"\u042d\u0442\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0447\u0435\u0440\u0435\u0437 ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultInventoryChecks"),". \u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u0430\u0442\u0447\u0435\u0439 RogueLibs."),(0,r.kt)("h3",{id:"iitemcombinable-checks"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 ",(0,r.kt)("inlineCode",{parentName:"h3"},"IItemCombinable")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u0440\u0438\u0442\u0435\u0440\u0438\u0438"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AutoStacking")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0423 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"\u041e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0435\u043d\u044b, \u0438 \u0431\u0443\u0434\u0443\u0447\u0438 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0451\u043d\u043d\u044b\u043c\u0438, \u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0432 \u043e\u0434\u0438\u043d \u043f\u0440\u0435\u0434\u043c\u0435\u0442")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StopOnZero")),(0,r.kt)("td",{parentName:"tr",align:null},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0440\u0430\u0432\u043d\u043e 0, \u0438\u043b\u0438 \u043e\u043d \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435/\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e")))),(0,r.kt)("h3",{id:"iitemtargetable-checks"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 ",(0,r.kt)("inlineCode",{parentName:"h3"},"IItemTargetable")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",{parentName:"tr",align:null},"\u041a\u0440\u0438\u0442\u0435\u0440\u0438\u0438"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0451\u0442"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Distance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0438\u0433\u0440\u043e\u043a\u043e\u043c \u0438 \u0446\u0435\u043b\u044c\u044e \u0431\u043e\u043b\u044c\u0448\u0435 15 \u0435\u0434\u0438\u043d\u0438\u0446"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ButlerBot")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0426\u0435\u043b\u044c - \u0420\u043e\u0431\u043e\u0442-\u0434\u0432\u043e\u0440\u0435\u0446\u043a\u0438\u0439"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EmptyMech")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0426\u0435\u043b\u044c - \u043f\u0443\u0441\u0442\u043e\u0439 \u041c\u0435\u0445"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StopOnZero")),(0,r.kt)("td",{parentName:"tr",align:null},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0440\u0430\u0432\u043d\u043e 0, \u0438\u043b\u0438 \u043e\u043d \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435/\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e")))))}u.isMDXComponent=!0}}]);