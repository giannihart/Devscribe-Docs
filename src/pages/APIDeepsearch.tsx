import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles,
  Trash2,
  PlusCircle,
  X,
  Clock,
  FileSearch2
} from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
};

type SearchHistoryItem = {
  id: string;
  query: string;
  timestamp: Date;
};

const APIDeepsearch: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "I'm your AI API discovery assistant. Describe the specific functionality or problem you're looking to solve, and I'll help you find the perfect API solution.",
      sender: 'ai'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef<null | HTMLDivElement>(null);
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add to search history
    const newSearchHistoryItem: SearchHistoryItem = {
      id: `search_${Date.now()}`,
      query: inputMessage,
      timestamp: new Date()
    };
    setSearchHistory(prev => [newSearchHistoryItem, ...prev]);

    const userMessage: Message = {
      id: messages.length,
      text: inputMessage,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 1,
        text: `Based on your query "${inputMessage}", here are some tailored API recommendations:

1. AI Insights API (Advanced Natural Language Processing)
   • Sentiment analysis
   • Text classification
   • Language translation
   • Intent recognition

2. VisionAI API (Computer Vision)
   • Image recognition
   • Object detection
   • Facial analysis
   • Automated image tagging

3. MetricFlow API (Real-time Analytics)
   • User behavior tracking
   • Performance metrics
   • Predictive analytics
   • Custom dashboard generation

Would you like me to provide more detailed information about these APIs or refine the search further?`,
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleNewChat = () => {
    // Reset messages to initial state
    setMessages([
      {
        id: 0,
        text: "I'm your AI API discovery assistant. Describe the specific functionality or problem you're looking to solve, and I'll help you find the perfect API solution.",
        sender: 'ai'
      }
    ]);
  };

  const handleDeleteSearch = (id: string) => {
    setSearchHistory(prev => prev.filter(item => item.id !== id));
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="p-8 max-w-6xl mx-auto flex space-x-6 h-[calc(100vh-4rem)]">
      {/* Main Chat Interface */}
      <div className="w-[calc(100%-18rem)] min-w-0 flex flex-col">
        <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl overflow-hidden shadow-lg flex flex-col flex-grow">
          {/* Chat Header */}
          <div className="bg-codium-dark-gray p-4 text-center">
            <h1 className="text-xl font-semibold text-white flex items-center justify-center">
              <Sparkles className="mr-2 text-devscribe-hover-bg" />
              API Deepsearch Assistant
            </h1>
          </div>

          {/* Chat Messages */}
          <div 
            className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-track-devscribe-dark-gray scrollbar-thumb-devscribe-hover-bg/50"
          >
            <div className="flex flex-col justify-end min-h-full">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-6 last:mb-0`}
                >
                  <div 
                    className={`
                      max-w-[80%] 
                      ${message.sender === 'user' 
                        ? 'bg-devscribe-hover-bg text-white' 
                        : 'bg-codium-dark-gray text-white'}
                      p-4 rounded-2xl 
                      relative
                    `}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} className="h-0" />
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-codium-dark-gray p-4 border-t border-devscribe-border">
            <div className="flex items-center space-x-2 h-12">
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Describe the API functionality you need or the problem you're solving..."
                className="
                  flex-grow 
                  p-3 
                  bg-devscribe-dark-gray
                  text-white 
                  border 
                  border-devscribe-border
                  rounded-xl 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-devscribe-hover-bg
                  h-full
                "
              />
              <button 
                onClick={handleSendMessage}
                className="
                  bg-devscribe-hover-bg 
                  text-white 
                  p-3 
                  rounded-xl 
                  hover:bg-opacity-90 
                  transition-colors
                  flex items-center
                  justify-center
                  h-full
                  w-12
                "
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Searches Sidebar */}
      <div className="w-72 flex flex-col">
        <div className="bg-devscribe-card-bg border border-devscribe-border rounded-2xl overflow-hidden shadow-2xl flex flex-col flex-grow">
          {/* Header */}
          <div className="bg-codium-dark-gray p-4 flex justify-between items-center border-b border-devscribe-border">
            <div className="flex items-center space-x-2 min-w-0">
              <Clock className="w-4 h-4 text-devscribe-hover-bg flex-shrink-0" />
              <h3 className="text-base font-semibold text-white truncate">
                Recent Searches
              </h3>
            </div>
            <button 
              onClick={handleClearHistory}
              className="text-devscribe-text-secondary hover:text-white transition-colors group ml-2"
              title="Clear All"
            >
              <Trash2 className="w-4 h-4 group-hover:text-red-500 transition-colors" />
            </button>
          </div>

          {/* New Chat Button */}
          <div className="p-3">
            <button 
              onClick={handleNewChat}
              className="
                w-full 
                flex 
                items-center 
                justify-center 
                bg-devscribe-hover-bg 
                text-white 
                p-2 
                rounded-lg 
                hover:bg-opacity-80 
                transition-all 
                duration-300 
                ease-in-out 
                shadow-md 
                hover:shadow-lg
                text-sm
              "
            >
              <PlusCircle className="mr-2 w-4 h-4" />
              Start New Chat
            </button>
          </div>

          {/* Search History List */}
          <div 
            className="flex-grow overflow-y-auto scrollbar-thin scrollbar-track-devscribe-dark-gray scrollbar-thumb-devscribe-hover-bg/50 p-4 space-y-3"
          >
            {searchHistory.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-devscribe-text-secondary opacity-70">
                <FileSearch2 className="w-12 h-12 mb-4 text-devscribe-hover-bg/50" />
                <p className="text-xs text-center">
                  No recent searches
                </p>
                <p className="text-[10px] text-center mt-2">
                  Your search history will appear here
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {searchHistory.map((item) => (
                  <div 
                    key={item.id} 
                    className="
                      bg-codium-dark-gray 
                      p-3 
                      rounded-xl 
                      border 
                      border-devscribe-border 
                      hover:border-devscribe-hover-bg 
                      transition-all 
                      duration-300 
                      group 
                      relative 
                      overflow-hidden
                    "
                  >
                    {/* Subtle gradient background on hover */}
                    <div className="
                      absolute 
                      inset-0 
                      bg-gradient-to-r 
                      from-transparent 
                      to-devscribe-hover-bg/10 
                      opacity-0 
                      group-hover:opacity-100 
                      transition-opacity 
                      duration-300
                    "></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start">
                        <p className="text-xs text-white truncate flex-grow pr-2">
                          {item.query}
                        </p>
                        <button 
                          onClick={() => handleDeleteSearch(item.id)}
                          className="
                            text-devscribe-text-secondary 
                            hover:text-red-500 
                            opacity-0 
                            group-hover:opacity-100 
                            transition-all 
                            duration-300
                          "
                          title="Remove this search"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[10px] text-devscribe-text-secondary mt-1 flex items-center">
                        <Clock className="w-3 h-3 mr-1.5 opacity-70" />
                        {formatTimestamp(item.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDeepsearch; 