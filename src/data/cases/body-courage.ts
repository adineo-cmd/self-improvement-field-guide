// Case-study enrichment for the Body & Courage chapter (Part II, entries keyed by num).

export const cases = {
  entries: {
    1: {
      case: 'Caleb, 34, an office worker who had not played anything organized since he was sixteen, joined a volleyball team with fixed Wednesday and Saturday sessions and a coach who corrected people by name in front of everyone. The first correction, on his footwork at the net, produced the excuse reflex; he swallowed it and said got it, then adjusted the next rally. After every session he asked the coach one question: what is the one thing I should fix before next week? He kept a three-column log (correction received, applied or not, what changed) and told the coach each week what he had worked on. He also took the kit-and-logistics role for the season without being asked. By week eight the coach had him leading the warm-up, and Caleb noticed that the corrections he absorbed publicly were making his code reviews at work easier to take. The structure, not the sport, was the treatment.',
      situations: [
        {
          if: 'you have not played an organized sport since childhood',
          then: 'Join the nearest team with a fixed weekly schedule and a coach whose corrections you will have to metabolize; convenience matters less than structure. Ask after every session: what is the one thing I should fix before next week?',
        },
        {
          if: 'you get corrected in front of teammates and feel the excuse forming',
          then: 'Say got it and make the adjustment immediately, then tell the coach at the next session that you worked on it. The response, not the mistake, is what the teammates are scoring.',
        },
        {
          if: 'you are already the fittest one there and drills feel beneath you',
          then: 'Take one unglamorous role for a season (kit, logistics, warm-up lead) and do it without being asked. Interdependence is the training effect, and the fittest usually dodge it.',
        },
      ],
    },
    2: {
      case: 'Sana, 41, a desk-job mother of two, started lifting on Mon/Wed/Fri with five patterns (squat, hinge, push, pull, carry) and a notebook from the corner shop. Every set, rep and load went in the book; the 2.5 kg increment went on only when all prescribed sets were completed. In week six a work flight took out Wednesday, so she did a 20-minute bodyweight substitute the same evening and wrote it in the log, keeping the never-miss-twice rule intact. Twelve weeks in, her squat had moved 22.5 kg and the logbook showed exactly one blank line. She also noticed the Sunday-evening dread that had followed her for years had faded, which matched what the trial literature says resistance training does for depressive symptoms, and she trusted the logbook more than her mood on any given day. The bar reported without flattery; the notebook was the discipline.',
      situations: [
        {
          if: 'you travel or your weeks get blown up by work and family',
          then: 'Adopt never miss twice: if a session is blocked, do a 20-minute bodyweight substitute the same day and note it in the log. The rule survives chaos; the perfect program does not.',
        },
        {
          if: 'you have never lifted and the weights area intimidates you',
          then: 'Start with the five patterns, two working sets each, three fixed days, and log every set and rep in one notebook. Add the smallest increment (2.5 kg or one extra rep) only when all sets were completed.',
        },
        {
          if: 'you already train three days a week but nothing is written down',
          then: 'Start the logbook this Sunday and write the five target numbers for next week before Monday, because the plan is written, not felt. Without the log, missed sessions and increments are invisible, and invisible means unmanaged.',
        },
      ],
    },
    3: {
      case: 'Marcus, 38, a startup CTO, had run on five and a half to six hours for two years and told everyone he was fine. His one-week drill embarrassed the claim: fixed 6:30 wake, lights out calculated for 7.5 hours, caffeine logged with times, alertness rated each morning from 1 to 5. On the two worst-slept days he rated 2 and later found he had misread a billing dashboard and approved a duplicate invoice; on the two best-slept days he rated 4 and 5. The uncomfortable part was that during the six-hour years he had never once felt impaired, which is exactly what the sleep-restriction studies find: subjects rated themselves only mildly sleepy while their cognition matched sleep deprivation. He moved lights-out to 22:30, pushed his coffee cutoff to 11:30, and kept the drill monthly as an audit rather than trusting the feeling.',
      situations: [
        {
          if: 'you are a self-described short sleeper who feels fine',
          then: 'Run the one-week drill with a fixed wake time and morning alertness ratings, then compare the two best-slept against the two worst-slept days. Your self-rating is the known-unreliable instrument; the drill is how you catch what six-hour nights are quietly costing.',
        },
        {
          if: 'small children or shift work own your nights',
          then: 'Fix the wake time as the one anchor you control, protect a 20-minute afternoon nap when the night was short, and cut the ambition for that day instead of paying for it in caffeine after midday.',
        },
        {
          if: 'you doomscroll past lights-out most nights',
          then: 'Park the screens outside the bedroom, dim the final hour, and write the three tasks for tomorrow tonight so the day ends on paper rather than in rumination. Set lights-out to land 7.5 to 8 hours before the alarm you cannot argue with.',
        },
      ],
    },
    4: {
      case: 'Petra, 52, returned to client-facing work after eight years remote and caught her reflection: rounded shoulders, chin down, reading hesitant before she said a word. She ran two daily checkpoints (10:30 and 15:30) with head level, shoulders back and down, feet planted, plus one unhurried walk with level gaze, rating energy and confidence 1 to 5 after each. Over four weeks the confidence ratings drifted from 2s to 3s and clients began interrupting her less; she also felt slightly more composed in the moment, which she logged honestly. The wall test did nothing for her and was dropped in week two. The one week her sleep collapsed, the posture numbers went with it, which convinced her the honest order was sleep and exercise first, bearing second. What she kept was the presentation claim: the room reads the carriage, and the carriage is trainable, hormone claims or no hormone claims.',
      situations: [
        {
          if: 'you sit at a desk all day and your posture reads as hesitancy',
          then: 'Set two daily checkpoints (mid-morning, mid-afternoon): head level, shoulders back and down, feet planted, hands uncrossed, and rate energy and confidence 1 to 5 after each. Keep the checkpoint that moves the number; drop the ones that do nothing.',
        },
        {
          if: 'you hoped posture work would fix low mood or energy',
          then: 'Treat bearing as presentation, not medicine: if low mood persists, sleep and exercise come first and a professional after that. The honest research gives posture a small lift in felt power and a real change in how you are read, nothing more.',
        },
        {
          if: 'you tried power posing for the testosterone and cortisol claims',
          then: 'Keep what survived replication, the small feeling effect and the reliable audience effect, and drop the bloodstream story entirely. Train bearing for the room and the mirror; the hormones were never part of the deal.',
        },
      ],
    },
    5: {
      case: 'Kwame, 29, and four friends planned a three-day self-supported hike in the Welsh hills with a one-page plan everyone signed: distances, camps, water sources, bail-outs, and who carried what. Roles rotated daily, so Kwame navigated day one, cooked day two, and managed rations on day three. On day two the navigator, his least experienced friend, called a stop when the river crossing ran high under the pre-committed rule that any member can call one; nobody argued, because the rule predated the rain. They re-routed, arrived at the second camp two hours late, and held the 30-minute debrief the night they returned: three decisions that went wrong, one that went right, one change for next time. The change, printing the escape-route grid at larger scale, saved them on the trip the following year. Kwame judged the trip by the debrief, not the distance, and had begun running the same rotate-roles pattern in his project team.',
      situations: [
        {
          if: 'you have only ever done day trips',
          then: 'Plan one two-to-three-day self-supported route this week: map it, price the food, check water and weather windows, and write the one-page plan with bail-outs. Send it to three potential partners with two dates by Friday so the trip becomes real, not theoretical.',
        },
        {
          if: 'your group trips keep dissolving into arguments about who decides',
          then: 'Rotate daily roles (navigator, cook, quartermaster) and pre-commit two rules before departure: nobody walks alone, and any member can call a stop. The signed plan, not the loudest hiker, holds the authority.',
        },
        {
          if: 'you measure a trip by the summit photo',
          then: 'Hold the 30-minute debrief the night you return: three decisions that went wrong, one that went right, one change for next time. Judge the trip by debrief quality, because the gains come from interdependence and reflection, not distance.',
        },
      ],
    },
    6: {
      case: 'Jonas, 33, a marathon runner, joined a trek above 3,000 m and was the fittest person on the mountain, which is exactly how he became the problem. The written ascent profile allowed 300 to 500 m of sleeping gain per day, but he pushed the pace in the first 48 hours and woke on day three with a headache, nausea and dizziness: a positive Lake Louise self-check. The rule of the group beat his felt state; symptoms worsening at rest meant down 300 to 500 m immediately, and he descended that afternoon while the itinerary went up without him. Greta, 61, the slowest acclimatizer who had set the schedule, took the summit on day six in clear weather while Jonas, recovered and humbled, photographed her from the high camp. His fitness had predicted the opposite of protection, and the protocol had been the only authority worth trusting at that altitude.',
      situations: [
        {
          if: 'you are the fittest person on the trip',
          then: 'Let the slowest acclimatizer set the schedule and take a symptom-checker role for someone else, because fitness predicts faster ascent and harder hits. Write the ascent profile (300 to 500 m of sleeping gain per day above 3,000 m, a rest day every 3 to 4 days) into the plan before you leave.',
        },
        {
          if: 'you wake at altitude with a headache plus fatigue, nausea or dizziness',
          then: 'Stop ascending until it clears, and if symptoms worsen at rest, descend 300 to 500 m immediately whatever the itinerary says. Write the descent rule in advance; the protocol, not your felt state, is the authority.',
        },
        {
          if: 'you cannot reach real altitude this month',
          then: 'Train the decision kit: memorize the Lake Louise criteria on Monday, then audit one real itinerary each day against the 500 m rule and mark where it violates the profile. On Sunday, write your three turn-back triggers onto the plan page.',
        },
      ],
    },
    7: {
      case: 'Maya, 39, avoided cold water, hard conversations and most things ending in discomfort, then ran the protocol for a month. Five showers a week finished with 30 to 60 seconds of cold, slow nasal breathing, no gasping, each scored 1 to 10 before and after; her scores fell from 8 to 5 across the fortnight. On Saturdays she added one dry rep, hill sprints or a fasted walk, scored the same way. The payoff she actually used was the transfer: she scheduled the phone call about the ignored repair request from her landlord immediately after the cold finish on Monday, while the stay-calm-inside-discomfort state was fresh, and made the call she had postponed for five weeks. She took the honest ledger with it: no fat loss, no immunity miracle, and the sick-day reduction in the trial was self-reported at about 29 percent, nothing more miraculous than that. What she kept was the skill, not the therapy.',
      situations: [
        {
          if: 'you have been sold cold plunges for fat loss, immunity or testosterone',
          then: 'Take the honest ledger: alertness and mood rise, tolerance transfers, and the rest is marketing. Finish one shower daily with 30 to 60 seconds of cold and score the discomfort 1 to 10 before and after; the falling after-score is the real training effect.',
        },
        {
          if: 'there is a task you have been avoiding for weeks',
          then: 'Schedule it immediately after the cold finish on Monday, while the calm-inside-discomfort state is fresh, and do it before the state fades. The skill being trained is functioning inside unpleasant sensation, so spend it the same day.',
        },
        {
          if: 'you are exhausted, unwell or coming back from illness',
          then: 'Skip the cold that day entirely; the tool is discomfort, not danger, and it never trains near the limits. Keep the weekly dry rep instead (a hard chore done without complaint) and score it the same way.',
        },
      ],
    },
    8: {
      case: 'Felix, 36, had once stood on a summit shoulder in building cloud because we have come this far, and only later learned the accident literature calls that plan continuation bias. After a navigation course he changed one thing: every outing began with three written triggers, a summit-by time (13:00), a weather condition (cloud below the eastern col), and a margin (two liters of water between fills). On a November ridge his cloud trigger fired at 12:40 while the summit was forty minutes away; Chiara, his less experienced partner and the designated turn-back advocate, said the practiced phrase, this is my trigger, so we turn here, and they turned. He felt the pull to push on as strongly as ever at 12:40; the difference was that the written rule decided, not the person invested in the summit. The trip notebook logged the trigger as honored, no override sentence needed. They summited two weeks later in clear weather with the argument budget unspent.',
      situations: [
        {
          if: 'you are experienced and your trips keep ending with we just made it',
          then: 'Write three triggers in the calm morning before every outing: a summit-by time, a specific weather condition, and a margin (daylight, fuel, water). Let the paper decide at 2,800 m; experience breeds reluctance to quit, not immunity to it.',
        },
        {
          if: 'you are the least experienced member of your group',
          then: 'Volunteer for the standing turn-back-advocate role and practice the phrase aloud before you need it: this is my trigger, so we turn here. The role is thanked rather than blamed when called, and groups with pre-committed quitting criteria have the better safety record.',
        },
        {
          if: 'you overrode a trigger last season and got away with it',
          then: 'Write the one-sentence override reason in the trip notebook and reread it before the next outing. Getting away with it is the mechanism of the accident chain; the log is how you catch yourself becoming the person who continues into weather.',
        },
      ],
    },
    9: {
      case: 'Rosa, 27, was chronically late, lost keys monthly, and had concluded she simply lacked discipline. She rebuilt mornings as a system instead: kit laid out nightly in one fixed spot (clothes, bag, keys, water), and two if-then rules posted where she dressed: if the alarm rings, then feet on the floor within ten seconds; if keys leave my hand, then hook. She scored each rule 0 or 1 daily and changed nothing midweek; the five-minute Sunday inspection scored the week 9 out of 14. The keys rule failed twice, so under her own protocol she shrank it by half (the bag itself now lived on the hook) rather than abandoning it. Weeks two and three ran almost entirely on the system because her motivation was absent, which is the point the 66-day median makes. By week eight the mornings ran without her noticing, and she had stopped auditing her character and started auditing her cues.',
      situations: [
        {
          if: 'you keep failing the same task every morning',
          then: 'Write it as an if-then rule posted where you dress (if the alarm rings, then feet on the floor within ten seconds) and score it 0 or 1 nightly. When it fails twice in a week, shrink it by half rather than dropping it.',
        },
        {
          if: 'motivation is high right now and you want to rebuild your whole life this week',
          then: 'Pick exactly two rules and change nothing midweek; the five-minute Sunday inspection is the only review point. Two kept standards beat ten abandoned ones, and the score out of 14 is the honest measure.',
        },
        {
          if: 'you have quit every routine by week three before',
          then: 'Expect the 66-day median and stop auditing your character; audit your cues instead. Kit in one place, rules posted where you dress, and the system carries week three, because motivation will not.',
        },
      ],
    },
    10: {
      case: 'Aisha, 31, an engineer, avoided speaking in meetings so reliably that her manager once presented her own analysis for her. She built a seven-rung ladder on Monday: ask one question in standup, give a two-minute update in the team meeting, present one slide to five colleagues, run the sprint retrospective, brief the department head one-on-one, present to the twelve-person group, and finally the department review. She climbed one rung per day, repeating rung four until its before-score dropped below 3 out of 10, and stayed in every situation until the fear peak passed instead of escaping mid-peak. Before rung six she predicted I will shake and lose my words; the actual mismatch (voice unsteady for twenty seconds, words intact) was the lesson the log recorded. After-scores fell from 8 to 3 across the week, and three weeks later she presented at the department review still nervous and climbed anyway. Courage was the changed prediction, not the absence of fear.',
      situations: [
        {
          if: 'a specific fear, speaking, hard conversations or asking, is costing you opportunities',
          then: 'Write the seven-rung ladder tonight, easiest to hardest, each rung a concrete situation, and climb rung one tomorrow. Log fear 0 to 10 before, at peak and after every attempt; the falling after-scores are your evidence.',
        },
        {
          if: 'a rung still scores above 3 out of 10',
          then: 'Repeat that rung the next day instead of moving up, and stay in the situation until the peak passes. Leaving mid-peak trains escape, not courage.',
        },
        {
          if: 'your fear is of one rare, high-stakes event like a single talk or interview',
          then: 'Build the ladder from adjacent smaller versions (a question in a meeting, a two-minute update, a slide to five people) so the real event arrives as rung seven. Predict the outcome in one sentence before each rung and check it afterward; the mismatch is the lesson.',
        },
      ],
    },
  },
};
