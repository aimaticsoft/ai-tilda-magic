import { useMemo } from "react";
import {
  pricingCategories,
  tariffs,
  Tariff,
  calculateComplexity,
  calculateBaseDevelopmentPrice,
  calculateBaseDevelopmentHours,
  baseDevelopmentCost,
} from "@/data/pricingData";
import { TrendingUp, Zap, Calculator } from "lucide-react";

interface CalculationBreakdown {
  categoryId: string;
  categoryName: string;
  items: {
    name: string;
    hours: number;
    pricePerHour: number;
    total: number;
  }[];
  subtotal: number;
}

interface ResultsPanelProps {
  selectedItems: Set<string>;
  managersCount: number;
  leadsPerMonth: number;
  averageCheck: number;
}

export const ResultsPanel = ({ selectedItems, managersCount, leadsPerMonth, averageCheck }: ResultsPanelProps) => {
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
          categoryItems.push({
            name: item.name,
            hours: item.baseHours,
            pricePerHour: item.pricePerHour,
            total: itemTotal,
          });
          categorySubtotal += itemTotal;
          totalHours += item.baseHours;

          if (integrationCategories.includes(category.id)) {
            integrationsCount++;
          }
        }
      });

      if (categoryItems.length > 0) {
        breakdown.push({
          categoryId: category.id,
          categoryName: category.name,
          items: categoryItems,
          subtotal: categorySubtotal,
        });
        featuresTotal += categorySubtotal;
      }
    });

    const complexityMultiplier = calculateComplexity(selectedItems.size, integrationsCount);
    const baseDevelopmentTotal = calculateBaseDevelopmentPrice(complexityMultiplier);
    const baseDevelopmentHoursTotal = calculateBaseDevelopmentHours(complexityMultiplier);

    if (selectedItems.size > 0) {
      breakdown.unshift({
        categoryId: "base-development",
        categoryName: "⚙️ Базовая разработка",
        items: Object.values(baseDevelopmentCost).map((item) => ({
          name: item.name,
          hours: Math.round(item.hours * complexityMultiplier),
          pricePerHour: item.pricePerHour,
          total: Math.round(item.hours * item.pricePerHour * complexityMultiplier),
        })),
        subtotal: baseDevelopmentTotal,
      });
      totalHours += baseDevelopmentHoursTotal;
    }

    const baseTotal = featuresTotal + baseDevelopmentTotal;
    const finalTotal = Math.round(baseTotal);

    let complexityLabel = "Типовой";
    if (complexityMultiplier >= 2) complexityLabel = "Высокий";
    else if (complexityMultiplier >= 1.6) complexityLabel = "Сложный";
    else if (complexityMultiplier >= 1.3) complexityLabel = "Средний";

    let recommendedTariff: Tariff | null = null;
    for (const tariff of tariffs) {
      if (finalTotal >= tariff.minPrice && finalTotal <= tariff.maxPrice) {
        recommendedTariff = tariff;
        break;
      }
    }

    return {
      breakdown,
      featuresTotal,
      baseDevelopmentTotal,
      baseTotal,
      totalHours,
      complexityMultiplier,
      complexityLabel,
      integrationsCount,
      finalTotal,
      recommendedTariff,
    };
  }, [selectedItems]);

  const formatPrice = (price: number) => price.toLocaleString("ru-RU");

  if (selectedItems.size === 0) {
    return (
      <div className="glass-card p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Calculator className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Выберите функции слева</h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          Отметьте галочками нужные возможности, и мы рассчитаем стоимость
        </p>
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
      {/* Main Result */}
      <div className="glass-card p-6 border-2 border-primary/50" style={{ boxShadow: 'var(--shadow-glow)' }}>
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-2">Приблизительная стоимость</p>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-2xl text-muted-foreground line-through">
              {formatPrice(calculation.finalTotal)} ₽
            </span>
            <span className="text-4xl font-bold text-gradient">
              {formatPrice(discountedTotal)} ₽
            </span>
          </div>
          <p className="text-accent text-sm font-medium">Скидка 10% применена!</p>
          <p className="text-muted-foreground text-sm mt-2">или {formatPrice(discountedMonthly)} ₽/мес</p>
          <p className="text-xs text-muted-foreground mt-1">~{calculation.totalHours} часов разработки</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent flex items-center gap-1">
            <Zap className="w-3 h-3" />
            {calculation.complexityLabel}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
            👥 {managersCount} менеджеров
          </span>
        </div>
      </div>

      {/* ROI Block */}
      <div className="glass-card p-6 bg-accent/5 border-accent/30">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-accent" />
          <h4 className="font-semibold text-foreground">Ваша выгода за год</h4>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">💼 Экономия на {savedManagers} менеджерах</span>
            <span className="font-medium text-accent">+{formatPrice(yearlySavings)} ₽</span>
          </div>
          <p className="text-xs text-muted-foreground pl-6">{savedManagers} × 70 000 ₽ × 12 мес</p>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">📈 Доход от конверсии +20%</span>
            <span className="font-medium text-accent">+{formatPrice(yearlyExtraRevenue)} ₽</span>
          </div>
          <p className="text-xs text-muted-foreground pl-6">
            {formatPrice(leadsPerMonth)} заявок × {formatPrice(averageCheck)} ₽ × 20% × 12 мес
          </p>
          <div className="flex justify-between items-center pt-3 border-t border-border">
            <span className="font-semibold text-foreground">Итого выгода/год</span>
            <span className="font-bold text-lg text-accent">+{formatPrice(totalYearlyBenefit)} ₽</span>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-accent/20 text-center">
          <span className="text-accent font-semibold">
            ⚡ Окупаемость за {paybackMonths > 12 ? "12+" : paybackMonths} мес.
          </span>
        </div>
      </div>

      {/* Breakdown */}
      <div className="glass-card p-6">
        <h4 className="font-semibold text-foreground mb-4">📊 Детализация расчёта</h4>
        <div className="space-y-2 text-sm">
          {calculation.breakdown.map((category) => (
            <div key={category.categoryId} className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-muted-foreground">{category.categoryName}</span>
              <span className="font-medium text-foreground">{formatPrice(category.subtotal)} ₽</span>
            </div>
          ))}
          <div className="pt-3 space-y-2">
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Без скидки</span>
              <span className="line-through">{formatPrice(calculation.finalTotal)} ₽</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-foreground">Со скидкой 10%</span>
              <span className="text-gradient">{formatPrice(discountedTotal)} ₽</span>
            </div>

            {/* Order Button */}
            <a
              href="https://t.me/AimaticSoft"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-4"
            >
              <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
                🚀 Заказать разработку
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
