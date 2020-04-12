import { TagDict, RawTemplate, RawTestCase, RawTestResult, BertSuggest } from "./Interface";

export const tagDict: TagDict = {'pos_adj': 'good', 'air_noun': 'flight', 'intens': 'very'};
// a demo template sentence
export const rawTemplates: RawTemplate[] = [
    [
        [
            [
                'Michael','Michael','Michael','Michael','Michael',
                'Jennifer','Jennifer','Jennifer','Jennifer','Jennifer',
                'Christopher','Christopher','Christopher','Christopher','Christopher',
                'Jessica','Jessica','Jessica','Jessica','Jessica',
                'Matthew','Matthew','Matthew','Matthew','Matthew'
            ], 
            'first_name'
        ],
        'is',
        [
            [
                'bigger','warmer','colder','poorer','richer',
                'bigger','warmer','colder','poorer','richer',
                'bigger','warmer','colder','poorer','richer',
                'bigger','warmer','colder','poorer','richer',
                'bigger','warmer','colder','poorer','richer',
            ],
            'comp[0]'
        ],
        'than',
        [[], 'bert'],
        '.'
    ],[
        'Who',
        'is',
        [
            [
                'smaller','colder','warmer','richer','poorer',
                'smaller','colder','warmer','richer','poorer',
                'smaller','colder','warmer','richer','poorer',
                'smaller','colder','warmer','richer','poorer',
                'smaller','colder','warmer','richer','poorer'
            ],
            'comp[1]'
        ],
        '?'
    ],[
        [
            [
                'Michael','Michael','Michael','Michael','Michael',
                'Jennifer','Jennifer','Jennifer','Jennifer','Jennifer',
                'Christopher','Christopher','Christopher','Christopher','Christopher',
                'Jessica','Jessica','Jessica','Jessica','Jessica',
                'Matthew','Matthew','Matthew','Matthew','Matthew'
            ],
            'first_name'
        ]
    ]
]
export const suggests: (string|string[])[] = ['that',
    'this',
    'me',
    'before',
    'usual',
    'ever',
    'normal',
    'her',
    'us',
    'most',
    'you',
    'average',
    'expected',
    'anything',
    'it',
    'I',
    'him',
    'them',
    'anyone',
    'life'
]

// test data
export const rawTestcases: RawTestCase[] = [
    {
        examples: [{
            new: {
                tokens: [
                    ["Who", "is", "taller", ",", "Mary", "or", "Heather", "?"],
                    ["Who", "is", "taller", ",", "Heather", "or", "Mary", "?"]
                ],
                pred: "1",
                conf: 0.7
            },
            old: null,
            label: "1",
            succeed: false,
        }],
        tags: ["person1=Mary", "person2=Heather", "comparative=taller"],
        succeed: false,
    }, {
        examples: [{
            new: {
                tokens: [
                    ["Who", "is", "taller", ",", "Mary", "or", "Heather", "?"],
                    ["Who", "is", "taller", ",", "Heather", "or", "Mary", "?"]
                ],
                pred: "1",
                conf: 0.7
            },
            old: null,
            label: "1",
            succeed: true,
        }, {
            new: {
                tokens: [
                    ["Who", "is", "cooler", ",", "Mary", "or", "Heather", "?"],
                    ["Who", "is", "cooler", ",", "Heather", "or", "Mary", "?"]
                ],
                pred: "1",
                conf: 0.7
            },
            old: null,
            label: "1",
            succeed: true,
        }],
        tags: ["person1=Mary", "person2=Heather", "comparative=taller", "comparative=cooler"],
        succeed: true,
    }, {
        examples: [{
            new: {
                tokens: [
                    ["Who", "is", "taller", ",", "Mary", "or", "Heather", "?"],
                    ["Who", "is", "taller", ",", "Heather", "or", "Mary", "?"]
                ],
                pred: "0",
                conf: 0.9
            },
            old: {
                tokens: [
                    ["Who", "is", "taller", ",", "Mary", "or", "Heather", "?"],
                    ["Who", "is", "taller", ",", "Mary", "or", "Heather", "?"]
                ],
                pred: "1",
                conf: 0.7
            },
            succeed: false,
            label: null,
        }, {
            new: {
                tokens: [
                    ["Who", "is", "cooler", ",", "Mary", "or", "Heather", "?"],
                    ["Who", "is", "cooler", ",", "Heather", "or", "Mary", "?"]
                ],
                pred: "1",
                conf: 0.7
            },
            old: {
                tokens: [
                    ["Who", "is", "cooler", ",", "Mary", "or", "Heather", "?"],
                    ["Who", "is", "cooler", ",", "Mary", "or", "Heather", "?"]
                ],
                pred: "0",
                conf: 0.8
            },
            label: null,
            succeed: false,
        }],
        succeed: false,
        tags: ["person1=Mary", "person2=Heather", "comparative=cooler", "comparative=taller"]
    }
]

export const rawTestResult: RawTestResult =  { 
    name: "Change the PERSON order",
    type: "inv",
    expect_meta: {expected: "equal"},
    tags: [
        "person1=Mary", 
        "person2=Heather", 
        "person2=Marco",
        "comparative=cooler",
        "comparative=taller"
    ],
    stats: {nfailed: 10, npassed: 20, nfiltered: 20}
 }