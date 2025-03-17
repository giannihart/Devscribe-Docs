import React from 'react';
import PageHeading from '../components/ui/PageHeading';
import InfoBox from '../components/ui/InfoBox';
import TableOfContents from '../components/ui/TableOfContents';
import { Link2, Image, Youtube, FileVideo, FileAudio, ExternalLink } from 'lucide-react';

const Embeds = () => {
  const tocItems = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'media-embeds', title: 'Media Embeds' },
    { id: 'code-embeds', title: 'Code Embeds' },
    { id: 'advanced-embeds', title: 'Advanced Embeds' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10 max-w-4xl">
        <PageHeading 
          subtitle="Essentials" 
          title="Embeds"
          description="Learn how to embed various types of content in your Devscribe documents."
        />
        
        <InfoBox>
          Embeds allow you to include rich media and interactive content directly in your documents, enhancing the user experience and making your documentation more engaging.
        </InfoBox>
        
        <section id="introduction" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">What are Embeds?</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Embeds are interactive elements that you can include in your Devscribe documents. They allow you to incorporate various types of content such as images, videos, code snippets, and more, directly into your documentation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Benefits of Using Embeds</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Using embeds in your documentation offers several advantages:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li>Enhanced visual appeal with rich media content</li>
                <li>Improved user engagement through interactive elements</li>
                <li>Better explanation of complex concepts with visual aids</li>
                <li>Streamlined documentation with integrated resources</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="media-embeds" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Media Embeds</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Image Embeds</h3>
              <p className="text-devscribe-text-secondary mb-4">
                You can embed images in your documents using the following methods:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li>Click the image button in the toolbar</li>
                <li>Drag and drop an image file into the editor</li>
                <li>Use Markdown syntax: <code>![alt text](image-url)</code></li>
              </ul>
              <div className="mt-4 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                  <Image size={14} />
                  <span>Image Embed Example</span>
                </div>
                <div className="bg-devscribe-hover-bg h-40 rounded-md flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Image size={24} className="text-devscribe-text-secondary" />
                    <span className="text-devscribe-text-secondary text-sm">Image Preview</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Video Embeds</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Embed videos from popular platforms by simply pasting the URL:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-devscribe-text-secondary">
                <li>YouTube videos</li>
                <li>Vimeo videos</li>
                <li>Self-hosted MP4 files</li>
              </ul>
              <div className="mt-4 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                  <Youtube size={14} />
                  <span>YouTube Embed Example</span>
                </div>
                <div className="bg-devscribe-hover-bg h-64 rounded-md flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Youtube size={32} className="text-devscribe-text-secondary" />
                    <span className="text-devscribe-text-secondary text-sm">Video Player</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Audio Embeds</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Embed audio files by uploading MP3 files or linking to external audio sources:
              </p>
              <div className="mt-4 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                  <FileAudio size={14} />
                  <span>Audio Embed Example</span>
                </div>
                <div className="bg-devscribe-hover-bg p-4 rounded-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-devscribe-teal flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3L19 12L5 21V3Z" fill="black" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm">Audio Sample</div>
                      <div className="text-xs text-devscribe-text-secondary">0:00 / 1:30</div>
                    </div>
                  </div>
                  <div className="w-1/2 h-1 bg-devscribe-border rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-devscribe-teal"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="code-embeds" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Code Embeds</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">GitHub Gists</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Embed GitHub Gists by pasting the Gist URL into your document:
              </p>
              <div className="mt-4 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 17.5C9.5 19 11 19.5 12 19.5C13 19.5 14.5 19 16 17.5" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6.5C9.5 5 11 4.5 12 4.5C13 4.5 14.5 5 16 6.5" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>GitHub Gist Example</span>
                </div>
                <div className="bg-devscribe-hover-bg p-4 rounded-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gray-700"></div>
                      <span className="text-sm">username / example-gist.js</span>
                    </div>
                    <ExternalLink size={14} className="text-devscribe-text-secondary" />
                  </div>
                  <div className="font-mono text-xs text-devscribe-text-secondary">
                    <pre>
{`function exampleFunction() {
  console.log("This is an embedded GitHub Gist");
  return true;
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">CodePen Embeds</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Embed interactive CodePen examples by pasting the CodePen URL:
              </p>
              <div className="mt-4 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V15.5" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 8.5L12 15.5L2 8.5" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 15.5L12 8.5L22 15.5" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2V8.5" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>CodePen Embed Example</span>
                </div>
                <div className="bg-devscribe-hover-bg rounded-md overflow-hidden">
                  <div className="bg-black p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">HTML</span>
                      <span className="text-xs">CSS</span>
                      <span className="text-xs">JS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-xs bg-devscribe-teal text-black px-2 py-1 rounded">Run</button>
                      <ExternalLink size={14} className="text-devscribe-text-secondary" />
                    </div>
                  </div>
                  <div className="h-40 flex items-center justify-center">
                    <span className="text-devscribe-text-secondary text-sm">Interactive CodePen Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="advanced-embeds" className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Advanced Embeds</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Interactive Diagrams</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Embed interactive diagrams using Mermaid.js syntax:
              </p>
              <div className="mt-4 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0ED3B9" strokeWidth="2"/>
                    <path d="M8 12H16" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 8L12 16" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Mermaid Diagram Example</span>
                </div>
                <div className="bg-devscribe-hover-bg p-4 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex flex-col items-center">
                      <div className="w-20 h-10 border border-devscribe-teal rounded-md flex items-center justify-center mb-4">
                        <span className="text-xs">Start</span>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5L12 19" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 12L12 19L5 12" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="w-20 h-10 border border-devscribe-teal rounded-md flex items-center justify-center mt-4">
                        <span className="text-xs">End</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Embed interactive maps from services like Google Maps or OpenStreetMap:
              </p>
              <div className="mt-4 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Map Embed Example</span>
                </div>
                <div className="bg-devscribe-hover-bg h-64 rounded-md flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="#0ED3B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-devscribe-text-secondary text-sm">Interactive Map</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Custom Embeds</h3>
              <p className="text-devscribe-text-secondary mb-4">
                Create custom embeds using HTML and JavaScript for specialized interactive content:
              </p>
              <div className="mt-4 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-md">
                <div className="flex items-center gap-2 text-devscribe-text-secondary mb-2 text-xs">
                  <Link2 size={14} />
                  <span>Custom Embed Example</span>
                </div>
                <div className="bg-devscribe-hover-bg p-4 rounded-md">
                  <div className="text-xs font-mono text-devscribe-text-secondary mb-2">
                    <pre>
{`<div class="custom-embed">
  <h3>Interactive Component</h3>
  <div id="interactive-element"></div>
  <script>
    // Custom JavaScript code
  </script>
</div>`}
                    </pre>
                  </div>
                  <div className="mt-4 p-4 border border-dashed border-devscribe-border rounded-md flex items-center justify-center">
                    <span className="text-devscribe-text-secondary text-sm">Custom Interactive Element</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-devscribe-card-bg border border-devscribe-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Need help with embeds?</h3>
            <p className="text-devscribe-text-secondary mb-4">
              Check out our comprehensive documentation or join our community forum to learn more about creating and customizing embeds.
            </p>
            <div className="flex items-center gap-4">
              <a href="/documentation" className="px-4 py-2 bg-devscribe-teal text-black rounded-md font-medium hover:bg-devscribe-teal/90 transition-colors">
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

export default Embeds; 