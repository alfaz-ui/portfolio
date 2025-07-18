import React from 'react';
import { Helmet } from 'react-helmet';
import { personalInfo } from '../data/mockData';

const SEOHead = () => {
  const siteTitle = `${personalInfo.name} - ${personalInfo.title}`;
  const siteDescription = personalInfo.summary;
  const siteUrl = window.location.origin;
  const imageUrl = `${siteUrl}/og-image.jpg`; // You can add this image to public folder

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content="Frontend Developer, React Developer, JavaScript, TypeScript, Web Development, UI/UX, Portfolio" />
      <meta name="author" content={personalInfo.name} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${personalInfo.name} - Portfolio`} />
      <meta property="og:site_name" content={personalInfo.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:creator" content={`@${personalInfo.name.replace(' ', '')}`} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": personalInfo.name,
          "jobTitle": personalInfo.title,
          "description": personalInfo.summary,
          "url": siteUrl,
          "email": personalInfo.email,
          "telephone": personalInfo.phone,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "India"
          },
          "sameAs": [
            "https://github.com/alfazkhan",
            "https://linkedin.com/in/alfazkhan"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;