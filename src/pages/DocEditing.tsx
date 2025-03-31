import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import InfoBox from '../components/ui/InfoBox';
import TableOfContents from '../components/ui/TableOfContents';
import { Code, Copy, Check } from 'lucide-react';

const DocEditing = () => {
  const tocItems = [
    { id: 'basics', title: 'Basics' },
    { id: 'formatting', title: 'Formatting' },
    { id: 'advanced', title: 'Advanced Features' },
    { id: 'keyboard-shortcuts', title: 'Keyboard Shortcuts' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Essentials" 
          title="Document Editing"
          description="Learn how to efficiently edit and format your documents in Devscribe."
        />
        
        <InfoBox>
          Devscribe's document editor is designed to be intuitive and powerful, with AI-assisted features to help you write better documentation.
        </InfoBox>
        
        <section id="basics" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Basics</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Creating a New Document</h3>
              <p className="text-devscribe-text-secondary mb-4">
                To create a new document, click on the "New Document" button in the top navigation bar or use the keyboard shortcut <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+N</kbd> (Windows/Linux) or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+N</kbd> (Mac).
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Saving Documents</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe automatically saves your documents as you type. You can also manually save by pressing <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+S</kbd> (Windows/Linux) or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+S</kbd> (Mac).
              </p>
            </div>
          </div>
        </section>
        
        <section id="formatting" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Formatting</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Text Formatting</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe supports rich text formatting including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li><strong>Bold</strong>: Select text and press <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+B</kbd> or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+B</kbd></li>
                <li><em>Italic</em>: Select text and press <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+I</kbd> or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+I</kbd></li>
                <li><u>Underline</u>: Select text and press <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+U</kbd> or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+U</kbd></li>
                <li><code>Code</code>: Select text and press <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+`</kbd> or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+`</kbd></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Headings</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Create headings by using the # symbol followed by a space:
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <p className="font-mono text-sm">
                  # Heading 1<br />
                  ## Heading 2<br />
                  ### Heading 3
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Lists</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Create ordered and unordered lists:
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <p className="font-mono text-sm">
                  - Unordered list item<br />
                  - Another item<br />
                  <br />
                  1. Ordered list item<br />
                  2. Another ordered item
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="advanced" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">AI-Assisted Editing</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe offers AI-powered suggestions as you type. Press <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Tab</kbd> to accept a suggestion or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Esc</kbd> to dismiss it.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Tables</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Create tables using the following syntax:
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <p className="font-mono text-sm">
                  | Header 1 | Header 2 |<br />
                  | -------- | -------- |<br />
                  | Cell 1   | Cell 2   |<br />
                  | Cell 3   | Cell 4   |
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Embedding Content</h3>
              <p className="text-devscribe-text-secondary mb-4">
                You can embed various types of content in your documents:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li>Images: Use the image button in the toolbar or drag and drop an image</li>
                <li>Videos: Paste a YouTube or Vimeo URL</li>
                <li>Code snippets: Use the code block button or triple backticks</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="keyboard-shortcuts" className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Keyboard Shortcuts</h2>
          
          <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-devscribe-border">
                  <th className="text-left py-2 px-4">Action</th>
                  <th className="text-left py-2 px-4">Windows/Linux</th>
                  <th className="text-left py-2 px-4">Mac</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-devscribe-border">
                  <td className="py-2 px-4">New Document</td>
                  <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+N</kbd></td>
                  <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+N</kbd></td>
                </tr>
                <tr className="border-b border-devscribe-border">
                  <td className="py-2 px-4">Save</td>
                  <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+S</kbd></td>
                  <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+S</kbd></td>
                </tr>
                <tr className="border-b border-devscribe-border">
                  <td className="py-2 px-4">Find</td>
                  <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+F</kbd></td>
                  <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+F</kbd></td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Toggle Preview</td>
                  <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">Ctrl+P</kbd></td>
                  <td className="py-2 px-4"><kbd className="px-2 py-0.5 bg-devscribe-hover-bg rounded border border-devscribe-border">⌘+P</kbd></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex items-center justify-between p-4 bg-devscribe-card-bg border border-devscribe-border rounded-lg">
            <div className="flex items-center gap-2">
              <Code size={20} className="text-white" />
              <span>Want to see all keyboard shortcuts?</span>
            </div>
            <button className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-colors flex items-center gap-2">
              <Copy size={16} />
              <span>View All Shortcuts</span>
            </button>
          </div>
        </section>
      </div>
      
      <div className="w-64 px-6 py-10">
        <TableOfContents items={tocItems} />
      </div>
    </div>
  );
};

export default DocEditing; 