export const cases = {
  entries: {
    1: {
      case: 'Julian, 22, a third-year history student at university, attended every seminar, wrote everything down and said almost nothing, then scored mid-band while louder coursemates scored higher. He and four coursemates formed their own table: one agreed text each session, read fully beforehand, the chair rotating every fifteen minutes with instructions to call on silent voices by name, and the base rule that nobody spoke twice before everybody once. At his first session he tracked his own airtime with tick marks and found he had spoken for a fifth of the hour, which meant he had been attending a lecture with furniture. By the fourth week he was locating claims in the text by page and defending readings aloud, and his April essay came back with the marker\'s note, \'finally an argument of your own\'. The lesson: learning happens by producing an explanation, not by hearing the best one in the room.',
      situations: [
        {
          if: 'you attend seminars and tutorials but almost never speak',
          then: 'Join or form a table of 4 to 6 with the chair calling silent voices by name, and track your own airtime with tick marks; if you speak for less than a fifth of the session, you are in a lecture with furniture.',
        },
        {
          if: 'you dominate discussions while quieter people never get in',
          then: 'Volunteer to chair and rotate the chair every 15 minutes, enforcing the rule that nobody speaks twice before everybody once, because distributing airtime is the job, not hoarding it.',
        },
        {
          if: 'you finished formal education and have no seminar to attend',
          then: 'Run one 60-minute round table a month at work or in your reading group: one text, 4 to 6 people, chair rotating, claims located in the text before they are argued from it.',
        },
      ],
    },
    2: {
      case: 'Maya, 19, a first-year medical student, reread her notes for hours and walked into her January exam feeling fluent, then walked out knowing she had confused recognition with knowledge. Her study partner Dev became her weekly examiner: material sent 24 hours ahead, no notes allowed, 45 minutes of open questions, \'why does this follow?\', \'what would break this?\', \'where does it not apply?\'. In the first session she said \'I do not know\' nine times and wrote each one on a gaps list, closing one gap per day before the next session. Her March grade jumped two bands, but the sharper evidence was speed: questions that had taken her a minute of rummaging now came out in sentences. The lesson: live questioning finds the confusion in minutes, and the gaps list, not comfort, sets the agenda.',
      situations: [
        {
          if: 'you study alone and written feedback takes weeks to arrive',
          then: 'Recruit one partner as a weekly examiner: material 24 hours ahead, no notes in the room, 45 minutes of open questions answered aloud, because a tutor who questions beats a marker who comments.',
        },
        {
          if: 'you freeze when questioned and start improvising around the hole',
          then: 'Say \'I do not know\' out loud and write it on a gaps list on the spot, then close one gap per day; the list sets the agenda, not the wish to look finished.',
        },
        {
          if: 'you cannot find anyone willing to examine you weekly',
          then: 'Prepare a set of open questions and a camera: answer aloud, keep the written gaps list, and on day seven have the questions you failed re-asked, because the re-ask is the actual lesson.',
        },
      ],
    },
    3: {
      case: 'Peter, 28, a graduate student in economics, could argue only what he believed and only until heat took over, which a job-talk panel noticed before he did. He picked the motion he found most wrong, that rent control should expand nationwide, and built its strongest case: three arguments, each with one piece of evidence, plus the rebuttal he expected and a one-sentence answer to it. Tuesday through Friday he argued it aloud for five minutes daily against his camera, adding one missing piece of evidence each day, and on day seven he argued the opposite side and listed which of his own points he could not support. The list, four items long, became his reading for the following week. At his May job talk the hostile question came from a branch he had already rehearsed, and he answered it in two sentences with a citation. The lesson: the skill is preparing your opponent\'s case better than they do, and heat is usually a tell.',
      situations: [
        {
          if: 'your arguments collapse the moment someone pushes back',
          then: 'Write the five questions an opponent would ask and answer each aloud in one sentence before your next real debate, then keep the list of points you could not support as your reading.',
        },
        {
          if: 'you only ever defend positions you already hold',
          then: 'Take a motion you privately reject and build its strongest case, three arguments with evidence each, then deliver both sides of the motion in five minutes total, timed.',
        },
        {
          if: 'you argue from feeling and notice voices rising when evidence runs out',
          then: 'Argue the motion daily this week against a person or camera and add one piece of missing evidence per day, because quiet rooms with prepared evidence beat loud rooms with strong feelings.',
        },
      ],
    },
    4: {
      case: 'Soraya, 31, an accountant in Toronto, had bounced off The Wealth of Nations twice, each attempt dying somewhere in Book I with a bookmark as the tombstone. Her colleague Daniel owned the same book, so they agreed the deal in writing: 40 pages a week, one 45-minute discussion every Sunday at 4, arriving with one question and one objection, summaries banned, every claim traceable to a page number. The first session was awkward and slow; by the fourth, Soraya was defending a reading of the division-of-labor passages against Daniel\'s objection and rereading to settle it. They finished the book in fourteen weeks, which the previous two attempts had never approached past chapter three, and the pact moved on to a second hard book in October. The lesson: difficulty plus company converts intention into a standing deadline, and a dead pace is worse than a hard book.',
      situations: [
        {
          if: 'you have bounced off the same hard book twice',
          then: 'Buy two copies, recruit one partner, and agree the pace in writing: 40 pages a week, one 45-minute discussion on a fixed day and time, because effortful processing plus a standing deadline is what finishes it.',
        },
        {
          if: 'your book club has drifted into chat and wine with the book optional',
          then: 'Impose the working rules: summaries banned, arrive with one question and one objection, and every claim gets a page number before it is argued from.',
        },
        {
          if: 'your reading partner keeps missing the weekly pace',
          then: 'Apply the rule you agreed: miss the pace twice and the pairing ends, because a dead pace is worse than a hard book, and replace the partner before the schedule dies with them.',
        },
      ],
    },
    5: {
      case: 'Daniel, 24, a junior policy analyst in Ottawa, read six reports a week and could not write two paragraphs that committed to anything, which his manager noticed before he did. He started writing two timed essays weekly, on Tuesday and Friday: 750 words in 60 minutes, argument first, no notes open, one claim per paragraph with the first sentence stating it and the rest supporting it. The first essay stalled at minute twelve with a paragraph he could not finish, and he marked the unsupported sentences in red exactly where his fluency broke. Those marked sentences became a reading list, three gaps closed before Sunday, and his second essay that week argued a position he had spent a month dodging. By the next review cycle his two-page memos were being forwarded unedited. The lesson: writing is the procedure by which you find out, and the stall is the finding.',
      situations: [
        {
          if: 'you feel you understand a topic but cannot write about it',
          then: 'Write 750 words in 60 minutes on a question you cannot answer, argument first, no notes open; the stall is not failure, it is the coordinates of your next reading session.',
        },
        {
          if: 'your essays and memos read like summaries of other people',
          then: 'Enforce one claim per paragraph, stated in the first sentence and supported by the rest, with each paragraph linked to the previous one in its opening line, such as \'that depends on...\' or \'the objection to this is...\'.',
        },
        {
          if: 'you never know what to read next or whether reading is doing anything',
          then: 'Mark every unsupported sentence immediately after each timed essay and convert them into a reading list, closing at least three gaps before the next one, then judge the week by what you wrote, not what you read.',
        },
      ],
    },
    6: {
      case: 'Beth, 47, an editor in Melbourne, had a decade of highlighted books and could retrieve almost nothing from them on demand. She opened one dedicated notebook in March and imposed the old discipline: two entries a day maximum, each passage copied with its source, a topic tag, and one line on why it earned the space. Before adding anything new she reread the last ten entries, and on Sundays she picked three and wrote one sentence on what each had changed in her thinking. The cap did the unexpected work: choosing between two candidates forced her to notice that half of what she highlighted was applause rather than material. By September the book held 180 addressed entries, her index put \'constraint, creativity\' three seconds away, and her own drafts quoted the notebook weekly. The lesson: copy everything and you have built a warehouse; copy the best, addressed and revisited, and you have built a memory.',
      situations: [
        {
          if: 'you highlight and copy everything and remember none of it',
          then: 'Cap entries at two a day, each with a source, a topic tag and a one-line reason, because the cap forces the selection that transcription skips.',
        },
        {
          if: 'your notes pile up in one unfindable stream',
          then: 'Index every entry by topic or alphabetically the day you write it, since retrieval depends on the address and not the box, and reread the last ten entries before each new one.',
        },
        {
          if: 'you started a notebook but never go back to it',
          then: 'Make Sunday\'s review the habit: pick three entries and write one sentence each on what they changed in your thinking, then merge or drop your two weakest tags, because the book gets sharper by subtraction.',
        },
      ],
    },
    7: {
      case: 'Ahmed, 39, a surgeon in Doha, took up Latin with a beginner primer and an answer key, attracted less by side-effect promises than by the honesty of parsing with no native intuition to lean on. He worked 15 minutes daily: five sentences translated, every one checked against the key the same day, and parsed aloud first, verb, subject and object named before any word of translation. His error log kept two columns, what he wrote and what the rule actually was, and by day seven the repeats were plain, the ablative absolute doing most of the damage. He retranslated his three worst sentences and closed that pattern within the second week, and he made no claims about vocabulary transfer because the evidence, as he had read, was modest and selection-confounded. The lesson: the defensible value is the parsing discipline itself, so study it for the explicitness, not the promised side effects.',
      situations: [
        {
          if: 'you want precision training and distrust grandiose transfer claims',
          then: 'Choose one dead language and one primer with an answer key, work 15 minutes daily, five sentences checked the same day, and judge the practice by your error log rather than by promised side effects.',
        },
        {
          if: 'you translate by feel and get caught out whenever the structure is unfamiliar',
          then: 'Parse aloud before translating: name the verb, the subject and the object first, because the omitted subject and the misplaced modifier are exactly where intuition fails.',
        },
        {
          if: 'you keep making the same grammatical mistakes in any language you study',
          then: 'Keep an error log with two columns, what you wrote and what the rule actually was, then on day seven retranslate your three worst sentences and focus the next week only on the repeating patterns.',
        },
      ],
    },
    8: {
      case: 'Chloe, 29, a nurse in Birmingham, had restarted French four times with apps, grammar tables and abandoned workbooks, and could order coffee in three registers and say nothing else. In January she took a placement test, set her input one level up with graded readers and French-subtitled shows, and split her half hour: 30 minutes of input, 10 minutes of speaking aloud even badly, self-narrating the kettle and the bus, and 2 minutes shadowing native audio. She tracked three ticks on one calendar line and never allowed two zero days in a row. On day seven she watched a piece one level above Monday\'s material and summarized it in five sentences without a dictionary, then added the eleven words she lacked to her top-1,000 deck. By June she was handling nurse handovers with francophone colleagues, roughly 200 accumulated hours after the restart. The lesson: adults lack immersion hours, not capacity, and scheduling replaces immersion.',
      situations: [
        {
          if: 'you keep restarting a language and stalling within weeks',
          then: 'Take a placement test once, set input one level up with graded readers or target-language subtitles, and track three daily ticks on one calendar line: input, speaking, shadowing; never two zero days in a row.',
        },
        {
          if: 'you know plenty of grammar but cannot produce a sentence under pressure',
          then: 'Speak ten minutes daily even badly, self-narrating what you are doing, \'I am making coffee; the kettle is loud\', or booking one tutor exchange, because daily bad speaking beats weekly correct study.',
        },
        {
          if: 'you are past beginner and have plateaued',
          then: 'Check the fundamentals: if you look up every third word you are a level too high, so drop down, test the top 1,000 word families daily, and shadow two minutes of native audio to move the pronunciation off your attention budget.',
        },
      ],
    },
    9: {
      case: 'Felix, 20, a second-year engineering student, reread and highlighted his way to a January exam and scored 58, confident the whole walk in. His tutor made him flip the method: on Monday he converted his notes into 20 questions, then tested twice daily for 15 minutes with the notes in another room and answers written down, not recalled in his head. The uncomfortable pause before each answer was the mechanism, and checking only after answering exposed how much of his familiarity was on the page rather than in him. His know, half and failed piles resorted daily, failed items tested twice the next day, and his Friday full-test score climbed from 45 percent to 80. On the March paper he scored 74, and he reread only the questions he had failed at least twice, never the whole set. The lesson: rereading builds fluency on the page, and only retrieval builds the kind you are examined on.',
      situations: [
        {
          if: 'you reread and highlight before exams and feel prepared until the paper opens',
          then: 'Convert your notes into 20 questions on Monday and test in writing twice daily with the notes in another room, checking answers only after you have written them.',
        },
        {
          if: 'testing feels awful and rereading feels good',
          then: 'Trust the discomfort as the mechanism: the rereaders in the classic study felt more confident and recalled about 40 percent against the testers\' 60 after one week, so sort questions into know, half and failed and let the failed pile set tomorrow.',
        },
        {
          if: 'you test yourself already but keep failing the same items',
          then: 'Test the failed questions twice the next day and reread only what you have failed at least twice, since rereading everything is the old habit wearing a costume.',
        },
      ],
    },
    10: {
      case: 'Hana, 26, a pharmacist in Seoul preparing for her licensure exam, studied in night-before stacks and relearned the same material every month like a stranger. She ran the demonstration on herself: 30 facts on one deck, learned on day 1, reviewed on day 3, tested closed-book on day 7, plus a control set of 10 facts she crammed only on day 6. On day 7 the spaced set scored 83 percent while the crammed set scored 55, a gap she could feel in the retrieval speed as much as see on the page. Every failed item restarted at day 1 with intervals doubling as they survived, 7 days becoming 14, then 30, and the exam sat 30 days out so her gap landed around day 3 to 6. She passed in June with the pharmacology section, her old weakness, her strongest. The lesson: same hours, spread at growing intervals, is what survives the month, and cramming sets the decay curve you will pay for.',
      situations: [
        {
          if: 'you cram the night before and forget everything by next week',
          then: 'Spend the same hours on days 1, 3 and 7 instead, testing closed book first and checking after, because the meta-analysis found spacing beating massing in essentially every comparison.',
        },
        {
          if: 'you never know how far apart your reviews should be',
          then: 'Scale the gap to the horizon: for an exam 30 days out, review around day 3 to 6, and double every interval an item survives, 7 days becoming 14, then 30.',
        },
        {
          if: 'your material is a mountain and a schedule looks impossible',
          then: 'Pick 30 facts on one deck and run the cycle, restarting failures at day 1, and reserve cramming strictly for the morning of the thing, never the month before it.',
        },
      ],
    },
    11: {
      case: 'Ivan, 20, a second-year mathematics undergraduate in Krakow, practiced integration problems in blocks of thirty and froze on the exam whenever two techniques appeared in one question. His tutor converted one weekly session to interleaved practice: twelve problems, minimum three types including last week\'s material, and the method named aloud before each solve. The first interleaved session scored worse than his blocked sessions and felt humiliating, exactly as promised, because he now had to select the method before executing it. He logged accuracy anyway, kept one blocked session a week for pure technique work, and retested the same mixed set seven days later. The ordering flipped: 74 against his old 42 on delayed testing, and the May exam held no question type he had not already had to choose under pressure. The lesson: if your practice always tells you the method, it is not testing you.',
      situations: [
        {
          if: 'you drill one problem type until it is perfect and then fail mixed questions',
          then: 'Rearrange practice so no two consecutive problems use the same method and mix at least three types per session, including last week\'s material.',
        },
        {
          if: 'interleaved practice feels worse and slower than your normal blocked sessions',
          then: 'Expect that and log accuracy anyway: the session feels worse because identification is being trained, and the retest of the same mixed set a week later is where the ordering flips.',
        },
        {
          if: 'you always know which formula applies before finishing reading the question',
          then: 'Keep one blocked session for pure technique work, then interleave it a week later with the method named aloud before each solve, because the selection step is the skill the exam actually buys.',
        },
      ],
    },
    12: {
      case: 'Tess, 33, a data scientist in Amsterdam, could build the models and could not explain them, which every stakeholder meeting made obvious. She imposed the 200-word test on herself: one concept a day, explained in plain words to a smart 12-year-old, jargon banned, every term defined inside the text. Her p-value explanation stalled at exactly the sentence where the fluency broke, \'we compare this number to a distribution and...\'; she marked the stall, read only on that gap, and rewrote the sentence with an analogy and its break, \'this is like a coin looking unusual, except we measure how unusual\'. On day seven she explained one concept aloud to an actual product manager, whose three questions she could not answer on the spot and wrote down. The lesson: understanding is not the feeling you have while reading; the stall grades you and its coordinates are your next reading session.',
      situations: [
        {
          if: 'you can use a concept but cannot explain it to a non-specialist',
          then: 'Write 200 words to a smart 12-year-old with jargon banned and every term defined inside the text, then mark the exact sentence where you stall and read only on that gap.',
        },
        {
          if: 'your explanations lose people in the first thirty seconds',
          then: 'Use one analogy and then break it, \'this is like X, except Y\', and read the final version aloud, because if it bores you it is probably clear enough to survive.',
        },
        {
          if: 'you want to find out what you actually do not know before someone else finds out for you',
          then: 'Run seven concepts through the 200-word test this week, pick the weakest one, and explain it aloud to a real person; their unanswerable questions are the audit.',
        },
      ],
    },
    13: {
      case: 'Leo, 21, a third-year accounting student in Sydney, knew his audit material cold and still lost 18 marks on the February paper to format: overruns, unanswered parts, keywords the scheme wanted that he never wrote. He sat one full past paper under strict time before studying further, then marked it with the official scheme and circled every mark lost to timing, misread questions and missing scheme language. The single worst question, a 12-marker he had abandoned at minute forty, he redid until it earned full marks. He built a one-page sheet of mark-earning phrases lifted straight from the scheme\'s wording, drilled one minute per mark, and practiced abandoning a question at the bell. On the June paper, same knowledge, his score rose from 64 to 81. The lesson: exams pay for knowledge delivered in the required format, on the clock, in the scheme\'s language.',
      situations: [
        {
          if: 'you know the material but keep underperforming on the actual exam',
          then: 'Sit one full past paper under strict time before studying further, mark it with the official scheme, and circle every mark lost to format rather than knowledge.',
        },
        {
          if: 'you always run out of time with questions left untouched',
          then: 'Allocate one minute per mark and practice abandoning a question at the bell, then retake only your worst-paced section and compare minutes spent per question.',
        },
        {
          if: 'your answers feel right but earn half marks',
          then: 'Build a one-page sheet of the scheme\'s mark-earning phrases, redo your weakest question until it hits full marks, and in the final week run schemes only.',
        },
      ],
    },
    14: {
      case: 'Gloria, 44, a nurse doing a part-time management degree in Glasgow, studied when she could, which meant a heroic Sunday that collapsed every second weekend. In February she rebuilt the day instead of the motivation: five recurring 90-minute calendar appointments, Monday through Friday at 19:00, each written as an if-then plan, \'if it is 19:00 on a weekday, then I am at the desk with the first task chosen\'. Tomorrow\'s first task went on paper each night, and the log after each period recorded one line, started on time or not, and what pulled her off. She never allowed two missed days in a row, and the ticks on paper did what eight years of good intentions had not: 21 of 25 periods completed in the first month. Her coursework, which had been chasing deadlines since October, was back on schedule by the April break. The lesson: manage the day and the mood stops mattering, and the timetable is furniture you rebuild in an evening.',
      situations: [
        {
          if: 'you only study when you feel like it and the feeling rarely comes',
          then: 'Fix five 90-minute periods as recurring calendar appointments at the same hour Monday to Friday, and write tomorrow\'s first task tonight in writing, because the first ten minutes decide the session.',
        },
        {
          if: 'you get to the desk and then negotiate with yourself about starting',
          then: 'Write each period as an if-then plan, \'if it is 19:00 on a weekday, then I am at the desk with the first task chosen\', since pre-committed plans outperform intention by about two-thirds of a standard deviation.',
        },
        {
          if: 'you cram everything into one weekend marathon that keeps collapsing',
          then: 'Split it into five 90-minute periods, tracking a tick per completed period and never two missed days in a row, because each start is a habit rep and each finish is a win on the log.',
        },
      ],
    },
    15: {
      case: 'Nathan, 23, a junior analyst in Leeds studying for a professional qualification at his kitchen table, also ate, gamed and napped there, and his sessions started late and died early. He claimed one corner desk as study-only, kept its surface to three objects, current task, timer, water, and routed his phone to the hallway for every session. Midweek he ran the A/B honestly: one session with the phone on the desk started 23 minutes late and ran 40; the next with the phone in the hallway started on time and ran the full 90. When focus broke he stood up and left the desk for five minutes, protecting the association between the surface and working. His hardest module, which he had failed once in autumn, went to the library instead, where other people visibly working were the enforcement, and he passed it in May. The lesson: discipline is partly geography, and context effects on starting are not modest.',
      situations: [
        {
          if: 'your study desk is also where you eat, game and relax',
          then: 'Claim one study-only surface tonight and keep it to three objects, the current task, a timer and water, because a mixed-use space keeps the starting decision alive every day.',
        },
        {
          if: 'you break focus mid-session and try to force your way through at the same desk',
          then: 'Stand up and leave the desk for five minutes when focus breaks, so the desk stays associated with working rather than becoming the place you sit and drift.',
        },
        {
          if: 'you skip the sessions you study at home',
          then: 'Move those exact sessions to a library or quiet cafe, where other people visibly working are the enforcement, and run one A/B week with the phone on the desk versus in another room before deciding which configuration to hard-fix.',
        },
      ],
    },
  },
};
