# EduStream TN
## Explainable AI-Based Multi-Dimensional Academic Stream Recommendation System

**Academic Final-Year Software Engineering Project**  
**Target Beneficiaries**: Tamil Nadu State Board Class 10 (SSLC) Students transitioning to Higher Secondary (Class 11)  
**Technology Stack**: React (v18), Vite, JavaScript, Tailwind CSS, Lucide Icons  

---

## 1. Project Overview & Educational Purpose

In the Tamil Nadu State Board educational system, students completing Class 10 (SSLC) face the critical decision of selecting their Higher-Secondary (Class 11) four-subject elective group (Part III). Historically, stream allocation has relied heavily on single-dimensional overall exam marks, which frequently leads to academic distress and stream mismatch in Class 11.

**EduStream TN** provides an **explainable decision-support platform** that evaluates students across **five holistic dimensions of evidence**:
1. **Academic Performance**: Tamil Nadu Class 10 SSLC marks across Language, English, Mathematics, Science, and Social Science.
2. **Cognitive Aptitude**: Situational reasoning tasks spanning numerical, logical, verbal, spatial, and analytical problem-solving.
3. **Subject Interests**: Intrinsic curiosity inventory across 7 academic domains (Sciences, Computing, Commerce, Humanities, Arts).
4. **Academic Self-Efficacy**: Measured confidence in managing higher-secondary demands (laboratory procedures, math proofs, extensive textbook reading, independent study stamina).
5. **Learning Exposure & Extracurriculars**: Real-world validation through science exhibitions, coding workshops, school budgeting, debating, and social leadership (NCC, Scouts, NSS).

---

## 2. Completed Screens & Interface Structure

The application features all 10 approved screens:

| # | Screen Name | Route / View ID | Key Capabilities & Controls |
| :--- | :--- | :--- | :--- |
| **1** | **Landing Page** | `landing` | Project logo, educational purpose, 5 dimensions overview, 3-step workflow, demo profile launcher, privacy guarantee. |
| **2** | **Student Dashboard** | `dashboard` | Circular progress ring, Class 10 profile overview, 5 dimension status tracker cards, quick navigation hub. |
| **3** | **Student Profile** | `profile` | SSLC marks input (Language, English, Maths, Science, Social), validation (0–100), aggregate calculator, performance trend badge. |
| **4** | **Aptitude Assessment** | `aptitude` | 10 situational multiple-choice questions across 5 cognitive sub-domains, real-time progress bar, domain filters. |
| **5** | **Interest Assessment** | `interests` | 5-point Likert scale response chips across 7 subject areas, real-time level feedback. |
| **6** | **Self-Efficacy Assessment**| `self-efficacy`| 4 confidence pillars (Quantitative, Lab/Science, Communication, Problem-solving), semantic low/high anchors. |
| **7** | **Learning Exposure** | `exposure` | Checkbox activity selector across 5 categories with depth badges (`Beginner`, `Active Member`, `Winner/Leader`). |
| **8** | **Recommendation Results** | `results` | Primary & alternative stream cards, 5-axis SVG Radar chart, 5-dimension Evidence Accordion, Conflicting Evidence alerts, print sheet. |
| **9** | **Subject Details View** | `stream-details`| Official TN Group Code, 4 Part III subject syllabus cards, theory vs. lab hours, school availability and infrastructure requirements. |
| **10**| **About the Project** | `about` | Project academic objectives, theoretical frameworks (Holland RIASEC, Bandura Self-Efficacy, MCDA), Responsible AI principles. |

---

## 3. Project Directory & Folder Structure

```text
my_own_project/
├── index.html                    # Application entry HTML
├── package.json                  # Dependencies (React 18, Vite, Tailwind CSS, Lucide)
├── vite.config.js                # Vite build and server configuration
├── tailwind.config.js            # Academic color palette tokens
├── postcss.config.js             # PostCSS plugins
├── src/
│   ├── main.jsx                  # React application mount
│   ├── App.jsx                   # Root layout, navigation router, and footer
│   ├── index.css                 # Tailwind base styles and print media rules
│   ├── context/
│   │   └── AssessmentContext.jsx # Central state management for the 5 dimensions and demo profiles
│   ├── data/
│   │   ├── tnStreamsData.js       # Official TN Class 11 groups (Group 2502, 2503, 2702, etc.)
│   │   ├── assessmentQuestions.js # Aptitude MCQs, Interest domains, Efficacy & Exposure prompts
│   │   └── sampleProfiles.js      # Clearly labelled illustrative student personas for viva demo
│   ├── utils/
│   │   └── advisoryEngine.js      # Transparent rule-based heuristic scoring & explainability generator
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx         # Header navigation and instant Demo Profile switcher
│   │   │   ├── Sidebar.jsx        # Responsive navigation drawer with completion checkmarks
│   │   │   ├── Footer.jsx         # Academic project credits and state board references
│   │   │   └── AdvisoryBanner.jsx # Non-binding educational guidance banner
│   │   ├── charts/
│   │   │   ├── DimensionRadarChart.jsx # Responsive pure SVG 5-axis balance radar chart
│   │   │   └── DimensionBarChart.jsx   # Dimension breakdown progress bars
│   │   └── results/
│   │       ├── StreamCard.jsx          # Suggested & alternative subject combination cards
│   │       ├── EvidenceAccordion.jsx   # Deconstructed 5-dimensional natural-language evidence
│   │       └── ConflictingEvidenceBox.jsx # Divergence warnings (e.g. Interest vs Math Confidence)
│   └── pages/
│       ├── LandingPage.jsx
│       ├── DashboardPage.jsx
│       ├── ProfilePage.jsx
│       ├── AptitudePage.jsx
│       ├── InterestPage.jsx
│       ├── SelfEfficacyPage.jsx
│       ├── ExposurePage.jsx
│       ├── ResultsPage.jsx
│       ├── StreamDetailsPage.jsx
│       └── AboutPage.jsx
└── README.md
```

---

## 4. How to Run the Application Locally

### Prerequisites
- Node.js (v18.x or higher)
- npm (v9.x or higher)

### Installation & Launch
1. Open terminal in the project directory:
   ```bash
   cd c:\Users\zigsh\Desktop\my_own_project
   ```
2. Start the local Vite development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   ```text
   http://localhost:5173
   ```

### Production Build
To create an optimized production bundle:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 5. College Viva / Examiner Demonstration Feature

To enable seamless review during academic project presentations:
* The top navigation bar includes an **instant Demo Profile Switcher**:
  1. **Selvan M. (Bio-Maths Aspirant)**: High Science & Maths marks, high lab confidence, active science exhibition awards -> Aligns with Group 2502.
  2. **Kavitha S. (Commerce & Analytics)**: Strong Math & Social Science, high business interest, event budgeting exposure -> Aligns with Group 2702 & 2708.
  3. **Dinesh R. (Humanities, Civics & Literary)**: High Language & Social Science, strong debating exposure, lower math confidence -> Aligns with Group 2801.
  4. **Blank Slate**: Empty form allowing manual entry from scratch.

Selecting any demo profile instantly populates all 5 assessment dimensions, allowing examiners to inspect the recommendation results and explainability visualizers immediately without manual typing.

---

## 6. Implementation Scope Boundaries & Incomplete Functionality

In accordance with academic development rules:
* **No Real Machine Learning Model**: Recommendations are generated using a transparent, rule-based heuristic attribution model (`advisoryEngine.js`), explicitly demonstrating how multi-dimensional evidence can be aggregated without unexplainable neural network black-boxes.
* **No Backend or Database**: State is maintained purely in client-side React Context and local memory. No user information is stored on remote servers or third-party analytics.
* **Advisory Only**: The system explicitly states that recommendations are consultative decision-support aids and do not constitute official allotment or admission guarantees.
