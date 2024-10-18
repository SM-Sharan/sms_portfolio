import {Suspense, useState} from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import Certificate from "../components/Certificate.jsx";
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('workksharan@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about" >
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Hi, I’m S M Sharan</p>
                            <p className="grid-subtext">
                                As a fresher, I have honed my skills in both frontend and backend development, along with video editing, animation, and graphic design.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in a variety of languages, frameworks, and tools that enable me to build robust and scalable applications. My primary focus is on JavaScript/TypeScript, particularly within the React and Next.js ecosystem, along with proficiency in DaVinci Resolve and Canva for design and video editing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Canvas className="w-full h-full">

                                <Suspense fallback={<CanvasLoader />}>
                                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                                <Certificate scale={5.5} position={[0, 0, 0]} rotation={[0.1, 0, 0]} />
                                    <ambientLight intensity={1} />
                                    <directionalLight position={[10, 10, 10]} intensity={0.5} />
                                </Suspense>
                            </Canvas>

                        </div>
                        <div>
                            <p className="grid-headtext">My Certifications</p>
                            <ul className="list-disc pl-5 space-y-4">
                                <li className="grid-subtext">
                                    <a
                                        href="https://drive.google.com/file/d/13cveMeqMap095v72g0wW22xVbOMGbLXR/view?usp=sharing"
                                        className="underline text-white-600 font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Machine Learning with Python by Infosys
                                    </a>
                                </li>
                                <li className="grid-subtext">
                                    <a
                                        href="https://drive.google.com/file/d/1YUK2yuE8RCVK7rBcDkEaDU0LC5x9Nf7F/view?usp=drive_link"
                                        className="underline text-white-600 font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Javascript Essentials 1 by Cisco Networking Academy®.
                                    </a>
                                </li>
                                <li className="grid-subtext">
                                    <a
                                        href="https://drive.google.com/file/d/1HfRxZ8_dnOsy-_Pyo17xZrS_5Lvbe4ax/view?usp=drive_link"
                                        className="underline text-white-600 font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Introduction to Web Development with HTML, CSS, JavaScript by IBM.
                                    </a>
                                </li>
                                <li className="grid-subtext">
                                    <a
                                        href="https://drive.google.com/file/d/1RSmgAYwT_xGMxU1xYCuvq3fN-3m6E1wY/view?usp=sharing"
                                        className="underline text-white-600 font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Introduction to Cybersecurity by Cisco Networking Academy®
                                    </a>
                                </li>
                                <li className="grid-subtext">
                                    <a
                                        href="https://drive.google.com/file/d/1tfAQz0IJ6DKBm9aY_qhQLhiRiDiLZv_f/view?usp=sharing"
                                        className="underline text-white-600 font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Foundations of User Experience (UX) Design by Google.
                                    </a>
                                </li>
                                <li className="grid-subtext">
                                    <a
                                        href="https://drive.google.com/file/d/1RSmgAYwT_xGMxU1xYCuvq3fN-3m6E1wY/view?usp=sharing"
                                        className="underline text-white-600 font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Start the UX Design Process: Empathize, Define, and Ideate by Google.
                                    </a>
                                </li>
                                <li className="grid-subtext">
                                    <a
                                        href="https://drive.google.com/file/d/1h6ZFr8ex3QRm0V-OAgwNpl5n0KOQEfv6/view?usp=sharing"
                                        className="underline text-white-600 font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Build Wireframes and Low-Fidelity Prototypes by Google.
                                    </a>
                                </li>
                                <li className="grid-subtext">
                                    <a
                                        href="https://drive.google.com/file/d/1X1mY0wUz-_0VssWLIN5itMrAFynv2zaD/view?usp=sharing"
                                        className="underline text-white-600 font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Software Engineering Specialization by The Hong Kong University of Science and
                                        Technology
                                    </a>
                                </li>
                                <li className="grid-subtext">
                                    <a
                                        href="https://drive.google.com/file/d/1HI2RX2YwXpQNlRwHQspdK0zkvEUNmuj9/view?usp=sharing"
                                        className="underline text-white-600 font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Data Structures by University of California San Diego.
                                    </a>
                                </li>
                                <li className="grid-subtext">
                                    <a
                                        href="https://drive.google.com/file/d/1UcQQEfYKVwQJjFu0WJxTprPUZBrggnao/view?usp=sharing"
                                        className="underline text-white-600 font-semibold hover:text-indigo-400 hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Getting Started with Git and GitHub by IBM.
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">My Passion</p>
                            <p className="grid-subtext">
                                I really enjoy solving problems and building things—whether it's through coding, building websites, video editing, or content creation. For me, it's not just work; it's something I genuinely love doing. Each line of code I write is a step towards creating something impactful, and I find immense satisfaction in that. I'm always exploring new technologies and improving my skills, especially in Java, where I feel most proficient. I also have a good understanding of C++ and C, which helps me tackle a variety of challenges.
                                <br />

                                Building websites is another passion of mine. I take pride in creating websites that are not only functional but also visually appealing and user-friendly. I believe a great website is about striking the right balance between aesthetics and performance, and I enjoy the process of bringing that vision to life.
                                <br />

                                On the creative side, I love working on video projects and making engaging content that resonates with audiences. Whether it's editing footage or crafting a narrative, I aim to tell stories that capture attention and spark interest. Each project, whether technical or creative, is an opportunity for me to learn something new and refine my skills further. I’m excited about the journey ahead and the possibilities that lie in combining technology and creativity.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">workksharan@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;