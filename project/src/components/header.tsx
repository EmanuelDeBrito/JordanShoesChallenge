type Props = {
    label: string
}

export const Header = ({ label }: Props) => {
    return(
        <header className="flex justify-center items-center h-[64px] text-[14px] text-black md:text-[16px] lg:text-[24px]">
            {label}
        </header>
    )
}