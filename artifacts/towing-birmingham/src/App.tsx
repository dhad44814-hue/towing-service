import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import TowingServicePage from "@/pages/TowingServicePage";
import EmergencyTowingPage from "@/pages/EmergencyTowingPage";
import RoadsideAssistancePage from "@/pages/RoadsideAssistancePage";
import StickyCallBar from "@/components/StickyCallBar";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/towing-service-birmingham" component={TowingServicePage} />
        <Route path="/emergency-towing-birmingham" component={EmergencyTowingPage} />
        <Route path="/roadside-assistance-birmingham" component={RoadsideAssistancePage} />
        <Route component={NotFound} />
      </Switch>
      <StickyCallBar />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
