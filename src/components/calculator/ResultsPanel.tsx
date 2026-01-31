import { motion } from 'framer-motion';
import { TrendingUp, Calculator, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResultsPanelProps {
  selectedCount: number;
  totalCost: number;
  monthlyCost: number;
  potentialRevenue: number;
  roi: number;
}

const formatCurrency = (value: number) =>
  value.toLocaleString('ru-RU') + ' ₽';

const ResultsPanel = ({
  selectedCount,
  totalCost,
  monthlyCost,
  potentialRevenue,
  roi,
}: ResultsPanelProps) => {
  const handleOrder = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (selectedCount === 0) {
    return (
      <div className="glass-card p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <TrendingUp size={48} className="text-muted-foreground mb-4" />
        </motion.div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Выберите функции слева
        </h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Отметьте галочками нужные возможности, и мы рассчитаем стоимость
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="glass-card p-6 space-y-6 sticky top-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Calculator size={20} className="text-primary" />
        <h3 className="font-semibold text-foreground">Расчёт стоимости</h3>
      </div>

      {/* Cost breakdown */}
      <div className="space-y-4">
        <div className="flex justify-between items-center py-3 border-b border-border">
          <span className="text-muted-foreground">Выбрано функций</span>
          <span className="font-semibold text-foreground">{selectedCount}</span>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-border">
          <span className="text-muted-foreground">Разработка</span>
          <span className="font-semibold text-foreground">{formatCurrency(totalCost)}</span>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-border">
          <span className="text-muted-foreground">Поддержка / мес</span>
          <span className="font-semibold text-foreground">{formatCurrency(monthlyCost)}</span>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-border">
          <span className="text-muted-foreground flex items-center gap-1">
            <Zap size={14} className="text-accent" />
            Потенциальный доход / мес
          </span>
          <span className="font-semibold text-accent">{formatCurrency(potentialRevenue)}</span>
        </div>

        <div className="flex justify-between items-center py-3 bg-primary/10 rounded-lg px-4 -mx-2">
          <span className="text-foreground font-medium">ROI за 6 мес</span>
          <span className="font-bold text-primary text-lg">{roi.toFixed(0)}%</span>
        </div>
      </div>

      {/* Discounted price */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground line-through">
            {formatCurrency(totalCost)}
          </span>
          <span className="text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded">
            -10%
          </span>
        </div>
        <div className="text-2xl font-bold text-gradient">
          {formatCurrency(Math.round(totalCost * 0.9))}
        </div>
      </div>

      <Button onClick={handleOrder} className="w-full btn-neon" size="lg">
        Заказать проект
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Финальная стоимость уточняется после консультации
      </p>
    </motion.div>
  );
};

export default ResultsPanel;
