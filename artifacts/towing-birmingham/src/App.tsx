import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import TowingServicePage from "@/pages/TowingServicePage";
import EmergencyTowingPage from "@/pages/EmergencyTowingPage";
import RoadsideAssistancePage from "@/pages/RoadsideAssistancePage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceAreasPage from "@/pages/ServiceAreasPage";
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
        <Route path="/services" component={ServicesPage} />
        <Route path="/service-areas" component={ServiceAreasPage} />
        <Route path="/contact-us" component={ContactPage} />
        <Route path="/about-us" component={AboutPage} />
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
