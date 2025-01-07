import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Title } from "@/components/title"

const Page = () => {
    return(
        <div>
            <Header 
                label="Frete grátis para todo o Brasil" 
            />

            <Hero 
                background="/image-michael-jordan.png" 
            />

            <main className="max-w-3xl mx-auto py-20">
                <Title 
                    title="Os melhores em um só lugar" 
                    subtitle="A marca Jordan da JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto"
                />

            </main>
        </div>
    )
}

export default Page