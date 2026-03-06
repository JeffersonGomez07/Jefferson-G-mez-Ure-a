import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeVoidBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0015);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000,
    );
    camera.position.set(0, 20, 100);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const particleCount = 4000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 400;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 400;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.4,
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let frameId = 0;

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);

      const scrollY = window.scrollY;
      const targetZ = scrollY * 0.1;

      camera.position.z = 100 - targetZ * 0.05;
      camera.position.y = 20 + scrollY * 0.02;
      particles.rotation.y = scrollY * 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(frameId);
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 z-0 bg-black" />;
};
