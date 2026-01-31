import { useRef, useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  featureCategories,
  BASE_PROJECT_COST,
  MONTHLY_SUPPORT_PERCENT,
} from './calculator/calculatorData';
import BusinessSliders from './calculator/BusinessSliders';
import FeatureCategory from './calculator/FeatureCategory';
import ResultsPanel from './calculator/ResultsPanel';
import DiscountTimer from './calculator/DiscountTimer';

const CalculatorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Business params
  const [managers, setManagers] = useState(3);
  const [leads, setLeads] = useState(30);
  const [avgCheck, setAvgCheck] = useState(50000);

  // Selected features
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const handleToggle = (id: string, checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  };

  // Calculate costs
  const { totalCost, monthlyCost, potentialRevenue, roi } = useMemo(() => {
    let featuresCost = 0;
    for (const cat of featureCategories) {
      for (const item of cat.items) {
        if (selectedIds.has(item.id)) {
          featuresCost += item.price;
        }
      }
    }

    const total = selectedIds.size > 0 ? BASE_PROJECT_COST + featuresCost : 0;
    const monthly = Math.round(total * MONTHLY_SUPPORT_PERCENT);

    // Simple revenue model: assume AI increases conversion by 20%
    const conversionLift = 0.2;
    const baseConversion = 0.05; // 5%
    const newConversion = baseConversion * (1 + conversionLift);
    const additionalDeals = leads * conversionLift * baseConversion;
    const potentialRev = Math.round(additionalDeals * avgCheck);

    // ROI over 6 months
    const totalInvestment = total + monthly * 6;
    const totalReturn = potentialRev * 6;
    const roiValue = totalInvestment > 0 ? ((totalReturn - totalInvestment) / totalInvestment) * 100 : 0;

    return {
      totalCost: total,
      monthlyCost: monthly,
      potentialRevenue: potentialRev,
      roi: roiValue,
    };
  }, [selectedIds, leads, avgCheck]);

  return (
    <section id="calculator" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">
            Калькулятор стоимости <span className="text-gradient">ИИ-решений</span>
          </h2>
          <div className="accent-line mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Отметьте нужные функции галочками и получите примерную стоимость проекта
          </p>
          <DiscountTimer />
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          {/* Left column: sliders + categories */}
          <div className="space-y-6">
            <BusinessSliders
              managers={managers}
              leads={leads}
              avgCheck={avgCheck}
              onManagersChange={setManagers}
              onLeadsChange={setLeads}
              onAvgCheckChange={setAvgCheck}
            />

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {featureCategories.map((cat) => (
                <FeatureCategory
                  key={cat.id}
                  category={cat}
                  selectedIds={selectedIds}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </div>

          {/* Right column: results */}
          <div>
            <ResultsPanel
              selectedCount={selectedIds.size}
              totalCost={totalCost}
              monthlyCost={monthlyCost}
              potentialRevenue={potentialRevenue}
              roi={roi}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
