import { ChevronDown } from 'lucide-react';
import { PricingCategory, PricingItem } from '@/data/pricingData';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface CategoryAccordionProps {
  category: PricingCategory;
  selectedItems: Set<string>;
  onItemToggle: (itemId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const CategoryAccordion = ({
  category,
  selectedItems,
  onItemToggle,
  isOpen,
  onToggle,
}: CategoryAccordionProps) => {
  const selectedCount = category.items.filter((item) =>
    selectedItems.has(item.id)
  ).length;

  return (
    <div className={cn(
      "glass-card p-4 transition-all duration-300 self-start",
      selectedCount > 0 && "border-primary/40 bg-primary/5"
    )}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{category.icon}</span>
          <span className="font-semibold text-foreground">
            {category.name}
          </span>
          {selectedCount > 0 && (
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary text-primary-foreground">
              {selectedCount}
            </span>
          )}
        </div>
        <ChevronDown className={cn(
          "w-5 h-5 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      <div className={cn(
        "grid gap-2 overflow-hidden transition-all duration-300",
        isOpen ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="space-y-2">
          {category.items.map((item) => (
            <FeatureItem
              key={item.id}
              item={item}
              isSelected={selectedItems.has(item.id)}
              onToggle={() => onItemToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  item: PricingItem;
  isSelected: boolean;
  onToggle: () => void;
}

const FeatureItem = ({ item, isSelected, onToggle }: FeatureItemProps) => {
  return (
    <label className={cn(
      "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200",
      "bg-secondary/50 hover:bg-secondary border border-transparent",
      isSelected && "bg-primary/20 border-primary/50"
    )}>
      <Checkbox checked={isSelected} onCheckedChange={onToggle} />
      <span className={cn(
        "flex-1 text-sm",
        isSelected ? "text-foreground" : "text-muted-foreground"
      )}>
        {item.name}
      </span>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-xs text-muted-foreground cursor-help hover:text-primary transition-colors">
            ℹ️
          </span>
        </TooltipTrigger>
        <TooltipContent side="left" className="max-w-xs">
          <p className="text-sm">{item.description}</p>
          <p className="text-xs text-primary mt-1">
            ~{(item.pricePerHour * item.baseHours).toLocaleString('ru-RU')} ₽
          </p>
        </TooltipContent>
      </Tooltip>
    </label>
  );
};
