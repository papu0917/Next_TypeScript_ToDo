import Head from "next/head"
import { ReactNode } from "react"

type NextHeadProps = {
    children: ReactNode;
}

export const NextHead = (props: NextHeadProps) => {
    const { children } = props;
    return <Head>{children}</Head>
}