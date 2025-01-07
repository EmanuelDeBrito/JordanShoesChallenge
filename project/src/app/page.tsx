import { CardItem } from "@/components/card-item"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Title } from "@/components/title"
import { Shoes } from "@/data/shoes"

const Page = () => {
    return(
        <div>
            <Header 
                label="Frete grátis para todo o Brasil" 
            />

            <Hero 
                background="/image-michael-jordan.png" 
            />

            <main className="flex flex-col items-center max-w-4xl mx-auto py-20 px-6 lg:px-0">
                <Title 
                    title="Os melhores em um só lugar" 
                    subtitle="A marca Jordan da JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Shoes.map((item, key) => (
                        <CardItem key={key} data={item} />
                    ))}
                </div>
            </main>

            <Footer label="Feito por Emanuel de Brito" />
        </div>
    )
}

export default Page