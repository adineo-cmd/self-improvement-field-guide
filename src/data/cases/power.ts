export const cases = {
  sections: {
    'Influence Levers (Use Them Fairly)': {
      case: 'Farhan, 31, a backend lead in Hyderabad, spent two months failing to get the data platform team to prioritize his pipeline fix, mostly by escalating louder each time. He reset with the levers used honestly: he fixed one of their long-standing cron bugs first, small, useful, no strings, and never mentioned it during the ask. When he finally messaged their lead he named the real shared identity before the request, \'we are the two teams the payments audit lands on\', and showed social proof from their own group rather than his, \'three of your last four on-call incidents started in unmanaged pipelines like ours.\' He stated the genuine audit deadline and, in plain words, what was in it for them. The fix entered their sprint that week without a single escalation. The lesson: the levers stack when each one is true, and the favor you never invoiced does the talking.',
      situations: [
        {
          if: 'you need a cross-team favor and are drafting an escalation to the managers',
          then: 'Give something real first, a fix, information, a favor, with no strings, then make the ask later in clear words without referencing the gift; reciprocity works as a fairness habit, and mentioning the debt kills it.',
        },
        {
          if: 'you want a team to adopt a practice and are citing general benefits',
          then: 'Use social proof from their own comparison group with exact numbers, \'6 of the 8 teams on this floor switched\', not what people should do, and add approval for those already doing it.',
        },
        {
          if: 'you feel a sudden urge to say yes to a pitch and cannot explain why',
          then: 'Pause ten seconds and ask: what is being given, shown, or rushed here, and would I say yes without the gift, the crowd, or the deadline; naming the tactic cuts most of its power.',
        },
      ],
    },
    'Honest Persuasion': {
      case: 'Aditi, 28, a QA engineer in Noida, had sent three politely worded documents about the flaky test suite, each dying quietly in a manager\'s inbox, before accepting that the pitch, not the content, was the problem. Her fourth attempt opened with one story, the March night a false failure masked a real payment bug for six hours, then confirmed it with the number, about nine engineer-hours lost per sprint. She framed it honestly as a recurring loss, \'we lose this every sprint\', rather than a hypothetical gain, and made the ask specific enough to act on: two engineers, forty hours, starting next sprint. She checked timing too, sending it the morning after an incident when the decision was actually live, and followed up once after four days with a new detail. The fix was approved that week. The lesson: one true story, a recurring loss, and an ask with a number beats a deck of averages.',
      situations: [
        {
          if: 'your well-reasoned proposal keeps dying in someone\'s inbox',
          then: 'Check timing before rewriting: is the decision live right now? If not, plant the seed and stop talking; when it goes live, be brief and concrete, and revisit quietly after a fair interval.',
        },
        {
          if: 'your ask is vague, \'support this\' or \'look into it soon\'',
          then: 'Name the exact action, time and amount, \'give two hours on Saturday\', put the reason in one clear line, show one example of the action done right, and delete every soon and maybe.',
        },
        {
          if: 'you are pitching something people should care about and their eyes glaze',
          then: 'Open with one real person, one moment, and what changed, keeping the audience the hero, then use numbers only to confirm the story; one invented detail can sink the whole thing, so keep it true.',
        },
      ],
    },
    'Negotiation': {
      case: 'Manav, 29, a data engineer in Bengaluru, had historically accepted whatever number HR opened with, and the pattern showed in his payslip. For his next switch he did the unglamorous part first: converting another interview into a live second offer, because the walk-away number comes from alternatives, not from confidence. He anchored first with an ambitious but justified 24 lakh, citing the market band and shipped work, and when they countered at 21 he counted five slow breaths instead of filling the silence, which produced an unprompted \'let me see what I can do about the joining bonus.\' When a different offer landed below his walk-away number he used the prepared exit line, \'this does not work for me, so I will pass\', said once, without arguing. That company came back five days later at his number. The lesson: power in a negotiation is your best alternative, the anchor sets the orbit, and silence is a tool, not rudeness.',
      situations: [
        {
          if: 'you are about to negotiate salary or a freelance rate with no other option lined up',
          then: 'Improve your BATNA first, a second interview, a smaller scope, a waiting option, and set your walk-away number from that plan, not from feelings; a strong alternative changes the whole conversation before it starts.',
        },
        {
          if: 'the other side names a low number first and the discussion starts orbiting it',
          then: 'Refocus on value with your defensible range and real justifications, and next time anchor first with an ambitious but justifiable figure; first offers pull the final price toward them.',
        },
        {
          if: 'you are handed an impossible demand, a deadline, a scope, a discount',
          then: 'Do not say no flatly; ask \'how can we make that work?\', collect their answers without judging out loud, then follow with \'what does a fair version look like to you?\'',
        },
      ],
    },
    'Networking Science': {
      case: 'Nitin, 33, a supply-chain analyst in Pune, was laid off in May and spent three weeks applying through portals before remembering the finding that stings: jobs come mostly from weak ties, because acquaintances move in circles you do not. He listed fifteen friendly acquaintances from two past employers and a data course, and sent light, specific notes, a congratulations, a shared article, one honest line about looking for roles. He gave small useful things along the way, answering a junior\'s SQL question, introducing two former colleagues who needed each other, with limits when a stranger demanded \'a full mock interview plus a resume rewrite\': \'I can give twenty minutes, not the whole project.\' Within five weeks a former teammate from three years back, the lightest contact on the list, forwarded his resume internally with a one-line endorsement, and that became the job. The lesson: your network already exists, mostly dormant, and one specific follow-up beats a hundred cold applications.',
      situations: [
        {
          if: 'you are job hunting and only applying through portals',
          then: 'List ten friendly acquaintances from past jobs, courses or teams and send light, specific notes, expecting most help from the lightest contacts, because weak ties carry the information your own circle cannot.',
        },
        {
          if: 'you met someone useful weeks ago and never followed up',
          then: 'Send a short note within a day of any good meeting about one detail you liked, set reminders to check in with key contacts every few months, and use real reasons: an article, a milestone, a quick question.',
        },
        {
          if: 'people drain you with unlimited requests once you are known as helpful',
          then: 'Give in ways that cost little but help a lot and cap the rest, \'I can do ten minutes, not the whole project\', and keep a short list of persistent takers; givers who never refuse burn out at the bottom, and takers get found out.',
        },
      ],
    },
    'Trust & Reputation': {
      case: 'Jaya, 36, took over a testing team in Chennai whose previous lead had promised everything and delivered selectively, so the team ran her word through a discount by default. She rebuilt with boring mechanics: three small promises a week, reply within a day, review notes every Thursday, announced sparingly and kept even when nobody was watching, plus a shipped-work log of date, result, number, with one visible piece of progress each week. When she mis-scoped a release estimate in June she reported it the same day, stated plainly who was affected and how, and brought two fix options instead of a defense. A senior tester told her later that the June moment, not the log, was when the team decided she was different. The lesson: charm buys attention, but trust is compound interest on small kept promises, and mistakes owned early cost less than mistakes discovered late.',
      situations: [
        {
          if: 'your team or client discounts every commitment you make',
          then: 'Choose three small promises you will keep every week, announce fewer than you keep, and when a miss looms, say it early with a new date; predictable behavior is the product, not charisma.',
        },
        {
          if: 'you have just noticed your own mistake and are drafting the context',
          then: 'Say it before anyone asks: state the impact, who is affected and how, and bring a fix or a choice of fixes; the price of hiding grows by the week, and early ownership often raises how people see you.',
        },
        {
          if: 'you do good work but nobody can see the pattern',
          then: 'Keep a simple log of shipped work, date, result, number, aim for one visible piece of progress each week, and share short updates with the people who care, without bragging; a track record is built from visible small wins, not one huge moment.',
        },
      ],
    },
    'Leadership & Teams': {
      case: 'Shalini, 38, a cluster manager for five retail stores in Indore, ran reviews like verdicts, \'you need to be more proactive\', and got defensive silence, while her meetings ran an hour with no agenda and no decisions. She rebuilt in pieces: feedback switched to Situation-Behavior-Impact, \'in Tuesday\'s stock audit, you recounted the shelf without telling the counter staff, and they found out from the report\', no character labels, so nothing to defend. Delegation changed from steps to outcomes: her store-in-charge owned the festival markdowns entirely, goal, deadline and guardrails stated in one breath, check-ins agreed in advance instead of hovering. Meetings went to 25 minutes with an owner and a time per item, and every item ended in a decision or a clear next step. When the regional head praised the festival numbers, she named the store-in-charge in front of everyone, and the zone\'s lowest attrition followed. The lesson: candor without punishment, decisions instead of meetings, and credit in public are mechanics, not moods.',
      situations: [
        {
          if: 'your feedback starts with \'you are\' or \'you always\'',
          then: 'Rebuild it as Situation-Behavior-Impact: name the time and place, describe what you saw without labels, and say the effect on you or the work; judging character triggers defense, describing behavior does not.',
        },
        {
          if: 'you keep re-checking delegated work and redoing pieces at night',
          then: 'Hand over the outcome and the decision rights, not just the steps: state the goal, deadline and guardrails in one breath, agree on check-in points, and debrief their different decisions instead of overriding them.',
        },
        {
          if: 'your meetings have no agenda and end with \'we will circle back\'',
          then: 'Default to 25 or 50 minutes, give each item an owner and a time, end every item with a decision or a clear next step, and cancel anything whose business fits in a message; when praised alone for team work, redirect with one concrete name.',
        },
      ],
    },
    'Status': {
      case: 'Sameer, 26, joined a Gurugram analytics firm determined not to be a nobody and chose dominance: talking first in meetings, correcting seniors on small points, dropping names. The room\'s pecking order had formed within days, and it had quietly priced him as noise; his invitations thinned. Watching from the corner was Prakash, 45, who spoke after others, ran a weekly twenty-minute session on one visualization trick anyone could use, and answered beginners\' questions without making them feel small. When a critical dashboard needed an owner, three people independently named Prakash. Sameer copied the prestige route instead, one skill, SQL optimization, made public in short notes and patient answers, and six months later he was the one juniors were sent to. The lesson: dominance buys compliance in one room and costs you the next; prestige, a valued skill plus the will to share it, compounds quietly because people recommend the skilled and generous.',
      situations: [
        {
          if: 'you join a new team and feel pressure to prove yourself loudly in week one',
          then: 'Watch for ten minutes before talking much: who defers to whom, who speaks last before decisions, and be warm to every rank, especially the quiet ones; the room\'s order forms in hours, and reading it first is the move.',
        },
        {
          if: 'you catch yourself craving one specific person\'s nod at work',
          then: 'Ask what you would do if the nod never came, and anchor instead to two or three people whose respect you truly have plus your own promises kept; approval is local and temporary, and chasing it keeps the gauge spinning.',
        },
        {
          if: 'you are a beginner again in a new room, a new company, gym, or city',
          then: 'Do not import status from the old room; act like a learner, ask, help, improve, and remember the same person can be respected at work and anonymous at the gym, because status is scored fresh per room.',
        },
      ],
    },
  },
};
