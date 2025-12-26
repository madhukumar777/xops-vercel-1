import { useEffect } from 'react';

export default function SEOSchema() {
  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://xops360.com/#organization",
      "name": "Xops360",
      "alternateName": ["XOPS 360", "Xops 360", "XOPS360"],
      "legalName": "Xops360 Inc.",
      "url": "https://xops360.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xops360.com/Logo_Colored_v1.png",
        "width": "512",
        "height": "512",
        "caption": "Xops360 Logo"
      },
      "image": "https://xops360.com/Logo_Colored_v1.png",
      "description": "AI-powered cloud optimization platform that helps enterprises slash cloud spending, close security gaps, and maintain compliance with continuous monitoring and intelligent automation.",
      "foundingDate": "2020",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 10,
        "maxValue": 50
      },
      "slogan": "Slash Cloud Costs. Close Security Gaps.",
      "knowsAbout": ["Cloud Computing", "AWS", "Azure", "Cloud Security", "FinOps", "CSPM", "Cost Optimization"],
      "sameAs": [
        "https://www.linkedin.com/company/axiomio",
        "https://twitter.com/xops360"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "url": "https://calendly.com/kishan-k/",
          "availableLanguage": ["English"],
          "areaServed": "Worldwide"
        },
        {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "url": "https://xops360.com/#contact",
          "availableLanguage": ["English"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
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
      "@id": "https://xops360.com/#software",
      "name": "Xops360",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Cloud Management Platform",
      "operatingSystem": "Web-based, AWS, Microsoft Azure, Multi-Cloud",
      "description": "AI-powered cloud optimization platform for cost reduction, security management, and compliance automation across AWS and Azure environments.",
      "url": "https://xops360.com",
      "installUrl": "https://xops.axiomio.com/",
      "softwareVersion": "2.0",
      "datePublished": "2020-01-01",
      "dateModified": "2024-12-01",
      "releaseNotes": "Enhanced AI-driven cost optimization and security features",
      "inLanguage": "en",
      "isAccessibleForFree": true,
      "image": {
        "@type": "ImageObject",
        "url": "https://xops360.com/Logo_Colored_v1.png",
        "width": "512",
        "height": "512"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://xops.axiomio.com/",
        "priceValidUntil": "2025-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "0",
          "priceCurrency": "USD",
          "unitText": "Free Trial"
        },
        "description": "Free trial available with flexible pricing plans",
        "seller": {
          "@type": "Organization",
          "name": "Xops360",
          "@id": "https://xops360.com/#organization"
        },
        "validFrom": "2020-01-01"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "3",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "3",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Xops360"
        }
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
      "permissions": "Read-only access to cloud resources",
      "requirements": "AWS or Azure cloud account",
      "screenshot": {
        "@type": "ImageObject",
        "url": "https://xops360.com/Logo_Colored_v1.png",
        "caption": "Xops360 Dashboard"
      },
      "author": {
        "@type": "Organization",
        "name": "Xops360",
        "@id": "https://xops360.com/#organization"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Xops360",
        "@id": "https://xops360.com/#organization"
      },
      "provider": {
        "@type": "Organization",
        "name": "Xops360",
        "url": "https://xops360.com",
        "@id": "https://xops360.com/#organization"
      },
      "maintainer": {
        "@type": "Organization",
        "name": "Xops360",
        "@id": "https://xops360.com/#organization"
      }
    };

    const reviewSchemas = [
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Xops360",
          "@id": "https://xops360.com/#software"
        },
        "author": {
          "@type": "Person",
          "name": "Samba",
          "jobTitle": "CTO"
        },
        "datePublished": "2024-03-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "name": "Outstanding cloud cost savings",
        "reviewBody": "Xops360's AI-driven cost optimization helped us reduce our AWS spending by 42% in just three months. Their platform identified idle resources and provided actionable insights that our team could implement immediately.",
        "publisher": {
          "@type": "Organization",
          "name": "Cryptoforce"
        },
        "inLanguage": "en"
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Xops360",
          "@id": "https://xops360.com/#software"
        },
        "author": {
          "@type": "Person",
          "name": "Kishore",
          "jobTitle": "VP of Engineering"
        },
        "datePublished": "2024-05-22",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "name": "Accelerated our SOC 2 compliance",
        "reviewBody": "The continuous security posture management from Xops360 transformed our compliance journey. We achieved SOC 2 certification 6 months ahead of schedule, with clear remediation guidance every step of the way.",
        "publisher": {
          "@type": "Organization",
          "name": "AWONE"
        },
        "inLanguage": "en"
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "Xops360",
          "@id": "https://xops360.com/#software"
        },
        "author": {
          "@type": "Person",
          "name": "Ganesh",
          "jobTitle": "DevOps Lead"
        },
        "datePublished": "2024-08-10",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "name": "Perfect multi-cloud management solution",
        "reviewBody": "Managing multi-cloud environments was a nightmare until we found Xops360. Their unified dashboard gives us complete visibility across AWS and Azure, helping us optimize costs and maintain security standards effortlessly.",
        "publisher": {
          "@type": "Organization",
          "name": "CricClubs"
        },
        "inLanguage": "en"
      }
    ];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://xops360.com/#faq",
      "name": "Xops360 Frequently Asked Questions",
      "description": "Common questions about Xops360 cloud optimization platform",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Xops360?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Xops360 is an AI-powered cloud optimization platform that helps enterprises reduce cloud spending by an average of 22%, close security gaps, and maintain compliance through continuous monitoring and intelligent automation across AWS and Azure environments.",
            "dateCreated": "2024-01-01"
          }
        },
        {
          "@type": "Question",
          "name": "How much can I save with Xops360?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Organizations using Xops360 achieve an average of 22% cost reduction in their cloud spending. Some customers have reported savings as high as 42% within the first three months by identifying idle resources and implementing AI-driven optimization recommendations.",
            "dateCreated": "2024-01-01"
          }
        },
        {
          "@type": "Question",
          "name": "What cloud platforms does Xops360 support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Xops360 supports both Amazon Web Services (AWS) and Microsoft Azure. The platform provides unified visibility and management across both cloud environments, available through AWS Marketplace and Microsoft Azure Marketplace.",
            "dateCreated": "2024-01-01"
          }
        },
        {
          "@type": "Question",
          "name": "Does Xops360 help with compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Xops360 includes Continuous Cloud Security Posture Management (CSPM) that continuously scans your infrastructure against leading security frameworks like SOC 2, providing risk-ranked findings with clear remediation guidance to maintain your compliance posture.",
            "dateCreated": "2024-01-01"
          }
        },
        {
          "@type": "Question",
          "name": "Is there a free trial available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Xops360 offers a free trial. You can start your trial directly from our website or schedule a consultation with our cloud experts to discuss your specific requirements.",
            "dateCreated": "2024-01-01"
          }
        }
      ]
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://xops360.com/#breadcrumb",
      "name": "Xops360 Navigation",
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
          "name": "Platform",
          "item": "https://xops360.com/#platform"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Features",
          "item": "https://xops360.com/#features"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Case Studies",
          "item": "https://xops360.com/#case-studies"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://xops360.com/#contact"
        }
      ]
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://xops360.com/#website",
      "name": "Xops360",
      "alternateName": "XOPS 360",
      "url": "https://xops360.com",
      "description": "AI-powered cloud optimization platform for cost reduction, security, and compliance",
      "inLanguage": "en-US",
      "publisher": {
        "@type": "Organization",
        "@id": "https://xops360.com/#organization"
      },
      "copyrightHolder": {
        "@type": "Organization",
        "@id": "https://xops360.com/#organization"
      },
      "copyrightYear": "2020",
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
      "@id": "https://xops360.com/#product",
      "name": "Xops360 Cloud Optimization Platform",
      "description": "AI-powered platform that reduces cloud costs by 22% average, provides continuous security monitoring, and ensures compliance across AWS and Azure environments.",
      "url": "https://xops360.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://xops360.com/Logo_Colored_v1.png",
        "width": "512",
        "height": "512"
      },
      "brand": {
        "@type": "Brand",
        "name": "Xops360",
        "logo": "https://xops360.com/Logo_Colored_v1.png"
      },
      "manufacturer": {
        "@type": "Organization",
        "@id": "https://xops360.com/#organization"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "3",
        "ratingCount": "3",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {"@type": "Person", "name": "Samba"},
          "datePublished": "2024-03-15",
          "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1"},
          "reviewBody": "Xops360's AI-driven cost optimization helped us reduce our AWS spending by 42% in just three months."
        },
        {
          "@type": "Review",
          "author": {"@type": "Person", "name": "Kishore"},
          "datePublished": "2024-05-22",
          "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1"},
          "reviewBody": "The continuous security posture management from Xops360 transformed our compliance journey."
        },
        {
          "@type": "Review",
          "author": {"@type": "Person", "name": "Ganesh"},
          "datePublished": "2024-08-10",
          "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1"},
          "reviewBody": "Managing multi-cloud environments was a nightmare until we found Xops360."
        }
      ],
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "lowPrice": "0",
        "highPrice": "0",
        "offerCount": "2",
        "url": "https://xops.axiomio.com/",
        "priceValidUntil": "2025-12-31",
        "seller": {
          "@type": "Organization",
          "@id": "https://xops360.com/#organization"
        }
      },
      "category": "Cloud Management Software",
      "sku": "XOPS360-PLATFORM",
      "mpn": "XOPS360-2024"
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://xops360.com/#service",
      "name": "Xops360 Cloud Optimization Services",
      "description": "Enterprise-grade cloud optimization and security management services powered by AI",
      "url": "https://xops360.com",
      "serviceType": "Cloud Optimization and Security Management",
      "category": "Cloud Computing Services",
      "provider": {
        "@type": "Organization",
        "name": "Xops360",
        "@id": "https://xops360.com/#organization"
      },
      "brand": {
        "@type": "Brand",
        "name": "Xops360"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Enterprise IT Teams, DevOps, FinOps"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://xops.axiomio.com/",
        "serviceType": "Web Application"
      },
      "termsOfService": "https://xops360.com/terms",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "3",
        "ratingCount": "3",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "Free trial available"
      },
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
