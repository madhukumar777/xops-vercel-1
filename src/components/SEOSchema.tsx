import { useEffect } from 'react';

export default function SEOSchema() {
  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Xops360",
      "alternateName": "XOPS 360",
      "url": "https://xops360.com",
      "logo": "https://xops360.com/Logo_Colored_v1.png",
      "description": "AI-powered cloud optimization platform that helps enterprises slash cloud spending, close security gaps, and maintain compliance with continuous monitoring and intelligent automation.",
      "foundingDate": "2020",
      "sameAs": [
        "https://www.linkedin.com/company/axiomio",
        "https://twitter.com/xops360"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "url": "https://calendly.com/kishan-k/",
        "availableLanguage": ["English"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cloud Optimization Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Cost Optimization",
              "description": "AI-driven cloud cost optimization with 22% average cost reduction"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Security Posture Management",
              "description": "Continuous security monitoring and compliance management"
            }
          }
        ]
      }
    };

    const softwareApplicationSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Xops360",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, AWS, Azure",
      "description": "AI-powered cloud optimization platform for cost reduction, security management, and compliance automation across AWS and Azure environments.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Free trial available"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "3",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Cloud Cost Optimization Agent",
        "Real-Time Cost Intelligence",
        "Continuous Cloud Security Posture Management (CSPM)",
        "Image & Container Vulnerability Scanning",
        "Cloud WAR AI Module",
        "Agentic Security - NLP Vulnerability Detection",
        "Unified Asset & Idle Resource Management"
      ],
      "screenshot": "https://xops360.com/Logo_Colored_v1.png"
    };

    const reviewSchemas = [
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Xops360"
        },
        "author": {
          "@type": "Person",
          "name": "Samba"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Xops360's AI-driven cost optimization helped us reduce our AWS spending by 42% in just three months. Their platform identified idle resources and provided actionable insights that our team could implement immediately.",
        "publisher": {
          "@type": "Organization",
          "name": "Cryptoforce"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Xops360"
        },
        "author": {
          "@type": "Person",
          "name": "Kishore"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The continuous security posture management from Xops360 transformed our compliance journey. We achieved SOC 2 certification 6 months ahead of schedule, with clear remediation guidance every step of the way.",
        "publisher": {
          "@type": "Organization",
          "name": "AWONE"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Xops360"
        },
        "author": {
          "@type": "Person",
          "name": "Ganesh"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Managing multi-cloud environments was a nightmare until we found Xops360. Their unified dashboard gives us complete visibility across AWS and Azure, helping us optimize costs and maintain security standards effortlessly.",
        "publisher": {
          "@type": "Organization",
          "name": "CricClubs"
        }
      }
    ];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Xops360?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Xops360 is an AI-powered cloud optimization platform that helps enterprises reduce cloud spending by an average of 22%, close security gaps, and maintain compliance through continuous monitoring and intelligent automation across AWS and Azure environments."
          }
        },
        {
          "@type": "Question",
          "name": "How much can I save with Xops360?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Organizations using Xops360 achieve an average of 22% cost reduction in their cloud spending. Some customers have reported savings as high as 42% within the first three months by identifying idle resources and implementing AI-driven optimization recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "What cloud platforms does Xops360 support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Xops360 supports both Amazon Web Services (AWS) and Microsoft Azure. The platform provides unified visibility and management across both cloud environments, available through AWS Marketplace and Microsoft Azure Marketplace."
          }
        },
        {
          "@type": "Question",
          "name": "Does Xops360 help with compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Xops360 includes Continuous Cloud Security Posture Management (CSPM) that continuously scans your infrastructure against leading security frameworks like SOC 2, providing risk-ranked findings with clear remediation guidance to maintain your compliance posture."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a free trial available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Xops360 offers a free trial. You can start your trial directly from our website or schedule a consultation with our cloud experts to discuss your specific requirements."
          }
        }
      ]
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://xops360.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Features",
          "item": "https://xops360.com#features"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contact",
          "item": "https://xops360.com#contact"
        }
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Xops360",
      "url": "https://xops360.com",
      "description": "AI-powered cloud optimization platform for cost reduction, security, and compliance",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://xops360.com?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };

    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Xops360 Cloud Optimization Platform",
      "description": "AI-powered platform that reduces cloud costs by 22% average, provides continuous security monitoring, and ensures compliance across AWS and Azure environments.",
      "brand": {
        "@type": "Brand",
        "name": "Xops360"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "3",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "lowPrice": "0",
        "offerCount": "2",
        "url": "https://xops.axiomio.com/"
      },
      "category": "Cloud Management Software"
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Cloud Optimization and Security Management",
      "provider": {
        "@type": "Organization",
        "name": "Xops360"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cloud Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Cost Optimization",
              "description": "AI-powered cost reduction achieving 22% average savings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Security Posture Management",
              "description": "Continuous security monitoring and compliance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Container Security Scanning",
              "description": "Automated vulnerability scanning for containers and images"
            }
          }
        ]
      }
    };

    const schemas = [
      organizationSchema,
      softwareApplicationSchema,
      ...reviewSchemas,
      faqSchema,
      breadcrumbSchema,
      websiteSchema,
      productSchema,
      serviceSchema
    ];

    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `schema-${index}`;
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null;
}
