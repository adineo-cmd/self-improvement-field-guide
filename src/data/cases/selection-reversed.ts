// Case-study enrichment for the Selection, Reversed chapter (Part II, entries keyed by num).

export const cases = {
  entries: {
    1: {
      case: 'Jack, 26, a product designer, was rejected from fourteen roles in 2024 with a portfolio that said passionate about user research and showed moodboards. After reading how selection actually scores candidates, he audited what a stranger could inspect: almost nothing. He rebuilt the record so every claimed ability had an artifact viewable in five minutes: a research report with the method and sample size, a before-and-after redesign with task completion up 18 percent, a usability test script and its findings. Everything sat behind one page, one link and one folder, in that order. On the next cycle, 4 of 11 applications reached interview, and in two of them the panel was visibly reading his link live. Confidence had never been his problem; scoreability was.',
      situations: [
        {
          if: 'your application says passionate about anything',
          then: 'Convert every claimed ability into one inspectable artifact this week: a finished project, a score, a documented result with a number. A stranger must be able to verify it in five minutes or it does not count as evidence.',
        },
        {
          if: 'your evidence exists but is scattered across old drives, inboxes and dead links',
          then: 'Assemble one page, one link and one folder, in that order, with the strongest artifact first. Selectors spend minutes on a file; make the five-minute version of you the one they find.',
        },
        {
          if: 'you are months from a decision point and keep postponing the audit',
          then: 'Run the two-column audit now: every claim you would make about yourself in column one, its artifact in column two, and start or finish one artifact per day for the two most important blanks. On Sunday, rerun the list and count filled rows.',
        },
      ],
    },
    2: {
      case: 'Theo, 24, applied to a selective analyst program with a CV of mild competence in ten areas and was not shortlisted. He rewrote himself around one spike with a number, rank 31 of 400 entrants in a national forecasting competition, and scheduled three deep-practice hours weekly with a named reviewer, a senior analyst who marked his weekly prediction journal. He kept one deliberate-range slot, 60 minutes a week on behavioral economics, because a spike with no range breaks when the target shifts. He cut two activities that were neither spike nor range, including a committee seat he held out of habit. The next cycle he was shortlisted, and the honest ledger read: his rank moved from 31 to 12, a real gain, not a miracle, since deliberate practice explains a meaningful but partial share of performance. Depth is rare and breadth is common; selectors rank within pools.',
      situations: [
        {
          if: 'your CV reads as mild competence in ten areas',
          then: 'Name the spike in one sentence with the number that proves it to a stranger (top X percent by measure Y, not passionate about X), then schedule three deep-practice hours weekly with a named feedback loop. Cut one activity this season that is neither spike nor range.',
        },
        {
          if: 'you have a spike but the number has stopped moving',
          then: 'Re-test the claim quarterly; if the number did not move, change the method before the goal. Keep one 60-minute weekly range slot in an adjacent field so a target shift does not break you.',
        },
        {
          if: 'you are early and cannot choose a spike yet',
          then: 'Sample deliberately first: one adjacent field taken seriously for 60 minutes a week until the choice is informed. The order is sample, then commit, then protect the deep hours; reversing it is how people commit to spikes they never had.',
        },
      ],
    },
    3: {
      case: 'Naomi, 27, spent a trial day at a strategy consultancy alongside five other candidates. Mid-morning the evaluator told her that her stakeholder summary buried the decision under process detail; she said thank you, let me try that, with no counter-argument, and redid the summary in the afternoon leading with the recommendation. At the end she asked the one question that mattered: which single change would most improve this? She kept a two-column correction log (what was said, what she did) and brought it to the final interview, where she showed the applied change from the morning. Another strong candidate had defended his first version point by point and was not taken. The offer letter arrived the following week, and the debrief note from the evaluator said one thing: applied feedback within the hour.',
      situations: [
        {
          if: 'you are in a trial day, audition or probation period',
          then: 'After every evaluated session ask one specific question: which single change would most improve this? Then show the same evaluator the applied change next time; naming it out loud doubles the lesson and makes the trait visible.',
        },
        {
          if: 'you feel the counter-argument forming while someone critiques you',
          then: 'Say thank you, let me try that, and hold all counter-arguments until you have tried it once. Selectors watch for defensive silence too, but litigating live is the faster disqualifier.',
        },
        {
          if: 'your current reviewers are all kind to you',
          then: 'Seek feedback from the hardest source available, the evaluator who marks toughest, because selectors probe against pressure. Log every correction in two columns (what was said, what you did) and bring the log to the next review.',
        },
      ],
    },
    4: {
      case: 'Elias, 25, targeted a competitive international fellowship with a decision point twenty-six months out. At T-24 he began the long-burn project: an annual field survey run with a local NGO, with dated milestones and a director who would remember both. At T-12 he pruned everything not feeding the record, concentrating on two proof points (the survey and a short published data note) and one recommender relationship, cultivated over seasons rather than requested by email. At T-3 he froze scope: no new activities, only weekly timed rehearsals of the written exam and the interview against the published criteria. His friend sprinted in the final three months with a rushed internship and a generic letter, and missed. Elias passed at the first attempt, and the interviewers spent ten of their thirty minutes on the survey; the runway, invisible to competitors until it was unbeatable, had done its work.',
      situations: [
        {
          if: 'your decision point is two years away and it feels like endless time',
          then: 'Write the decision point and its date on one line today, and start the long-burn project this week with dated milestones and one person who will remember it. Keep the three dated lists (T-24, T-12, T-3) where you plan the week.',
        },
        {
          if: 'you are one year out and spread across six activities',
          then: 'Prune everything not feeding the record: concentrate on two or three proof points and one recommender relationship. Records need years; seasons of concentration are what make the years count.',
        },
        {
          if: 'you are three months out and tempted to add one more credential',
          then: 'Freeze scope and run weekly timed rehearsals of the instruments against the published criteria instead. By now the record is fixed; the last month is rehearsal, sleep and rereading your own file so the story is consistent.',
        },
      ],
    },
    5: {
      case: 'Farah, 31, a career-changer interviewing for project-management roles, charmed her first unstructured interview and lost it: I am a strong communicator, she said, and the panel had nothing to score. She rebuilt with structure: six stories, each with situation, action, result and a number (vendor onboarding cut from 21 days to 9; a rescue project delivered two weeks late but 15 percent under budget), each rehearsed aloud twice in 60-second and two-minute versions. She recorded one full mock on video and scored herself 3 for structure; the second recording scored 5. The next interview was panel-format with anchored scoring, and every answer she gave was a dated example with a result. The offer came with feedback citing concrete examples, and at the informal lunch beforehand she had still imposed her structure gently, answering even the casual questions with dated anecdotes. Charm wins unstructured chats; evidence wins the ones that count.',
      situations: [
        {
          if: 'your next interview is a structured panel with scoring criteria',
          then: 'Build six stories with situation, action, result and a number, write the 60-second and two-minute versions of each, and rehearse aloud, timed, twice per story. Panels award points per anchored criterion; a specific story scores where a polished generality cannot.',
        },
        {
          if: 'the interview is an unstructured chat that feels like conversation',
          then: 'Impose structure yourself: answer every question with a dated example and a result, never a trait claim. Prepare three questions that only a serious candidate would ask, and ask them.',
        },
        {
          if: 'you are two weeks out and your stories are still bullet points',
          then: 'Record one full mock on video and score yourself 1 to 5 for structure and evidence, then re-record after fixes. Replace any story with no number in it before the date; an uncounted story is an unscored answer.',
        },
      ],
    },
    6: {
      case: 'Mina, 22, applying for a public-health fellowship, first drafted the essay everyone writes: I have always been passionate about health equity. Her second draft started in one dated scene: March 2023, a 40-bed ward where she volunteered, a stockroom ledger that double-counted supplies, and her own failure, a mis-entered batch that took a weekend to trace. The rewrite carried the instruments every 100 words needed: one number, one date, one named place, and the counted result (discrepancy rate down from 6 percent to under 1). A reader marked four abstract sentences; she cut or grounded each one, and read the final version aloud to check she would say it to someone who knew her. She was shortlisted, and at interview the panel quoted her ledger sentence back to her. Small true stories with numbers survive the shortlist meeting; mission statements do not.',
      situations: [
        {
          if: 'your draft opens with I have always been passionate about',
          then: 'Cut the sentence and draft one page on a single dated event with real places, quantities, and one failure of yours. Grandiosity is by definition generic; a dated scene is scarce.',
        },
        {
          if: 'the essay is finished but you suspect it is forgettable',
          then: 'Hand it to one reader with the instruction: mark every sentence that could have been written by any other applicant, then cut or ground each marked one. Read the result aloud; replace anything you would not say to someone who knows you.',
        },
        {
          if: 'you are proud of a fluent, big-claims draft',
          then: 'Add the missing instruments: one number, one date and one named person or place per 100 words. Selectors cannot verify big claims and have read them all; concrete detail is harder to fake and easier to remember at the shortlist meeting.',
        },
      ],
    },
    7: {
      case: 'Henrik, 29, applying for a conservation fellowship, had to choose between a famous professor who taught him one course and a field supervisor who had watched him rebuild a survey data log and cut processing time 30 percent. He chose proximity, and built the one-page brief pack for her: their work together with dates, the numbers, and the three points she was best placed to make. He asked the direct question: would you rank me at the top of the group you have seen? The pause told him everything; he offered the exit (if you cannot rank me strongly, tell me now) and she honestly recommended a colleague who could, which he took as a result, not a rejection. The replacement referee wrote that he rebuilt the data log and processing time fell 30 percent, a sentence that corroborated the file exactly where the panel checked. A close observer with numbers beat the distant VIP he had been tempted to spend.',
      situations: [
        {
          if: 'you are choosing between a famous name and a close observer',
          then: 'Choose proximity and specificity; panels discount names they cannot verify against work. Ask the direct question, would you rank me at the top of the group you have seen, and listen to the pause before celebrating.',
        },
        {
          if: 'your referee agreed but remembers you vaguely',
          then: 'Hand over a one-page pack before they write: your record with them, dates, numbers, and the three points they are best placed to make. A referee who says she rebuilt the rota and attendance rose 20 percent corroborates; excellent candidate adds nothing.',
        },
        {
          if: 'you sense a lukewarm yes from someone you asked',
          then: 'Offer the exit explicitly: if you cannot rank me strongly, tell me now. A lukewarm letter costs more than a missing one, and the conversation itself tells you which referee to pursue next.',
        },
      ],
    },
    8: {
      case: 'Rania, 27, sat a professional licensing exam with a March date and started the honest way: a full timed practice test before studying anything. The diagnostic read 58 percent and produced a 23-item error list that became her entire syllabus. She studied 25 to 40 minutes daily, self-testing from flashcards made only of her errors, re-testing each rule at 48 hours, and ran one full timed mock each Saturday at the same clock time as the real exam. Weeks one and two wobbled, 61 then 63 percent, and the arithmetic-errors category shrank first while the interpretation category refused; the single tracking sheet showed the pattern, not the total. She scored 84 on the day. Her flatmate spent 900 on a commercial course in the same window and gained four points; Rania had spent about 15 on official past papers and a pack of index cards, running the same retrieval practice the course was selling.',
      situations: [
        {
          if: 'you do not know what to study',
          then: 'Take one full timed practice test before studying anything; the error list it produces is the syllabus. Make one flashcard per missed rule and re-test each at 48 hours.',
        },
        {
          if: 'your exam is months away and you plan weekend marathons',
          then: 'Run 25 to 40 minutes of self-testing daily instead; distributed practice beats massed study at the same total hours. Track scores and error types on one sheet and study the pattern, not the total.',
        },
        {
          if: 'you are two weeks out and tempted by new material or a pricey course',
          then: 'Rehearse only from the error sheet and the mocks, and expect modest gains from any course: tens of points, not a different result class. One full timed mock this week at the same hour of day as the real test is worth more than another textbook.',
        },
      ],
    },
    9: {
      case: 'Vera, 49, had rewritten the personal statement of her older son five years earlier, managed his deadlines from her own calendar, and watched an interviewer probe experiences that were never really his; he arrived at university less ready than his grades promised, and said so. For her daughter Wren, 17, she ran the dividing line differently: Wren owned the calendar and every draft from day one, and Vera read each document once, commenting only in margin questions (what happened here?), never in rewrites. She provided logistics without commentary, the drive to the exam center, the fee, the quiet room, the meal before the test, and funded the prep resources while refusing to fund polish she would have to write herself. Before results day she said the calm sentence she had learned late: this is one reading of one file on one day. No adult word appeared in the final documents, and Wren asked for advice more often than her brother ever had, because authorship, it turned out, was what made the support welcome.',
      situations: [
        {
          if: 'you are the parent and the draft has your sentences in it',
          then: 'Hand authorship back: read each document once, comment as margin questions (what happened here?), and hold the target of zero adult words in final documents. Selectors can often tell, and the overparenting research links heavy involvement to weaker autonomy and well-being.',
        },
        {
          if: 'you are the parent who feels useless unless doing more',
          then: 'Your four jobs are logistics, calm, resources and boundaries: the drive, the fee, the quiet room, one calm sentence before results. Run the calendar sync entirely by the applicant on a fixed day each week and check it once.',
        },
        {
          if: 'results are about to land in your household',
          then: 'Say it before the envelope opens: this is one reading of one file on one day. Afterward, ask what the applicant will change for the next decision, not what was wrong with the readers.',
        },
      ],
    },
    10: {
      case: 'Yara, 18, a first-generation applicant, received two offers with sticker prices of 38,000 and 41,000 a year and nearly chose the smaller number. The spreadsheet saved her: rows for tuition, housing, grants and loans, net price computed across four years, loans marked as negative grants on their own line. The grant from offer B, 19,000 against 10,000 from offer A, flipped the ranking by about 9,000 a year, and the aid form deadline, three weeks before admission replies, was already filed because she submitted every form the week it opened, double-flagged in the calendar. She asked each aid office the two questions: what would change my award, and does it renew automatically? The answer at B (renewal conditional on a 3.0 GPA) went into the spreadsheet as a footnote. When A came back with a 2,000 increase after her one-page appeal letter citing the number from offer B, the decision was made on paper, not on a campus-tour feeling. The unglamorous forms, filed early, had bought her the largest award in the file.',
      situations: [
        {
          if: 'your offers have similar sticker prices',
          then: 'Build the four-year net-price spreadsheet: each offer a column, rows for tuition, housing, grants, loans and net price, with loans as negative grants on their own line. Compare net prices, never sticker prices; offers with identical list prices routinely differ by thousands.',
        },
        {
          if: 'the aid forms feel distant compared with admission deadlines',
          then: 'File every aid form the week it opens, double-flagged in the same calendar as the application deadlines. A missed form costs more than any essay was worth, and awards lapse on paperwork more often than on performance.',
        },
        {
          if: 'a comparable program came in meaningfully cheaper',
          then: 'Send one polite one-page appeal letter: cite the competing number, restate your interest, and ask is there any additional aid consideration possible. Also ask each aid office: what would change my award, and does it renew automatically, under what conditions?',
        },
      ],
    },
  },
};
