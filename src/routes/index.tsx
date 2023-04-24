import {
    createBrowserRouter,
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Contact from '../components/pages/contact/Contact';
import AddNewContact from "../components/pages/contact/AddNewContact";
import EditContact from "../components/pages/contact/EditContact";
import Graphs from "../components/pages/graphs";
import {QueryClient, QueryClientProvider} from 'react-query';


const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Contact/>}, {
        path: "/new-contact",
        element: <AddNewContact/>},
]);

const RoutesNav = () => {
    return (
        <div>
            <div className="pt-14 sm:ml-64">
                <div className="p-4 mt-2">
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <QueryClientProvider client={queryClient}>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Contact/>} />
                                    <Route path="/add-contact" element={<AddNewContact/>}/>
                                    <Route path="/edit-contact/:userId" element={<EditContact/>}/>
                                    <Route path="/graphs" element={<Graphs/>}/>
                                </Routes>
                            </BrowserRouter>
                        </QueryClientProvider>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RoutesNav;
