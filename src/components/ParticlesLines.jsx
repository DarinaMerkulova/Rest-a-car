import Particles from 'react-particles';

import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';

const ParticlesLines = () => {

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        backgroundMask: {
          cover: {
            color: {
              value: {
                r: 29,
                g: 29,
                b: 39,
              },
            },
          },
          enable: true,
        },
        fullScreen: {
          zIndex: -1,
        },
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },

            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                force: 60,
              },
            },
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              easing: 'ease-out-quad',
              factor: 1,
              maxSpeed: 5,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 100,
              duration: 2,
              mix: false,
              opacity: 1,
              size: 2,
              divs: {
                distance: 2000,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 2000,
              links: {
                blink: false,
                consent: false,
                opacity: 0.5,
              },
            },
            push: {
              default: true,
              groups: [],
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 5,
              easing: 'ease-out-quad',
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 5,
                easing: 'ease-out-quad',
                selectors: [],
              },
            },
            trail: {
              delay: 1,
              pauseOnStop: false,
              quantity: 1,
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: '#ffffff',
                  },
                  stop: {
                    value: 'rgb(26, 127, 141)',
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: 'rgb(26, 127, 141)',
                },
                length: 2,
              },
            },
          },
        },
        particles: {
          color: {
            value: 'rgb(26, 127, 141)',
          },
          move: {
            attract: {
              rotate: {
                x: 100,
                y: 200,
              },
            },
            enable: true,
            outModes: {
              bottom: 'out',
              left: 'out',
              right: 'out',
              top: 'out',
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 200,
          },
          opacity: {
            animation: {
              speed: 0,
              minimumValue: 0,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 1,
              max: 1,
            },
            animation: {
              speed: 0,
              minimumValue: 0,
            },
          },
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 5,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          roll: {
            darken: {
              enable: false,
              value: 0,
            },
            enable: false,
            enlighten: {
              enable: false,
              value: 0,
            },
            mode: 'vertical',
            speed: 0,
          },
          tilt: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              decay: 0,
              sync: false,
            },
            direction: 'clockwise',
            enable: false,
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
          wobble: {
            distance: 5,
            enable: false,
            speed: {
              angle: 10,
              move: 5,
            },
          },
          orbit: {
            animation: {
              count: 0,
              enable: false,
              speed: 0,
              decay: 0,
              sync: false,
            },
            enable: false,
            opacity: 1,
            rotation: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
            },
            width: 40,
          },
          links: {
            blink: false,
            color: {
              value: '#ffffff',
            },
            consent: false,
            distance: 300,
            enable: true,
            frequency: 1,
            opacity: 0.1,
            shadow: {
              blur: 2,
              color: {
                value: 'rgb(26, 127, 141)',
              },
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 1,
            warp: false,
          },
          repulse: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 0,
          },
        },
      }}
    />
  );
};

export default ParticlesLines;