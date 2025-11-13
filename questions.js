// --- Seed Questions ---
const seedQuestions = [
    { 
        id: 'q1', 
        question: '_____ his best efforts, he failed to secure the position.', 
        option_a: 'Even though', 
        option_b: 'Despite', 
        option_c: 'Yet', 
        option_d: 'In spite', 
        correct_answer: 'B', 
        explanation: 'La préposition "Despite" (malgré) est suivie d\'un groupe nominal ("his best efforts"). "Even though" (même si) est une conjonction et doit être suivie d\'une phrase complète (sujet + verbe).' 
    },
    { 
        id: 'q2', 
        question: '_____ no circumstances should the confidential documents be shared with external parties.', 
        option_a: 'In', 
        option_b: 'Through', 
        option_c: 'On', 
        option_d: 'Under', 
        correct_answer: 'D', 
        explanation: 'L\'expression idiomatique correcte est "Under no circumstances" (En aucune circonstance). Elle est toujours suivie d\'une inversion sujet-verbe ("should the documents...").' 
    },
    { 
        id: 'q3', 
        question: '_____ the software has been updated, users should notice significant improvements in performance.', 
        option_a: 'As soon as', 
        option_b: 'Unless', 
        option_c: 'Until', 
        option_d: 'Despite', 
        correct_answer: 'A', 
        explanation: '"As soon as" (dès que) introduit une condition temporelle qui déclenche l\'action principale (remarquer les améliorations).' 
    },
    { 
        id: 'q4', 
        question: 'By next month, the team _____ all the necessary preparations.', 
        option_a: 'will have completed', 
        option_b: 'completes', 
        option_c: 'had completed', 
        option_d: 'has completed', 
        correct_answer: 'A', 
        explanation: 'L\'expression "By next month" (d\'ici le mois prochain) indique une action qui sera terminée à un moment précis dans le futur. On utilise donc le Futur Antérieur (Future Perfect).' 
    },
    { 
        id: 'q5', 
        question: 'By the end of this month, the company _____ its financial targets for the quarter.', 
        option_a: 'meets', 
        option_b: 'has met', 
        option_c: 'will have met', 
        option_d: 'had met', 
        correct_answer: 'C', 
        explanation: '"By the end of this month" (d\'ici la fin de ce mois) exprime une action future terminée. On utilise le Futur Antérieur (Future Perfect).' 
    },
    { 
        id: 'q6', 
        question: 'By the time the meeting began, the participants _____ their opening statements.', 
        option_a: 'prepared', 
        option_b: 'had prepared', 
        option_c: 'will prepare', 
        option_d: 'prepare', 
        correct_answer: 'B', 
        explanation: '"By the time..." (Au moment où...) au passé indique qu\'une action (préparer) était déjà terminée avant qu\'une autre action passée (le début de la réunion) ne commence. On utilise le Plus-que-parfait (Past Perfect).' 
    },
    { 
        id: 'q7', 
        question: 'By the time the meeting started, the manager _____ reviewed the agenda.', 
        option_a: 'has', 
        option_b: 'had', 
        option_c: 'have', 
        option_d: 'will have', 
        correct_answer: 'B', 
        explanation: 'Même logique que la question précédente. L\'action de réviser était terminée avant le début de la réunion. On a besoin de l\'auxiliaire du Plus-que-parfait (Past Perfect), qui est "had".' 
    },
    { 
        id: 'q8', 
        question: 'Customers are encouraged to leave feedback _____ their dining experience.', 
        option_a: 'regarding', 
        option_b: 'regarding to', 
        option_c: 'regards', 
        option_d: 'regarding of', 
        correct_answer: 'A', 
        explanation: '"Regarding" (concernant, à propos de) est la préposition correcte. Les autres options sont grammaticalement incorrectes.' 
    },
    { 
        id: 'q9', 
        question: 'Everyone in the department is required to attend the training _____ Friday afternoon.', 
        option_a: 'at', 
        option_b: 'in', 
        option_c: 'on', 
        option_d: 'by', 
        correct_answer: 'C', 
        explanation: 'On utilise la préposition "on" devant les jours de la semaine (on Monday, on Friday) et les dates spécifiques (on July 4th).' 
    },
    { 
        id: 'q10', 
        question: 'He _____ to their new demands despite his initial reluctance.', 
        option_a: 'agreed', 
        option_b: 'agree', 
        option_c: 'agreeing', 
        option_d: 'agrees', 
        correct_answer: 'A', 
        explanation: 'La phrase décrit une action passée. "Agreed" est la forme au prétérit (passé simple) du verbe "to agree".' 
    },
    { 
        id: 'q11', 
        question: 'Only after the project was completed _____ the true extent of its success become apparent.', 
        option_a: 'did', 
        option_b: 'has', 
        option_c: 'had', 
        option_d: 'does', 
        correct_answer: 'A', 
        explanation: 'Après une expression restrictive comme "Only after" en début de phrase, on utilise une inversion auxiliaire-sujet. L\'action s\'étant produite au passé (was completed), on utilise l\'auxiliaire du passé "did".' 
    },
    { 
        id: 'q12', 
        question: 'Please ensure that all data has been entered _____ before submitting the report.', 
        option_a: 'accurate', 
        option_b: 'accurately', 
        option_c: 'accuracy', 
        option_d: 'accuracies', 
        correct_answer: 'B', 
        explanation: 'On a besoin d\'un adverbe ("accurately") pour modifier le verbe "has been entered" (a été saisi). Comment a-t-il été saisi ? "avec précision".' 
    },
    { 
        id: 'q13', 
        question: 'She _____ for the board meeting when her boss asked her to check the sales figures.', 
        option_a: 'would have prepared', 
        option_b: 'prepared', 
        option_c: 'was preparing', 
        option_d: 'has been preparing', 
        correct_answer: 'C', 
        explanation: 'On utilise le Past Continuous ("was preparing") pour décrire une action en cours dans le passé, qui a été interrompue par une autre action ponctuelle ("when her boss asked").' 
    },
    { 
        id: 'q14', 
        question: 'She turned the job offer _____ because the salary was low.', 
        option_a: 'over', 
        option_b: 'on', 
        option_c: 'down', 
        option_d: 'up', 
        correct_answer: 'C', 
        explanation: 'Le "phrasal verb" "to turn down" signifie "refuser" ou "rejeter" (une offre, une proposition).' 
    },
    { 
        id: 'q15', 
        question: 'The board insists that the report _____ reviewed carefully before submission.', 
        option_a: 'be', 
        option_b: 'is', 
        option_c: 'was', 
        option_d: 'to be', 
        correct_answer: 'A', 
        explanation: 'On utilise le subjonctif présent (verbe à la base verbale, ici "be") après des verbes de demande ou d\'insistance comme "insist that", "recommend that", "ask that".' 
    },
    { 
        id: 'q16', 
        question: 'The board members discussed the issue thoroughly; _____, they could not reach a final decision.', 
        option_a: 'therefore', 
        option_b: 'however', 
        option_c: 'so', 
        option_d: 'unless', 
        correct_answer: 'B', 
        explanation: '"However" (cependant, toutefois) est un connecteur logique qui introduit un contraste. Ils ont discuté, *mais* (cependant) ils n\'ont pas pu décider.' 
    },
    { 
        id: 'q17', 
        question: 'The building was evacuated quickly _____ a fire alarm was triggered.', 
        option_a: 'because', 
        option_b: 'although', 
        option_c: 'unless', 
        option_d: 'during', 
        correct_answer: 'A', 
        explanation: '"Because" (parce que) introduit la cause de l\'évacuation. "Although" (bien que) introduirait une contradiction.' 
    },
    { 
        id: 'q18', 
        question: 'The _____ was offering special deals on electric vehicles last weekend.', 
        option_a: 'agency', 
        option_b: 'workshop', 
        option_c: 'dealership', 
        option_d: 'warehouse', 
        correct_answer: 'C', 
        explanation: 'Un "dealership" (une concession) est l\'endroit où l\'on vend des voitures. Un "workshop" est un atelier, une "agency" une agence, et un "warehouse" un entrepôt.' 
    },
    { 
        id: 'q19', 
        question: 'The CEO _____ the announcement by emphasizing the company\'s goals for the future.', 
        option_a: 'conclude', 
        option_b: 'concludes', 
        option_c: 'concluded', 
        option_d: 'concluding', 
        correct_answer: 'C', 
        explanation: 'La phrase décrit une action passée. "Concluded" (a conclu) est la forme au prétérit (passé simple) nécessaire.' 
    },
    { 
        id: 'q20', 
        question: 'The CEO emphasized the importance of _____ with clients regularly.', 
        option_a: 'communicate', 
        option_b: 'communicates', 
        option_c: 'communicating', 
        option_d: 'communication', 
        correct_answer: 'C', 
        explanation: 'Après une préposition (ici "of"), on utilise un nom ou un gérondif (verbe en -ING). "The importance of communicating" (l\'importance de communiquer).' 
    },
    { 
        id: 'q21', 
        question: 'The client promised to approve the budget _____ it stays within their expectations.', 
        option_a: 'in order to', 
        option_b: 'as long as', 
        option_c: 'while', 
        option_d: 'unless', 
        correct_answer: 'B', 
        explanation: '"As long as" (tant que, à condition que) introduit la condition nécessaire pour que le budget soit approuvé.' 
    },
    { 
        id: 'q22', 
        question: 'The company is _____ to launch its new product line next month.', 
        option_a: 'exciting', 
        option_b: 'excite', 
        option_c: 'excitement', 
        option_d: 'excited', 
        correct_answer: 'D', 
        explanation: 'L\'adjectif "excited" (enthousiaste, impatient) décrit le sentiment ou l\'état de la compagnie. "Exciting" (enthousiasmant) décrirait le produit lui-même.' 
    },
    { 
        id: 'q23', 
        question: 'The company\'s revenue has increased steadily _____ the past three years.', 
        option_a: 'among', 
        option_b: 'through', 
        option_c: 'over', 
        option_d: 'across', 
        correct_answer: 'C', 
        explanation: 'On utilise "over" (ou "for" ou "during") pour indiquer une période de temps continue ("over the past three years" = au cours des trois dernières années).' 
    },
    { 
        id: 'q24', 
        question: 'The conference was postponed due to _____ weather conditions.', 
        option_a: 'extreme', 
        option_b: 'extremely', 
        option_c: 'extremity', 
        option_d: 'extremities', 
        correct_answer: 'A', 
        explanation: 'On a besoin d\'un adjectif ("extreme") pour modifier le nom "weather conditions" (conditions météorologiques).' 
    },
    { 
        id: 'q25', 
        question: 'The decline in profits was _____ an economic downturn.', 
        option_a: 'owing', 
        option_b: 'because', 
        option_c: 'resulted in', 
        option_d: 'due to', 
        correct_answer: 'D', 
        explanation: '"Due to" (en raison de) est une préposition qui introduit la cause, et est suivie d\'un groupe nominal ("an economic downturn"). "Because" doit être suivi d\'une phrase (sujet + verbe).' 
    },
    { 
        id: 'q26', 
        question: 'The director emphasized the importance of _____ early to avoid delays.', 
        option_a: 'arriving', 
        option_b: 'arrive', 
        option_c: 'arrived', 
        option_d: 'arrives', 
        correct_answer: 'A', 
        explanation: 'Après la préposition "of" (partie de "importance of"), on utilise un gérondif (verbe en -ING), "arriving".' 
    },
    { 
        id: 'q27', 
        question: 'The director will review the proposal _____ it is presented to the client.', 
        option_a: 'before', 
        option_b: 'since', 
        option_c: 'unless', 
        option_d: 'despite', 
        correct_answer: 'A', 
        explanation: '"Before" (avant que) établit la séquence chronologique des événements. La révision aura lieu avant la présentation.' 
    },
    { 
        id: 'q28', 
        question: 'The hotel offers a wide range of facilities, _____ a fitness center and a swimming pool.', 
        option_a: 'include', 
        option_b: 'including', 
        option_c: 'included', 
        option_d: 'includes', 
        correct_answer: 'B', 
        explanation: '"Including" (y compris, notamment) est une préposition utilisée pour introduire des exemples.' 
    },
    { 
        id: 'q29', 
        question: 'The manager asked if the report _____ ready by the following day.', 
        option_a: 'was', 
        option_b: 'will be', 
        option_c: 'would be', 
        option_d: 'would have been', 
        correct_answer: 'C', 
        explanation: 'Il s\'agit du discours indirect (reported speech). La question directe était "Will the report be ready tomorrow?". "Will" devient "would" et "tomorrow" devient "the following day".' 
    },
    { 
        id: 'q30', 
        question: 'The manager called _____ the meeting due to an emergency.', 
        option_a: 'on', 
        option_b: 'off', 
        option_c: 'over', 
        option_d: 'out', 
        correct_answer: 'B', 
        explanation: 'Le "phrasal verb" "to call off" signifie "annuler".' 
    },
    { 
        id: 'q31', 
        question: 'The marketing strategy is effective, _____ it may take time to see significant results.', 
        option_a: 'since', 
        option_b: 'yet', 
        option_c: 'although', 
        option_d: 'therefore', 
        correct_answer: 'C', 
        explanation: '"Although" (bien que) est une conjonction qui introduit un contraste. La stratégie est efficace, *bien qu*\'il faille du temps pour voir les résultats.' 
    },
    { 
        id: 'q32', 
        question: 'The marketing team is responsible _____ developing strategies to increase sales.', 
        option_a: 'of', 
        option_b: 'under', 
        option_c: 'for', 
        option_d: 'on', 
        correct_answer: 'C', 
        explanation: 'L\'expression correcte est "to be responsible for" (être responsable de), qui est suivie d\'un gérondif ("developing").' 
    },
    { 
        id: 'q33', 
        question: 'The meeting was rescheduled to a later date due to _____ circumstances.', 
        option_a: 'unforeseen', 
        option_b: 'unforeseenly', 
        option_c: 'foresee', 
        option_d: 'foreseen', 
        correct_answer: 'A', 
        explanation: 'On a besoin d\'un adjectif ("unforeseen" = imprévues) pour modifier le nom "circumstances".' 
    },
    { 
        id: 'q34', 
        question: 'The new policy aims to reduce expenses without _____ the quality of services.', 
        option_a: 'compromise', 
        option_b: 'compromising', 
        option_c: 'compromises', 
        option_d: 'compromised', 
        correct_answer: 'B', 
        explanation: 'Après une préposition (ici "without"), on utilise un gérondif (verbe en -ING), "compromising".' 
    },
    { 
        id: 'q35', 
        question: 'The new policy requires that all applications _____ in digital format only.', 
        option_a: 'are submitted', 
        option_b: 'were submitted', 
        option_c: 'be submitted', 
        option_d: 'have been submitted', 
        correct_answer: 'C', 
        explanation: 'C\'est un autre exemple du subjonctif. Après "requires that...", on utilise la base verbale (be) + participe passé (submitted) pour la voix passive.' 
    },
    { 
        id: 'q36', 
        question: 'The order should be ready _____ Tuesday.', 
        option_a: 'by', 
        option_b: 'at', 
        option_c: 'for', 
        option_d: 'in', 
        correct_answer: 'A', 
        explanation: '"By" (d\'ici) est utilisé pour indiquer une date limite (au plus tard mardi). "On" serait aussi possible si c\'était le jour exact, mais "by" est plus courant pour une "deadline".' 
    },
    { 
        id: 'q37', 
        question: 'The product is not only affordable but also _____.', 
        option_a: 'durability', 
        option_b: 'durables', 
        option_c: 'durably', 
        option_d: 'durable', 
        correct_answer: 'D', 
        explanation: 'La structure "not only... but also..." exige un parallélisme. "Affordable" est un adjectif, donc on a besoin d\'un autre adjectif, "durable".' 
    },
    { 
        id: 'q38', 
        question: 'The project team worked overtime _____ they could finish in time.', 
        option_a: 'because', 
        option_b: 'so that', 
        option_c: 'unless', 
        option_d: 'despite', 
        correct_answer: 'B', 
        explanation: '"So that" (afin que, pour que) introduit le but ou l\'objectif de l\'action (travailler plus).' 
    },
    { 
        id: 'q39', 
        question: 'The project was completed _____ the expected timeline.', 
        option_a: 'along with', 
        option_b: 'across from', 
        option_c: 'out of', 
        option_d: 'ahead of', 
        correct_answer: 'D', 
        explanation: 'L\'expression "ahead of schedule" (ou "ahead of the timeline") signifie "en avance sur le calendrier".' 
    },
    { 
        id: 'q40', 
        question: 'The sales figures declined _____ 40% last year.', 
        option_a: 'in', 
        option_b: 'by', 
        option_c: 'of', 
        option_d: 'from', 
        correct_answer: 'B', 
        explanation: 'On utilise la préposition "by" pour indiquer la marge ou l\'ampleur d\'une augmentation ou d\'une diminution ("declined by 40%" = a baissé de 40%).' 
    },
    { 
        id: 'q41', 
        question: 'The team _____ on a solution to the problem for days before presenting it.', 
        option_a: 'works', 
        option_b: 'working', 
        option_c: 'worked', 
        option_d: 'has worked', 
        correct_answer: 'C', 
        explanation: 'L\'action s\'est entièrement déroulée dans le passé ("before presenting it"). Le prétérit ("worked") est requis.' 
    },
    { 
        id: 'q42', 
        question: 'They are looking forward to _____ to their new house next month.', 
        option_a: 'move', 
        option_b: 'moving', 
        option_c: 'moved', 
        option_d: 'moves', 
        correct_answer: 'B', 
        explanation: 'L\'expression "to look forward to" est suivie d\'un gérondif (verbe en -ING). Le "to" ici est une préposition, pas un marqueur de l\'infinitif.' 
    },
    { 
        id: 'q43', 
        question: 'This is the candidate _____ excellent communication skills impressed the interviewer.', 
        option_a: 'who', 
        option_b: 'whom', 
        option_c: 'whose', 
        option_d: 'which', 
        correct_answer: 'C', 
        explanation: '"Whose" est un pronom possessif. Il indique que les "compétences" (skills) appartiennent au "candidat". (Les compétences *du candidat* ont impressionné...)' 
    },
    { 
        id: 'q44', 
        question: 'Were it not for the sudden increase in demand, the company _____ to deliver all orders on time.', 
        option_a: 'is able', 
        option_b: 'has been able', 
        option_c: 'would have been able', 
        option_d: 'will be able', 
        correct_answer: 'C', 
        explanation: '"Were it not for..." est une inversion pour le conditionnel présent (2e type), mais le contexte (livrer *à temps*) suggère une action passée. Si l\'inversion était "Had it not been for...", (3e type) la réponse (C) "would have been able" serait parfaite. C\'est un conditionnel mixte (situation présente, conséquence passée). "S\'il n\'y avait pas (maintenant)... l\'entreprise aurait été capable (passé)...".' 
    },
    { 
        id: 'q45', 
        question: 'The company hired more staff, _____ improving its production capacity.', 
        option_a: 'thus', 
        option_b: 'although', 
        option_c: 'because', 
        option_d: 'but', 
        correct_answer: 'A', 
        explanation: '"Thus" (ainsi, par conséquent) introduit le résultat ou la conséquence de l\'action (embaucher du personnel). "Thus improving" est une forme de proposition participiale.' 
    },
    { 
        id: 'q46', 
        question: 'She asked the team to _____ the issue during the meeting.', 
        option_a: 'catch on', 
        option_b: 'come up with', 
        option_c: 'call off', 
        option_d: 'bring up', 
        correct_answer: 'D', 
        explanation: 'Le "phrasal verb" "to bring up" signifie "mentionner" ou "soulever" (un sujet, un problème).' 
    },
    { 
        id: 'q47', 
        question: 'While she _____ the presentation, the projector malfunctioned.', 
        option_a: 'was delivering', 
        option_b: 'deliver', 
        option_c: 'had delivered', 
        option_d: 'delivers', 
        correct_answer: 'A', 
        explanation: 'On utilise le Past Continuous ("was delivering") pour une action en cours dans le passé, interrompue par une autre action ("the projector malfunctioned").' 
    },
    { 
        id: 'q48', 
        question: '_____ traditional energy sources, renewable energy does not produce harmful emissions.', 
        option_a: 'Unlike', 
        option_b: 'Whereas', 
        option_c: 'Although', 
        option_d: 'Despite', 
        correct_answer: 'A', 
        explanation: '"Unlike" (contrairement à) est une préposition qui établit une opposition avec un nom ("traditional... sources"). "Whereas" et "Although" sont des conjonctions (suivent un S+V).' 
    },
    { 
        id: 'q49', 
        question: 'The efficiency of the new turbine is significantly higher _____ that of its predecessor.', 
        option_a: 'as', 
        option_b: 'like', 
        option_c: 'compared', 
        option_d: 'than', 
        correct_answer: 'D', 
        explanation: 'On utilise "than" (que) après un adjectif comparatif ("higher").' 
    },
    { 
        id: 'q50', 
        question: 'The company _____ its financial goals before the end of last year.', 
        option_a: 'had achieved', 
        option_b: 'achieves', 
        option_c: 'achieving', 
        option_d: 'achieve', 
        correct_answer: 'A', 
        explanation: 'On utilise le Plus-que-parfait (Past Perfect) pour une action (atteindre les objectifs) qui a été complétée *avant* un moment spécifique dans le passé ("before the end of last year").' 
    },
    { 
        id: 'q51', 
        question: 'The company will issue a _____ to announce its new product line.', 
        option_a: 'statement', 
        option_b: 'policy', 
        option_c: 'regulation', 
        option_d: 'revision', 
        correct_answer: 'A', 
        explanation: 'Un "statement" (une déclaration, un communiqué) est une annonce officielle. C\'est le terme de vocabulaire approprié.' 
    },
    { 
        id: 'q52', 
        question: 'You will be notified of the final decision by June 1 at the _____.', 
        option_a: 'late', 
        option_b: 'latest', 
        option_c: 'lately', 
        option_d: 'later', 
        correct_answer: 'B', 
        explanation: 'L\'expression idiomatique "at the latest" signifie "au plus tard".' 
    },
    { 
        id: 'q53', 
        question: 'It is essential that the report _____ before the deadline.', 
        option_a: 'be submitted', 
        option_b: 'is submitted', 
        option_c: 'submitting', 
        option_d: 'submits', 
        correct_answer: 'A', 
        explanation: 'C\'est le subjonctif. Après "It is essential that...", on utilise la base verbale (be) + participe passé (submitted) pour la voix passive.' 
    },
    { 
        id: 'q54', 
        question: 'I am used to _____ long hours during the busy season.', 
        option_a: 'working', 
        option_b: 'work', 
        option_c: 'works', 
        option_d: 'worked', 
        correct_answer: 'A', 
        explanation: 'L\'expression "to be used to" (être habitué à) est suivie d\'un gérondif (verbe en -ING). Ne pas confondre avec "used to" (avoir l\'habitude de, au passé) qui est suivi de l\'infinitif.' 
    },
    { 
        id: 'q55', 
        question: 'You can\'t see the whole system, as _____ of it is underwater.', 
        option_a: 'much', 
        option_b: 'few', 
        option_c: 'less', 
        option_d: 'enough', 
        correct_answer: 'A', 
        explanation: '"System" est considéré comme un tout non-dénombrable. On utilise "much" (une grande partie) pour les non-dénombrables. "Few" est pour les dénombrables.' 
    },
    { 
        id: 'q56', 
        question: 'The firm revised estimates for expenditures after _____ the news that the budget would be changed.', 
        option_a: 'to receive', 
        option_b: 'receives', 
        option_c: 'receiver', 
        option_d: 'receiving', 
        correct_answer: 'D', 
        explanation: 'Après une préposition (ici "after"), on utilise un gérondif (verbe en -ING).' 
    },
    { 
        id: 'q57', 
        question: 'If they _____ the updated software, the system would work more efficiently.', 
        option_a: 'install', 
        option_b: 'installs', 
        option_c: 'installing', 
        option_d: 'installed', 
        correct_answer: 'D', 
        explanation: 'C\'est un conditionnel de type 2 (hypothèse irréelle/imaginaire). La structure est "If" + Prétérit ("installed"), ... "would" + base verbale ("work").' 
    },
    { 
        id: 'q58', 
        question: 'The more efficient the energy system becomes, _____ the cost of electricity will be.', 
        option_a: 'lower', 
        option_b: 'the lower', 
        option_c: 'lowest', 
        option_d: 'the lowest', 
        correct_answer: 'B', 
        explanation: 'C\'est une structure de double comparatif : "The more..." (Plus...), "the..." (plus/moins...). La structure est "The + comparatif ..., the + comparatif ...".' 
    },
    { 
        id: 'q59', 
        question: 'The meeting agenda _____ to all participants yesterday.', 
        option_a: 'was sent', 
        option_b: 'sends', 
        option_c: 'sending', 
        option_d: 'sent', 
        correct_answer: 'A', 
        explanation: 'Le sujet ("The meeting agenda") est passif (il ne peut pas s\'envoyer lui-même). On a besoin de la voix passive au passé (indiqué par "yesterday"), donc "was sent".' 
    },
    { 
        id: 'q60', 
        question: 'The engineer _____ design was used in the latest EV model received an award.', 
        option_a: 'whose', 
        option_b: 'who', 
        option_c: 'whom', 
        option_d: 'which', 
        correct_answer: 'A', 
        explanation: '"Whose" est un pronom possessif. Le "design" appartient à "l\'ingénieur". (L\'ingénieur *dont* le design a été utilisé...)' 
    },
    { 
        id: 'q61', 
        question: 'The project must be completed _____ the end of the month.', 
        option_a: 'at', 
        option_b: 'on', 
        option_c: 'by', 
        option_d: 'in', 
        correct_answer: 'C', 
        explanation: '"By" (d\'ici) est utilisé pour indiquer une date limite (au plus tard à la fin du mois). "At" est utilisé pour une heure précise.' 
    },
    { 
        id: 'q62', 
        question: 'Improving _____ is a key concern for EV manufacturers.', 
        option_a: 'efficient', 
        option_b: 'efficiency', 
        option_c: 'efficiently', 
        option_d: 'efficients', 
        correct_answer: 'B', 
        explanation: 'Le gérondif "Improving" (améliorer) agit comme un verbe et a besoin d\'un complément d\'objet direct, qui doit être un nom ("efficiency" = l\'efficacité).' 
    },
    { 
        id: 'q63', 
        question: 'The prototype was tested thoroughly to ensure it could operate _____ under extreme conditions.', 
        option_a: 'reliable', 
        option_b: 'reliance', 
        option_c: 'reliably', 
        option_d: 'relied', 
        correct_answer: 'C', 
        explanation: 'On a besoin d\'un adverbe ("reliably" = de manière fiable) pour modifier le verbe "operate" (fonctionner).' 
    },
    { 
        id: 'q64', 
        question: '_____ the manager arrived earlier, the meeting would have started on time.', 
        option_a: 'Had', 
        option_b: 'Would', 
        option_c: 'Will', 
        option_d: 'Were', 
        correct_answer: 'A', 
        explanation: 'C\'est une inversion du conditionnel de type 3 (hypothèse passée). La phrase normale serait "If the manager had arrived...". On peut remplacer "If" en inversant l\'auxiliaire : "Had the manager arrived...".' 
    },
    { 
        id: 'q65', 
        question: 'Our customer satisfaction rating is _____ than last quarter\'s.', 
        option_a: 'higher', 
        option_b: 'high', 
        option_c: 'highest', 
        option_d: 'highly', 
        correct_answer: 'A', 
        explanation: 'Le mot "than" (que) indique une comparaison. On a donc besoin de l\'adjectif comparatif "higher" (plus élevé).' 
    },
    { 
        id: 'q66', 
        question: 'The transition to renewable energy is progressing _____, but significant challenges remain.', 
        option_a: 'steadiness', 
        option_b: 'steady', 
        option_c: 'steadily', 
        option_d: 'steadied', 
        correct_answer: 'C', 
        explanation: 'On a besoin d\'un adverbe ("steadily" = régulièrement) pour modifier le verbe "is progressing" (progresse).' 
    },
    { 
        id: 'q67', 
        question: 'There has been a 16% increase _____ EV sales over the past six months.', 
        option_a: 'by', 
        option_b: 'on', 
        option_c: 'at', 
        option_d: 'in', 
        correct_answer: 'D', 
        explanation: 'On utilise l\'expression "an increase in" (une augmentation de/dans) suivie du nom de ce qui augmente ("sales").' 
    },
    { 
        id: 'q68', 
        question: 'I recommend that she _____ a different approach to this project.', 
        option_a: 'takes', 
        option_b: 'take', 
        option_c: 'was taking', 
        option_d: 'is taking', 
        correct_answer: 'B', 
        explanation: 'C\'est le subjonctif. Après "recommend that...", on utilise la base verbale ("take"), et non la forme conjuguée "takes".' 
    },
    { 
        id: 'q69', 
        question: 'The team is looking forward to _____ the results of the study.', 
        option_a: 'reviewing', 
        option_b: 'review', 
        option_c: 'reviewed', 
        option_d: 'reviews', 
        correct_answer: 'A', 
        explanation: 'L\'expression "to look forward to" (attendre avec impatience) est suivie d\'un gérondif (verbe en -ING).' 
    },
    { 
        id: 'q70', 
        question: 'The new policy benefits _____ employees and management by promoting sustainable practices.', 
        option_a: 'each', 
        option_b: 'both', 
        option_c: 'either', 
        option_d: 'any', 
        correct_answer: 'B', 
        explanation: 'La conjonction "and" (et) nous indique qu\'on a besoin de "both" (les deux). La structure est "both... and...".' 
    },
    { 
        id: 'q71', 
        question: '_____ the software update was delayed, the project was completed on time.', 
        option_a: 'Although', 
        option_b: 'Because', 
        option_c: 'Therefore', 
        option_d: 'Since', 
        correct_answer: 'A', 
        explanation: '"Although" (bien que) introduit une concession ou un contraste. Le retard aurait dû empêcher le projet d\'être à l\'heure, *pourtant* il l\'a été.' 
    },
    { 
        id: 'q72', 
        question: 'She has a great ability to work _____ pressure.', 
        option_a: 'under', 
        option_b: 'on', 
        option_c: 'at', 
        option_d: 'with', 
        correct_answer: 'A', 
        explanation: 'L\'expression idiomatique est "to work under pressure" (travailler sous pression).' 
    },
    { 
        id: 'q73', 
        question: 'The demand for renewable energy has grown steadily _____ the past three years.', 
        option_a: 'by', 
        option_b: 'on', 
        option_c: 'over', 
        option_d: 'through', 
        correct_answer: 'C', 
        explanation: 'On utilise "over" (ou "for") pour indiquer une durée continue ("over the past three years" = au cours des trois dernières années).' 
    },
    { 
        id: 'q74', 
        question: 'EV manufacturers are focusing on producing more vehicles to _____ customer demand.', 
        option_a: 'comply', 
        option_b: 'reach out', 
        option_c: 'meet', 
        option_d: 'relay', 
        correct_answer: 'C', 
        explanation: 'La collocation (mot qui va avec un autre) est "to meet demand" (répondre à la demande, satisfaire la demande).' 
    },
    { 
        id: 'q75', 
        question: 'We recommend _____ a government subsidy program to boost EV sales.', 
        option_a: 'creating', 
        option_b: 'create', 
        option_c: 'to create', 
        option_d: 'creates', 
        correct_answer: 'A', 
        explanation: 'Le verbe "recommend" (recommander) peut être suivi d\'un gérondif (verbe en -ING) : "We recommend creating...".' 
    },
    { 
        id: 'q76', 
        question: 'The government plans to phase _____ subsidies for renewable energy projects.', 
        option_a: 'off', 
        option_b: 'over', 
        option_c: 'under', 
        option_d: 'out', 
        correct_answer: 'D', 
        explanation: 'Le "phrasal verb" "to phase out" signifie "supprimer progressivement".' 
    },
    { 
        id: 'q77', 
        question: '_____ the design was finalized, the production of the new component began.', 
        option_a: 'Once', 
        option_b: 'Since', 
        option_c: 'Despite', 
        option_d: 'Unless', 
        correct_answer: 'A', 
        explanation: '"Once" (une fois que) est une conjonction de temps qui indique qu\'une action doit être terminée avant qu\'une autre ne commence.' 
    },
    { 
        id: 'q78', 
        question: 'The company avoided _____ traditional combustion engines in their latest models.', 
        option_a: 'use', 
        option_b: 'using', 
        option_c: 'to use', 
        option_d: 'used', 
        correct_answer: 'B', 
        explanation: 'Le verbe "avoid" (éviter) est suivi d\'un gérondif (verbe en -ING).' 
    },
    { 
        id: 'q79', 
        question: 'The company has been producing renewable energy solutions _____ the past two decades.', 
        option_a: 'since', 
        option_b: 'for', 
        option_c: 'at', 
        option_d: 'during', 
        correct_answer: 'B', 
        explanation: '"For" est utilisé avec le Present Perfect ("has been producing") pour indiquer une durée ("for two decades" = depuis deux décennies). "Since" est utilisé pour un point de départ (since 2004).' 
    },
    { 
        id: 'q80', 
        question: 'Wind turbines operate more _____ when placed in areas with consistent wind speeds.', 
        option_a: 'efficiently', 
        option_b: 'efficiency', 
        option_c: 'efficient', 
        option_d: 'efficiencies', 
        correct_answer: 'A', 
        explanation: 'On a besoin d\'un adverbe ("efficiently" = efficacement) pour modifier le verbe "operate" (fonctionner).' 
    },
    { 
        id: 'q81', 
        question: 'Please be notified that new _____ on water consumption will go into effect next month.', 
        option_a: 'regulatory', 
        option_b: 'regulate', 
        option_c: 'regulating', 
        option_d: 'regulations', 
        correct_answer: 'D', 
        explanation: 'Après l\'adjectif "new", on a besoin d\'un nom. "Regulations" (réglementations) est le nom pluriel approprié.' 
    },
    { 
        id: 'q82', 
        question: 'The project was delayed _____ a lack of funding.', 
        option_a: 'due to', 
        option_b: 'although', 
        option_c: 'so', 
        option_d: 'but', 
        correct_answer: 'A', 
        explanation: '"Due to" (en raison de) est une préposition qui introduit la cause du retard, suivie d\'un nom ("a lack of funding").' 
    },
    { 
        id: 'q83', 
        question: 'The company is committed to achieving long-term _____ through its innovative technologies.', 
        option_a: 'sustain', 
        option_b: 'sustainable', 
        option_c: 'sustainability', 
        option_d: 'sustaining', 
        correct_answer: 'C', 
        explanation: 'Après l\'adjectif "long-term", on a besoin d\'un nom. "Sustainability" (la durabilité) est le concept requis.' 
    },
    { 
        id: 'q84', 
        question: 'The blueprint for the new bridge design, _____ includes innovative materials, was approved last week.', 
        option_a: 'which', 
        option_b: 'who', 
        option_c: 'whose', 
        option_d: 'whom', 
        correct_answer: 'A', 
        explanation: '"Which" est un pronom relatif utilisé pour introduire une information supplémentaire sur une chose (ici, "the... design").' 
    },
    { 
        id: 'q85', 
        question: 'Not only _____ reduce emissions, but EVs also lower fuel costs.', 
        option_a: 'do they', 
        option_b: 'they do', 
        option_c: 'they are', 
        option_d: 'are they', 
        correct_answer: 'A', 
        explanation: 'Lorsqu\'une phrase commence par "Not only", on doit inverser l\'auxiliaire et le sujet. "They reduce..." devient "do they reduce...".' 
    },
    { 
        id: 'q86', 
        question: 'Ms. James may _____ been aware of the paperwork issue.', 
        option_a: 'not have', 
        option_b: 'have to', 
        option_c: 'haven\'t', 
        option_d: 'has not', 
        correct_answer: 'A', 
        explanation: 'C\'est un modal au passé (modal perfect). La structure est "modal + have + participe passé". Pour la négation, on place "not" après le modal : "may not have been".' 
    },
    { 
        id: 'q87', 
        question: 'Students _____ present a valid ID card can obtain a ten percent discount on city bus fares.', 
        option_a: 'whoever', 
        option_b: 'whose', 
        option_c: 'who', 
        option_d: 'whom', 
        correct_answer: 'C', 
        explanation: '"Who" est un pronom relatif sujet, utilisé pour les personnes ("Students"). "Who" remplace "Students" (Students present the card).' 
    },
    { 
        id: 'q88', 
        question: 'Penny Bank guarantees that _____ newly launched online banking services are 100% safe and reliable.', 
        option_a: 'themselves', 
        option_b: 'itself', 
        option_c: 'they', 
        option_d: 'its', 
        correct_answer: 'D', 
        explanation: 'On a besoin d\'un adjectif possessif pour "Penny Bank" (une chose, singulier). "Its" (ses) est le possessif correct.' 
    }
];