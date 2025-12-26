const chapters = [
    { title: "태극 1장", id: 0 },
    { title: "태극 2장", id: 1 },
    { title: "태극 3장", id: 2 },
    { title: "태극 4장", id: 3 },
    { title: "태극 5장", id: 4 },
    { title: "태극 6장", id: 5 },
    { title: "태극 7장", id: 6 },
    { title: "태극 8장", id: 7 },
    { title: "고려", id: 8 },
    { title: "금강", id: 9 },
    { title: "태백", id: 10 }
];

/* [정면 영상 데이터] */
const videoDataFront = {
    // 0: 태극 1장
    0: {
        parts: [
            { title: "품마디 1", file: "assets/태극1장/tg1_1.mp4" },
            { title: "품마디 2", file: "assets/태극1장/tg1_2.mp4" },
            { title: "품마디 3", file: "assets/태극1장/tg1_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극1장/tg1_4.mp4" },
            { title: "품마디 5", file: "assets/태극1장/tg1_5.mp4" }, 
            { title: "품마디 6", file: "assets/태극1장/tg1_6.mp4" }
        ],
        courses: [
            { title: "태극 1장 전체", file: "assets/태극1장/tg1_all.mp4" },
            { title: "품마디 1~3", file: "assets/태극1장/tg1_1~3.mp4" },
            { title: "품마디 4~6", file: "assets/태극1장/tg1_4~6.mp4" }
        ]
    },
    // 1: 태극 2장 (버튼 개수 다르게 설정 가능)
    1: {
        parts: [
            { title: "품마디 1", file: "assets/태극2장/tg2_1.mp4" },
            { title: "품마디 2", file: "assets/태극2장/tg2_2.mp4" },
            { title: "품마디 3", file: "assets/태극2장/tg2_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극2장/tg2_4.mp4" },
            { title: "품마디 5", file: "assets/태극2장/tg2_5.mp4" }, 
            { title: "품마디 6", file: "assets/태극2장/tg2_6.mp4" }
        ],
        courses: [
            { title: "태극 2장 전체", file: "assets/태극2장/tg2_all.mp4" },
            { title: "품마디 1~3", file: "assets/태극2장/tg2_1~3.mp4" },
            { title: "품마디 4~6", file: "assets/태극2장/tg2_4~6.mp4" }
        ]
    },
    // 2: 태극 3장
    2: {
        parts: [
            { title: "품마디 1", file: "assets/태극3장/tg3_1.mp4" },
            { title: "품마디 2", file: "assets/태극3장/tg3_2.mp4" },
            { title: "품마디 3", file: "assets/태극3장/tg3_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극3장/tg3_4.mp4" },
            { title: "품마디 5", file: "assets/태극3장/tg3_5.mp4" },
            { title: "품마디 6", file: "assets/태극3장/tg3_6.mp4" }
        ],
        courses: [
            { title: "태극 3장 전체", file: "assets/태극3장/tg3_all.mp4" },
            { title: "품마디 1~3", file: "assets/태극3장/tg3_1~3.mp4" },
            { title: "품마디 4~6", file: "assets/태극3장/tg3_4~6.mp4" }
        ]
    }, // 데이터 없으면 빈칸
    3: { 
        parts: [
            { title: "품마디 1", file: "assets/태극4장/tg4_1.mp4" },
            { title: "품마디 2", file: "assets/태극4장/tg4_2.mp4" },
            { title: "품마디 3", file: "assets/태극4장/tg4_3.mp4" },
            { title: "품마디 4", file: "assets/태극4장/tg4_4.mp4" },
            { title: "품마디 5", file: "assets/태극4장/tg4_5.mp4" },
            { title: "품마디 6", file: "assets/태극4장/tg4_6.mp4" }
        ],
        courses: [
            { title: "태극 4장 전체", file: "" },
            { title: "품마디 1~3", file: "assets/태극4장/tg4_1~3.mp4" },
            { title: "품마디 4~6", file: "assets/태극4장/tg4_4~6.mp4" }
        ]
    },
    4: { 
        parts: [
            { title: "품마디 1", file: "assets/태극5장/tg5_1.mp4" },
            { title: "품마디 2", file: "assets/태극5장/tg5_2.mp4" },
            { title: "품마디 3", file: "assets/태극5장/tg5_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극5장/tg5_4.mp4" },
            { title: "품마디 5", file: "assets/태극5장/tg5_5.mp4" }, 
            { title: "품마디 6", file: "assets/태극5장/tg5_6.mp4" }
        ],
        courses: [
            { title: "태극 5장 전체", file: "assets/태극5장/tg5_all.mp4" },
            { title: "품마디 1~2", file: "assets/태극5장/tg5_1~2.mp4" },
            { title: "품마디 3~4", file: "assets/태극5장/tg5_3~4.mp4" },
            { title: "품마디 5~6", file: "assets/태극5장/tg5_5~6.mp4" }
        ]
    },
    5: { 
        parts: [
            { title: "품마디 1", file: "assets/태극6장/tg6_1.mp4" },
            { title: "품마디 2", file: "assets/태극6장/tg6_2.mp4" },
            { title: "품마디 3", file: "assets/태극6장/tg6_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극6장/tg6_4.mp4" },
            { title: "품마디 5", file: "assets/태극6장/tg6_5.mp4" },
            { title: "품마디 6", file: "assets/태극6장/tg6_6.mp4" }
        ],
        courses: [
            { title: "태극 6장 전체", file: "assets/태극6장/tg6_all.mp4" },
            { title: "품마디 1~2", file: "assets/태극6장/tg6_1~2.mp4" },
            { title: "품마디 3~4", file: "assets/태극6장/tg6_3~4.mp4" },
            { title: "품마디 5~6", file: "assets/태극6장/tg6_5~6.mp4" }
        ]
 
    },
    6: { 
        parts: [
            { title: "품마디 1", file: "assets/태극7장/tg7_1.mp4" },
            { title: "품마디 2", file: "assets/태극7장/tg7_2.mp4" },
            { title: "품마디 3", file: "assets/태극7장/tg7_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극7장/tg7_4.mp4" },
            { title: "품마디 5", file: "assets/태극7장/tg7_5.mp4" },
            { title: "품마디 6", file: "assets/태극7장/tg7_6.mp4" }
        ],
        courses: [
            { title: "태극 7장 전체", file: "assets/태극7장/tg7_all.mp4" },
            { title: "품마디 1~2", file: "assets/태극7장/tg7_1~2.mp4" },
            { title: "품마디 3~4", file: "assets/태극7장/tg7_3~4.mp4" },
            { title: "품마디 5~6", file: "assets/태극7장/tg7_5~6.mp4" }
        ]
    },
    7: { 
        parts: [
            { title: "품마디 1", file: "assets/태극8장/tg8_1.mp4" },
            { title: "품마디 2", file: "assets/태극8장/tg8_2.mp4" },
            { title: "품마디 3", file: "assets/태극8장/tg8_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극8장/tg8_4.mp4" },
            { title: "품마디 5", file: "assets/태극8장/tg8_5.mp4" }, 
            { title: "품마디 6", file: "assets/태극8장/tg8_6.mp4" }
        ],
        courses: [
            { title: "태극 8장 전체", file: "assets/태극8장/tg8_all.mp4" },
            { title: "품마디 1~2", file: "assets/태극8장/tg8_1~2.mp4" },
            { title: "품마디 3~4", file: "assets/태극8장/tg8_3~4.mp4" },
            { title: "품마디 5~6", file: "assets/태극5장/tg8_5~6.mp4" }            
        ]
    },
    8: { 
        parts: [
            { title: "품마디 1", file: "" },
            { title: "품마디 2", file: "" },
            { title: "품마디 3", file: "" }, 
            { title: "품마디 4", file: "" },
            { title: "품마디 5", file: "" }
        ],
        courses: [
            { title: "고려 전체", file: "" },
            { title: "품마디 1~3", file: "" },
            { title: "품마디 4~5", file: "" }
        ]
    },
    9: { 
        parts: [
            { title: "품마디 1", file: "" },
            { title: "품마디 2", file: "" },
            { title: "품마디 3", file: "" },
            { title: "품마디 4", file: "" },
            { title: "품마디 5", file: "" }
        ],
        courses: [
            { title: "금강", file: "" },
            { title: "품마디 1~3", file: "" },
            { title: "품마디 4~5", file: "" }
        ]
    },
    10: { 
        parts: [
            { title: "품마디 1", file: "" },
            { title: "품마디 2", file: "" },
            { title: "품마디 3", file: "" }, 
            { title: "품마디 4", file: "" },
            { title: "품마디 5", file: "" }
        ],
        courses: [
            { title: "태백 전체", file: "" },
            { title: "품마디 1~3", file: "" },
            { title: "품마디 4~5", file: "" }
        ]
    }
};

/* [후면 영상 데이터] */
const videoDataBack = {
    // 0: 태극 1장
    0: {
        parts: [
            { title: "품마디 1", file: "assets/태극1장/tg1_1.mp4" },
            { title: "품마디 2", file: "assets/태극1장/tg1_2.mp4" },
            { title: "품마디 3", file: "assets/태극1장/tg1_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극1장/tg1_4.mp4" },
            { title: "품마디 5", file: "assets/태극1장/tg1_5.mp4" }, 
            { title: "품마디 6", file: "assets/태극1장/tg1_6.mp4" }
        ],
        courses: [
            { title: "태극 1장 전체", file: "assets/태극1장/tg1_all.mp4" },
            { title: "품마디 1~3", file: "assets/태극1장/tg1_1~3.mp4" },
            { title: "품마디 4~6", file: "assets/태극1장/tg1_4~6.mp4" }
        ]
    },
    // 1: 태극 2장 (버튼 개수 다르게 설정 가능)
    1: {
        parts: [
            { title: "품마디 1", file: "assets/태극2장/tg2_1.mp4" },
            { title: "품마디 2", file: "assets/태극2장/tg2_2.mp4" },
            { title: "품마디 3", file: "assets/태극2장/tg2_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극2장/tg2_4.mp4" },
            { title: "품마디 5", file: "assets/태극2장/tg2_5.mp4" }, 
            { title: "품마디 6", file: "assets/태극2장/tg2_6.mp4" }
        ],
        courses: [
            { title: "태극 2장 전체", file: "assets/태극2장/tg2_all.mp4" },
            { title: "품마디 1~3", file: "assets/태극2장/tg2_1~3.mp4" },
            { title: "품마디 4~6", file: "assets/태극2장/tg2_4~6.mp4" }
        ]
    },
    // 2: 태극 3장
    2: {
        parts: [
            { title: "품마디 1", file: "assets/태극3장/tg3_1.mp4" },
            { title: "품마디 2", file: "assets/태극3장/tg3_2.mp4" },
            { title: "품마디 3", file: "assets/태극3장/tg3_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극3장/tg3_4.mp4" },
            { title: "품마디 5", file: "assets/태극3장/tg3_5.mp4" },
            { title: "품마디 6", file: "assets/태극3장/tg3_6.mp4" }
        ],
        courses: [
            { title: "태극 3장 전체", file: "assets/태극3장/tg3_all.mp4" },
            { title: "품마디 1~3", file: "assets/태극3장/tg3_1~3.mp4" },
            { title: "품마디 4~6", file: "assets/태극3장/tg3_4~6.mp4" }
        ]
    }, // 데이터 없으면 빈칸
    3: { 
        parts: [
            { title: "품마디 1", file: "assets/태극4장/tg4_1.mp4" },
            { title: "품마디 2", file: "assets/태극4장/tg4_2.mp4" },
            { title: "품마디 3", file: "assets/태극4장/tg4_3.mp4" },
            { title: "품마디 4", file: "assets/태극4장/tg4_4.mp4" },
            { title: "품마디 5", file: "assets/태극4장/tg4_5.mp4" },
            { title: "품마디 6", file: "assets/태극4장/tg4_6.mp4" }
        ],
        courses: [
            { title: "태극 4장 전체", file: "" },
            { title: "품마디 1~3", file: "assets/태극4장/tg4_1~3.mp4" },
            { title: "품마디 4~6", file: "assets/태극4장/tg4_4~6.mp4" }
        ]
    },
    4: { 
        parts: [
            { title: "품마디 1", file: "assets/태극5장/tg5_1.mp4" },
            { title: "품마디 2", file: "assets/태극5장/tg5_2.mp4" },
            { title: "품마디 3", file: "assets/태극5장/tg5_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극5장/tg5_4.mp4" },
            { title: "품마디 5", file: "assets/태극5장/tg5_5.mp4" }, 
            { title: "품마디 6", file: "assets/태극5장/tg5_6.mp4" }
        ],
        courses: [
            { title: "태극 5장 전체", file: "assets/태극5장/tg5_all.mp4" },
            { title: "품마디 1~2", file: "assets/태극5장/tg5_1~2.mp4" },
            { title: "품마디 3~4", file: "assets/태극5장/tg5_3~4.mp4" },
            { title: "품마디 5~6", file: "assets/태극5장/tg5_5~6.mp4" }
        ]
    },
    5: { 
        parts: [
            { title: "품마디 1", file: "assets/태극6장/tg6_1.mp4" },
            { title: "품마디 2", file: "assets/태극6장/tg6_2.mp4" },
            { title: "품마디 3", file: "assets/태극6장/tg6_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극6장/tg6_4.mp4" },
            { title: "품마디 5", file: "assets/태극6장/tg6_5.mp4" },
            { title: "품마디 6", file: "assets/태극6장/tg6_6.mp4" }
        ],
        courses: [
            { title: "태극 6장 전체", file: "assets/태극6장/tg6_all.mp4" },
            { title: "품마디 1~2", file: "assets/태극6장/tg6_1~2.mp4" },
            { title: "품마디 3~4", file: "assets/태극6장/tg6_3~4.mp4" },
            { title: "품마디 5~6", file: "assets/태극6장/tg6_5~6.mp4" }
        ]
 
    },
    6: { 
        parts: [
            { title: "품마디 1", file: "assets/태극7장/tg7_1.mp4" },
            { title: "품마디 2", file: "assets/태극7장/tg7_2.mp4" },
            { title: "품마디 3", file: "assets/태극7장/tg7_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극7장/tg7_4.mp4" },
            { title: "품마디 5", file: "assets/태극7장/tg7_5.mp4" },
            { title: "품마디 6", file: "assets/태극7장/tg7_6.mp4" }
        ],
        courses: [
            { title: "태극 7장 전체", file: "assets/태극7장/tg7_all.mp4" },
            { title: "품마디 1~2", file: "assets/태극7장/tg7_1~2.mp4" },
            { title: "품마디 3~4", file: "assets/태극7장/tg7_3~4.mp4" },
            { title: "품마디 5~6", file: "assets/태극7장/tg7_5~6.mp4" }
        ]
    },
    7: { 
        parts: [
            { title: "품마디 1", file: "assets/태극8장/tg8_1.mp4" },
            { title: "품마디 2", file: "assets/태극8장/tg8_2.mp4" },
            { title: "품마디 3", file: "assets/태극8장/tg8_3.mp4" }, 
            { title: "품마디 4", file: "assets/태극8장/tg8_4.mp4" },
            { title: "품마디 5", file: "assets/태극8장/tg8_5.mp4" }, 
            { title: "품마디 6", file: "assets/태극8장/tg8_6.mp4" }
        ],
        courses: [
            { title: "태극 8장 전체", file: "assets/태극8장/tg8_all.mp4" },
            { title: "품마디 1~2", file: "assets/태극8장/tg8_1~2.mp4" },
            { title: "품마디 3~4", file: "assets/태극8장/tg8_3~4.mp4" },
            { title: "품마디 5~6", file: "assets/태극5장/tg8_5~6.mp4" }            
        ]
    },
    8: { 
        parts: [
            { title: "품마디 1", file: "" },
            { title: "품마디 2", file: "" },
            { title: "품마디 3", file: "" }, 
            { title: "품마디 4", file: "" },
            { title: "품마디 5", file: "" }
        ],
        courses: [
            { title: "고려 전체", file: "" },
            { title: "품마디 1~3", file: "" },
            { title: "품마디 4~5", file: "" }
        ]
    },
    9: { 
        parts: [
            { title: "품마디 1", file: "" },
            { title: "품마디 2", file: "" },
            { title: "품마디 3", file: "" },
            { title: "품마디 4", file: "" },
            { title: "품마디 5", file: "" }
        ],
        courses: [
            { title: "금강", file: "" },
            { title: "품마디 1~3", file: "" },
            { title: "품마디 4~5", file: "" }
        ]
    },
    10: { 
        parts: [
            { title: "품마디 1", file: "" },
            { title: "품마디 2", file: "" },
            { title: "품마디 3", file: "" }, 
            { title: "품마디 4", file: "" },
            { title: "품마디 5", file: "" }
        ],
        courses: [
            { title: "태백 전체", file: "" },
            { title: "품마디 1~3", file: "" },
            { title: "품마디 4~5", file: "" }
        ]
    }
};
