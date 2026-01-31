import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FeatureCheckbox from './FeatureCheckbox';
import type { FeatureCategory as FeatureCategoryType } from './calculatorData';

interface FeatureCategoryProps {
  category: FeatureCategoryType;
  selectedIds: Set<string>;
  onToggle: (id: string, checked: boolean) => void;
}

const FeatureCategory = ({ category, selectedIds, onToggle }: FeatureCategoryProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const selectedCount = category.items.filter((item) => selectedIds.has(item.id)).length;

  return (
    <div className="glass-card overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{category.icon}</span>
          <span className="font-medium text-foreground">{category.title}</span>
          {selectedCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
              {selectedCount}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 grid gap-2">
              {category.items.map((item) => (
                <FeatureCheckbox
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  tooltip={item.tooltip}
                  checked={selectedIds.has(item.id)}
                  onChange={onToggle}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeatureCategory;
