
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import { MessageSquare, RefreshCw, Code, FileCode } from 'lucide-react';

const FeaturesChat = () => {
  const exampleConversation = [
    {
      role: "user",
      message: "How do I implement authentication in my React app?",
    },
    {
      role: "assistant",
      message: "There are several approaches to implement authentication in React. One popular option is to use a library like Auth0 or Firebase Authentication. Would you like me to explain how to set up Firebase Authentication for your React app?"
    },
    {
      role: "user",
      message: "Yes, please show me how to use Firebase Auth in React.",
    },
    {
      role: "assistant",
      message: "Here's how to set up Firebase Authentication in a React app:\n\n1. First, install the necessary packages:\n```\nnpm install firebase react-firebase-hooks\n```\n\n2. Create a firebase config file:\n```jsx\n// firebase.js\nimport { initializeApp } from 'firebase/app';\nimport { getAuth } from 'firebase/auth';\n\nconst firebaseConfig = {\n  apiKey: 'YOUR_API_KEY',\n  authDomain: 'YOUR_AUTH_DOMAIN',\n  projectId: 'YOUR_PROJECT_ID',\n  storageBucket: 'YOUR_STORAGE_BUCKET',\n  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',\n  appId: 'YOUR_APP_ID'\n};\n\nconst app = initializeApp(firebaseConfig);\nconst auth = getAuth(app);\n\nexport { auth };\n```\n\nWould you like me to continue with how to create login and registration components?"
    }
  ];

  return (
    <div className="px-12 py-10 max-w-6xl">
      <PageHeading 
        subtitle="Features" 
        title="AI Chat Assistant"
        description="Get instant answers, code examples, and guidance with Codium's intelligent chat feature."
      />
      
      <div className="mt-8 space-y-6">
        <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-codium-teal/10 rounded-lg">
              <MessageSquare size={24} className="text-codium-teal" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Context-Aware Conversations</h3>
              <p className="text-codium-text-secondary">
                Codium's chat assistant understands your project context, code structure, and development needs. 
                Ask questions about your code, get advice on best practices, or generate code snippets without leaving your editor.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">What You Can Do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-codium-teal/10 rounded-md">
                <Code size={20} className="text-codium-teal" />
              </div>
              <h3 className="text-lg font-semibold">Code Generation</h3>
            </div>
            <p className="text-codium-text-secondary">
              Ask the chat to generate code snippets, complete functions, or implement specific features in your preferred language.
            </p>
            <div className="mt-4 bg-codium-hover-bg p-3 rounded-md">
              <p className="text-xs text-codium-teal mb-1.5">Example: "Generate a React component for a responsive navigation bar"</p>
            </div>
          </div>
          
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-codium-teal/10 rounded-md">
                <FileCode size={20} className="text-codium-teal" />
              </div>
              <h3 className="text-lg font-semibold">Code Explanation</h3>
            </div>
            <p className="text-codium-text-secondary">
              Get detailed explanations of complex code blocks, functions, or algorithms to better understand your codebase.
            </p>
            <div className="mt-4 bg-codium-hover-bg p-3 rounded-md">
              <p className="text-xs text-codium-teal mb-1.5">Example: "Explain how this useReducer hook works"</p>
            </div>
          </div>
          
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-codium-teal/10 rounded-md">
                <RefreshCw size={20} className="text-codium-teal" />
              </div>
              <h3 className="text-lg font-semibold">Code Refactoring</h3>
            </div>
            <p className="text-codium-text-secondary">
              Ask for suggestions on how to refactor existing code to improve performance, readability, or maintainability.
            </p>
            <div className="mt-4 bg-codium-hover-bg p-3 rounded-md">
              <p className="text-xs text-codium-teal mb-1.5">Example: "Refactor this function to use async/await instead of promises"</p>
            </div>
          </div>
          
          <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-codium-teal/10 rounded-md">
                <MessageSquare size={20} className="text-codium-teal" />
              </div>
              <h3 className="text-lg font-semibold">General Help</h3>
            </div>
            <p className="text-codium-text-secondary">
              Get answers to programming questions, best practices, debugging help, and guidance on project architecture.
            </p>
            <div className="mt-4 bg-codium-hover-bg p-3 rounded-md">
              <p className="text-xs text-codium-teal mb-1.5">Example: "What's the best way to handle state in a large React application?"</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-6">Example Conversation</h2>
        
        <div className="bg-codium-dark-gray border border-codium-border rounded-lg overflow-hidden">
          <div className="border-b border-codium-border p-4">
            <h3 className="font-medium">Chat with Codium Assistant</h3>
          </div>
          
          <div className="p-4 max-h-96 overflow-y-auto space-y-6">
            {exampleConversation.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-4 ${message.role === 'user' ? 'bg-codium-teal/20 text-white' : 'bg-codium-hover-bg text-codium-text-secondary'}`}>
                  <div className="text-xs mb-1 text-codium-text-secondary">
                    {message.role === 'user' ? 'You' : 'Codium Assistant'}
                  </div>
                  <div className="text-sm whitespace-pre-wrap">
                    {message.message.split('```').map((part, i) => 
                      i % 2 === 0 ? 
                        <span key={i}>{part}</span> : 
                        <div key={i} className="bg-codium-dark-gray p-2 rounded my-2 font-mono text-xs">{part}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-codium-border p-4">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Ask something..."
                className="flex-1 bg-codium-hover-bg border border-codium-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-codium-teal"
              />
              <button className="bg-codium-teal text-black px-4 py-2 rounded-md text-sm font-medium">
                Send
              </button>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-10 mb-4">Key Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Faster Problem Solving</h3>
            <p className="text-sm text-codium-text-secondary">
              Get immediate answers to your coding questions without leaving your development environment.
            </p>
          </div>
          
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Project-Specific Help</h3>
            <p className="text-sm text-codium-text-secondary">
              The assistant understands your project structure and can provide tailored advice for your specific codebase.
            </p>
          </div>
          
          <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
            <p className="text-sm text-codium-text-secondary">
              Each interaction helps you learn new coding techniques and best practices while getting your work done.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesChat;
