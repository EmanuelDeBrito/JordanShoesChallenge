import Image from "next/image"

type Props = {
    background: string
}

export const Hero = ({ background }: Props) => {
    return(
        <div className="bg-cover bg-no-repeat bg-center h-[400px]" style={{ background: 'url('+ background +')' }}>
            <div className="flex flex-col justify-center max-w-3xl h-full mx-auto">
                <div className="flex items-center gap-2">
                    <Image src={"/logo-jordan.png"} alt="" width={48} height={48} />
                    <div className="text-[24px] text-white italic">JordanShoes</div>
                </div>

                <div className="mt-10 mb-5 text-[32px] text-white">A melhor loja de Jordan</div>

                <div className="text-[24px] text-white font-400">O tênis Jordan é fruto de uma velha e forte parceria entre Nike e o jogador Michael Jordan</div>
            </div>
        </div>
    )
}