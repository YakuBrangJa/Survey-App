import { createSlice } from "@reduxjs/toolkit";

const opinions = [
  "Strongly Disagree (လုံးဝသဘောမတူပါ)",
  "Disagree (သဘောမတူပါ)",
  "Neutral (ကြားနေ)",
  "Agree (သဘောတူပါသည်)",
  "Strongly Agree (လုံးဝသဘောတူပါသည်)",
];

const rate = ["Very Low", "Low", "Average", "High", "Very High"];

const initialState = {
  sectionA: {
    title: "Section-A: Respondent's Information (ဖြေဆိုသူ၏ အချက်အလက်)",
    instruction: "",
    group: "Respondent's Background Information",
    content: [
      {
        index: 1,
        name: "Gender",
        legend: {
          en: "What is your gender?",
          mm: "ကျား/မ",
        },
        options: ["Male", "Female"],
        optional: true,
      },
      {
        index: 2,
        name: "Age",
        legend: {
          en: "What is your age?",
          mm: "အသက်",
        },
        options: [
          "25 years and below",
          "26 - 30 years",
          "31 - 35 years",
          "36 - 40 years",
          "41 years and above",
        ],
        optional: false,
      },
      {
        index: 3,
        name: "Marital Status",
        legend: {
          en: "What is your marital status?",
          mm: "အိမ်ထောင်ရှိမရှိ",
        },
        options: ["Single", "Married"],
      },
      {
        index: 4,
        name: "Education",
        legend: {
          en: "What is your education level?",
          mm: "ပညာအရည်အချင်း",
        },
        options: [
          "High School",
          "Undergraduate",
          "Graduate",
          "Postgraduate",
          "Others",
        ],
      },
      {
        index: 5,
        name: "Income (MMK)",
        legend: {
          en: "What is your monthly income (MMK)?",
          mm: "လစဉ်ဝင်ငွေပမာဏ",
        },
        options: [
          "500,000 and below",
          "500,001 - 1,000,000",
          "1,000,001 - 1,500,000",
          "1,500,001 and above",
        ],
      },
      {
        index: 6,
        name: "Department",
        legend: {
          en: "Which department are you working in?",
          mm: "လက်ရှိအလုပ်လုပ်နေသည့်ဌာန",
        },
        options: [
          "Programme",
          "Finance",
          "Human Resources",
          "Admin and logistic",
        ],
      },
      {
        index: 7,
        name: "Work Year",
        legend: {
          en: "How long you have been working in Metta?",
          mm: "လုပ်သက်",
        },
        options: [
          "Under 3 years",
          "3 - 5 years",
          "5 - 7 years",
          "7 - 10 years",
          "10 years and above",
        ],
      },
    ],
  },

  // SECTION B
  sectionB: {
    title: "Section-B: Leadership Styles",
    instruction:
      "Please indicate how or the way that your immediate supervisor engages in the describes behaviors listed below. Kindly select to what extend do you agree or disagree with what the statement suggesting. (အောက်ဖော်ပြပါ ခေါင်းဆောင်မှုအပြုအမှုများကို သင်၏ တိုက်ရိုက်အထက်အရာရှိက ဘယ်လိုပြုမှုသနည်း။ ကျေးဇူးပြုပြီး ဖော်ပြပါ ခေါင်းဆောင်မှုအပြုအမှုများကို သဘောတူသည် (သို့) သဘောမတူပါ ဟုရွေးချယ်ပေးပါ။)",
    group: "Leadership Styles",
    content: [
      {
        index: 8,
        name: "index 8",
        legend: {
          en: "My supervisor makes others feel food to be around him/her",
          mm: "ကျွန်တော့်၏အထက်အရာရှိသည် လုပ်ဖော်ကိုင်ဖက်များအတွက် သူနှင့်အလုပ်လုပ်ရာတွင် ကောင်းမွန်သောခံစားမှု ရရှိစေပါသည်။",
        },
        options: opinions,
      },
      {
        index: 9,
        name: "index 9",
        legend: {
          en: "I have complete faith in my supervisor",
          mm: "ကျွန်တော်၏ အထက်အရာရှိအပေါ် ယုံကြည်အားကိုးမှု အပြည့်အဝရှိပါသည်။",
        },
        options: opinions,
      },

      {
        index: 10,
        name: "index 10",
        legend: {
          en: "I am proud to be associated with my supervisor",
          mm: "ကျွန်တော်၏အထက်အရာရှိနှင့် လုပ်ဖော်ကိုင်ဖက်ဖြစ်ခွင့် ရခြင်းအတွက် ဂုဏ်ယူပါသည်။",
        },
        options: opinions,
      },

      {
        index: 11,
        name: "index 11",
        legend: {
          en: "My supervisor expresses in a few simple words what we could and should do",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် ကျွန်တော်တို့ ဘာလုပ်ရမည့်၊ ဘယ်လိုလုပ်ရမည်ကို ရှင်းလင်းစွာ လမ်းညွန်မှုပေးပါသည်။",
        },
        options: opinions,
      },
      {
        index: 12,
        name: "index 12",
        legend: {
          en: "My supervisor spends time teaching and coaching me",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အချိန်ယူပြီး သင်ကြားပေးသည်၊ လမ်းညွန်မှုပေးပါသည်။",
        },
        options: opinions,
      },
      {
        index: 13,
        name: "index 13",
        legend: {
          en: "My supervisor helps me find meaning in my work",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် လုပ်ငန်းအပေါ် အဓိပ္ပယ်ရှိအောင် ကူညီပေးပါသည်။",
        },
        options: opinions,
      },

      {
        index: 14,
        name: "index 14",
        legend: {
          en: "My supervisor enables others to think about old problems in new ways",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် ပြသာနာအဟောင်း များကို နည်းလမ်းသစ်ဖြင့်စဉ်းစားနိုင်အောင် ထောက်ကူ ပေးပါသည်။",
        },
        options: opinions,
      },
      {
        index: 15,
        name: "index 15",
        legend: {
          en: "My supervisor provides others with new ways of looking at puzzling things",
          mm: "ကျွန်တော်၏အထက် အရာရှိသည် ပဟေဠိဖြစ်စေသောအရာများကို နည်းလမ်းအသစ်ဖြင့် စဉ်းစားစေသည်။",
        },
        options: opinions,
      },
      {
        index: 16,
        name: "index 16",
        legend: {
          en: "My supervisor gets others to rethink ideas that they had never questioned before",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် မေးခွန်းမမေးခင် အကြံညဏ်အသစ်ဖြင့် အရင်စဉ်းစားခိုင်းသည်။ ",
        },
        options: opinions,
      },
      {
        index: 17,
        name: "index 17",
        legend: {
          en: "My supervisor helps others develop themselves",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အခြားသူများကို မိမိကိုယ်မိမိတိုးတက် လာအောင် ကူညီထောက်မ ပေးသည်။",
        },
        options: opinions,
      },
      {
        index: 18,
        name: "index 18",
        legend: {
          en: "My supervisor lets others know how he/she thinks we are doing",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် ကျွန်တော်တို့ လုပ်နေသောအရာများကို ဘယ်လိုသုံးသပ် နေသည်ကို အခြားသူများကို သိစေသည်။",
        },
        options: opinions,
      },

      {
        index: 19,
        name: "index 19",
        legend: {
          en: "My supervisor gives personal attention to others who seem rejected",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် သူများပယ်ချခံသောသူများကို အထူးဂရုစိုက်ပေးသည်။ ",
        },
        options: opinions,
      },
      {
        index: 20,
        name: "index 20",
        legend: {
          en: "My supervisor believes employees need to be supervised closely they are not likely to do their work",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အလုပ်သမားများကို အနီးကပ်ညွန်းကြားပေးရမည်ဟု ယုံကြည်လက်ခံ ထားပါသည်။",
        },
        options: opinions,
      },
      {
        index: 21,
        name: "index 21",
        legend: {
          en: "My supervisor includes me in decision-making but retains the final decision-making authority",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် ကျွန်တော့ကို ဆုံးဖြတ်ပိုင်ခွင့်ပေးထားသည်၊ သို့သော် နောက်ဆုံး ဆုံးဖြတ်ပိုင်ခွင့် အာဏာကို ဆက်လက်ယူထားသည်။",
        },
        options: opinions,
      },
      {
        index: 22,
        name: "index 22",
        legend: {
          en: "My supervisor never gives time to consider my suggestion",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အကြံပေးမှုကိုလက်ခံရန် ဘယ်တော့မှ အချိန်မပေးပါ။",
        },
        options: opinions,
      },
      {
        index: 23,
        name: "index 23",
        legend: {
          en: "My supervisor allows me to set my own priorities in line with hi guidance",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် သူ၏လမ်းညွန်မှုနှင့် အညီ မိမိကိုမိမိလွတ်လပ်စွာ ဉီးစားပေးလုပ်ဆောင် သွားရန် ခွင့်ပြုပေးထားသည်။",
        },
        options: opinions,
      },
      {
        index: 24,
        name: "index 24",
        legend: {
          en: "My supervisor is the chief judge of the achievements of employees",
          mm: "အလုပ်သမားများ၏ အောင်မြင်မှုကို ဆုံးဖြတ်ပေးရန် အတွက် အဓိကတာဝန်ရှိသူဖြစ်သည်။",
        },
        options: opinions,
      },

      {
        index: 25,
        name: "index 25",
        legend: {
          en: "My supervisor gives orders and clarifies procedures",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အမိန့်ပေးစေခိုင်းမှုရှိ သော်လည်း လုပ်ထုံးလုပ်နည်းများကို ရှင်းလင်းစွာ လမ်းညွန်မှုပေးသည်။",
        },
        options: opinions,
      },
      {
        index: 26,
        name: "index 26",
        legend: {
          en: "My supervisor believes that most employees in the general population are lazy",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အလုပ်သမား အများစုကို အပျင်းထူသည်ဟု ခံယူထားသည်။",
        },
        options: opinions,
      },
      {
        index: 27,
        name: "index 27",
        legend: {
          en: "My supervisor retains the final decision authority",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် နောက်ဆုံး ဆုံးဖြတ် ပိုင်ခွင့်အဏာကို ဆက်လက်ရယူထားသည်။",
        },
        options: opinions,
      },

      {
        index: 28,
        name: "index 28",
        legend: {
          en: "2.	My supervisor seeks input from me for upcoming projects",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် နောက်လာ မည့် စီမံကိန်းများအတွက် ကျွန်တော့ဆီ အကြံညဏ် တောင်းလျှက်ရှိသည်။",
        },
        options: opinions,
      },

      {
        index: 29,
        name: "index 29",
        legend: {
          en: "My supervisor has formed a belief that we lack initiatives and needed to be directed at all times",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အလုပ်သမားများကို နည်းလမ်းအသစ်ရှာဖွေခြင်းအားနည်းသည်ဟု ခံယူထားပြီး အချိန်ဖြည့် ညွမ်းကြားပေးရမည်ဟု ခံယူထားသည်",
        },
        options: opinions,
      },

      {
        index: 30,
        name: "index 30",
        legend: {
          en: "My supervisor involves with us (employees) in decision-making on issues ",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အခက်အခဲများကို ဖြေရှင်းရာတွင် အလုပ်သမားများနှင့်အတူ ပါဝင်ဖြေ ရှင်းပေးသည်။",
        },
        options: opinions,
      },

      {
        index: 31,
        name: "index 31",
        legend: {
          en: "My superior is always ready and willing to guide employees when it is necessary",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် လိုအပ်လာပါက အလုပ်သမားများကို လမ်းညွန်ပေးရန် အမြဲအဆင် သင့်ရှိပြီး ကူညီပေးရန် ဆန္ဒလည်းရှိသည်။",
        },
        options: opinions,
      },
      {
        index: 32,
        name: "index 32",
        legend: {
          en: "My supervisor facilitates smooth communication between him and the employees",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် သူနှင့် အလုပ်သမားများကြား ဆက်သွယ်ဆက်ဆံရေး ကောင်းမွန်စေရန် အမြဲအလေးထားသည်။",
        },
        options: opinions,
      },
      {
        index: 33,
        name: "index 33",
        legend: {
          en: "My supervisor provides me frequent and supportive communication",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အချိန်နှင့်သပြေညီနှင့် အထောက်အကူပြုစေသော ဆက်သွယ်ဆက်ဆံရေးလမ်းကြောင်းပေးနေသည်။",
        },
        options: opinions,
      },
      {
        index: 34,
        name: "index 34",
        legend: {
          en: "My supervisor often allows us (employees) to solve complex work problems by ourselves",
          mm: "ကျွန်တော်၏ အထက်အရာရှိသည် အလုပ်သမားများကို ခက်ခဲရှုပ် ထွေးသော ပြသာနာများကို အလုပ်သမားများကိုယ် တိုင်ဖြေရှင်းရန် လမ်းဖွင့်ပေးထားသည်။",
        },
        options: opinions,
      },
      {
        index: 35,
        name: "index 35",
        legend: {
          en: "My supervisor stays out of the way of the employees as I do my work",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အမြဲလုပ်ငန်းခွင်မှာနမရှိနေသောကြောင့် ကိုယ့်လုပ် ငန်းကို ကိုယ့်ကိုယ်တိုင် လုပ်နေရသည်။",
        },
        options: opinions,
      },
      {
        index: 36,
        name: "index 36",
        legend: {
          en: "My supervisor tells me to do and how to do it",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် ဘာလုပ်ရမည်၊ ဘယ်လိုလုပ်ရမည်ကို ပြောပြသည်။",
        },
        options: opinions,
      },
      {
        index: 37,
        name: "index 37",
        legend: {
          en: "As a rule, my supervisor allows me to appraise my own work",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် ကိုယ့်၏ လုပ်ငန်းများကို ကိုယ်တိုင် ဆန်းစစ်ရန် ခွင့်ပြုထားသည်။",
        },
        options: opinions,
      },
      {
        index: 38,
        name: "index 38",
        legend: {
          en: "My supervisor gives me complete freedom to solve problems on my own",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည်  ပြသာနာများကို လွတ်လပ်စွာ ဖြေရှင်းသွားရန် ခွင့်ပြုထား သည်။ ",
        },
        options: opinions,
      },

      {
        index: 39,
        name: "index 39",
        legend: {
          en: "In most situations I prefre little input from my supervisor",
          mm: "အခြေအနေအများစုမှာ ကျွန်တော်၏အထက် အရာရှိမှ လမ်းညွန်းမှုပြုပေးရန် ပို၍နှစ်သက်မှုရှိသည်။",
        },
        options: opinions,
      },
      {
        index: 40,
        name: "index 40",
        legend: {
          en: "In general my supervisor feels it's best to leave subordinates alone",
          mm: "ကျွန်တော်၏အထက်အရာရှိသည် အောက်လက်ငယ်သား အလုပ်သမားများကို လွတ်ထား ခြင်းကို သဘောကျကြသည်။",
        },
        options: opinions,
      },
      {
        index: 41,
        name: "index 41",
        legend: {
          en: "What types of leadership does your organisation practice among this (Please select only one). ",
          mm: "အောက်ပါ ခေါင်းဆောင်မှုအမျိုးအစားထဲက ဘယ်ခေါင်ဆောင်မှုအမျိုးအစားကို ကျင့်သုံးပါသနည်း (ခေါင်းဆောင်မှုအမျိုးအစားတစ်ခုကိုသာ ရွေးချယ်ရန်)",
        },
        options: [
          "Transformational leadership style (အပြောင်းအလဲဆန်သော ခေါင်းဆောင်မှု)",
          "Autocratic leadership style (အဏာရှင်ဆန်သော ခေါင်းဆောင်မှု)",
          "Democratic leadership style (ဒီမိုကရေစီခေါင်းဆောင်မှု)",
          "Laissez-faire leadership style (ခေါင်းရှောင်မှုဆန်သော ခေါင်းဆောင်မှု)",
        ],
      },
    ],
  },

  // SECTION C
  sectionC: {
    title: "Section-C: Employee Performance",
    instruction:
      "You are requested to rate yourself against each statement to indicate yourself assessment of you own performance. အောက်ဖော်ပြပါ လုပ်ငန်းစွမ်းဆောင်မှုများကို မိမိကိုယ်တိုင် ဆန်းစစ်ခြင်း။",
    group: "Employee Performance",
    content: [
      {
        index: 42,
        name: "index 42",
        legend: {
          en: "How do you rate quality of your performance",
          mm: "သင်၏လုပ်ငန်းစွမ်းဆောင်မှုအရည်အသွေးကို သင်ဘယ်လို သတ်မှတ်သနည်း",
        },
        options: rate,
      },
      {
        index: 43,
        name: "index 43",
        legend: {
          en: "How do you rate your productivity on the job",
          mm: "သင်၏လုပ်ငန်းကုန်ထုတ်စွမ်းအားကို သင်ဘယ်လို သတ် မှတ်သနည်း။",
        },
        options: rate,
      },
      {
        index: 44,
        name: "index 44",
        legend: {
          en: "I strive hard to achieve my daily task timely",
          mm: "နေ့စဉ်လုပ်ရမည့်လုပ်ငန်းများကို အချိန်မီပြီးမြောက် စေရန် ကြိုးစားအားထုတ်နေရသည်။ ",
        },
        options: rate,
      },
      {
        index: 45,
        name: "index 45",
        legend: {
          en: "I am motivated to work",
          mm: "ကျွန်တော်အလုပ်လုပ်ရန် စိတ်အားထက်တန်ပါသည်။ ",
        },
        options: rate,
      },
      {
        index: 46,
        name: "index 46",
        legend: {
          en: "I do not compromise quality when I carry out my daily task",
          mm: "နေ့စဉ်လုပ်ရမည့်လုပ်ငန်းများကို လုပ်ဆောင်ရာမှာ အရည်အသွေးကို အထိအခိုက်မခံပါ။",
        },
        options: rate,
      },
      {
        index: 47,
        name: "index 47",
        legend: {
          en: "How do you evaluate the performance of your peer at their jobs compared with yourself doing the same kind of work?",
          mm: "လုပ်ငန်းတူ လုပ်ဖော်ကိုင်ဖက်များ၏ လုပ်ငန်းစွမ်းဆောင်ရည်ကို သင်နှင့်နိုင်းယှဉ်သုံးသပ်ရာမှာ သင်ဘယ်လို သတ်မှတ်ပါသနည်း။",
        },
        options: rate,
      },
      {
        index: 48,
        name: "index 48",
        legend: {
          en: "How do you evaluate the performance of yourself at your job compared with your peers doing the same kind of work?",
          mm: "သင်၏ လုပ်ငန်းစွမ်းဆောင်ရည်ကို လုပ်ငန်းတူလုပ်ဖော်ကိုင်ဖက်များနှင့် နိုင်းယှဉ်သုံးသပ် ရာမှာ သင်ဘယ်လို သတ်မှတ်ပါသနည်း။",
        },
        options: rate,
      },
      {
        index: 49,
        name: "index 49",
        legend: {
          en: "I have received several informal/oral commendations from colleagues/peer for executing my job effectively.",
          mm: "ကျွန်တော် လုပ်ငန်း လုပ်ဆောင်ရာတွင် ထိရောက်စွာစွမ်းဆောင်နိုင်မှုအပေါ် လုပ်ဖော်ကိုင်ဖက်များမှ နှုတ်အားဖြင့် ချီးကျုးဂုဏ်ပြုခြင်း ခံရပါသည်။",
        },
        options: rate,
      },
    ],
  },
};

const cardContentSlice = createSlice({
  name: "Card Content List",
  initialState,
  reducers: {},
});

export const cardContentActions = cardContentSlice.actions;

export default cardContentSlice.reducer;
