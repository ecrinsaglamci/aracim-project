import React, {Component} from "react";
import Cars from "./Cars";
import Details from "./Details";
import { Route } from "react-router-dom";

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/car" Component={Cars} exact />
                <Route path="/car/:id" Component={Details}  />
            </section>
        )
    }
}