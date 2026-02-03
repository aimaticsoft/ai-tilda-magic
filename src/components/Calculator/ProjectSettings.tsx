import { Slider } from '@/components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ProjectSettingsProps {
  managersCount: number;
  leadsPerMonth: number;
  averageCheck: number;
  onManagersChange: (value: number) => void;
  onLeadsChange: (value: number) => void;
  onAverageCheckChange: (value: number) => void;
}

export const ProjectSettings = ({
  managersCount,
  leadsPerMonth,
  averageCheck,
  onManagersChange,
  onLeadsChange,
  onAverageCheckChange,
}: ProjectSettingsProps) => {
  const formatNumber = (num: number) => num.toLocaleString('ru-RU');

  return (
    <div className="glass-card p-6 mb-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-lg">📊</span>
        <h3 className="font-semibold text-foreground">Параметры вашего бизнеса</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="text-xs text-muted-foreground cursor-help">❓</span>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm max-w-xs">
              Укажите параметры для расчёта экономии и выгоды от внедрения ИИ-ассистента
            </p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="space-y-6">
        {/* Managers Count */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">👥 Менеджеров в команде</span>
            <span className="text-sm font-medium text-primary">{managersCount}</span>
          </div>
          <Slider
            value={[managersCount]}
            onValueChange={(value) => onManagersChange(value[0])}
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

        {/* Leads Per Month */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">📩 Заявок в месяц</span>
            <span className="text-sm font-medium text-primary">{formatNumber(leadsPerMonth)}</span>
          </div>
          <Slider
            value={[leadsPerMonth]}
            onValueChange={(value) => onLeadsChange(value[0])}
            min={5}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>5</span>
            <span>100</span>
          </div>
        </div>

        {/* Average Check */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">💰 Средний чек</span>
            <span className="text-sm font-medium text-primary">{formatNumber(averageCheck)} ₽</span>
          </div>
          <Slider
            value={[averageCheck]}
            onValueChange={(value) => onAverageCheckChange(value[0])}
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
    </div>
  );
};
