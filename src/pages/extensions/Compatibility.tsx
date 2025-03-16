
import React from 'react';
import PageHeading from '../../components/ui/PageHeading';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const ExtensionsCompatibility = () => {
  const compatibilityData = [
    {
      name: "Visual Studio Code Extensions",
      compatibility: "high",
      notes: "Most VS Code extensions work seamlessly with Codium due to shared architecture and APIs."
    },
    {
      name: "JetBrains IDE Plugins",
      compatibility: "medium",
      notes: "Some JetBrains plugins can be adapted to work with Codium through our compatibility layer."
    },
    {
      name: "Sublime Text Packages",
      compatibility: "low",
      notes: "Limited compatibility with Sublime Text packages due to different architecture."
    },
    {
      name: "Atom Packages",
      compatibility: "medium",
      notes: "Many Atom packages can be ported to work with Codium with minimal changes."
    },
    {
      name: "Custom Codium Extensions",
      compatibility: "high",
      notes: "Extensions built specifically for Codium offer the best experience and performance."
    },
    {
      name: "Language Servers",
      compatibility: "high",
      notes: "Codium fully supports the Language Server Protocol (LSP) for rich language features."
    },
    {
      name: "Debugger Extensions",
      compatibility: "high",
      notes: "Debug Adapter Protocol (DAP) support ensures compatibility with debugger extensions."
    },
    {
      name: "Theme Extensions",
      compatibility: "high",
      notes: "Color themes and icon packs are fully supported across platforms."
    }
  ];

  const getCompatibilityIcon = (level) => {
    switch(level) {
      case "high":
        return <CheckCircle size={20} className="text-green-500" />;
      case "medium":
        return <AlertTriangle size={20} className="text-yellow-500" />;
      case "low":
        return <XCircle size={20} className="text-red-500" />;
      default:
        return null;
    }
  };
  
  const getCompatibilityText = (level) => {
    switch(level) {
      case "high":
        return "High Compatibility";
      case "medium":
        return "Medium Compatibility";
      case "low":
        return "Low Compatibility";
      default:
        return "";
    }
  };

  return (
    <div className="px-12 py-10 max-w-6xl">
      <PageHeading 
        subtitle="Extensions" 
        title="Compatibility"
        description="Learn about Codium's compatibility with extensions from other development environments."
      />
      
      <div className="mt-8 space-y-8">
        <div className="bg-codium-hover-bg border border-codium-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Cross-Platform Extension Support</h2>
          <p className="text-codium-text-secondary">
            Codium is designed to work with extensions from various development environments, 
            making it easier for developers to transition without losing their favorite tools and features.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Compatibility Matrix</h2>
          <p className="text-codium-text-secondary mb-6">
            Below is a compatibility guide for various extension ecosystems with Codium:
          </p>
          
          <div className="border border-codium-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-codium-hover-bg border-b border-codium-border">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Extension Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Compatibility</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-codium-border">
                {compatibilityData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-codium-dark-gray" : ""}>
                    <td className="px-6 py-4 text-sm font-medium">{item.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getCompatibilityIcon(item.compatibility)}
                        <span className="text-sm">{getCompatibilityText(item.compatibility)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-codium-text-secondary">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Troubleshooting Compatibility Issues</h2>
          <p className="text-codium-text-secondary mb-4">
            If you encounter issues with extensions, try these steps:
          </p>
          
          <div className="space-y-3">
            <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Check Version Compatibility</h3>
              <p className="text-sm text-codium-text-secondary">
                Ensure the extension is compatible with your version of Codium. Check the extension's documentation for compatibility information.
              </p>
            </div>
            
            <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Install Compatibility Layer</h3>
              <p className="text-sm text-codium-text-secondary">
                Some extensions require the Codium Compatibility Layer extension to be installed first. Find it in the Extension Marketplace.
              </p>
            </div>
            
            <div className="bg-codium-dark-gray border border-codium-border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Contact Extension Developer</h3>
              <p className="text-sm text-codium-text-secondary">
                Reach out to the extension developer for guidance on making it work with Codium or to request a compatible version.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionsCompatibility;
