
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import { Command as CommandIcon, Keyboard, RefreshCw, GitPullRequest } from 'lucide-react';

const FeaturesCommand = () => {
  const commands = [
    {
      command: "/refactor",
      description: "Refactor the selected code based on best practices",
      example: "/refactor --pattern=factory"
    },
    {
      command: "/explain",
      description: "Get an explanation of how the selected code works",
      example: "/explain --detailed"
    },
    {
      command: "/optimize",
      description: "Optimize the selected code for better performance",
      example: "/optimize --target=memory"
    },
    {
      command: "/test",
      description: "Generate unit tests for the selected code",
      example: "/test --framework=jest"
    },
    {
      command: "/docs",
      description: "Generate documentation for the selected code",
      example: "/docs --format=jsdoc"
    },
    {
      command: "/fix",
      description: "Fix bugs or issues in the selected code",
      example: "/fix --strict"
    }
  ];

  return (
    <div className="px-12 py-10 max-w-6xl">
      <PageHeading 
        subtitle="Features" 
        title="Command Palette"
        description="Boost your productivity with Devscribe's powerful command palette for quick access to AI features."
      />
      
      <div className="mt-8 space-y-6">
        <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-devscribe-teal/10 rounded-lg">
              <CommandIcon size={24} className="text-devscribe-teal" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Powerful AI Commands at Your Fingertips</h3>
              <p className="text-devscribe-text-secondary">
                Devscribe's Command Palette gives you quick access to AI-powered coding features through simple commands. 
                Transform, understand, and improve your code with just a few keystrokes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 my-10 text-sm text-devscribe-text-secondary">
          <Keyboard size={16} className="text-devscribe-teal" />
          <span>Press</span>
          <kbd className="px-2 py-1 bg-devscribe-dark-gray border border-devscribe-border rounded">Ctrl</kbd>
          <span>+</span>
          <kbd className="px-2 py-1 bg-devscribe-dark-gray border border-devscribe-border rounded">Shift</kbd>
          <span>+</span>
          <kbd className="px-2 py-1 bg-devscribe-dark-gray border border-devscribe-border rounded">P</kbd>
          <span>to open the Command Palette</span>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Available Commands</h2>
        
        <div className="overflow-hidden border border-devscribe-border rounded-lg">
          <table className="w-full">
            <thead className="bg-devscribe-hover-bg border-b border-devscribe-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Command</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-devscribe-border">
              {commands.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-devscribe-dark-gray" : ""}>
                  <td className="px-6 py-4 font-mono text-sm text-devscribe-teal">{item.command}</td>
                  <td className="px-6 py-4 text-sm">{item.description}</td>
                  <td className="px-6 py-4 font-mono text-xs text-devscribe-text-secondary">{item.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Use Cases</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-devscribe-teal/10 rounded-md">
                <RefreshCw size={20} className="text-devscribe-teal" />
              </div>
              <h3 className="text-lg font-semibold">Code Refactoring</h3>
            </div>
            <p className="text-devscribe-text-secondary mb-4">
              Select code that needs improvement, then use the <span className="font-mono text-devscribe-teal">/refactor</span> command to transform it into cleaner, more maintainable code.
            </p>
            <div className="bg-devscribe-hover-bg p-4 rounded-md">
              <p className="text-xs text-devscribe-text-secondary mb-2">Before:</p>
              <pre className="font-mono text-xs mb-3">
                <code className="text-devscribe-text-secondary">
{`function processData(data) {
  var result = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].active === true) {
      result.push({
        name: data[i].name,
        value: data[i].value * 2
      });
    }
  }
  return result;
}`}
                </code>
              </pre>
              <p className="text-xs text-devscribe-text-secondary mb-2">After <span className="font-mono text-devscribe-teal">/refactor</span>:</p>
              <pre className="font-mono text-xs">
                <code className="text-devscribe-text-secondary">
{`const processData = (data) => 
  data
    .filter(item => item.active)
    .map(item => ({
      name: item.name,
      value: item.value * 2
    }));`}
                </code>
              </pre>
            </div>
          </div>
          
          <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-devscribe-teal/10 rounded-md">
                <GitPullRequest size={20} className="text-devscribe-teal" />
              </div>
              <h3 className="text-lg font-semibold">Test Generation</h3>
            </div>
            <p className="text-devscribe-text-secondary mb-4">
              Write better quality code by using the <span className="font-mono text-devscribe-teal">/test</span> command to generate comprehensive tests for your functions and components.
            </p>
            <div className="bg-devscribe-hover-bg p-4 rounded-md">
              <p className="text-xs text-devscribe-text-secondary mb-2">Function to test:</p>
              <pre className="font-mono text-xs mb-3">
                <code className="text-devscribe-text-secondary">
{`function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}`}
                </code>
              </pre>
              <p className="text-xs text-devscribe-text-secondary mb-2">After <span className="font-mono text-devscribe-teal">/test --framework=jest</span>:</p>
              <pre className="font-mono text-xs">
                <code className="text-devscribe-text-secondary">
{`describe('validateEmail', () => {
  test('should return true for valid email addresses', () => {
    expect(validateEmail('user@example.com')).toBe(true);
    expect(validateEmail('name.surname@domain.co')).toBe(true);
    expect(validateEmail('user-name@domain.com')).toBe(true);
  });

  test('should return false for invalid email addresses', () => {
    expect(validateEmail('user@domain')).toBe(false);
    expect(validateEmail('user@.com')).toBe(false);
    expect(validateEmail('user@domain.')).toBe(false);
    expect(validateEmail('@domain.com')).toBe(false);
    expect(validateEmail('user@')).toBe(false);
    expect(validateEmail('user')).toBe(false);
    expect(validateEmail('')).toBe(false);
  });
});`}
                </code>
              </pre>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Custom Commands</h2>
        <p className="text-devscribe-text-secondary mb-6">
          You can define your own custom commands to automate repetitive tasks or create workflows specific to your project needs.
        </p>
        
        <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Creating Custom Commands</h3>
          <p className="text-sm text-devscribe-text-secondary mb-4">
            Custom commands can be defined in your <span className="font-mono">.devscribe/commands.json</span> file:
          </p>
          
          <pre className="bg-devscribe-hover-bg p-4 rounded-md font-mono text-xs overflow-x-auto">
            <code className="text-devscribe-text-secondary">
{`{
  "customCommands": [
    {
      "name": "createComponent",
      "description": "Generate a new React component",
      "command": "/create-component",
      "template": {
        "type": "react-functional",
        "path": "src/components/{{name}}.tsx",
        "styles": "{{stylesType}}"
      }
    },
    {
      "name": "generateAPI",
      "description": "Generate API endpoint code",
      "command": "/api",
      "template": {
        "type": "rest-api",
        "method": "{{method}}",
        "path": "src/api/{{name}}.ts"
      }
    }
  ]
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCommand;
