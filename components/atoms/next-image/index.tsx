import Image, { ImageProps } from "next/image"

type NextImageProps = ImageProps;

export const NextImage = (props: NextImageProps) => {
    return <Image {...props} />
}