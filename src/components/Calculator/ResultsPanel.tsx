import { useMemo } from "react";
import {
  pricingCategories, tariffs, Tariff,
  calculateComplexity, calculateBaseDevelopmentPrice, calculateBaseDevelopmentHours, baseDevelopmentCost,
} from "@/data/pricingData";
import { TrendingUp, Zap, Calculator } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

interface CalculationBreakdown {
  categoryId: string;
  categoryName: string;
  items: { name: string; hours: number; pricePerHour: number; total: number }[];
  subtotal: number;
}

interface ResultsPanelProps {
  selectedItems: Set<string>;
  managersCount: number;
  leadsPerMonth: number;
  averageCheck: number;
}

export const ResultsPanel = ({ selectedItems, managersCount, leadsPerMonth, averageCheck }: ResultsPanelProps) => {
  const { lang } = useLanguage();
  const calc = translations.calculator;

  const calculation = useMemo(() => {
    const breakdown: CalculationBreakdown[] = [];
    let featuresTotal = 0;
    let totalHours = 0;
    const integrationCategories = ["messengers", "marketplaces", "crm"];
    let integrationsCount = 0;

    pricingCategories.forEach((category) => {
      const categoryItems: CalculationBreakdown["items"] = [];
      let categorySubtotal = 0;
      category.items.forEach((item) => {
        if (selectedItems.has(item.id)) {
          const itemTotal = item.pricePerHour * item.baseHours;
          categoryItems.push({ name: item.name, hours: item.baseHours, pricePerHour: item.pricePerHour, total: itemTotal });
          categorySubtotal += itemTotal;
          totalHours += item.baseHours;
          if (integrationCategories.includes(category.id)) integrationsCount++;
        }
      });
      if (categoryItems.length > 0) {
        // Use translated category name
        const catKey = category.id as keyof typeof translations.pricingData.categories;
        const catName = translations.pricingData.categories[catKey]
          ? t(translations.pricingData.categories[catKey], lang)
          : category.name;
        breakdown.push({ categoryId: category.id, categoryName: catName, items: categoryItems, subtotal: categorySubtotal });
        featuresTotal += categorySubtotal;
      }
    });

    const complexityMultiplier = calculateComplexity(selectedItems.size, integrationsCount);
    const baseDevelopmentTotal = calculateBaseDevelopmentPrice(complexityMultiplier);
    const baseDevelopmentHoursTotal = calculateBaseDevelopmentHours(complexityMultiplier);

    if (selectedItems.size > 0) {
      breakdown.unshift({
        categoryId: "base-development",
        categoryName: t(calc.baseDev, lang),
        items: Object.entries(baseDevelopmentCost).map(([key, item]) => {
          const nameKey = key as keyof typeof translations.pricingData.baseDev;
          const translatedName = translations.pricingData.baseDev[nameKey]
            ? t(translations.pricingData.baseDev[nameKey], lang)
            : item.name;
          return {
            name: translatedName,
            hours: Math.round(item.hours * complexityMultiplier),
            pricePerHour: item.pricePerHour,
            total: Math.round(item.hours * item.pricePerHour * complexityMultiplier),
          };
        }),
        subtotal: baseDevelopmentTotal,
      });
      totalHours += baseDevelopmentHoursTotal;
    }

    const baseTotal = featuresTotal + baseDevelopmentTotal;
    const finalTotal = Math.round(baseTotal);

    let complexityLabel = t(calc.complexity.typical, lang);
    if (complexityMultiplier >= 2) complexityLabel = t(calc.complexity.high, lang);
    else if (complexityMultiplier >= 1.6) complexityLabel = t(calc.complexity.complex, lang);
    else if (complexityMultiplier >= 1.3) complexityLabel = t(calc.complexity.medium, lang);

    return { breakdown, featuresTotal, baseDevelopmentTotal, baseTotal, totalHours, complexityMultiplier, complexityLabel, integrationsCount, finalTotal };
  }, [selectedItems, lang]);

  const formatPrice = (price: number) => price.toLocaleString("ru-RU");

  if (selectedItems.size === 0) {
    return (
      <div className="glass-card p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Calculator className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{t(calc.selectFeatures, lang)}</h3>
        <p className="text-muted-foreground text-sm max-w-xs">{t(calc.selectFeaturesHint, lang)}</p>
      </div>
    );
  }

  const discountedTotal = Math.round(calculation.finalTotal * 0.9);
  const discountedMonthly = Math.round(discountedTotal / 5);
  const managerSalaryPerMonth = 70000;
  const savedManagers = Math.max(0, managersCount - 1);
  const yearlySavings = savedManagers * managerSalaryPerMonth * 12;
  const conversionBoost = 0.2;
  const yearlyExtraRevenue = Math.round(leadsPerMonth * averageCheck * conversionBoost * 12);
  const totalYearlyBenefit = yearlySavings + yearlyExtraRevenue;
  const monthlyBenefit = totalYearlyBenefit / 12;
  const paybackMonths = monthlyBenefit > 0 ? Math.max(1, Math.ceil(discountedTotal / monthlyBenefit)) : 0;

  return (
    <div className="space-y-6">
      <div className="glass-card p-6 border-2 border-primary/50" style={{ boxShadow: 'var(--shadow-glow)' }}>
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-2">{t(calc.approxCost, lang)}</p>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-2xl text-muted-foreground line-through">{formatPrice(calculation.finalTotal)} ₽</span>
            <span className="text-4xl font-bold text-gradient">{formatPrice(discountedTotal)} ₽</span>
          </div>
          <p className="text-accent text-sm font-medium">{t(calc.discountApplied, lang)}</p>
          <p className="text-muted-foreground text-sm mt-2">{t(calc.orMonthly, lang)} {formatPrice(discountedMonthly)} {t(calc.perMonth, lang)}</p>
          <p className="text-xs text-muted-foreground mt-1">~{calculation.totalHours} {t(calc.devHours, lang)}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent flex items-center gap-1"><Zap className="w-3 h-3" />{calculation.complexityLabel}</span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">👥 {managersCount} {t(calc.managersLabel, lang)}</span>
        </div>
      </div>

      <div className="glass-card p-6 bg-accent/5 border-accent/30">
        <div className="flex items-center gap-2 mb-4"><TrendingUp className="w-5 h-5 text-accent" /><h4 className="font-semibold text-foreground">{t(calc.yearlyBenefit, lang)}</h4></div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center"><span className="text-muted-foreground">{t(calc.savingsOn, lang)} {savedManagers} {t(calc.managersWord, lang)}</span><span className="font-medium text-accent">+{formatPrice(yearlySavings)} ₽</span></div>
          <p className="text-xs text-muted-foreground pl-6">{savedManagers} × 70 000 ₽ × 12 {lang === 'ru' ? 'мес' : 'mo'}</p>
          <div className="flex justify-between items-center"><span className="text-muted-foreground">{t(calc.conversionRevenue, lang)}</span><span className="font-medium text-accent">+{formatPrice(yearlyExtraRevenue)} ₽</span></div>
          <p className="text-xs text-muted-foreground pl-6">{formatPrice(leadsPerMonth)} {lang === 'ru' ? 'заявок' : 'leads'} × {formatPrice(averageCheck)} ₽ × 20% × 12 {lang === 'ru' ? 'мес' : 'mo'}</p>
          <div className="flex justify-between items-center pt-3 border-t border-border"><span className="font-semibold text-foreground">{t(calc.totalBenefitYear, lang)}</span><span className="font-bold text-lg text-accent">+{formatPrice(totalYearlyBenefit)} ₽</span></div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-accent/20 text-center">
          <span className="text-accent font-semibold">{t(calc.payback, lang)} {paybackMonths > 12 ? "12+" : paybackMonths} {t(calc.months, lang)}</span>
        </div>
      </div>

      <div className="glass-card p-6">
        <h4 className="font-semibold text-foreground mb-4">{t(calc.breakdown, lang)}</h4>
        <div className="space-y-2 text-sm">
          {calculation.breakdown.map((category) => (
            <div key={category.categoryId} className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">{category.categoryName}</span>
              <span className="font-medium text-foreground">{formatPrice(category.subtotal)} ₽</span>
            </div>
          ))}
          <div className="pt-3 space-y-2">
            <div className="flex justify-between items-center text-muted-foreground"><span>{t(calc.noDiscount, lang)}</span><span className="line-through">{formatPrice(calculation.finalTotal)} ₽</span></div>
            <div className="flex justify-between items-center text-lg font-bold"><span className="text-foreground">{t(calc.withDiscount, lang)}</span><span className="text-gradient">{formatPrice(discountedTotal)} ₽</span></div>
            <a href="https://t.me/AimaticSoft" target="_blank" rel="noopener noreferrer" className="block w-full mt-4">
              <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">{t(calc.orderDev, lang)}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
