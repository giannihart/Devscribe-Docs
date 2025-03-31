import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import InfoBox from '../components/ui/InfoBox';
import TableOfContents from '../components/ui/TableOfContents';
import { Code, Copy, Terminal, Play } from 'lucide-react';

const CodeBlocks = () => {
  const tocItems = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'syntax-highlighting', title: 'Syntax Highlighting' },
    { id: 'interactive-code', title: 'Interactive Code' },
    { id: 'advanced-features', title: 'Advanced Features' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Essentials" 
          title="Code Blocks"
          description="Learn how to create, format, and use interactive code blocks in Devscribe."
        />
        
        <InfoBox>
          Code blocks in Devscribe support over 70 programming languages with syntax highlighting, interactive execution, and AI-powered code suggestions.
        </InfoBox>
        
        <section id="introduction" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Creating Code Blocks</h3>
              <p className="text-devscribe-text-secondary mb-4">
                There are multiple ways to create code blocks in Devscribe:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li>Use triple backticks (```) to start and end a code block</li>
                <li>Click the code block button in the toolbar</li>
                <li>Use the keyboard shortcut <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+Shift+C</kbd> or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+Shift+C</kbd></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Basic Example</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Here's a simple JavaScript code block example:
              </p>
              <div className="relative">
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <button className="p-1.5 rounded-md hover:bg-devscribe-hover-bg transition-colors">
                    <Copy size={16} className="text-devscribe-text-secondary" />
                  </button>
                  <button className="p-1.5 rounded-md hover:bg-devscribe-hover-bg transition-colors">
                    <Play size={16} className="text-devscribe-text-secondary" />
                  </button>
                </div>
                <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border font-mono text-sm">
                  <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                    <Code size={14} />
                    <span>JavaScript</span>
                  </div>
                  <pre className="text-white">
{`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('Devscribe User'));`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="syntax-highlighting" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Syntax Highlighting</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Supported Languages</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe supports syntax highlighting for over 70 programming languages. Specify the language after the opening triple backticks:
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border font-mono text-sm">
                <pre className="text-white">
{`\`\`\`python
def hello_world():
    print("Hello, World!")

hello_world()
\`\`\``}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Theme Customization</h3>
              <p className="text-devscribe-text-secondary mb-4">
                You can customize the syntax highlighting theme in your settings. Devscribe offers several built-in themes including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li>Dark (default)</li>
                <li>Light</li>
                <li>Monokai</li>
                <li>GitHub</li>
                <li>Dracula</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="interactive-code" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Interactive Code</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Running Code</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe allows you to run code directly in the editor for supported languages. Click the play button in the top-right corner of a code block to execute it.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Interactive Example</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Here's an example of an interactive Python code block:
              </p>
              <div className="relative">
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <button className="p-1.5 rounded-md hover:bg-devscribe-hover-bg transition-colors">
                    <Copy size={16} className="text-devscribe-text-secondary" />
                  </button>
                  <button className="p-1.5 rounded-md hover:bg-devscribe-hover-bg transition-colors">
                    <Play size={16} className="text-white" />
                  </button>
                </div>
                <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border font-mono text-sm">
                  <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                    <Code size={14} />
                    <span>Python</span>
                  </div>
                  <pre className="text-white">
{`import random

def roll_dice():
    return random.randint(1, 6)

result = roll_dice()
print(f"You rolled a {result}")`}
                  </pre>
                  <div className="mt-4 pt-4 border-t border-devscribe-border">
                    <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                      <Terminal size={14} />
                      <span>Output</span>
                    </div>
                    <pre className="text-devscribe-text-secondary">
                      You rolled a 4
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Supported Runtimes</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe supports running code in the following languages:
              </p>
              <ul className="grid grid-cols-2 gap-2 pl-6 list-disc text-devscribe-text-secondary">
                <li>JavaScript</li>
                <li>Python</li>
                <li>Ruby</li>
                <li>PHP</li>
                <li>Go</li>
                <li>Rust</li>
                <li>Java</li>
                <li>C#</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="advanced-features" className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Line Highlighting</h3>
              <p className="text-devscribe-text-secondary mb-4">
                You can highlight specific lines in your code blocks by adding line numbers after the language:
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border font-mono text-sm">
                <pre className="text-white">
{`\`\`\`javascript{2,4-6}
function calculateTotal(items) {
  // This line will be highlighted
  let total = 0;
  // These lines will be highlighted
  for (const item of items) {
    total += item.price;
  }
  return total;
}
\`\`\``}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Code Folding</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe supports code folding for longer code blocks. Click the arrows in the gutter to collapse or expand sections of code.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">AI Code Suggestions</h3>
              <p className="text-devscribe-text-secondary mb-4">
                When editing code blocks, Devscribe provides AI-powered code suggestions. Press <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Tab</kbd> to accept a suggestion.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Need more help?</h3>
            <p className="text-devscribe-text-secondary mb-4">
              Check out our comprehensive documentation on code blocks or ask the community for assistance.
            </p>
            <div className="flex items-center gap-4">
              <a href="/documentation" className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-colors">
                View Documentation
              </a>
              <a href="/community" className="px-4 py-2 bg-transparent border border-devscribe-border text-white rounded-md font-medium hover:bg-devscribe-hover-bg transition-colors">
                Join Community
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <div className="w-64 px-6 py-10">
        <TableOfContents items={tocItems} />
      </div>
    </div>
  );
};

export default CodeBlocks; 