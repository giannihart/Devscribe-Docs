import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import InfoBox from '../components/ui/InfoBox';
import TableOfContents from '../components/ui/TableOfContents';
import { Code, GitBranch, Package, Puzzle, Terminal, FileCode } from 'lucide-react';

const Development = () => {
  const tocItems = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'architecture', title: 'Architecture' },
    { id: 'plugin-development', title: 'Plugin Development' },
    { id: 'api-reference', title: 'API Reference' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Get Started" 
          title="Development"
          description="Learn how to extend Devscribe with plugins and integrations."
        />
        
        <InfoBox>
          This guide is intended for developers who want to build extensions, plugins, or integrate with the Devscribe platform.
        </InfoBox>
        
        <section id="getting-started" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Development Environment Setup</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Before you begin developing for Devscribe, you'll need to set up your development environment:
              </p>
              <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-devscribe-teal flex items-center justify-center text-black font-medium">1</div>
                  <div>
                    <div className="font-medium">Install Node.js and npm</div>
                    <p className="text-sm text-devscribe-text-secondary mt-1">Devscribe development requires Node.js 16 or later and npm 7+</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-devscribe-teal flex items-center justify-center text-black font-medium">2</div>
                  <div>
                    <div className="font-medium">Install the Devscribe CLI</div>
                    <p className="text-sm text-devscribe-text-secondary mt-1">Run <code className="px-2 py-0.5 bg-devscribe-hover-bg rounded">npm install -g @devscribe/cli</code> to install the command-line tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-devscribe-teal flex items-center justify-center text-black font-medium">3</div>
                  <div>
                    <div className="font-medium">Create a new project</div>
                    <p className="text-sm text-devscribe-text-secondary mt-1">Run <code className="px-2 py-0.5 bg-devscribe-hover-bg rounded">devscribe create-plugin my-plugin</code> to scaffold a new plugin project</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-devscribe-teal flex items-center justify-center text-black font-medium">4</div>
                  <div>
                    <div className="font-medium">Start development server</div>
                    <p className="text-sm text-devscribe-text-secondary mt-1">Run <code className="px-2 py-0.5 bg-devscribe-hover-bg rounded">npm run dev</code> in your project directory to start the development server</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Project Structure</h3>
              <p className="text-devscribe-text-secondary mb-4">
                A typical Devscribe plugin project has the following structure:
              </p>
              <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <pre className="font-mono text-sm text-white">
{`my-plugin/
├── src/
│   ├── index.ts         # Main entry point
│   ├── commands/        # Custom commands
│   ├── components/      # React components
│   └── utils/           # Helper functions
├── package.json         # Dependencies and metadata
├── tsconfig.json        # TypeScript configuration
├── devscribe.json       # Plugin configuration
└── README.md            # Documentation`}
                </pre>
              </div>
            </div>
          </div>
        </section>
        
        <section id="architecture" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Plugin System Overview</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Devscribe's plugin system is designed to be modular and extensible. Here's how it works:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Puzzle size={18} className="text-devscribe-teal" />
                    Extension Points
                  </h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Predefined areas where plugins can add functionality, such as commands, UI elements, and document processors.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Code size={18} className="text-devscribe-teal" />
                    API Surface
                  </h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    A set of stable APIs that plugins can use to interact with the Devscribe core.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Package size={18} className="text-devscribe-teal" />
                    Plugin Manifest
                  </h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    A JSON file that defines the plugin's metadata, capabilities, and required permissions.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <GitBranch size={18} className="text-devscribe-teal" />
                    Lifecycle Hooks
                  </h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Events that plugins can listen to, such as activation, deactivation, and document changes.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Core Concepts</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Understanding these core concepts will help you build effective plugins:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-1">Commands</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Functions that can be executed by users through the command palette or keyboard shortcuts.
                  </p>
                </div>
                <div className="p-3 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-1">Views</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    UI components that can be added to various parts of the Devscribe interface.
                  </p>
                </div>
                <div className="p-3 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-1">Document Providers</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Components that can read, write, or process document content.
                  </p>
                </div>
                <div className="p-3 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-1">Settings</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    User-configurable options that your plugin can define and access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="plugin-development" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Plugin Development</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Creating Your First Plugin</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Let's walk through creating a simple plugin that adds a new command:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1. Define the plugin manifest</h4>
                  <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                    <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                      <FileCode size={14} />
                      <span>devscribe.json</span>
                    </div>
                    <pre className="font-mono text-sm text-white">
{`{
  "name": "my-hello-world",
  "displayName": "Hello World",
  "description": "A simple hello world plugin",
  "version": "1.0.0",
  "engines": {
    "devscribe": "^1.0.0"
  },
  "activationEvents": [
    "onCommand:myHelloWorld.sayHello"
  ],
  "contributes": {
    "commands": [
      {
        "command": "myHelloWorld.sayHello",
        "title": "Say Hello"
      }
    ]
  },
  "main": "./dist/extension.js"
}`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Implement the plugin logic</h4>
                  <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                    <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                      <FileCode size={14} />
                      <span>src/index.ts</span>
                    </div>
                    <pre className="font-mono text-sm text-white">
{`import * as devscribe from '@devscribe/api';

export function activate(context: devscribe.ExtensionContext) {
  // Register a command that shows a notification
  const disposable = devscribe.commands.registerCommand(
    'myHelloWorld.sayHello', 
    () => {
      devscribe.window.showNotification(
        'Hello from My Plugin!', 
        'info'
      );
    }
  );

  // Add the command to the context's subscriptions
  context.subscriptions.push(disposable);
}

export function deactivate() {
  // Clean up resources when the plugin is deactivated
}`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">3. Build and test your plugin</h4>
                  <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                    <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                      <Terminal size={14} />
                      <span>Terminal</span>
                    </div>
                    <pre className="font-mono text-sm text-white">
{`# Build the plugin
npm run build

# Package the plugin
devscribe package

# Install the plugin for testing
devscribe install-plugin ./my-hello-world-1.0.0.vsix`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Adding UI Components</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Plugins can add custom UI components to extend the Devscribe interface:
              </p>
              <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                  <FileCode size={14} />
                  <span>src/components/SidebarView.tsx</span>
                </div>
                <pre className="font-mono text-sm text-white">
{`import * as React from 'react';
import * as devscribe from '@devscribe/api';

export class SidebarView extends React.Component {
  render() {
    return (
      <div className="my-sidebar-view">
        <h3>My Plugin Sidebar</h3>
        <button 
          onClick={() => {
            devscribe.commands.executeCommand(
              'myHelloWorld.sayHello'
            );
          }}
        >
          Say Hello
        </button>
      </div>
    );
  }
}`}
                </pre>
              </div>
              <p className="text-devscribe-text-secondary mt-4 mb-4">
                Register the UI component in your plugin's activation function:
              </p>
              <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <pre className="font-mono text-sm text-white">
{`// In your activate function
const view = devscribe.window.registerView(
  'sidebar',
  'myPlugin.sidebarView',
  {
    title: 'My Plugin',
    component: SidebarView
  }
);
context.subscriptions.push(view);`}
                </pre>
              </div>
            </div>
          </div>
        </section>
        
        <section id="api-reference" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Core APIs</h3>
              <p className="text-devscribe-text-secondary mb-4">
                These are the main APIs available to plugin developers:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-devscribe-card-bg">
                      <th className="py-2 px-4 text-left border-b border-devscribe-border">API</th>
                      <th className="py-2 px-4 text-left border-b border-devscribe-border">Description</th>
                      <th className="py-2 px-4 text-left border-b border-devscribe-border">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4"><code>commands</code></td>
                      <td className="py-2 px-4">Register and execute commands</td>
                      <td className="py-2 px-4"><code>devscribe.commands.executeCommand('id')</code></td>
                    </tr>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4"><code>window</code></td>
                      <td className="py-2 px-4">UI-related functionality</td>
                      <td className="py-2 px-4"><code>devscribe.window.showNotification('msg')</code></td>
                    </tr>
                    <tr className="border-b border-devscribe-border">
                      <td className="py-2 px-4"><code>workspace</code></td>
                      <td className="py-2 px-4">Access to documents and settings</td>
                      <td className="py-2 px-4"><code>devscribe.workspace.getDocuments()</code></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4"><code>storage</code></td>
                      <td className="py-2 px-4">Persistent storage for plugin data</td>
                      <td className="py-2 px-4"><code>devscribe.storage.setValue('key', value)</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Event Handling</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Plugins can subscribe to various events to respond to user actions and system changes:
              </p>
              <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <pre className="font-mono text-sm text-white">
{`// Listen for document changes
const disposable = devscribe.workspace.onDidChangeDocument(
  (event) => {
    console.log('Document changed:', event.document.uri);
  }
);

// Listen for selection changes
const selectionDisposable = devscribe.window.onDidChangeTextEditorSelection(
  (event) => {
    console.log('Selection changed:', event.selections);
  }
);

// Remember to add disposables to your context
context.subscriptions.push(disposable, selectionDisposable);`}
                </pre>
              </div>
            </div>
          </div>
        </section>
        
        <section id="best-practices" className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Performance Considerations</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Follow these guidelines to ensure your plugin performs well:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li>Activate your plugin only when needed using activation events</li>
                <li>Use async/await for operations that might take time</li>
                <li>Debounce event handlers that might fire frequently</li>
                <li>Dispose of resources when they're no longer needed</li>
                <li>Minimize DOM operations in UI components</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Security Guidelines</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Keep your plugin secure by following these practices:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">Request Minimal Permissions</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Only request the permissions your plugin actually needs to function.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">Validate User Input</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Always validate and sanitize any user input before processing it.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">Secure API Keys</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Never hardcode API keys; use the secure storage API instead.
                  </p>
                </div>
                <div className="p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                  <h4 className="font-medium mb-2">Use HTTPS</h4>
                  <p className="text-sm text-devscribe-text-secondary">
                    Always use HTTPS for any external API calls from your plugin.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Publishing Your Plugin</h3>
              <p className="text-devscribe-text-secondary mb-4">
                When you're ready to share your plugin with the world:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-devscribe-text-secondary">
                <li>Ensure your plugin follows all guidelines and best practices</li>
                <li>Write comprehensive documentation for users</li>
                <li>Package your plugin using <code className="px-2 py-0.5 bg-devscribe-hover-bg rounded">devscribe package</code></li>
                <li>Create an account on the Devscribe Marketplace</li>
                <li>Submit your plugin for review</li>
                <li>Respond to feedback and iterate on your plugin</li>
              </ol>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Code size={20} className="text-devscribe-teal" />
              <h3 className="text-lg font-semibold">Ready to build your plugin?</h3>
            </div>
            <p className="text-devscribe-text-secondary mb-4">
              Check out our sample plugins and join the developer community to get help and share your creations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://github.com/devscribe/plugin-samples" className="px-4 py-2 bg-devscribe-teal text-black rounded-md font-medium hover:bg-devscribe-teal/90 transition-colors">
                Sample Plugins
              </a>
              <a href="/community" className="px-4 py-2 bg-transparent border border-devscribe-border text-white rounded-md font-medium hover:bg-devscribe-hover-bg transition-colors">
                Developer Forum
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

export default Development; 