/*
Ticket-Bot is licensed under the GNU Affero General Public License,
version 3 only ("AGPL-3.0-only"). See LICENSE.md for the full license text.

Additional Term under GNU AGPL v3, Section 7(b):

You are required to preserve and display, in a location clearly visible
to end users interacting with the bot (such as bot embeds, the bot's
"Bio" Discord profile, status, or equivalent), a notice that the
software is powered by Ticket-Bot, including a link to the original
project repository or to its website.

This notice must not be removed, obscured, or replaced.
*/

import { defineConfig } from "@/config/index.js";

export default defineConfig("0.0.1", {
	// Your Discord application (bot) client ID.
	clientId: "1533170961845846239",
	// The guild where the bot is installed and where commands should be deployed.
	guildId: "1530647624678375465",
	// Supported locales: "en", "fr"
	lang: "en",
	// Transcript ID style used by ticket.pm uploads.
	// "uuid" matches the current default. "emoji" keeps the older style.
	uuidType: "uuid",
	// Reduce telemetry to the bot version and runtime version only.
	minimalTracking: false,
	// Log websocket connect, close, and error events for telemetry.
	showWSLog: false,
	logs: {
		// Set to true to post audit logs for ticket actions.
		enabled: true,
		// Channel where ticket audit logs will be sent.
		channelId: "1538212598502260757",
		// Omit this object to enable every supported log type.
		events: {
			ticketCreate: true,
			ticketClaim: true,
			ticketUnclaim: true,
			ticketClose: true,
			ticketDelete: true,
			userAdded: true,
			userRemoved: true,
			ticketRename: true
		}
	},
	status: {
		// Set to false to leave the bot presence untouched.
		enabled: true,
		// Activity text shown in the member list. Please include a link to the project in either the bot's status or profile description or the embeds to comply with the license terms.
		text: "Starám se o Respublicu." +
			" :v:",
		// PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM, COMPETING
		type: "WATCHING",
		// Only used for STREAMING.
		url: "https://twitch.tv/example",
		// online, idle, dnd, invisible
		status: "online"
	},

	tickets: {
		// Fallback channel name used when a ticket type does not override it.
		// Available parameters here:
		// {ticketId} {ticketNumber} {ticketTypeKey} {ticketTypeName}
		// {createdById} {createdByUsername} {userId} {username}
		channelNameTemplate: "{username}",
		// How many open tickets a single user may have at once. Use 0 for unlimited.
		maxOpenPerUser: 1,
		// Global staff roles that can see and manage tickets.
		staffRoleIds: ["1530658819686793216","1530861776835448892"],
		// Roles that are blocked from opening any ticket type by default.
		blockedRoleIds: ["0"],
		// Roles mentioned in the welcome message when a ticket is opened.
		mentionRoleIds: ["1530861776835448892","1530658819686793216"],
		// Fallback open-ticket template path inside the messages directory.
		// Create your own file under messages/ and point a ticket type at it.
		// Example file: messages/tickets/ticket-opened-billing.ts
		// Example config path: "tickets/ticket-opened-billing"
		defaultWelcomeMessage: "tickets/ticket-opened",
		// Optional plain text appended to the welcome message template.
		// Available parameters here:
		// {channelId} {claimStatus} {claimerId} {claimerMention} {claimerUsername}
		// {createdById} {createdByMention} {createdByUsername}
		// {reason} {reason1} {reason2} ... {reasonN}
		// {ticketId} {ticketNumber} {ticketTypeKey} {ticketTypeName} {userId} {username}
		defaultWelcomeContent: "A staff member will be with you shortly. Please explain your issue clearly.",

		claims: {
			enabled: true,
			// soft: claiming is optional
			// strict: tickets must be claimed before they can be closed
			// display-only: claimed state is shown, but close rules do not change
			mode: "soft",
			// Adds claim and unclaim buttons to the welcome message.
			showButtons: true,
			// Lets the current claimer release the ticket.
			allowUnclaim: true,
			// Optional rename applied after a successful claim.
			// Available parameters here:
			// {claimerId} {claimerMention} {claimerUsername}
			// {createdById} {createdByMention} {createdByUsername}
			// {ticketId} {ticketNumber} {ticketTypeKey} {ticketTypeName} {userId} {username}
			// nameWhenClaimed: "{ticketNumber}-claimed-{claimerUsername}",
			// Optional category move applied after a successful claim.
			// Leave blank to keep the ticket in its original category.
			// categoryWhenClaimed: "444444444444444444",
			// disabled: nobody can take an existing claim
			// staff: any configured staff member can take over
			// roles: only roles listed in takeoverRoleIds can take over
			takeoverMode: "roles",
			takeoverRoleIds: ["1530658819686793216"]
		},
		close: {
			// If true, only staff can close tickets.
			staffOnly: true,
			// Send the opener a DM when the ticket closes.
			dmUserOnClose: true,
			// Ask the closer for a reason before closing.
			askForReason: true,
			// Adds a close button to the ticket welcome message.
			showCloseButton: true,
			// Delete the channel after close instead of keeping it around for review.
			deleteChannelOnClose: false,
			// Generate a transcript through the configured transcript provider.
			createTranscript: true,
			// Optional category for closed tickets when the channel is not deleted.
			// Leave blank to keep the ticket where it is.
			closeTicketCategoryId: "666666666666666666",
			// Global fallback template path for the DM sent on close.
			// A ticket type can override this with ticketTypes.<key>.close.dmMessage.
			dmMessage: "tickets/ticket-closed-dm",
			// Global fallback template path posted in the closed ticket channel.
			// A ticket type can override this with ticketTypes.<key>.close.channelMessage.
			channelMessage: "tickets/ticket-closed"
		}
	},

	ticketTypes: {
		billing: {
			name: "Admin Team",
			description: "Technická podpora, nahlašování a další.",
			emoji: ":technologist:",
			categoryId: "1538199887332515880",
			// This ticket type still uses the global open-ticket template.
			// If you want a custom open layout, create another file in messages/
			// and set `message` here the same way as the close overrides below.
			// Available parameters here:
			// {channelId} {claimStatus} {claimerId} {claimerMention} {claimerUsername}
			// {createdById} {createdByMention} {createdByUsername}
			// {reason} {reason1} {reason2} ... {reasonN}
			// {ticketId} {ticketNumber} {ticketTypeKey} {ticketTypeName} {userId} {username}
			welcomeContent: "Děkujeme za zprávu. Budeme se ti co nejdříve věnovat.",
			// Optional per-type close templates.
			// These override tickets.close.dmMessage and tickets.close.channelMessage.
			// The sample files below are included in this repository.
			close: {
				dmMessage: "tickets/ticket-closed-dm-billing",
				channelMessage: "tickets/ticket-closed-billing"
			},
			staffRoleIds: ["1530658819686793216","1530861776835448892"],
			openForm: {
				title: "Kontaktní formulář",
				questions: [
					{
						key: "subject",
						label: "Předmět",
						placeholder: "např. Nahlášení porušení pravidel",
						style: "short",
						required: true,
						maxLength: 100
					},
					{
						key: "message",
						label: "Zpráva",
						placeholder: "např. Chci nahlásit hráče...",
						style: "paragraph",
						required: true,
						minLength: 10,
						maxLength: 1000
					}
				]
			}
		},
	},

	panels: {
		quickButtons: {
			channelId: "1533175415017836585",
			message: "tickets/open-panel",
			content: "Potřebuješ poradit?",
			opener: {
				type: "buttons",
				buttons: [
					{
						ticketType: "podpora",
						label: "Podpora",
						emoji: "<:respublica:1533123903659049050>",
						style: "secondary"
					},
				]
			}
		}
	}
});

/*
Ticket-Bot is licensed under the GNU Affero General Public License,
version 3 only ("AGPL-3.0-only"). See LICENSE.md for the full license text.

Additional Term under GNU AGPL v3, Section 7(b):

You are required to preserve and display, in a location clearly visible
to end users interacting with the bot (such as bot embeds, the bot's
"Bio" Discord profile, status, or equivalent), a notice that the
software is powered by Ticket-Bot, including a link to the original
project repository or to its website.

This notice must not be removed, obscured, or replaced.
*/
