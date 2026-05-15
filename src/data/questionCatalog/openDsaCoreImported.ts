import { makeQuestionBank } from './base'

// Generated from unused clean OpenDSA rows in data/raw_collections/opendsa/opendsa_exercises.json.
// Filters out placeholder answers, course-admin prompts, missing diagrams/code, and answer-leaking prompts.

export const openDsaCoreIntroCsQuestions = makeQuestionBank('Software', [
  {
    "id": 336001,
    "chapter": "Computer Science Foundations",
    "title": "Junit Checkpoint 3",
    "prompt": "Suppose you are writing a method in a new class. You are also writing unit test cases to demonstrate that this method works correctly. You know you have written enough test cases to demonstrate the method works as desired when?",
    "correct": "You have written separate test cases for each identifiable \"group\" of input values and/or output values where the behavior is expected to be similar.",
    "wrong": [
      [
        "You have written at least one test case that uses the method.",
        "This matches a nearby Java or intro-CS idea, but not the exact rule in the prompt.",
        "Name the Java construct or execution rule first, then match it to the prompt."
      ],
      [
        "You have written at least one test case for every input value that can be given to the method.",
        "This matches a nearby Java or intro-CS idea, but not the exact rule in the prompt.",
        "Name the Java construct or execution rule first, then match it to the prompt."
      ],
      [
        "You have written at least one test case for every output value that can be produced by the method.",
        "This matches a nearby Java or intro-CS idea, but not the exact rule in the prompt.",
        "Name the Java construct or execution rule first, then match it to the prompt."
      ],
      [
        "You have written at least one test case for every input/output value combination that can be given to/produced by the method.",
        "This matches a nearby Java or intro-CS idea, but not the exact rule in the prompt.",
        "Name the Java construct or execution rule first, then match it to the prompt."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/JunitCheckpoint3Q4.html). Correct answer: You have written separate test cases for each identifiable \"group\" of input values and/or output values where the behavior is expected to be similar..",
    "source": "OpenDSA"
  },
  {
    "id": 336002,
    "chapter": "Computer Science Foundations",
    "title": "Checkpoint 3",
    "prompt": "The following variable myObj is declared as type GeneralCase and assigned an instance of a subclass of GeneralCase called SpecificCase . Both contain implementations of a method called total() .",
    "correct": "The one in SpecificCase",
    "wrong": [
      [
        "The one in GeneralCase",
        "This matches a nearby Java or intro-CS idea, but not the exact rule in the prompt.",
        "Name the Java construct or execution rule first, then match it to the prompt."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/OOP2Checkpoint3Q2.html). Correct answer: The one in SpecificCase.",
    "source": "OpenDSA"
  }
])

export const openDsaCoreSoftwareQuestions = makeQuestionBank('Software', [
  {
    "id": 336003,
    "chapter": "Software Design",
    "title": "Sorting Comparsion Question",
    "prompt": "One good general-purpose solution to the problem of getting a key from a record is to define a special method such as \".key()\"",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Design/CompareTF2.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336004,
    "chapter": "Software Design",
    "title": "Sorting Comparsion Question",
    "prompt": "One good general-purpose solution to the problem of getting a key from a record is to store Key/Value pairs in the search structure",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Design/CompareTF3.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336005,
    "chapter": "Software Design",
    "title": "Sorting Comparsion Question",
    "prompt": "In order to be able to sort, the key values must define a total order",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Design/CompareTF5.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336006,
    "chapter": "Software Design",
    "title": "Sorting Comparsion Question",
    "prompt": "In order to do an exact-match search, the key values must define a total order",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Design/CompareTF6.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336007,
    "chapter": "Software Design",
    "title": "Sorting Comparsion Question",
    "prompt": "The problem with using a \".key()\" method to get the key from a record is that we can't use this same method to get different fields for different searches",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Design/CompareTF7.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336008,
    "chapter": "Software Design",
    "title": "Design Exercise: Efficient Dictionary Implementation",
    "prompt": "To be efficient, a dictionary implementation requires that the key type define a total order.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Design/DsgnTFdicteff.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336009,
    "chapter": "Software Design",
    "title": "Design Exercise: List",
    "prompt": "A list can be used to implement a dictionary.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Design/DsgnTFdictlst.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336010,
    "chapter": "Software Design",
    "title": "Design Exercise: List",
    "prompt": "The problem with using a list to implement a dictionary is that, while search or insert can be implemented efficiently, deletion cannot.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Design/DsgnTFdictlstprb.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336011,
    "chapter": "Software Design",
    "title": "Design Exercise: List",
    "prompt": "The list is an efficient data structure to use to implement a dictionary because we can make both of the key operations (insert and search) efficient.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Design/DsgnTFdictlsty.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336012,
    "chapter": "Intro Software Design",
    "title": "Week 10 Reading Quiz",
    "prompt": "True or False: you can create 2 Dimensional Arrays in Java.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::IntroToSoftwareDesign/2DArrayReadingQuizQuestion.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336014,
    "chapter": "Intro Software Design",
    "title": "Week 11 Reading Quiz",
    "prompt": "True or False: you can create 10 Dimensional Arrays in Java.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::IntroToSoftwareDesign/Week11ReadingQuizQ1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336015,
    "chapter": "Intro Software Design",
    "title": "Sets",
    "prompt": "True or False: the set {1, 2, 3, 4} and the set {4, 3, 1, 2} are the same",
    "correct": "True",
    "wrong": [
      [
        "False: even though the same elements are in both sets, the ordering makes them different",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ],
      [
        "False: {1, 2, 3, 4} and {4, 3, 2, 1} would be the same but since the second set is {4, 3, 1, 2}, they are different",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::IntroToSoftwareDesign/Week13Quiz1Q1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336016,
    "chapter": "Intro Software Design",
    "title": "Maps",
    "prompt": "True or False: In a Map, all keys must be unique.",
    "correct": "True",
    "wrong": [
      [
        "False: Repeated keys with different values are ok.",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ],
      [
        "False: Repeated Keys with the same values are ok.",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ],
      [
        "False: Keys must all be the same thing.",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::IntroToSoftwareDesign/Week13Quiz2Q2.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336017,
    "chapter": "Intro Software Design",
    "title": "Class Hierarchy and Inheritance",
    "prompt": "For this question assume you have a Rectangle class with length and width attributes defined. You then make a Square class that is a subclass of Rectangle . True or False: class Square will inherit the length and width attributes from Rectangle automatically.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::IntroToSoftwareDesign/Week2Quiz2Q1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336018,
    "chapter": "Intro Software Design",
    "title": "Reading Quiz",
    "prompt": "True or False: Commenting and proper indentation are important tools that can increase readability and understanding of your code and should always be used.",
    "correct": "True; using proper indentation and put comments in my code will always make editing, grading, and collaboration easier.",
    "wrong": [
      [
        "False; I want to make my own life and the lives of others more difficult by making my code unreadable.",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::IntroToSoftwareDesign/Week3ReadingQuizQ10.html). Correct answer: True; using proper indentation and put comments in my code will always make editing, grading, and collaboration easier..",
    "source": "OpenDSA"
  },
  {
    "id": 336019,
    "chapter": "Intro Software Design",
    "title": "Testing",
    "prompt": "True or False: When testing, we must be trying to demonstrate failures of some kind.",
    "correct": "True",
    "wrong": [
      [
        "False: This is a type of white box testing.",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ],
      [
        "False: This is an effective way to unit test.",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ],
      [
        "False: If the program works when you run it, then everything is fine.",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::IntroToSoftwareDesign/Week4Quiz1Q1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336020,
    "chapter": "Intro Software Design",
    "title": "Fields, Getters and Setters",
    "prompt": "Assume we are writing a getter method for the field private boolean isSunny; What would the correct return type for this method be?",
    "correct": "boolean",
    "wrong": [
      [
        "void",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ],
      [
        "int",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ],
      [
        "double",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::IntroToSoftwareDesign/Week5Quiz3Q3.html). Correct answer: boolean.",
    "source": "OpenDSA"
  },
  {
    "id": 336021,
    "chapter": "Intro Software Design",
    "title": "Null",
    "prompt": "True or False: you can initialize any variable that refers to an object to ``null``?",
    "correct": "True",
    "wrong": [
      [
        "False - Strings cannot be initialized to null",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ],
      [
        "False - classes cannot be initialized to null",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ],
      [
        "False - no variable can be initialized to null",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::IntroToSoftwareDesign/Week9Quiz3Q2.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336022,
    "chapter": "Computer Science Foundations",
    "title": "Checkpoint 1",
    "prompt": "If the coke guy put a soda with \"Bro\" into the front of the vending machine, followed by \"Sidekick\" and \"Better Half\", in what order will the machine users receive the cokes?",
    "correct": "\"Better Half\" \"Sidekick\" \"Bro\"",
    "wrong": [
      [
        "\"Bro\" \"Sidekick\" \"Better Half\"",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/StacksCheckpoint1Q1.html). Correct answer: \"Better Half\" \"Sidekick\" \"Bro\".",
    "source": "OpenDSA"
  },
  {
    "id": 336023,
    "chapter": "Software Design and Data Structures",
    "title": "OOP Intro 2",
    "prompt": "Consider the following: When foo is executed, what is printed out? public void foo () { int x = 42; int y = 24; mystery (x, y); System.out.println (x + \" \" + y); } public void mystery (int var1, int var2) { int temp = var1; var1 = var2; var2 = temp; }",
    "correct": "42 24",
    "wrong": [
      [
        "24 42",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/OOP1Checkpoint1Q2.html). Correct answer: 42 24.",
    "source": "OpenDSA"
  },
  {
    "id": 336024,
    "chapter": "Software Design and Data Structures",
    "title": "Checkpoint 1",
    "prompt": "If the coke guy put a soda with \"Bro\" into the front of the vending machine, followed by \"Sidekick\" and \"Better Half\", in what order will the machine users receive the cokes?",
    "correct": "\"Better Half\" \"Sidekick\" \"Bro\"",
    "wrong": [
      [
        "\"Bro\" \"Sidekick\" \"Better Half\"",
        "This is plausible software vocabulary, but it misses the design or language rule being tested.",
        "Anchor on the abstraction, comparison rule, or language behavior before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/StacksCheckpoint1Q1.html). Correct answer: \"Better Half\" \"Sidekick\" \"Bro\".",
    "source": "OpenDSA"
  }
])

export const openDsaCoreDataStructuresQuestions = makeQuestionBank('Software', [
  {
    "id": 336025,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Big Theta",
    "prompt": "Big-Theta notation ( \\Theta ) defines an equivalence relation on the set of functions.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AlgAnlsTFbgthta.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336026,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Sequential Search 1",
    "prompt": "The Sequential Search algorithm is in O(n^2) .",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AlgAnlsTFsqlsrch1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336027,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Sequential Search 2",
    "prompt": "The Sequential Search algorithm is \\Theta(n^2) .",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AlgAnlsTFsqlsrch2.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336028,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Searching Upper Bound",
    "prompt": "No algorithm for searching in an unsorted array can be worse than O(n) since any algorithm must look at every value in the array in the worst case.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AnalProblemTF1.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336029,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Sorting",
    "prompt": "The worst case upper bound for sorting an array is O(n \\log n) since this is the cost of the best algorithm (in the worst case) that we know about.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AnalProblemTF10.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336030,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Sorting",
    "prompt": "The lower bound of the sorting problem is \\Omega(n \\log n) because we can prove that this is the best cost that any sorting algorithm could reach.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AnalProblemTF11.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336031,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Sorting",
    "prompt": "The worst case lower bound for sorting an array is O(n \\log n) since this is the cost of the best algorithm (in the worst case) that we know about.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AnalProblemTF12.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336032,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Big Theta",
    "prompt": "The lower bound in the worst case for the problem of searching an unsorted array is \\Omega(n) because this is the worst case cost of the sequential search algorithm.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AnalProblemTF2.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336033,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Problem Upper Bound",
    "prompt": "The upper bound for a problem is defined as the upper bound cost for the best algorithm that we know.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AnalProblemTF4.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336034,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Problem Upper Bound",
    "prompt": "The upper bound for a problem is defined as the upper bound cost for the worst algorithm that we know.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AnalProblemTF5.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336035,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Problem Lower Bound",
    "prompt": "The lower bound for a problem is defined as the least cost that any algorithm could reach.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AnalProblemTF6.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336036,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Problem Lower Bound",
    "prompt": "The lower bound for a problem is defined as the cost of the best algorithm that we know.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/AnalProblemTF7.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336037,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Bounds",
    "prompt": "For all algorithms, if we completely understand the running time analysis, then the upper bound and lower bound will be the same.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/MisunderstandingsTF1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336038,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Big Theta",
    "prompt": "The upper bound and lower bounds of the sequential search algorithm is in O(n) and \\Omega(n) respectively.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/MisunderstandingsTF2.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336039,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Bounds",
    "prompt": "The worst case for sequential search occurs when the last element of the array is the value being searched for.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/MisunderstandingsTF3.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336040,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Bounds",
    "prompt": "The lower bound for the cost of sequential search is \\Omega(1) because this is the running time of the algorithm in the best case.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/MisunderstandingsTF4.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336041,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Bounds",
    "prompt": "The best case for the sequential search algorithm occurs when the array has only a single element.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/MisunderstandingsTF5.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336042,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm Analysis Exercise: Bounds",
    "prompt": "The worst case for the sequencial search algorithm occurs when the array size tends to infinity.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/MisunderstandingsTF6.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336043,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm analysis prelim exercise",
    "prompt": "There is only one way that a given problem can be solved.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/ProblemAlgorithmProgramTF1.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336044,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm analysis prelim exercise",
    "prompt": "A problem instance is a specific selection of values for the problem input.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/ProblemAlgorithmProgramTF11.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336045,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm analysis prelim exercise",
    "prompt": "There are some algorithms that do not terminate for certain inputs.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/ProblemAlgorithmProgramTF2.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336046,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm analysis prelim exercise",
    "prompt": "An algorithm is a series of steps that act as a recipe to solve a particular problem.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/ProblemAlgorithmProgramTF3.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336047,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm analysis prelim exercise",
    "prompt": "A problem instance is a series of steps that act as a recipe to solve a particular problem.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/ProblemAlgorithmProgramTF4.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336048,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm analysis prelim exercise",
    "prompt": "A problem is an instantiation of an algorithm implemented in a specific programming language.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/ProblemAlgorithmProgramTF5.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336049,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm analysis prelim exercise",
    "prompt": "A program is an instantiation of an algorithm implemented in a specific programming language.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/ProblemAlgorithmProgramTF6.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336050,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm analysis prelim exercise",
    "prompt": "An algorithm can only work if it is written in the right type of programming language.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/ProblemAlgorithmProgramTF7.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336051,
    "chapter": "Algorithm Analysis",
    "title": "Algorithm analysis prelim exercise",
    "prompt": "An algorithm maps inputs to outputs.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::AlgAnal/ProblemAlgorithmProgramTF9.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336052,
    "chapter": "Trees",
    "title": "BST Classification Question",
    "prompt": "A IARRAY[IT] is another name for a IARRAY[NOTIT] .",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Binary/BSTbinTF.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336053,
    "chapter": "Trees",
    "title": "Traversals: Leaf Node Order",
    "prompt": "When you print out the nodes of binary tree, the leaf nodes appear in the same relative order for the preorder, inorder, and postorder traversals.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Binary/TravTForder.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336054,
    "chapter": "Trees",
    "title": "Traversals: Reconstruct a Binary Tree",
    "prompt": "If you are given the order of the nodes as visited by a postorder traversal and the order of the nodes as visited by an inorder traversal, do you have enough information to reconstruct the original tree? Assume that the nodes all have unique values.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Binary/TravTFpostin.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336055,
    "chapter": "Trees",
    "title": "Traversals: Reconstruct a Binary Tree",
    "prompt": "If you are given the order of the nodes as visited by a preorder traversal and the order of the nodes as visited by an inorder traversal, do you have enough information to reconstruct the original tree? Assume that the nodes all have unique values.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Binary/TravTFprein.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336056,
    "chapter": "Trees",
    "title": "Travesals: Reconstruct a tree",
    "prompt": "If you are given the order of the nodes as visited by a preorder traversal and the order of the nodes as visited by a postorder traversal, do you have enough information to reconstruct the original tree? Assume that the nodes all have unique values.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Binary/TravTFprepost.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336057,
    "chapter": "Graphs",
    "title": "Graph Adjacent TF 2",
    "prompt": "Two vertices of a graph are ADJACENT if there is an edge joining them.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Graph/GAdjacentTF2.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336058,
    "chapter": "Graphs",
    "title": "Graph Terms: DAG",
    "prompt": "A DAG is a directed graph without cycles.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Graph/GDAGTF.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336059,
    "chapter": "Graphs",
    "title": "Graph Adjacent TF 2",
    "prompt": "Two vertices can be adjacent even if they are not neighbors.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Graph/GneighborTF.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336060,
    "chapter": "Graphs",
    "title": "Graph Terms: Weighted",
    "prompt": "A weighted graph must have edge weights and be directed",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Graph/GweightTF.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336061,
    "chapter": "Hash Tables",
    "title": "Hash Deletion Question 3",
    "prompt": "When deleting a record from a hash table, we can just do a normal search and then remove the record from the slot where we find it.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Hashing/HashDelTF3.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336062,
    "chapter": "Hash Tables",
    "title": "Hash Deletion Question 4",
    "prompt": "A problem with using tombstones is that they take up slots in the table that cannot be reused, so that over time the effective table size shrinks.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Hashing/HashDelTF4.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336063,
    "chapter": "Hash Tables",
    "title": "Hash Deletion Question 5",
    "prompt": "A problem with using tombstones is that they take up slots in the table, so they slightly increase the search and insert time.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Hashing/HashDelTF5.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336064,
    "chapter": "Hash Tables",
    "title": "Hash Function Question 6",
    "prompt": "A company wants to use a system where they randomly assign each customer a 9-digit ID (so there are 1 billion possible ID numbers). Of course, there is a chance that two customers will be assigned the same ID. But the company figures that risk is OK if the odds are small enough. They expect to assign IDs to 1000 customers. The chance of a collision is therefore one in a million.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Hashing/HashFuncCChance1.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336065,
    "chapter": "Hash Tables",
    "title": "Hash Function Question 6",
    "prompt": "For the string hash functions, the size of the hash table limits the length of the string that can be hashed.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Hashing/HashFuncTF6.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336066,
    "chapter": "Hash Tables",
    "title": "Hash Function Question 7",
    "prompt": "Open hashing has the advantage that it can answer range queries or questions like what is the largest key in the database.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Hashing/HashFuncTF7.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336067,
    "chapter": "Hash Tables",
    "title": "Hash System Type for Disk: Open Hashing",
    "prompt": "Open hashing works well for disk-based hash systems.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Hashing/HashFuncTFdisk1.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336068,
    "chapter": "Hash Tables",
    "title": "Hash System Type for Disk: Closed Hashing",
    "prompt": "Closed hashing works well for disk-based hash systems.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Hashing/HashFuncTFdisk2.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336069,
    "chapter": "Hash Tables",
    "title": "Hash System Type for Disk: Bucket Hashing",
    "prompt": "Bucket hashing works well for disk-based hash systems.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Hashing/HashFuncTFdisk3.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336070,
    "chapter": "Hash Tables",
    "title": "Hashing Question: Closed Hashing",
    "prompt": "Which of the following is true of closed hashing?",
    "correct": "All records are stored directly within the hash table",
    "wrong": [
      [
        "Records are stored on a list associated with a slot in the hash table",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Hashing/HashMCQclosed.html). Correct answer: All records are stored directly within the hash table.",
    "source": "OpenDSA"
  },
  {
    "id": 336071,
    "chapter": "Lists",
    "title": "OpenDSA Array List Exercise: Predecessor Access",
    "prompt": "In an array-based list implementation, to access the predecessor of the current node we must start at the first node in the list.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::List/ALTFpred.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336072,
    "chapter": "Lists",
    "title": "OpenDSA List Linked Exercise: Find Element",
    "prompt": "To find an element with value X in a linked list with n nodes requires how many nodes to be visited in the worst case?",
    "correct": "n nodes",
    "wrong": [
      [
        "Two nodes",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "\\log n nodes",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "One node",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "n^2 nodes",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::List/LLMCQfndelm.html). Correct answer: n nodes.",
    "source": "OpenDSA"
  },
  {
    "id": 336073,
    "chapter": "Lists",
    "title": "OpenDSA List Linked Exercise: Physical Order",
    "prompt": "The physical order in memory for the nodes of a linked list is the same as the order in which the nodes appear in the list.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::List/LLTFphys.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336074,
    "chapter": "Lists",
    "title": "OpenDSA List Linked Exercise: Predecessor Access",
    "prompt": "In a singly linked list implementation, to access the predecessor of the current node we must start at the first node in the list.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::List/LLTFpred.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336075,
    "chapter": "Lists",
    "title": "OpenDSA Array List Exercise: Doubly Linked List Implementation",
    "prompt": "In a doubly linked list implementation, to access the predecessor of the current node we must start at the first node in the list.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::List/ListTFdblimpl.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336076,
    "chapter": "Lists",
    "title": "OpenDSA Array List Exercise: Interconnect",
    "prompt": "A doubly linked list is a pair of singly linked lists that each interconnect the same nodes.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::List/ListTFintrcnnct.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336077,
    "chapter": "Lists",
    "title": "OpenDSA Array List Exercise: Linked List Size",
    "prompt": "Linked lists are better than array-based lists when the final size of the list is known in advance",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::List/ListTFlstsz.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336078,
    "chapter": "Lists",
    "title": "General List Questions: Enqueue and Dequeue Data Structure",
    "prompt": "The terms \"enqueue\" and \"dequeue\" are associated with which data structure?",
    "correct": "Queue",
    "wrong": [
      [
        "Stack",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Array",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "List",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "All of these",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "None of these",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::List/ListdsMCQenqdq.html). Correct answer: Queue.",
    "source": "OpenDSA"
  },
  {
    "id": 336079,
    "chapter": "Computer Science Foundations",
    "title": "Recursion Checkpoint 4",
    "prompt": "Given a recursive algorithm to calculate the the nth fibonacci number that makes 2 recursive calls. Approximately how many recursive calls would it make to calculate the 7th fibonacci number? The fibonacci series is a series of numbers in which each number is the sum of the two preceding numbers. Here's the beginning of the sequence: 1, 1, 2, 3, 5, 8",
    "correct": "2^7",
    "wrong": [
      [
        "7^2",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "7",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Log7",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/AdditionalStuff/RecursionCheckpoint4Q2.html). Correct answer: 2^7.",
    "source": "OpenDSA"
  },
  {
    "id": 336080,
    "chapter": "Computer Science Foundations",
    "title": "Bags Checkpoint 3",
    "prompt": "Which of the following 5 implementations could not be used for contains?",
    "correct": "public boolean contains(T anEntry) { return !isEmpty(); }",
    "wrong": [
      [
        "public boolean contains(T anEntry) { boolean found = false; int i = 0; while ( !found && (i",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "public boolean contains(T anEntry) { return getIndexOf(anEntry) > -1; }",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "public boolean contains(T anEntry) { return getFrequencyOf(anEntry) > 0; }",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "public boolean contains(T anEntry) { int i = 0; while (i",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/BagsCheckpoint3Q1.html). Correct answer: public boolean contains(T anEntry) { return !isEmpty(); }.",
    "source": "OpenDSA"
  },
  {
    "id": 336081,
    "chapter": "Computer Science Foundations",
    "title": "Bags Checkpoint 3",
    "prompt": "Which of the following 5 implementations could not be used for getFrequency?",
    "correct": "public int getFrequencyOf(T anEntry) { int i = 0; int count = 0; while(anEntry.equals(contents[i])) { i++; count++; } return numberOfEntries - count; }",
    "wrong": [
      [
        "public int getFrequencyOf(T anEntry) { int count = 0; for(int i = 0; i",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "public int getFrequencyOf(T anEntry) { int count = 0; for(int i = numberOfEntries - 1; i >= 0; i--) { if(anEntry.equals(contents[i])) { count++; } } return count; }",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "public int getFrequencyOf(T anEntry) { int i = 0; int count = 0; while( i",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "public int getFrequencyOf(T anEntry) { int count = 0; for(int i = numberOfEntries - 1; i > -1; i--) { if(anEntry.equals(contents[i])) { count++; } } return count; }",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/BagsCheckpoint3Q2.html). Correct answer: public int getFrequencyOf(T anEntry) { int i = 0; int count = 0; while(anEntry.equals(contents[i])) { i++; count++; } return numberOfEntries - count; }.",
    "source": "OpenDSA"
  },
  {
    "id": 336082,
    "chapter": "Computer Science Foundations",
    "title": "Bags Checkpoint 4",
    "prompt": "Which of the following would not be an alternate way to write remove() method?",
    "correct": "public T remove() { T result = removeEntry(getIndexOf(null)); return result; }",
    "wrong": [
      [
        "public T remove() { return removeEntry(numberOfEntries-1); }",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "public T remove() { T result = null; if (numberOfEntries > 0) { result = contents[numberOfEntries -1]; contents[numberOfEntries - 1] = null; numberOfEntries--; } return result; }",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "public T remove() { T result = removeEntry(numberOfEntries-1); return result; }",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/BagsCheckpoint4Q2.html). Correct answer: public T remove() { T result = removeEntry(getIndexOf(null)); return result; }.",
    "source": "OpenDSA"
  },
  {
    "id": 336083,
    "chapter": "Computer Science Foundations",
    "title": "Comparing and Sorting Checkpoint 4",
    "prompt": "Based on the insertion sort code traced in the demo. Given an array",
    "correct": "{2, 3, 15, 46, 10, 9}",
    "wrong": [
      [
        "{15, 2, 46, 3, 10, 9}",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "{2, 3, 46, 15, 10, 9}",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "{2, 3, 10, 15, 46, 9}",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "{2, 3, 9, 10, 46, 15}",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/CompSortCheckpoint4Q1.html). Correct answer: {2, 3, 15, 46, 10, 9}.",
    "source": "OpenDSA"
  },
  {
    "id": 336084,
    "chapter": "Computer Science Foundations",
    "title": "Comparing and Sorting Checkpoint 4",
    "prompt": "Based on the insertion sort code traced in the demo. Given an array",
    "correct": "{2, 3, 10, 15, 46, 9}",
    "wrong": [
      [
        "{2, 3, 9, 46, 15, 10}",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "{2, 3, 15, 46, 10, 9}",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "{2, 3, 10, 46, 15, 9}",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "{2, 3, 9, 10, 46, 15}",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/CompSortCheckpoint4Q2.html). Correct answer: {2, 3, 10, 15, 46, 9}.",
    "source": "OpenDSA"
  },
  {
    "id": 336085,
    "chapter": "Computer Science Foundations",
    "title": "Comparing and Sorting Checkpoint 5",
    "prompt": "Based on the insertion sort code traced in the demo for a linked chain. Given a linked chain containing 8 -> 4 -> 32 -> 16 -> 256 -> 64 -> 128 , what is the state of the sorted and unsorted linked chains at the end of the second time through the while loop in insertionSort?",
    "correct": "4 -> 8 -> 32, 16 -> 256 -> 64 -> 128",
    "wrong": [
      [
        "4 -> 8 -> 32 -> 16 -> 256, 64 -> 128",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "4 -> 8, 16 -> 256 -> 64 -> 128",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "4 -> 8 -> 16, 32 -> 64 -> 256 -> 128",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "4 -> 8 -> 16, 32 -> 64 -> 128 -> 256",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/CompSortCheckpoint5Q1.html). Correct answer: 4 -> 8 -> 32, 16 -> 256 -> 64 -> 128.",
    "source": "OpenDSA"
  },
  {
    "id": 336086,
    "chapter": "Computer Science Foundations",
    "title": "Comparing and Sorting Checkpoint 5",
    "prompt": "Based on the insertion sort code traced in the demo for a linked chain. Given a linked chain containing 8 -> 4 -> 32 -> 16 -> 256 -> 64 -> 128 , what is the state of the sorted and unsorted linked chains at the end of the fifth time through the while loop in insertionSort?",
    "correct": "4 -> 8 -> 16 -> 32 -> 64 -> 256, 128",
    "wrong": [
      [
        "4 -> 8 -> 16 -> 32 -> 64 -> 128 -> 256",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "4 -> 8 -> 16 -> 32 -> 256, 64 -> 128",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "4 -> 8 -> 32, 16 -> 256 -> 64 -> 128",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "4 -> 8 -> 16 -> 64 -> 256 -> 32 -> 128",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/CompSortCheckpoint5Q2.html). Correct answer: 4 -> 8 -> 16 -> 32 -> 64 -> 256, 128.",
    "source": "OpenDSA"
  },
  {
    "id": 336087,
    "chapter": "Computer Science Foundations",
    "title": "Iterators Checkpoint 1",
    "prompt": "Use a list containing exercise objects: bicep curls, burpees, lunges, overhead presses, planks, push-ups, sit-ups, squats, tricep dips. What would a first call to next() return?",
    "correct": "bicep curls",
    "wrong": [
      [
        "Null",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "burpees",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "squats",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "tricep dips",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "NoSuchElement Exception",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/IteratorsCheckpoint1Q2.html). Correct answer: bicep curls.",
    "source": "OpenDSA"
  },
  {
    "id": 336088,
    "chapter": "Computer Science Foundations",
    "title": "Iterators Checkpoint 3",
    "prompt": "True or False: The next method needs to be called for each time the remove method is called in order to avoid an exception being thrown.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/IteratorsCheckpoint3Q2.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336089,
    "chapter": "Computer Science Foundations",
    "title": "Iterators Checkpoint 3",
    "prompt": "True or False: A class that implements Iterator will have a compile time error if it does not implement a remove method",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/IteratorsCheckpoint3Q3.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336090,
    "chapter": "Computer Science Foundations",
    "title": "Iterators Checkpoint 3",
    "prompt": "True or False: An enhanced for statement can be programmed manually using a call to the iterator() method and calling the hasNext() and next() methods of the returned iterator.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/IteratorsCheckpoint3Q4.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336091,
    "chapter": "Computer Science Foundations",
    "title": "Iterators Checkpoint 3",
    "prompt": "True or False: A ListIterator provides a superset of the functionality that an Iterator provides.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/IteratorsCheckpoint3Q5.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336092,
    "chapter": "Computer Science Foundations",
    "title": "Linked Chain Checkpoint 2",
    "prompt": "For this question, refer back to the code in LinkedChain.java What if the line statement",
    "correct": "57, -2, 10, 40",
    "wrong": [
      [
        "40, 10, -2, 57",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "10, -2, 57, 40",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "40, 57, -2, 10",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/LinkedChainCheckpoint2Q1.html). Correct answer: 57, -2, 10, 40.",
    "source": "OpenDSA"
  },
  {
    "id": 336093,
    "chapter": "Computer Science Foundations",
    "title": "Linked Chain Checkpoint 2",
    "prompt": "For this question, refer back to the code in LinkedChain.java What if the line statement",
    "correct": "16, 57, -2, 10",
    "wrong": [
      [
        "16, 10, -2, 57",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "10, -2, 57, 16",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "57, -2, 10, 16",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/LinkedChainCheckpoint2Q2.html). Correct answer: 16, 57, -2, 10.",
    "source": "OpenDSA"
  },
  {
    "id": 336094,
    "chapter": "Computer Science Foundations",
    "title": "Lists Checkpoint 3",
    "prompt": "Based on ListInteface.java, an attempt to remove an item from an empty list will...",
    "correct": "Throw an IndexOutofBoundsException",
    "wrong": [
      [
        "Return null",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Set the length of the list to -1",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Return the same item",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/ListsCheckpoint3Q1.html). Correct answer: Throw an IndexOutofBoundsException.",
    "source": "OpenDSA"
  },
  {
    "id": 336095,
    "chapter": "Computer Science Foundations",
    "title": "Queues Checkpoint 2",
    "prompt": "After the following statements execute, what item is at the front of the queue?",
    "correct": "\"cheetah\"",
    "wrong": [
      [
        "\"jaguar\"",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "\"tiger\"",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "\"lion\"",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/QueueCheckpoint2Q2.html). Correct answer: \"cheetah\".",
    "source": "OpenDSA"
  },
  {
    "id": 336096,
    "chapter": "Computer Science Foundations",
    "title": "Queues Checkpoint 4",
    "prompt": "What item is at the front of the deque after these statements are executed?",
    "correct": "Rudy",
    "wrong": [
      [
        "Jack",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Larry",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Sam",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/QueueCheckpoint4Q1.html). Correct answer: Rudy.",
    "source": "OpenDSA"
  },
  {
    "id": 336097,
    "chapter": "Computer Science Foundations",
    "title": "Queues Checkpoint 4",
    "prompt": "What item is at the front of the deque after these statements are executed?",
    "correct": "Rudy",
    "wrong": [
      [
        "Jack",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Larry",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Sam",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/QueueCheckpoint4Q2.html). Correct answer: Rudy.",
    "source": "OpenDSA"
  },
  {
    "id": 336098,
    "chapter": "Computer Science Foundations",
    "title": "Queues Checkpoint 4",
    "prompt": "What item is at the front of the deque after these statements are executed?",
    "correct": "Sam",
    "wrong": [
      [
        "Adam",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Rudy",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Jack",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/QueueCheckpoint4Q3.html). Correct answer: Sam.",
    "source": "OpenDSA"
  },
  {
    "id": 336099,
    "chapter": "Computer Science Foundations",
    "title": "Queues Checkpoint 8",
    "prompt": "Given a full queue in an array contents that is storing the values {'Y','E',null,'N','O','T'} What happens when enqueue('T') is called? Once the demonstrated ensureCapacity method is executed, what will be store in contents[1] ?",
    "correct": "O",
    "wrong": [
      [
        "Y",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "E",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "N",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "Null",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/QueueCheckpoint8Q1.html). Correct answer: O.",
    "source": "OpenDSA"
  },
  {
    "id": 336100,
    "chapter": "Computer Science Foundations",
    "title": "Queues Checkpoint 8",
    "prompt": "Given a circular array implementation of a queue in this state: with queue.length as 7, you are to finish the trace of ensureCapacity() . Refer back to ensureCapacity() and complete the trace. What are the values of frontIndex and backIndex after the call is complete?",
    "correct": "0,5",
    "wrong": [
      [
        "1,6",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "1,14",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "0,12",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/QueueCheckpoint8Q2.html). Correct answer: 0,5.",
    "source": "OpenDSA"
  },
  {
    "id": 336101,
    "chapter": "Computer Science Foundations",
    "title": "Checkpoint 4",
    "prompt": "In the demonstrated linked-chain implementation of a StackADT, when a node is popped from the stack...",
    "correct": "the original first node will no longer be referenced",
    "wrong": [
      [
        "the original first node will have a new value",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "the second to last node will now be the top",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "all of these answers are true",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::MengBridgeCourse/StacksCheckpoint4Q1.html). Correct answer: the original first node will no longer be referenced.",
    "source": "OpenDSA"
  },
  {
    "id": 336102,
    "chapter": "Recursion",
    "title": "Recursion Summary Question: Recursive Method Return",
    "prompt": "A recursive function is invoked differently from a non-recursive method.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::RecurTutor/RecTFdifference.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336103,
    "chapter": "Recursion",
    "title": "Recursion Summary Question: Recursive Solution",
    "prompt": "Sometimes, using recursion enables you to give a natural, straightforward solution for a program that would otherwise be difficult to solve.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::RecurTutor/RecTFdifficult.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336104,
    "chapter": "Recursion",
    "title": "Recursion Summary Question: Recursive Call",
    "prompt": "Infinite recursion can occur if some recursive call does not reduce the problem in a manner that allows it to eventually converge into the base case.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::RecurTutor/RecTFinfcause.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336105,
    "chapter": "Recursion",
    "title": "Recursion Summary Question: Infinite Recursion",
    "prompt": "A properly written recursive function must have more than one recursive call.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::RecurTutor/RecTFnumrec.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336106,
    "chapter": "Recursion",
    "title": "Recursion Summary Question: Recursive Call",
    "prompt": "Every recursive call reduces the problem size, bringing it increasingly closer to a base case until it becomes that case.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::RecurTutor/RecTFreduce.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336107,
    "chapter": "Recursion",
    "title": "Recursion Summary Question: Recursive Method Return",
    "prompt": "Every recursive method must have a return value.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::RecurTutor/RecTFreturn.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336108,
    "chapter": "Recursion",
    "title": "Recursion Summary Question: Recursive method",
    "prompt": "Every recursive method must have a base case or a stopping condition.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::RecurTutor/RecTFstop.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336109,
    "chapter": "Software Design and Data Structures",
    "title": "BST Intro 1",
    "prompt": "Binary search trees with no duplicate entries have all leaves on the the second level. False",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint1Q1.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336110,
    "chapter": "Software Design and Data Structures",
    "title": "BST Intro 2",
    "prompt": "Binary search trees with no duplicate entries have nodes with exactly two children . False",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint1Q2.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336111,
    "chapter": "Software Design and Data Structures",
    "title": "BST Intro 3",
    "prompt": "Binary search trees with no duplicate entries have nodes with 0,1, or 2 children. True",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint1Q3.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336112,
    "chapter": "Software Design and Data Structures",
    "title": "BST Intro 4",
    "prompt": "For binary search trees with no duplicate entries, entries in the right subtree of a node are less than the entry in the node. False",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint1Q4.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336113,
    "chapter": "Software Design and Data Structures",
    "title": "BST Intro 5",
    "prompt": "For binary search trees with no duplicate entries, entries in the left subtree of a node are less than the entry in the node. True",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint1Q5.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336114,
    "chapter": "Software Design and Data Structures",
    "title": "BST Intro 6",
    "prompt": "For binary search trees with no duplicate entries, entries in the right subtree of a node are greater than the entry in the node. True",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint1Q6.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336115,
    "chapter": "Software Design and Data Structures",
    "title": "BST Intro 7",
    "prompt": "For binary search trees with no duplicate entries, entries in the left subtree of a node are greater than the entry in the node. False",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint1Q7.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336116,
    "chapter": "Software Design and Data Structures",
    "title": "BST Programming 1",
    "prompt": "The find method traced in the video is recursive. True",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint2Q1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336117,
    "chapter": "Software Design and Data Structures",
    "title": "BST Programming 2",
    "prompt": "The find method traced in the video is an equals method for binary search trees. False",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint2Q2.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336118,
    "chapter": "Software Design and Data Structures",
    "title": "BST Programming 3",
    "prompt": "The find method traced in the video depends on T extending Comparable. True",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint2Q3.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336119,
    "chapter": "Software Design and Data Structures",
    "title": "BST Programming 4",
    "prompt": "The find method traced in the video depends on data extending Comparator. False",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint2Q4.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336120,
    "chapter": "Software Design and Data Structures",
    "title": "BST Programming 5",
    "prompt": "The find method traced in the video throws an exception when data is not found. False",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/BSTCheckpoint2Q5.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336121,
    "chapter": "Software Design and Data Structures",
    "title": "Fundamentals 1",
    "prompt": "Deep copy for an object means performing a shallow copy plus copying all of the mutable objects inside the object. True",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/CloningQ1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336122,
    "chapter": "Software Design and Data Structures",
    "title": "Fundamentals 2",
    "prompt": "Shallow copy for an object means creating a new instance of the object containing a copy of all of its instance variables references.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/CloningQ2.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336123,
    "chapter": "Software Design and Data Structures",
    "title": "Fundamentals 2",
    "prompt": "Consider the following: When foo is executed, what is printed out? public void foo () { int x = 42; int y = 24; mystery (x, y); System.out.println (x + \" \" + y); } public void mystery (int var1, int var2) { int temp = var1; var1 = var2; var2 = temp; }",
    "correct": "42 24",
    "wrong": [
      [
        "24 42",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/FundamentalsQ2.html). Correct answer: 42 24.",
    "source": "OpenDSA"
  },
  {
    "id": 336124,
    "chapter": "Software Design and Data Structures",
    "title": "Iterators Checkpoint 1",
    "prompt": "Use a list containing exercise objects: bicep curls, burpees, lunges, overhead presses, planks, push-ups, sit-ups, squats, tricep dips. What would a first call to next() return?",
    "correct": "bicep curls",
    "wrong": [
      [
        "Null",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "burpees",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "squats",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "tricep dips",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "NoSuchElement Exception",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/IteratorsCheckpoint1Q2.html). Correct answer: bicep curls.",
    "source": "OpenDSA"
  },
  {
    "id": 336125,
    "chapter": "Software Design and Data Structures",
    "title": "Iterators Checkpoint 3",
    "prompt": "True or False: The next method needs to be called for each time the remove method is called in order to avoid an exception being thrown.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/IteratorsCheckpoint3Q2.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336126,
    "chapter": "Software Design and Data Structures",
    "title": "Iterators Checkpoint 3",
    "prompt": "True or False: A class that implements Iterator will have a compile time error if it does not implement a remove method",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/IteratorsCheckpoint3Q3.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336127,
    "chapter": "Software Design and Data Structures",
    "title": "Iterators Checkpoint 3",
    "prompt": "True or False: An enhanced for statement can be programmed manually using a call to the iterator() method and calling the hasNext() and next() methods of the returned iterator.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/IteratorsCheckpoint3Q4.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336128,
    "chapter": "Software Design and Data Structures",
    "title": "Iterators Checkpoint 3",
    "prompt": "True or False: A ListIterator provides a superset of the functionality that an Iterator provides.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/IteratorsCheckpoint3Q5.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336129,
    "chapter": "Software Design and Data Structures",
    "title": "Checkpoint 3",
    "prompt": "The following variable myObj is declared as type GeneralCase and assigned an instance of a subclass of GeneralCase called SpecificCase . Both contain implementations of a method called total() .",
    "correct": "The one in SpecificCase",
    "wrong": [
      [
        "The one in GeneralCase",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/OOP2Checkpoint3Q2.html). Correct answer: The one in SpecificCase.",
    "source": "OpenDSA"
  },
  {
    "id": 336130,
    "chapter": "Software Design and Data Structures",
    "title": "Style Checkpoint 1",
    "prompt": "Which of the following is false according to the course style guidelines?",
    "correct": "constants use a reverse camel case convention",
    "wrong": [
      [
        "methods and variable follow the same naming convention",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "classes and interfaces both follow the same naming convention",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "package names should be all lowercase",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/StyleCheckpoint1Q2.html). Correct answer: constants use a reverse camel case convention.",
    "source": "OpenDSA"
  },
  {
    "id": 336131,
    "chapter": "Software Design and Data Structures",
    "title": "Style Checkpoint 2",
    "prompt": "Which of the following do not need to be avoided to adhere to the course style guidelines",
    "correct": "sufficient javadocs",
    "wrong": [
      [
        "debug statements left within the code",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "lines that are too long",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "unused fields/variables",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ],
      [
        "hardcoded values",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/StyleCheckpoint2Q1.html). Correct answer: sufficient javadocs.",
    "source": "OpenDSA"
  },
  {
    "id": 336132,
    "chapter": "Software Design and Data Structures",
    "title": "Variables 1",
    "prompt": "What does a reference type represent?",
    "correct": "a memory address reference instead of the actual item stored at that address",
    "wrong": [
      [
        "simple indecomposable values",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::SWDesignAndDataStructs/VariablesQ1.html). Correct answer: a memory address reference instead of the actual item stored at that address.",
    "source": "OpenDSA"
  },
  {
    "id": 336133,
    "chapter": "Sorting",
    "title": "Binsort Question: Ordering",
    "prompt": "Binsort's time complexity depends on the initial ordering of the keys in the input array.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/BinsortTF1.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336134,
    "chapter": "Sorting",
    "title": "Bubble Sort: Stable",
    "prompt": "Bubble Sort (as the code is written in this module) is a stable sorting algorithm. Recall that a stable sorting algorithm maintains the relative order of records with equal keys.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/BubsortTFstable.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336135,
    "chapter": "Sorting",
    "title": "Exchange Sort Question",
    "prompt": "Consider an array A of n records each with a unique key value, and A_R the same array in reverse order. Any given pair of records must be an inversion in exactly one of A or A_R .",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/ExchangeTF1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336136,
    "chapter": "Sorting",
    "title": "Exchange Sort Question",
    "prompt": "Consider an array A of n records each with a unique key value, and A_R the same array in reverse order. There are a certain number of pairs, where an arbitrary position i and position j is a pair. Between these two arrays, exactly half of these pairs must be inverted.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/ExchangeTF2.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336137,
    "chapter": "Sorting",
    "title": "Heapsort Question: Stable",
    "prompt": "Heapsort (as the code is written in this module) is a stable sorting algorithm. Recall that a stable sorting algorithm maintains the relative order of records with equal keys.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/HeapsortTFstable.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336138,
    "chapter": "Sorting",
    "title": "Insertion Sort Question",
    "prompt": "Insertion Sort (as the code is written in this module) is a stable sorting algorithm. Recall that a stable sorting algorithm maintains the relative order of records with equal keys.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/InssortTFstable.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336139,
    "chapter": "Sorting",
    "title": "Mergesort Implementation Question 1",
    "prompt": "Mergesort is easier to implement when operating on a linked list than on an array.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/MergeImplTF1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336140,
    "chapter": "Sorting",
    "title": "Mergesort Question: Stable",
    "prompt": "Mergesort (as the code is written in this module) is a stable sorting algorithm. Recall that a stable sorting algorithm maintains the relative order of records with equal keys.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/MergesortTFstable.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336141,
    "chapter": "Sorting",
    "title": "Quicksort Question: Stable",
    "prompt": "Quicksort (as the code is written in this module) is a stable sorting algorithm. Recall that a stable sorting algorithm maintains the relative order of records with equal keys.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/QuicksortTFstable.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336142,
    "chapter": "Sorting",
    "title": "Radix Sort Question 1",
    "prompt": "Radix sort processes one digit at a time, and it uses a Binsort to sort the n records on that digit. However, any stable sort could have been used in place of the Binsort.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/RadixSortTF1.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336143,
    "chapter": "Sorting",
    "title": "Radix Sort Question 3",
    "prompt": "Radix Sort as implemented in this module would be a good solution for alphabetizing words.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/RadixSortTF3.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336144,
    "chapter": "Sorting",
    "title": "Radix Sort Question 1",
    "prompt": "Binsort can be viewed as a special case of Radix Sort where the base is so big that all keys are one digit long.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/RadixSortTFbin.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336145,
    "chapter": "Sorting",
    "title": "Selection Sort: Compare to Other Sorts",
    "prompt": "Selection sort is simple, but less efficient than the best sorting algorithms.",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/SelsortTF6.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336146,
    "chapter": "Sorting",
    "title": "Selection Sort Question",
    "prompt": "Selection Sort (as the code is written in this module) is a stable sorting algorithm. Recall that a stable sorting algorithm maintains the relative order of records with equal keys.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/SelsortTFstable.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336147,
    "chapter": "Sorting",
    "title": "Shellsort Increment Question",
    "prompt": "In shellsort it is illegal to have an increment of {5|8} when the array size is 14.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/ShellsortTFincr.html). Correct answer: False.",
    "source": "OpenDSA"
  },
  {
    "id": 336148,
    "chapter": "Sorting",
    "title": "Comparison of Sorting Algorithms Question 13",
    "prompt": "Selection Sort is generally faster than the Bubble Sort on the same input",
    "correct": "True",
    "wrong": [
      [
        "False",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/SortAlgCompTF13.html). Correct answer: True.",
    "source": "OpenDSA"
  },
  {
    "id": 336149,
    "chapter": "Sorting",
    "title": "Sorting Lower Bounds Question 4",
    "prompt": "The proof that the lower bound for the sorting problem is \\Omega(n \\log n) technically only applies to comparison-based sorting. This means that we can find other approaches (such as radix sort) to solve the problem faster.",
    "correct": "False",
    "wrong": [
      [
        "True",
        "This is a nearby data-structure or algorithm idea, but it does not satisfy the stated operation, bound, or invariant.",
        "Track the operation, complexity class, or structure invariant before choosing."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::Sorting/SortBoundTF4.html). Correct answer: False.",
    "source": "OpenDSA"
  }
])

export const openDsaCoreFormalLogicQuestions = makeQuestionBank('Software', [
  {
    "id": 336150,
    "chapter": "Programming Languages",
    "title": "OR in Church Encoding",
    "prompt": "Given appropriate encodings of TRUE, FALSE, and IF, which one of the following definitions correctly encodes the Boolean operator OR in the λ calculus?",
    "correct": "OR = λp.λq.(((IF p) TRUE) q)",
    "wrong": [
      [
        "OR = λp.λq.(((IF p) FALSE) q)",
        "This is a nearby language-theory option, but it does not follow the grammar, syntax, or encoding rule in the prompt.",
        "Work from the grammar, binding, or encoding rule rather than surface syntax."
      ],
      [
        "OR = λp.λq.(((IF TRUE) p) q)",
        "This is a nearby language-theory option, but it does not follow the grammar, syntax, or encoding rule in the prompt.",
        "Work from the grammar, binding, or encoding rule rather than surface syntax."
      ],
      [
        "OR = λp.λq.(((IF FALSE) p) q)",
        "This is a nearby language-theory option, but it does not follow the grammar, syntax, or encoding rule in the prompt.",
        "Work from the grammar, binding, or encoding rule rather than surface syntax."
      ],
      [
        "OR = λp.λq.(((IF TRUE) q) p)",
        "This is a nearby language-theory option, but it does not follow the grammar, syntax, or encoding rule in the prompt.",
        "Work from the grammar, binding, or encoding rule rather than surface syntax."
      ],
      [
        "OR = λp.λq.(((IF FALSE) q) p)",
        "This is a nearby language-theory option, but it does not follow the grammar, syntax, or encoding rule in the prompt.",
        "Work from the grammar, binding, or encoding rule rather than surface syntax."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::PL/ChurchOR.html). Correct answer: OR = λp.λq.(((IF p) TRUE) q).",
    "source": "OpenDSA"
  },
  {
    "id": 336151,
    "chapter": "Programming Languages",
    "title": "Curry in SLang 1",
    "prompt": "Which one of the following expressions is the curry function written in SLang 1?",
    "correct": "fn(f)=>fn(x)=>fn(y)=>(f x y)",
    "wrong": [
      [
        "fn(f)=>fn(x)=>fn(y)=>(f (x y))",
        "This is a nearby language-theory option, but it does not follow the grammar, syntax, or encoding rule in the prompt.",
        "Work from the grammar, binding, or encoding rule rather than surface syntax."
      ],
      [
        "fn(f)=>fn(x)=>fn(y)=>((f x) y)",
        "This is a nearby language-theory option, but it does not follow the grammar, syntax, or encoding rule in the prompt.",
        "Work from the grammar, binding, or encoding rule rather than surface syntax."
      ],
      [
        "fn(f)=>fn(x)=>(fn(y)=>(f (x y)))",
        "This is a nearby language-theory option, but it does not follow the grammar, syntax, or encoding rule in the prompt.",
        "Work from the grammar, binding, or encoding rule rather than surface syntax."
      ],
      [
        "fn(f)=>fn(x)=>(fn(y)=>((f x) y))",
        "This is a nearby language-theory option, but it does not follow the grammar, syntax, or encoding rule in the prompt.",
        "Work from the grammar, binding, or encoding rule rather than surface syntax."
      ],
      [
        "fn(f)=>fn(x)=>(fn(y)=>(f x y))",
        "This is a nearby language-theory option, but it does not follow the grammar, syntax, or encoding rule in the prompt.",
        "Work from the grammar, binding, or encoding rule rather than surface syntax."
      ]
    ],
    "lesson": "Source: OpenDSA (opendsa::PL/CurryInSLang1.html). Correct answer: fn(f)=>fn(x)=>fn(y)=>(f x y).",
    "source": "OpenDSA"
  }
])
