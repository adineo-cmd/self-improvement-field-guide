// Case-study enrichment for the Leadership & Office chapter (Part II, entries keyed by num).

export const cases = {
  entries: {
    1: {
      case: 'Yusuf, 24, a junior analyst, was voted treasurer of his Saturday cycling club in January 2025 despite feeling like the least charismatic member. He wrote a one-paragraph duty list (collect fees on the first Saturday, reconcile the ledger by the third, report at each monthly ride) and read it aloud at his first meeting. He kept a five-line duty log each week and asked the club secretary to hold him to it. By June, members routed questions through him because he answered with dates and numbers, and in October he ran the annual fee review end to end. Nobody ever called him charismatic; they called him the person who knows how the club runs. The office trained the behaviors, and the identity caught up a year late.',
      situations: [
        {
          if: 'you were just handed a small office and feel completely unqualified',
          then: 'Write its one-paragraph duty list in week one and publish it to the group, then ask one member to hold you to it. Let the paragraph define the role while your confidence catches up; the feeling arrives after the behavior.',
        },
        {
          if: 'you are the natural front-of-the-room person and suspect you coast on it',
          then: 'Take the boring office instead of the spotlight one: treasurer or roster-owner, with written duties and a weekly log. Hold it for the full term, because finishing it, not starting it, is the training.',
        },
        {
          if: 'your group has no named offices and everything depends on whoever shouts loudest',
          then: 'Propose one small office at the next meeting with its duties written out, and volunteer to fill it for one term. Date the paragraph and name who inherits it; the paperwork is the institution.',
        },
      ],
    },
    2: {
      case: 'Rohan, 29, was named captain of his Sunday-league five-a-side team over Marco, a friend who had captained it the year before. Before his first selection call he stated the criteria out loud (attendance at training, goals conceded while on the pitch) and dropped Marco for the semi-final, then ran a ten-minute one-on-one with him on the Wednesday. The team lost 4-0; Rohan delivered the 60-second debrief himself, naming his own lineup error before anyone else spoke, and fixed the defensive lapse privately with the player concerned rather than in front of the group. Marco stayed for the next season and took over warm-up duties; two teammates separately said they trusted the calls even when they disliked them. The badge bought nothing; the stated criteria and the absorbed loss bought everything.',
      situations: [
        {
          if: 'you were made captain over a friend who wanted the job',
          then: 'Take them for a coffee within the week, say plainly why you accepted and what your selection criteria will be, and give them one visible job such as running warm-ups. Silence will read as guilt; a stated role reads as respect.',
        },
        {
          if: 'you are a new captain leading people who were seniors last season',
          then: 'State your selection criteria in writing before your first call and repeat them after the result. Run a ten-minute one-on-one with each senior in the first fortnight, asking about their load before their output.',
        },
        {
          if: 'your team just lost badly and the group chat is turning on individuals',
          then: 'Deliver the 60-second debrief yourself within the hour: what failed, what you fix, who owns the fix, starting with your own error. Never litigate a name in the chat; take it to the one-on-one.',
        },
      ],
    },
    3: {
      case: 'Elena, 21, a second-year university student, founded a film society in her autumn term. Monday she drafted a one-paragraph charter naming the officers and the 45-minute Thursday slot; Tuesday she booked the room; by Thursday she had ten sign-ups from the specific ask of one hour on Thursdays in room 4, not from an open appeal. She chaired the founding meeting against a written agenda and published the minutes the next morning. A rival group launched the same month with better posters and no calendar and folded by November; hers survived because attendance follows rhythm. At the end of the year she handed the incoming chair a one-page summary of what the society does, what almost went wrong, and who to ask about the projector.',
      situations: [
        {
          if: 'you have an idea for a group but no followers yet',
          then: 'Skip the announcement and build the artifacts first: charter on Monday, booked room on Tuesday, ten sign-ups by Thursday using a specific ask with a day, an hour and a place. An open appeal recruits nobody; a concrete slot does.',
        },
        {
          if: 'your existing group meets whenever someone remembers to organize it',
          then: 'Fix the day, hour and room for a term and publish the calendar before the next meeting. Rhythm, not promotion, is what attendance follows.',
        },
        {
          if: 'you founded something that now cannot run without you',
          then: 'Pass one real decision to another officer this month and write the one-page handover: what the group does, what almost went wrong, who to ask. Succession is the test of the institution.',
        },
      ],
    },
    4: {
      case: 'Priya, 34, a marketing lead, first delegated the monthly newsletter by forwarding her task list and keeping every method decision; within two weeks every stalled item was back on her desk and she was rewriting headlines at 11 p.m. On the second attempt she wrote a three-field brief: definition of done (proofread draft, all four sections, sent by the first of the month), deadline, and a checkpoint on the 25th. She said the sentence out loud: you choose the method, I review at the checkpoint. When the designer brought a stuck image-licensing question, she answered with a question first: what would you do if I were away? At the checkpoint she reviewed his choices instead of making them, and her rescue urges fell from seven in month one to two in month three. The newsletter went out on time without her touching it.',
      situations: [
        {
          if: 'every delegated task keeps coming back to your desk for a ruling',
          then: 'Rewrite the handover as a three-field brief (definition of done, deadline, checkpoint date), say you choose the method aloud, and answer the next stuck item with the question: what would you do if I were away? If decisions still route to you, you dumped, not delegated.',
        },
        {
          if: 'you are the junior and the work arriving is a task list with no authority attached',
          then: 'Propose the brief yourself in writing: here is my definition of done, my deadline, and a checkpoint date where you review my choices. Asking for the structure converts dumping into delegation from your side of the desk.',
        },
        {
          if: 'you could do it faster yourself and explaining feels like a wasted week',
          then: 'Hand over one recurring outcome anyway with a checkpoint two weeks out, and log the hours you did not spend on it plus every rescue urge. The first brief is the expensive one; the third is profit.',
        },
      ],
    },
    5: {
      case: 'David, 41, chaired a housing-cooperative committee that had discussed the same boiler replacement across three meetings without deciding. For the fourth he sent the agenda a day early with the decision needed written on each item, timeboxed routine items to five minutes and the boiler to fifteen, and on the contested heating-bill item asked each member for one sentence in turn, quietest first. The quietest member turned out to hold the key fact: a quoted maintenance contract that made repair viable for two more years. David closed each item by reading back the decision, the owner and the date, and circulated the decision list on top of the minutes within 24 hours. The meeting made three decisions in fifty minutes where the previous two had made none; one attendee graded it 9 out of 10, another 7 because the finance item ran over. Structure, not the loudest voice, unlocked the room.',
      situations: [
        {
          if: 'your recurring meeting ends every week with we will pick this up next time',
          then: 'Send the agenda a day early with the decision needed written on each item, and close each one by reading back the decision, the owner and the date. An item without those three was not a decision.',
        },
        {
          if: 'one loud senior voice fills every discussion before others speak',
          then: 'Before the contested item, go around the table one sentence each, quietest first, and write the answers where everyone can see them. The unspoken private fact is usually sitting behind the quietest person.',
        },
        {
          if: 'you are not the chair but the meetings you attend decide nothing',
          then: 'Send the chair a one-page list after each meeting asking them to confirm an owner and a date per item, and offer to circulate it. Minutes with the decision list on top convert drift into outcomes even from the second seat.',
        },
      ],
    },
    6: {
      case: 'Fatima, 38, a clinical team lead, took the call when a misfiled test result reached a consultant: she said my checking step missed it, gave the fact and the fix, and named herself as the owner in the report upward. She then fixed the actual cause privately with the junior who filed it, never in front of the group. The following week she credited a nurse by name at the department meeting for catching the duplicate-booking error that had started the chain. Within a month the junior was reporting near-misses the day they happened instead of quietly patching them, and Fatima logged five named public credits a week in a small ledger. When the promotion round came, three of her team wrote unsolicited to say why they wanted her. Failures marked I and credit marked by name bought a loyalty that blame-sharers never see.',
      situations: [
        {
          if: 'your team just failed publicly and your manager wants a name',
          then: 'Give the fact, the fix and the owner in one breath, and take the owner role yourself: my check missed it. Fix the cause with the person privately, never in front of the group.',
        },
        {
          if: 'a senior keeps presenting work from your team as their own',
          then: 'Move the ledger into writing: every report and update names the contributor and the specific act, so authorship is on the record before it reaches the room. Written credit survives the retelling; spoken credit does not.',
        },
        {
          if: 'you are a brand-new lead with no standing to spend',
          then: 'Bank standing by rate: five named public credits a week and one visible absorbed failure in your first month. Ask each person what would make their work easier, and fix one item from the answers.',
        },
      ],
    },
    7: {
      case: 'Karan, 45, ran a hospital laboratory unit where the restocking and freezer inventory had drifted entirely onto the two youngest technicians. For one week he did the worst chore daily, the 7:30 a.m. freezer inventory, unannounced, and logged it each evening. On Thursday a technician spotted him and objected that it was not his job; he answered, rank is duties. He also asked his one weekly service question, what would make your work easier, and by Friday had ordered the label printer two people had been requesting for months. The chore chart was reissued that month with every senior name visibly on it, and the juniors began flagging supply problems weeks earlier because the person who could fix them had visibly done the chore. Nobody remembered any speech he gave; they remembered who was on the chart.',
      situations: [
        {
          if: 'you are the most senior person in the room and the juniors do the setup and cleanup',
          then: 'Take the worst chore daily for a week without announcing it, and log what you did each evening. When told you do not need to, answer: rank is duties.',
        },
        {
          if: 'you are a junior watching chores migrate quietly onto your cohort',
          then: 'Do not complain; reissue the chore chart with every name on it including the seniors, and propose it as a rotation rather than an accusation. A visible chart corrects exemption drift without a confrontation.',
        },
        {
          if: 'you hold seniority informally, through tenure rather than title',
          then: 'The mechanism works the same: do the chore unannounced and ask your one weekly service question, what would make your work easier, then fix one answer. Standing is earned by visible service, not granted by the org chart.',
        },
      ],
    },
    8: {
      case: 'Sam, 31, a software engineer with no title, wanted the team to adopt a code-review rota after a quarter of review bottlenecks. Instead of proposing it cold, he held three input conversations and folded the objections into a one-page case: the problem, two options, his recommendation, the ask. He requested the small commitment first, a two-week trial on one project rather than a policy change, and offered to run the rota himself during the trial. The trial stuck, and when he later needed backing for an on-call handbook, the same peers supported it unprompted because he had reviewed their release candidate during a March crunch. He kept a favors ledger: what he had done for whom, and what he was asking next. Without a title he spent expert and referent standing, and the ledger kept the account from overdrawing.',
      situations: [
        {
          if: 'you have no title and a proposal peers keep ignoring',
          then: 'Collect three peer inputs before you pitch, reflect them in a one-page case, and ask for a two-week trial rather than a policy change. A proposal people recognize arrives pre-agreed.',
        },
        {
          if: 'you will need a specific peer on your side next month and they owe you nothing',
          then: 'Make the deposit now: deliver one visible piece of help they would feel (a review, a summary, a solved blocker), log it, and name nothing you want in return. Follow up within a week of the next relevant moment, because unfollowed asks decay.',
        },
        {
          if: 'you already pitched and got a soft maybe',
          then: 'Convert it within a week: can we trial it for two weeks on one project, and who should I show the result to? Small yes first, then the larger ask, with a dated follow-up or it decays.',
        },
      ],
    },
    9: {
      case: 'Diego, 36, the duty manager of a 90-room hotel, took the 2 a.m. call that a burst riser was flooding four ground-floor rooms. He answered slower than normal, at about 80 percent of his usual tempo, and worked his prepared three-question script: what do we know, what is the next action in 24 hours, who owns it. One question at a time, answers written at the desk: guests moved to 201-204 by the night porter, maintenance called with a 30-minute response, front desk given a two-line script. He gave the next action, not the apology and not the analysis, and ran the debrief 36 hours later, which found the missed valve in the maintenance rota. Two guests wrote compliments about the calm at the desk; Diego privately admitted his pulse never agreed with his voice. Calm was produced, not felt.',
      situations: [
        {
          if: 'something has just gone wrong publicly and you can feel your own voice speeding up',
          then: 'Drop to about 80 percent of your normal tempo and lower your pitch, then say your three questions out loud and answer only the 24-hour-action one. Analysis waits for the debrief; the room regulates off your tempo first and your facts second.',
        },
        {
          if: 'the failure is technical and you are not the expert on it',
          then: 'Your job is the next action, not the diagnosis: name one workable step for the next 24 hours and one owner, asking questions one at a time with answers written where everyone can see them. Revise the plan after the first action ships.',
        },
        {
          if: 'you have no script because you never prepared for this specific crisis',
          then: 'Run the debrief within 48 hours while the details exist, and write the three-question script for next time before you forget the shape of the failure. Nobody writes a good script mid-crisis; prepare it in peacetime.',
        },
      ],
    },
    10: {
      case: 'Meera, 26, a junior architect, admired how a senior partner had handled a hostile planning committee and sent the specific ask within the week: could I bring you one question a month for 15 minutes? The partner said yes because the ask was sayable. Meera sent each monthly agenda 24 hours ahead with three bullets (progress since last time, one question, one ask) and opened the second meeting by showing the portfolio restructure she had made from the first advice. After eight months the partner put her name forward for a competition team without being asked. The same month Meera began mentoring a first-year graduate on identical terms: agenda, 15 minutes, monthly, visible progress. The relationship ran on structure; the chemistry, where it existed, was a dividend rather than the engine.',
      situations: [
        {
          if: 'you have been waiting for a senior to notice you and offer mentorship',
          then: 'Send the specific ask this week: I admired how you handled X, could I bring you one question a month for 15 minutes? Will you mentor me is not sayable; the monthly version is.',
        },
        {
          if: 'you already have a mentor but the meetings drift into pleasant chat',
          then: 'Send the three-bullet agenda 24 hours ahead (progress, one question, one ask) and open the next meeting by showing the applied advice. Visible progress is the currency that keeps a busy senior in the room.',
        },
        {
          if: 'you were mentored a few years ago and have never passed it on',
          then: 'List three people two years behind you, pick the most reachable, and offer the same terms you received: one monthly question, 15 minutes, their agenda. Paying it down the ladder completes the cycle; it is not charity.',
        },
      ],
    },
  },
};
