import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Resets, Fonts, Vars } from "./globalStyles";
import { AppStateProvider } from "./AppState";
import IndexPage from "./pages/index";
import { NotificationContainer } from "./components/ui/Notification";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            retryOnMount: false,
            refetchOnWindowFocus: false
        }
    }
});

const App = () => {
    return (
        <>
            <Resets />
            <Fonts />
            <Vars />

            <QueryClientProvider client={queryClient}>
                <AppStateProvider>
                    <IndexPage />
                </AppStateProvider>
            </QueryClientProvider>

            <NotificationContainer />
        </>
    );
};

export default App;
