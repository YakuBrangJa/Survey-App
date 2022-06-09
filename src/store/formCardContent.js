import { createSlice } from "@reduxjs/toolkit";

const opinions = [
  "Strongly Disagree (လုံးဝသဘောမတူပါ)",
  "Disagree (သဘောမတူပါ)",
  "Neutral (ကြားနေ)",
  "Agree (သဘောတူပါသည်)",
  "Strongly Agree (လုံးဝသဘောတူပါသည်)",
];

const initialState = {
  sectionA: {
    title:
      "Section-A: Respondent's Background Information (ဖြေဆိုသူ၏ အချက်အလက်)",
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
          "500,001 - 750,000",
          "750,001 - 1,000,000",
          "1,000,001 - 1,250,000",
          "1,250,001 - 1,500,000",
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
      "Please indicate how or the way that your supervisor/manager/leader engages in the described behaviors listed below and select to what extent do you agree or disagree by selecting the answer you chose",
    group: "Leadership Styles",
    content: [
      {
        index: 8,
        name: "index8",
        legend: {
          en: "My supervisor retains the final decision authority",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 9,
        name: "index9",
        legend: {
          en: "My supervisor includes me in decision making but retains the final decision making authority",
          mm: null,
        },
        options: opinions,
      },
    ],
  },

  // SECTION C
  sectionC: {
    title: "Section-C: Employee Performance",
    instruction:
      "You are requested to rate yourself against each statement to indicate yourself assesment of your own performance",
    group: "Employee Performance",
    content: [
      {
        index: 10,
        name: "index10",
        legend: {
          en: "I clearly understand the vision, mission and objectives of the organisation",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 11,
        name: "Index11",
        legend: {
          en: "I am motivated to work",
          mm: null,
        },
        options: opinions,
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
