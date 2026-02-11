import { useState, useMemo, useEffect } from 'react';
import { pricingCategories, calculateComplexity, calculateBaseDevelopmentPrice } from '@/data/pricingData';
import { CategoryCard } from './CategoryAccordion';
import { ProjectSettings } from './ProjectSettings';
import { ResultsPanel } from './ResultsPanel';
import { Bot, Sparkles, RotateCcw, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

export const Calculator = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [managersCount, setManagersCount] = useState(3);
  const [leadsPerMonth, setLeadsPerMonth] = useState(30);
  const [averageCheck, setAverageCheck] = useState(50000);
  const [timeLeft, setTimeLeft] = useState(0);
  const { lang } = useLanguage();

  useEffect(() => {
    const DISCOUNT_DURATION_SECONDS = 3 * 60 * 60;
    const STORAGE_KEY = 'aimatic_discount_deadline';
    const now = Date.now();
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsedDeadline = stored ? Number(stored) : NaN;
    let deadlineMs: number;
    if (Number.isFinite(parsedDeadline) && parsedDeadline > now) {
      deadlineMs = parsedDeadline;
    } else {
      deadlineMs = now + DISCOUNT_DURATION_SECONDS * 1000;
      localStorage.setItem(STORAGE_KEY, String(deadlineMs));
    }
    const update = () => {
      const seconds = Math.max(0, Math.floor((deadlineMs - Date.now()) / 1000));
      setTimeLeft(seconds);
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleItemToggle = (itemId: string) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) newSet.delete(itemId);
      else newSet.add(itemId);
      return newSet;
    });
  };

  const handleReset = () => {
    setSelectedItems(new Set());
    setManagersCount(3);
    setLeadsPerMonth(30);
    setAverageCheck(50000);
  };

  const integrationsCount = useMemo(() => {
    const integrationCategories = ['messengers', 'marketplaces', 'crm'];
    let count = 0;
    pricingCategories.forEach((category) => {
      if (integrationCategories.includes(category.id)) {
        category.items.forEach((item) => { if (selectedItems.has(item.id)) count++; });
      }
    });
    return count;
  }, [selectedItems]);

  const totalPrice = useMemo(() => {
    if (selectedItems.size === 0) return 0;
    let featuresTotal = 0;
    pricingCategories.forEach((category) => {
      category.items.forEach((item) => { if (selectedItems.has(item.id)) featuresTotal += item.pricePerHour * item.baseHours; });
    });
    const complexity = calculateComplexity(selectedItems.size, integrationsCount);
    const baseDevelopment = calculateBaseDevelopmentPrice(complexity);
    return Math.round(featuresTotal + baseDevelopment);
  }, [selectedItems, integrationsCount]);

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center glow-primary">
            <Bot className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            {t(translations.calculator.calcTitle, lang)}
          </h2>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-destructive/10 border border-destructive/30">
          <Clock className="w-5 h-5 text-destructive animate-pulse" />
          <span className="text-sm text-destructive font-medium">{t(translations.calculator.discountLabel, lang)}</span>
          <span className="text-lg font-bold text-destructive font-mono">{formatTime(timeLeft)}</span>
        </div>
        {selectedItems.size > 0 && (
          <Button variant="outline" size="sm" onClick={handleReset} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            {t(translations.calculator.reset, lang)}
          </Button>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Sparkles className="w-5 h-5 text-primary" />
          <span>{t(translations.calculator.checkFeatures, lang)}</span>
        </div>
        {selectedItems.size > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gradient">{totalPrice.toLocaleString('ru-RU')} ₽</span>
            <span className="text-sm text-muted-foreground">({selectedItems.size} {t(translations.calculator.functions, lang)})</span>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ProjectSettings managersCount={managersCount} leadsPerMonth={leadsPerMonth} averageCheck={averageCheck} onManagersChange={setManagersCount} onLeadsChange={setLeadsPerMonth} onAverageCheckChange={setAverageCheck} />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {pricingCategories.map((category) => (
              <CategoryCard key={category.id} category={category} selectedItems={selectedItems} onItemToggle={handleItemToggle} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <ResultsPanel selectedItems={selectedItems} managersCount={managersCount} leadsPerMonth={leadsPerMonth} averageCheck={averageCheck} />
          </div>
        </div>
      </div>
    </div>
  );
};
