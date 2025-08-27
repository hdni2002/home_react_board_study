import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainRouter from "./router/MainRouter/MainRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Layout>
					<MainRouter />
				</Layout>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;