import { MdEmail, MdMap, MdPhone } from "react-icons/md";
import { FaLinkedin } from 'react-icons/fa';

export const ContactSection = () => {
    return (
        <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="constainer mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-20">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MdEmail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:princetirpathi12@gmail.com" className="text-muted-foreground hover:text-primary transition-color">
                                        princetirpathi12@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-20">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MdPhone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+919580687961" className="text-muted-foreground hover:text-primary transition-color">
                                        +91 9580687961
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-20">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MdMap className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Loaction</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-color">
                                        Lucknow, Uttar Pradesh, India
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-20">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaLinkedin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/upendra-tripathi-0819b8337/" className="text-muted-foreground hover:text-primary transition-color">
                                        #linkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

