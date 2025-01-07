type Props = {
    title: string,
    subtitle: string
}

export const Title = ({ title, subtitle }: Props) => {
    return(
        <div className="flex flex-col items-center gap-6 mb-18 text-black">
            <div className="text-[32px] font-600">{title}</div>
            <div className="text-[24px] font-400 text-center">{subtitle}</div>
        </div>
    )
}