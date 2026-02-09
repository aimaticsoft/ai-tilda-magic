import { Suspense, lazy, ComponentType } from 'react';

// Loading skeleton for sections
const SectionSkeleton = () => (
  <div className="py-20 section-container">
    <div className="flex flex-col items-center gap-6">
      {/* Title skeleton */}
      <div className="h-10 w-64 bg-muted/50 rounded-lg animate-pulse" />
      
      {/* Subtitle skeleton */}
      <div className="h-4 w-96 max-w-full bg-muted/30 rounded animate-pulse" />
      
      {/* Content skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card p-6 h-48 animate-pulse">
            <div className="h-12 w-12 bg-muted/50 rounded-xl mb-4" />
            <div className="h-5 w-3/4 bg-muted/50 rounded mb-2" />
            <div className="h-4 w-full bg-muted/30 rounded mb-1" />
            <div className="h-4 w-2/3 bg-muted/30 rounded" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Lazy-loaded section components
const LazyAbout = lazy(() => import('./AboutSection'));
const LazyProducts = lazy(() => import('./ProductsSection'));
const LazyServices = lazy(() => import('./ServicesSection'));
const LazyCases = lazy(() => import('./CasesSection'));
const LazyCalculator = lazy(() => import('./CalculatorSection'));
const LazyDemo = lazy(() => import('./DemoSection'));
const LazyAdvantages = lazy(() => import('./AdvantagesSection'));
const LazyReviews = lazy(() => import('./ReviewsSection'));
const LazyFAQ = lazy(() => import('./FAQSection'));
const LazyContacts = lazy(() => import('./ContactsSection'));

// Wrapped components with Suspense
export const LazyAboutSection = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazyAbout />
  </Suspense>
);

export const LazyProductsSection = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazyProducts />
  </Suspense>
);

export const LazyServicesSection = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazyServices />
  </Suspense>
);

export const LazyCasesSection = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazyCases />
  </Suspense>
);

export const LazyCalculatorSection = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazyCalculator />
  </Suspense>
);

export const LazyDemoSection = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazyDemo />
  </Suspense>
);

export const LazyAdvantagesSection = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazyAdvantages />
  </Suspense>
);

export const LazyReviewsSection = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazyReviews />
  </Suspense>
);

export const LazyFAQSection = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazyFAQ />
  </Suspense>
);

export const LazyContactsSection = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazyContacts />
  </Suspense>
);

export default SectionSkeleton;
