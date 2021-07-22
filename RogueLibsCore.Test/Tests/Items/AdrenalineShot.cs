﻿namespace RogueLibsCore.Test
{
	[ItemCategories(RogueCategories.Drugs, RogueCategories.Melee, RogueCategories.Usable)]
	public class AdrenalineShot : CustomItem, IItemUsable
	{
		[RLSetup]
		public static void Setup()
		{
			RogueLibs.CreateCustomItem<AdrenalineShot>()
				.WithName(new CustomNameInfo("Adrenaline Shot"))
				.WithDescription(new CustomNameInfo("Gives you a ton of boosts for a short period of time."))
				.WithSprite(Properties.Resources.AdrenalineShot)
				.WithUnlock(new ItemUnlock
				{
					UnlockCost = 10,
					CharacterCreationCost = 4,
					LoadoutCost = 4,
					Prerequisites = { "KillerThrower", "Antidote", "RagePoison" },
				});

			RogueLibs.CreateCustomName("AdrenalineElectronic", "Dialogue",
				new CustomNameInfo("I don't have a circulatory system."));
		}

		public override void SetupDetails()
		{
			Item.itemType = ItemTypes.Consumable;
			Item.healthChange = 20;
			Item.itemValue = 60;
			Item.initCount = 1;
			Item.rewardCount = 2;
			Item.stackable = true;
			Item.goesInToolbar = true;
		}
		[IgnoreChecks("FullHealth")]
		public bool UseItem()
		{
			if (Owner.electronic)
			{
				Owner.SayDialogue("AdrenalineElectronic");
				gc.audioHandler.Play(Owner, "CantDo");
				return false;
			}
			Owner.AddEffect<Adrenaline>();
			gc.audioHandler.Play(Owner, "UseSyringe");
			Count--;
			return true;
		}
	}
}