import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Step1} from "../Step1";
import {Step2} from "../Step2";
import {Step3} from "../Step3";
import {Step4} from "../Step4";
import {OrderFinish} from "../Step5";

export const StepRouter = () => {
    return (
        <Switch>
            <Route path="/orderPage/step1" component={Step1} exact/>
            <Route path="/orderPage/step2" component={Step2} exact/>
            <Route path="/orderPage/step3" component={Step3} exact/>
            <Route path="/orderPage/step4" component={Step4} exact/>
            <Route path="/orderFinish/" component={OrderFinish} exact/>
        </Switch>
    );
};

