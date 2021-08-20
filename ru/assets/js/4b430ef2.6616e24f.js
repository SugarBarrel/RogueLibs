(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6688],{4214:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var i=n(7294),a=n(1756);function r(t){var e=t.children,n=t.language;return i.createElement(a.Z,{className:"language-"+(n||"csharp")},e.replace(/\t/g,"    "))}},3460:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return g},metadata:function(){return m},toc:function(){return c}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),s=n(1429),o=n(1016),l=(n(4996),n(4214)),u=["components"],g={},d="\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",m={unversionedId:"dev/items/abilities/targetable-abilities",id:"dev/items/abilities/targetable-abilities",isDocsHomePage:!1,title:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",description:"\u0414\u0435\u043b\u0430\u0435\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/dev/items/abilities/targetable-abilities.mdx",sourceDirName:"dev/items/abilities",slug:"/dev/items/abilities/targetable-abilities",permalink:"/RogueLibs/ru/docs/dev/items/abilities/targetable-abilities",editUrl:"https://github.com/Abbysssal/RogueLibs/edit/main/website/docs/dev/items/abilities/targetable-abilities.mdx",version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"\u0417\u0430\u0440\u044f\u0436\u0430\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438",permalink:"/RogueLibs/ru/docs/dev/items/abilities/chargeable-abilities"},next:{title:"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0443\u044e \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c",permalink:"/RogueLibs/ru/docs/dev/traits/create-trait"}},c=[{value:"\u0414\u0435\u043b\u0430\u0435\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438",id:"making-targetable",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[]}],p={toc:c};function b(t){var e=t.components,n=(0,a.Z)(t,u);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435-\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438"},"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438"),(0,r.kt)("h2",{id:"making-targetable"},"\u0414\u0435\u043b\u0430\u0435\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c\u0438"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"IAbilityTargetable")," \u0432 \u043a\u043b\u0430\u0441\u0441\u0435 \u0432\u0430\u0448\u0435\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MyTargetableAbility.cs"',title:'"MyTargetableAbility.cs"'},"// highlight-next-line\npublic class MyTargetableAbility : CustomAbility, IAbilityTargetable\n{\n    // highlight-next-line\n    public PlayfieldObject FindTarget() { /* ... */ }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FindTarget")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0443\u044e \u0446\u0435\u043b\u044c, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c. \u0418\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0451\u043d \u043d\u0430\u0434 \u044d\u0442\u0438\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c. \u0415\u0441\u043b\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0441\u0435\u0439\u0447\u0430\u0441, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"\u041f\u043e\u0442\u043e\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"CurrentTarget")," \u0432 \u043b\u044e\u0431\u043e\u043c \u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u043e\u0432:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'    public override void OnPressed()\n    {\n        if (CurrentTarget is null)\n        {\n            gc.audioHandler.Play(Owner, "CantDo");\n            return;\n        }\n        /* ... */\n    }\n')),(0,r.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)(s.Z,{defaultValue:"hug",values:[{label:"\u041e\u0431\u043d\u0438\u043c\u0430\u0448\u043a\u0438",value:"hug"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"hug",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"CodeSnippet"},'using System.Collections.Generic;\nusing System.Linq;\nusing UnityEngine;\n\nnamespace RogueLibsCore.Test\n{\n\tpublic class Hug : CustomAbility, IAbilityTargetable\n\t{\n\t\t[RLSetup]\n\t\tpublic static void Setup()\n\t\t{\n\t\t\tRogueLibs.CreateCustomAbility<Hug>()\n\t\t\t\t.WithName(new CustomNameInfo("Hug"))\n\t\t\t\t.WithDescription(new CustomNameInfo("Sneak up behind people. And HUG THEM!!"))\n\t\t\t\t.WithSprite(Properties.Resources.Hug)\n\t\t\t\t.WithUnlock(new AbilityUnlock { UnlockCost = 5, CharacterCreationCost = 5, });\n\n\t\t\tRogueLibs.CreateCustomName("HugNegative1", NameTypes.Dialogue, new CustomNameInfo("Huh? What are you doing?"));\n\t\t\tRogueLibs.CreateCustomName("HugNegative2", NameTypes.Dialogue, new CustomNameInfo("Excuse me?!"));\n\t\t\tRogueLibs.CreateCustomName("HugNegative3", NameTypes.Dialogue, new CustomNameInfo("Stop it!"));\n\t\t\tRogueLibs.CreateCustomName("HugPositive1", NameTypes.Dialogue, new CustomNameInfo("Oh.. Thanks."));\n\t\t\tRogueLibs.CreateCustomName("HugPositive2", NameTypes.Dialogue, new CustomNameInfo("Um.. Okay.."));\n\t\t\tRogueLibs.CreateCustomName("HugPositive3", NameTypes.Dialogue, new CustomNameInfo("?.."));\n\t\t\tRogueLibs.CreateCustomName("HugForgive1", NameTypes.Dialogue, new CustomNameInfo("Oh.. Okay, I forgive you."));\n\t\t\tRogueLibs.CreateCustomName("HugForgive2", NameTypes.Dialogue, new CustomNameInfo("Alright, I forgive you."));\n\t\t\tRogueLibs.CreateCustomName("HugForgive3", NameTypes.Dialogue, new CustomNameInfo("Okay... Don\'t worry about that.."));\n\t\t}\n\n\t\tpublic override void OnAdded() { }\n\t\tpublic PlayfieldObject FindTarget()\n\t\t{\n\t\t\tAgent closest = null;\n\t\t\tfloat distance = float.MaxValue;\n\t\t\tforeach (Agent agent in Owner.interactionHelper.TriggerList\n\t\t\t\t.Where(go => go.CompareTag("AgentSprite")).Select(go => go.GetComponent<ObjectSprite>().agent))\n\t\t\t{\n\t\t\t\tif (!huggedList.Contains(agent) && !agent.dead && !agent.ghost && !Owner.ghost && !agent.hologram && agent.go.activeSelf && !agent.mechFilled && !agent.mechEmpty)\n\t\t\t\t{\n\t\t\t\t\tfloat dist = Vector2.Distance(Owner.curPosition, agent.curPosition);\n\t\t\t\t\tif (dist < distance)\n\t\t\t\t\t{\n\t\t\t\t\t\tclosest = agent;\n\t\t\t\t\t\tdistance = dist;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn closest;\n\t\t}\n\t\tprivate readonly List<Agent> huggedList = new List<Agent>();\n\t\tpublic override void OnPressed()\n\t\t{\n\t\t\tif (CurrentTarget is null)\n\t\t\t{\n\t\t\t\tgc.audioHandler.Play(Owner, VanillaAudio.CantDo);\n}\n\t\t\telse\n\t\t\t{\n\t\t\t\tAgent target = (Agent)CurrentTarget;\n\t\t\t\tint rnd = new System.Random().Next(3) + 1;\n\n\t\t\t\trelStatus code = target.relationships.GetRelCode(Owner);\n\t\t\t\tif (code == relStatus.Friendly || code == relStatus.Submissive)\n\t\t\t\t{\n\t\t\t\t\ttarget.SayDialogue("HugPositive" + rnd);\n\t\t\t\t\ttarget.relationships.SetRel(Owner, "Loyal");\n\t\t\t\t}\n\t\t\t\telse if (code == relStatus.Loyal)\n\t\t\t\t{\n\t\t\t\t\ttarget.SayDialogue("HugPositive" + rnd);\n\t\t\t\t\ttarget.relationships.SetRel(Owner, "Aligned");\n\t\t\t\t}\n\t\t\t\telse if (code == relStatus.Aligned)\n\t\t\t\t{\n\t\t\t\t\ttarget.SayDialogue("HugPositive" + rnd);\n\t\t\t\t}\n\t\t\t\telse if (code == relStatus.Neutral)\n\t\t\t\t{\n\t\t\t\t\ttarget.SayDialogue("HugNegative" + rnd);\n\t\t\t\t\ttarget.relationships.SetRel(Owner, "Annoyed");\n\t\t\t\t\ttarget.relationships.SetStrikes(Owner, 2);\n\t\t\t\t\ttarget.statusEffects.annoyeders.Add(Owner);\n\t\t\t\t\tgc.audioHandler.Play(target, VanillaAudio.AgentAnnoyed);\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\telse if (code == relStatus.Annoyed)\n\t\t\t\t{\n\t\t\t\t\ttarget.SayDialogue("HugForgive" + rnd);\n\t\t\t\t\ttarget.relationships.SetRel(Owner, "Neutral");\n\t\t\t\t}\n\t\t\t\telse if (code == relStatus.Hostile)\n\t\t\t\t{\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\ttarget.relationships.SetStrikes(Owner, 0);\n\t\t\t\tgc.audioHandler.Play(target, VanillaAudio.AgentOK);\n\t\t\t\thuggedList.Add(target);\n\t\t\t}\n\t\t}\n\t}\n}\n'))))}b.isMDXComponent=!0}}]);