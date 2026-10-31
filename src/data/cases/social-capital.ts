// Case-study enrichment for the Social Capital chapter (Part II, entries keyed by num).

export const cases = {
  entries: {
    1: {
      case: 'Arjun, 29, was laid off from a logistics firm in March 2025 and made himself a list of 15 acquaintances he had not spoken to in a year: former colleagues, a training-course contact, a neighbor, a man he had met once at a wedding. One short, specific message per day; nine replied within a week. The useful one was a woman he had seen maybe twice since 2022, who answered his question about what to read in supply-chain analytics and mentioned an unlisted opening at her client. Arjun asked for a pointer, never for the job, and she offered the introduction herself. Two calls and one work-sample task later he was hired in May. Of his five close friends, all of whom already knew his industry, none had a lead he had not heard; the once-a-year contact did.',
      situations: [
        {
          if: 'you are job-hunting and have only asked the five friends you see every week',
          then: 'List 15 acquaintances you have not spoken to in a year and warm one per day with a question they can answer in a paragraph. Ask for pointers and reading, never for the job itself; the offer of help usually follows the information.',
        },
        {
          if: 'you are employed and comfortable and outreach feels unnecessary',
          then: 'Put one warm message per week in the calendar to a dormant tie: one-line congratulations on a real milestone or a link tied to their interest. Five minutes now keeps the tie valid for the year you will need it.',
        },
        {
          if: 'someone replied and you do not know what to do next',
          then: 'Reply within 24 hours, end with an offer rather than a thank-you alone, and if real help lands, close the loop within a month telling them exactly what happened. The loop is what turns a reply into a relationship.',
        },
      ],
    },
    2: {
      case: 'Grace, 24, a first-generation graduate, wanted into climate policy with zero contacts. She found five alumni of her university program working at two think-tanks through the alumni mentoring platform and sent each a three-sentence message: we both came through the same program, I am working on flood-resilience data, could I ask you one specific question in 15 minutes? Two replied; one call happened on a Thursday. Before asking, she had already volunteered to summarize a 60-page policy report for the program newsletter, which the second alumnus mentioned unprompted. That call led to a referral to a panel event, and Grace repaid visibly within the month by writing the event summary the organizer needed. Every favor went into a ledger with a repayment column, because a network you only draw on is a network you are spending.',
      situations: [
        {
          if: 'you are a student or fresh graduate with no contacts in your target field',
          then: 'Find five institution-linked people already doing the work and send the three-sentence message: shared connection in line one, what you are working on, one specific question grantable in 15 minutes. Name the shared year, program or mentor; that is the reason they reply.',
        },
        {
          if: 'you have only ever drawn on your institution network and never deposited',
          then: 'Do one unpaid favor for a fellow member this month with no ask attached: forward an opportunity, summarize something they need, or volunteer once at an event. Then log it and let it sit; reciprocity has a memory.',
        },
        {
          if: 'a fellow member just answered your question',
          then: 'Repay visibly within 30 days in a form their peers will see: a written note, a public thank-you, or an introduction they would value. Invisible repayment drains the commons as surely as no repayment.',
        },
      ],
    },
    3: {
      case: 'Yusuf, 33, a product manager, sat between two worlds: a freelance designer he had worked with and a startup founder complaining about unusable onboarding flows. Earlier in his career he had once cold-forwarded the CV of a friend to a stranger without asking, and watched it annoy both sides; this time he did it properly. He asked each separately: are you open to talking with X about Y? Then he sent the two-line brief, who each person is, why they specifically should talk, and the concrete ask, with the free exit written in: if it is not useful, just say so and I will not take it further. The designer landed a six-week contract; the founder shipped a new flow; both thanked Yusuf within 48 hours of the email. Four months later, unprompted, the founder introduced Yusuf to a hiring contact. The broker sits where the opportunities arrive first, provided both sides opted in.',
      situations: [
        {
          if: 'someone asks you to introduce them to a person you know',
          then: 'Get their two-line brief first (who they are, why that person specifically, the concrete ask), then ask the other side separately for their opt-in before forwarding anything. Without both opt-ins you are spending one person to benefit the other.',
        },
        {
          if: 'you want two people to meet but cannot say why they specifically need each other',
          then: 'Hold the introduction until you can write the reason in one line; a vague broker spends reputation on both sides. If the reason never arrives, tell each of them honestly that you could not find the fit.',
        },
        {
          if: 'someone made an introduction for you recently',
          then: 'Report the outcome back to your introducer within 48 hours, whatever it was, and thank both parties separately. The loop is what makes your name safe collateral for their next introduction.',
        },
      ],
    },
    4: {
      case: 'Hannah, 39, a senior ward nurse, was passed over for the matron post twice and nobody would tell her why. She emailed five people who saw her in different rooms, a manager, a peer, a healthcare assistant she supervised, her sister, and a notoriously hard-to-please consultant, with one question: what am I known for, and what should I do more of? Four of five answers converged: reliably excellent, invisible at the strategic level. One answer stung enough that she left it unread for a day before rereading it twice. She marked the list keep, build, retire, retired the fix-everything badge that kept her operational, and spent 30 days on one visible strategic behavior: presenting the ward audit to the trust board. Six months later she reran the audit with the same five people; two used the word strategic unprompted, and she was appointed at the third round.',
      situations: [
        {
          if: 'you were passed over and no one will tell you why',
          then: 'Send the exact question to five people who see you in five different rooms: what am I known for, and what should I do more of? Read the answers twice without replying, thank each sender the same day, and compress them into three bullets plus one behavior to run for 30 days.',
        },
        {
          if: 'you just started a new role and your reputation is a blank page',
          then: 'Write the three-bullet reputation you want, then ask two new colleagues what they currently know about you. The gap between the two lists is your first-90-days behavior plan.',
        },
        {
          if: 'one audit answer stung and you want to argue with it',
          then: 'Thank the sender in writing anyway, reread it in 48 hours, and file it as build or retire rather than true or false. Observers judge evaluative traits like charm and trustworthiness more accurately than you judge yourself; the sting is the information.',
        },
      ],
    },
    5: {
      case: 'Mateo, 22, an apprentice at an accountancy firm, was quick with the work and slow with the small things: two minutes late to stand-ups, phone face-up on the table at client lunches, names forgotten by the afternoon. His supervising senior said nothing for a month, then one Friday mentioned that the partner had asked about the new apprentice and the answer had been gets the work done, eventually. Mateo ran the four-habit scorecard for a week: five minutes early to everything, each new name used twice and spelled correctly, phone in the bag for every meal and meeting, three written thank-yous for real favors. By the second week the same partner greeted him by name, and a client manager requested him for a small advisory job. Nothing on the scorecard cost money; that is exactly why it read as character.',
      situations: [
        {
          if: 'you are competent but keep getting overlooked for the visible work',
          then: 'Run the four-habit scorecard nightly for a week, 0 or 1 each: early to everything, names used twice in new conversations, phone off every table, three written thank-yous sent. On Sunday, count the misses and repeat the card targeting only the weakest habit.',
        },
        {
          if: 'you eat with clients or seniors and your phone sits on the table even untouched',
          then: 'Phone in the pocket or bag for every meal this week, not silent on the table. The mere presence of the phone measurably lowers conversation quality and closeness, so the room feels the difference even if nobody names it.',
        },
        {
          if: 'someone did you a real favor this week and you only said thanks out loud',
          then: 'Send a written note within 24 hours naming the specific act and what it changed for you. Everyday gratitude binds relationships over time; the generic verbal thanks does not register as one.',
        },
      ],
    },
    6: {
      case: 'Zara, 27, a junior analyst, got the calibration wrong in both directions before she got it right. At her first client workshop she wore knitwear into a jacketed room, two notches under, and spent the day being handed the note-taking. She overcorrected at the next one with a full suit into smart-casual, two notches up, and a client joked about the interview. For the third she asked the organizer directly what the dress was, checked photos from the last workshop, and wore her one-notch-up outfit: a blazer over knitwear, clean shoes, pressed. Nobody mentioned her clothes at all, which was the entire point. She says the blazer also sharpened her own focus, though she is honest that the wearer-side effect is the part of the research that barely replicates; the reader-side effect is the one she calibrates for.',
      situations: [
        {
          if: 'you have an occasion and no idea of the dress register',
          then: 'Ask the host or organizer directly what the dress is, or look at photos from the last one, then sit one notch above the group average and never two. The two-notch error costs more than the one-notch miss.',
        },
        {
          if: 'you realize you are the most casually dressed person in the room',
          then: 'Do not panic-shop; own one clean, fitted, ironed one-notch-up outfit permanently and keep it ready at the office or in the car. The fix is prepared calibration, not an expensive emergency purchase.',
        },
        {
          if: 'you assume an expensive brand is what buys seriousness',
          then: 'Spend on fit and condition before brand: a well-fitted inexpensive garment beats an expensive wrinkled one. The goal is that nobody spends any attention on your clothes at all.',
        },
      ],
    },
    7: {
      case: 'Owen, 30, a postdoc facing job talks, recorded 60 seconds of himself answering a practice question and counted 14 filler words plus a handshake he would not wish on an enemy. Five days of the same recording drill took the fillers to 6, and he standardized the handshake at the conference: dry palm, two seconds, matched grip, name in the same breath. He slowed his first sentence by ten percent and held roughly two-thirds eye contact while speaking. At his talk two senior academics separately described him as settled, though he told a friend his pulse was nowhere near settled; the read changed, the feeling did not have to. The daily recordings were miserable to watch, which is precisely why they worked: the camera is the only feedback loop that does not flatter.',
      situations: [
        {
          if: 'you have a talk, interview or first meeting this month',
          then: 'Record 60 seconds of yourself daily for five days, count filler words, and cut them by half by day five. Watch the tape the same evening; memory will flatter you, the recording will not.',
        },
        {
          if: 'your handshake is a mumble, limp or clammy',
          then: 'Standardize it: dry palm, two seconds, matched grip, eye contact and their name in the same breath. Handshake quality alone shifts first impressions in the lab; rehearse it five times a day until it is boring.',
        },
        {
          if: 'you feel anxious and assume the room can see how bad it is',
          then: 'Train the audience read, not the feeling: slow the first sentence ten percent and hold two-thirds gaze while speaking. The nerves may stay exactly where they are; composure is what the room scores, and it is trainable in weeks.',
        },
      ],
    },
    8: {
      case: 'Lucia, 25, joined a heritage architecture practice and at her first firm dinner took the last free seat, which turned out to be the head of the table, then addressed the founding partner, Ms. Okafor, by first name because everyone online did. Nothing was said; nothing was offered either, and she spent the evening monitoring herself instead of talking surveying. A mentor walked her through the map that week: confirm forms of address in advance, leave the head of the table and the seat to the right of the host for others, let the senior frame the topic before your first contribution. At the next quarterly dinner she sat in the modest seat, used the correct address until invited otherwise, and made her one contribution after the partner framed the conservation question. By dessert the partner was asking her opinion directly, and in spring she was introduced to the surveyor network of the practice. Fluency in the map is what earned her the standing to challenge it later.',
      situations: [
        {
          if: 'you are new to a formal institution and unsure how to address people',
          then: 'Confirm the preferred form of address for each senior you will meet, in writing and before the event, and use it until invited otherwise. The question costs one sentence; the wrong guess costs the whole evening.',
        },
        {
          if: 'you are about to sit down at a dinner or meeting with seniors',
          then: 'Leave the head of the table and the seat to the right of the host for others and take the modest seat. Let the ranking person frame the topic, then make your first contribution; it lands better third than first.',
        },
        {
          if: 'you think protocol is theatre and want to show independence by ignoring it',
          then: 'Learn the conventions until they are boring first. To the room, ignoring the map reads as not knowing it, and fluency is what earns the standing to challenge the forms later, from a seat people listen to.',
        },
      ],
    },
    9: {
      case: 'Tomas, 23, a consulting intern, survived his first client dinner by instinct and it barely worked: he reached across a guest for the water, ordered the priciest steak while the director ordered a salad, and finished his main course well before the client had cut hers. A friend in the firm gave him the one-sitting syllabus before dinner number two: napkin on the lap at seating and on the chair seat if you leave, cutlery from the outside in, pace to the host and never ahead, order mid-priced and nothing messy, pass to the right and ask rather than stretch. At the second dinner the director talked to him through dessert about the engagement itself, and the partner later told the staffing team he carries himself well. When Tomas hosted the team lunch the next month, he arranged payment quietly in advance, because whoever invites, pays. He still checks which glass is his by looking left; the syllabus forgives that.',
      situations: [
        {
          if: 'you have an interview or client meal coming and your table habits are purely home habits',
          then: 'Eat one meal per day this week with full formal attention: napkin on the lap, cutlery outside in, pacing never ahead of the host, no phone. Then order mid-priced and nothing messy on the day, and follow the host on courses and drinks.',
        },
        {
          if: 'you are hosting the meal',
          then: 'Decide you are paying in advance and settle it quietly with the restaurant or at the bar, because whoever invites, pays. The job of the guest is thanks within 24 hours in writing; the check should never appear as theatre at the table.',
        },
        {
          if: 'you are the guest and the bill lands in the middle',
          then: 'Do not wrestle for the card; your move is the written thank-you within 24 hours naming the meal and the conversation. If the host insisted you attend, the debt is gratitude, not currency.',
        },
      ],
    },
    10: {
      case: 'Amara, 31, new to Manchester, threw a 15-person open house in her first month and got three simultaneous conversations, two guests who never spoke to her, and no follow-ups. For attempt two she invited five people at least five days ahead, each invitation carrying a personal line: I asked you because you both left jobs this year and are figuring out what is next. When guests arrived she stated the one-sentence purpose, why these people, in this room, tonight, opened with one question asked to everyone, and protected one peak: the daal she had actually cooked and the story she specifically asked Jonas to tell about his failed restaurant. She ended with a closing round, one sentence each, and named the next date. Three of the five became recurring friends; weeks later two guests independently mentioned the closing round, which told her exactly what the peak-end memory had kept.',
      situations: [
        {
          if: 'your gatherings dissolve into small talk and nobody ever follows up',
          then: 'State a one-sentence purpose when guests arrive (why these people, in this room, tonight) and end with a closing round, one sentence each. People recall the peak and the ending, so a deliberate last five minutes is most of the memory.',
        },
        {
          if: 'you have a small flat, no budget and no cooking confidence',
          then: 'Invite four to six people five days out, each with a personal line naming why you want them there, and serve one dish you can make in under 30 minutes. Guests remember structure, not silver; spend your effort on the list and the opening question, not the wine.',
        },
        {
          if: 'your last party was fine and utterly forgettable',
          then: 'Plan one peak before the night: the dish you actually cooked, the story you ask a specific guest to tell, or the introduction between two guests who need each other. One strong moment plus one clean ending outperforms an evening of default.',
        },
      ],
    },
    11: {
      case: 'Ingrid, 24, the most junior person at her shipping firm, was seated next to a 74-year-old former director at the anniversary dinner and decided against the weather. She opened with how did you get into your line of work, held a 2:1 listening ratio, and when he paused mid-story about the container strikes of the 1970s she let the silence sit and asked what happened next instead of switching topics. She left on time with a clear close, saying she had taken more of his time than she meant to and would love the rest of the story another day. Within the week she sent him an article on the old Baltic route he had mentioned, with a one-line question it raised. He replied with four paragraphs, invited her to lunch, and two months later made the calls that put her name into the Asia desk rotation. One real question about his work had outperformed ten safe ones.',
      situations: [
        {
          if: 'you are seated next to someone twenty-plus years older at a dinner or event',
          then: 'Open with a name and one specific question: how did you get into your line of work, or what was the world like when you started. Hold a 2:1 listening ratio and ask what happened next before offering anything about yourself.',
        },
        {
          if: 'the conversation pauses and you feel the urge to fill the gap',
          then: 'Treat the silence as processing, not a failure, and ask a follow-up (what was that like?) instead of switching topics. Older listeners narrow toward meaningful exchange, so depth on one thread beats ten safe ones.',
        },
        {
          if: 'the exchange went well and you want it to become a relationship',
          then: 'Exit on time with a clear close, then within a week send one specific thing the conversation earned: an article on their old industry or a question their story raised. The follow-up converts a pleasant chat into a standing contact.',
        },
      ],
    },
    12: {
      case: 'Nadia, 28, owed a retired engineer three Saturdays of his time after he reviewed her portfolio drafts, and her instinct was a text with a thumbs-up emoji. Instead she bought the stamps she kept in a bulk box and wrote five sentences by hand: the specific act (he rebuilt her project page layout), what it changed (two interview callbacks), and no ask at the end. She had predicted the note would land as awkward and almost did not send it; her forecast, as the research says senders forecast, was wrong. Two months later, meeting at an industry evening, he mentioned the note was still pinned above his desk and offered to review her next round unprompted. Her Sunday routine now clears a running list of people owed thanks to zero, and substantive messages get a reply within 24 hours even when the full answer takes days. Paper carried what a like cannot: cost, effort, and the ability to be kept.',
      situations: [
        {
          if: 'someone did something significant for you this month and you only sent a text',
          then: 'Write five sentences on paper within 48 hours: the specific act, what it changed for you, and no ask. Senders consistently mispredict how awkward it will feel; recipients report being moved, sometimes for weeks.',
        },
        {
          if: 'you never have stamps or cards when the occasion arrives',
          then: 'Buy stamps and cards in bulk this week so friction is never the reason a note goes unsent, and keep one running list of people owed thanks. Clear the list to zero every Sunday; the system, not the sentiment, is what people actually lack.',
        },
        {
          if: 'your substantive replies sit unanswered for days',
          then: 'Route by channel and answer every substantive message within 24 hours, even if only to set the date of the full answer. Paper for thanks, condolences and requests for help; email for logistics; never a like for a favor.',
        },
      ],
    },
  },
};
