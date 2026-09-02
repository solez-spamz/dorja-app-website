/** Quiet Momentum app shell: a brief Dorja-logo launch moment, warm paper field, and accessible reduced-motion behavior. */
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      {isLoading && (
        <div className="app-loader" role="status" aria-live="polite" aria-label="Loading Dorja">
          <div className="app-loader-mark">
            <span className="app-loader-ring" />
            <img src="/dorja-assets/dorja-logo.png" alt="" />
          </div>
          <p>Opening Dorja</p>
        </div>
      )}
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
