import {
  BookOpen,
  Bus,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Monitor,
  Music,
  Palette,
  School,
  ShieldCheck,
  Trophy,
  Users,
  Utensils,
} from 'lucide-react';

export const navigationItems = [
  { label: 'About', path: '/about' },
  { label: 'Schools', path: '/schools' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Life at DPI', path: '/life-at-dpi' },
  { label: 'Documents', path: '/documents' },
  { label: 'Contact', path: '/contact' },
];

export const siteContact = {
  phones: [
    { display: '0776 587 792', href: '+256776587792' },
    { display: '0756 621 313', href: '+256756621313' },
  ],
  email: 'principal.shekinahcis@gmail.com',
  address: 'Mile 6, Komamboga, Gayaza Road, Kampala',
  officeHours: 'Monday to Friday, 8:00 AM - 4:00 PM',
};

export const quickFacts = [
  { text: 'Founded in 2007', icon: School },
  { text: 'Approximately 500 learners', icon: Users },
  { text: 'National and ACE curricula', icon: BookOpen },
  { text: 'Mile 6, Komamboga, Gayaza Road', icon: MapPin },
];

export const schools = [
  {
    title: 'Divine Kids Nursery School',
    years: 'Founded 2007',
    text: 'A warm early-years foundation where children learn through guided play, biblical values, language development, and structured discovery.',
    detail: 'The nursery programme builds confidence, communication, number sense, social awareness, and spiritual formation through age-appropriate routines and teacher-guided activity.',
    icon: School,
  },
  {
    title: 'Divine Purpose Junior School',
    years: 'Primary P.1 - P.7',
    text: 'A primary pathway shaped by professional learning, strong pastoral care, and the formation of responsible young leaders.',
    detail: 'The primary section combines academic discipline, strong moral grounding, practical clubs, and family partnership for learners preparing for the next stage of education.',
    icon: BookOpen,
  },
  {
    title: 'Shekinah Christian International School',
    years: 'K-12 international section',
    text: 'An international learning environment using the Accelerated Christian Education curriculum with individualized mastery-based progress.',
    detail: 'Shekinah supports mastery learning, personal goal-setting, scripture-based character development, and internationally minded preparation through the ACE model.',
    icon: GraduationCap,
  },
];

export const pillars = [
  { title: 'Godliness', text: 'Biblical values are treated as life-shaping foundations, not decorative language.', icon: ShieldCheck },
  { title: 'Dominion', text: 'Learners are formed to carry responsibility, steward gifts, and influence their communities wisely.', icon: Trophy },
  { title: 'Education', text: 'Academic excellence is pursued through professional teaching and a stimulating learning culture.', icon: BookOpen },
  { title: 'Technology', text: 'Digital confidence supports creativity, research, communication, and future readiness.', icon: Monitor },
  { title: 'Community', text: 'The school family works toward sustainable transformation beyond the classroom.', icon: HeartHandshake },
];

export const reasons = [
  'Christ-centered environment with a clear moral compass.',
  'Experienced teachers committed to academic excellence.',
  'Individualized attention through smaller class settings and mastery-based learning.',
  'Safe, secure, and welcoming campus life.',
  'Balanced development through sport, music, drama, chess, computer science, and creative arts.',
  'Practical support for families through accessible location, transport, and feeding options.',
];

export const curriculumHighlights = [
  {
    title: 'National curriculum pathway',
    text: 'Nursery and primary learners receive structured instruction, assessment, and preparation appropriate to their level.',
  },
  {
    title: 'Accelerated Christian Education',
    text: 'The ACE programme supports mastery-based progress, individual responsibility, biblical worldview, and measurable learning goals.',
  },
  {
    title: 'Character formation',
    text: 'Traits such as honesty, kindness, loyalty, responsibility, and self-discipline are built into the learning culture.',
  },
];

export const activities = [
  { label: 'Music', icon: Music },
  { label: 'Drama', icon: Palette },
  { label: 'Sports', icon: Dumbbell },
  { label: 'Computer Science', icon: Monitor },
  { label: 'Chess', icon: Trophy },
  { label: 'Feeding Program', icon: Utensils },
  { label: 'Transport', icon: Bus },
  { label: 'Bible Devotions', icon: ShieldCheck },
];

export const mediaItems = [
  {
    src: '/assets/divine-schools-objectives.webp',
    alt: 'DPI pupils participating in outdoor learning and school life',
    label: 'Learning Objectives',
  },
  {
    src: '/assets/shekinah-admissions-overview.webp',
    alt: 'Shekinah Christian International School admissions overview',
    label: 'Shekinah Admissions',
  },
  {
    src: '/assets/shekinah-foundation-activities.webp',
    alt: 'Shekinah activities and strong foundation brochure page',
    label: 'Activities and Foundation',
  },
  {
    src: '/assets/divine-schools-admissions-2026.webp',
    alt: 'Divine Schools admissions 2026 announcement',
    label: 'Admissions 2026',
  },
];

export const downloads = [
  {
    title: 'DPI Schools Overview',
    description: 'Strategic overview, vision, mission, and curriculum direction.',
    href: '/documents/dpi-schools-overview.pptx',
  },
  {
    title: 'Admissions Information',
    description: 'Nursery and primary registration details for new entrants.',
    href: '/documents/divine-schools-admission-2026.pdf',
  },
  {
    title: 'Nursery Brochure',
    description: 'Divine Kids Nursery School objectives, activities, and parent information.',
    href: '/documents/divine-kids-nursery-trifold.pdf',
  },
  {
    title: 'Shekinah Newsletter',
    description: 'School updates and community highlights from the 2026 issue.',
    href: '/documents/shekinah-newsletter-2026.pdf',
  },
];

export const admissionSteps = [
  {
    title: 'Visit the school office',
    text: 'Admissions are handled at the school offices from Monday to Friday during office hours.',
  },
  {
    title: 'Speak with admissions',
    text: 'Families can confirm class availability, entry level, fees, transport, and feeding options with the admissions team.',
  },
  {
    title: 'Complete registration',
    text: 'Registration is open for nursery and primary entrants, with Shekinah enquiries welcomed for the international section.',
  },
];