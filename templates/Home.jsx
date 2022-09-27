import React, { useEffect, useContext, useRef } from "react";
import LvmhLayout from "../layouts/LvmhLayout/LvmhLayout";

const TemplateHome = ({api}) => {

    return (
        <>
        <LvmhLayout>
       {api && <div>{api.text}</div> }
        </LvmhLayout>
        </>
    )
}

export default TemplateHome;
