import { Slider } from '@/components/ui/slider';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations, t } from '@/i18n/translations';

interface ProjectSettingsProps {
  managersCount: number;
  leadsPerMonth: number;
  averageCheck: number;
  onManagersChange: (value: number) => void;
  onLeadsChange: (value: number) => void;
  onAverageCheckChange: (value: number) => void;
}

export const ProjectSettings = ({
  managersCount, leadsPerMonth, averageCheck,
  onManagersChange, onLeadsChange, onAverageCheckChange,
}: ProjectSettingsProps) => {
  const formatNumber = (num: number) => num.toLocaleString('ru-RU');
  const { lang } = useLanguage();

  return (
    <div className="glass-card p-4 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">📊</span>
        <h3 className="font-semibold text-foreground">{t(translations.calculator.bizParams, lang)}</h3>
        <Tooltip>
          <TooltipTrigger asChild><span className="text-xs text-muted-foreground cursor-help">❓</span></TooltipTrigger>
          <TooltipContent><p className="text-sm max-w-xs">{t(translations.calculator.bizParamsTooltip, lang)}</p></TooltipContent>
        </Tooltip>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{t(translations.calculator.managers, lang)}</span>
            <span className="text-sm font-bold text-primary">{managersCount}</span>
          </div>
          <Slider value={[managersCount]} onValueChange={(v) => onManagersChange(v[0])} min={1} max={20} step={1} className="w-full" />
          <div className="flex justify-between text-[10px] text-muted-foreground/60"><span>1</span><span>20</span></div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{t(translations.calculator.leads, lang)}</span>
            <span className="text-sm font-bold text-primary">{formatNumber(leadsPerMonth)}</span>
          </div>
          <Slider value={[leadsPerMonth]} onValueChange={(v) => onLeadsChange(v[0])} min={5} max={100} step={1} className="w-full" />
          <div className="flex justify-between text-[10px] text-muted-foreground/60"><span>5</span><span>100</span></div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{t(translations.calculator.avgCheck, lang)}</span>
            <span className="text-sm font-bold text-primary">{formatNumber(averageCheck)} ₽</span>
          </div>
          <Slider value={[averageCheck]} onValueChange={(v) => onAverageCheckChange(v[0])} min={500} max={1000000} step={500} className="w-full" />
          <div className="flex justify-between text-[10px] text-muted-foreground/60"><span>500 ₽</span><span>1 000 000 ₽</span></div>
        </div>
      </div>
    </div>
  );
};
