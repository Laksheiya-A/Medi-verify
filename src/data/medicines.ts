export interface Medicine {
  id: string;
  name: string;
  imageUrl: string;
  purpose: string;
  expiryDate: string;
  ageRestriction: string;
  sideEffects: string[];
  usageDuration: string;
  status: 'verified' | 'expired' | 'warning';
  description: string;
  compatibleDiseases: string[];
  incompatibleDiseases: string[];
  dosage: string;
  manufacturer: string;
}

const medicines: Medicine[] = [
  {
    id: "med-001",
    name: "Paracetamol 500mg",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    purpose: "Pain Reliever & Fever Reducer",
    expiryDate: "2025-12-31",
    ageRestriction: "12 years and above",
    sideEffects: ["Nausea", "Stomach pain", "Allergic reactions"],
    usageDuration: "3-5 days, or as directed by physician",
    status: "verified",
    description: "Paracetamol is a common pain reliever and fever reducer. It's used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.",
    compatibleDiseases: ["Headache", "Fever", "Common Cold", "Toothache", "Joint Pain"],
    incompatibleDiseases: ["Liver Disease", "Alcoholism", "Kidney Disease"],
    dosage: "1-2 tablets every 4-6 hours as needed, not exceeding 8 tablets in 24 hours",
    manufacturer: "HealthCare Pharmaceuticals"
  },
  {
    id: "med-002",
    name: "Amoxicillin 250mg",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    purpose: "Antibiotic",
    expiryDate: "2024-06-30",
    ageRestriction: "All ages (dosage varies)",
    sideEffects: ["Diarrhea", "Rash", "Nausea", "Vomiting"],
    usageDuration: "Complete full course (7-10 days typically)",
    status: "verified",
    description: "Amoxicillin is a penicillin antibiotic that fights bacteria in your body. It's used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, and infections of the ear, nose, throat, skin, or urinary tract.",
    compatibleDiseases: ["Bacterial Infections", "Pneumonia", "Bronchitis", "Tonsillitis", "Urinary Tract Infections"],
    incompatibleDiseases: ["Viral Infections", "Common Cold", "Flu"],
    dosage: "250-500mg three times daily for 7-10 days, depending on infection type and severity",
    manufacturer: "MediCore Labs"
  },
  {
    id: "med-003",
    name: "Ibuprofen 200mg",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    purpose: "Anti-inflammatory & Pain Reliever",
    expiryDate: "2023-10-31",
    ageRestriction: "12 years and above",
    sideEffects: ["Stomach irritation", "Heartburn", "Dizziness", "Headache"],
    usageDuration: "3-10 days, depending on condition",
    status: "expired",
    description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID). It works by reducing hormones that cause inflammation and pain in the body. It's used to reduce fever and treat pain or inflammation caused by many conditions such as headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.",
    compatibleDiseases: ["Headache", "Arthritis", "Menstrual Pain", "Muscle Pain", "Inflammation"],
    incompatibleDiseases: ["Stomach Ulcers", "Heart Failure", "Kidney Disease"],
    dosage: "1-2 tablets every 4-6 hours as needed, not exceeding 6 tablets in 24 hours",
    manufacturer: "PainRelief Pharmaceuticals"
  },
  {
    id: "med-004",
    name: "Loratadine 10mg",
    imageUrl: "/lovable-uploads/2a5ef57b-9068-4e2c-bc05-fb190b786090.png",
    purpose: "Antihistamine",
    expiryDate: "2024-09-15",
    ageRestriction: "6 years and above",
    sideEffects: ["Drowsiness", "Dry mouth", "Headache"],
    usageDuration: "As needed for allergy symptoms",
    status: "warning",
    description: "Loratadine is an antihistamine that reduces the effects of the natural chemical histamine in the body. Histamine can produce symptoms of sneezing, itching, watery eyes, and runny nose. It's used to treat symptoms of seasonal allergies and hives.",
    compatibleDiseases: ["Allergic Rhinitis", "Hay Fever", "Hives", "Skin Allergies"],
    incompatibleDiseases: ["Asthma (as primary treatment)", "Bacterial Infections"],
    dosage: "1 tablet daily, preferably in the morning",
    manufacturer: "AllergyShield Inc."
  },
  {
    id: "med-005",
    name: "Omeprazole 20mg",
    imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    purpose: "Proton Pump Inhibitor",
    expiryDate: "2025-08-20",
    ageRestriction: "18 years and above",
    sideEffects: ["Headache", "Abdominal pain", "Diarrhea", "Nausea"],
    usageDuration: "4-8 weeks for treatment, long-term for maintenance",
    status: "verified",
    description: "Omeprazole is a proton pump inhibitor that decreases the amount of acid produced in the stomach. It's used to treat symptoms of gastroesophageal reflux disease (GERD) and other conditions caused by excess stomach acid.",
    compatibleDiseases: ["GERD", "Peptic Ulcers", "Heartburn", "Acid Reflux", "Zollinger-Ellison Syndrome"],
    incompatibleDiseases: ["Liver Disease", "Vitamin B12 Deficiency"],
    dosage: "20mg once daily before breakfast for 4-8 weeks",
    manufacturer: "GastroHealth Pharmaceuticals"
  },
  {
    id: "med-006",
    name: "Lisinopril 10mg",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    purpose: "ACE Inhibitor",
    expiryDate: "2025-04-10",
    ageRestriction: "18 years and above",
    sideEffects: ["Dizziness", "Cough", "Headache", "Fatigue"],
    usageDuration: "Long-term treatment",
    status: "verified",
    description: "Lisinopril is an ACE inhibitor that is used to treat high blood pressure (hypertension) in adults and children who are at least 6 years old. It's also used to improve survival after a heart attack and to treat heart failure in adults.",
    compatibleDiseases: ["Hypertension", "Heart Failure", "Post Heart Attack Recovery", "Diabetic Kidney Disease"],
    incompatibleDiseases: ["Pregnancy", "Bilateral Renal Artery Stenosis"],
    dosage: "10-40mg once daily, adjusted based on blood pressure response",
    manufacturer: "CardioLife Medical"
  },
  {
    id: "med-007",
    name: "Atorvastatin 20mg",
    imageUrl: "https://images.unsplash.com/photo-1587854680352-936b22b91030?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    purpose: "Cholesterol Reducer",
    expiryDate: "2025-07-15",
    ageRestriction: "18 years and above",
    sideEffects: ["Muscle pain", "Liver enzyme abnormalities", "Headache", "Joint pain"],
    usageDuration: "Long-term treatment, taken daily",
    status: "verified",
    description: "Atorvastatin belongs to a group of drugs called HMG CoA reductase inhibitors, or 'statins.' It reduces levels of bad cholesterol (low-density lipoprotein, or LDL) and triglycerides in the blood, while increasing levels of good cholesterol (high-density lipoprotein, or HDL).",
    compatibleDiseases: ["High Cholesterol", "Heart Disease", "Atherosclerosis", "Coronary Artery Disease"],
    incompatibleDiseases: ["Liver Disease", "Pregnancy", "Breastfeeding"],
    dosage: "20-40mg once daily, preferably in the evening",
    manufacturer: "CardioHealth Pharmaceuticals"
  },
  {
    id: "med-008",
    name: "Metformin 500mg",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    purpose: "Anti-Diabetic",
    expiryDate: "2024-11-20",
    ageRestriction: "18 years and above",
    sideEffects: ["Nausea", "Diarrhea", "Stomach upset", "Metallic taste"],
    usageDuration: "Long-term daily treatment",
    status: "verified",
    description: "Metformin is an oral diabetes medicine that helps control blood sugar levels. It is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus.",
    compatibleDiseases: ["Type 2 Diabetes", "Insulin Resistance", "Prediabetes", "Polycystic Ovary Syndrome"],
    incompatibleDiseases: ["Type 1 Diabetes", "Diabetic Ketoacidosis", "Severe Kidney Disease"],
    dosage: "500-1000mg twice daily with meals, increasing gradually to reduce side effects",
    manufacturer: "DiabetesCare Solutions"
  }
];

export default medicines;
