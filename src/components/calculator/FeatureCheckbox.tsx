import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface FeatureCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  tooltip?: string;
  onChange: (id: string, checked: boolean) => void;
}

const FeatureCheckbox = ({ id, label, checked, tooltip, onChange }: FeatureCheckboxProps) => {
  return (
    <motion.label
      className="flex items-center justify-between gap-3 p-3 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 cursor-pointer transition-all group"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div
          className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all ${
            checked
              ? 'bg-primary border-primary'
              : 'bg-transparent border-2 border-muted-foreground/50'
          }`}
        >
          {checked && <Check size={14} className="text-primary-foreground" />}
        </div>
        <span className="text-sm text-foreground truncate">{label}</span>
      </div>

      {tooltip && (
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="p-1 rounded text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Info size={14} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs text-xs">
            {tooltip}
          </TooltipContent>
        </Tooltip>
      )}

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(id, e.target.checked)}
        className="sr-only"
      />
    </motion.label>
  );
};

export default FeatureCheckbox;
