export interface Lesson {
  id: string;
  title: string;
  estimatedTime: string;
}

export interface LessonChapter {
  id: string;
  number: number;
  title: string;
  lessons: Lesson[];
}

export interface LessonSection {
  id: string;
  number: number;
  title: string;
  chapters: LessonChapter[];
}

export const lessonSections: LessonSection[] = [
  {
    id: 'section-1',
    number: 1,
    title: 'Health Assessments',
    chapters: [
      {
        id: 'chapter-16-nursing-assessment',
        number: 16,
        title: 'Nursing Assessment',
        lessons: [
          { id: 'adult-head-to-toe-examination', title: 'Adult Head-to-Toe Examination', estimatedTime: '48 min' },
          { id: 'focused-assessments', title: 'Focused Assessments', estimatedTime: '1 hr 39 min' },
          { id: 'recognize-cues-from-assessment-data', title: 'Recognize Cues from Assessment Data', estimatedTime: '25 min' },
        ],
      },
      {
        id: 'chapter-8-gerontological-nursing',
        number: 8,
        title: 'Recognizing and Analyzing Cues in Gerontological Nursing',
        lessons: [
          { id: 'best-practices-clinical-cues-documentation-evaluation', title: 'Best Practices for Clinical Cues, Documentation, and Evaluation', estimatedTime: '25 min' },
          { id: 'mood-functional-ability-and-comprehensive-cues', title: 'Mood, Functional Ability, and Comprehensive Cues', estimatedTime: '28 min' },
          { id: 'physical-and-cognitive-cues', title: 'Physical and Cognitive Cues', estimatedTime: '27 min' },
        ],
      },
      {
        id: 'chapter-18-pain-relief',
        number: 18,
        title: 'Clinical Judgment to Promote Relief from Pain',
        lessons: [
          { id: 'nursing-actions-pain-clinics-and-outcomes', title: 'Nursing Actions, Pain Clinics, and Outcomes', estimatedTime: '26 min' },
          { id: 'pharmacological-interventions', title: 'Pharmacological Interventions', estimatedTime: '21 min' },
          { id: 'types-of-pain-and-recognizing-cues', title: 'Types of Pain and Recognizing Cues', estimatedTime: '29 min' },
        ],
      },
    ],
  },
  {
    id: 'section-2',
    number: 2,
    title: 'Nursing Process & the Clinical Judgment Model',
    chapters: [
      {
        id: 'chapter-3-cross-cultural-clinical-judgment',
        number: 3,
        title: 'Making Clinical Judgments in the Cross-Cultural Setting with Older Adults',
        lessons: [
          { id: 'concepts-in-cross-cultural-health-care', title: 'Concepts in Cross-Cultural Health Care', estimatedTime: '20 min' },
          { id: 'culture-diversity-and-health-inequities', title: 'Culture, Diversity, and Health Inequities', estimatedTime: '21 min' },
          { id: 'moving-toward-cultural-proficiency', title: 'Moving Toward Cultural Proficiency to Improve Health Outcomes', estimatedTime: '24 min' },
          { id: 'using-clinical-judgment-cross-cultural-nursing', title: 'Using Clinical Judgment to Promote Healthy Aging: Cross-Cultural Nursing', estimatedTime: '28 min' },
        ],
      },
    ],
  },
  {
    id: 'section-3',
    number: 3,
    title: 'Infection Control',
    chapters: [
      {
        id: 'chapter-28-infection-prevention-and-control',
        number: 28,
        title: 'Infection Prevention and Control',
        lessons: [
          { id: 'overview-of-immunity', title: 'Overview of Immunity', estimatedTime: '42 min' },
          { id: 'spread-of-infection', title: 'Spread of Infection', estimatedTime: '44 min' },
          { id: 'infection-assess-and-recognize-cues', title: 'Infection: Assess and Recognize Cues', estimatedTime: '36 min' },
        ],
      },
    ],
  },
  {
    id: 'section-4',
    number: 4,
    title: 'Personal Hygiene',
    chapters: [
      {
        id: 'chapter-40-hygiene',
        number: 40,
        title: 'Hygiene',
        lessons: [
          { id: 'overview-integumentary-system-and-mucous-membranes', title: 'Overview of the Integumentary System and Mucous Membranes', estimatedTime: '34 min' },
          { id: 'integumentary-assess-and-recognize-cues', title: 'Integumentary System and Mucous Membranes: Assess and Recognize Cues', estimatedTime: '35 min' },
          { id: 'integumentary-analyze-cues-and-plan', title: 'Integumentary System and Mucous Membranes: Analyze Cues and Prioritize Hypotheses; Plan and Generate Solutions', estimatedTime: '32 min' },
          { id: 'integumentary-implement-and-evaluate', title: 'Integumentary System and Mucous Membranes: Implement and Take Action; Evaluate', estimatedTime: '1 hr 7 min' },
        ],
      },
    ],
  },
  {
    id: 'section-5',
    number: 5,
    title: 'Mobility',
    chapters: [
      {
        id: 'chapter-39-immobility',
        number: 39,
        title: 'Immobility',
        lessons: [
          { id: 'activity-and-movement-assess-and-recognize-cues', title: 'Activity and Movement: Assess and Recognize Cues', estimatedTime: '1 hr 4 min' },
          { id: 'activity-and-movement-analyze-cues-and-plan', title: 'Activity and Movement: Analyze Cues and Prioritize Hypotheses; Plan and Generate Solutions', estimatedTime: '40 min' },
          { id: 'activity-and-movement-implement-and-evaluate', title: 'Activity and Movement: Implement and Take Action; Evaluate', estimatedTime: '1 hr 4 min' },
        ],
      },
      {
        id: 'chapter-15-fall-risk-and-injuries',
        number: 15,
        title: 'Clinical Judgment to Reduce Fall Risk and Injuries',
        lessons: [
          { id: 'fall-prevention', title: 'Fall Prevention', estimatedTime: '23 min' },
          { id: 'falls', title: 'Falls', estimatedTime: '50 min' },
          { id: 'nursing-interventions-for-fall-reduction', title: 'Nursing Interventions for Fall Reduction', estimatedTime: '46 min' },
        ],
      },
      {
        id: 'chapter-16-safe-environments',
        number: 16,
        title: 'Clinical Judgment to Promote Safe Environments',
        lessons: [
          { id: 'home-safety-and-technology', title: 'Home Safety and Technology', estimatedTime: '39 min' },
        ],
      },
      {
        id: 'chapter-21-bone-and-joint-problems',
        number: 21,
        title: 'Bone and Joint Problems',
        lessons: [
          { id: 'promoting-healthy-aging-musculoskeletal-system', title: 'Promoting Healthy Aging: Musculoskeletal System', estimatedTime: '29 min' },
        ],
      },
    ],
  },
  {
    id: 'section-6',
    number: 6,
    title: 'Nutrition & Tubes',
    chapters: [
      {
        id: 'chapter-45-nutrition',
        number: 45,
        title: 'Nutrition',
        lessons: [
          { id: 'overview-of-nutrition', title: 'Overview of Nutrition', estimatedTime: '46 min' },
          { id: 'nutrition-assess-and-recognize-cues', title: 'Nutrition: Assess and Recognize Cues', estimatedTime: '1 hr 29 min' },
          { id: 'nutrition-analyze-cues-and-plan', title: 'Nutrition: Analyze Cues and Prioritize Hypotheses; Plan and Generate Solutions', estimatedTime: '30 min' },
          { id: 'nutrition-implement-and-evaluate', title: 'Nutrition: Implement and Take Action; Evaluate', estimatedTime: '54 min' },
        ],
      },
      {
        id: 'chapter-10-nutritional-health',
        number: 10,
        title: 'Clinical Judgment to Promote Nutritional Health',
        lessons: [
          { id: 'factors-and-conditions-related-to-nutrition', title: 'Factors and Conditions Related to Nutrition', estimatedTime: '34 min' },
          { id: 'nutritional-health', title: 'Nutritional Health', estimatedTime: '25 min' },
          { id: 'using-clinical-judgment-nutritional-health', title: 'Using Clinical Judgment to Promote Healthy Aging: Nutritional Health', estimatedTime: '24 min' },
        ],
      },
    ],
  },
  {
    id: 'section-7',
    number: 7,
    title: 'Oxygenation',
    chapters: [
      {
        id: 'chapter-27-respiratory-system',
        number: 27,
        title: 'Assessment: Respiratory System',
        lessons: [
          { id: 'assessment-of-respiratory-system', title: 'Assessment of Respiratory System', estimatedTime: '56 min' },
          { id: 'diagnostic-studies-of-respiratory-system', title: 'Diagnostic Studies of Respiratory System', estimatedTime: '34 min' },
          { id: 'structures-and-functions-of-respiratory-system', title: 'Structures and Functions of Respiratory System', estimatedTime: '47 min' },
        ],
      },
    ],
  },
  {
    id: 'section-8',
    number: 8,
    title: 'Medication Administration',
    chapters: [
      {
        id: 'chapter-31-medication-administration',
        number: 31,
        title: 'Medication Administration',
        lessons: [
          { id: 'overview-of-concepts-in-pharmacology', title: 'Overview of Concepts in Pharmacology', estimatedTime: '1 hr 12 min' },
          { id: 'principles-of-safe-medication-administration', title: 'Principles of Safe Medication Administration', estimatedTime: '48 min' },
          { id: 'medication-administration-assess-and-recognize-cues', title: 'Medication Administration: Assess and Recognize Cues', estimatedTime: '38 min' },
          { id: 'medication-administration-analyze-cues-and-plan', title: 'Medication Administration: Analyze Cues and Prioritize Hypotheses; Plan and Generate Solutions', estimatedTime: '27 min' },
          { id: 'medication-administration-implement-and-evaluate', title: 'Medication Administration: Implement and Take Action; Evaluate', estimatedTime: '1 hr 32 min' },
        ],
      },
      {
        id: 'chapter-9-safe-medication-use',
        number: 9,
        title: 'Clinical Judgment to Promote Safe Medication Use',
        lessons: [
          { id: 'medication-and-its-use', title: 'Medication and Its Use', estimatedTime: '44 min' },
          { id: 'medication-related-problems-and-older-adults', title: 'Medication-Related Problems and Older Adults', estimatedTime: '33 min' },
          { id: 'psychoactive-medications', title: 'Psychoactive Medications', estimatedTime: '38 min' },
        ],
      },
    ],
  },
  {
    id: 'section-9',
    number: 9,
    title: 'Elimination',
    chapters: [
      {
        id: 'chapter-46-urinary-elimination',
        number: 46,
        title: 'Urinary Elimination',
        lessons: [
          { id: 'overview-of-urinary-system', title: 'Overview of the Urinary System', estimatedTime: '37 min' },
          { id: 'urinary-function-and-elimination-assess-and-recognize-cues', title: 'Urinary Function and Elimination: Assess and Recognize Cues', estimatedTime: '42 min' },
          { id: 'urinary-elimination-analyze-cues-and-plan', title: 'Urinary Elimination: Analyze Cues and Prioritize Hypotheses; Plan and Generate Solutions', estimatedTime: '29 min' },
          { id: 'urinary-elimination-implement-and-evaluate', title: 'Urinary Elimination: Implement and Take Action; Evaluate', estimatedTime: '54 min' },
        ],
      },
      {
        id: 'chapter-47-bowel-elimination',
        number: 47,
        title: 'Bowel Elimination',
        lessons: [
          { id: 'overview-of-gastrointestinal-tract', title: 'Overview of the Gastrointestinal Tract', estimatedTime: '58 min' },
          { id: 'bowel-function-and-elimination-assess-and-recognize-cues', title: 'Bowel Function and Elimination: Assess and Recognize Cues', estimatedTime: '53 min' },
          { id: 'bowel-elimination-analyze-cues-and-plan', title: 'Bowel Elimination: Analyze Cues and Prioritize Hypotheses; Plan and Generate Solutions', estimatedTime: '47 min' },
          { id: 'bowel-elimination-implement-and-evaluate', title: 'Bowel Elimination: Implement and Take Action; Evaluate', estimatedTime: '1 hr 12 min' },
        ],
      },
      {
        id: 'chapter-12-bladder-and-bowel-health',
        number: 12,
        title: 'Clinical Judgment to Promote Bladder and Bowel Health',
        lessons: [
          { id: 'nursing-actions-for-bowel-elimination', title: 'Nursing Actions for Bowel Elimination', estimatedTime: '37 min' },
          { id: 'nursing-actions-for-bowel-leakage-and-fecal-incontinence', title: 'Nursing Actions for Bowel Leakage and Fecal Incontinence', estimatedTime: '17 min' },
          { id: 'nursing-actions-for-urinary-incontinence', title: 'Nursing Actions for Urinary Incontinence', estimatedTime: '39 min' },
          { id: 'recognizing-urinary-incontinence', title: 'Recognizing Urinary Incontinence', estimatedTime: '35 min' },
          { id: 'urinary-tract-infections', title: 'Urinary Tract Infections (UTIs)', estimatedTime: '16 min' },
        ],
      },
    ],
  },
];

/** Flat list of all lessons for lookup */
export interface FlatLesson extends Lesson {
  sectionId: string;
  sectionNumber: number;
  sectionTitle: string;
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
}

export const allLessons: FlatLesson[] = lessonSections.flatMap((sec) =>
  sec.chapters.flatMap((ch) =>
    ch.lessons.map((l) => ({
      ...l,
      sectionId: sec.id,
      sectionNumber: sec.number,
      sectionTitle: sec.title,
      chapterId: ch.id,
      chapterNumber: ch.number,
      chapterTitle: ch.title,
    }))
  )
);
