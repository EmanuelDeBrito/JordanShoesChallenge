import { CardItemType } from "@/types/card-item-type"
import Image from "next/image"

type Props = {
    data: CardItemType
}

export const CardItem = ({ data }: Props) => {
    return(
        <div className="flex flex-col gap-6 w-full cursor-pointer">
            <div className="flex justify-center items-center w-full h-[200px] bg-[#F3F7FF]">
                <Image src={data.image} width={225} height={135} alt="Shoes" quality={100} />
            </div>

            <div className="flex flex-col gap-3">
                <div className="text-[18px] text-black">{data.name}</div>

                <div className="text-[16px] text-[#7CA2F4]">{data.category}</div>
            </div>

            <div className="text-[20px] text-black" style={{ fontFamily: 'Space Grotesk' }}>R$ {data.price}</div>
        </div>
    )
}