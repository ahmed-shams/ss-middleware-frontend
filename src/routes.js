/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import CatagoryList from "views/CatagoryList";
import CreateLeads from "views/CreateLeads";
import FetchNomination from "views/FetchNomination";
import MerchantList from "views/MerchantList";
import NominationList from "views/NominationList";

const dashboardRoutes = [

  {
    path: "/catagorylist",
    name: "Catagory List",
    icon: "nc-icon nc-notes",
    component: CatagoryList,
    layout: "/admin"
  },

  {
    path: "/merchantlist",
    name: "Merchant List",
    icon: "nc-icon nc-notes",
    component: MerchantList,
    layout: "/admin"
  },
  {
    path: "/nominationlist",
    name: "Nomination List",
    icon: "nc-icon nc-notes",
    component: NominationList,
    layout: "/admin"
  },
  {
    path: "/createlead",
    name: "Create Lead",
    icon: "nc-icon nc-circle-09",
    component: CreateLeads,
    layout: "/admin"
  },
  {
    path: "/fetchnomination",
    name: "Fetch Nomination",
    icon: "nc-icon nc-circle-09",
    component: FetchNomination,
    layout: "/admin"
  }

];

export default dashboardRoutes;
