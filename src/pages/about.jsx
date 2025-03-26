import Nav from "../components/nav";
import Footer from "../components/footer";
function About() {
    return (
        <div className="w-full lg:w-[1440px] mx-auto mt-14">
            <div className="nav w-full lg:w-[1440px]">
                <Nav />
            </div>
            <section className="w-full flex flex-col bg-white flex-wrap">
                <div className="w-full lg:h-[400px] bg-[url(./assets/images/bg-img3.jpg)] bg-no-repeat bg-cover bg-center">
                    <div className="w-full lg:w-[500px] text-white p-5 lg:p-20">
                        <h1 className="text-2xl py-2 font-bold">About Us</h1>
                        <p>we believe that furniture is more than just a functional necessity - it's an expression of style, personality, and comfort. Our passion lies in creating high-quality, stylish, and durable furniture that transforms houses into homes and spaces into experiences.</p>
                    </div>
                </div>
                <div className="w-full flex flex-col p-5 lg:p-20">
                    <div className="w-full flex flex-col gap-10 justify-between md:flex-row">
                        <article className="w-full lg:w-[550px]">
                            <h1 className="text-2xl py-2 font-bold">Who We Are: <span className="text-xl font-medium">Passionate Creators of Timeless Furniture</span></h1>
                            <p>We are more than just a furniture brand - we are a team of passionate designers, skilled artisans, and visionaries dedicated to creating furniture that blends <b>beauty</b>, <b>functionality</b>, and <b>durability</b>.</p>
                            <p className="py-2">With years of experience in the industry, we have built a reputation for craftsmanship, innovation, and customer satisfaction. Our mission is simple: to transform spaces with furniture that tells a story - a story of elegance, comfort, and quality.</p>
                            <div className="p-2 lg:p-5">
                                <h3 className="text-xl font-bold">Our Values</h3>
                                <p>🛠️ Craftsmanship Excellence - Every piece we create is a masterpiece, carefully crafted with attention to detail.</p>
                                <p>🌍 Sustainability First - We use responsibly sourced materials and eco-friendly practices to protect our planet.</p>
                                <p>💡 Innovation & Design - We stay ahead of trends to offer unique, stylish, and timeless furniture.</p>
                                <p>❤️ Customer-Centric Approach - Your satisfaction is our priority, and we work closely with you to bring your vision to life.</p>
                            </div>
                            <p>Whether it's a custom-built statement piece or a full interior transformation, we are here to help you create spaces that feel like home.</p>
                            <p>🏡 Let's build something extraordinary together!</p>
                        </article>
                        <article className="w-full lg:w-[650px] lg:mt-20">
                            <div>
                                <h1 className="text-2xl py-2 font-bold">Why Choose Us</h1>
                                <div>
                                    <p>✅ Quality Craftsmanship - Every piece is carefully crafted by skilled artisans with attention to detail.
                                    </p>
                                    <p>✅ Affordable Luxury - High-end designs at competitive prices.</p>
                                    <p>✅ Personalized Service - We work closely with you to create furniture that suits your exact needs.</p>
                                    <p>✅ Sustainable Materials - We prioritize eco-friendly and ethically sourced materials for a better tomorrow.</p>
                                    <p className="py-2">Whether you're looking for a statement piece for your living room, a functional workspace setup, or a complete home makeover, we are here to turn your ideas into reality.</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Our Mission</h3>
                                <p>To provide exceptional furniture solutions that combine quality, functionality, and elegance, making every space more inviting and inspiring.</p>
                            </div>
                        </article>
                    </div>
                    <div className="w-full lg:py-10">
                        <h1 className="text-2xl py-2 font-bold">What We Do</h1>
                        <div>
                            <p>We specialize in designing and crafting high-quality, stylish, and durable furniture that transforms any space into a masterpiece. Our passion for fine craftsmanship and innovative design allows us to create functional, aesthetic, and long-lasting pieces that cater to both residential and commercial needs.
                            </p>
                            <div className="p-2 lg:p-5">
                                <h3 className="text-xl font-bold">Our Expertise</h3>
                                <p>🔹 Custom Furniture Design - We bring your vision to life with tailor-made furniture that fits your style and space perfectly.</p>
                                <p>🔹 Premium Materials - We source the finest wood, metals, and fabrics to ensure durability, comfort, and elegance.</p>
                                <p>🔹 Modern & Classic Styles - Whether you prefer contemporary minimalism or timeless classics, we craft furniture that matches your aesthetic.</p>
                                <p>🔹 Eco-Friendly Solutions - Sustainability is at the heart of our work, using responsibly sourced materials and eco-friendly manufacturing.</p>
                            </div>
                            <p>From residential homes to commercial spaces, we bring creativity and quality into every project.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}
export default About;