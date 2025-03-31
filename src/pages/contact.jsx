import Nav from "../components/nav"
import Footer from "../components/footer";
import { useState } from "react";
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router";
// import { useNavigate } from "react-router";
function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    // const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
    };
    return (
        <div className="w-full lg:w-[1440px] mx-auto mt-14 text-md">
            <div className="nav w-full lg:w-[1440px]">
                <Nav />
            </div>
            <section className=" bg-white p-5 lg:px-20">
                <div className="w-full text-center">
                    <h1 className="text-3xl font-extrabold mb-8 md:mb-5 uppercase">Contact Us</h1>
                </div>
                <div className="w-full flex flex-col flex-wrap gap-5">
                    <div className="w-full flex flex-col justify-between gap-20 md:flex-row items-center">
                        <div className="flex flex-col gap-10 w-full md:w-[50%]">
                            <div className="w-full lg:w-[500px] flex flex-col flex-wrap">
                                <h2 className="text-2xl py-2 font-bold">We'd Love to Hear from You </h2>
                                <p>At [Your Business Name], customer satisfaction is our priority. Whether you have questions, need assistance, or just want to say hello, we're here to help!
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl py-2 font-bold">📍 Our Location</h2>
                                <p>🏢 Address: Lagos, Nigeria</p>
                                <p>📞 Phone: +2348075327786 || +2348111341137</p>
                                <p>✉️ Email: <a href="#" target="_blank" className="text-blue-600">sodeeqadeosun@gmail.com</a></p>
                            </div>
                            <div>
                                <h2 className="text-2xl py-2 font-bold">Business Hours</h2>
                                <p>🕒 Monday - Friday: 9 AM - 6 PM</p>
                                <p>🕒 Saturday: 10 AM - 4 PM</p>
                                <p>🚫 Sunday: Closed</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[50%]">
                            <h2 className="text-center text-2xl py-2 font-bold"> Get in Touch</h2>
                            <p>Fill out the form below and we'll get back to you as soon as possible!</p>
                            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        name="name"
                                        id="name"
                                        className="px-3 py-2.5 rounded-lg border border-gray-300 w-full"
                                        required />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-2 px-3 py-2.5 rounded-lg border border-gray-300 w-full"
                                        required />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        id="message"
                                        cols="30" rows="10"
                                        className="rounded-lg border border-gray-500"
                                        required></textarea>
                                </div>
                                <div className="">
                                    <button type="submit" className="bg-green-900 text-white px-8 py-3 rounded-lg">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center md:items-center gap-5 md:shadow-xl md:shadow-blue-100 py-3">
                        <h3 className="text-xl font-bold mb-2">Follow us on Social Media!</h3>
                        <div className="flex flex-col md:flex-row gap-4 text-2xl">
                            <Link to="#"><SiFacebook /></Link>
                            <Link to="#"><FaXTwitter /></Link>
                            <Link to=""><FaInstagram /></Link>
                            <Link to=""><FaTiktok /></Link>
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
export default Contact;