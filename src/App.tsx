import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Documentation from "./pages/Documentation";
import Features from "./pages/Features";
import Download from "./pages/Download";
import NotFound from "./pages/NotFound";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import Auth from "./pages/Auth";
import Guides from "./pages/Guides";
import DocEditing from "./pages/DocEditing";
import CodeBlocks from "./pages/CodeBlocks";
import Embeds from "./pages/Embeds";
import Snippets from "./pages/Snippets";
import GlobalSettings from "./pages/GlobalSettings";
import Navigation from "./pages/Navigation";
import Quickstart from "./pages/Quickstart";
import Development from "./pages/Development";
import WindsurfGettingStarted from "./pages/windsurf/GettingStarted";
import WindsurfCascade from "./pages/windsurf/Cascade";
import WindsurfModels from "./pages/windsurf/Models";
import WindsurfUsage from "./pages/windsurf/Usage";
import WindsurfTerminal from "./pages/windsurf/Terminal";
import WindsurfAdvanced from "./pages/windsurf/Advanced";
import ExtensionsGettingStarted from "./pages/extensions/GettingStarted";
import ExtensionsCompatibility from "./pages/extensions/Compatibility";
import ExtensionsProfile from "./pages/extensions/Profile";
import FeaturesAutocomplete from "./pages/features/Autocomplete";
import FeaturesChat from "./pages/features/Chat";
import FeaturesCommand from "./pages/features/Command";
import FeaturesContextAwareness from "./pages/features/ContextAwareness";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/documentation" element={<Layout><Documentation /></Layout>} />
          <Route path="/features" element={<Layout><Features /></Layout>} />
          <Route path="/download" element={<Layout><Download /></Layout>} />
          <Route path="/community" element={<Layout><Community /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/support" element={<Layout><Support /></Layout>} />
          <Route path="/auth" element={<Layout><Auth /></Layout>} />
          <Route path="/guides" element={<Layout><Guides /></Layout>} />
          <Route path="/quickstart" element={<Layout><Quickstart /></Layout>} />
          <Route path="/development" element={<Layout><Development /></Layout>} />
          
          {/* Essentials Routes */}
          <Route path="/doc-editing" element={<Layout><DocEditing /></Layout>} />
          <Route path="/code-blocks" element={<Layout><CodeBlocks /></Layout>} />
          <Route path="/embeds" element={<Layout><Embeds /></Layout>} />
          <Route path="/snippets" element={<Layout><Snippets /></Layout>} />
          <Route path="/global-settings" element={<Layout><GlobalSettings /></Layout>} />
          <Route path="/navigation" element={<Layout><Navigation /></Layout>} />
          
          {/* Windsurf Routes */}
          <Route path="/windsurf/getting-started" element={<Layout><WindsurfGettingStarted /></Layout>} />
          <Route path="/windsurf/cascade" element={<Layout><WindsurfCascade /></Layout>} />
          <Route path="/windsurf/models" element={<Layout><WindsurfModels /></Layout>} />
          <Route path="/windsurf/usage" element={<Layout><WindsurfUsage /></Layout>} />
          <Route path="/windsurf/terminal" element={<Layout><WindsurfTerminal /></Layout>} />
          <Route path="/windsurf/advanced" element={<Layout><WindsurfAdvanced /></Layout>} />
          
          {/* Extensions Routes */}
          <Route path="/extensions/getting-started" element={<Layout><ExtensionsGettingStarted /></Layout>} />
          <Route path="/extensions/compatibility" element={<Layout><ExtensionsCompatibility /></Layout>} />
          <Route path="/extensions/profile" element={<Layout><ExtensionsProfile /></Layout>} />
          
          {/* Features Detail Routes */}
          <Route path="/features/autocomplete" element={<Layout><FeaturesAutocomplete /></Layout>} />
          <Route path="/features/chat" element={<Layout><FeaturesChat /></Layout>} />
          <Route path="/features/command" element={<Layout><FeaturesCommand /></Layout>} />
          <Route path="/features/context-awareness" element={<Layout><FeaturesContextAwareness /></Layout>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
