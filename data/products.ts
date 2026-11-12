export interface Product {
  id: string;
  slug: string;
  name: string;
  nameMr: string;
  tagline: string;
  taglineMr: string;
  description: string;
  descriptionMr: string;
  available: boolean;
  size: string;
  image: string;
  benefits: string[];
  benefitsMr: string[];
  ingredients: string[];
  howToUse: string[];
  howToUseMr: string[];
  whatsappMessage: string;
}

export const products: Product[] = [
  {
    id: 'hair-oil',
    slug: 'hair-oil',
    name: 'Arohi Herbal Hair Oil',
    nameMr: 'आरोही हर्बल हेअर ऑइल',
    tagline: "Nature's Nourishment for Your Hair",
    taglineMr: 'केसांच्या निगेसाठी निसर्गाचे वरदान',
    description:
      'A deeply nourishing herbal hair oil crafted from traditional Indian botanicals. Enriched with Amla, Bhringraj, Brahmi, and 7 more powerful herbs, this oil strengthens hair roots, reduces hair fall, and brings natural shine to every strand.',
    descriptionMr:
      'पारंपरिक भारतीय वनौषधींपासून तयार केलेले हे हर्बल हेअर ऑइल केसांच्या मुळांना पोषण देते. आवळा, भृंगराज, ब्राह्मी यांसह अनेक घटकांनी समृद्ध हे तेल केस गळणे कमी करते आणि केसांना नैसर्गिक चमक आणते.',
    available: true,
    size: '100 ml',
    image: '/images/products/hair-oil.jpg',
    benefits: [
      'Reduces hair fall & strengthens roots',
      'Promotes healthy hair growth',
      'Prevents premature greying',
      'Deeply nourishes scalp',
      'Adds natural shine & softness',
      'Calms frizz and dryness',
    ],
    benefitsMr: [
      'केस गळणे कमी करते व मुळे मजबूत करते',
      'निरोगी केसांच्या वाढीस प्रोत्साहन देते',
      'अकाली केस पांढरे होणे प्रतिबंधित करते',
      'टाळूला खोल पोषण देते',
      'नैसर्गिक चमक आणि मऊपणा आणते',
      'कोरडेपणा आणि राठपणा कमी करते',
    ],
    ingredients: [
      'Amla (आवळा)',
      'Bhringraj (भृंगराज)',
      'Brahmi (ब्राह्मी)',
      'Hibiscus (जास्वंद)',
      'Curry Leaf (कडीपत्ता)',
      'Neem (कडुलिंब)',
      'Aloe Vera (कोरफड)',
      'Fenugreek (मेथी)',
      'Flaxseed (जवस)',
      'Rosemary (रोजमेरी)',
    ],
    howToUse: [
      'Use the hair oil twice a week.',
      'Apply oil to hair roots and full hair length before sleeping at night.',
      'Massage gently with your fingertips.',
      'Leave the oil in your hair overnight.',
      'Wash hair cleanly with Arohi Herbal Shampoo in the morning.',
      'Never heat the oil — apply directly.',
    ],
    howToUseMr: [
      'आठवड्यातून दोन वेळा तेलाचा वापर करावा.',
      'रात्री झोपण्यापूर्वी केसांच्या मुळांशी आणि संपूर्ण केसांना तेल लावावे.',
      'बोटांच्या टोकांनी हलक्या हाताने मसाज करावा.',
      'रात्रभर तेल केसांमध्ये राहू द्यावे.',
      'सकाळी केस शॅम्पूने स्वच्छ धुवावेत.',
      'तेल कधीही गरम करू नये. थेट वापरावे.',
    ],
    whatsappMessage:
      'नमस्कार! मला Arohi Herbal Hair Oil (100 ml) बद्दल माहिती हवी आहे. कृपया किंमत आणि उपलब्धता सांगा. 🌿',
  },
  {
    id: 'shampoo',
    slug: 'shampoo',
    name: 'Arohi Herbal Shampoo',
    nameMr: 'आरोही हर्बल शॅम्पू',
    tagline: 'Cleanse, Nourish & Revive',
    taglineMr: 'स्वच्छ, पोषण आणि पुनरुज्जीवन',
    description:
      'A gentle herbal shampoo that cleanses the scalp thoroughly while preserving its natural moisture. Infused with Shikakai, Reetha, and Amla – the classic trio of Ayurvedic hair cleansing – for soft, shiny, manageable hair.',
    descriptionMr:
      'शिकाकाई, रिठा आणि आवळा या आयुर्वेदिक त्रिकुटाने समृद्ध हा हर्बल शॅम्पू टाळू स्वच्छ ठेवतो आणि केसांची नैसर्गिक आर्द्रता टिकवतो. केस मऊ, चमकदार आणि सुव्यवस्थित ठेवतो.',
    available: true,
    size: '200 ml',
    image: '/images/products/shampoo.jpg',
    benefits: [
      'Gently cleanses scalp without stripping moisture',
      'Controls dandruff naturally',
      'Leaves hair soft and shiny',
      'Strengthens hair shaft',
      'Reduces scalp itchiness',
      'Safe for regular use',
    ],
    benefitsMr: [
      'आर्द्रता न काढता टाळू हळुवारपणे स्वच्छ करते',
      'नैसर्गिकरित्या कोंडा नियंत्रित करते',
      'केस मऊ आणि चमकदार बनवते',
      'केसांचे दांडे मजबूत करते',
      'टाळूची खाज कमी करते',
      'नियमित वापरासाठी सुरक्षित',
    ],
    ingredients: [
      'Shikakai (शिकाकाई)',
      'Reetha (रिठा)',
      'Amla (आवळा)',
      'Aloe Vera (कोरफड)',
      'Neem (कडुलिंब)',
      'Bhringraj (भृंगराज)',
    ],
    howToUse: [
      'Use shampoo while washing your hair in the morning.',
      'Take the required amount of shampoo in a bowl.',
      'Add a little water to it and mix well.',
      'Apply this mixture to the roots of wet hair.',
      'Massage gently and rinse thoroughly with clean water.',
    ],
    howToUseMr: [
      'सकाळी केस धुताना शॅम्पूचा वापर करावा.',
      'आवश्यक तेवढा शॅम्पू एका वाटीत घ्यावा.',
      'त्यामध्ये थोडे पाणी मिसळून व्यवस्थित एकत्र करावे.',
      'हे मिश्रण ओल्या केसांच्या मुळांशी लावावे.',
      'हलक्या हाताने मसाज करून स्वच्छ पाण्याने केस धुवावेत.',
    ],
    whatsappMessage:
      'नमस्कार! मला Arohi Herbal Shampoo (100 ml) बद्दल माहिती हवी आहे. कृपया किंमत आणि उपलब्धता सांगा. 🌿',
  },
  {
    id: 'toner',
    slug: 'toner',
    name: 'Arohi Hair Toner',
    nameMr: 'आरोही हेअर टोनर',
    tagline: 'Refresh, Balance & Revitalize',
    taglineMr: 'ताजेपणा, संतुलन आणि पुनरुज्जीवन',
    description:
      'A lightweight herbal hair toner spray that balances scalp pH, controls excess oil, and refreshes hair between washes. Formulated with Rosemary, Aloe Vera, and botanical extracts to keep your scalp healthy and your hair looking fresh all day.',
    descriptionMr:
      'रोजमेरी, कोरफड आणि वनस्पती अर्कांनी तयार केलेला हा हलका हर्बल हेअर टोनर स्प्रे टाळूचा pH संतुलित करतो आणि केसांना दिवसभर ताजे ठेवतो.',
    available: true,
    size: '100 ml',
    image: '/images/products/toner.jpg',
    benefits: [
      'Balances scalp pH naturally',
      'Controls excess oil production',
      'Refreshes hair between washes',
      'Reduces scalp irritation',
      'Lightweight & non-greasy formula',
      'Adds volume to hair',
    ],
    benefitsMr: [
      'टाळूचा pH नैसर्गिकरित्या संतुलित करते',
      'अतिरिक्त तेल नियंत्रित करते',
      'धुण्याच्या दरम्यान केसांना ताजे ठेवते',
      'टाळूची जळजळ कमी करते',
      'हलकी आणि चिकट नसलेली फॉर्म्युला',
      'केसांना व्हॉल्यूम देते',
    ],
    ingredients: [
      'Rosemary (रोजमेरी)',
      'Aloe Vera (कोरफड)',
      'Amla (आवळा)',
      'Neem (कडुलिंब)',
      'Curry Leaf (कडीपत्ता)',
    ],
    howToUse: [
      'Shake the bottle well before use',
      'Part hair into sections',
      'Spray evenly on scalp from 10–15 cm distance',
      'Massage lightly with fingertips',
      'Leave in – no rinsing required',
      'Use daily or as needed',
    ],
    howToUseMr: [
      'वापरण्यापूर्वी बाटली चांगली हलवा',
      'केसांचे विभाग करा',
      '१०-१५ से.मी. अंतरावरून टाळूवर समान प्रमाणात फवारा',
      'बोटांच्या टोकांनी हलके मालिश करा',
      'धुण्याची गरज नाही – तसेच ठेवा',
      'दररोज किंवा आवश्यकतेनुसार वापरा',
    ],
    whatsappMessage:
      'नमस्कार! मला Arohi Hair Toner (100 ml) बद्दल माहिती हवी आहे. कृपया किंमत आणि उपलब्धता सांगा. 🌿',
  },
  {
    id: 'conditioner',
    slug: 'conditioner',
    name: 'Arohi Hair Conditioner',
    nameMr: 'आरोही हेअर कंडिशनर',
    tagline: 'Deep Moisture for Silky Smooth Hair',
    taglineMr: 'रेशमी मऊ केसांसाठी खोल आर्द्रता',
    description:
      'A rich, creamy herbal conditioner that deeply moisturizes and detangles hair, leaving it silky smooth and manageable. Enriched with Aloe Vera, Fenugreek, and Brahmi to restore moisture balance and reduce breakage.',
    descriptionMr:
      'कोरफड, मेथी आणि ब्राह्मीने युक्त हा समृद्ध हर्बल कंडिशनर केसांना खोलवर ओलावा देतो आणि त्यांना रेशमी मऊ बनवतो.',
    available: true,
    size: '200 ml',
    image: '/images/products/conditioner.jpg',
    benefits: [
      'Deeply moisturizes and softens hair',
      'Detangles knots effortlessly',
      'Reduces breakage and split ends',
      'Restores moisture balance',
      'Makes hair smooth and manageable',
      'Adds natural shine',
    ],
    benefitsMr: [
      'केसांना खोलवर आर्द्रता देते आणि मऊ करते',
      'गुंते सहज सोडवते',
      'तुटणे आणि टोक फुटणे कमी करते',
      'आर्द्रता संतुलन पुनर्संचयित करते',
      'केस मुलायम आणि सुव्यवस्थित करते',
      'नैसर्गिक चमक जोडते',
    ],
    ingredients: [
      'Aloe Vera (कोरफड)',
      'Fenugreek (मेथी)',
      'Brahmi (ब्राह्मी)',
      'Flaxseed (जवस)',
      'Hibiscus (जास्वंद)',
    ],
    howToUse: [
      'After shampooing, squeeze excess water from hair',
      'Apply conditioner from mid-length to tips',
      'Avoid applying directly to scalp',
      'Leave for 2–3 minutes',
      'Rinse thoroughly with cool water',
      'Use after every shampoo session',
    ],
    howToUseMr: [
      'शॅम्पू केल्यानंतर केसांमधील अतिरिक्त पाणी पिळा',
      'केसांच्या मध्यभागापासून टोकापर्यंत कंडिशनर लावा',
      'थेट टाळूवर लावणे टाळा',
      '२-३ मिनिटे ठेवा',
      'थंड पाण्याने नीट धुवा',
      'प्रत्येक शॅम्पूनंतर वापरा',
    ],
    whatsappMessage:
      'नमस्कार! मला Arohi Hair Conditioner (100 ml) बद्दल माहिती हवी आहे. कृपया किंमत आणि उपलब्धता सांगा. 🌿',
  },
  {
    id: 'hair-mask',
    slug: 'hair-mask',
    name: 'Arohi Herbal Hair Mask',
    nameMr: 'आरोही हर्बल हेअर मास्क (मेहंदी)',
    tagline: 'Intensive Repair & Deep Conditioning',
    taglineMr: 'तीव्र दुरुस्ती आणि खोल कंडिशनिंग',
    description:
      'An intensive herbal hair mask treatment that deeply repairs damaged hair, restores vitality, and provides salon-like conditioning at home. Made from a potent blend of Amla, Shikakai, Bhringraj, and other Ayurvedic herbs.',
    descriptionMr:
      'आवळा, शिकाकाई, भृंगराज आणि इतर आयुर्वेदिक घटकांच्या शक्तिशाली मिश्रणाने तयार केलेला हा हेअर मास्क खराब केसांची तीव्र दुरुस्ती करतो आणि घरीच सलोन सारखी काळजी देतो.',
    available: true,
    size: '100 g',
    image: '/images/products/hair-mask.jpg',
    benefits: [
      'Intensively repairs damaged & brittle hair',
      'Deep conditions and restores vitality',
      'Controls frizz and flyaways',
      'Promotes strong, healthy hair growth',
      'Provides salon-like treatment at home',
      'Natural & chemical-free formula',
    ],
    benefitsMr: [
      'खराब आणि ठिसूळ केसांची तीव्र दुरुस्ती',
      'खोल कंडिशनिंग आणि जीवनशक्ती पुनर्संचयित करते',
      'फ्रिज आणि केस विस्कटणे नियंत्रित करते',
      'मजबूत, निरोगी केसांच्या वाढीस प्रोत्साहन देते',
      'घरीच सलोन सारखी ट्रीटमेंट',
      'नैसर्गिक आणि केमिकल-मुक्त फॉर्म्युला',
    ],
    ingredients: [
      'Amla (आवळा)',
      'Shikakai (शिकाकाई)',
      'Bhringraj (भृंगराज)',
      'Fenugreek (मेथी)',
      'Aloe Vera (कोरफड)',
      'Brahmi (ब्राह्मी)',
      'Neem (कडुलिंब)',
    ],
    howToUse: [
      'Use the herbal hair mask once a month.',
      'Take the required amount of mask in a clean bowl.',
      'Add herbal water as needed to prepare a smooth, cream-like paste.',
      'Apply this paste evenly from hair roots to the full length.',
      'Leave on for the recommended duration and rinse thoroughly with clean water.',
      'Perform a patch test before use.',
    ],
    howToUseMr: [
      'महिन्यातून एकदा हेअर मास्कचा वापर करावा.',
      'आवश्यक तेवढा मास्क एका स्वच्छ वाटीत घ्यावा.',
      'आवश्यकतेनुसार हर्बल पाणी घालून क्रीमसारखी पेस्ट तयार करावी.',
      'ही पेस्ट केसांच्या मुळांपासून संपूर्ण केसांना व्यवस्थित लावावी.',
      'उत्पादनाच्या सूचनेनुसार ठरावीक वेळ ठेवून स्वच्छ पाण्याने केस धुवावेत.',
      'वापरण्यापूर्वी पॅच टेस्ट करावी.',
    ],
    whatsappMessage:
      'नमस्कार! मला Arohi Herbal Hair Mask (100 g) बद्दल माहिती हवी आहे. कृपया किंमत आणि उपलब्धता सांगा. 🌿',
  },
  {
    id: 'serum',
    slug: 'serum',
    name: 'Arohi Hair Serum',
    nameMr: 'आरोही हेअर सिरम',
    tagline: 'Shine, Smooth & Style',
    taglineMr: 'चमक, मुलायमपणा आणि स्टाइल',
    description:
      'A luxurious lightweight hair serum that tames frizz, adds brilliant shine, and protects hair from heat and environmental damage. Infused with Rosemary, Flaxseed, and Aloe Vera extracts for a beautiful, glossy finish.',
    descriptionMr:
      'रोजमेरी, जवस आणि कोरफडीच्या अर्कांनी युक्त हा लक्झरी हेअर सिरम केसांचा फ्रिज नियंत्रित करतो, चमक जोडतो आणि उष्णतेपासून संरक्षण करतो.',
    available: true,
    size: '30 ml',
    image: '/images/products/serum.jpg',
    benefits: [
      'Tames frizz instantly',
      'Adds brilliant, long-lasting shine',
      'Protects from heat damage',
      'Lightweight, non-greasy formula',
      'Makes styling effortless',
      'Keeps hair smooth all day',
    ],
    benefitsMr: [
      'फ्रिज त्वरित नियंत्रित करते',
      'दीर्घकाळ टिकणारी चमक जोडते',
      'उष्णतेच्या नुकसानापासून संरक्षण करते',
      'हलकी, चिकट नसलेली फॉर्म्युला',
      'स्टायलिंग सहज करते',
      'दिवसभर केस मुलायम ठेवते',
    ],
    ingredients: [
      'Rosemary (रोजमेरी)',
      'Flaxseed (जवस)',
      'Aloe Vera (कोरफड)',
      'Amla (आवळा)',
    ],
    howToUse: [
      'Take 2–3 drops on palm',
      'Rub palms together to warm the serum',
      'Apply evenly on damp or dry hair',
      'Focus on mid-lengths and tips',
      'Avoid applying to scalp',
      'Style as desired – no rinsing required',
    ],
    howToUseMr: [
      'तळहातावर २-३ थेंब घ्या',
      'सिरम उबदार करण्यासाठी दोन्ही तळहात एकमेकांवर घासा',
      'ओल्या किंवा कोरड्या केसांवर समान प्रमाणात लावा',
      'केसांच्या मध्यभाग आणि टोकावर लक्ष केंद्रित करा',
      'टाळूवर लावणे टाळा',
      'हवे तसे स्टाइल करा – धुण्याची गरज नाही',
    ],
    whatsappMessage:
      'नमस्कार! मला Arohi Hair Serum (30 ml) बद्दल माहिती हवी आहे. कृपया किंमत आणि उपलब्धता सांगा. 🌿',
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);
