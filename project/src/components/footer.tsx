type Props = {
    label: string
}

export const Footer = ({ label }: Props) => {
    return(
        <footer className="flex justify-center items-center h-[40px] text-black text-bold">
            {label}
        </footer>
    )
}