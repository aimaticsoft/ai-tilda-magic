import { Slider } from '@/components/ui/slider';

interface BusinessSlidersProps {
  managers: number;
  leads: number;
  avgCheck: number;
  onManagersChange: (value: number) => void;
  onLeadsChange: (value: number) => void;
  onAvgCheckChange: (value: number) => void;
}

const formatCurrency = (value: number) =>
  value.toLocaleString('ru-RU') + ' ₽';

const BusinessSliders = ({
  managers,
  leads,
  avgCheck,
  onManagersChange,
  onLeadsChange,
  onAvgCheckChange,
}: BusinessSlidersProps) => {
  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">📊</span>
        <h3 className="font-semibold text-foreground">Параметры вашего бизнеса</h3>
      </div>

      {/* Managers */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <span>👥</span> Менеджеров в команде
          </span>
          <span className="text-primary font-semibold">{managers}</span>
        </div>
        <Slider
          value={[managers]}
          onValueChange={([v]) => onManagersChange(v)}
          min={1}
          max={20}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1</span>
          <span>20</span>
        </div>
      </div>

      {/* Leads per month */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <span>📩</span> Заявок в месяц
          </span>
          <span className="text-primary font-semibold">{leads}</span>
        </div>
        <Slider
          value={[leads]}
          onValueChange={([v]) => onLeadsChange(v)}
          min={5}
          max={100}
          step={5}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>5</span>
          <span>100</span>
        </div>
      </div>

      {/* Average check */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <span>💰</span> Средний чек
          </span>
          <span className="text-primary font-semibold">{formatCurrency(avgCheck)}</span>
        </div>
        <Slider
          value={[avgCheck]}
          onValueChange={([v]) => onAvgCheckChange(v)}
          min={500}
          max={1000000}
          step={500}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>500 ₽</span>
          <span>1 000 000 ₽</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessSliders;
