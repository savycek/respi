import type { BaseTranslation } from "../i18n-types.js";

const cs: BaseTranslation = {
	shared: {
		unexpected_interaction_error: "Při zpracování této interakce došlo k neočekávané chybě.",
		no_reason_provided: "Nebyly poskytnuty žádné další podrobnosti.",
		claim_status: {
			claimed_by: "Převzal/a <@{userId:string}>",
			unclaimed: "Nepřevzato"
		},
		transcript_status: {
			ready: "[Otevřít přepis]({url:string})",
			unavailable: "Nedostupný nebo se stále zpracovává."
		}
	},
	commands: {
		add: {
			description: "Přidat uživatele do aktuálního ticketu",
			options: {
				user: {
					description: "Uživatel, kterého chcete přidat"
				}
			},
			choose_user: "Vyberte uživatele, kterého chcete k tomuto ticketu přidat.",
			already_has_access: "Tento uživatel již má k tomuto ticketu přístup.",
			already_invited: "Tento uživatel již byl do tohoto ticketu pozván.",
			invite_limit_reached: "Do jednoho ticketu nemůžete pozvat více než {limit:number} uživatelů.",
			success: "Uživatel <@{userId:string}> byl přidán k tomuto ticketu."
		},
		claim: {
			description: "Převzít aktuální ticket",
			disabled: "Přebírání ticketů je zakázáno.",
			already_claimed: "Tento ticket už máte převzatý.",
			cannot_take_over: "Tento ticket je již převzatý a nelze jej přebrat.",
			only_staff: "Tento ticket může převzít pouze personál.",
			success: "Převzali jste tento ticket.",
			reassigned: "Ticket byl přeregistrován na uživatele <@{userId:string}>."
		},
		close: {
			description: "Zavřít aktuální ticket"
		},
		cleardm: {
			description: "Vymazat historii ticketů z vašich soukromých zpráv (DM) s botem",
			starting: "Mažu historii ticketů z vašich soukromých zpráv...",
			dm_unavailable: "Nepodařilo se mi získat přístup k vašim soukromým zprávám.",
			cleared: "Bylo vymazáno {count:number} zpráv s historií ticketů.",
			none_found: "Nebyly nalezeny žádné zprávy s historií ticketů."
		},
		mass_add: {
			description: "Přidat více uživatelů do aktuálního ticketu najednou",
			options: {
				users: {
					description: "ID uživatelů nebo zmínky oddělené čárkou"
				}
			},
			provide_users: "Zadejte alespoň jedno ID uživatele nebo zmínku.",
			summary: {
				added: "Uživatelé přidáni: {mentions:string}.",
				none_added: "Nebyli přidáni žádní uživatelé.",
				skipped_existing: "Přeskočeno {count:number} uživatelů, kteří již měli přístup.",
				skipped_invalid: "Přeskočeno {count:number} neplatných ID uživatelů.",
				limit_reached: "Přidávání bylo zastaveno, protože byl dosažen limit {limit:number} uživatelů na ticket."
			}
		},
		remove: {
			description: "Odebrat pozvané uživatele z aktuálního ticketu",
			options: {
				user: {
					description: "Pozvaný uživatel, kterého chcete okamžitě odebrat"
				}
			},
			no_invited_users: "V tomto ticketu nejsou žádní pozvaní uživatelé, které by bylo možné odebrat.",
			select_users: "Vyberte pozvané uživatele, které chcete z tohoto ticketu odebrat.",
			select_placeholder: "Zvolte uživatele k odebrání",
			not_invited: "Tito uživatelé nejsou do tohoto ticketu pozváni.",
			success: "Uživatelé {mentions:string} byli z ticketu odebráni."
		},
		rename: {
			description: "Přejmenovat aktuální ticket",
			options: {
				name: {
					description: "Nový název kanálu ticketu"
				}
			},
			only_staff: "Tento ticket může přejmenovat pouze personál.",
			provide_name: "Zadejte nový název ticketu.",
			success: "Ticket byl přejmenován na <#{channelId:string}>."
		},
		unclaim: {
			description: "Vrátit zpět převzetí aktuálního ticketu",
			disabled: "Vracení převzetí ticketů je pro tento server zakázáno.",
			not_claimed: "Tento ticket nikdo nepřevzal.",
			only_current_claimer: "Zrušit převzetí ticketu může pouze ten, kdo jej aktuálně převzal.",
			success: "Zrušili jste své převzetí tohoto ticketu."
		}
	},
	tickets: {
		records: {
			not_ticket_channel: "Tato interakce nebyla použita v kanálu ticketu.",
			not_open_ticket: "Tento kanál není otevřeným ticketem.",
			already_closed: "Tento ticket je již uzavřen."
		},
		panel: {
			no_visible_types: "Na tomto panelu nemáte přístup k žádnému typu ticketu.",
			select_type: "Vyberte prosím typ ticketu.",
			unavailable_type: "Tento typ ticketu není na tomto panelu k dispozici.",
			select_placeholder: "Vyberte typ ticketu"
		},
		open: {
			not_allowed_type: "Nemáte oprávnění vytvářet tento typ ticketu.",
			unavailable_type: "Tento typ ticketu není na tomto panelu k dispozici.",
			max_open_reached: "Dosáhli jste maximálního počtu otevřených ticketů ({limit:number}).",
			created: "Ticket byl vytvořen: <#{channelId:string}>",
			question_answer: "{label:string}: {answer:string}"
		},
		claim: {
			only_staff: "Tento ticket může převzít pouze oprávněný administrátor."
		},
		actions: {
			close_ticket: "Zavřít ticket",
			claim_ticket: "Převzít ticket",
			unclaim_ticket: "Vrátit ticket",
			delete_ticket: "Smazat ticket"
		},
		close: {
			delete_channel_start: "Mažu kanál ticketu...",
			modal: {
				title: "Zavřít ticket",
				reason_label: "Důvod",
				reason_placeholder: "Proč se tento ticket zavírá?"
			},
			status: {
				preparing_transcript: "Připravuji přepis...",
				closing_ticket: "Zavírám ticket...",
				updating_access: "Aktualizuji přístupová práva k ticketu...",
				transcript_still_processing: "Přepis se stále zpracovává. Dokončuji uzavření ticketu...",
				sending_close_confirmation: "Odesílám potvrzení o uzavření...",
				sending_close_updates: "Odesílám aktualizace o uzavření...",
				posting_close_summary: "Publikuji shrnutí uzavření...",
				closed: "Ticket byl uzavřen."
			},
			deleted_with_transcript: "Ticket byl uzavřen. Přepis je připraven a kanál bude nyní smazán.",
			deleted_without_transcript: "Ticket byl uzavřen. Kanál bude nyní smazán.",
			only_staff: "Tento ticket může zavřít pouze personál.",
			must_be_claimed: "Tento ticket musí být před uzavřením někým převzat.",
			only_current_claimer: "Tento ticket může zavřít pouze ten, kdo jej aktuálně převzal.",
			not_ticket: "Tento kanál není ticketem.",
			only_closed_delete: "Tímto tlačítkem lze mazat pouze uzavřené tickety.",
			only_staff_delete: "Tento ticket může smazat pouze personál."
		},
		transcript: {
			collecting_messages: "Sbírám zprávy z ticketu...",
			creating: "Vytvářím přepis...",
			uploading: "Nahrávám přepis...",
			uploading_avatars: "Nahrávám avatary...",
			uploading_attachments: "Nahrávám přílohy...",
			progress: "{label:string} ({completed:number}/{total:number})"
		},
		templates: {
			open_panel: {
				title: "Otevřít ticket",
				description: "Vyber možnost, která nejlépe vystihuje povahu tvého požadavku."
			},
			ticket_opened: {
				title: "## Ticket: {ticketTypeName:string}",
				intro: "Děkujeme za otevření ticketu.",
				details_label: "**Podrobnosti**\n{reason:string}",
				claim_status: "**Stav převzetí**: {claimStatus:string}"
			},
			ticket_opened_general: {
				title: "## Ticket obecné podpory",
				intro: "Člen týmu podpory vaši žádost brzy zkontroluje.",
				details_label: "**Shrnutí**\n{reason:string}",
				claim_status: "**Stav převzetí**: {claimStatus:string}"
			},
			ticket_opened_billing: {
				title: "## Fakturační ticket",
				intro: "Uveďte čísla faktur, způsob platby a veškeré podrobnosti o neúspěšných transakcích.",
				details_label: "**Odeslané údaje**\n{reason:string}",
				claim_status: "**Stav převzetí**: {claimStatus:string}"
			},
			ticket_opened_report: {
				title: "## Ticket nahlášení",
				intro: "Moderační tým zkontroluje toto nahlášení a veškeré přiložené důkazy.",
				details_label: "**Podrobnosti nahlášení**\n{reason:string}",
				claim_status: "**Stav převzetí**: {claimStatus:string}"
			},
			ticket_closed: {
				title: "## Ticket uzavřen",
				subtitle: "Ticket uživatele <@{userId:string}> byl uzavřen.",
				details: "**Důvod**: {reason:string}\n**Převzetí**: {claimStatus:string}\n**Přepis**: {transcriptStatus:string}",
				closed_by: "-# _Uzavřel/a {closerName:string}_"
			},
			ticket_closed_general: {
				title: "## Obecná podpora uzavřena",
				subtitle: "Ticket obecné podpory uživatele <@{userId:string}> je nyní uzavřen.",
				details: "**Důvod**: {reason:string}\n**Převzetí**: {claimStatus:string}\n**Přepis**: {transcriptStatus:string}",
				closed_by: "-# _Uzavřel/a {closerName:string}_"
			},
			ticket_closed_billing: {
				title: "## Fakturační ticket uzavřen",
				subtitle: "Fakturační ticket uživatele <@{userId:string}> byl uzavřen.",
				details: "**Důvod uzavření**: {reason:string}\n**Převzetí**: {claimStatus:string}\n**Přepis**: {transcriptStatus:string}",
				closed_by: "-# _Uzavřel/a {closerName:string}_"
			},
			ticket_closed_report: {
				title: "## Případ nahlášení uzavřen",
				subtitle: "Nahlášení otevřené uživatelem <@{userId:string}> bylo uzavřeno.",
				details:
					"**Poznámka k vyřešení**: {reason:string}\n**Převzetí**: {claimStatus:string}\n**Přepis**: {transcriptStatus:string}",
				closed_by: "-# _Uzavřel/a {closerName:string}_"
			},
			ticket_closed_dm: {
				title: "## Váš ticket byl uzavřen",
				details: "**Důvod**: {reason:string}\n**Převzetí**: {claimStatus:string}\n**Přepis**: {transcriptStatus:string}",
				closed_by: "-# _Uzavřel/a {closerName:string}_"
			},
			ticket_closed_dm_general: {
				title: "## Váš ticket obecné podpory byl uzavřen",
				details: "**Důvod**: {reason:string}\n**Převzetí**: {claimStatus:string}\n**Přepis**: {transcriptStatus:string}",
				closed_by: "-# _Uzavřel/a {closerName:string}_"
			},
			ticket_closed_dm_billing: {
				title: "## Váš fakturační ticket byl uzavřen",
				intro: "Pokud stále potřebujete pomoc, otevřete nový fakturační ticket a znovu uveďte podrobnosti o objednávce.",
				details: "**Důvod**: {reason:string}\n**Převzetí**: {claimStatus:string}\n**Přepis**: {transcriptStatus:string}",
				closed_by: "-# _Uzavřel/a {closerName:string}_"
			},
			ticket_closed_dm_report: {
				title: "## Váš ticket nahlášení byl uzavřen",
				intro: "Tým zkontroloval nahlášení a veškeré přiložené důkazy.",
				details:
					"**Poznámka k vyřešení**: {reason:string}\n**Převzetí**: {claimStatus:string}\n**Přepis**: {transcriptStatus:string}",
				closed_by: "-# _Uzavřel/a {closerName:string}_"
			}
		}
	},
	logs: {
		duration: {
			day_short: "d",
			hour_short: "h",
			minute_short: "m",
			second_short: "s"
		},
		templates: {
			ticket_created: {
				title: "## Ticket vytvořen",
				action: "{actorMention:string} otevřel/a kanál {ticketChannelMention:string}.",
				details:
					"**Ticket**: #{ticketId:string} - {ticketTypeName:string}\n**Otevřel/a**: {createdByMention:string}\n**Vytvořeno**: {createdAt:string}\n**Důvod**: {reason:string}"
			},
			ticket_claimed: {
				title: "## Ticket převzat",
				action: "{actorMention:string} převzal/a kanál {ticketChannelMention:string}.",
				details:
					"**Ticket**: #{ticketId:string} - {ticketTypeName:string}\n**Otevřel/a**: {createdByMention:string}\n**Doba otevření**: {ticketAge:string}"
			},
			ticket_unclaimed: {
				title: "## Ticket vrácen",
				action: "{actorMention:string} zrušil/a převzetí kanálu {ticketChannelMention:string}.",
				details:
					"**Ticket**: #{ticketId:string} - {ticketTypeName:string}\n**Otevřel/a**: {createdByMention:string}\n**Doba otevření**: {ticketAge:string}"
			},
			ticket_closed: {
				title: "## Ticket uzavřen",
				action: "{actorMention:string} zavřel/a kanál {ticketChannelMention:string}.",
				details:
					"**Ticket**: #{ticketId:string} - {ticketTypeName:string}\n**Otevřel/a**: {createdByMention:string}\n**Stav převzetí**: {claimStatus:string}\n**Doba otevření**: {ticketAge:string}\n**Důvod**: {reason:string}\n**Přepis**: {transcriptStatus:string}"
			},
			ticket_deleted: {
				title: "## Ticket smazán",
				action: "{actorMention:string} smazal/a kanál {ticketChannelMention:string}.",
				details:
					"**Ticket**: #{ticketId:string} - {ticketTypeName:string}\n**Otevřel/a**: {createdByMention:string}\n**Stav převzetí**: {claimStatus:string}\n**Doba otevření**: {ticketAge:string}\n**Důvod uzavření**: {reason:string}\n**Přepis**: {transcriptStatus:string}"
			},
			ticket_renamed: {
				title: "## Ticket přejmenován",
				action: "{actorMention:string} přejmenoval/a kanál {ticketChannelMention:string}.",
				details:
					"**Ticket**: #{ticketId:string} - {ticketTypeName:string}\n**Otevřel/a**: {createdByMention:string}\n**Z názvu**: `{oldChannelName:string}`\n**Na název**: `{newChannelName:string}`"
			},
			user_added: {
				title: "## Uživatel přidán",
				action: "{actorMention:string} přidal/a uživatele {targetMention:string} do kanálu {ticketChannelMention:string}.",
				details: "**Ticket**: #{ticketId:string} - {ticketTypeName:string}\n**Otevřel/a**: {createdByMention:string}"
			},
			user_removed: {
				title: "## Uživatel odebrán",
				action: "{actorMention:string} odebral/a uživatele {targetMention:string} z kanálu {ticketChannelMention:string}.",
				details: "**Ticket**: #{ticketId:string} - {ticketTypeName:string}\n**Otevřel/a**: {createdByMention:string}"
			}
		}
	}
};

export default cs;