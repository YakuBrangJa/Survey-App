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
        name: "Occupation",
        legend: {
          en: "What is your occupation?",
          mm: null,
        },
        options: [
          "Government Staff",
          "Company staff",
          "Business Owner",
          "Dependent",
          "Others",
        ],
      },
      {
        index: 6,
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
    ],
  },

  // SECTION B
  sectionB: {
    title: "Section-B: Respondent's opinion",
    instruction:
      "Please indicate how or the way that your supervisor/manager/leader engages in the described behaviors listed below and select to what extent do you agree or disagree by selecting the answer you chose",
    group: "Respondent's opinion",
    content: [
      {
        index: 8,
        name: "index8",
        legend: {
          en: "The food products can get anytime 24 hrs. a day at the online shopping.",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 9,
        name: "index9",
        legend: {
          en: "I save a lot of time by shopping food products on the Internet.",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 10,
        name: "index10",
        legend: {
          en: "There are variety of food on the online shopping.",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 11,
        name: "index11",
        legend: {
          en: "I can save money by comparing the prices offered at different shops for purchasing food.",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 12,
        name: "index12",
        legend: {
          en: "I worry to buy food online because of a lack of the ability to check physical objects and taste.",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 13,
        name: "index13",
        legend: {
          en: "I can only see the limited knowledge of the foods posted by online shops.",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 14,
        name: "index14",
        legend: {
          en: "I worry about being cheated and losing money through online shopping.",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 15,
        name: "index15",
        legend: {
          en: "I worry about the waste of time if products break or fail after a few days and need replacement.",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 16,
        name: "index16",
        legend: {
          en: "I worry about the close expiry date being delivered when I order food online.",
          mm: null,
        },
        options: opinions,
      },
      {
        index: 16,
        name: "index16",
        legend: {
          en: "It is easy to purchase food products via the mobile application.",
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
