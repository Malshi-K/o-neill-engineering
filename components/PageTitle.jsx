"use client";
import React from 'react';
import Link from 'next/link';

const PageTitle = ({ title, currentPath }) => {
  // Generate breadcrumb items from the current path
  const generateBreadcrumbs = () => {
    const paths = currentPath.split('/').filter(item => item);
    return paths.map((path, index) => {
      const formattedPath = path.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return {
        label: formattedPath,
        url: '/' + paths.slice(0, index + 1).join('/'),
        isLast: index === paths.length - 1
      };
    });
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="w-full bg-orange-500 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          {title}
          <div className="w-16 h-1 bg-black mx-auto mt-2"></div>
        </h1>
        
        <div className="flex justify-center items-center gap-2 text-lg">
          <Link href="/" className="hover:text-gray-700 transition-colors">
            Home
          </Link>
          
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.url}>
              <span className="text-gray-600">/</span>
              {crumb.isLast ? (
                <span className="text-gray-600">{crumb.label}</span>
              ) : (
                <Link 
                  href={crumb.url}
                  className="hover:text-gray-700 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageTitle;