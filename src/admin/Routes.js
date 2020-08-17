import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from "./RouteWithLayout";
import Dashboard from "./Dashboard";
import { Main as MainLayout } from './layouts';
import {Shipping} from "./Dashboard/components/shipping/index";
import {Chart} from "./Dashboard/components/chart/index";
import {ProductRegistration} from "./Dashboard/components/productRegistration/index";
import {MemberManagement} from "./Dashboard/components/memberManagement/index";
import ModifyingInformation from "./Dashboard/components/memberManagement/ModifyingInformation";


const Admin = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={Map}
        exact
        layout={MainLayout}
        path="/map"
      />
      <RouteWithLayout
        component={MemberManagement}
        exact
        layout={MainLayout}
        path="/memberManagement"
      />
      <RouteWithLayout
        component={Shipping}
        exact
        layout={MainLayout}
        path="/shipping"
      />
      <RouteWithLayout
        component={Chart}
        exact
        layout={MainLayout}
        path="/chart"
      />
      <RouteWithLayout
        component={ProductRegistration}
        exact
        layout={MainLayout}
        path="/productRegistration"
      />
        <RouteWithLayout
            component={ModifyingInformation}
            exact
            layout={MainLayout}
            path="/modifyingInformation"
        />
    </Switch>
  );
};

export default Admin;
