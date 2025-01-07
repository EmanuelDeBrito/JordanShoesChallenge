type Props = {
    title: string,
    subtitle: string
}

export const Title = ({ title, subtitle }: Props) => {
    return(
        <div className="flex flex-col items-center gap-6 w-[300px] mb-[72px] text-black md:w-[593px]">
            <div className="text-[20px] font-600 md:text-[24px] lg:text-[32px]">{title}</div>
            <div className="text-[14px] font-400 text-center md:text-[16px] lg:text-[24px]">{subtitle}</div>
        </div>
    )
}