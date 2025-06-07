
export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readTime: string;
  publishDate: string;
  image: string;
  author: string;
  keywords: string[];
  metaDescription: string;
  featured: boolean;
}

export const blogArticles: BlogArticle[] = [
  // Procedure-focused articles
  {
    id: '1',
    title: 'Complete Guide to Coronary Artery Bypass Surgery (CABG)',
    slug: 'coronary-artery-bypass-surgery-complete-guide',
    excerpt: 'Everything you need to know about CABG surgery, from preparation to recovery.',
    content: `
      <h2>What is Coronary Artery Bypass Surgery?</h2>
      <p>Coronary Artery Bypass Graft (CABG) surgery is a procedure that improves blood flow to the heart by creating new routes around narrowed or blocked coronary arteries.</p>
      
      <h3>When is CABG Recommended?</h3>
      <ul>
        <li>Severe blockages in multiple coronary arteries</li>
        <li>Left main coronary artery disease</li>
        <li>Failed angioplasty or stenting</li>
        <li>Heart attack with ongoing chest pain</li>
      </ul>
      
      <h3>Types of CABG Surgery</h3>
      <h4>Traditional On-Pump CABG</h4>
      <p>The heart is stopped and a heart-lung machine maintains circulation during surgery.</p>
      
      <h4>Off-Pump CABG (Beating Heart Surgery)</h4>
      <p>Surgery is performed on a beating heart without using a heart-lung machine. This technique, pioneered by Dr. Moosa Kunhi in India, offers several advantages including reduced complications and faster recovery.</p>
      
      <h3>Preparation for Surgery</h3>
      <ul>
        <li>Complete medical evaluation</li>
        <li>Cardiac catheterization</li>
        <li>Blood tests and imaging</li>
        <li>Medication adjustments</li>
        <li>Lifestyle modifications</li>
      </ul>
      
      <h3>Recovery and Outcomes</h3>
      <p>Most patients experience significant improvement in symptoms and quality of life. Recovery typically takes 6-8 weeks for full activities.</p>
    `,
    category: 'Procedures',
    tags: ['CABG', 'Bypass Surgery', 'Heart Surgery', 'Coronary Artery Disease'],
    readTime: '12 min read',
    publishDate: '2024-01-15',
    image: '/lovable-uploads/blog-cabg.jpg',
    author: 'Dr. M.K. Moosa Kunhi',
    keywords: ['coronary artery bypass surgery', 'CABG surgery India', 'heart bypass surgery cost', 'beating heart surgery'],
    metaDescription: 'Complete guide to coronary artery bypass surgery (CABG) including types, preparation, recovery, and outcomes. Expert insights from Dr. Moosa Kunhi.',
    featured: true
  },
  {
    id: '2',
    title: 'Heart Valve Replacement: Mechanical vs Biological Valves',
    slug: 'heart-valve-replacement-mechanical-vs-biological',
    excerpt: 'Compare mechanical and biological heart valves to make an informed decision.',
    content: `
      <h2>Understanding Heart Valve Replacement</h2>
      <p>Heart valve replacement is necessary when valves become severely damaged or diseased, affecting the heart's ability to pump blood efficiently.</p>
      
      <h3>Types of Replacement Valves</h3>
      
      <h4>Mechanical Valves</h4>
      <ul>
        <li><strong>Durability:</strong> Last 20-30 years or more</li>
        <li><strong>Materials:</strong> Made from durable materials like titanium</li>
        <li><strong>Anticoagulation:</strong> Require lifelong blood thinners</li>
        <li><strong>Best for:</strong> Younger patients (under 65)</li>
      </ul>
      
      <h4>Biological Valves (Tissue Valves)</h4>
      <ul>
        <li><strong>Durability:</strong> Last 10-20 years</li>
        <li><strong>Materials:</strong> Made from pig, cow, or human tissue</li>
        <li><strong>Anticoagulation:</strong> Usually no long-term blood thinners needed</li>
        <li><strong>Best for:</strong> Older patients (over 65) or those who cannot take blood thinners</li>
      </ul>
      
      <h3>Minimally Invasive Valve Surgery</h3>
      <p>Dr. Moosa Kunhi specializes in minimally invasive valve replacement techniques that offer smaller incisions, less pain, and faster recovery.</p>
      
      <h3>Recovery and Follow-up</h3>
      <p>Regular follow-up with echocardiograms and medication management ensures optimal long-term outcomes.</p>
    `,
    category: 'Procedures',
    tags: ['Valve Replacement', 'Heart Valves', 'Cardiac Surgery'],
    readTime: '10 min read',
    publishDate: '2024-01-12',
    image: '/lovable-uploads/blog-valve.jpg',
    author: 'Dr. M.K. Moosa Kunhi',
    keywords: ['heart valve replacement', 'mechanical vs biological valves', 'valve surgery India', 'mitral valve replacement'],
    metaDescription: 'Complete comparison of mechanical vs biological heart valves for replacement surgery. Expert guidance from leading cardiac surgeon Dr. Moosa Kunhi.',
    featured: true
  },
  {
    id: '3',
    title: 'Pediatric Congenital Heart Surgery: Hope for Young Hearts',
    slug: 'pediatric-congenital-heart-surgery-guide',
    excerpt: 'Comprehensive guide to congenital heart defects and surgical treatments in children.',
    content: `
      <h2>Understanding Congenital Heart Defects</h2>
      <p>Congenital heart defects affect approximately 1 in 100 babies born worldwide. Early diagnosis and treatment are crucial for optimal outcomes.</p>
      
      <h3>Common Congenital Heart Defects</h3>
      
      <h4>Septal Defects</h4>
      <ul>
        <li><strong>Atrial Septal Defect (ASD):</strong> Hole between upper chambers</li>
        <li><strong>Ventricular Septal Defect (VSD):</strong> Hole between lower chambers</li>
        <li><strong>Patent Ductus Arteriosus (PDA):</strong> Failure of fetal blood vessel to close</li>
      </ul>
      
      <h4>Complex Defects</h4>
      <ul>
        <li><strong>Tetralogy of Fallot:</strong> Four heart defects occurring together</li>
        <li><strong>Hypoplastic Left Heart Syndrome:</strong> Underdeveloped left side of heart</li>
        <li><strong>Transposition of Great Arteries:</strong> Major vessels are switched</li>
      </ul>
      
      <h3>Surgical Approaches</h3>
      
      <h4>Open Heart Surgery</h4>
      <p>Complex defects often require open heart surgery with cardiopulmonary bypass.</p>
      
      <h4>Minimally Invasive Techniques</h4>
      <p>Some defects can be repaired through catheter-based procedures or smaller incisions.</p>
      
      <h3>Outcomes and Long-term Care</h3>
      <p>Most children with congenital heart defects can lead normal, active lives after successful surgery. Regular cardiology follow-up is essential.</p>
      
      <h3>Dr. Moosa Kunhi's Expertise</h3>
      <p>With extensive experience in pediatric cardiac surgery, Dr. Moosa Kunhi has successfully treated children from around the world, offering hope to families facing these challenging diagnoses.</p>
    `,
    category: 'Pediatric',
    tags: ['Congenital Heart Disease', 'Pediatric Surgery', 'Children Heart Surgery'],
    readTime: '15 min read',
    publishDate: '2024-01-10',
    image: '/lovable-uploads/blog-pediatric.jpg',
    author: 'Dr. M.K. Moosa Kunhi',
    keywords: ['pediatric heart surgery', 'congenital heart defects', 'children heart surgery India', 'ASD VSD repair'],
    metaDescription: 'Comprehensive guide to pediatric congenital heart surgery, defects, and treatments. Expert care from Dr. Moosa Kunhi for children worldwide.',
    featured: true
  }
  // Add 47 more articles here for a total of 50+
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): BlogArticle[] => {
  return blogArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticles.filter(article => article.featured);
};
