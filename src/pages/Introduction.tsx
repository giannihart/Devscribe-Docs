import React, { useState } from 'react';
import PageNavigation from '@/components/ui/PageNavigation';
import { Code2, FileJson, Bot, CheckCircle } from 'lucide-react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import 'swagger-ui-themes/themes/3.x/theme-material.css';

const Introduction = () => {
  const [swaggerSpec, setSwaggerSpec] = useState<string | object>({
    openapi: "3.0.0",
    info: {
      title: "Your API",
      version: "1.0.0",
      description: "Paste your OpenAPI/Swagger specification here to test your APIs"
    },
    paths: {}
  });

  const [specInput, setSpecInput] = useState('');

  const handleSpecUpdate = () => {
    try {
      const parsedSpec = JSON.parse(specInput);
      setSwaggerSpec(parsedSpec);
    } catch (e) {
      alert('Invalid JSON format. Please check your specification.');
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* On this page navigation */}
      <div className="fixed right-8 top-24 w-64 hidden xl:block">
        <div className="bg-devscribe-card-bg border border-devscribe-border rounded-lg p-4">
          <h3 className="text-sm font-semibold mb-3 text-white">On this page</h3>
          <nav className="space-y-1">
            <a href="#api-testing" className="block text-sm text-devscribe-text-secondary hover:text-white">API Testing</a>
            <a href="#introduction" className="block text-sm text-devscribe-text-secondary hover:text-white">Introduction</a>
            <a href="#what-youll-learn" className="block text-sm text-devscribe-text-secondary hover:text-white">What You'll Learn</a>
            <a href="#swagger-ai-testing" className="block text-sm text-devscribe-text-secondary hover:text-white">Swagger AI Testing</a>
            <a href="#getting-started" className="block text-sm text-devscribe-text-secondary hover:text-white">Getting Started</a>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div>
        <h2 id="api-testing" className="text-3xl font-bold mb-6 text-white">API Testing</h2>
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-devscribe-text-secondary mb-6 text-lg">
            Test your APIs directly in the documentation using our integrated Swagger UI. 
            Simply paste your OpenAPI/Swagger specification below to get started.
          </p>

          <div className="bg-devscribe-card-bg border border-devscribe-border rounded-lg p-6 mb-8">
            <div className="mb-6">
              <label className="block text-white mb-2 font-semibold">Your API Specification</label>
              <textarea
                className="w-full h-48 p-4 bg-devscribe-dark-gray text-white border border-devscribe-border rounded-md font-mono text-sm"
                placeholder="Paste your OpenAPI/Swagger specification here (JSON format)"
                value={specInput}
                onChange={(e) => setSpecInput(e.target.value)}
              />
              <button
                onClick={handleSpecUpdate}
                className="mt-4 px-6 py-2 bg-devscribe-teal text-white rounded-md hover:bg-opacity-90 transition-colors font-semibold"
              >
                Update API Documentation
              </button>
            </div>
            <div className="w-full overflow-x-auto">
              <SwaggerUI 
                spec={swaggerSpec} 
                docExpansion="list"
                defaultModelsExpandDepth={-1}
                displayOperationId={true}
                displayRequestDuration={true}
              />
            </div>
          </div>
        </div>

        <h1 id="introduction" className="text-3xl font-bold mb-6 text-white">Introduction</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-devscribe-text-secondary">
            Welcome to our comprehensive guide. This introduction will help you get started 
            with our platform and understand its core principles.
          </p>
          
          <h2 id="what-youll-learn" className="text-xl font-semibold mt-6 mb-4 text-white">What You'll Learn</h2>
          <ul className="list-disc pl-6 text-devscribe-text-secondary">
            <li>The basic concepts of our platform</li>
            <li>How to navigate through the documentation</li>
            <li>Key features and capabilities</li>
            <li>How to implement AI-powered schema testing</li>
          </ul>

          <h2 id="swagger-ai-testing" className="text-xl font-semibold mt-8 mb-4 text-white">Swagger AI Testing</h2>
          <p className="text-devscribe-text-secondary mb-4">
            Our platform now integrates Swagger's AI-powered schema testing capabilities directly into your documentation workflow.
            This allows you to automatically validate your API schemas and ensure they meet best practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="feature-card">
              <div className="flex items-start mb-4">
                <FileJson className="w-6 h-6 text-devscribe-teal mr-3" />
                <h3 className="text-lg font-semibold text-white">Schema Validation</h3>
              </div>
              <p className="text-devscribe-text-secondary">
                Automatically validate your OpenAPI/Swagger schemas against industry best practices and standards.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-start mb-4">
                <Bot className="w-6 h-6 text-devscribe-teal mr-3" />
                <h3 className="text-lg font-semibold text-white">AI-Powered Analysis</h3>
              </div>
              <p className="text-devscribe-text-secondary">
                Leverage machine learning to detect potential issues and inconsistencies in your API definitions.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-start mb-4">
                <Code2 className="w-6 h-6 text-devscribe-teal mr-3" />
                <h3 className="text-lg font-semibold text-white">Code Generation</h3>
              </div>
              <p className="text-devscribe-text-secondary">
                Generate test cases and validation code automatically based on your schema definitions.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-devscribe-teal mr-3" />
                <h3 className="text-lg font-semibold text-white">Continuous Validation</h3>
              </div>
              <p className="text-devscribe-text-secondary">
                Integrate schema testing into your CI/CD pipeline for continuous API quality assurance.
              </p>
            </div>
          </div>

          <h2 id="getting-started" className="text-xl font-semibold mt-8 mb-4 text-white">Getting Started</h2>
          <p className="text-devscribe-text-secondary mb-4">
            To get started with Swagger AI schema testing, you'll need to:
          </p>
          <ol className="list-decimal pl-6 text-devscribe-text-secondary space-y-2">
            <li>Set up your OpenAPI/Swagger schema files</li>
            <li>Configure the AI testing integration</li>
            <li>Run your first schema validation</li>
            <li>Review and implement suggested improvements</li>
          </ol>
        </div>

        <PageNavigation 
          nextPage={{
            name: "Quickstart",
            path: "/quickstart"
          }}
        />
      </div>
    </div>
  );
};

export default Introduction; 