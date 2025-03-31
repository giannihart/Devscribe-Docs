import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import InfoBox from '../components/ui/InfoBox';
import TableOfContents from '../components/ui/TableOfContents';
import { Scissors, Plus, Copy, Pencil, Trash2, Code } from 'lucide-react';

const Snippets = () => {
  const tocItems = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'creating-snippets', title: 'Creating Snippets' },
    { id: 'using-snippets', title: 'Using Snippets' },
    { id: 'managing-snippets', title: 'Managing Snippets' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Essentials" 
          title="Snippets"
          description="Create, use, and manage reusable code snippets to boost your productivity."
        />
        
        <InfoBox>
          Snippets allow you to store frequently used code blocks for quick reuse, saving you time and reducing repetitive typing.
        </InfoBox>
        
        <section id="introduction" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">What are Snippets?</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Snippets are reusable pieces of code that you can quickly insert into your documents. They're especially useful for code patterns, templates, or boilerplate that you use frequently.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Benefits of Using Snippets</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Using snippets in your workflow offers several advantages:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li>Save time by reusing common code patterns</li>
                <li>Maintain consistency across your codebase</li>
                <li>Reduce typing errors in repetitive code</li>
                <li>Share best practices with your team</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Types of Snippets</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe supports several types of snippets:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">User Snippets</h4>
                  <p className="text-devscribe-text-secondary text-sm">
                    Custom snippets that you create for your personal use.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">Project Snippets</h4>
                  <p className="text-devscribe-text-secondary text-sm">
                    Snippets specific to a project, shared with all project members.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">Language Snippets</h4>
                  <p className="text-devscribe-text-secondary text-sm">
                    Snippets that are available only in specific programming languages.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">Built-in Snippets</h4>
                  <p className="text-devscribe-text-secondary text-sm">
                    Pre-defined snippets that come with Devscribe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="creating-snippets" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Creating Snippets</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Creating a New Snippet</h3>
              <p className="text-devscribe-text-secondary mb-4">
                To create a new snippet, follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-devscribe-text-secondary">
                <li>Select the code you want to save as a snippet</li>
                <li>Right-click and select "Create Snippet" from the context menu</li>
                <li>Alternatively, press <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+Alt+S</kbd> (Windows/Linux) or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+Option+S</kbd> (Mac)</li>
                <li>Fill in the snippet details in the dialog that appears</li>
              </ol>
              <div className="mt-4 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-3 mb-4">
                  <Plus size={18} className="text-white" />
                  <span className="font-medium">New Snippet</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-devscribe-hover-bg border border-devscribe-border rounded-md focus:outline-none focus:ring-2 focus:ring-devscribe-teal/50"
                      placeholder="React Component"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Prefix (trigger)</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-devscribe-hover-bg border border-devscribe-border rounded-md focus:outline-none focus:ring-2 focus:ring-devscribe-teal/50"
                      placeholder="rfc"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Description</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-devscribe-hover-bg border border-devscribe-border rounded-md focus:outline-none focus:ring-2 focus:ring-devscribe-teal/50"
                      placeholder="React Functional Component"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Language</label>
                    <select className="w-full px-3 py-2 bg-devscribe-hover-bg border border-devscribe-border rounded-md focus:outline-none focus:ring-2 focus:ring-devscribe-teal/50">
                      <option value="javascript">JavaScript</option>
                      <option value="typescript">TypeScript</option>
                      <option value="jsx">JSX</option>
                      <option value="tsx">TSX</option>
                      <option value="html">HTML</option>
                      <option value="css">CSS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Snippet</label>
                    <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-md p-3 font-mono text-sm">
                      {`import React from 'react';

const $1 = ($2) => {
  return (
    <div>
      $3
    </div>
  );
};

export default $1;`}
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button className="px-4 py-2 bg-transparent border border-devscribe-border text-white rounded-md hover:bg-devscribe-hover-bg transition-colors">
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-white/90 transition-colors">
                      Save Snippet
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Snippet Variables</h3>
              <p className="text-devscribe-text-secondary mb-4">
                You can add variables to your snippets using the <code>$n</code> syntax, where <code>n</code> is a number. When you insert the snippet, you can tab through these variables to fill them in.
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-devscribe-border">
                      <th className="text-left py-2 px-4">Variable</th>
                      <th className="text-left py-2 px-4">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4"><code>$1, $2, $3, ...</code></td>
                      <td className="py-2 px-4">Tabstops, cursor will move through these in order</td>
                    </tr>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4"><code>$0</code></td>
                      <td className="py-2 px-4">Final cursor position after all tabstops</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><code>{'${1:default}'}</code></td>
                      <td className="py-2 px-4">Tabstop with default text</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="using-snippets" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Using Snippets</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Inserting Snippets</h3>
              <p className="text-devscribe-text-secondary mb-4">
                There are several ways to insert snippets into your code:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li>Type the snippet prefix and press <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Tab</kbd></li>
                <li>Open the Command Palette (<kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">Ctrl+Shift+P</kbd> or <kbd className="px-2 py-1 bg-devscribe-card-bg rounded border border-devscribe-border">⌘+Shift+P</kbd>) and type "Insert Snippet"</li>
                <li>Right-click and select "Insert Snippet" from the context menu</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Snippet Example</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Here's an example of using a React component snippet:
              </p>
              <div className="space-y-4">
                <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                  <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                    <Code size={14} />
                    <span>Type "rfc" and press Tab</span>
                  </div>
                  <pre className="font-mono text-sm text-white">
                    rfc<span className="animate-pulse">|</span>
                  </pre>
                </div>
                <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                  <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                    <Code size={14} />
                    <span>Snippet expands, cursor at first tabstop</span>
                  </div>
                  <pre className="font-mono text-sm text-white">
{`import React from 'react';

const `}<span className="bg-white/20 px-1">ComponentName</span>{` = () => {
  return (
    <div>
      
    </div>
  );
};

export default ComponentName;`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="managing-snippets" className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Managing Snippets</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Snippet Library</h3>
              <p className="text-devscribe-text-secondary mb-4">
                You can view, edit, and manage all your snippets in the Snippet Library. Access it from the Command Palette or by going to Settings {'>'}  Snippets.
              </p>
              <div className="bg-devscribe-card-bg p-4 rounded-md border border-devscribe-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Scissors size={18} className="text-white" />
                    <span className="font-medium">Snippet Library</span>
                  </div>
                  <button className="p-1.5 rounded-md hover:bg-devscribe-hover-bg transition-colors">
                    <Plus size={16} className="text-devscribe-text-secondary" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-devscribe-hover-bg rounded-md flex items-center justify-between">
                    <div>
                      <div className="font-medium">React Component</div>
                      <div className="text-xs text-devscribe-text-secondary">rfc - React Functional Component</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-md hover:bg-devscribe-card-bg transition-colors">
                        <Copy size={14} className="text-devscribe-text-secondary" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-devscribe-card-bg transition-colors">
                        <Pencil size={14} className="text-devscribe-text-secondary" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-devscribe-card-bg transition-colors">
                        <Trash2 size={14} className="text-devscribe-text-secondary" />
                      </button>
                    </div>
                  </div>
                  <div className="p-3 bg-devscribe-hover-bg rounded-md flex items-center justify-between">
                    <div>
                      <div className="font-medium">useState Hook</div>
                      <div className="text-xs text-devscribe-text-secondary">ush - React useState Hook</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-md hover:bg-devscribe-card-bg transition-colors">
                        <Copy size={14} className="text-devscribe-text-secondary" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-devscribe-card-bg transition-colors">
                        <Pencil size={14} className="text-devscribe-text-secondary" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-devscribe-card-bg transition-colors">
                        <Trash2 size={14} className="text-devscribe-text-secondary" />
                      </button>
                    </div>
                  </div>
                  <div className="p-3 bg-devscribe-hover-bg rounded-md flex items-center justify-between">
                    <div>
                      <div className="font-medium">Try-Catch Block</div>
                      <div className="text-xs text-devscribe-text-secondary">tc - Try-Catch Error Handling</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-md hover:bg-devscribe-card-bg transition-colors">
                        <Copy size={14} className="text-devscribe-text-secondary" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-devscribe-card-bg transition-colors">
                        <Pencil size={14} className="text-devscribe-text-secondary" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-devscribe-card-bg transition-colors">
                        <Trash2 size={14} className="text-devscribe-text-secondary" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Importing and Exporting Snippets</h3>
              <p className="text-devscribe-text-secondary mb-4">
                You can share snippets with others by exporting and importing them:
              </p>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-devscribe-card-bg border border-devscribe-border text-white rounded-md hover:bg-devscribe-hover-bg transition-colors flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Export Snippets</span>
                </button>
                <button className="px-4 py-2 bg-devscribe-card-bg border border-devscribe-border text-white rounded-md hover:bg-devscribe-hover-bg transition-colors flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Import Snippets</span>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Syncing Snippets</h3>
              <p className="text-devscribe-text-secondary mb-4">
                When you're signed in to your Devscribe account, your snippets are automatically synced across all your devices. You can also share snippets with your team by creating project snippets.
              </p>
              <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H9.01" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9H15.01" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Snippets are synced across all your devices</span>
                </div>
                <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-white/90 transition-colors">
                  Sync Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Need help with snippets?</h3>
            <p className="text-devscribe-text-secondary mb-4">
              Check out our comprehensive documentation or join our community forum to learn more about creating and using snippets effectively.
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

export default Snippets; 