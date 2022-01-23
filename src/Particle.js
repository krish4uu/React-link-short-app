import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },

          line_linked: {
            enable: true,
            opacity: 0.1,
          },
          move: {
            enable: true,
            speed: 0.8,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.05,
            },
          },
        },

        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
            },
            modes: {
              push: {
                particles_nb: 5,
              },
            },
          },
        },
      }}
    />
  );
}

export default Particle;
