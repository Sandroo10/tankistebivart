import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero1 from "@/assets/java1.png";
import Hero2 from "@/assets/java2.webp";
import Hero3 from "@/assets/physcis.jpeg";
import Hero4 from "@/assets/maths.jpeg";


const HeroSection = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between h-[600px] px-10">
            {/* Left Side - Text Content */}
            <div className="md:w-1/2 text-white text-center md:text-left z-10">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
                <p className="text-lg mb-6">
                    Discover amazing experiences and breathtaking destinations.
                </p>
                <Button className="px-6 py-3 rounded-lg transition">
                    <Link to="/products" className="text-white font-semibold hover:cursor-pointer">
                        Let's go on raids!
                    </Link>
                </Button>
            </div>

            {/* Right Side - Overlapping Image Grid */}
            <div className="md:w-1/2 relative flex justify-center items-center">
                <div className="grid grid-cols-2 gap-4 relative w-[400px] h-[350px]">
                    {/* Image 1 */}
                    <img
                        src={Hero1}
                        alt="Travel 1"
                        className="absolute top-0 left-0 w-[150px] h-[150px] object-cover rounded-lg shadow-lg"
                    />
                    
                    {/* Image 2 */}
                    <img
                        src={Hero2}
                        alt="Travel 2"
                        className="absolute top-10 right-0 w-[180px] h-[180px] object-cover rounded-lg shadow-lg"
                    />
                    
                    {/* Image 3 */}
                    <img
                        src={Hero3}
                        alt="Travel 3"
                        className="absolute bottom-0 left-10 w-[200px] h-[200px] object-cover rounded-lg shadow-lg"
                    />

                    {/* Image 4 */}
                    <img
                        src={Hero4}
                        alt="Travel 4"
                        className="absolute bottom-10 right-10 w-[170px] h-[170px] object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
