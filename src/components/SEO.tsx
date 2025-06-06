
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title = "Dr. M.K. Moosa Kunhi - Leading Cardiac Surgeon | Chennai, India",
  description = "World-renowned cardiac surgeon with 16,000+ successful surgeries. Pioneer of beating heart surgery in India. Expert in complex cardiac procedures for international patients from 50+ countries.",
  keywords = "cardiac surgeon Chennai, heart surgery India, beating heart surgery, congenital heart disease, valve replacement, bypass surgery, pediatric cardiac surgery, international patients, medical tourism India",
  image = "https://drmoosakunhi.com/og-image.jpg",
  url = "https://drmoosakunhi.com/",
  type = "website",
  schemaData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
