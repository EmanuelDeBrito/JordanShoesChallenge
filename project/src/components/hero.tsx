import Image from "next/image"

type Props = {
    background: string
}

export const Hero = ({ background }: Props) => {
    return(
        <div className="bg-cover bg-no-repeat bg-center h-[400px]" style={{ background: 'url('+ background +')' }}>
            <div className="flex flex-col justify-center max-w-4xl h-full px-6 mx-auto lg:px-0">
                <div className="flex items-center gap-2">
                    <Image src={"/logo-jordan.png"} alt="" width={40} height={40} />
                    <div className="text-[18px] text-white italic md:text-[24px]">JordanShoes</div>
                </div>

                <div className="mt-10 mb-5 text-[24px] text-white md:text-[24px] lg:text-[32px]">A melhor loja de Jordan</div>

                <div className="w-[557px] text-[16px] text-white font-400 md:text-[18px] lg:text-[24px]">O tênis Jordan é fruto de uma velha e forte parceria entre Nike e o jogador Michael Jordan</div>
            </div>
        </div>
    )
}