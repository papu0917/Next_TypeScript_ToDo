import { NextImage } from "~/components/atoms/next-image";
import { FooterRoot, SpanImageWrapper } from "./style";

export const Footer = () => {
  return (
    <FooterRoot>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <SpanImageWrapper>
          <NextImage
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
          />
        </SpanImageWrapper>
      </a>
    </FooterRoot>
  );
};
