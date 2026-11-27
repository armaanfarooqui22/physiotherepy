export interface ConditionItem {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  symptoms: string[];
  howWeTreat: string[];
  recoveryExpectation: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  confirmNote?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  context: string;
  condition: string;
  quote: string;
  outcome: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const CLINIC_INFO = {
  name: 'More Than Physio',
  phoneDisplay: '+91 99535 40232',
  phoneHref: 'tel:+919953540232',
  whatsappNumber: '919953540232',
  area: 'Greater Kailash 1 (GK-1), New Delhi',
  fullAddressPlaceholder: 'Greater Kailash 1 (GK-1), New Delhi – 110048 [Exact clinic address to be confirmed]',
  rating: '5.0',
  reviewCount: '84+',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=More+Than+Physio+Greater+Kailash+1+New+Delhi',
  timings: [
    { days: 'Monday – Saturday', hours: '9:00 AM – 7:00 PM [confirm]' },
    { days: 'Sunday', hours: 'By prior appointment [confirm]' },
  ],
};

export const CLINIC_IMAGES = {
  hero: '/src/assets/images/hero_physio_clinic_1795760442535.jpg',
  manualTherapy: '/src/assets/images/manual_therapy_rehab_1795760442529.jpg',
  exerciseRehab: '/src/assets/images/exercise_rehab_movement_1795760442358.jpg',
  therapist: '/src/assets/images/therapist_portrait_1795760444680.jpg',
  sportsAssessment: '/src/assets/images/sports_rehab_assessment_1795760445281.jpg',
};

export const CONDITIONS: ConditionItem[] = [
  {
    id: 'back-pain',
    name: 'Back Pain',
    category: 'Spine Care',
    shortDescription:
      'Targeted relief for lower back stiffness, disc-related discomfort, and recurring strain from sitting or lifting.',
    symptoms: [
      'Aching, tightness, or sharp discomfort across the lower or mid-back',
      'Stiffness when getting out of bed or standing up after long desk hours',
      'Pain that flares during bending, driving, or carrying everyday loads',
    ],
    howWeTreat: [
      'Detailed spinal mobility and core-stability assessment to find mechanical triggers',
      'Gentle manual joint mobilisation and soft-tissue release to ease protective muscle spasm',
      'Progressive core, hip, and movement retraining tailored to your daily routine',
    ],
    recoveryExpectation:
      'Many patients notice meaningful easing of acute stiffness within 2 to 4 sessions, while lasting resilience for recurring back pain typically builds over 4 to 8 weeks of guided exercise. Timelines vary depending on duration and severity.',
  },
  {
    id: 'neck-shoulder-pain',
    name: 'Neck & Shoulder Pain',
    category: 'Upper Body',
    shortDescription:
      'Care for cervical strain, frozen shoulder, rotator cuff irritation, and tension headaches linked to posture.',
    symptoms: [
      'Stiff neck, restricted turning while driving, or upper-trapezius heaviness',
      'Difficulty reaching overhead, dressing, or sleeping comfortably on the affected shoulder',
      'Dull ache radiating between the shoulder blades or up toward the base of the skull',
    ],
    howWeTreat: [
      'Cervical and scapular movement evaluation to identify stiffness and load imbalances',
      'Targeted manual release, gentle joint gliding, and optional dry needling for trigger points',
      'Scapular control, rotator cuff strengthening, and practical workstation ergonomics',
    ],
    recoveryExpectation:
      'Muscular neck tension often settles steadily across 3 to 5 sessions; frozen shoulder and rotator cuff conditions generally progress in structured phases over 6 to 12 weeks with consistent home mobility work.',
  },
  {
    id: 'knee-pain',
    name: 'Knee Pain',
    category: 'Lower Limb',
    shortDescription:
      'Evidence-led rehabilitation for runner’s knee, ligament sprains, meniscus irritation, and stair discomfort.',
    symptoms: [
      'Pain around or behind the kneecap when climbing stairs, squatting, or sitting cross-legged',
      'Clicking, mild swelling, or a sense of unsteadiness on uneven ground',
      'Tightness around the front of the knee after walking, jogging, or standing long hours',
    ],
    howWeTreat: [
      'Full lower-limb biomechanics check assessing hip strength, ankle mobility, and knee tracking',
      'Load management, patellar taping or electrotherapy when helpful for symptom calm',
      'Graded quadriceps, gluteal, and balance strengthening for confident stair and walking control',
    ],
    recoveryExpectation:
      'Early symptom relief and easier daily walking commonly begin within 2 to 4 weeks; rebuilding full strength for stairs, sports, or longer walks generally spans 6 to 10 weeks based on individual tissue healing.',
  },
  {
    id: 'sports-injuries',
    name: 'Sports Injuries',
    category: 'Active Recovery',
    shortDescription:
      'Structured recovery for ankle sprains, hamstring strains, tennis elbow, shin splints, and overuse injuries.',
    symptoms: [
      'Localised pain, swelling, or reduced power during or after training sessions',
      'Recurring niggles that return as soon as you increase running mileage or gym load',
      'Hesitation or asymmetry when pivoting, sprinting, or lifting overhead',
    ],
    howWeTreat: [
      'Sport-specific movement screening to spot contributing mobility or strength deficits',
      'Hands-on tissue recovery paired with progressive tendon and muscle loading protocols',
      'Criteria-based return-to-sport drills so you return with confidence rather than guesswork',
    ],
    recoveryExpectation:
      'Mild sprains and strains often progress well over 3 to 6 weeks, whereas chronic tendinopathies or higher-grade injuries benefit from an 8 to 12 week progressive loading plan tailored to your sport.',
  },
  {
    id: 'post-surgery-rehab',
    name: 'Post-Surgery Rehab',
    category: 'Surgical Recovery',
    shortDescription:
      'Step-by-step rehabilitation following knee replacement (TKR), ACL reconstruction, spine, or shoulder surgery.',
    symptoms: [
      'Expected post-operative stiffness, swelling, and guarded range of motion',
      'Muscle weakness around the operated joint and uncertainty about safe movement limits',
      'Difficulty resuming independent walking, stairs, or daily self-care comfortably',
    ],
    howWeTreat: [
      'Close alignment with your orthopaedic surgeon’s post-op protocol and healing phases',
      'Gentle range-of-motion restoration, swelling guidance, and safe gait retraining',
      'Milestone-driven strength, balance, and functional independence coaching',
    ],
    recoveryExpectation:
      'Post-surgical rehabilitation follows biological healing milestones—from early mobility in weeks 1 to 6 to deeper strength and functional return across 3 to 6+ months, adjusted to your surgeon’s guidance.',
  },
  {
    id: 'sciatica',
    name: 'Sciatica',
    category: 'Nerve & Spine',
    shortDescription:
      'Gentle, structured care for radiating leg discomfort, tingling, or lower-back nerve irritation.',
    symptoms: [
      'Sharp, burning, or aching sensation travelling from the lower back or buttock down the leg',
      'Pins-and-needles, mild numbness, or pain that worsens with prolonged sitting or coughing',
      'Difficulty finding a comfortable sleeping or sitting posture',
    ],
    howWeTreat: [
      'Careful neurological and directional-preference assessment to find movements that calm symptoms',
      'Gentle nerve-gliding techniques, spinal unloading positions, and targeted manual therapy',
      'Gradual reintroduction of spinal stability and walking tolerance without aggravating the nerve',
    ],
    recoveryExpectation:
      'Many people experience steady reduction in radiating leg symptoms within 3 to 6 weeks of guided care, though nerve irritation settles at its own pace and benefits from patient, consistent follow-through.',
  },
  {
    id: 'arthritis',
    name: 'Arthritis',
    category: 'Joint Longevity',
    shortDescription:
      'Compassionate, joint-friendly movement programmes for osteoarthritis and inflammatory joint stiffness.',
    symptoms: [
      'Morning joint stiffness that eases gradually as you begin moving',
      'Deep ache in knees, hips, shoulders, or hands after prolonged standing or weather shifts',
      'Reduced confidence with stairs, brisk walks, or rising from low chairs',
    ],
    howWeTreat: [
      'Joint-friendly strengthening that cushions and supports affected cartilage without flare-ups',
      'Gentle range-of-motion mobilisation, warmth or electrotherapy for comfort when needed',
      'Practical pacing strategies and home routines designed to preserve independence',
    ],
    recoveryExpectation:
      'While physiotherapy does not reverse structural joint changes, consistent strengthening and mobility work commonly improve comfort, walking distance, and daily ease over 6 to 10 weeks.',
  },
  {
    id: 'posture-correction',
    name: 'Posture Correction',
    category: 'Ergonomics & Mobility',
    shortDescription:
      'Practical movement coaching for rounded shoulders, forward-head strain, and desk-related fatigue.',
    symptoms: [
      'End-of-day heaviness across the upper back, neck, and lower spine',
      'Slouched posture during laptop work, driving, or long phone use',
      'Recurring mild stiffness that improves temporarily with stretching but quickly returns',
    ],
    howWeTreat: [
      'Postural and thoracic mobility check focusing on how you move rather than rigid holding',
      'Targeted chest and hip mobility work combined with deep neck and back endurance training',
      'Realistic desk setup adjustments and 3-minute movement breaks you can keep up at work',
    ],
    recoveryExpectation:
      'Improved postural comfort and body awareness often appear within 3 to 4 weeks, with lasting endurance gains developing over 6 to 8 weeks of brief daily habits.',
  },
  {
    id: 'neuro-rehab',
    name: 'Neuro Rehab',
    category: 'Neurological Care',
    shortDescription:
      'Patient-centred mobility, balance, and functional retraining after stroke, nerve palsy, or balance disorders.',
    symptoms: [
      'Weakness, altered coordination, or stiffness affecting one side of the body or limb',
      'Unsteadiness while standing, turning, or walking indoors and outdoors',
      'Fatigue during everyday tasks such as grasping objects, transferring, or climbing steps',
    ],
    howWeTreat: [
      'Individualised neurological assessment focused on meaningful daily goals and safety',
      'Repetitive task-specific practice, gait retraining, balance exercises, and spasticity management',
      'Caregiver education and adaptive home exercise guidance for steady between-session progress',
    ],
    recoveryExpectation:
      'Neurological recovery is gradual and deeply individual. We set realistic short-term functional milestones and review progress closely with you and your family every few weeks.',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Thorough Assessment',
    subtitle: 'Understand the root cause',
    description:
      'Your first session begins with unhurried conversation and a detailed movement examination. We look beyond the painful spot to understand how your joints, muscles, and daily habits interact.',
  },
  {
    number: '02',
    title: 'Personalised Plan',
    subtitle: 'Clear, realistic roadmap',
    description:
      'No cookie-cutter sheets. We explain what we found in plain language and outline a phased recovery plan matched to your schedule, comfort level, and everyday goals.',
  },
  {
    number: '03',
    title: 'Hands-on Therapy + Exercise',
    subtitle: 'Calm pain, rebuild strength',
    description:
      'We blend skilled manual therapy to ease stiffness and discomfort with guided, progressive movement so your body grows stronger and more resilient between visits.',
  },
  {
    number: '04',
    title: 'Progress Tracking',
    subtitle: 'Measurable milestones',
    description:
      'Each visit checks range of motion, comfort, and functional wins—from sleeping undisturbed to climbing stairs smoothly—while equipping you with simple habits to stay well.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'manual-therapy',
    title: 'Manual Therapy',
    category: 'Hands-on Clinical Care',
    description:
      'Skilled joint mobilisation, myofascial release, and gentle soft-tissue techniques designed to ease stiffness, calm guarded muscles, and restore smoother joint movement.',
    highlights: ['Joint mobilisation', 'Myofascial & trigger-point release', 'Gentle spinal care'],
    image: CLINIC_IMAGES.manualTherapy,
    imageAlt: 'Physiotherapist delivering gentle hands-on manual therapy for upper back relief',
    featured: true,
  },
  {
    id: 'exercise-rehab',
    title: 'Exercise Rehab',
    category: 'Strength & Movement',
    description:
      'Guided one-on-one corrective exercise programmes that rebuild joint stability, balance, and functional strength so improvements carry into your daily life.',
    highlights: ['Progressive loading', 'Post-surgical rehab', 'Custom home programmes'],
    image: CLINIC_IMAGES.exerciseRehab,
    imageAlt: 'Patient performing guided resistance-band knee rehabilitation with a physiotherapist',
    featured: true,
  },
  {
    id: 'sports-physio',
    title: 'Sports Physio',
    category: 'Athletic & Active Recovery',
    description:
      'Biomechanics assessment, injury rehabilitation, and structured return-to-sport conditioning for runners, golfers, tennis players, and everyday fitness enthusiasts.',
    highlights: ['Movement screening', 'Tendon & ligament rehab', 'Safe return-to-play drills'],
    image: CLINIC_IMAGES.sportsAssessment,
    imageAlt: 'Sports physiotherapist assessing knee and ankle alignment for a runner in the clinic',
  },
  {
    id: 'dry-needling',
    title: 'Dry Needling',
    category: 'Targeted Muscle Release',
    description:
      'Precision sterile-filament technique used alongside movement therapy to help release persistent myofascial trigger points and ease stubborn muscular tightness.',
    highlights: ['Single-use sterile needles', 'Targets stubborn knots', 'Paired with active rehab'],
  },
  {
    id: 'electrotherapy',
    title: 'Electrotherapy',
    category: 'Supportive Pain Modulation',
    description:
      'Evidence-informed therapeutic modalities—including TENS, IFT, and therapeutic ultrasound—used judiciously to support comfort and tissue calm alongside active rehabilitation.',
    highlights: ['Acute pain modulation', 'Swelling & spasm support', 'Integrated with exercise'],
  },
  {
    id: 'home-visits',
    title: 'Home Visits',
    category: 'Care at Your Doorstep',
    description:
      'Convenient in-home physiotherapy sessions for post-operative patients, senior mobility care, or individuals unable to travel to our GK-1 clinic.',
    highlights: ['Post-surgery convenience', 'Senior mobility & balance', 'GK-1 & nearby South Delhi'],
    confirmNote: 'Service availability & radius subject to confirmation',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Meera Kapoor',
    context: 'Greater Kailash 1',
    condition: 'Post-Knee Replacement Rehab',
    quote:
      'After my total knee replacement, I was nervous about bending my leg or using stairs again. Every session here felt calm, patient, and thoughtfully paced—never rushed.',
    outcome: 'Walking comfortably through M-Block park within 10 weeks',
  },
  {
    id: 't2',
    name: 'Rohit Malhotra',
    context: 'East of Kailash',
    condition: 'Lower Back & Sciatica Relief',
    quote:
      'Months of long desk hours left me with nagging lower back pain radiating into my leg. Instead of only putting machines on me, they explained why it was flaring and gave me simple daily drills that fit my workday.',
    outcome: 'Returned to full workdays and weekend badminton without flare-ups',
  },
  {
    id: 't3',
    name: 'Ananya Sharma',
    context: 'Panchsheel Park',
    condition: 'Frozen Shoulder & Neck Care',
    quote:
      'I struggled to lift my arm to comb my hair or sleep on my right side. The combination of gentle manual therapy and steady mobility work made a world of difference over two months.',
    outcome: 'Restored comfortable overhead reach and restful sleep',
  },
  {
    id: 't4',
    name: 'Col. Vikram Nair (Retd.)',
    context: 'Greater Kailash 2',
    condition: 'Knee Arthritis & Balance',
    quote:
      'What sets More Than Physio apart is the genuine one-on-one attention. The clinic is spotless, warm, and uplifting, and the exercises were adjusted thoughtfully whenever my knees felt tired.',
    outcome: 'Steady stair climbing and renewed confidence on morning walks',
  },
  {
    id: 't5',
    name: 'Priya Deshmukh',
    context: 'Hauz Khas',
    condition: 'Running Knee Injury',
    quote:
      'A stubborn knee ache had sidelined me from half-marathon training. They spotted a hip stability gap I had missed for years and guided me step-by-step back onto the road.',
    outcome: 'Back to pain-free 10K training runs with a sustainable warm-up routine',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-first-visit',
    question: 'What happens during my first physiotherapy visit?',
    answer:
      'Your initial consultation typically lasts 45 to 60 minutes. We start by listening carefully to your symptoms, medical history, and daily goals, followed by a gentle physical and movement assessment. You will leave with a clear explanation of what is contributing to your discomfort, initial hands-on relief where appropriate, and a personalised rehabilitation plan.',
  },
  {
    id: 'faq-sessions',
    question: 'How many sessions will I need?',
    answer:
      'Every person and injury responds differently. Mild muscular strains may feel markedly better within 3 to 5 sessions, whereas long-standing back pain, frozen shoulder, or post-surgical recovery generally progress over 6 to 12+ weeks. After your first assessment, we give you an honest estimated timeline and review it regularly as you improve.',
  },
  {
    id: 'faq-referral',
    question: 'Do I need a doctor’s prescription or referral to book?',
    answer:
      'No referral is needed to book an initial physiotherapy assessment. However, if you have recent X-rays, MRI reports, surgical discharge summaries, or a doctor’s note, please bring them along—or share them on WhatsApp—so we can coordinate seamlessly with your orthopaedic or medical specialist.',
  },
  {
    id: 'faq-insurance',
    question: 'Is physiotherapy covered by health insurance?',
    answer:
      'Coverage varies by insurer and policy—many health plans reimburse physiotherapy following hospitalisation or surgery, and some corporate policies include OPD physiotherapy benefits. We are happy to provide properly stamped clinical bills and treatment notes to support your reimbursement claim. Please check your specific policy terms with your insurer.',
  },
  {
    id: 'faq-wear',
    question: 'What should I wear to my appointment?',
    answer:
      'Wear loose, comfortable clothing that allows easy movement and lets your physiotherapist examine the affected area—for example, shorts or relaxed track pants for knee or hip care, and a comfortable t-shirt or sleeveless top for shoulder or neck sessions.',
  },
  {
    id: 'faq-home-visits',
    question: 'Do you offer home physiotherapy visits in Greater Kailash?',
    answer:
      'Home visits in Greater Kailash 1 and nearby South Delhi neighbourhoods are offered on a case-by-case basis, particularly for post-surgery patients and seniors who have difficulty travelling. Please message us on WhatsApp or mention it in the booking form so we can confirm availability and scheduling for your area.',
  },
];
