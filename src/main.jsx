import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Layout/Main/Root";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EnrollmentRequest from "./Pages/Enrollment Request/EnrollmentRequest";
import PatientManagement from "./Pages/Patient Management/PatientManagement";
import VaccineManagement from "./Pages/Vaccine Management/VaccineManagement";
import SiteManagement from "./Pages/Site Management/SiteManagement";
import UserManagement from "./Pages/User Management/UserManagement";
import AccessManagement from "./Pages/Access Management/AccessManagement";
import ReferenceData from "./Pages/Reference Data/ReferenceData";
import VaccineForecasting from "./Pages/Vaccine Forecasting/VaccineForecating";
import Reports from "./Pages/Reports/Reports";
import User from "./Pages/User/User";
import Organization from "./Pages/Organization/Organization";
import Faculty from "./Pages/Faculty/Faculty";
import VaccineProgram from "./Pages/Vaccine Program/VaccineProgram";
import DataTable from "./components/Data Table/DataTable";
import Adresses from "./Pages/Adresses/Adresses";
import UsersClinicals from "./Pages/Users/Clinicals/UsersClinicals";
import ContactDetails from "./Pages/Contact Details/ContactDetails";
import Vaccines from "./Pages/Vaccines/Vaccines";
import Inventory from "./Pages/Inventory/Inventory";
import Orders from "./Pages/Orders/Orders";
import Shipments from "./Pages/Shipments/Shipments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/enrollment-request',
        element: <EnrollmentRequest />
      },
      {
        path: '/patient-management',
        element: <PatientManagement />
      },
      {
        path: '/vaccine-management',
        element: <VaccineManagement />
      },
      {
        path: '/site-management',
        element: <SiteManagement />
      },
      {
        path: '/access-management',
        element: <AccessManagement />
      },
      {
        path: '/user-management',
        element: <UserManagement />
      },
      {
        path: '/reference-data',
        element: <ReferenceData />
      },
      {
        path: '/vaccine-forecasting',
        element: <VaccineForecasting />
      },
      {
        path: '/reports',
        element: <Reports />
      },
      {
        path: '/users',
        element: <User/>
      },
      {
        path: '/organization',
        element: <Organization />
      },
      {
        path: '/faculty',
        element: <Faculty />
      },
      {
        path: '/vaccine-program',
        element: <VaccineProgram/>
      },
      {
        path: '/data-table',
        element: <DataTable/>
      },
      {
        path: '/addresses',
        element: <Adresses />
      },
      {
        path: '/Users-Clinicals',
        element: <UsersClinicals />
      },
      {
        path: '/contact-details',
        element: <ContactDetails/>
      },
      {
        path: '/vaccines',
        element: <Vaccines />
      },
      {
        path: '/inventory',
        element: <Inventory />
      },
      {
        path: '/orders',
        element: <Orders/>
      },
      {
        path: '/shipments',
        element: <Shipments/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
