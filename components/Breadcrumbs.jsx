'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumbs = () => {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter((segment) => segment);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    
    // Beautify labels
    let label = decodeURIComponent(segment);
    label = label
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

    if (label.toLowerCase() === 'seo') label = 'SEO';
    if (label.toLowerCase() === 'smo') label = 'SMO';
    if (label.toLowerCase() === 'ui ux design') label = 'UI/UX Design';
    if (label.toLowerCase() === 'ppc') label = 'PPC';

    return { label, href };
  });

  const allBreadcrumbs = [{ label: 'Home', href: '/' }, ...breadcrumbs];

  // Generate JSON-LD Schema
  const schemaList = allBreadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.label,
    "item": `https://maajankiwebtech.com${crumb.href}`
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaList
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="breadcrumb" className="breadcrumb-nav py-2" style={{ background: '#042544', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          <ol className="breadcrumb mb-0" style={{ backgroundColor: 'transparent', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px', listStyle: 'none' }}>
            {allBreadcrumbs.map((crumb, index) => {
              const isLast = index === allBreadcrumbs.length - 1;
              return (
                <li
                  key={index}
                  className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                  aria-current={isLast ? 'page' : undefined}
                  style={{ display: 'inline-flex', alignItems: 'center', fontSize: '14px' }}
                >
                  {!isLast ? (
                    <>
                      <Link href={crumb.href} style={{ color: '#FD6A02', fontWeight: '600', textDecoration: 'none' }}>
                        {crumb.label}
                      </Link>
                      <span style={{ margin: '0 8px', color: 'rgba(255, 255, 255, 0.4)' }}>/</span>
                    </>
                  ) : (
                    <span style={{ color: '#94a3b8' }}>{crumb.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
