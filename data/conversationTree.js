/*
  Purpose of Life - editable conversation data
  ------------------------------------------------------------
  Version: guided-conversation-refactor
  Text fields use { en, bn } so the same static path can render
  in English or Bangla without changing saved progress.

  Design principle:
  - Keep the beginning mysterious and universal.
  - Move like a real conversation: mirror -> worldly limits -> death -> morality/justice -> worldview -> afterlife -> Islam/Tawhid -> action.
  - Introduce Islamic terms only after the user is prepared or identifies as Muslim.
*/

window.ISLAM_QUIZ_URL = 'https://islamquiz-app.web.app/';

window.CONVERSATION_TREE = {
  "start": {
    "id": "start",
    "type": "question",
    "theme": "purpose",
    "question": {
      "en": "When you look at your life right now, which one feels most true?",
      "bn": "এখন নিজের জীবনের দিকে তাকালে কোন কথাটি সবচেয়ে সত্য মনে হয়?"
    },
    "description": {
      "en": "Do not choose the answer that sounds good. Choose the one that sounds honest.",
      "bn": "যে উত্তর শুনতে ভালো লাগে সেটি নয়। যে উত্তরটি সত্য মনে হয় সেটি বেছে নিন।"
    },
    "answers": [
      {
        "label": {
          "en": "I am chasing something and hoping it will be enough",
          "bn": "আমি কিছু পাওয়ার পেছনে ছুটছি, আশা করছি সেটাই যথেষ্ট হবে"
        },
        "nextId": "mirror_chasing_what",
        "tags": [
          "dunyaFocused"
        ]
      },
      {
        "label": {
          "en": "I am busy, but I do not always know why",
          "bn": "আমি ব্যস্ত, কিন্তু সবসময় জানি না কেন"
        },
        "nextId": "mirror_busy",
        "tags": [
          "careless"
        ]
      },
      {
        "label": {
          "en": "Things look okay, but inside I feel empty",
          "bn": "বাইরে সব ঠিক মনে হয়, কিন্তু ভেতরে ফাঁকা লাগে"
        },
        "nextId": "mirror_empty",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I already believe life has a purpose",
          "bn": "আমি আগে থেকেই বিশ্বাস করি জীবনের উদ্দেশ্য আছে"
        },
        "nextId": "purpose_admitted",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I try not to think deeply about life",
          "bn": "আমি জীবন নিয়ে গভীরভাবে ভাবতে চাই না"
        },
        "nextId": "mirror_avoid",
        "tags": [
          "careless"
        ]
      }
    ]
  },
  "mirror_chasing_what": {
    "id": "mirror_chasing_what",
    "type": "question",
    "theme": "goals",
    "question": {
      "en": "What are you mostly chasing?",
      "bn": "আপনি সবচেয়ে বেশি কীসের পেছনে ছুটছেন?"
    },
    "description": {
      "en": "This answer will shape the next question.",
      "bn": "এই উত্তর অনুযায়ী পরের প্রশ্ন আসবে।"
    },
    "answers": [
      {
        "label": {
          "en": "Career, success, or a title",
          "bn": "ক্যারিয়ার, সাফল্য বা পদবি"
        },
        "nextId": "career_achieve_next",
        "tags": [
          "dunyaFocused"
        ]
      },
      {
        "label": {
          "en": "Money, comfort, or security",
          "bn": "টাকা, আরাম বা নিরাপত্তা"
        },
        "nextId": "money_more_peace",
        "tags": [
          "dunyaFocused"
        ]
      },
      {
        "label": {
          "en": "Pleasure, desire, or entertainment",
          "bn": "আনন্দ, ইচ্ছা বা বিনোদন"
        },
        "nextId": "pleasure_after_moment",
        "tags": [
          "pleasureChaser"
        ]
      },
      {
        "label": {
          "en": "Family and a stable life",
          "bn": "পরিবার ও স্থির জীবন"
        },
        "nextId": "family_good_but",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Fame, attention, or approval",
          "bn": "খ্যাতি, মনোযোগ বা মানুষের স্বীকৃতি"
        },
        "nextId": "fame_lasts",
        "tags": [
          "dunyaFocused"
        ]
      },
      {
        "label": {
          "en": "Peace. I just want peace inside.",
          "bn": "শান্তি। আমি শুধু ভেতরের শান্তি চাই।"
        },
        "nextId": "peace_search",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "mirror_busy": {
    "id": "mirror_busy",
    "type": "reflection",
    "theme": "meaning",
    "title": {
      "en": "A busy life can still be an unexamined life.",
      "bn": "ব্যস্ত জীবনও উদ্দেশ্যহীন হতে পারে।"
    },
    "description": {
      "en": "A person can run every day and still never ask where the road is taking them. Movement is not the same as direction.",
      "bn": "মানুষ প্রতিদিন দৌড়াতে পারে, কিন্তু পথ কোথায় নিয়ে যাচ্ছে তা না-ও জানতে পারে। চলা আর দিক জানা এক জিনিস নয়।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask me what I am avoiding",
          "bn": "আমি কী এড়িয়ে যাচ্ছি, সেটা জিজ্ঞেস করুন"
        },
        "nextId": "mirror_avoid",
        "tags": [
          "careless"
        ]
      },
      {
        "label": {
          "en": "Ask me what would remain if I stopped",
          "bn": "আমি থেমে গেলে কী থাকবে, সেটা জিজ্ঞেস করুন"
        },
        "nextId": "busy_if_stopped",
        "tags": [
          "careless"
        ]
      }
    ]
  },
  "busy_if_stopped": {
    "id": "busy_if_stopped",
    "type": "question",
    "theme": "meaning",
    "question": {
      "en": "If the noise stopped for one night, what question would you not be able to escape?",
      "bn": "এক রাতের জন্য সব শব্দ থেমে গেলে কোন প্রশ্ন থেকে আপনি পালাতে পারবেন না?"
    },
    "description": {
      "en": "Some questions wait quietly until we stop distracting ourselves.",
      "bn": "কিছু প্রশ্ন নীরবে অপেক্ষা করে, যতক্ষণ না আমরা নিজেদের ব্যস্ত রাখা বন্ধ করি।"
    },
    "answers": [
      {
        "label": {
          "en": "Why am I here?",
          "bn": "আমি এখানে কেন?"
        },
        "nextId": "missing_after_success",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Am I wasting my life?",
          "bn": "আমি কি জীবন নষ্ট করছি?"
        },
        "nextId": "death_regret",
        "tags": [
          "careless"
        ]
      },
      {
        "label": {
          "en": "What happens after death?",
          "bn": "মৃত্যুর পর কী হবে?"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I would still avoid it",
          "bn": "আমি তখনও এড়িয়ে যাব"
        },
        "nextId": "avoid_does_not_remove",
        "tags": [
          "careless"
        ]
      }
    ]
  },
  "mirror_empty": {
    "id": "mirror_empty",
    "type": "question",
    "theme": "happiness",
    "question": {
      "en": "When do you feel that emptiness most?",
      "bn": "কখন সেই ফাঁকাভাব সবচেয়ে বেশি অনুভব করেন?"
    },
    "description": {
      "en": "You do not have to explain your life. Just choose the closest answer.",
      "bn": "আপনার জীবন ব্যাখ্যা করতে হবে না। সবচেয়ে কাছের উত্তরটি বেছে নিন।"
    },
    "answers": [
      {
        "label": {
          "en": "After pleasure ends",
          "bn": "আনন্দ শেষ হওয়ার পর"
        },
        "nextId": "pleasure_after_moment",
        "tags": [
          "pleasureChaser"
        ]
      },
      {
        "label": {
          "en": "When I am alone",
          "bn": "আমি একা থাকলে"
        },
        "nextId": "quiet_alone_question",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Even after getting things I wanted",
          "bn": "চাওয়া জিনিস পাওয়ার পরও"
        },
        "nextId": "missing_after_success",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I do not know why I feel it",
          "bn": "কেন এমন লাগে জানি না"
        },
        "nextId": "peace_search",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "mirror_avoid": {
    "id": "mirror_avoid",
    "type": "question",
    "theme": "meaning",
    "question": {
      "en": "What do you usually avoid thinking about?",
      "bn": "আপনি সাধারণত কোন বিষয়টি ভাবতে এড়িয়ে যান?"
    },
    "description": {
      "en": "Avoiding a question does not make it false. It only delays facing it.",
      "bn": "কোনো প্রশ্ন এড়িয়ে গেলে সেটি মিথ্যা হয়ে যায় না। শুধু মুখোমুখি হওয়া দেরি হয়।"
    },
    "answers": [
      {
        "label": {
          "en": "Death",
          "bn": "মৃত্যু"
        },
        "nextId": "common_ending",
        "tags": [
          "careless"
        ]
      },
      {
        "label": {
          "en": "Whether my life has meaning",
          "bn": "আমার জীবনের মানে আছে কি না"
        },
        "nextId": "missing_after_success",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "My mistakes and sins",
          "bn": "আমার ভুল ও পাপ"
        },
        "nextId": "death_regret",
        "tags": [
          "careless"
        ]
      },
      {
        "label": {
          "en": "What is truly right or wrong",
          "bn": "সত্যিকারের ভালো-মন্দ কী"
        },
        "nextId": "right_wrong_source",
        "tags": [
          "moralityThinker"
        ]
      }
    ]
  },
  "quiet_alone_question": {
    "id": "quiet_alone_question",
    "type": "question",
    "theme": "happiness",
    "question": {
      "en": "When you are alone, what do you most want to be free from?",
      "bn": "আপনি একা থাকলে কোন জিনিস থেকে সবচেয়ে বেশি মুক্তি চান?"
    },
    "description": {
      "en": "The heart often speaks more honestly when no one is watching.",
      "bn": "কেউ না দেখলে হৃদয় অনেক সময় বেশি সত্য কথা বলে।"
    },
    "answers": [
      {
        "label": {
          "en": "Restlessness",
          "bn": "অস্থিরতা"
        },
        "nextId": "peace_search",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Guilt",
          "bn": "অপরাধবোধ"
        },
        "nextId": "death_regret",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Fear of the future",
          "bn": "ভবিষ্যতের ভয়"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Feeling like life is pointless",
          "bn": "জীবন অর্থহীন মনে হওয়া"
        },
        "nextId": "missing_after_success",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "avoid_does_not_remove": {
    "id": "avoid_does_not_remove",
    "type": "reflection",
    "theme": "meaning",
    "title": {
      "en": "Avoiding the question does not remove the ending.",
      "bn": "প্রশ্ন এড়িয়ে গেলে শেষ পরিণতি দূর হয় না।"
    },
    "description": {
      "en": "A person may avoid thinking about death, meaning, or accountability. But those realities do not wait for our comfort.",
      "bn": "মানুষ মৃত্যু, জীবনের মানে বা হিসাব নিয়ে ভাবা এড়িয়ে যেতে পারে। কিন্তু বাস্তবতা আমাদের সুবিধার জন্য অপেক্ষা করে না।"
    },
    "answers": [
      {
        "label": {
          "en": "Face the ending everyone reaches",
          "bn": "যে শেষ পরিণতিতে সবাই পৌঁছায়, সেটার মুখোমুখি হই"
        },
        "nextId": "common_ending",
        "tags": [
          "careless"
        ]
      }
    ]
  },
  "career_achieve_next": {
    "id": "career_achieve_next",
    "type": "question",
    "theme": "goals",
    "question": {
      "en": "If you get the career or status you want, what comes next?",
      "bn": "আপনি চাওয়া ক্যারিয়ার বা মর্যাদা পেলে এরপর কী?"
    },
    "description": {
      "en": "Imagine you really reached it. Not failed — reached it. Then what?",
      "bn": "ধরুন আপনি সত্যিই সেখানে পৌঁছালেন। ব্যর্থ নন — সফল। এরপর কী?"
    },
    "answers": [
      {
        "label": {
          "en": "I would chase a bigger goal",
          "bn": "আমি আরও বড় লক্ষ্য ধরব"
        },
        "nextId": "career_title_limit",
        "tags": [
          "dunyaFocused"
        ]
      },
      {
        "label": {
          "en": "I would finally relax",
          "bn": "আমি তখন শান্তিতে থাকব"
        },
        "nextId": "career_title_limit",
        "tags": [
          "dunyaFocused"
        ]
      },
      {
        "label": {
          "en": "I would build a family and life",
          "bn": "আমি পরিবার ও জীবন গড়ব"
        },
        "nextId": "family_good_but",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I do not know",
          "bn": "আমি জানি না"
        },
        "nextId": "missing_after_success",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "career_title_limit": {
    "id": "career_title_limit",
    "type": "question",
    "theme": "goals",
    "question": {
      "en": "Can a title answer why you exist?",
      "bn": "একটি পদবি কি বলতে পারে আপনি কেন আছেন?"
    },
    "description": {
      "en": "A title can tell people what you do. It cannot tell you why you were given life.",
      "bn": "একটি পদবি মানুষকে বলতে পারে আপনি কী করেন। কিন্তু আপনাকে জীবন কেন দেওয়া হয়েছে, তা বলতে পারে না।"
    },
    "answers": [
      {
        "label": {
          "en": "No, it cannot",
          "bn": "না, পারে না"
        },
        "nextId": "missing_after_success",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I still want success first",
          "bn": "আমি তবুও আগে সাফল্য চাই"
        },
        "nextId": "world_first_trade",
        "tags": [
          "dunyaFocused"
        ]
      }
    ]
  },
  "money_more_peace": {
    "id": "money_more_peace",
    "type": "question",
    "theme": "goals",
    "question": {
      "en": "If your money increased, would your peace automatically increase too?",
      "bn": "আপনার টাকা বাড়লে কি আপনার শান্তিও নিজে থেকেই বাড়বে?"
    },
    "description": {
      "en": "Money can solve some problems. But can it solve the deepest problem?",
      "bn": "টাকা কিছু সমস্যা সমাধান করতে পারে। কিন্তু সবচেয়ে গভীর সমস্যার সমাধান কি করতে পারে?"
    },
    "answers": [
      {
        "label": {
          "en": "Not always",
          "bn": "সবসময় না"
        },
        "nextId": "money_protect",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Maybe, if I had enough",
          "bn": "হয়তো, যদি যথেষ্ট থাকত"
        },
        "nextId": "money_protect",
        "tags": [
          "dunyaFocused"
        ]
      },
      {
        "label": {
          "en": "I already have things but not peace",
          "bn": "আমার অনেক কিছু আছে, কিন্তু শান্তি নেই"
        },
        "nextId": "peace_search",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "money_protect": {
    "id": "money_protect",
    "type": "question",
    "theme": "goals",
    "question": {
      "en": "Can comfort protect you from death?",
      "bn": "আরাম কি আপনাকে মৃত্যু থেকে বাঁচাতে পারে?"
    },
    "description": {
      "en": "Comfort can soften parts of life. It cannot stop the final appointment.",
      "bn": "আরাম জীবনের কিছু অংশ সহজ করতে পারে। কিন্তু শেষ সময়কে থামাতে পারে না।"
    },
    "answers": [
      {
        "label": {
          "en": "No, it cannot",
          "bn": "না, পারে না"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I do not like thinking about that",
          "bn": "এটা ভাবতে ভালো লাগে না"
        },
        "nextId": "avoid_does_not_remove",
        "tags": [
          "careless"
        ]
      }
    ]
  },
  "pleasure_after_moment": {
    "id": "pleasure_after_moment",
    "type": "question",
    "theme": "happiness",
    "question": {
      "en": "Does pleasure stay after the moment ends?",
      "bn": "আনন্দের মুহূর্ত শেষ হলে আনন্দ কি থেকে যায়?"
    },
    "description": {
      "en": "Think of the things people chase to escape emptiness. What happens when the moment is over?",
      "bn": "মানুষ ফাঁকাভাব থেকে পালাতে যেসব জিনিসের পেছনে ছুটে, সেগুলো ভাবুন। মুহূর্ত শেষ হলে কী থাকে?"
    },
    "answers": [
      {
        "label": {
          "en": "It fades quickly",
          "bn": "দ্রুত শেষ হয়ে যায়"
        },
        "nextId": "pleasure_regret",
        "tags": [
          "pleasureChaser"
        ]
      },
      {
        "label": {
          "en": "Sometimes it leaves regret",
          "bn": "কখনো আফসোস রেখে যায়"
        },
        "nextId": "pleasure_regret",
        "tags": [
          "pleasureChaser"
        ]
      },
      {
        "label": {
          "en": "I think pleasure is enough",
          "bn": "আমি মনে করি আনন্দই যথেষ্ট"
        },
        "nextId": "world_first_trade",
        "tags": [
          "dunyaFocused"
        ]
      }
    ]
  },
  "pleasure_regret": {
    "id": "pleasure_regret",
    "type": "question",
    "theme": "happiness",
    "question": {
      "en": "Is a short pleasure worth a long regret?",
      "bn": "স্বল্প সময়ের আনন্দ কি দীর্ঘ আফসোসের মতো মূল্যবান?"
    },
    "description": {
      "en": "Some choices feel small in the moment but become heavy later.",
      "bn": "কিছু সিদ্ধান্ত মুহূর্তে ছোট লাগে, কিন্তু পরে ভারী হয়ে যায়।"
    },
    "answers": [
      {
        "label": {
          "en": "No, it is not worth it",
          "bn": "না, এটা মূল্যবান নয়"
        },
        "nextId": "missing_after_success",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I know, but I feel weak",
          "bn": "আমি জানি, কিন্তু দুর্বল লাগে"
        },
        "nextId": "muslim_or_general_weakness",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I still choose pleasure",
          "bn": "আমি তবুও আনন্দ বেছে নিই"
        },
        "nextId": "world_first_trade",
        "tags": [
          "dunyaFocused"
        ]
      }
    ]
  },
  "family_good_but": {
    "id": "family_good_but",
    "type": "question",
    "theme": "goals",
    "question": {
      "en": "Family is important. But can family be the final purpose of life?",
      "bn": "পরিবার গুরুত্বপূর্ণ। কিন্তু পরিবার কি জীবনের চূড়ান্ত উদ্দেশ্য হতে পারে?"
    },
    "description": {
      "en": "Loving family is good. The question is whether even a good thing can answer the whole reason for existence.",
      "bn": "পরিবারকে ভালোবাসা ভালো। প্রশ্ন হলো, একটি ভালো জিনিসও কি অস্তিত্বের পুরো কারণ ব্যাখ্যা করতে পারে?"
    },
    "answers": [
      {
        "label": {
          "en": "It matters, but maybe it is not the final answer",
          "bn": "এটি গুরুত্বপূর্ণ, কিন্তু হয়তো চূড়ান্ত উত্তর নয়"
        },
        "nextId": "family_cannot_stop",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "For me, family is enough",
          "bn": "আমার জন্য পরিবারই যথেষ্ট"
        },
        "nextId": "family_cannot_stop",
        "tags": [
          "dunyaFocused"
        ]
      }
    ]
  },
  "family_cannot_stop": {
    "id": "family_cannot_stop",
    "type": "question",
    "theme": "death",
    "question": {
      "en": "Can the people you love stop death from reaching you or them?",
      "bn": "আপনি যাদের ভালোবাসেন, তারা কি আপনাকে বা নিজেদেরকে মৃত্যু থেকে বাঁচাতে পারে?"
    },
    "description": {
      "en": "Love is real, but this life still separates people. That means the final answer must be deeper than temporary togetherness.",
      "bn": "ভালোবাসা বাস্তব, কিন্তু এই জীবন তবুও মানুষকে আলাদা করে। তাই চূড়ান্ত উত্তর সাময়িক একসাথে থাকার চেয়ে গভীর হতে হবে।"
    },
    "answers": [
      {
        "label": {
          "en": "No, death still reaches everyone",
          "bn": "না, মৃত্যু সবার কাছেই আসে"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "That is painful to think about",
          "bn": "এটা ভাবা কষ্টকর"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "fame_lasts": {
    "id": "fame_lasts",
    "type": "question",
    "theme": "goals",
    "question": {
      "en": "If people praise you today, can their praise stay with you in the grave?",
      "bn": "মানুষ আজ আপনাকে প্রশংসা করলে, সেই প্রশংসা কি কবরে আপনার সাথে থাকবে?"
    },
    "description": {
      "en": "People may remember, forget, misunderstand, or replace us. Their approval is too weak to be the center of life.",
      "bn": "মানুষ মনে রাখতে পারে, ভুলে যেতে পারে, ভুল বুঝতে পারে, বা আমাদের বদলে অন্যকে নিতে পারে। মানুষের স্বীকৃতি জীবনের কেন্দ্র হওয়ার জন্য খুব দুর্বল।"
    },
    "answers": [
      {
        "label": {
          "en": "No, praise cannot save me",
          "bn": "না, প্রশংসা আমাকে বাঁচাতে পারবে না"
        },
        "nextId": "missing_after_success",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I still care about what people think",
          "bn": "আমি তবুও মানুষ কী ভাববে তা নিয়ে চিন্তা করি"
        },
        "nextId": "fame_alone",
        "tags": [
          "dunyaFocused"
        ]
      }
    ]
  },
  "fame_alone": {
    "id": "fame_alone",
    "type": "question",
    "theme": "goals",
    "question": {
      "en": "When you are alone with yourself, does people’s approval remove your inner questions?",
      "bn": "আপনি যখন একা থাকেন, মানুষের স্বীকৃতি কি ভেতরের প্রশ্ন দূর করে?"
    },
    "description": {
      "en": "Approval can be loud outside and still leave silence inside.",
      "bn": "বাইরে স্বীকৃতি অনেক শব্দ করতে পারে, কিন্তু ভেতরে নীরবতা রেখে যেতে পারে।"
    },
    "answers": [
      {
        "label": {
          "en": "No, it does not",
          "bn": "না, করে না"
        },
        "nextId": "quiet_alone_question",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Sometimes it helps, but not fully",
          "bn": "কখনো সাহায্য করে, কিন্তু পুরোপুরি নয়"
        },
        "nextId": "missing_after_success",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "peace_search": {
    "id": "peace_search",
    "type": "question",
    "theme": "happiness",
    "question": {
      "en": "What kind of peace are you looking for?",
      "bn": "আপনি কী ধরনের শান্তি খুঁজছেন?"
    },
    "description": {
      "en": "Not every calm feeling is true peace. Some silence is only distraction.",
      "bn": "প্রতিটি শান্ত অনুভূতি আসল শান্তি নয়। কিছু নীরবতা শুধু মনোযোগ সরিয়ে রাখা।"
    },
    "answers": [
      {
        "label": {
          "en": "Peace from guilt",
          "bn": "অপরাধবোধ থেকে শান্তি"
        },
        "nextId": "death_regret",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Peace from emptiness",
          "bn": "ফাঁকাভাব থেকে শান্তি"
        },
        "nextId": "missing_after_success",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Peace from fear of the future",
          "bn": "ভবিষ্যতের ভয় থেকে শান্তি"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Peace with the truth",
          "bn": "সত্যের সাথে শান্তি"
        },
        "nextId": "right_wrong_source",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "missing_after_success": {
    "id": "missing_after_success",
    "type": "reflection",
    "theme": "meaning",
    "title": {
      "en": "Getting more does not answer why you exist.",
      "bn": "আরও বেশি পাওয়া আপনার অস্তিত্বের কারণ বলে না।"
    },
    "description": {
      "en": "Success, money, pleasure, family, and praise can all be parts of life. But if they become the whole purpose, the heart still asks: what is all of this for?",
      "bn": "সাফল্য, টাকা, আনন্দ, পরিবার ও প্রশংসা জীবনের অংশ হতে পারে। কিন্তু এগুলোই যদি পুরো উদ্দেশ্য হয়ে যায়, হৃদয় তবুও জিজ্ঞেস করে: এসবের মানে কী?"
    },
    "answers": [
      {
        "label": {
          "en": "Ask the next question",
          "bn": "পরের প্রশ্ন করুন"
        },
        "nextId": "if_everything_then_what",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "if_everything_then_what": {
    "id": "if_everything_then_what",
    "type": "question",
    "theme": "meaning",
    "question": {
      "en": "Imagine you got everything you wanted. What question would still remain?",
      "bn": "ধরুন আপনি যা চান সব পেয়ে গেলেন। তবুও কোন প্রশ্নটি থাকবে?"
    },
    "description": {
      "en": "This is where the path becomes more serious.",
      "bn": "এখান থেকে পথটি আরও গুরুতর হয়।"
    },
    "answers": [
      {
        "label": {
          "en": "Why was I given life?",
          "bn": "আমাকে জীবন কেন দেওয়া হলো?"
        },
        "nextId": "purpose_source_question",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "What happens when I die?",
          "bn": "আমি মারা গেলে কী হবে?"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Was I a good person?",
          "bn": "আমি কি ভালো মানুষ ছিলাম?"
        },
        "nextId": "right_wrong_source",
        "tags": [
          "moralityThinker"
        ]
      },
      {
        "label": {
          "en": "Would any of it last?",
          "bn": "এসবের কিছু কি স্থায়ী হবে?"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "purpose_admitted": {
    "id": "purpose_admitted",
    "type": "question",
    "theme": "purpose",
    "question": {
      "en": "If life has a purpose, who has the right to define it?",
      "bn": "জীবনের উদ্দেশ্য থাকলে, সেটি ঠিক করার অধিকার কার?"
    },
    "description": {
      "en": "A thing does not define its own purpose. The maker knows why it was made.",
      "bn": "কোনো জিনিস নিজে নিজের উদ্দেশ্য ঠিক করে না। নির্মাতা জানেন সেটি কেন বানানো হয়েছে।"
    },
    "answers": [
      {
        "label": {
          "en": "The One who gave life",
          "bn": "যিনি জীবন দিয়েছেন"
        },
        "nextId": "purpose_source_question",
        "tags": [
          "readyForIslam"
        ]
      },
      {
        "label": {
          "en": "Each person decides for themselves",
          "bn": "প্রত্যেকে নিজে ঠিক করে"
        },
        "nextId": "self_made_purpose_limit",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I am not sure",
          "bn": "আমি নিশ্চিত নই"
        },
        "nextId": "purpose_source_question",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "self_made_purpose_limit": {
    "id": "self_made_purpose_limit",
    "type": "question",
    "theme": "purpose",
    "question": {
      "en": "If everyone invents their own purpose, can any purpose be truly higher than desire?",
      "bn": "সবাই যদি নিজের উদ্দেশ্য নিজে বানায়, তাহলে কোনো উদ্দেশ্য কি সত্যিই ইচ্ছার ওপরে হতে পারে?"
    },
    "description": {
      "en": "A self-made purpose can change whenever desire changes. A true purpose must be more stable than mood.",
      "bn": "নিজে বানানো উদ্দেশ্য ইচ্ছা বদলালেই বদলে যেতে পারে। সত্য উদ্দেশ্য মনের অবস্থার চেয়ে বেশি স্থির হতে হবে।"
    },
    "answers": [
      {
        "label": {
          "en": "That makes sense",
          "bn": "এটা যুক্তিযুক্ত"
        },
        "nextId": "purpose_source_question",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I need to think more",
          "bn": "আমার আরও ভাবতে হবে"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "purpose_source_question": {
    "id": "purpose_source_question",
    "type": "question",
    "theme": "purpose",
    "question": {
      "en": "If life was given to you, is it possible that the purpose also comes from the Giver?",
      "bn": "আপনাকে যদি জীবন দেওয়া হয়ে থাকে, তাহলে উদ্দেশ্যও কি দাতার পক্ষ থেকে আসতে পারে?"
    },
    "description": {
      "en": "This question does not force an answer yet. It only asks where purpose could come from.",
      "bn": "এই প্রশ্ন এখনই কোনো উত্তর চাপিয়ে দেয় না। শুধু জিজ্ঞেস করে উদ্দেশ্য কোথা থেকে আসতে পারে।"
    },
    "answers": [
      {
        "label": {
          "en": "Yes, that is possible",
          "bn": "হ্যাঁ, সম্ভব"
        },
        "nextId": "common_ending",
        "tags": [
          "readyForIslam"
        ]
      },
      {
        "label": {
          "en": "Maybe",
          "bn": "হয়তো"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I do not believe life was given",
          "bn": "আমি বিশ্বাস করি না জীবন দেওয়া হয়েছে"
        },
        "nextId": "right_wrong_source",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "world_first_trade": {
    "id": "world_first_trade",
    "type": "question",
    "theme": "goals",
    "question": {
      "en": "If this world gives you what you want for a few decades, but then everything is taken away, is that enough?",
      "bn": "এই দুনিয়া যদি কয়েক দশক আপনাকে যা চান দেয়, তারপর সব কেড়ে নেয়—এটা কি যথেষ্ট?"
    },
    "description": {
      "en": "Do not answer quickly. A short life can feel long until the end comes close.",
      "bn": "দ্রুত উত্তর দেবেন না। শেষ সময় কাছে আসার আগে ছোট জীবনও দীর্ঘ মনে হয়।"
    },
    "answers": [
      {
        "label": {
          "en": "No, it is not enough",
          "bn": "না, যথেষ্ট নয়"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I still want this world first",
          "bn": "আমি তবুও আগে এই দুনিয়া চাই"
        },
        "nextId": "common_ending",
        "tags": [
          "dunyaFocused"
        ]
      },
      {
        "label": {
          "en": "I am not sure",
          "bn": "আমি নিশ্চিত নই"
        },
        "nextId": "common_ending",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "muslim_or_general_weakness": {
    "id": "muslim_or_general_weakness",
    "type": "question",
    "theme": "happiness",
    "question": {
      "en": "When you say you feel weak, what do you mean?",
      "bn": "আপনি যখন বলেন দুর্বল লাগে, তখন কী বোঝান?"
    },
    "description": {
      "en": "Weakness can be a door to honesty if it does not become an excuse to stay asleep.",
      "bn": "দুর্বলতা যদি ঘুমিয়ে থাকার অজুহাত না হয়, তাহলে এটি সততার দরজা হতে পারে।"
    },
    "answers": [
      {
        "label": {
          "en": "I know the truth but fail to act",
          "bn": "আমি সত্য জানি কিন্তু আমল করতে পারি না"
        },
        "nextId": "belief_identity",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I do not know what truth is yet",
          "bn": "সত্য কী এখনো জানি না"
        },
        "nextId": "right_wrong_source",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I keep choosing desire",
          "bn": "আমি বারবার ইচ্ছাকে বেছে নিই"
        },
        "nextId": "world_first_trade",
        "tags": [
          "dunyaFocused"
        ]
      }
    ]
  },
  "common_ending": {
    "id": "common_ending",
    "type": "question",
    "theme": "death",
    "question": {
      "en": "No matter what path a person takes, what is the one ending everyone reaches?",
      "bn": "মানুষ যে পথেই চলুক, কোন শেষ পরিণতিতে সবাই পৌঁছায়?"
    },
    "description": {
      "en": "The rich, poor, famous, unknown, strong, and weak all meet the same door.",
      "bn": "ধনী, গরিব, বিখ্যাত, অচেনা, শক্তিশালী, দুর্বল—সবাই একই দরজায় পৌঁছায়।"
    },
    "answers": [
      {
        "label": {
          "en": "Death",
          "bn": "মৃত্যু"
        },
        "nextId": "death_frequency",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Old age, then death",
          "bn": "বার্ধক্য, তারপর মৃত্যু"
        },
        "nextId": "death_frequency",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I do not like this question",
          "bn": "এই প্রশ্ন ভালো লাগে না"
        },
        "nextId": "death_frequency",
        "tags": [
          "careless"
        ]
      }
    ]
  },
  "death_frequency": {
    "id": "death_frequency",
    "type": "question",
    "theme": "death",
    "question": {
      "en": "How often do you seriously think about death?",
      "bn": "আপনি মৃত্যু নিয়ে কতবার সত্যিই ভাবেন?"
    },
    "description": {
      "en": "Not as a word. As something that will actually reach you.",
      "bn": "শুধু শব্দ হিসেবে নয়। এমন বাস্তবতা হিসেবে যা সত্যিই আপনার কাছে আসবে।"
    },
    "answers": [
      {
        "label": {
          "en": "Often",
          "bn": "প্রায়ই"
        },
        "nextId": "death_regret",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Sometimes",
          "bn": "কখনো কখনো"
        },
        "nextId": "death_regret",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Almost never",
          "bn": "প্রায় কখনো না"
        },
        "nextId": "death_wake_reflection",
        "tags": [
          "careless"
        ]
      },
      {
        "label": {
          "en": "I avoid it",
          "bn": "আমি এড়িয়ে যাই"
        },
        "nextId": "death_wake_reflection",
        "tags": [
          "careless"
        ]
      }
    ]
  },
  "death_wake_reflection": {
    "id": "death_wake_reflection",
    "type": "reflection",
    "theme": "death",
    "title": {
      "en": "Not thinking about death does not delay it.",
      "bn": "মৃত্যু নিয়ে না ভাবলে মৃত্যু দেরি করে না।"
    },
    "description": {
      "en": "A person may ignore death for years, but death does not ignore the person. If death is certain, preparing for what comes after it should not be delayed.",
      "bn": "মানুষ বহু বছর মৃত্যু উপেক্ষা করতে পারে, কিন্তু মৃত্যু মানুষকে উপেক্ষা করে না। মৃত্যু যদি নিশ্চিত হয়, তাহলে মৃত্যুর পরের বিষয়ের প্রস্তুতি দেরি করা উচিত নয়।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask me what I would regret",
          "bn": "আমি কী নিয়ে আফসোস করব, সেটা জিজ্ঞেস করুন"
        },
        "nextId": "death_regret",
        "tags": [
          "careless"
        ]
      }
    ]
  },
  "death_regret": {
    "id": "death_regret",
    "type": "question",
    "theme": "death",
    "question": {
      "en": "If death came sooner than expected, what would worry you most?",
      "bn": "মৃত্যু যদি ধারণার আগেই আসে, কোন বিষয়টি আপনাকে সবচেয়ে বেশি চিন্তায় ফেলবে?"
    },
    "description": {
      "en": "This question is not for fear only. It shows what your heart already knows is important.",
      "bn": "এই প্রশ্ন শুধু ভয় দেখানোর জন্য নয়। এটি দেখায় আপনার হৃদয় কোন জিনিসকে গুরুত্বপূর্ণ জানে।"
    },
    "answers": [
      {
        "label": {
          "en": "I wasted my life",
          "bn": "আমি জীবন নষ্ট করেছি"
        },
        "nextId": "after_death_ignore",
        "tags": [
          "careless"
        ]
      },
      {
        "label": {
          "en": "My sins and hidden mistakes",
          "bn": "আমার পাপ ও গোপন ভুল"
        },
        "nextId": "after_death_ignore",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I never found the truth",
          "bn": "আমি সত্য খুঁজে পাইনি"
        },
        "nextId": "after_death_ignore",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I am not ready to meet what comes next",
          "bn": "পরের যা আসবে তার জন্য প্রস্তুত নই"
        },
        "nextId": "after_death_ignore",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "after_death_ignore": {
    "id": "after_death_ignore",
    "type": "question",
    "theme": "death",
    "question": {
      "en": "If death is certain, should the question of what comes after death be ignored?",
      "bn": "মৃত্যু যদি নিশ্চিত হয়, তাহলে মৃত্যুর পর কী হবে—এই প্রশ্ন কি উপেক্ষা করা উচিত?"
    },
    "description": {
      "en": "Ignoring a serious question may feel comfortable today, but comfort is not the same as safety.",
      "bn": "গুরুতর প্রশ্ন উপেক্ষা করা আজ আরামদায়ক লাগতে পারে, কিন্তু আরাম আর নিরাপত্তা এক জিনিস নয়।"
    },
    "answers": [
      {
        "label": {
          "en": "No, it should not be ignored",
          "bn": "না, উপেক্ষা করা উচিত নয়"
        },
        "nextId": "right_wrong_source",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I am not sure",
          "bn": "আমি নিশ্চিত নই"
        },
        "nextId": "right_wrong_source",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I still do not want to think about it",
          "bn": "আমি তবুও ভাবতে চাই না"
        },
        "nextId": "justice_escape_question",
        "tags": [
          "careless"
        ]
      }
    ]
  },
  "right_wrong_source": {
    "id": "right_wrong_source",
    "type": "question",
    "theme": "morality",
    "question": {
      "en": "How do you decide what is truly right or wrong?",
      "bn": "কোনো কিছু সত্যিই ভালো না মন্দ, তা আপনি কীভাবে ঠিক করেন?"
    },
    "description": {
      "en": "This is not just philosophy. Your answer affects justice, guilt, forgiveness, and how life should be lived.",
      "bn": "এটি শুধু দর্শন নয়। আপনার উত্তর ন্যায়, অপরাধবোধ, ক্ষমা এবং কীভাবে জীবন চলবে—সবকিছুতে প্রভাব ফেলে।"
    },
    "answers": [
      {
        "label": {
          "en": "My feelings decide",
          "bn": "আমার অনুভূতি ঠিক করে"
        },
        "nextId": "feelings_conflict",
        "tags": [
          "moralityThinker"
        ]
      },
      {
        "label": {
          "en": "Society decides",
          "bn": "সমাজ ঠিক করে"
        },
        "nextId": "society_oppression",
        "tags": [
          "moralityThinker"
        ]
      },
      {
        "label": {
          "en": "Law decides",
          "bn": "আইন ঠিক করে"
        },
        "nextId": "law_unjust",
        "tags": [
          "moralityThinker"
        ]
      },
      {
        "label": {
          "en": "The Creator decides",
          "bn": "স্রষ্টা ঠিক করেন"
        },
        "nextId": "creator_moral_standard",
        "tags": [
          "readyForIslam"
        ]
      },
      {
        "label": {
          "en": "I am not sure",
          "bn": "আমি নিশ্চিত নই"
        },
        "nextId": "morality_uncertain",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "feelings_conflict": {
    "id": "feelings_conflict",
    "type": "question",
    "theme": "morality",
    "question": {
      "en": "If one person feels lying is wrong, but another feels lying is acceptable, whose feeling becomes the truth?",
      "bn": "একজন মনে করে মিথ্যা ভুল, আরেকজন মনে করে মিথ্যা ঠিক। তাহলে কার অনুভূতি সত্য হবে?"
    },
    "description": {
      "en": "Feelings are real, but they change and conflict. Truth needs a stronger foundation.",
      "bn": "অনুভূতি বাস্তব, কিন্তু বদলায় এবং একে অন্যের সাথে বিরোধ করে। সত্যের জন্য শক্ত ভিত্তি দরকার।"
    },
    "answers": [
      {
        "label": {
          "en": "There must be a higher standard",
          "bn": "অবশ্যই উচ্চতর মানদণ্ড দরকার"
        },
        "nextId": "creator_moral_standard",
        "tags": [
          "moralityThinker"
        ]
      },
      {
        "label": {
          "en": "Maybe there is no real standard",
          "bn": "হয়তো সত্যিকারের মানদণ্ড নেই"
        },
        "nextId": "no_standard_problem",
        "tags": [
          "moralityThinker"
        ]
      }
    ]
  },
  "society_oppression": {
    "id": "society_oppression",
    "type": "question",
    "theme": "morality",
    "question": {
      "en": "If a society accepts oppression, does that make oppression right?",
      "bn": "কোনো সমাজ জুলুম মেনে নিলে কি জুলুম ঠিক হয়ে যায়?"
    },
    "description": {
      "en": "History shows that societies can normalize evil. Majority approval cannot turn injustice into justice.",
      "bn": "ইতিহাস দেখায় সমাজ মন্দকে স্বাভাবিক করতে পারে। সংখ্যাগরিষ্ঠের সমর্থন অন্যায়কে ন্যায় বানাতে পারে না।"
    },
    "answers": [
      {
        "label": {
          "en": "No, society can be wrong",
          "bn": "না, সমাজ ভুল হতে পারে"
        },
        "nextId": "creator_moral_standard",
        "tags": [
          "moralityThinker"
        ]
      },
      {
        "label": {
          "en": "Maybe morality changes with society",
          "bn": "হয়তো ভালো-মন্দ সমাজের সাথে বদলায়"
        },
        "nextId": "no_standard_problem",
        "tags": [
          "moralityThinker"
        ]
      }
    ]
  },
  "law_unjust": {
    "id": "law_unjust",
    "type": "question",
    "theme": "morality",
    "question": {
      "en": "If a law allows injustice, does that make injustice moral?",
      "bn": "আইন যদি অন্যায় অনুমতি দেয়, তাহলে কি তা নৈতিক হয়ে যায়?"
    },
    "description": {
      "en": "Human law can restrain evil, but human law can also be wrong. So right and wrong must be above human power.",
      "bn": "মানুষের আইন মন্দকে থামাতে পারে, কিন্তু মানুষের আইন নিজেও ভুল হতে পারে। তাই ভালো-মন্দ মানুষের ক্ষমতার ওপরে হতে হবে।"
    },
    "answers": [
      {
        "label": {
          "en": "No, law can be unjust",
          "bn": "না, আইন অন্যায় হতে পারে"
        },
        "nextId": "creator_moral_standard",
        "tags": [
          "moralityThinker"
        ]
      },
      {
        "label": {
          "en": "I have not thought about this",
          "bn": "আমি এভাবে ভাবিনি"
        },
        "nextId": "creator_moral_standard",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "morality_uncertain": {
    "id": "morality_uncertain",
    "type": "reflection",
    "theme": "morality",
    "title": {
      "en": "Uncertainty is not a bad place if it makes you seek truth.",
      "bn": "সন্দেহ খারাপ জায়গা নয়, যদি তা আপনাকে সত্য খুঁজতে বাধ্য করে।"
    },
    "description": {
      "en": "The question is simple: if humans are limited, changing, and biased, can humans be the final judge of good and evil?",
      "bn": "প্রশ্নটি সহজ: মানুষ যদি সীমিত, পরিবর্তনশীল ও পক্ষপাতী হয়, তাহলে মানুষ কি ভালো-মন্দের চূড়ান্ত বিচারক হতে পারে?"
    },
    "answers": [
      {
        "label": {
          "en": "Ask about a higher standard",
          "bn": "উচ্চতর মানদণ্ড নিয়ে জিজ্ঞেস করুন"
        },
        "nextId": "creator_moral_standard",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "no_standard_problem": {
    "id": "no_standard_problem",
    "type": "reflection",
    "theme": "morality",
    "title": {
      "en": "If there is no real standard, evil becomes only a personal dislike.",
      "bn": "সত্যিকারের মানদণ্ড না থাকলে, মন্দ শুধু ব্যক্তিগত অপছন্দ হয়ে যায়।"
    },
    "description": {
      "en": "But deep inside, people know some things are truly wrong even if someone likes them, votes for them, or hides them.",
      "bn": "কিন্তু গভীরে মানুষ জানে কিছু জিনিস সত্যিই ভুল, কেউ তা পছন্দ করুক, ভোট দিক, বা লুকিয়ে রাখুক।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask about justice",
          "bn": "ন্যায় নিয়ে জিজ্ঞেস করুন"
        },
        "nextId": "justice_escape_question",
        "tags": [
          "justiceThinker"
        ]
      }
    ]
  },
  "creator_moral_standard": {
    "id": "creator_moral_standard",
    "type": "reflection",
    "theme": "morality",
    "title": {
      "en": "A real moral standard must be above changing human desire.",
      "bn": "সত্য ভালো-মন্দের মানদণ্ড মানুষের বদলানো ইচ্ছার ওপরে হতে হবে।"
    },
    "description": {
      "en": "If the Creator is All-Knowing and perfectly just, then His guidance is above our feelings, society, and laws.",
      "bn": "স্রষ্টা যদি সব জানেন এবং পুরোপুরি ন্যায়পরায়ণ হন, তাহলে তাঁর পথনির্দেশ আমাদের অনুভূতি, সমাজ ও আইনের ওপরে।"
    },
    "answers": [
      {
        "label": {
          "en": "Now ask about justice",
          "bn": "এখন ন্যায় নিয়ে জিজ্ঞেস করুন"
        },
        "nextId": "justice_escape_question",
        "tags": [
          "justiceThinker"
        ]
      }
    ]
  },
  "justice_escape_question": {
    "id": "justice_escape_question",
    "type": "question",
    "theme": "justice",
    "question": {
      "en": "Do you think every oppressor receives full justice in this world?",
      "bn": "আপনি কি মনে করেন প্রতিটি জুলুমকারী এই পৃথিবীতেই পূর্ণ বিচার পায়?"
    },
    "description": {
      "en": "Some people destroy lives and still die with wealth, power, or respect. Some victims never see justice here.",
      "bn": "কিছু মানুষ জীবন ধ্বংস করে, তবুও সম্পদ, ক্ষমতা বা সম্মান নিয়েই মারা যায়। কিছু ভুক্তভোগী এই দুনিয়ায় ন্যায় দেখে না।"
    },
    "answers": [
      {
        "label": {
          "en": "No, many escape justice here",
          "bn": "না, অনেকে এখানে বিচার এড়িয়ে যায়"
        },
        "nextId": "hidden_crimes_question",
        "tags": [
          "justiceThinker"
        ]
      },
      {
        "label": {
          "en": "Eventually everyone gets justice here",
          "bn": "শেষ পর্যন্ত সবাই এখানেই বিচার পায়"
        },
        "nextId": "hidden_crimes_question",
        "tags": [
          "justiceThinker"
        ]
      },
      {
        "label": {
          "en": "I am not sure",
          "bn": "আমি নিশ্চিত নই"
        },
        "nextId": "hidden_crimes_question",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "hidden_crimes_question": {
    "id": "hidden_crimes_question",
    "type": "question",
    "theme": "justice",
    "question": {
      "en": "What about crimes no one saw, victims no one heard, and criminals who died unpunished?",
      "bn": "যে অপরাধ কেউ দেখেনি, যে ভুক্তভোগীর কথা কেউ শোনেনি, আর যে অপরাধী শাস্তি ছাড়াই মারা গেছে—তাদের কী হবে?"
    },
    "description": {
      "en": "Human courts are limited. They miss evidence, can be corrupted, and cannot judge what is hidden in the heart.",
      "bn": "মানুষের আদালত সীমিত। প্রমাণ মিস হয়, দুর্নীতি হতে পারে, আর হৃদয়ের গোপন বিষয় বিচার করতে পারে না।"
    },
    "answers": [
      {
        "label": {
          "en": "There must be final justice",
          "bn": "অবশ্যই শেষ বিচার থাকতে হবে"
        },
        "nextId": "final_justice_reflection",
        "tags": [
          "justiceThinker"
        ]
      },
      {
        "label": {
          "en": "That is difficult to answer",
          "bn": "এর উত্তর কঠিন"
        },
        "nextId": "final_justice_reflection",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Maybe they just get away",
          "bn": "হয়তো তারা পার পেয়ে যায়"
        },
        "nextId": "justice_without_afterlife",
        "tags": [
          "justiceThinker"
        ]
      }
    ]
  },
  "justice_without_afterlife": {
    "id": "justice_without_afterlife",
    "type": "reflection",
    "theme": "justice",
    "title": {
      "en": "If they simply get away, reality would be deeply unfair.",
      "bn": "তারা যদি সত্যিই পার পেয়ে যায়, তাহলে বাস্তবতা গভীরভাবে অন্যায় হয়ে যায়।"
    },
    "description": {
      "en": "The idea of final judgment is not a small detail. It is what makes every hidden deed, every tear, and every oppression matter.",
      "bn": "শেষ বিচারের ধারণা ছোট বিষয় নয়। এটি প্রতিটি গোপন কাজ, প্রতিটি অশ্রু এবং প্রতিটি জুলুমকে অর্থপূর্ণ করে।"
    },
    "answers": [
      {
        "label": {
          "en": "Continue to final justice",
          "bn": "শেষ বিচারের দিকে এগোন"
        },
        "nextId": "final_justice_reflection",
        "tags": [
          "justiceThinker"
        ]
      }
    ]
  },
  "final_justice_reflection": {
    "id": "final_justice_reflection",
    "type": "reflection",
    "theme": "justice",
    "title": {
      "en": "Perfect justice requires the Creator who misses nothing.",
      "bn": "পূর্ণ ন্যায়ের জন্য এমন স্রষ্টা দরকার যিনি কিছুই মিস করেন না।"
    },
    "description": {
      "en": "If the Creator knows every hidden deed and judges every soul fairly, then this life is not the end of the story.",
      "bn": "স্রষ্টা যদি প্রতিটি গোপন কাজ জানেন এবং প্রতিটি প্রাণকে ন্যায্যভাবে বিচার করেন, তাহলে এই জীবন গল্পের শেষ নয়।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask where I stand",
          "bn": "আমি কোথায় দাঁড়িয়ে আছি, জিজ্ঞেস করুন"
        },
        "nextId": "belief_identity",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "belief_identity": {
    "id": "belief_identity",
    "type": "question",
    "theme": "belief",
    "question": {
      "en": "Do you currently follow, believe in, or lean toward any religion or worldview?",
      "bn": "আপনি কি বর্তমানে কোনো ধর্ম বা বিশ্বাসের দিকে ঝুঁকে আছেন?"
    },
    "description": {
      "en": "This helps the path speak to your current state instead of assuming everyone starts from the same place.",
      "bn": "এতে পথটি আপনার বর্তমান অবস্থার সাথে কথা বলতে পারে; সবাই একই জায়গা থেকে শুরু করছে ধরে নেয় না।"
    },
    "answers": [
      {
        "label": {
          "en": "Muslim",
          "bn": "মুসলিম"
        },
        "nextId": "muslim_pause",
        "tags": [
          "Muslim",
          "readyForAqeedah"
        ]
      },
      {
        "label": {
          "en": "Christian",
          "bn": "খ্রিস্টান"
        },
        "nextId": "religious_bridge",
        "tags": [
          "nonMuslim"
        ]
      },
      {
        "label": {
          "en": "Jew",
          "bn": "ইহুদি"
        },
        "nextId": "religious_bridge",
        "tags": [
          "nonMuslim"
        ]
      },
      {
        "label": {
          "en": "Hindu",
          "bn": "হিন্দু"
        },
        "nextId": "religious_bridge",
        "tags": [
          "nonMuslim"
        ]
      },
      {
        "label": {
          "en": "Agnostic / not sure",
          "bn": "নিশ্চিত নই / অজ্ঞেয়বাদী"
        },
        "nextId": "seeker_creator_question",
        "tags": [
          "nonMuslim",
          "seeker"
        ]
      },
      {
        "label": {
          "en": "Other religion or worldview",
          "bn": "অন্য ধর্ম বা বিশ্বাস"
        },
        "nextId": "religious_bridge",
        "tags": [
          "nonMuslim"
        ]
      },
      {
        "label": {
          "en": "No religion, but I am searching",
          "bn": "কোনো ধর্ম নেই, কিন্তু খুঁজছি"
        },
        "nextId": "seeker_creator_question",
        "tags": [
          "nonMuslim",
          "seeker"
        ]
      }
    ]
  },
  "muslim_pause": {
    "id": "muslim_pause",
    "type": "reflection",
    "theme": "iman",
    "title": {
      "en": "Brother/Sister, pause for a moment.",
      "bn": "ভাই/বোন, একটু থামুন।"
    },
    "description": {
      "en": "You already believe in Allah, death, the grave, the Day of Judgment, Paradise, and Hell. So the question is not only “Is this true?” The question is: “Am I ready?”",
      "bn": "আপনি তো আল্লাহ, মৃত্যু, কবর, কিয়ামত, জান্নাত ও নরকে বিশ্বাস করেন। তাই প্রশ্ন শুধু “এটা সত্য কি না” নয়। প্রশ্ন হলো: “আমি কি প্রস্তুত?”"
    },
    "answers": [
      {
        "label": {
          "en": "Ask me if I am ready",
          "bn": "আমি প্রস্তুত কি না জিজ্ঞেস করুন"
        },
        "nextId": "muslim_readiness_question",
        "tags": [
          "Muslim"
        ]
      }
    ]
  },
  "muslim_readiness_question": {
    "id": "muslim_readiness_question",
    "type": "question",
    "theme": "iman",
    "question": {
      "en": "If death came today, what would worry you most?",
      "bn": "আজ যদি মৃত্যু এসে যায়, কোন বিষয়টি আপনাকে সবচেয়ে বেশি চিন্তায় ফেলবে?"
    },
    "description": {
      "en": "Choose the answer that hits your heart most honestly.",
      "bn": "যে উত্তরটি আপনার হৃদয়ে সবচেয়ে সত্যভাবে লাগে, সেটি বেছে নিন।"
    },
    "answers": [
      {
        "label": {
          "en": "My prayers",
          "bn": "আমার সালাত"
        },
        "nextId": "salah_reflection",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "My sins",
          "bn": "আমার পাপ"
        },
        "nextId": "sins_reflection",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "My aqeedah",
          "bn": "আমার আকীদাহ"
        },
        "nextId": "aqeedah_reflection",
        "tags": [
          "Muslim",
          "readyForAqeedah"
        ]
      },
      {
        "label": {
          "en": "My hidden life",
          "bn": "আমার গোপন জীবন"
        },
        "nextId": "hidden_life_reflection",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "My lack of repentance",
          "bn": "আমার তাওবার অভাব"
        },
        "nextId": "repentance_reflection",
        "tags": [
          "Muslim"
        ]
      }
    ]
  },
  "salah_reflection": {
    "id": "salah_reflection",
    "type": "reflection",
    "theme": "iman",
    "title": {
      "en": "Salah is not a small matter.",
      "bn": "সালাত ছোট বিষয় নয়।"
    },
    "description": {
      "en": "A Muslim cannot treat prayer like an optional detail while hoping to be ready for the meeting with Allah. Start with repentance and protect your salah.",
      "bn": "একজন মুসলিম আল্লাহর সাথে সাক্ষাতের প্রস্তুতির আশা করে সালাতকে ঐচ্ছিক বিষয় বানাতে পারে না। তাওবা দিয়ে শুরু করুন এবং সালাত রক্ষা করুন।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask me about the trade I am making",
          "bn": "আমি কী বিনিময় করছি, জিজ্ঞেস করুন"
        },
        "nextId": "muslim_hell_trade",
        "tags": [
          "Muslim"
        ]
      }
    ]
  },
  "sins_reflection": {
    "id": "sins_reflection",
    "type": "reflection",
    "theme": "iman",
    "title": {
      "en": "A sin may feel small when desire is loud.",
      "bn": "ইচ্ছা প্রবল হলে পাপ ছোট মনে হতে পারে।"
    },
    "description": {
      "en": "But the question is not only how the sin feels now. The question is what it is worth when you stand before Allah.",
      "bn": "কিন্তু প্রশ্ন শুধু এখন পাপ কেমন লাগে তা নয়। প্রশ্ন হলো আল্লাহর সামনে দাঁড়ালে এর মূল্য কী হবে।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask if it is worth Hell",
          "bn": "জিজ্ঞেস করুন এটা কি নরকের ঝুঁকির মতো মূল্যবান"
        },
        "nextId": "muslim_hell_trade",
        "tags": [
          "Muslim"
        ]
      }
    ]
  },
  "aqeedah_reflection": {
    "id": "aqeedah_reflection",
    "type": "reflection",
    "theme": "aqeedah",
    "title": {
      "en": "Correct belief is not a side topic.",
      "bn": "সঠিক আকীদাহ কোনো পাশের বিষয় নয়।"
    },
    "description": {
      "en": "Worship must be for Allah alone, and shirk is the greatest danger. A Muslim should learn Tawḥīd, avoid shirk, and follow the Qur’an and authentic Sunnah upon the understanding of the early righteous generations.",
      "bn": "ইবাদত একমাত্র আল্লাহর জন্য হতে হবে, আর শিরক সবচেয়ে বড় বিপদ। একজন মুসলিমের উচিত তাওহীদ শেখা, শিরক থেকে বাঁচা, এবং কুরআন ও সহীহ সুন্নাহকে সালাফদের বুঝ অনুযায়ী অনুসরণ করা।"
    },
    "reference": {
      "text": {
        "en": "Worship Allah and do not associate anything with Him.",
        "bn": "আল্লাহর ইবাদত করো এবং তাঁর সাথে কাউকে শরিক করো না।"
      },
      "source": {
        "en": "Qur’an 4:36",
        "bn": "কুরআন ৪:৩৬"
      },
      "type": "quran"
    },
    "answers": [
      {
        "label": {
          "en": "Ask what eternity is worth",
          "bn": "চিরস্থায়ী জীবনের মূল্য কী, জিজ্ঞেস করুন"
        },
        "nextId": "muslim_eternity_trade",
        "tags": [
          "Muslim",
          "readyForAqeedah"
        ]
      }
    ]
  },
  "hidden_life_reflection": {
    "id": "hidden_life_reflection",
    "type": "reflection",
    "theme": "iman",
    "title": {
      "en": "The hidden life is still seen by Allah.",
      "bn": "গোপন জীবনও আল্লাহ দেখেন।"
    },
    "description": {
      "en": "People may not know what you watch, desire, say, or hide. But the One who will judge you knows the public and the private.",
      "bn": "মানুষ হয়তো জানে না আপনি কী দেখেন, কী চান, কী বলেন, কী লুকান। কিন্তু যিনি বিচার করবেন তিনি প্রকাশ্য ও গোপন সব জানেন।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask if it is worth the risk",
          "bn": "ঝুঁকির মতো মূল্যবান কি না জিজ্ঞেস করুন"
        },
        "nextId": "muslim_hell_trade",
        "tags": [
          "Muslim"
        ]
      }
    ]
  },
  "repentance_reflection": {
    "id": "repentance_reflection",
    "type": "reflection",
    "theme": "hope",
    "title": {
      "en": "The door of repentance is open before death.",
      "bn": "মৃত্যুর আগে তাওবার দরজা খোলা।"
    },
    "description": {
      "en": "Do not let Shayṭān make you delay until the heart becomes hard. Return while you can still choose to return.",
      "bn": "শয়তান যেন আপনাকে দেরি করাতে না পারে, যতক্ষণ না হৃদয় কঠিন হয়ে যায়। ফিরে আসার ক্ষমতা থাকা অবস্থায় ফিরে আসুন।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask me what I am choosing",
          "bn": "আমি কী বেছে নিচ্ছি, জিজ্ঞেস করুন"
        },
        "nextId": "muslim_eternity_trade",
        "tags": [
          "Muslim"
        ]
      }
    ]
  },
  "muslim_hell_trade": {
    "id": "muslim_hell_trade",
    "type": "question",
    "theme": "afterlife",
    "question": {
      "en": "Is any sin, desire, fame, relationship, money, or entertainment worth risking Hell?",
      "bn": "কোনো পাপ, ইচ্ছা, খ্যাতি, সম্পর্ক, টাকা বা বিনোদন কি নরকের ঝুঁকি নেওয়ার মতো?"
    },
    "description": {
      "en": "Answer as someone who believes Hell is real, not as someone distracted for a few minutes.",
      "bn": "এমনভাবে উত্তর দিন যেন আপনি সত্যিই বিশ্বাস করেন নরক বাস্তব—কয়েক মিনিটের জন্য ব্যস্ত থাকা মানুষ হিসেবে নয়।"
    },
    "answers": [
      {
        "label": {
          "en": "No, nothing is worth Hell",
          "bn": "না, কোনো কিছুই নরকের ঝুঁকির মতো মূল্যবান নয়"
        },
        "nextId": "muslim_eternity_trade",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "I know, but I am weak",
          "bn": "আমি জানি, কিন্তু দুর্বল"
        },
        "nextId": "repentance_reflection",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "I need to repent",
          "bn": "আমার তাওবা দরকার"
        },
        "nextId": "muslim_ready_to_return",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "I need to change my life",
          "bn": "আমার জীবন বদলানো দরকার"
        },
        "nextId": "muslim_ready_to_return",
        "tags": [
          "Muslim"
        ]
      }
    ]
  },
  "muslim_eternity_trade": {
    "id": "muslim_eternity_trade",
    "type": "question",
    "theme": "afterlife",
    "question": {
      "en": "Would you trade eternal happiness for 70 or 80 years of temporary pleasure?",
      "bn": "৭০/৮০ বছরের সাময়িক আনন্দের জন্য কি আপনি চিরস্থায়ী সুখ হারাবেন?"
    },
    "description": {
      "en": "This is the trade many people make without saying it out loud.",
      "bn": "অনেকে মুখে না বললেও জীবনে এই বিনিময় করে।"
    },
    "reference": {
      "text": {
        "en": "You prefer the worldly life, while the Hereafter is better and more lasting.",
        "bn": "তোমরা দুনিয়ার জীবনকে বেশি প্রাধান্য দাও, অথচ আখিরাত উত্তম এবং স্থায়ী।"
      },
      "source": {
        "en": "Qur’an 87:16–17",
        "bn": "কুরআন ৮৭:১৬–১৭"
      },
      "type": "quran"
    },
    "answers": [
      {
        "label": {
          "en": "No, I do not want that trade",
          "bn": "না, আমি এই বিনিময় চাই না"
        },
        "nextId": "afterlife_contrast_intro",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "I never thought of it like that",
          "bn": "আমি এভাবে ভাবিনি"
        },
        "nextId": "afterlife_contrast_intro",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "I am still attached to this world",
          "bn": "আমি এখনো দুনিয়ার সাথে আটকে আছি"
        },
        "nextId": "world_attachment_warning",
        "tags": [
          "Muslim"
        ]
      }
    ]
  },
  "world_attachment_warning": {
    "id": "world_attachment_warning",
    "type": "reflection",
    "theme": "afterlife",
    "title": {
      "en": "Attachment to this world becomes dangerous when it makes eternity feel far away.",
      "bn": "দুনিয়ার প্রতি আসক্তি বিপদজনক হয় যখন তা চিরস্থায়ী জীবনকে দূরের মনে করায়।"
    },
    "description": {
      "en": "This life is not worthless, but it is temporary. The danger is living as if the temporary is everything and the eternal is nothing.",
      "bn": "এই জীবন মূল্যহীন নয়, কিন্তু সাময়িক। বিপদ হলো এমনভাবে বাঁচা যেন সাময়িক জীবনই সব, আর চিরস্থায়ী জীবন কিছুই নয়।"
    },
    "answers": [
      {
        "label": {
          "en": "Show me the contrast",
          "bn": "আমাকে পার্থক্য দেখান"
        },
        "nextId": "afterlife_contrast_intro",
        "tags": [
          "Muslim"
        ]
      }
    ]
  },
  "muslim_ready_to_return": {
    "id": "muslim_ready_to_return",
    "type": "question",
    "theme": "action",
    "question": {
      "en": "What is stopping you from returning seriously to Allah?",
      "bn": "আল্লাহর দিকে সত্যিকারে ফিরে আসতে আপনাকে কী আটকে রাখছে?"
    },
    "description": {
      "en": "Name the obstacle. A named obstacle is easier to fight than a hidden one.",
      "bn": "বাধাটির নাম বলুন। যে বাধার নাম জানা যায়, সেটার সাথে লড়াই করা সহজ।"
    },
    "answers": [
      {
        "label": {
          "en": "Laziness",
          "bn": "অলসতা"
        },
        "nextId": "result_muslim_return",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "Friends or environment",
          "bn": "বন্ধু বা পরিবেশ"
        },
        "nextId": "result_muslim_return",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "Desires",
          "bn": "ইচ্ছা"
        },
        "nextId": "result_muslim_return",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "Doubts",
          "bn": "সন্দেহ"
        },
        "nextId": "result_aqeedah_next",
        "tags": [
          "Muslim",
          "readyForAqeedah"
        ]
      },
      {
        "label": {
          "en": "I do not know where to start",
          "bn": "কোথা থেকে শুরু করব জানি না"
        },
        "nextId": "result_aqeedah_next",
        "tags": [
          "Muslim",
          "readyForAqeedah"
        ]
      }
    ]
  },
  "religious_bridge": {
    "id": "religious_bridge",
    "type": "reflection",
    "theme": "belief",
    "title": {
      "en": "Respectfully, the question is deeper than a label.",
      "bn": "সম্মানের সাথে বলছি, প্রশ্নটি শুধু পরিচয়ের চেয়ে গভীর।"
    },
    "description": {
      "en": "Many people inherit a religion, culture, or identity. But truth is not true because we inherited it. Truth deserves to be followed because it is from the Creator.",
      "bn": "অনেকে ধর্ম, সংস্কৃতি বা পরিচয় উত্তরাধিকারসূত্রে পায়। কিন্তু আমরা পেয়েছি বলেই সত্য সত্য হয় না। সত্য অনুসরণযোগ্য কারণ তা স্রষ্টার পক্ষ থেকে।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask what guidance from the Creator would look like",
          "bn": "স্রষ্টার পথনির্দেশ কেমন হবে জিজ্ঞেস করুন"
        },
        "nextId": "creator_guidance_needed",
        "tags": [
          "nonMuslim"
        ]
      }
    ]
  },
  "seeker_creator_question": {
    "id": "seeker_creator_question",
    "type": "question",
    "theme": "belief",
    "question": {
      "en": "If life has purpose, where would that purpose come from?",
      "bn": "জীবনের উদ্দেশ্য থাকলে সেটি কোথা থেকে আসবে?"
    },
    "description": {
      "en": "A purpose invented by a limited human can change. A purpose given by the Creator would be higher than mood, culture, or desire.",
      "bn": "সীমিত মানুষ নিজে উদ্দেশ্য বানালে তা বদলাতে পারে। স্রষ্টার দেওয়া উদ্দেশ্য মন, সংস্কৃতি বা ইচ্ছার ওপরে হবে।"
    },
    "answers": [
      {
        "label": {
          "en": "From the Creator",
          "bn": "স্রষ্টার পক্ষ থেকে"
        },
        "nextId": "creator_guidance_needed",
        "tags": [
          "readyForIslam"
        ]
      },
      {
        "label": {
          "en": "From society",
          "bn": "সমাজের পক্ষ থেকে"
        },
        "nextId": "society_purpose_limit",
        "tags": [
          "nonMuslim"
        ]
      },
      {
        "label": {
          "en": "From myself",
          "bn": "আমার নিজের পক্ষ থেকে"
        },
        "nextId": "self_made_purpose_limit",
        "tags": [
          "nonMuslim"
        ]
      },
      {
        "label": {
          "en": "I am not sure",
          "bn": "আমি নিশ্চিত নই"
        },
        "nextId": "creator_guidance_needed",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "society_purpose_limit": {
    "id": "society_purpose_limit",
    "type": "reflection",
    "theme": "purpose",
    "title": {
      "en": "Society changes, disagrees, and forgets.",
      "bn": "সমাজ বদলায়, মতভেদ করে, ভুলে যায়।"
    },
    "description": {
      "en": "If society defines life’s purpose, then purpose changes when society changes. A true purpose should not be so fragile.",
      "bn": "সমাজ যদি জীবনের উদ্দেশ্য ঠিক করে, তাহলে সমাজ বদলালে উদ্দেশ্যও বদলে যাবে। সত্য উদ্দেশ্য এত দুর্বল হওয়া উচিত নয়।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask about guidance beyond society",
          "bn": "সমাজের ওপরে পথনির্দেশ নিয়ে জিজ্ঞেস করুন"
        },
        "nextId": "creator_guidance_needed",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "creator_guidance_needed": {
    "id": "creator_guidance_needed",
    "type": "question",
    "theme": "guidance",
    "question": {
      "en": "If the Creator gave life, would it make sense for Him to leave people with no guidance?",
      "bn": "স্রষ্টা যদি জীবন দেন, তাহলে মানুষকে কোনো পথনির্দেশ ছাড়া ছেড়ে দেওয়া কি যুক্তিযুক্ত?"
    },
    "description": {
      "en": "Life has choices, pain, desires, injustice, and death. Guidance would not be a small mercy. It would be necessary.",
      "bn": "জীবনে পছন্দ, কষ্ট, ইচ্ছা, অন্যায় ও মৃত্যু আছে। পথনির্দেশ ছোট দয়া নয়; প্রয়োজনীয় বিষয়।"
    },
    "answers": [
      {
        "label": {
          "en": "No, guidance would be needed",
          "bn": "না, পথনির্দেশ দরকার হবে"
        },
        "nextId": "revelation_needed",
        "tags": [
          "readyForIslam"
        ]
      },
      {
        "label": {
          "en": "Maybe",
          "bn": "হয়তো"
        },
        "nextId": "revelation_needed",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I do not know",
          "bn": "জানি না"
        },
        "nextId": "revelation_needed",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "revelation_needed": {
    "id": "revelation_needed",
    "type": "question",
    "theme": "guidance",
    "question": {
      "en": "What kind of guidance would be worthy of the Creator?",
      "bn": "কেমন পথনির্দেশ স্রষ্টার পক্ষ থেকে হওয়ার যোগ্য?"
    },
    "description": {
      "en": "Think simply. It should not call people to worship creation, desire, or human power.",
      "bn": "সহজভাবে ভাবুন। সেটি মানুষকে সৃষ্টি, ইচ্ছা বা মানুষের ক্ষমতার ইবাদতের দিকে ডাকবে না।"
    },
    "answers": [
      {
        "label": {
          "en": "It would call to worship the Creator alone",
          "bn": "এটি একমাত্র স্রষ্টার ইবাদতের দিকে ডাকবে"
        },
        "nextId": "islam_intro",
        "tags": [
          "readyForIslam"
        ]
      },
      {
        "label": {
          "en": "It would explain life, death, and accountability",
          "bn": "এটি জীবন, মৃত্যু ও হিসাব ব্যাখ্যা করবে"
        },
        "nextId": "islam_intro",
        "tags": [
          "readyForIslam"
        ]
      },
      {
        "label": {
          "en": "It would be clear and preserved",
          "bn": "এটি পরিষ্কার ও সংরক্ষিত হবে"
        },
        "nextId": "islam_intro",
        "tags": [
          "readyForIslam"
        ]
      },
      {
        "label": {
          "en": "I am still unsure",
          "bn": "আমি এখনো নিশ্চিত নই"
        },
        "nextId": "islam_intro_gentle",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "islam_intro_gentle": {
    "id": "islam_intro_gentle",
    "type": "reflection",
    "theme": "guidance",
    "title": {
      "en": "Then at least consider the message before rejecting it.",
      "bn": "তাহলে অন্তত বার্তাটি প্রত্যাখ্যান করার আগে বিবেচনা করুন।"
    },
    "description": {
      "en": "If there is a Creator, if death is real, if justice matters, and if guidance is needed, then the honest next step is to examine the message that calls to worship the Creator alone.",
      "bn": "যদি স্রষ্টা থাকেন, মৃত্যু সত্য হয়, ন্যায় গুরুত্বপূর্ণ হয়, এবং পথনির্দেশ দরকার হয়, তাহলে সৎ পরবর্তী ধাপ হলো সেই বার্তা পরীক্ষা করা যা একমাত্র স্রষ্টার ইবাদতের দিকে ডাকে।"
    },
    "answers": [
      {
        "label": {
          "en": "What is that message?",
          "bn": "সেই বার্তা কী?"
        },
        "nextId": "islam_intro",
        "tags": [
          "readyForIslam"
        ]
      }
    ]
  },
  "islam_intro": {
    "id": "islam_intro",
    "type": "reflection",
    "theme": "islam",
    "title": {
      "en": "Islam calls you back to the Creator.",
      "bn": "ইসলাম আপনাকে স্রষ্টার দিকে ফিরতে ডাকে।"
    },
    "description": {
      "en": "Islam teaches that Allah created you, provides for you, will cause you to die, will resurrect you, and deserves your worship alone. Life is a test, and the return is to Him.",
      "bn": "ইসলাম শেখায় যে আল্লাহ আপনাকে সৃষ্টি করেছেন, রিজিক দেন, মৃত্যু দেবেন, পুনরুত্থিত করবেন, এবং ইবাদতের যোগ্য একমাত্র তিনিই। জীবন একটি পরীক্ষা, আর প্রত্যাবর্তন তাঁর কাছেই।"
    },
    "reference": {
      "text": {
        "en": "Did you think We created you uselessly and that to Us you would not be returned?",
        "bn": "তোমরা কি ভেবেছিলে আমরা তোমাদের অনর্থক সৃষ্টি করেছি এবং তোমাদের আমাদের কাছে ফিরিয়ে আনা হবে না?"
      },
      "source": {
        "en": "Qur’an 23:115",
        "bn": "কুরআন ২৩:১১৫"
      },
      "type": "quran"
    },
    "answers": [
      {
        "label": {
          "en": "Ask who deserves worship",
          "bn": "কে ইবাদতের যোগ্য, জিজ্ঞেস করুন"
        },
        "nextId": "tawhid_question",
        "tags": [
          "readyForIslam"
        ]
      }
    ]
  },
  "tawhid_question": {
    "id": "tawhid_question",
    "type": "question",
    "theme": "tawhid",
    "question": {
      "en": "If the Creator gave you life, provides for you, controls your death, and will judge you, who deserves your worship?",
      "bn": "স্রষ্টা যদি আপনাকে জীবন দেন, রিজিক দেন, মৃত্যু নিয়ন্ত্রণ করেন এবং বিচার করবেন—তাহলে ইবাদতের যোগ্য কে?"
    },
    "description": {
      "en": "This is the central question. Not only “who exists?” but “who deserves my worship?”",
      "bn": "এটাই কেন্দ্রীয় প্রশ্ন। শুধু “কে আছেন?” নয়, বরং “আমার ইবাদতের যোগ্য কে?”"
    },
    "answers": [
      {
        "label": {
          "en": "The Creator alone",
          "bn": "একমাত্র স্রষ্টা"
        },
        "nextId": "tawhid_explanation",
        "tags": [
          "readyForAqeedah"
        ]
      },
      {
        "label": {
          "en": "Created beings",
          "bn": "সৃষ্টি"
        },
        "nextId": "created_being_limit",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "My own desires",
          "bn": "আমার নিজের ইচ্ছা"
        },
        "nextId": "desire_worship_limit",
        "tags": [
          "pleasureChaser"
        ]
      },
      {
        "label": {
          "en": "I am not sure",
          "bn": "আমি নিশ্চিত নই"
        },
        "nextId": "worship_center",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "created_being_limit": {
    "id": "created_being_limit",
    "type": "reflection",
    "theme": "tawhid",
    "title": {
      "en": "Created beings are needy like you.",
      "bn": "সৃষ্টি আপনার মতোই প্রয়োজনমুখী।"
    },
    "description": {
      "en": "Anything created cannot own life, death, provision, and judgment by itself. Worship belongs to the One who created and controls all things.",
      "bn": "সৃষ্ট কোনো কিছু নিজে জীবন, মৃত্যু, রিজিক ও বিচার নিয়ন্ত্রণ করে না। ইবাদত তাঁর জন্য যিনি সব সৃষ্টি করেছেন ও নিয়ন্ত্রণ করেন।"
    },
    "answers": [
      {
        "label": {
          "en": "Return to the main question",
          "bn": "মূল প্রশ্নে ফিরুন"
        },
        "nextId": "tawhid_question",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "desire_worship_limit": {
    "id": "desire_worship_limit",
    "type": "reflection",
    "theme": "tawhid",
    "title": {
      "en": "Desire promises freedom but can become a master.",
      "bn": "ইচ্ছা স্বাধীনতার কথা বলে, কিন্তু নিজেই মালিক হয়ে যেতে পারে।"
    },
    "description": {
      "en": "A person may think they are free while being led by appetite, pride, lust, anger, or approval. Real freedom is not slavery to desire.",
      "bn": "মানুষ ভাবতে পারে সে স্বাধীন, অথচ পেট, অহংকার, কামনা, রাগ বা স্বীকৃতির দাস হয়ে যায়। সত্য স্বাধীনতা ইচ্ছার দাসত্ব নয়।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask again who deserves worship",
          "bn": "আবার জিজ্ঞেস করুন কে ইবাদতের যোগ্য"
        },
        "nextId": "tawhid_question",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "worship_center": {
    "id": "worship_center",
    "type": "reflection",
    "theme": "tawhid",
    "title": {
      "en": "Everyone gives their heart to something.",
      "bn": "প্রত্যেকে নিজের হৃদয় কোনো না কোনো কিছুকে দেয়।"
    },
    "description": {
      "en": "Some live for money, some for desire, some for status, some for people, and some for truth. The question is whether your heart is serving what created it or what cannot save it.",
      "bn": "কেউ টাকার জন্য বাঁচে, কেউ ইচ্ছার জন্য, কেউ মর্যাদার জন্য, কেউ মানুষের জন্য, কেউ সত্যের জন্য। প্রশ্ন হলো আপনার হৃদয় কি তাকে মানছে যিনি সৃষ্টি করেছেন, নাকি তাকে যা বাঁচাতে পারবে না।"
    },
    "answers": [
      {
        "label": {
          "en": "The Creator alone deserves worship",
          "bn": "ইবাদতের যোগ্য একমাত্র স্রষ্টা"
        },
        "nextId": "tawhid_explanation",
        "tags": [
          "readyForAqeedah"
        ]
      }
    ]
  },
  "tawhid_explanation": {
    "id": "tawhid_explanation",
    "type": "reflection",
    "theme": "tawhid",
    "title": {
      "en": "This is Tawḥīd: worship Allah alone.",
      "bn": "এটাই তাওহীদ: একমাত্র আল্লাহর ইবাদত করা।"
    },
    "description": {
      "en": "Allah alone created everything. Allah alone provides and controls everything. So duʿā, prayer, reliance, fear, hope, sacrifice, and worship must be for Allah alone. Directing worship to other than Allah is shirk.",
      "bn": "আল্লাহ একাই সব সৃষ্টি করেছেন। আল্লাহ একাই রিজিক দেন এবং সব নিয়ন্ত্রণ করেন। তাই দোয়া, সালাত, ভরসা, ভয়, আশা, কুরবানি ও ইবাদত একমাত্র আল্লাহর জন্য। আল্লাহ ছাড়া অন্য কারও জন্য ইবাদত করা শিরক।"
    },
    "reference": {
      "text": {
        "en": "I did not create jinn and mankind except to worship Me.",
        "bn": "আমি জিন ও মানুষকে সৃষ্টি করেছি শুধু আমার ইবাদতের জন্য।"
      },
      "source": {
        "en": "Qur’an 51:56",
        "bn": "কুরআন ৫১:৫৬"
      },
      "type": "quran"
    },
    "answers": [
      {
        "label": {
          "en": "Now show me the reality of eternity",
          "bn": "এখন আমাকে চিরস্থায়ী জীবনের বাস্তবতা দেখান"
        },
        "nextId": "afterlife_contrast_intro",
        "tags": [
          "readyForAqeedah"
        ]
      }
    ]
  },
  "afterlife_contrast_intro": {
    "id": "afterlife_contrast_intro",
    "type": "reflection",
    "theme": "afterlife",
    "title": {
      "en": "The real comparison is not small.",
      "bn": "আসল তুলনাটি ছোট নয়।"
    },
    "description": {
      "en": "It is not just “a religious lifestyle” versus “a free lifestyle.” It is a short life that ends versus an eternal result that does not end.",
      "bn": "এটি শুধু “ধর্মীয় জীবন” বনাম “স্বাধীন জীবন” নয়। এটি শেষ হয়ে যাওয়া ছোট জীবন বনাম শেষ না হওয়া চিরস্থায়ী ফলাফল।"
    },
    "answers": [
      {
        "label": {
          "en": "Ask me the trade clearly",
          "bn": "বিনিময়টি পরিষ্কারভাবে জিজ্ঞেস করুন"
        },
        "nextId": "afterlife_trade_question",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "afterlife_trade_question": {
    "id": "afterlife_trade_question",
    "type": "question",
    "theme": "afterlife",
    "question": {
      "en": "If you could enjoy this world for 70 or 80 years, but lose the eternal life after death, would that be a good trade?",
      "bn": "আপনি যদি ৭০/৮০ বছর দুনিয়ার আনন্দ পান, কিন্তু মৃত্যুর পরের চিরস্থায়ী জীবন হারান—এটা কি ভালো সিদ্ধান্ত হবে?"
    },
    "description": {
      "en": "This question is meant to be heavy. Some trades are too serious to make carelessly.",
      "bn": "এই প্রশ্নটি ভারী হওয়ার জন্যই। কিছু বিনিময় অসতর্কভাবে করার মতো নয়।"
    },
    "reference": {
      "text": {
        "en": "Whoever is saved from the Fire and admitted to Paradise has truly succeeded.",
        "bn": "যাকে আগুন থেকে দূরে রাখা হবে এবং জান্নাতে প্রবেশ করানো হবে, সে-ই সত্যিকারের সফল।"
      },
      "source": {
        "en": "Qur’an 3:185",
        "bn": "কুরআন ৩:১৮৫"
      },
      "type": "quran"
    },
    "answers": [
      {
        "label": {
          "en": "No, that would be a terrible trade",
          "bn": "না, এটা খুব খারাপ সিদ্ধান্ত হবে"
        },
        "nextId": "afterlife_readiness_question",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I never thought about it like that",
          "bn": "আমি এভাবে কখনো ভাবিনি"
        },
        "nextId": "afterlife_readiness_question",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I still care more about this life",
          "bn": "আমি এখনো এই জীবনকেই বেশি গুরুত্ব দিই"
        },
        "nextId": "world_attachment_warning",
        "tags": [
          "dunyaFocused"
        ]
      },
      {
        "label": {
          "en": "I am not sure",
          "bn": "আমি নিশ্চিত নই"
        },
        "nextId": "afterlife_readiness_question",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "afterlife_readiness_question": {
    "id": "afterlife_readiness_question",
    "type": "question",
    "theme": "afterlife",
    "question": {
      "en": "Are you ready to face what comes after death?",
      "bn": "মৃত্যুর পর যা আসবে, তার জন্য আপনি কি প্রস্তুত?"
    },
    "description": {
      "en": "Not as an idea. As your own meeting, your own record, your own result.",
      "bn": "শুধু ধারণা হিসেবে নয়। আপনার নিজের সাক্ষাৎ, নিজের আমলনামা, নিজের ফলাফল হিসেবে।"
    },
    "answers": [
      {
        "label": {
          "en": "Yes, I am trying",
          "bn": "হ্যাঁ, আমি চেষ্টা করছি"
        },
        "nextId": "paradise_hope_reflection",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "No, I am not ready",
          "bn": "না, আমি প্রস্তুত নই"
        },
        "nextId": "hell_serious_reflection",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I am scared when I think about it",
          "bn": "ভাবলে ভয় লাগে"
        },
        "nextId": "fear_and_hope_reflection",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I avoid thinking about death",
          "bn": "আমি মৃত্যু নিয়ে ভাবতে চাই না"
        },
        "nextId": "hell_serious_reflection",
        "tags": [
          "careless"
        ]
      }
    ]
  },
  "hell_serious_reflection": {
    "id": "hell_serious_reflection",
    "type": "reflection",
    "theme": "afterlife",
    "title": {
      "en": "Hell is not worth any temporary enjoyment.",
      "bn": "নরক কোনো সাময়িক আনন্দের মতো মূল্যবান নয়।"
    },
    "description": {
      "en": "After death, the matter becomes more serious. The Qur’an shows that punishment can begin before the final Day, and the Day of Judgment is even more severe. Whoever knowingly rejects the truth and dies without repentance is under the threat of eternal punishment. A sinful Muslim must not feel safe either; Allah may forgive or punish, so return before death.",
      "bn": "মৃত্যুর পর বিষয়টি আরও গুরুতর হয়। কুরআন দেখায়, শেষ দিনের আগেও শাস্তি শুরু হতে পারে, আর কিয়ামতের দিন আরও কঠিন। যে ব্যক্তি সত্য জেনে তা প্রত্যাখ্যান করে এবং তাওবা ছাড়া মারা যায়, সে চিরস্থায়ী শাস্তির হুমকির অধীনে। পাপী মুসলিমও নিরাপদ ভাববে না; আল্লাহ ক্ষমা করতে পারেন বা শাস্তি দিতে পারেন, তাই মৃত্যুর আগে ফিরে আসুন।"
    },
    "reference": {
      "text": {
        "en": "They are exposed to the Fire morning and evening; and on the Day the Hour comes: make Pharaoh’s people enter the severest punishment.",
        "bn": "তাদের সকাল-সন্ধ্যা আগুনের সামনে পেশ করা হয়; আর কিয়ামতের দিন বলা হবে: ফিরআউনের লোকদের কঠিনতম শাস্তিতে প্রবেশ করাও।"
      },
      "source": {
        "en": "Qur’an 40:45–46",
        "bn": "কুরআন ৪০:৪৫–৪৬"
      },
      "type": "quran"
    },
    "answers": [
      {
        "label": {
          "en": "Show me the hope of Paradise",
          "bn": "জান্নাতের আশা দেখান"
        },
        "nextId": "paradise_hope_reflection",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "fear_and_hope_reflection": {
    "id": "fear_and_hope_reflection",
    "type": "reflection",
    "theme": "afterlife",
    "title": {
      "en": "Fear should wake you up, not make you give up.",
      "bn": "ভয় আপনাকে জাগিয়ে তুলবে, হতাশ করবে না।"
    },
    "description": {
      "en": "The point is not despair. The point is to return while the door is open, before regret becomes permanent.",
      "bn": "উদ্দেশ্য হতাশা নয়। উদ্দেশ্য হলো দরজা খোলা থাকতেই ফিরে আসা, আফসোস স্থায়ী হওয়ার আগে।"
    },
    "answers": [
      {
        "label": {
          "en": "Show me the hope of Paradise",
          "bn": "জান্নাতের আশা দেখান"
        },
        "nextId": "paradise_hope_reflection",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "paradise_hope_reflection": {
    "id": "paradise_hope_reflection",
    "type": "reflection",
    "theme": "hope",
    "title": {
      "en": "Paradise is more than pleasure. It is safety, peace, and eternal success.",
      "bn": "জান্নাত শুধু আনন্দ নয়। এটি নিরাপত্তা, শান্তি ও চিরস্থায়ী সফলতা।"
    },
    "description": {
      "en": "No fear, no sadness, no pain, no death, no emptiness — and above all, the pleasure of Allah. The reward for believers is beyond what the soul can imagine.",
      "bn": "ভয় নেই, দুঃখ নেই, কষ্ট নেই, মৃত্যু নেই, ফাঁকাভাব নেই — আর সবচেয়ে বড় হলো আল্লাহর সন্তুষ্টি। মুমিনদের প্রতিদান আত্মা কল্পনাও করতে পারে না।"
    },
    "reference": {
      "text": {
        "en": "No soul knows what joy has been hidden for them.",
        "bn": "কেউ জানে না তাদের জন্য কী আনন্দ লুকিয়ে রাখা হয়েছে।"
      },
      "source": {
        "en": "Qur’an 32:17",
        "bn": "কুরআন ৩২:১৭"
      },
      "type": "quran"
    },
    "answers": [
      {
        "label": {
          "en": "I want that success",
          "bn": "আমি সেই সফলতা চাই"
        },
        "nextId": "choose_future_question",
        "tags": [
          "seeker"
        ]
      },
      {
        "label": {
          "en": "I need to return seriously",
          "bn": "আমার সত্যিকারে ফিরে আসা দরকার"
        },
        "nextId": "muslim_ready_to_return",
        "tags": [
          "Muslim"
        ]
      },
      {
        "label": {
          "en": "I need to learn the correct belief",
          "bn": "আমার সঠিক আকীদাহ শেখা দরকার"
        },
        "nextId": "result_aqeedah_next",
        "tags": [
          "readyForAqeedah"
        ]
      }
    ]
  },
  "choose_future_question": {
    "id": "choose_future_question",
    "type": "question",
    "theme": "action",
    "question": {
      "en": "Which future do you want to work for now?",
      "bn": "এখন আপনি কোন ভবিষ্যতের জন্য কাজ করতে চান?"
    },
    "description": {
      "en": "A serious answer should become action, not only emotion.",
      "bn": "গুরুতর উত্তর শুধু আবেগ নয়, কাজে পরিণত হওয়া উচিত।"
    },
    "answers": [
      {
        "label": {
          "en": "I want to return to Allah",
          "bn": "আমি আল্লাহর দিকে ফিরতে চাই"
        },
        "nextId": "result_muslim_return",
        "tags": [
          "readyForAqeedah"
        ]
      },
      {
        "label": {
          "en": "I want to learn Islam clearly",
          "bn": "আমি ইসলাম স্পষ্টভাবে শিখতে চাই"
        },
        "nextId": "result_seeker_islam",
        "tags": [
          "readyForIslam"
        ]
      },
      {
        "label": {
          "en": "I want to learn correct aqeedah",
          "bn": "আমি সঠিক আকীদাহ শিখতে চাই"
        },
        "nextId": "result_aqeedah_next",
        "tags": [
          "readyForAqeedah"
        ]
      },
      {
        "label": {
          "en": "I want to start again and think deeper",
          "bn": "আমি আবার শুরু করে আরও গভীরভাবে ভাবতে চাই"
        },
        "nextId": "result_start_again",
        "tags": [
          "seeker"
        ]
      }
    ]
  },
  "result_muslim_return": {
    "id": "result_muslim_return",
    "type": "result",
    "theme": "action",
    "title": {
      "en": "Do not trade eternity for a few years.",
      "bn": "কয়েক বছরের জন্য চিরস্থায়ী জীবন হারাবেন না।"
    },
    "description": {
      "en": "Return before death reaches you. Repent sincerely, protect your salah, leave the sins you can leave today, ask Allah for firmness, and learn the correct belief so your worship is for Allah alone.",
      "bn": "মৃত্যু আসার আগে ফিরে আসুন। আন্তরিক তাওবা করুন, সালাত রক্ষা করুন, আজ যে পাপ ছাড়তে পারেন তা ছাড়ুন, আল্লাহর কাছে দৃঢ়তা চান, এবং সঠিক আকীদাহ শিখুন যেন আপনার ইবাদত একমাত্র আল্লাহর জন্য হয়।"
    },
    "reference": {
      "text": {
        "en": "Do not fear and do not grieve, but receive good news of Paradise that you were promised.",
        "bn": "ভয় করো না, দুঃখ করো না; তোমাদের যে জান্নাতের প্রতিশ্রুতি দেওয়া হয়েছিল তার সুসংবাদ গ্রহণ করো।"
      },
      "source": {
        "en": "Qur’an 41:30",
        "bn": "কুরআন ৪১:৩০"
      },
      "type": "quran"
    },
    "actions": [
      {
        "label": {
          "en": "Learn Correct Aqeedah",
          "bn": "সঠিক আকীদাহ শিখুন"
        },
        "type": "external",
        "url": "https://islamquiz-app.web.app/"
      },
      {
        "label": {
          "en": "Open IslamQUIZ",
          "bn": "IslamQUIZ খুলুন"
        },
        "type": "external",
        "url": "https://islamquiz-app.web.app/"
      },
      {
        "label": {
          "en": "Start Again",
          "bn": "আবার শুরু করুন"
        },
        "type": "restart"
      }
    ]
  },
  "result_seeker_islam": {
    "id": "result_seeker_islam",
    "type": "result",
    "theme": "islam",
    "title": {
      "en": "You were not created without meaning.",
      "bn": "আপনাকে অর্থহীনভাবে সৃষ্টি করা হয়নি।"
    },
    "description": {
      "en": "The next step is to learn the message of Islam clearly: worship Allah alone, prepare for the Hereafter, and follow the guidance sent by the Creator. Do not stop at emotion; seek the truth seriously.",
      "bn": "পরবর্তী ধাপ হলো ইসলামের বার্তাটি পরিষ্কারভাবে শেখা: একমাত্র আল্লাহর ইবাদত করা, আখিরাতের প্রস্তুতি নেওয়া, এবং স্রষ্টার পাঠানো পথনির্দেশ অনুসরণ করা। শুধু আবেগে থেমে যাবেন না; সত্যকে গুরুত্ব দিয়ে খুঁজুন।"
    },
    "reference": {
      "text": {
        "en": "I did not create jinn and mankind except to worship Me.",
        "bn": "আমি জিন ও মানুষকে সৃষ্টি করেছি শুধু আমার ইবাদতের জন্য।"
      },
      "source": {
        "en": "Qur’an 51:56",
        "bn": "কুরআন ৫১:৫৬"
      },
      "type": "quran"
    },
    "actions": [
      {
        "label": {
          "en": "Open IslamQUIZ",
          "bn": "IslamQUIZ খুলুন"
        },
        "type": "external",
        "url": "https://islamquiz-app.web.app/"
      },
      {
        "label": {
          "en": "Start Again",
          "bn": "আবার শুরু করুন"
        },
        "type": "restart"
      }
    ]
  },
  "result_aqeedah_next": {
    "id": "result_aqeedah_next",
    "type": "result",
    "theme": "aqeedah",
    "title": {
      "en": "The next step is correct belief.",
      "bn": "পরবর্তী ধাপ হলো সঠিক আকীদাহ।"
    },
    "description": {
      "en": "Learn who Allah is, why worship must be for Him alone, what shirk is, why the Hereafter matters, and how to follow the Prophet ﷺ and his Companions upon authentic guidance.",
      "bn": "আল্লাহ কে, কেন ইবাদত একমাত্র তাঁর জন্য, শিরক কী, আখিরাত কেন গুরুত্বপূর্ণ, এবং কীভাবে নবী ﷺ ও তাঁর সাহাবীদের পথ সহীহ দলীলের ভিত্তিতে অনুসরণ করতে হয়—এসব শিখুন।"
    },
    "reference": {
      "text": {
        "en": "Allah is the Creator of all things.",
        "bn": "আল্লাহ সবকিছুর স্রষ্টা।"
      },
      "source": {
        "en": "Qur’an 39:62",
        "bn": "কুরআন ৩৯:৬২"
      },
      "type": "quran"
    },
    "actions": [
      {
        "label": {
          "en": "Open IslamQUIZ",
          "bn": "IslamQUIZ খুলুন"
        },
        "type": "external",
        "url": "https://islamquiz-app.web.app/"
      },
      {
        "label": {
          "en": "Start Again",
          "bn": "আবার শুরু করুন"
        },
        "type": "restart"
      }
    ]
  },
  "result_start_again": {
    "id": "result_start_again",
    "type": "result",
    "theme": "reflection",
    "title": {
      "en": "Honest reflection is already a beginning.",
      "bn": "সৎভাবে চিন্তা করাই একটি শুরু।"
    },
    "description": {
      "en": "Start again if you need to. But do not let the questions disappear when you close the page. Life, death, justice, and eternity are too serious to ignore.",
      "bn": "প্রয়োজনে আবার শুরু করুন। কিন্তু পেজ বন্ধ করলে প্রশ্নগুলো যেন হারিয়ে না যায়। জীবন, মৃত্যু, ন্যায় এবং চিরস্থায়ী জীবন উপেক্ষা করার মতো বিষয় নয়।"
    },
    "actions": [
      {
        "label": {
          "en": "Start Again",
          "bn": "আবার শুরু করুন"
        },
        "type": "restart"
      }
    ]
  }
};
