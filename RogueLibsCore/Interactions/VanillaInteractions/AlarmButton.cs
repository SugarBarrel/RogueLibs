﻿namespace RogueLibsCore
{
    public static partial class VanillaInteractions
    {
        [Include]
        private static void Patch_AlarmButton()
        {
            Patch<AlarmButton>(Params2);
            PatchInteract<AlarmButton>();
            RogueLibs.CreateCustomName("PressAlarmButton", NameTypes.Interface, new CustomNameInfo
            {
                English = "Press",
                Russian = @"Нажать",
            });
            RogueInteractions.CreateProvider<AlarmButton>(static h =>
            {
                if (h.Helper.interactingFar)
                {
                    if (!h.Object.hacked)
                    {
                        h.AddButton("AllAccessAlarmButton", static m =>
                        {
                            m.Object.hacked = true;
                            if (!m.gc.serverPlayer) m.gc.playerAgent.objectMult.ObjectAction(m.Object.objectNetID, "AllAccess");
                        });
                    }
                }
                else if (!h.Object.isBroken())
                {
                    h.AddImplicitButton("PressAlarmButton", static m =>
                    {
                        m.Object.lastHitByAgent = m.Object.interactingAgent;
                        if (m.Agent.upperCrusty || m.Object.hacked)
                            m.Object.ToggleSwitch(m.Agent, null);
                        else m.Object.Say("CantUseAlarmButton");
                    });
                }
            });
        }
    }
}
