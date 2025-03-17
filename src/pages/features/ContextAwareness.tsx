
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import { Eye, GitBranch, Server, Folder } from 'lucide-react';

const FeaturesContextAwareness = () => {
  return (
    <div className="px-12 py-10 max-w-6xl">
      <PageHeading 
        subtitle="Features" 
        title="Context Awareness"
        description="Experience a smarter AI assistant that understands your project context and codebase."
      />
      
      <div className="mt-8 space-y-6">
        <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-devscribe-teal/10 rounded-lg">
              <Eye size={24} className="text-devscribe-teal" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Deep Code Understanding</h3>
              <p className="text-devscribe-text-secondary">
                Devscribe's context awareness feature allows the AI to understand your entire codebase - from project structure and dependencies 
                to coding patterns and standards. This enables more relevant suggestions, accurate code generation, and tailored assistance.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">How Context Awareness Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center p-3 bg-devscribe-hover-bg rounded-full mb-3">
                <Folder size={24} className="text-devscribe-teal" />
              </div>
              <h3 className="text-lg font-semibold">Code Indexing</h3>
            </div>
            <p className="text-sm text-devscribe-text-secondary text-center">
              Continuously analyzes and indexes your codebase to understand its structure, dependencies, and patterns.
            </p>
          </div>
          
          <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center p-3 bg-devscribe-hover-bg rounded-full mb-3">
                <GitBranch size={24} className="text-devscribe-teal" />
              </div>
              <h3 className="text-lg font-semibold">Version Control</h3>
            </div>
            <p className="text-sm text-devscribe-text-secondary text-center">
              Integrates with your version control system to understand project history and collaborative changes.
            </p>
          </div>
          
          <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center p-3 bg-devscribe-hover-bg rounded-full mb-3">
                <Server size={24} className="text-devscribe-teal" />
              </div>
              <h3 className="text-lg font-semibold">Dependency Analysis</h3>
            </div>
            <p className="text-sm text-devscribe-text-secondary text-center">
              Recognizes external libraries and frameworks to provide recommendations aligned with your tech stack.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Key Benefits</h2>
        
        <div className="space-y-4">
          <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Project-Specific Suggestions</h3>
            <p className="text-devscribe-text-secondary">
              Receive code suggestions and completions that match your existing code style, naming conventions, and architectural patterns.
            </p>
            <div className="mt-4 bg-devscribe-dark-gray p-3 rounded-md">
              <p className="text-xs text-devscribe-text-secondary">
                If your project uses React with function components and hooks, Devscribe will suggest new components following the same pattern rather than class-based components.
              </p>
            </div>
          </div>
          
          <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Import Intelligence</h3>
            <p className="text-devscribe-text-secondary">
              Automatically suggests and adds the correct imports based on project dependencies and existing code patterns.
            </p>
            <div className="mt-4 bg-devscribe-dark-gray p-3 rounded-md">
              <p className="text-xs text-devscribe-text-secondary">
                When you use a component like <code className="text-devscribe-teal">Button</code> from your project's UI library, Devscribe will automatically add the correct import from your component library.
              </p>
            </div>
          </div>
          
          <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Smarter Code Navigation</h3>
            <p className="text-devscribe-text-secondary">
              Quickly locate related code, find usages, and understand connections between different parts of your codebase.
            </p>
            <div className="mt-4 bg-devscribe-dark-gray p-3 rounded-md">
              <p className="text-xs text-devscribe-text-secondary">
                Ask "Where is the authentication logic used?" and Devscribe will show you all the files and components that interact with your auth system.
              </p>
            </div>
          </div>
          
          <div className="bg-devscribe-hover-bg border border-devscribe-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Bug Detection</h3>
            <p className="text-devscribe-text-secondary">
              Identify potential issues by understanding the intended behavior of your code in context of the entire project.
            </p>
            <div className="mt-4 bg-devscribe-dark-gray p-3 rounded-md">
              <p className="text-xs text-devscribe-text-secondary">
                Devscribe can detect that you're using an outdated API method from another file in your project, or that a state update may cause an infinite render loop.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Example: Context-Aware Code Assistance</h2>
        
        <div className="bg-devscribe-dark-gray border border-devscribe-border rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Project Context</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-sm font-medium mb-2">Project Structure</h4>
              <pre className="text-xs font-mono bg-devscribe-hover-bg p-3 rounded-md overflow-x-auto">
                <code className="text-devscribe-text-secondary">
{`src/
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Form.tsx
├── hooks/
│   ├── useAuth.ts
│   └── useForm.ts
├── pages/
│   ├── Login.tsx
│   └── Dashboard.tsx
└── utils/
    └── validation.ts`}
                </code>
              </pre>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Project Patterns</h4>
              <pre className="text-xs font-mono bg-devscribe-hover-bg p-3 rounded-md overflow-x-auto">
                <code className="text-devscribe-text-secondary">
{`// Components use functional style with TypeScript
// Authentication uses your custom useAuth hook
// Form validation uses your validation.ts utilities`}
                </code>
              </pre>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-4">Context-Aware Assistance</h3>
          <div className="space-y-4">
            <div className="bg-devscribe-hover-bg p-4 rounded-md">
              <p className="text-sm font-medium mb-1">Request:</p>
              <p className="text-sm text-devscribe-text-secondary">"Create a registration form"</p>
            </div>
            
            <div className="bg-devscribe-hover-bg p-4 rounded-md">
              <p className="text-sm font-medium mb-1">Context-Aware Response:</p>
              <pre className="text-xs font-mono overflow-x-auto">
                <code className="text-devscribe-text-secondary">
{`import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Form } from '../components/Form';
import { useForm } from '../hooks/useForm';
import { useAuth } from '../hooks/useAuth';
import { validateEmail, validatePassword } from '../utils/validation';

const Registration = () => {
  const { register } = useAuth();
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate: (values) => {
      const errors = {};
      
      if (!validateEmail(values.email)) {
        errors.email = 'Please enter a valid email address';
      }
      
      if (!validatePassword(values.password)) {
        errors.password = 'Password must be at least 8 characters with one number and one special character';
      }
      
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
      
      return errors;
    },
    onSubmit: async (values) => {
      await register(values.email, values.password);
    }
  });

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      
      <Input
        type="email"
        name="email"
        label="Email Address"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
      
      <Input
        type="password"
        name="password"
        label="Password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />
      
      <Input
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />
      
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default Registration;`}
                </code>
              </pre>
            </div>
          </div>
          
          <p className="text-xs text-devscribe-text-secondary mt-4">
            Notice how Devscribe generated code that uses your existing components, hooks, and validation utilities in a way that matches your project patterns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContextAwareness;
