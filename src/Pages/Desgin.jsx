import '../Style/des.css'
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Desgin = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "rgba(8, 8, 46, 0.925)",
                        // value:"#0010"
                    }
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity:25,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.8,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ed8302",
                    },
                    links: {
                        color: "#9098a9",
                        distance: 80,
                        enable: true,
                        opacity: .6,
                        width: .5,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1.6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1250,
                        },
                        value: 150,
                    },
                    opacity: {
                        value: 2,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min:0, max: 1},
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Desgin