export const cases = {
  entries: {
    1: {
      case: 'Tomas, 39, a management consultant in Bilbao, was the most credentialed person in every room and somehow the one nobody confided in. When a junior analyst chose another mentor, he scored himself harshly on the trust equation: credibility 9, reliability 8, intimacy 5, and self-orientation also 9, sitting in the denominator of everything. He counted his statements across one client meeting and found 7 of his 10 contributions were about his own work. He set one rule for the next month, ask one question more than he stated an opinion, and by the re-score in April intimacy had moved to 7 and two colleagues had brought him half-formed ideas for the first time. The lesson: enough self-orientation zeroes out every other factor, and the lowest score is the one to work.',
      situations: [
        {
          if: 'you are competent and reliable but people bring their problems to someone else',
          then: 'Score yourself 1 to 10 on credibility, reliability, intimacy and self-orientation for that specific relationship, then count how many of your next ten statements are about you; if the count is high, that denominator is your work.',
        },
        {
          if: 'someone tells you they do not yet trust you and you cannot see why',
          then: 'Ask which specific factor feels thin rather than defending generally, and start with reliability, the fastest to move: close every commitment you make this week and confirm it in writing the same day.',
        },
        {
          if: 'you are new to a team with no shared history to draw on',
          then: 'Build credibility first with one verifiable result inside two weeks, then shift to questions: one more asked than stated per conversation, because trust moves slowly and one factor at a time.',
        },
      ],
    },
    2: {
      case: 'Grace, 31, an account manager in Toronto, believed she was reliable and could not understand why clients hedged around her. She started a promise ledger and discovered eleven open commitments, some from six weeks earlier, each one a dropped data point she had forgotten and her clients had not. Over the next two weeks she closed ten of ten, oldest first, each with a written \'done, here it is\' message, and when a Thursday deadline looked shaky she warned the client on Tuesday and renegotiated to Friday. The response shifted visibly: the same client who had started cc-ing her manager sent her a larger account in March with the note \'you just handle things\'. The lesson: observers extrapolate from small closes, and a miss flagged early reads as management while one missed silently reads as character.',
      situations: [
        {
          if: 'you quietly do good work but people act surprised when you deliver',
          then: 'Confirm every close in writing with a same-day \'done, here it is\' message, because unverified closes earn no credit and the ledger is what others can actually see.',
        },
        {
          if: 'you can already see that a promised deadline will slip',
          then: 'Warn the person before the deadline, not after, with a new date attached: the warning converts the miss into a renegotiation and keeps the forecast about you intact.',
        },
        {
          if: 'you keep agreeing to things and then dropping them under load',
          then: 'Check your open promise ledger before saying yes to anything this week, and answer borderline requests with \'not before Thursday\' rather than a yes your existing commitments will have to fund.',
        },
      ],
    },
    3: {
      case: 'Omar, 44, a builder and renovation contractor in Bristol, padded an invoice by two labor hours in January when a job ran over, and the client, who kept her own records, noticed. She paid without a word, told three neighbors, and two quotes he never got. Humiliated, he wrote six one-sentence standards, printed and signed them dated above his desk: quoted estimates are the real price, stated deadlines hold, defects are fixed at his cost within seven days. When a June job ran long and the old temptation returned, the signed page settled the argument in ten seconds because the decision had been made in a calm month. He ate the four extra hours, logged the test in his notebook, and in August the January client sent him her kitchen refit. The lesson: standards hold when willpower is low because they were written when it was high.',
      situations: [
        {
          if: 'you are self-employed and tempted to adjust invoices or estimates when jobs run over',
          then: 'Write the standard one sentence long and concrete enough to violate, such as \'quoted estimates are the real price\', print it signed and dated above your desk, and amend it only in a calm month, never the week you break it.',
        },
        {
          if: 'you are an employee under pressure to round numbers or soften a report',
          then: 'Decide the policy in advance, one sentence, and log the moment it is tested that same day, because small self-justified waivers are exactly where honesty is rehearsed and lost.',
        },
        {
          if: 'you already keep small standards and think the big tests are what matter',
          then: 'Log every test for seven days and check whether any standard went untested; a standard never tested needs a harder month, and a broken one needs a barrier, not a recommitment.',
        },
      ],
    },
    4: {
      case: 'Nadia, 36, a marketing lead in Stockholm, sent a campaign to 40,000 subscribers with last quarter\'s pricing in the banner, and noticed nineteen minutes later. She reported it within the hour, using the order she had rehearsed: what broke, what it cost them, what changes next, no \'but\', no blame arithmetic, under two minutes. The corrected send went out the same afternoon with the discount the original had promised, and she told her director before he heard it from anyone else. Trust did not just survive; the CFO cited her handling in a May meeting as the example of how incidents should run. The lesson: people remember the handling, not the mistake, and the second on-time thing you do is the part that actually repairs.',
      situations: [
        {
          if: 'you have just discovered a mistake at work and are drafting a careful explanation',
          then: 'Send the report within the hour of discovery, ordered as what broke, what it costs them, what changes next, under two minutes, with ownership in the first sentence and no \'but\' anywhere.',
        },
        {
          if: 'the failure involves integrity rather than competence, something you said that was not true',
          then: 'Skip the grand gesture and commit to a visible pattern of at least a month of kept word, because a violated belief about who you are is repaired by weeks of behavior, not one apology.',
        },
        {
          if: 'your instinct when caught is to explain the circumstances first',
          then: 'Reverse the order: the first sentence owns it with no qualifier, the explanation comes second, and the specific repair, a date fixed or what you hand back, closes the message.',
        },
      ],
    },
    5: {
      case: 'Amara, 29, an HR generalist in Accra, knew every salary band, exit and reorganization plan months early, and had learned that being in the know only counts if you never spend it. When a teammate fished about a colleague\'s departure with \'so what really happened there?\', she used her prepared line, \'I will let them tell you that themselves\', and changed the subject to the project deadline. She logged three refusals that week, including one raised eyebrow she caught and shut down, and never confirmed a detail by tone or timing. Two months later the director handed her the sensitive restructuring brief, saying she was the only one he did not have to warn first. The lesson: observers watch how you handle third-party information as a forecast of how you will handle theirs, and visible refusals are the evidence.',
      situations: [
        {
          if: 'people fish for what you know and part of you enjoys being asked',
          then: 'Pre-commit one sentence, \'I will let them tell you that themselves\', use it every time including on raised-eyebrow confirmations, and log each refusal this week, because the refusals are the skill\'s reps.',
        },
        {
          if: 'you repeat stories carefully with names removed and consider that discretion',
          then: 'Test each story before telling: strip the identifying details, and if it stops making sense without them, do not tell it, since names, numbers and timings are the material that identifies people.',
        },
        {
          if: 'you want to be trusted with more responsibility quickly',
          then: 'Let others see the refusal, not only the results, by declining visibly and without drama when tested, because the person who tests you now knows something important about the next test.',
        },
      ],
    },
    6: {
      case: 'Victor, 47, head of a hospital laboratory in Lyon, was handed a colleague\'s confidential resignation plan and felt the urge to tell his wife the moment he got home, sanitized, no name, just the shape of it. He had read the re-identification numbers and understood that \'no name\' still left department, timing and role, which their circle would recombine by dinner. He held it, used \'that is not mine to share\' twice that week when the lab managers fished, and never transmitted what he received even as other people\'s gossip kept flowing toward him. The colleague resigned in May with a graceful handover and told the director that Victor was the reason she had been able to plan properly. The lesson: confidential information ends with you, unrepeatable even in anonymized form, and \'I am not able to discuss that\' keeps both the confidence and your honesty.',
      situations: [
        {
          if: 'someone confides in you and you are bursting to tell one safe person a sanitized version',
          then: 'Tell no one, not even a partner, because details re-combine into identification fast and the listener repeats what you said with the name back on it; hold the prepared sentence \'that is not mine to share\' against yourself first.',
        },
        {
          if: 'a manager or colleague asks you directly about someone else\'s confidential matter',
          then: 'Use the boundary, not the lie, \'I am not able to discuss that\', which survives being repeated and never unravels the way a deflecting fib does.',
        },
        {
          if: 'you can foresee that a confidence being offered will collide with a duty you hold',
          then: 'Say so when the confidence is offered, or step out of it then, rather than accepting and leaking later, and reserve your silence for privacy and secrecy while never transmitting speculation about real people.',
        },
      ],
    },
    7: {
      case: 'Lena, 41, an engineering manager in Oslo, inherited a team whose meetings were polite, quiet and three weeks late on every problem. When a junior named Pavel flagged a data-loss bug three days after causing it, she made her first sentence \'good catch, let\'s work the problem,\' and credited him by name in the incident review. She then asked one naive question per meeting on purpose, admitted her own missed estimate in public at the Thursday sync, and started asking directly: \'what is the thing we are avoiding?\'. By the third week the questions it surfaced were ones the team had carried for months, including a scaling flaw nobody had dared to name under the previous manager. The lesson: safety is not comfort; it is measured by what gets said in your presence, and permission flows downhill from whoever is senior.',
      situations: [
        {
          if: 'someone brings you bad news and you feel your face or first words turning to blame',
          then: 'Fix the first sentence in advance, \'let\'s work the problem, not the person\', and credit the messenger out loud in the review, because your opening sets the flow of the next ten reports.',
        },
        {
          if: 'your team\'s meetings are pleasant and silent while problems surface late and expensive',
          then: 'Ask \'what is the thing we are avoiding?\' in three consecutive meetings, write down what surfaces, and follow through visibly on at least one item each week.',
        },
        {
          if: 'you are not the manager and want the team to change anyway',
          then: 'Admit one of your own misses in public every week and ask one naive question per meeting on purpose; permission flows downhill, but it also flows sideways from whoever goes first.',
        },
      ],
    },
    8: {
      case: 'Sunil, 27, a data analyst in Singapore, joined a nine-person cross-company task force that had already burned two weeks on introductions and positioning. Within a day he posted one short message to the group: his role, his scope, and a first deliverable date of the following Tuesday. He delivered the cleaned dataset on the Monday evening, early, with a note on what he had assumed, and updated the thread unprompted when an assumption changed. By week three the chair was routing questions through him and two strangers on the team had copied his confirmation habits back at him. The lesson: temporary groups do not need history, they need proof of motion, and the first visible delivery is the acquaintance.',
      situations: [
        {
          if: 'you have just joined a new project group, committee or temporary team',
          then: 'Within twenty-four hours send one short message stating your role, scope and first deliverable date, then deliver it early, because action substitutes for history.',
        },
        {
          if: 'you are waiting to feel rapport with new collaborators before contributing properly',
          then: 'Stop waiting and take the smallest visible task first: send the work, acknowledge others\' deliveries publicly, and let rapport follow the evidence rather than precede it.',
        },
        {
          if: 'your remote collaborators go quiet and you start assuming bad faith',
          then: 'Make your own working style explicit in the first day, such as \'I batch messages at noon and five\', and update before being asked, since the unprompted update is the trust signal that stops silence being misread.',
        },
      ],
    },
    9: {
      case: 'Rachel, 38, who runs a bakery in Wellington, had burned out two assistants by checking their shoulders, and her new hire, Tessa, was getting the same treatment by day nine. Rachel made herself hand over the order for a 300-cupcake wedding in Tessa\'s second month: a real sum, a real deadline, one Friday check-in agreed in advance and nothing between. She logged the eleven impulses to check and suppressed them, and when the first tray came out over-baked she debriefed the result and the fix, not the style. The wedding delivered on time, and by autumn Tessa was running the Saturday shift with two juniors under her. The lesson: surveillance after the gift cancels it, so trust first at a size you can afford to lose and scale on the evidence.',
      situations: [
        {
          if: 'you manage someone you know you are micromanaging',
          then: 'Hand over one real decision or sum this week with the terms stated plainly, fix one check-in date in advance, and log every impulse to check in between, because what they experience should be the trust, not the check.',
        },
        {
          if: 'you delegated before, got burned, and now trust nobody with anything important',
          then: 'Stage the size down rather than the trust down: pick a task where failure is survivable, state what result would make you scale it up, and debrief the result, not the style.',
        },
        {
          if: 'someone recently gave you real trust and you want more of it',
          then: 'When the first gift is honored, say so and propose the next size up in writing yourself, because silence after success teaches the giver nothing and the next step stays unmade.',
        },
      ],
    },
    10: {
      case: 'Diego, 34, a developer in Bogota, was the man everyone brought projects to, and by March he was finishing weekends of work he had agreed to in passing. He installed the 24-hour rule for every non-urgent ask: \'let me check my week and get back to you by tomorrow\', followed by an actual answer inside the day. Two requests got the clean version, \'I can\'t take this on, but here is who can\', with a name attached, and one got the conditional, \'I can\'t do it this week; I could start the 14th\'. He braced for backlash and logged zero; the only real friction came from the two old yeses he was still finishing, which taught him the price of the previous yeses. The lesson: the fast no protects the commitments you already made, and a yes that turns into a flake is remembered far longer than any refusal.',
      situations: [
        {
          if: 'you are put on the spot and feel the yes forming before you have checked anything',
          then: 'Use the 24-hour rule verbatim, \'let me check my week and get back to you by tomorrow\', then actually answer within the day, because the cost of a refusal grows the longer the asker has planned around a yes.',
        },
        {
          if: 'you want the work but not the timing or the scope being offered',
          then: 'Offer the conditional with a real date, \'I can\'t do it this week; I could start the 14th\', and skip the apology inflation, since one brief sentence is cleaner than five of excuse.',
        },
        {
          if: 'you are the person everyone dumps on because you have never refused',
          then: 'Issue two clean noes this week with a redirect each, supply the name of who can, and count the backlash against the number of old yeses still unfinished; the ledger decides which kind of no is the kindness.',
        },
      ],
    },
    11: {
      case: 'Bao, 26, a freelance videographer in Ho Chi Minh City, noticed a client had paid a 400,000 dong invoice twice in the same week. The easy silence would have cost him nothing and nobody would ever audit it, which was exactly why he answered within the hour, attached the refund confirmation, and moved on. He also settled a 60,000 dong coffee debt from three weeks earlier, split the next shared team lunch to the exact figure out loud, and never rounded his own expenses in his favor even by a little. Two months later, when a production company was choosing between him and a cheaper rival, the client who had been double-paid made the call that hired him. The lesson: small sums are the audition, and they are read precisely because they are too low to fake for.',
      situations: [
        {
          if: 'a mistake just landed money in your favor, a double payment, an undercharge, a missed charge',
          then: 'Correct it the same day with a short message and the receipt attached, because the moment of discovery is the audition and nobody hands you the large sums first.',
        },
        {
          if: 'you owe small amounts to friends or colleagues from weeks back',
          then: 'Clear one today even if it is three dollars, adopt a weekly clearing habit for small debts, and audit monthly for any unreturned overpayment on either side of your ledger.',
        },
        {
          if: 'you regularly split bills or expenses with colleagues',
          then: 'Split to the exact amount and say it out loud while doing it, since visible precision at trivial stakes is the only part of your large-money behavior anyone can verify in advance.',
        },
      ],
    },
    12: {
      case: 'Claire, 45, an accountant in Cape Town, wrote the five-sentence reference letter an honest referee would send about her today and found the weak line immediately: \'reliable all year, but goes dark at peak season\'. Her quarter had three deliberate acts aimed at that sentence: two overdue commitments closed with written apologies and dates, one unprompted favor for a struggling former client with no possible return, and a missed filing she repaired openly in front of the whole practice. In September she redrafted the letter and the peak-season line had turned into \'holds the line when everyone else is drowning\'. She kept both drafts, dated, as the balance sheet she reviews quarterly. The lesson: reputation is the memory other people keep of your ledger, including people you have never met, and the weakest sentence is the work.',
      situations: [
        {
          if: 'you are job hunting and need references to say something strong',
          then: 'Write the five-sentence letter an honest referee would send today, mark the weakest sentence, and spend this week closing the specific commitments that would turn that line into the strongest one.',
        },
        {
          if: 'you are established and your reputation has gone quiet',
          then: 'Do one unprompted favor each month for someone with no possible return, because indirect reciprocity runs on witnesses and your ledger pays out with strangers who merely heard of it.',
        },
        {
          if: 'you failed visibly recently and want to move past it',
          then: 'Handle the repair in public view rather than quietly, one clean apology and one on-time follow-through where people can see it, since observed repairs count double in the memory of the room.',
        },
      ],
    },
    13: {
      case: 'Jacob, 24, a freelance designer in Minneapolis, kept losing clients who wanted \'someone with more of a track record\', and he had started believing the calendar was the fix. Instead he ran a seven-day proof loop with a hesitant first client: three small dated commitments, each closed and confirmed in writing within forty-eight hours, starting with a ten-hour logo trial at a modest fixed fee. Every close went out with a same-day \'done, here it is\', and he verified the client\'s own promises quietly by simply watching delivery dates rather than announcing audits. In the second week the same client doubled the scope without a new pitch, and referred him to a partner firm in March. The lesson: trust tracks evidence density, not years, so the loop is the argument and the calendar is not.',
      situations: [
        {
          if: 'a new client or partner hesitates because you lack a track record',
          then: 'Propose a small paid task closed within forty-eight hours, then a second and a third, each confirmed in writing the same day, and let the loop, not the CV, make the case.',
        },
        {
          if: 'you are the one hesitating to trust someone new with anything real',
          then: 'Demand evidence density instead of waiting out the calendar: define roles, set an early deadline, start with a ten-dollar task before the ten-thousand-dollar one, and verify quietly rather than by announcing checks.',
        },
        {
          if: 'someone asks you to trust them on years and instinct instead of evidence',
          then: 'Name the alternative out loud, a small task this week with a closed loop, and scale only on each closed loop, because years guarantee the passage of time, not the evidence.',
        },
      ],
    },
  },
};
