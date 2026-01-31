import { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';
import {
  BLOCKS,
  generateBaseStyles,
  generateHeaderBlock,
  generateHeroBlock,
  generateMarqueeBlock,
  generateAboutBlock,
  generateServicesBlock,
  generateCasesBlock,
  generateDemoBlock,
  generateAdvantagesBlock,
  generateReviewsBlock,
  generateFAQBlock,
  generateContactsBlock,
  generateFooterBlock,
} from '@/lib/tilda-export';

const generators: Record<string, () => string> = {
  base: generateBaseStyles,
  header: generateHeaderBlock,
  hero: generateHeroBlock,
  marquee: generateMarqueeBlock,
  about: generateAboutBlock,
  services: generateServicesBlock,
  cases: generateCasesBlock,
  demo: generateDemoBlock,
  advantages: generateAdvantagesBlock,
  reviews: generateReviewsBlock,
  faq: generateFAQBlock,
  contacts: generateContactsBlock,
  footer: generateFooterBlock,
};

const Export = () => {
  const [selectedBlock, setSelectedBlock] = useState('base');
  const [copied, setCopied] = useState(false);

  const currentCode = generators[selectedBlock]?.() || '';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadAll = () => {
    const allCode = BLOCKS.map(block => {
      const code = generators[block.id]?.() || '';
      return `<!-- ========== ${block.name} ========== -->\n${code}\n\n`;
    }).join('\n');

    const blob = new Blob([allCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aimatic-tilda-blocks.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gradient">Экспорт в Tilda T123</h1>
        <p className="text-muted-foreground mb-8">
          Выберите блок и скопируйте HTML-код для вставки в блок T123 в Tilda
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Block selector */}
          <div className="lg:col-span-1 space-y-2">
            <h2 className="font-semibold mb-4">Блоки</h2>
            {BLOCKS.map((block) => (
              <button
                key={block.id}
                onClick={() => setSelectedBlock(block.id)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  selectedBlock === block.id
                    ? 'bg-primary/20 border border-primary'
                    : 'bg-card hover:bg-card/80 border border-border'
                }`}
              >
                <div className="font-medium">{block.name}</div>
                <div className="text-xs text-muted-foreground">{block.description}</div>
              </button>
            ))}

            <button
              onClick={handleDownloadAll}
              className="w-full mt-4 p-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90"
            >
              <Download size={18} />
              Скачать все блоки
            </button>
          </div>

          {/* Code preview */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">
                HTML-код: {BLOCKS.find(b => b.id === selectedBlock)?.name}
              </h2>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? 'Скопировано!' : 'Копировать'}
              </button>
            </div>

            <div className="relative">
              <pre className="p-4 bg-card border border-border rounded-lg overflow-auto max-h-[70vh] text-sm">
                <code className="text-muted-foreground">{currentCode}</code>
              </pre>
            </div>

            <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">📋 Инструкция</h3>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Скопируйте код выше</li>
                <li>В Tilda создайте блок T123 (HTML-код)</li>
                <li>Вставьте код в блок</li>
                <li><strong>Важно:</strong> Сначала вставьте «Базовые стили»!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Export;
