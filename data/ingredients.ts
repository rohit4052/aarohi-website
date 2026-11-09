export interface Ingredient {
  id: string;
  name: string;
  nameMr: string;
  emoji: string;
  color: string;
  benefit: string;
  benefitMr: string;
  description: string;
  usedIn: string[];
}

export const ingredients: Ingredient[] = [
  {
    id: 'amla',
    name: 'Amla',
    nameMr: 'आवळा',
    emoji: '🫐',
    color: '#4A7C59',
    benefit: 'Strengthens & Prevents Greying',
    benefitMr: 'मजबूती आणि पांढरे होणे प्रतिबंधित करते',
    description:
      'Indian Gooseberry – the ultimate Ayurvedic superfood for hair. Rich in Vitamin C and antioxidants, it strengthens hair follicles, prevents premature greying, and promotes growth.',
    usedIn: ['hair-oil', 'shampoo', 'toner', 'hair-mask', 'serum'],
  },
  {
    id: 'shikakai',
    name: 'Shikakai',
    nameMr: 'शिकाकाई',
    emoji: '🌿',
    color: '#6B8E5A',
    benefit: 'Natural Cleanser & Detangler',
    benefitMr: 'नैसर्गिक क्लेन्झर आणि गुंते सोडवणारे',
    description:
      'The traditional Indian hair cleanser. Shikakai has a naturally low pH that cleans hair gently without stripping natural oils, reducing dandruff and promoting healthy growth.',
    usedIn: ['shampoo', 'hair-mask'],
  },
  {
    id: 'brahmi',
    name: 'Brahmi',
    nameMr: 'ब्राह्मी',
    emoji: '🌱',
    color: '#5A8A6E',
    benefit: 'Strengthens Roots & Reduces Stress',
    benefitMr: 'मुळे मजबूत करते आणि तणाव कमी करते',
    description:
      'A revered Ayurvedic herb that nourishes hair roots, reduces stress-related hair fall, and promotes thick, lustrous hair. Known to calm an irritated scalp.',
    usedIn: ['hair-oil', 'conditioner', 'hair-mask'],
  },
  {
    id: 'bhringraj',
    name: 'Bhringraj',
    nameMr: 'भृंगराज',
    emoji: '🌸',
    color: '#7B6E8A',
    benefit: 'The King of Hair Growth Herbs',
    benefitMr: 'केस वाढीचा राजा',
    description:
      'Called the "King of Herbs" for hair, Bhringraj dramatically reduces hair fall, stimulates new growth, and prevents premature greying. A must-have in Ayurvedic hair care.',
    usedIn: ['hair-oil', 'shampoo', 'hair-mask'],
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus',
    nameMr: 'जास्वंद',
    emoji: '🌺',
    color: '#C9617A',
    benefit: 'Nourishes & Prevents Hair Loss',
    benefitMr: 'पोषण देते आणि केस गळणे प्रतिबंधित करते',
    description:
      'The vibrant hibiscus flower is packed with amino acids and vitamins that nourish hair follicles, prevent hair loss, and add a beautiful natural sheen to hair.',
    usedIn: ['hair-oil', 'conditioner'],
  },
  {
    id: 'curry-leaf',
    name: 'Curry Leaf',
    nameMr: 'कडीपत्ता',
    emoji: '🍃',
    color: '#3D7A4A',
    benefit: 'Reverses Premature Greying',
    benefitMr: 'अकाली पांढरे होणे उलटवते',
    description:
      'Rich in beta-carotene and proteins, curry leaves are a powerful remedy for premature greying. They strengthen hair shafts and restore natural pigmentation.',
    usedIn: ['hair-oil', 'toner'],
  },
  {
    id: 'neem',
    name: 'Neem',
    nameMr: 'कडुलिंब',
    emoji: '🌿',
    color: '#4A7A3A',
    benefit: 'Anti-Dandruff & Scalp Purifier',
    benefitMr: 'कोंडा विरोधी आणि टाळू शुद्ध करणारे',
    description:
      'A powerful antibacterial and antifungal herb, Neem effectively controls dandruff, soothes scalp irritation, and keeps the scalp clean and healthy.',
    usedIn: ['hair-oil', 'shampoo', 'toner', 'hair-mask'],
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    nameMr: 'कोरफड',
    emoji: '🌵',
    color: '#5A9A6A',
    benefit: 'Deep Moisture & Scalp Soother',
    benefitMr: 'खोल आर्द्रता आणि टाळू शांत करणारे',
    description:
      "Nature's best moisturizer, Aloe Vera deeply hydrates hair and scalp, reduces inflammation, controls dandruff, and promotes strong, healthy hair growth.",
    usedIn: ['hair-oil', 'shampoo', 'toner', 'conditioner', 'hair-mask', 'serum'],
  },
  {
    id: 'fenugreek',
    name: 'Fenugreek',
    nameMr: 'मेथी',
    emoji: '🟡',
    color: '#C9A84C',
    benefit: 'Protein-Rich Hair Fortifier',
    benefitMr: 'प्रोटीन-समृद्ध केस मजबूत करणारे',
    description:
      'Rich in protein, iron, and nicotinic acid, fenugreek seeds strengthen hair follicles, prevent hair fall, treat dandruff, and add natural volume to hair.',
    usedIn: ['hair-oil', 'conditioner', 'hair-mask'],
  },
  {
    id: 'flaxseed',
    name: 'Flaxseed',
    nameMr: 'जवस',
    emoji: '🌾',
    color: '#8B7355',
    benefit: 'Omega-3 Rich Shine Booster',
    benefitMr: 'ओमेगा-३ समृद्ध चमक वाढवणारे',
    description:
      'Packed with Omega-3 fatty acids and Vitamin E, flaxseed nourishes hair from within, adds brilliant shine, reduces frizz, and promotes smooth, healthy hair.',
    usedIn: ['hair-oil', 'conditioner', 'serum'],
  },
  {
    id: 'reetha',
    name: 'Reetha',
    nameMr: 'रिठा',
    emoji: '🫧',
    color: '#8B6E5A',
    benefit: 'Natural Foaming Cleanser',
    benefitMr: 'नैसर्गिक फेसदार क्लेन्झर',
    description:
      'Soapnut, the traditional Indian hair wash, creates a rich natural lather that gently cleanses hair without chemicals. Leaves hair naturally soft and shiny.',
    usedIn: ['shampoo'],
  },
  {
    id: 'rosemary',
    name: 'Rosemary',
    nameMr: 'रोजमेरी',
    emoji: '🌿',
    color: '#5A7A8A',
    benefit: 'Stimulates Growth & Adds Shine',
    benefitMr: 'वाढ उत्तेजित करते आणि चमक जोडते',
    description:
      'Clinical studies show Rosemary is as effective as Minoxidil for hair growth. It improves blood circulation to the scalp, stimulates follicles, and adds beautiful shine.',
    usedIn: ['hair-oil', 'toner', 'serum'],
  },
];
