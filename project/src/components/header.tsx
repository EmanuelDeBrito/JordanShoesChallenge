type Props = {
    label: string
}

export const Header = ({ label }: Props) => {
    return(
        <header className="flex justify-center items-center h-[64px] text-lg text-black">
            {label}
        </header>
    )
}