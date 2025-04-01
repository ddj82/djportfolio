import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-20 py-28 bg-gray-900 px-6">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-blue-400 mb-4">Contact</h2>
                <p className="text-gray-300 mb-2">
                    🔗 GitHub: <a href="https://github.com/ddj82" className="underline hover:text-blue-300"
                                 target="_blank" rel="noopener noreferrer">github.com/ddj82</a>
                </p>
                <p className="text-gray-300">
                    📧 이메일: <a href="mailto:dnwnrudckf77@gmail.com"
                              className="underline hover:text-blue-300">dnwnrudckf77@gmail.com</a>
                </p>
                <p className="text-gray-300">
                    {/*📱 휴대폰: <span>010-5064-5726</span>*/}
                </p>

            </div>
        </section>
    );
};

export default Contact;
