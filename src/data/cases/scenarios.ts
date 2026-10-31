export const cases = {
  sections: {
    'First Impressions': {
      case: 'Arjun, 26, a data analyst in Pune, spent his first industry meetup standing by the door scanning for a safe person, then left early convinced the problem was his personality. At the next one he ran the sequence instead: one pause in the doorway, one look around, then a small group with open body language and \'Mind if I join you? I don\'t know anyone here yet.\' When the name of the woman beside him evaporated, he asked plainly - \'Sorry - your name again? I want to get it right\' - and used it once in the next minute instead of five times. Two conversations later he exited on a high note: \'I\'m going to grab a drink before the queue gets silly - I liked what you said about the badminton group.\' He left with a follow-up contact and proof that walking in alone is a sequence of small moves, not a charisma test.',
      situations: [
        {
          if: 'you arrive at an event alone, know nobody, and feel the pull to stand by the wall and leave early',
          then: 'Run the doorway sequence: one pause, one look around, then pick a group with open body language and ask \'Mind if I join you? I don\'t know anyone here yet.\' Introduce yourself within the first minute, not the tenth.',
        },
        {
          if: 'someone has just told you their name and it has already evaporated',
          then: 'Ask again plainly instead of guessing - \'Sorry - your name again? I want to get it right\' - then attach it to one concrete detail (\'Priya, right? You came with Rohan\') and use it once in the next minute, not five times.',
        },
        {
          if: 'you are stuck in a first conversation that has passed its natural end and you cannot see the exit',
          then: 'Wait for a lull, name a concrete reason, add one specific thing you enjoyed, then actually go: \'I\'m going to grab a drink before the queue gets silly - I liked what you said about the badminton group.\' Leaving before the conversation dies is what makes the goodbye warm.',
        },
      ],
    },
    'Small Talk & Keeping It Alive': {
      case: 'Meera, 29, who does accounts for a bakery chain in Bengaluru, answered \'What do you do?\' with just her job title and then stood in silence, convinced the conversation was her fault. She tried the trade format in the office pantry: \'I do accounts for a bakery chain - mostly I stop people spending money on things that will not sell. What about you - is it the thing you would choose?\' When her new contact gave a slow answer, she went back to the last concrete noun instead of panicking: \'You mentioned your sister - is she local?\' The chat ended warmly, and the same man later invited her team to a finance workshop he was running. The lesson: small talk is a trade - answer, add one detail, hand the question back - not an interview you have to pass.',
      situations: [
        {
          if: 'someone asks \'what do you do?\' and your answer dies right after the job title',
          then: 'Answer in one plain sentence, add why it matters or one concrete detail - \'I do accounts for a bakery chain - mostly I stop people spending money on things that will not sell\' - then hand it back with a real question: \'What about you - is it the thing you would choose?\'',
        },
        {
          if: 'you blank mid-conversation and the panic makes you fill the silence with \'yeah, totally\'',
          then: 'Let the pause sit for one beat, then go back to the last concrete noun they said: \'You mentioned your sister - is she local?\' If you are still stuck, say so - \'I have completely lost my thread, sorry. What were you saying about the move?\' - which is less awkward than pretending.',
        },
        {
          if: 'you catch yourself having asked three questions in a row without offering anything about yourself',
          then: 'Trade one back by answering your own question first: \'What has been the best part of your week? Mine was finally fixing the tap.\' Then follow up on their answer instead of jumping to the next topic.',
        },
      ],
    },
    'Groups, Parties & Events': {
      case: 'Kavya, 27, a product designer in Hyderabad, used to spend friends\' engagement parties welded to her friend Dev, letting him translate every conversation. At the last one she introduced herself to each person by name, asked the easy shared-history question - \'How do you two know each other?\' - and sent Dev off to the drinks table: \'I\'m going to grab a drink - anyone want anything?\' When she found a circle mid-conversation, she stood at the edge for ten seconds and added to the current topic, \'Sorry to eavesdrop - were you talking about the match last night?\', instead of starting a new one. One of the cousins now sends her freelance design briefs. The lesson: groups open from the inside - join the topic they are already on, not the one you prepared.',
      situations: [
        {
          if: 'you arrive with the one friend you know and let them translate every conversation',
          then: 'Introduce yourself to each person by name and ask the easy shared-history question - \'How do you two know each other?\' - then send your friend off once: \'I\'m going to grab a drink - anyone want anything?\'',
        },
        {
          if: 'a circle of strangers is mid-conversation and you cannot see a way in',
          then: 'Find the gap in the circle, stand at the edge for ten seconds, then add to the topic they are already on: \'Sorry to eavesdrop - were you talking about the match last night?\' If they close the circle twice, say \'I\'ll let you get back to it\' and move on - that is information, not failure.',
        },
        {
          if: 'the group you are with goes flat and the silence starts to feel like an emergency',
          then: 'Let it last a beat, then name it lightly or offer one concrete thread: \'We have gone quiet - whose round is it?\' or \'Random question: what is the last thing you watched that you would actually recommend?\' If it stays flat, leave the group rather than talking over the quiet.',
        },
      ],
    },
    'Work & Meetings': {
      case: 'Rohan, 32, a backend engineer in Gurugram, once rehearsed a point about an optimistic deadline until a teammate said it first, and he stayed silent for the rest of the meeting. In the next review he wrote his one sentence beforehand and spoke inside the first ten minutes: \'Can I add one thing before we move on? I think the timeline is optimistic because the review step took three weeks last time.\' He finished with \'Happy to be wrong on that\', invited a response instead of defending, and the PM added a buffer nobody had argued for. His weekly updates changed too - headline first, then the ask: \'The migration is on track for the 14th. I need thirty minutes from someone on the platform team by Wednesday.\' The lesson: the meeting does not reward the best-rehearsed point, it rewards the one said early.',
      situations: [
        {
          if: 'you rehearse a point in every meeting until someone else says it first',
          then: 'Write your one sentence before the meeting and speak inside the first ten minutes: \'Can I add one thing before we move on? I think the timeline is optimistic because the review step took three weeks last time.\' Then invite the response instead of defending: \'Happy to be wrong on that.\'',
        },
        {
          if: 'your weekly update narrates your week chronologically with three hedges per sentence and no ask',
          then: 'Open with the headline, give two facts, make one ask, stop: \'The migration is on track for the 14th. Two of four services are done; I need thirty minutes from someone on the platform team by Wednesday.\'',
        },
        {
          if: 'your manager criticises your work in front of the team and you want to argue the detail on the spot',
          then: 'Write down the exact words, ask one clarifying question instead of rebutting - \'Can I check I have understood - you are saying the report missed the cost line?\' - then take it away: \'I would like to look at it properly and come back to you this afternoon.\' Follow up privately within a day with the fix.',
        },
      ],
    },
    'Conflict & Difficult Moments': {
      case: 'Imran, 30, a sales lead in Mumbai, had a colleague who cut him off in every client call, and he went quiet each time before replaying the meeting all evening. On the next call he slowed down and named the pattern once, briefly: \'Let me finish this one point, then I want to hear yours\' - and finished his sentence. The same week, a teammate made a joke about his missed target at lunch; he did not laugh, paused, and gave one flat line, \'That one landed a bit low\', before changing the subject himself: \'Anyway - you were saying about the trip?\' The interruptions thinned out within a month, and the joker, raised privately afterwards, did not repeat it. The lesson: short, flat, once, then move on - long explanations are what turn a moment into a feud.',
      situations: [
        {
          if: 'the same colleague cuts you off in every meeting and you go quiet, then replay it all evening',
          then: 'Slow down and name the pattern once, briefly: \'Let me finish this one point, then I want to hear yours\' - then finish your sentence and offer them the floor. If it continues, take it private: \'I\'m going to stop here and pick this up when we can both finish a thought.\'',
        },
        {
          if: 'a friend cancels plans last minute for the third time and you have already said \'no worries!\' twice',
          then: 'Say the effect plainly, no character attack: \'This is the third time this month - I would rather you told me earlier if you are not up for it.\' Then set your own rule: \'I\'m going to stop holding the evening free. Ask me again when you know\' - and follow through if it repeats.',
        },
        {
          if: 'someone makes a joke at your expense and the whole group is watching how you take it',
          then: 'Do not laugh, keep your face neutral, pause, and give one short flat line: \'That one landed a bit low.\' Then change the subject yourself - \'Anyway - you were saying about the trip?\' - and if it is a pattern, raise it privately afterwards.',
        },
      ],
    },
    'Asking, Refusing & Boundaries': {
      case: 'Divya, 28, a marketing executive in Chennai, said \'I\'ll try\' to every request and then dodged messages for a week, which cost her more than a clean no ever would. When a friend asked for a full weekend of help moving flats, she decided before answering: \'I can\'t do Saturday - I need a quiet weekend. I know that\'s not what you hoped, and I\'m still glad you asked me.\' At work she stopped absorbing tasks and asked for the order instead: \'I have about six hours left this week. Where do you want them?\' When a vendor pushed past her no three times, she repeated the same sentence without new reasons - \'I understand you\'re disappointed. The answer is still no\' - and ended the call: \'I\'m going to end this call now. We can talk tomorrow.\' The lesson: a clean no, stated once, is the cheapest thing you can give anyone.',
      situations: [
        {
          if: 'a friend asks for a weekend favour and your mouth says \'I\'ll try\' while your gut says no',
          then: 'Decide before you answer, then put the no in the first two sentences: \'I can\'t do Saturday - I need a quiet weekend. I know that\'s not what you hoped, and I\'m still glad you asked me.\' One reason, no essay, no alternatives you do not mean.',
        },
        {
          if: 'your manager hands you a third \'quick task\' and you are already at capacity',
          then: 'Ask for the priority order instead of absorbing it: \'I have about six hours left this week. Where do you want them?\' Then trade explicitly and get the decision in writing: \'Happy to do it next week if the audit can wait.\'',
        },
        {
          if: 'you have said no and the other person pushes until your no is turning into a maybe',
          then: 'Repeat the same sentence without adding new reasons, tone flat and warm: \'I understand you\'re disappointed. The answer is still no.\' If it continues, end the conversation: \'I\'m going to end this call now. We can talk tomorrow.\'',
        },
      ],
    },
    'Apologies & Repair': {
      case: 'Priya, 31, a team lead in Bengaluru, covered a missed handover with \'I\'m sorry, but the client kept changing the brief\', and watched her junior\'s face close - the \'but\' cancelled the sorry. The next time she slipped, she ran the plain version: \'I\'m sorry - I said I\'d be there and I wasn\'t. You ended up covering for me, and that wasn\'t fair. Next time I\'ll confirm the night before.\' She then asked \'What would make this better from your side?\', changed the handover so it could not repeat, and checked in after a week instead of expecting normal by evening. Trust came back on the junior\'s timetable, not hers - which is exactly why it came back. The lesson: no qualifier, one concrete change, and their clock, not yours.',
      situations: [
        {
          if: 'you have just said \'I\'m sorry, but...\' and can feel the apology not landing',
          then: 'Strip the qualifier and name the effect instead: \'I\'m sorry - I said I\'d be there and I wasn\'t. You ended up covering for me, and that wasn\'t fair.\' Add one change - \'Next time I\'ll confirm the night before\' - then stop and let them respond.',
        },
        {
          if: 'you apologised once and expect everything back to normal by the same evening',
          then: 'Make it specific, then ask: \'What would make this better from your side?\' Change the behaviour visibly, check in after a week rather than the same hour, and accept their timetable: \'I know it will take time - I\'m not going to keep asking you to be over it.\'',
        },
        {
          if: 'a friend broke your confidence and you want to say \'it\'s fine\' just to end the conversation',
          then: 'Say what forgiveness actually means here: \'I\'m not going to keep punishing you for it, but I\'m not pretending it didn\'t happen. I need to see it stay different for a few months before I trust it.\' And if forgiveness has not arrived, say so honestly: \'I\'d rather tell you than fake it.\'',
        },
      ],
    },
    'Hosting & Warmth': {
      case: 'Suresh, 33, a lecturer in Jaipur, hosted his first dinner and spent the whole evening in the kitchen while four guests sat politely around an empty table. The next time, the food was make-ahead, the table and drinks were set before anyone arrived, and when a guest offered to help he took it: \'Yes please - you chop, I\'ll stir.\' He introduced arrivals with a handle and shared ground - \'Vikram, this is Priya - she runs the trek club I mentioned. You both grew up in Pune, I think?\' - and sat down with everyone for the first twenty minutes. The evening ended with guests giving one specific thank you at the door instead of the usual vague goodbye. The lesson: hosting is mostly done before the doorbell rings; during the dinner, your job is to be at the table.',
      situations: [
        {
          if: 'you host and end up trapped in the kitchen while guests entertain themselves',
          then: 'Cook make-ahead food and set the table and drinks before anyone arrives, take help when it is offered - \'Yes please - you chop, I\'ll stir\' - and sit down with your guests for at least the first twenty minutes.',
        },
        {
          if: 'you have just said \'Vikram, this is Priya\' and walked away, leaving two strangers marooned',
          then: 'Go back and give each one a handle plus the shared ground - \'She runs the trek club I mentioned\' and \'You both grew up in Pune, I think?\' - then ask one question that includes both and stay for the first minute before stepping back.',
        },
        {
          if: 'you are the guest who arrives empty-handed and leaves while the host starts the washing up',
          then: 'Ask what to bring - \'What can I bring? I\'m good for dessert or something sweet\' - offer help at one natural moment, and say one specific thank you at the door: \'That was a lovely evening - thank you for having us.\' Leave when the host starts clearing up.',
        },
      ],
    },
  },
};
