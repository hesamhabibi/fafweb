import dynamic from "next/dynamic"

import dynamicIconImports from "lucide-react/dynamicIconImports";

export default function IconDynamic({ name, ...props }) {

    const Icon = dynamic(dynamicIconImports[name])

    // -----------------------------------------------------------------------------------------------------------------

    return <Icon {...props}/>;
}