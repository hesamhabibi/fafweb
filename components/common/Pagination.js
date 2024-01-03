import {useState} from "react";

import {Pagination as PaginationReactBootstrap} from "react-bootstrap";
import Icon from "./Icon";

export default function Pagination({total, current}) {

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <PaginationReactBootstrap className="fw-semibold text-center">
            <PaginationReactBootstrap.First className="lh-1"><Icon name="ChevronsRight" className="my-2 mx-n2"/></PaginationReactBootstrap.First>
            <PaginationReactBootstrap.Prev className="lh-1"><Icon name="ChevronRight" className="my-2 mx-n2"/></PaginationReactBootstrap.Prev>
            <PaginationReactBootstrap.Item>{1}</PaginationReactBootstrap.Item>
            <PaginationReactBootstrap.Ellipsis>...</PaginationReactBootstrap.Ellipsis>

            <PaginationReactBootstrap.Item>{10}</PaginationReactBootstrap.Item>
            <PaginationReactBootstrap.Item>{11}</PaginationReactBootstrap.Item>
            <PaginationReactBootstrap.Item active>{12}</PaginationReactBootstrap.Item>
            <PaginationReactBootstrap.Item>{13}</PaginationReactBootstrap.Item>
            <PaginationReactBootstrap.Item disabled>{14}</PaginationReactBootstrap.Item>

            <PaginationReactBootstrap.Ellipsis>...</PaginationReactBootstrap.Ellipsis>
            <PaginationReactBootstrap.Item>{20}</PaginationReactBootstrap.Item>
            <PaginationReactBootstrap.Next className="lh-1"><Icon name="ChevronLeft" className="my-2 mx-n2"/></PaginationReactBootstrap.Next>
            <PaginationReactBootstrap.Last className="lh-1"><Icon name="ChevronsLeft" className="my-2 mx-n2"/></PaginationReactBootstrap.Last>
        </PaginationReactBootstrap>
    );
}