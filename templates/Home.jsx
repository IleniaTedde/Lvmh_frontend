import React, { useEffect, useContext, useRef } from "react";
import LvmhLayout from "../layouts/LvmhLayout/LvmhLayout";

const TemplateHome = ({api, labels, layout}) => {

    return (
        <>
        <LvmhLayout labels={labels} layout={layout}>
       {api && <div>{api.text}</div> }
        </LvmhLayout>
        </>
    )
}

export default TemplateHome;
