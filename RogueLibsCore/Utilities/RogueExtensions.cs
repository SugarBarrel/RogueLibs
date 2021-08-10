﻿using System;
using System.Linq;
using System.Collections.Generic;
using UnityEngine;

namespace RogueLibsCore
{
	/// <summary>
	///   <para>The collection of useful hook-related extension methods.</para>
	/// </summary>
	public static class RogueExtensions
	{
		/// <summary>
		///   <para>Adds the specified <paramref name="amount"/> of the <typeparamref name="TItem"/> item to the current <paramref name="inventory"/>.</para>
		/// </summary>
		/// <typeparam name="TItem">The type of the item to add to the <paramref name="inventory"/>.</typeparam>
		/// <param name="inventory">The current inventory.</param>
		/// <param name="amount">The amount of the item to add.</param>
		/// <returns>The added item, if found in the inventory; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="inventory"/> is <see langword="null"/>.</exception>
		/// <exception cref="ArgumentOutOfRangeException"><paramref name="amount"/> is less than or equal to 0.</exception>
		public static TItem AddItem<TItem>(this InvDatabase inventory, int amount) where TItem : CustomItem
		{
			if (inventory is null) throw new ArgumentNullException(nameof(inventory));
			if (amount <= 0) throw new ArgumentOutOfRangeException(nameof(amount), amount, $"{nameof(amount)} is less than or equal to 0.");
			InvItem item = inventory.AddItem(ItemInfo.Get<TItem>().Name, amount);
			return item?.GetHook<TItem>();
		}
		/// <summary>
		///   <para>Finds an item hook that is assignable to a variable of <typeparamref name="TItem"/> type in the current <paramref name="inventory"/>.</para>
		/// </summary>
		/// <typeparam name="TItem">The type of the item hook to search for.</typeparam>
		/// <param name="inventory">The current inventory.</param>
		/// <returns>An item hook assignable to a variable of <typeparamref name="TItem"/> type, if found; otherwise, <see langword="default"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="inventory"/> is <see langword="null"/>.</exception>
		public static TItem GetItem<TItem>(this InvDatabase inventory)
		{
			if (inventory is null) throw new ArgumentNullException(nameof(inventory));
			InvItem item = inventory.InvItemList.Find(i => i.GetHook<TItem>() != null);
			return item != null ? item.GetHook<TItem>() : default;
		}
		/// <summary>
		///   <para>Finds all item hooks that are assignable to a variable of <typeparamref name="TItem"/> type in the current <paramref name="inventory"/>.</para>
		/// </summary>
		/// <typeparam name="TItem">The type of the item hooks to search for.</typeparam>
		/// <param name="inventory">The current inventory.</param>
		/// <returns>An enumerable collection of item hooks that are assignable to a variable of <typeparamref name="TItem"/> type.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="inventory"/> is <see langword="null"/>.</exception>
		public static IEnumerable<TItem> GetItems<TItem>(this InvDatabase inventory)
		{
			if (inventory is null) throw new ArgumentNullException(nameof(inventory));
			return inventory.InvItemList.SelectMany(i => i.GetHooks<TItem>()).Where(i => i != null).ToArray();
		}
		/// <summary>
		///   <para>Determines whether the current <paramref name="inventory"/> contains an item hook that is assignable to a variable of <typeparamref name="TItem"/> type.</para>
		/// </summary>
		/// <typeparam name="TItem">The type of the item hook to search for.</typeparam>
		/// <param name="inventory">The current inventory.</param>
		/// <returns><see langword="true"/>, if the <paramref name="inventory"/> contains an item that has a hook that is assignable to a variable of <typeparamref name="TItem"/> type; otherwise, <see langword="false"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="inventory"/> is <see langword="null"/>.</exception>
		public static bool HasItem<TItem>(this InvDatabase inventory)
		{
			if (inventory is null) throw new ArgumentNullException(nameof(inventory));
			return inventory.InvItemList.Exists(i => i.GetHook<TItem>() != null);
		}
		/// <summary>
		///   <para>Determines whether the sum of item counts of the items, that have hooks that are assignable to a variable of <typeparamref name="TItem"/> type, is larger than or equal to the specified <paramref name="amount"/>.</para>
		/// </summary>
		/// <typeparam name="TItem">The type of the item hooks to search for.</typeparam>
		/// <param name="inventory">The current inventory.</param>
		/// <param name="amount">The required amount of items.</param>
		/// <returns><see langword="true"/>, if the sum of item counts of the found items is larger than or equal to the specified <paramref name="amount"/>; otherwise, <see langword="false"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="inventory"/> is <see langword="null"/>.</exception>
		public static bool HasItem<TItem>(this InvDatabase inventory, int amount)
		{
			if (inventory is null) throw new ArgumentNullException(nameof(inventory));
			int sum = inventory.InvItemList.Where(i => i.GetHook<TItem>() != null).Sum(i => i.invItemCount);
			return sum >= amount;
		}

		/// <summary>
		///   <para>Gives the specified <typeparamref name="TAbility"/> ability to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TAbility">The ability type to give to the <paramref name="agent"/>.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <returns>The given ability.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static TAbility GiveAbility<TAbility>(this Agent agent) where TAbility : CustomAbility
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			string abilityName = ItemInfo.Get<TAbility>().Name;
			agent.statusEffects.GiveSpecialAbility(abilityName);
			return agent.inventory.equippedSpecialAbility.GetHook<TAbility>();
		}
		/// <summary>
		///   <para>Returns the <see cref="CustomAbility"/> hook associated with the current <paramref name="agent"/>'s special ability.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <returns>The <see cref="CustomAbility"/> hook associated with the <paramref name="agent"/>, if found; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static CustomAbility GetAbility(this Agent agent)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			return agent.inventory.equippedSpecialAbility?.GetHook<CustomAbility>();
		}
		/// <summary>
		///   <para>Finds an item hook assignable to a variable of the specified <typeparamref name="TAbility"/> type associated with the current <paramref name="agent"/>'s special ability.</para>
		/// </summary>
		/// <typeparam name="TAbility">The type of the item hook to search for.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <returns>The item hook assignable to a variable of the specified <typeparamref name="TAbility"/> type associated with the <paramref name="agent"/>'s special ability, if found; otherwise, <see langword="default"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static TAbility GetAbility<TAbility>(this Agent agent)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			InvItem item = agent.inventory.equippedSpecialAbility;
			return item != null ? item.GetHook<TAbility>() : default;
		}

		/// <summary>
		///   <para>Gets the current <paramref name="buttonData"/>'s state represented by the <see cref="UnlockButtonState"/> enumeration.</para>
		/// </summary>
		/// <param name="buttonData">The current button.</param>
		/// <returns>The <see cref="UnlockButtonState"/> enumeration representing the current <paramref name="buttonData"/>'s state.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="buttonData"/> is <see langword="null"/>.</exception>
		public static UnlockButtonState GetState(this ButtonData buttonData)
		{
			if (buttonData is null) throw new ArgumentNullException(nameof(buttonData));
			if (buttonData.scrollingHighlighted) return UnlockButtonState.Selected;
			if (buttonData.scrollingHighlighted2) return UnlockButtonState.Purchasable;
			if (buttonData.scrollingHighlighted3) return UnlockButtonState.Locked;
			if (buttonData.scrollingHighlighted4) return UnlockButtonState.Disabled;
			else return UnlockButtonState.Normal;
		}
		/// <summary>
		///   <para>Sets the current <paramref name="buttonData"/>'s state represented by the specified <see cref="UnlockButtonState"/> <paramref name="value"/>.</para>
		/// </summary>
		/// <param name="buttonData">The current button.</param>
		/// <param name="value">The <see cref="UnlockButtonState"/> representing the button's state.</param>
		/// <exception cref="ArgumentNullException"><paramref name="buttonData"/> is <see langword="null"/>.</exception>
		public static void SetState(this ButtonData buttonData, UnlockButtonState value)
		{
			if (buttonData is null) throw new ArgumentNullException(nameof(buttonData));
			buttonData.scrollingHighlighted = value == UnlockButtonState.Selected;
			buttonData.scrollingHighlighted2 = value == UnlockButtonState.Purchasable;
			buttonData.scrollingHighlighted3 = value == UnlockButtonState.Locked;
			buttonData.scrollingHighlighted4 = value == UnlockButtonState.Disabled;
			buttonData.highlightedSprite
				= value == UnlockButtonState.Selected
					? buttonData.scrollingMenu?.solidObjectButtonSelected ?? buttonData.characterCreation.solidObjectButtonSelected
				: value == UnlockButtonState.Purchasable
					? buttonData.scrollingMenu?.solidObjectButtonLocked ?? buttonData.characterCreation.solidObjectButtonLocked
				: value == UnlockButtonState.Locked
					? buttonData.scrollingMenu?.solidObjectButtonRed ?? buttonData.characterCreation.solidObjectButtonRed
				: value == UnlockButtonState.Disabled
					? buttonData.scrollingMenu?.solidObjectButton ?? buttonData.characterCreation.solidObjectButton
				: buttonData.scrollingMenu?.solidObjectButton ?? buttonData.characterCreation.solidObjectButton;
		}

		/// <summary>
		///   <para>Adds the specified <typeparamref name="TTrait"/> trait to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TTrait">The type of the trait to add to the <paramref name="agent"/>.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <returns>The added trait, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static TTrait AddTrait<TTrait>(this Agent agent) where TTrait : CustomTrait
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			string traitName = TraitInfo.Get<TTrait>().Name;
			agent.statusEffects.AddTrait(traitName);
			return agent.statusEffects.TraitList.Find(t => t.traitName == traitName)?.GetHook<TTrait>();
		}
		/// <summary>
		///   <para>Finds a trait hook that is assignable to a variable of <typeparamref name="TTrait"/> type on the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TTrait">The type of the trait hook to search for.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <returns>A trait hook assignable to a variable of <typeparamref name="TTrait"/> type, if found; otherwise, <see langword="default"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static TTrait GetTrait<TTrait>(this Agent agent)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			Trait trait = agent.statusEffects.TraitList.Find(t => t.GetHook<TTrait>() != null);
			return trait != null ? trait.GetHook<TTrait>() : default;
		}
		/// <summary>
		///   <para>Finds all trait hooks that are assignable to a variable of <typeparamref name="TTrait"/> type on the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TTrait">The type of the trait hooks to search for.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <returns>An enumerable collection of trait hooks that are assignable to a variable of <typeparamref name="TTrait"/> type.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static IEnumerable<TTrait> GetTraits<TTrait>(this Agent agent)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			return agent.statusEffects.TraitList.SelectMany(t => t.GetHooks<TTrait>()).Where(t => t != null).ToArray();
		}
		/// <summary>
		///   <para>Determines whether the current <paramref name="agent"/> has a trait with a hook that is assignable to a variable of <typeparamref name="TTrait"/> type.</para>
		/// </summary>
		/// <typeparam name="TTrait">The type of the trait hook to search for.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <returns><see langword="true"/>, if the <paramref name="agent"/> has a trait that has a hook that is assignable to a variable of <typeparamref name="TTrait"/> type; otherwise, <see langword="false"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static bool HasTrait<TTrait>(this Agent agent)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			return agent.statusEffects.TraitList.Exists(t => t.GetHook<TTrait>() != null);
		}

		/// <summary>
		///   <para>Adds a trait with the specified <paramref name="traitName"/> to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="traitName">The name of the trait to add.</param>
		/// <returns>The added trait, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static Trait AddTrait(this Agent agent, string traitName)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			agent.statusEffects.AddTrait(traitName);
			return agent.GetTrait(traitName);
		}
		/// <summary>
		///   <para>Finds a trait with the specified <paramref name="traitName"/> on the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="traitName">The name of the trait to search for.</param>
		/// <returns>The trait, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static Trait GetTrait(this Agent agent, string traitName)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			return agent.statusEffects.TraitList.Find(t => t.traitName == traitName);
		}
		/// <summary>
		///   <para>Determines whether the current <paramref name="agent"/> has a trait with the specified <paramref name="traitName"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="traitName">The name of the trait to search for.</param>
		/// <returns><see langword="true"/>, if the current <paramref name="agent"/> has a trait with the specified <paramref name="traitName"/>; otherwise, <see langword="false"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static bool HasTrait(this Agent agent, string traitName)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			return agent.statusEffects.hasTrait(traitName);
		}

		/// <summary>
		///   <para>Adds the specified <typeparamref name="TEffect"/> effect to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TEffect">The type of the effect to add to the <paramref name="agent"/>.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <returns>The added effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static TEffect AddEffect<TEffect>(this Agent agent) where TEffect : CustomEffect
			=> AddEffect<TEffect>(agent, default(CreateEffectInfo));
		/// <summary>
		///   <para>Adds the specified <typeparamref name="TEffect"/> effect with the <paramref name="specificTime"/> to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TEffect">The type of the effect to add to the <paramref name="agent"/>.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <param name="specificTime">The effect's time.</param>
		/// <returns>The added effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static TEffect AddEffect<TEffect>(this Agent agent, int specificTime) where TEffect : CustomEffect
			=> AddEffect<TEffect>(agent, new CreateEffectInfo(specificTime));
		/// <summary>
		///   <para>Adds the specified <typeparamref name="TEffect"/> effect with the specified <paramref name="causerAgent"/> to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TEffect">The type of the effect to add to the <paramref name="agent"/>.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <param name="causerAgent">The agent that caused this effect.</param>
		/// <returns>The added effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static TEffect AddEffect<TEffect>(this Agent agent, Agent causerAgent) where TEffect : CustomEffect
			=> AddEffect<TEffect>(agent, new CreateEffectInfo(causerAgent));
		/// <summary>
		///   <para>Adds the specified <typeparamref name="TEffect"/> effect with the specified <paramref name="causerAgent"/> and <paramref name="specificTime"/> to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TEffect">The type of the effect to add to the <paramref name="agent"/>.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <param name="causerAgent">The agent that caused this effect.</param>
		/// <param name="specificTime">The effect's time.</param>
		/// <returns>The added effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static TEffect AddEffect<TEffect>(this Agent agent, Agent causerAgent, int specificTime) where TEffect : CustomEffect
			=> AddEffect<TEffect>(agent, new CreateEffectInfo(causerAgent, specificTime));
		/// <summary>
		///   <para>Adds the specified <typeparamref name="TEffect"/> effect with the specified <paramref name="info"/> to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TEffect">The type of the effect to add to the <paramref name="agent"/>.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <param name="info">The struct containing effect initialization info.</param>
		/// <returns>The added effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static TEffect AddEffect<TEffect>(this Agent agent, CreateEffectInfo info) where TEffect : CustomEffect
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			string effectName = EffectInfo.Get<TEffect>().Name;
			agent.statusEffects.AddStatusEffect(effectName, !info.DontShowText, info.CauserAgent,
				agent.objectMult.IsFromClient(), info.IgnoreElectronic, info.SpecificTime != 0 ? info.SpecificTime : -1);
			return agent.GetEffect<TEffect>();
		}

		/// <summary>
		///   <para>Finds an effect hook that is assignable to a variable of <typeparamref name="TEffect"/> type on the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TEffect">The type of the effect hook to search for.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <returns>An effect hook assignable to a variable of <typeparamref name="TEffect"/> type, if found; otherwise, <see langword="default"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static TEffect GetEffect<TEffect>(this Agent agent)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			StatusEffect effect = agent.statusEffects.StatusEffectList.Find(s => s.GetHook<TEffect>() != null);
			return effect != null ? effect.GetHook<TEffect>() : default;
		}
		/// <summary>
		///   <para>Finds all effect hooks that are assignable to a variable of <typeparamref name="TEffect"/> type on the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <typeparam name="TEffect">The type of the effect hooks to search for.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <returns>An enumerable collection of effect hooks that are assignable to a variable of <typeparamref name="TEffect"/> type.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static IEnumerable<TEffect> GetEffects<TEffect>(this Agent agent)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			return agent.statusEffects.StatusEffectList.SelectMany(s => s.GetHooks<TEffect>()).Where(e => e != null).ToArray();
		}
		/// <summary>
		///   <para>Determines whether the current <paramref name="agent"/> has an effect with a hook that is assignable to a variable of <typeparamref name="TEffect"/> type.</para>
		/// </summary>
		/// <typeparam name="TEffect">The type of the effect hook to search for.</typeparam>
		/// <param name="agent">The current agent.</param>
		/// <returns><see langword="true"/>, if the <paramref name="agent"/> has an effect that has a hook that is assignable to a variable of <typeparamref name="TEffect"/> type; otherwise, <see langword="false"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static bool HasEffect<TEffect>(this Agent agent)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			return agent.statusEffects.StatusEffectList.Exists(s => s.GetHook<TEffect>() != null);
		}

		/// <summary>
		///   <para>Adds an effect with the specified <paramref name="effectName"/> to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="effectName">The name of the effect to add.</param>
		/// <returns>The added effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static StatusEffect AddEffect(this Agent agent, string effectName)
			=> AddEffect(agent, effectName, default(CreateEffectInfo));
		/// <summary>
		///   <para>Adds an effect with the specified <paramref name="effectName"/> to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="effectName">The name of the effect to add.</param>
		/// <param name="specificTime">The effect's time.</param>
		/// <returns>The added effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static StatusEffect AddEffect(this Agent agent, string effectName, int specificTime)
			=> AddEffect(agent, effectName, new CreateEffectInfo(specificTime));
		/// <summary>
		///   <para>Adds an effect with the specified <paramref name="effectName"/> to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="effectName">The name of the effect to add.</param>
		/// <param name="causerAgent">The agent that caused this effect.</param>
		/// <returns>The added effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static StatusEffect AddEffect(this Agent agent, string effectName, Agent causerAgent)
			=> AddEffect(agent, effectName, new CreateEffectInfo(causerAgent));
		/// <summary>
		///   <para>Adds an effect with the specified <paramref name="effectName"/> to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="effectName">The name of the effect to add.</param>
		/// <param name="causerAgent">The agent that caused this effect.</param>
		/// <param name="specificTime">The effect's time.</param>
		/// <returns>The added effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static StatusEffect AddEffect(this Agent agent, string effectName, Agent causerAgent, int specificTime)
			=> AddEffect(agent, effectName, new CreateEffectInfo(causerAgent, specificTime));
		/// <summary>
		///   <para>Adds an effect with the specified <paramref name="effectName"/> and <paramref name="info"/> to the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="effectName">The name of the effect to add.</param>
		/// <param name="info">The struct containing effect initialization info.</param>
		/// <returns>The added effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static StatusEffect AddEffect(this Agent agent, string effectName, CreateEffectInfo info)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			agent.statusEffects.AddStatusEffect(effectName, !info.DontShowText, info.CauserAgent,
				agent.objectMult.IsFromClient(), info.IgnoreElectronic, info.SpecificTime != 0 ? info.SpecificTime : -1);
			return agent.GetEffect(effectName);
		}

		/// <summary>
		///   <para>Finds an effect with the specified <paramref name="effectName"/> on the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="effectName">The name of theeffect to search for.</param>
		/// <returns>The effect, if found on the character; otherwise, <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static StatusEffect GetEffect(this Agent agent, string effectName)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			return agent.statusEffects.StatusEffectList.Find(s => s.statusEffectName == effectName);
		}
		/// <summary>
		///   <para>Determines whether the current <paramref name="agent"/> has an effect with the specified <paramref name="effectName"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="effectName">The name of the effect to search for.</param>
		/// <returns><see langword="true"/>, if the current <paramref name="agent"/> has an effect with the specified <paramref name="effectName"/>; otherwise, <see langword="false"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static bool HasEffect(this Agent agent, string effectName)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			return agent.statusEffects.StatusEffectList.Exists(s => s.statusEffectName == effectName);
		}

		/// <summary>
		///   <para>Changes the current <paramref name="agent"/>'s health by the specified <paramref name="healthChange"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="healthChange">The health delta.</param>
		public static void ChangeHealth(this Agent agent, float healthChange)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			agent.statusEffects.ChangeHealth(healthChange);
		}
		/// <summary>
		///   <para>Changes the current <paramref name="agent"/>'s health by the specified <paramref name="healthChange"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <param name="healthChange">The health delta.</param>
		/// <param name="damager">The object that damaged the current agent.</param>
		public static void ChangeHealth(this Agent agent, float healthChange, PlayfieldObject damager)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			agent.statusEffects.ChangeHealth(healthChange, damager);
		}
		/// <summary>
		///   <para>Returns the last <see cref="Bullet"/> fired by the current <paramref name="agent"/>.</para>
		/// </summary>
		/// <param name="agent">The current agent.</param>
		/// <returns>The last <see cref="Bullet"/> fired by the current <paramref name="agent"/>, or <see langword="null"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="agent"/> is <see langword="null"/>.</exception>
		public static Bullet GetLastFiredBullet(this Agent agent)
		{
			if (agent is null) throw new ArgumentNullException(nameof(agent));
			return agent.GetHook<LastFiredBulletHook>()?.LastFiredBullet;
		}
	}
	/// <summary>
	///   <para>Represents status effect initialization information.</para>
	/// </summary>
	public struct CreateEffectInfo
	{
		/// <summary>
		///   <para>Initializes a new instance of the <see cref="CreateEffectInfo"/> structure with the specified <paramref name="specificTime"/>.</para>
		/// </summary>
		/// <param name="specificTime">The effect's time.</param>
		public CreateEffectInfo(int specificTime)
		{
			SpecificTime = specificTime;
			DontShowText = false;
			IgnoreElectronic = false;
			CauserAgent = null;
		}
		/// <summary>
		///   <para>Initializes a new instance of the <see cref="CreateEffectInfo"/> structure with the specified <paramref name="causerAgent"/>.</para>
		/// </summary>
		/// <param name="causerAgent">The agent that caused this effect.</param>
		public CreateEffectInfo(Agent causerAgent)
		{
			SpecificTime = 0;
			DontShowText = false;
			IgnoreElectronic = false;
			CauserAgent = causerAgent;
		}
		/// <summary>
		///   <para>Initializes a new instance of the <see cref="CreateEffectInfo"/> structure with the specified <paramref name="causerAgent"/> and <paramref name="specificTime"/>.</para>
		/// </summary>
		/// <param name="causerAgent">The agent that caused this effect.</param>
		/// <param name="specificTime">The effect's time.</param>
		public CreateEffectInfo(Agent causerAgent, int specificTime)
		{
			SpecificTime = specificTime;
			DontShowText = false;
			IgnoreElectronic = false;
			CauserAgent = causerAgent;
		}

		/// <summary>
		///   <para>Gets or sets the effect's time.</para>
		/// </summary>
		public int SpecificTime { get; set; }
		/// <summary>
		///   <para>Gets or sets whether a buff text shouldn't be displayed.</para>
		/// </summary>
		public bool DontShowText { get; set; }
		/// <summary>
		///   <para>Gets or sets whether the effect ignores the "Electronic" trait.</para>
		/// </summary>
		public bool IgnoreElectronic { get; set; }
		/// <summary>
		///   <para>Gets or sets the agent that caused this effect.</para>
		/// </summary>
		public Agent CauserAgent { get; set; }
	}
}