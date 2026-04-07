export interface SubPage {
  id: string;   // URL segment, e.g. 'general-survey'
  title: string;
}

export interface Section {
  id: string;
  title: string;
  subPages?: SubPage[];
}

export interface CourseModule {
  number: number;
  slug: string;
  title: string;
  competency: string;
  sections: Section[];
}

export const courseModules: CourseModule[] = [
  {
    number: 1,
    slug: 'module-1',
    title: 'Health Assessment',
    competency: '7093.4.1',
    sections: [
      { id: 'health-history', title: 'Page 1: Health History & General Physical', subPages: [
        { id: 'general-survey',        title: 'General Survey' },
        { id: 'neurological',          title: 'Neurological' },
        { id: 'cardiovascular',        title: 'Cardiovascular' },
        { id: 'respiratory',           title: 'Respiratory' },
        { id: 'gastrointestinal',      title: 'Gastrointestinal' },
        { id: 'genitourinary',         title: 'Genitourinary' },
        { id: 'musculoskeletal',       title: 'Musculoskeletal' },
        { id: 'integumentary',         title: 'Integumentary' },
        { id: 'head-to-toe-assessment', title: 'Adult Head-to-Toe Examination' },
      ]},
      { id: 'older-adult', title: 'Page 2: Older Adult Assessment' },
      { id: 'vital-signs', title: 'Page 3: Vital Signs & Pain Assessment' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
  {
    number: 2,
    slug: 'module-2',
    title: 'Nursing Process & Clinical Judgment',
    competency: '7093.4.2',
    sections: [
      { id: 'adpie', title: 'The Nursing Process (ADPIE)' },
      { id: 'cjmm', title: 'Clinical Judgment Measurement Model' },
      { id: 'culture-diversity', title: 'Culture, Diversity & Health Equity' },
      { id: 'plan-of-care', title: 'Developing a Plan of Care' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
  {
    number: 3,
    slug: 'module-3',
    title: 'Infection Control',
    competency: '7093.4.3',
    sections: [
      { id: 'hand-hygiene', title: 'Hand Hygiene' },
      { id: 'precautions', title: 'Transmission-Based Precautions' },
      { id: 'sterile-technique', title: 'Sterile vs. Clean Technique' },
      { id: 'gloving', title: 'Gloving' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
  {
    number: 4,
    slug: 'module-4',
    title: 'Personal Hygiene',
    competency: '7093.4.4',
    sections: [
      { id: 'bed-baths', title: 'Bed Baths' },
      { id: 'oral-hygiene', title: 'Oral Hygiene' },
      { id: 'hair-nail-foot', title: 'Hair, Nail & Foot Care' },
      { id: 'skin-integrity', title: 'Skin Integrity & Pressure Injury Assessment' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
  {
    number: 5,
    slug: 'module-5',
    title: 'Mobility',
    competency: '7093.4.5',
    sections: [
      { id: 'mobility-assessment', title: 'Mobility Impairment Assessment' },
      { id: 'fall-prevention', title: 'Fall Prevention' },
      { id: 'body-mechanics', title: 'Body Mechanics & Safe Patient Handling' },
      { id: 'transfer', title: 'Transfer Techniques' },
      { id: 'ambulation', title: 'Ambulation Assistive Devices' },
      { id: 'rom', title: 'Range-of-Motion (ROM) Exercises' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
  {
    number: 6,
    slug: 'module-6',
    title: 'Nutrition & Tubes',
    competency: '7093.4.6',
    sections: [
      { id: 'nutritional-assessment', title: 'Nutritional Assessment' },
      { id: 'aspiration', title: 'Aspiration Precautions' },
      { id: 'intake-output', title: 'Intake & Output (I&O)' },
      { id: 'ng-tube', title: 'Nasogastric (NG) Tube' },
      { id: 'enteral', title: 'Enteral Tube Feedings' },
      { id: 'tpn', title: 'Total Parenteral Nutrition (TPN)' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
  {
    number: 7,
    slug: 'module-7',
    title: 'Oxygenation',
    competency: '7093.4.7',
    sections: [
      { id: 'respiratory-assessment', title: 'Respiratory Assessment' },
      { id: 'oxygen-delivery', title: 'Oxygen Delivery Systems' },
      { id: 'oxygen-safety', title: 'Oxygen Safety' },
      { id: 'airway', title: 'Airway Management & Suctioning' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
  {
    number: 8,
    slug: 'module-8',
    title: 'Medication Administration',
    competency: '7093.4.8',
    sections: [
      { id: 'rights', title: 'Rights of Medication Administration' },
      { id: 'error-prevention', title: 'Medication Error Prevention' },
      { id: 'routes', title: 'Routes of Administration' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
  {
    number: 9,
    slug: 'module-9',
    title: 'Elimination',
    competency: '7093.4.9',
    sections: [
      { id: 'urinary-elimination', title: 'Urinary Elimination' },
      { id: 'catheterization', title: 'Urinary Catheterization' },
      { id: 'bowel-elimination', title: 'Bowel Elimination' },
      { id: 'enemas', title: 'Enemas' },
      { id: 'ostomy', title: 'Ostomy Care' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
  {
    number: 10,
    slug: 'module-10',
    title: 'Specimen Collection',
    competency: '7093.4.10',
    sections: [
      { id: 'specimen-collection', title: 'Principles of Specimen Collection' },
      { id: 'urinary-specimens', title: 'Urinary Specimens' },
      { id: 'blood-glucose', title: 'Blood Glucose Testing' },
      { id: 'stool-specimens', title: 'Stool Specimens' },
      { id: 'sputum', title: 'Sputum Specimen' },
      { id: 'wound-culture', title: 'Wound Culture' },
      { id: 'sbar-labs', title: 'SBAR for Abnormal Lab Values' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
  {
    number: 11,
    slug: 'module-11',
    title: 'Nursing Skills Simulation',
    competency: '7093.4.11',
    sections: [
      { id: 'simulation-purpose', title: 'Purpose of Simulation in Nursing Education' },
      { id: 'sls', title: 'Simulation Learning System (SLS)' },
      { id: 'shadow-health', title: 'Shadow Health Digital Clinical Experiences' },
      { id: 'simumed', title: 'SimuMED Kit Practice' },
      { id: 'lab-prep', title: 'Lab Intensive Preparation Checklist' },
      { id: 'key-terms', title: 'Key Terms' },
    ],
  },
];

/** Linear page order for prev/next navigation */
export const pageOrder: string[] = [
  '',
  'course-overview',
  ...courseModules.flatMap((m) => [
    m.slug,
    ...m.sections.flatMap((s) =>
      s.subPages ? s.subPages.map((sp) => `${m.slug}/${sp.id}`) : []
    ),
  ]),
];
