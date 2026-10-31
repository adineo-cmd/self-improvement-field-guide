// Case-study enrichment for the World & Money chapter (Part II, entries keyed by num).

export const cases = {
  entries: {
    1: {
      case: 'Ibrahim, 30, a nurse with a pension pot and no finance background, read his fund statement for the first time and found a 1.1 percent annual fee. On Monday he ran the arithmetic by hand: at 7 percent, 10,000 becomes about 20,000 in ten years, 40,000 in twenty and 150,000 in forty, and the rule of 72 told him money at 7 percent doubles roughly every decade. Then he priced the fee: a 1 percent annual charge over 30 years consumes roughly a quarter of the final balance compared with a 0.1 percent fund. By Friday the three numbers sat on a wallet card, and by the end of the month his 14,000 balance had moved to a 0.1 percent index fund. On Sunday he taught the rule of 72 to his sister out loud, which is the fastest test that you own a computation. He now re-runs the three calculations every January, because unapplied financial knowledge decays within months.',
      situations: [
        {
          if: 'you own funds but have never read the fee line',
          then: 'Pull the total expense ratio from every statement this week and estimate what it consumes from your balance by year 30 against a 0.1 percent alternative. A 1 percent annual fee over 30 years takes roughly a quarter of the final balance.',
        },
        {
          if: 'you are starting from zero and money math feels foreign',
          then: 'Compute one example by hand, once: what 10,000 becomes at 7 percent over 10, 20 and 40 years (about 20k, 40k, 150k), and write the rule of 72 on the same card. Carry the card; teach the rule to one person out loud to prove you own it.',
        },
        {
          if: 'you learned this once and it has evaporated',
          then: 'Put a recurring January ritual in the calendar: three computations by hand, the fee line re-checked on every account, and one sentence on your inflation assumption checked against the published index. The meta-analysis is blunt: one-off education decays, standing application sticks.',
        },
      ],
    },
    2: {
      case: 'Amina, 26, a retail supervisor, ended every month with nothing despite decent pay and honest intentions. She stopped budgeting categories and set one standing transfer instead: 8 percent of salary moved on payday to a separate account with no card attached, and the only way out was a one-business-day transfer. Her spending never adapted down because the money was never visible in the spending account; six months in she had about 1,400 saved without a single monthly decision. When a 4 percent raise landed in month seven, the standing rule routed half of it to savings before lifestyle ever saw it, and by month eighteen the account held three months of expenses. She reviewed the percentage once, on the fixed date she had put in the calendar, and bumped it to 10 percent. The design did the work; her willpower was never consulted.',
      situations: [
        {
          if: 'you save whatever is left at month-end, which is usually nothing',
          then: 'Set the payday standing transfer today: 5 to 15 percent into a separate account with no card attached. Write the sentence the default is saving where you will see it on payday; the transfer, not the discipline, does the work.',
        },
        {
          if: 'your income just rose and your spending is rising to meet it',
          then: 'Route half of every future raise or bonus by standing rule before it reaches the spending account. Pre-committed raise routing is the mechanism that quadrupled savings rates in the field experiment; lifestyle inflation is what happens without it.',
        },
        {
          if: 'you cannot trust yourself near the savings balance',
          then: 'Make withdrawal awkward on purpose: no app shortcut, and a one-business-day transfer as the only path out. Review the percentage once a year on a fixed date, never mid-month and never after a bad week.',
        },
      ],
    },
    3: {
      case: 'Omar, 24, in his first job, carried three buy-now-pay-later splits, a store card at 28 percent, and the belief that 25 a month was free. Listing every balance with its rate changed the picture: the splits were debt the day he clicked buy, and the store card was compounding against him faster than everything else combined. He paid minimums across the board and directed all surplus at the 28 percent card in avalanche order, checking monthly that the total across balances was trending in one direction. When he priced a 1,200 laptop on a 12-month plan, the one-line true cost (1,338 once interest and fees landed) failed his new rule, and he kept his old machine. Eight months later the store card read zero and the splits were down to one. An affordable installment, he had learned, is not an affordable item.',
      situations: [
        {
          if: 'you have buy-now-pay-later splits scattered across merchants',
          then: 'Count every split as debt the day you click buy and add each to one list with its effective rate. The products are designed to make interest invisible; the list makes it visible again.',
        },
        {
          if: 'you owe on several balances and pay a bit extra wherever you remember',
          then: 'Pay minimums on everything, then direct all surplus at the highest rate first, sorted by rate not by size. Check monthly that the total across all balances trends in one direction; the direction, not any single balance, is the signal.',
        },
        {
          if: 'you are about to finance a purchase because the monthly slice looks fine',
          then: 'Write the true total cost including fees in one line before you commit; if it will not fit in one line, do not take it. Price everything by total cost, never by the installment.',
        },
      ],
    },
    4: {
      case: 'Ben, 29, a junior civil servant, assumed giving was for later, when the salary grew. Instead he fixed 1 percent of income (about 40 a month) on a standing order after spending a week shortlisting three organizations and reading their accounts and outcome evidence rather than their appeal pages. He rejected two on weak evidence and logged why, which turned out to be the real education in how money moves. The monthly rhythm forced an annual review each spring: one paragraph per recipient on why it stayed, and one program-level number traced before renewing (his main recipient served 1,200 people per year at about 11 per person reached). The happiness effect was real but modest, as the research promised at ordinary incomes. The larger dividend was perspective: by year two he could read any charity pitch like an auditor.',
      situations: [
        {
          if: 'you plan to give once you are rich',
          then: 'Start now at 0.5 to 1 percent of income on a standing order, small enough to never notice monthly. The effect sizes come from ordinary incomes, and the examination habit is worth more when it forms early.',
        },
        {
          if: 'you give occasionally out of guilt when asked',
          then: 'Replace guilt donations with one small monthly gift to a shortlisted organization whose accounts and outcome evidence you have actually read. Log what you rejected and why; that list is the perspective dividend.',
        },
        {
          if: 'you already give monthly and it runs on autopilot',
          then: 'Before renewing this year, trace one program-level number (people served, cost per outcome) and write the one-paragraph why for each recipient. The review, not the amount, is the practice that makes you a better allocator.',
        },
      ],
    },
    5: {
      case: 'Greta, 34, moved to Lisbon for work and gave Portuguese one year under honest terms: 20 minutes daily with spaced-repetition cards, one native article per week with five logged words, and a 15-minute live conversation booked weekly from month one. The first conversation was humbling; she ordered the coffee wrong twice and wanted to quit right there, but she kept the tutor and said the embarrassing sentence early and often. From month three she read one short text aloud daily, because the mouth is the slowest faculty in adult learners. She took none of the brain-benefit claims on faith, knowing the executive-function evidence is contested; the practical returns were unambiguous though: by month six she handled the builder, the tax office and Friday lunches with her team. Her recording archive made the progress undeniable: the month-one clip is barely intelligible, the month-six clip is ninety seconds of real narrative, and the accent still lags forever, exactly as the age data predicts.',
      situations: [
        {
          if: 'you keep restarting language apps and quitting within weeks',
          then: 'Commit to 20 minutes daily on one language for one year and book a live 15-minute conversation with a tutor or partner from month one, mistakes included. Consistency with a human on the calendar beats every app streak.',
        },
        {
          if: 'you avoid speaking because you sound foolish',
          then: 'Say the embarrassing sentence early and often; adults learn vocabulary and grammar fast and lose only on accent. Tolerance for sounding foolish trains like any other discomfort: graded, repeated, voluntary.',
        },
        {
          if: 'you can read the language but freeze when speaking it',
          then: 'Read one short text aloud daily from month three to train the mouth, and record yourself for 60 seconds on the last day of each month. The archive of recordings is the progress chart that daily feeling cannot fake.',
        },
      ],
    },
    6: {
      case: 'Stefan, 27, a mechanical engineer, had filled two passports with holidays and could not argue any international question beyond his own press. He picked one country for the year (Turkey), learned 20 phrases before his first visit, and kept the daily 20 minutes going. Each week he read one article from a leading Turkish paper in translation and noted where it disagreed with his home press; on a major trade dispute he wrote the two-paragraph exercise, one summary per side without editorializing, and found both sides quoting real numbers framed so differently that neither summary was a biased copy of the other. He hosted a guest through a hospitality network for a week in spring, the same curriculum from the other side. Before the autumn trip he read one history and one memoir by a local, and on return wrote the one page he would show a visitor. By December his running list titled things my country would find strange here held sixty items, and he could argue the dispute from either desk.',
      situations: [
        {
          if: 'you travel often but always see through your own press',
          then: 'Pick one country for the year and run the two-view exercise weekly: two paragraphs on one major event, one from the press of each side, no editorializing. The contradictions between the summaries are the curriculum.',
        },
        {
          if: 'you cannot travel this year at all',
          then: 'Host a guest from your target country or join an exchange or hosting network; hosting is the same curriculum from the other side. Add one translated article per week from the leading press of that country and note where it disagrees with home.',
        },
        {
          if: 'you are preparing for a first trip somewhere unfamiliar',
          then: 'Learn 20 phrases before you fly, read one history and one memoir by a local, and on return write the one page you would show a visitor. Start the running list titled things my country would find strange here on day one; sixty items is a year of attention.',
        },
      ],
    },
    7: {
      case: 'Daniel, 44, an accountant, absorbed three hours of political podcasts daily and could not have scored a single opinion he held. He swapped the feed for structure: one wall map with pinned events, a fixed weekly hour (one country, one primary document, one historian, one map), and a 150-word brief in three parts: what happened, what it changes, what to watch. He read the treaty article before the commentary about the treaty article, and made two dated predictions a month with explicit check-dates. Six months in, his scorecard read 9 of 18, better than his old gut and humbling all round; one log entry named his own confirmation bias after he caught himself hunting no evidence against his favorite hypothesis on a border dispute. The podcasts were not smarter than him, he concluded; they were simply unaccountable, and he had stopped being so.',
      situations: [
        {
          if: 'you consume hours of commentary and retain nothing checkable',
          then: 'Hold one fixed weekly hour: one country, one primary document read before any commentary (a treaty article, a speech, a budget line), and one 150-word brief in three parts: what happened, what it changes, what to watch. Pin the events on a wall map so they stay in place.',
        },
        {
          if: 'you hold a strong opinion on an ongoing crisis',
          then: 'Write the competing hypotheses first, then hunt specifically for evidence against your favorite. Structured analysts do this precisely because open minds drift toward the story they already like.',
        },
        {
          if: 'you make predictions but never check them',
          then: 'Make two dated predictions a month with explicit check-dates and score them honestly, one sentence per outcome. The scorecard is the training; without it you are consuming punditry, just your own.',
        },
      ],
    },
    8: {
      case: 'Noor, 38, a hospital doctor, knew a little about a lot of music and could hold no conversation about any of it. She chose chamber music, borrowed a public course outline for her canon of twenty works, and took one per week with fifteen minutes of notes afterward: what it does, what came before it, why it is ranked here. Once a month she met a retired music teacher from a local concert series and asked one question: what did I miss? In month four she wrote her first heresy, demoting a beloved staple for a quartet the canon underweights, with reasons she could defend. A year on, her notes file is her own map of the field, she disagrees with the canon usefully rather than reverently, and at dinner tables she can hold her end with people who studied it. The shared reference points, she found, carry more social information than any amount of name-dropping ever had.',
      situations: [
        {
          if: 'you know a little about many fields and none of it lands',
          then: 'Pick one field and adopt a 20-work canon from a public course outline, one work per week with 15 minutes of notes afterward: what it does, what came before it, why it ranks. Schedule all twenty across the year in the calendar now.',
        },
        {
          if: 'you are consuming a canon alone with no one to test it against',
          then: 'Book one monthly conversation with someone who knows more (a gallery guide, a concert regular, a lecturer) and ask what did I miss. Depth is what makes participation real instead of name-dropping.',
        },
        {
          if: 'you have consumed your field for years without forming your own view',
          then: 'Write one heresy per quarter: a work in the canon you would demote, with reasons. Disagreeing with the canon is the marker of standing in it, not a lapse.',
        },
      ],
    },
    9: {
      case: 'Hugo, 48, an operations director, froze at his first company banquet when asked to give thanks, managed twelve mumbled seconds, and sat down to polite silence. He rebuilt the skill a quarter at a time: place settings and forms of address in the first quarter, drawn from memory until boring; the four moves (introducing people as name, then role, then link; seating; giving thanks; a toast under 60 seconds) rehearsed on video. His 60-second thank-you speech, three sentences written months earlier, was delivered twice to his phone camera and the two stumbles rewritten. At the next occasion he volunteered for the welcome role on purpose, introduced four pairs of strangers smoothly, and proposed thanks in 45 seconds without monitoring himself. He is honest that the protocol teachings rest on accumulated practice rather than trials, but the 100-millisecond first impressions are solid evidence, and composure bought the room. Knowing the forms is what made choosing to relax them feel like ease instead of exposure.',
      situations: [
        {
          if: 'you dread the next formal occasion on your calendar',
          then: 'Write your 60-second thank-you speech now, three sentences, and deliver it on video twice, rewriting the lines where you stumble. Rehearse the four moves until boring: introducing people, seating, giving thanks, and a toast under 60 seconds.',
        },
        {
          if: 'you freeze because you do not know which fork, which chair or which order',
          then: 'Learn one formal code per quarter (dress codes, place settings, forms of address, toast order) and keep one reference handbook on the shelf, checked before the occasion, never during. The forms are a coordination device; not knowing them is the only real risk at the table.',
        },
        {
          if: 'the forms bore you and you would rather stay informal on principle',
          then: 'Learn them anyway, so the choice to relax them is actually yours. Knowing the code and choosing informality reads as ease; not knowing it reads as constraint, whatever your intentions.',
        },
      ],
    },
    10: {
      case: 'Layla, 33, read news in every spare minute and could no longer tell which stories were real. She replaced the infinite feed with one fixed 60-minute weekly block: two serious outlets, one long-form piece, one source from a different country. For every claim she intended to repeat she spent 90 seconds lateral reading, leaving the page to check who owned the outlet and what two independent sources said, the practice of professional fact-checkers. She added the 24-hour rule, no sharing a breaking claim until it survived one day and one lateral check, and kept the one-page note: three verified facts, one unverifiable claim, one dated prediction. In her first month two viral stories of the week failed her lateral checks, and her Sunday count showed the daily feed had missed nothing that actually changed anything. She shared less and, without noticing at first, argued better.',
      situations: [
        {
          if: 'you read news all day and still feel unable to judge what is true',
          then: 'Replace the feed with one 60-minute weekly block, and for every claim you intend to repeat spend 90 seconds lateral reading: who owns the outlet, and what do two independent sources say. Leaving the page is what professional fact-checkers do first.',
        },
        {
          if: 'you nearly shared a breaking story this week that later fell apart',
          then: 'Adopt the 24-hour rule: no sharing any breaking claim until it has survived one day and one lateral check. Inattention, not only bias, is what spreads falsehoods, and the delay costs you nothing but hot takes.',
        },
        {
          if: 'you want depth beyond headlines',
          then: 'Once a month read the primary document behind one big story (the filing, the transcript, the data) instead of ten summaries, and keep the one-page weekly note: three verified facts, one unverifiable claim, one dated prediction to check.',
        },
      ],
    },
  },
};
