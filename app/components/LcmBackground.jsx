'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const makePanelMaterial = ({ color, opacity = 0.42, roughness = 0.42, metalness = 0.08 }) =>
  new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness,
    transparent: true,
    opacity,
  });

const makeBox = ({ width, height, depth, x = 0, y = 0, z = 0, material }) => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
  mesh.position.set(x, y, z);
  return mesh;
};

const makeBrowserPanel = materials => {
  const group = new THREE.Group();

  group.add(makeBox({ width: 4.8, height: 3.1, depth: 0.16, material: materials.glass }));
  group.add(makeBox({ width: 4.8, height: 0.42, depth: 0.2, y: 1.34, material: materials.blue }));

  [-1.95, -1.62, -1.29].forEach((x, index) => {
    group.add(makeBox({ width: 0.16, height: 0.16, depth: 0.24, x, y: 1.34, material: index === 0 ? materials.white : materials.line }));
  });

  group.add(makeBox({ width: 1.35, height: 0.16, depth: 0.22, x: -1.35, y: 0.72, material: materials.line }));
  group.add(makeBox({ width: 2.2, height: 0.16, depth: 0.22, x: -0.92, y: 0.32, material: materials.line }));
  group.add(makeBox({ width: 1.75, height: 0.16, depth: 0.22, x: -1.14, y: -0.08, material: materials.line }));
  group.add(makeBox({ width: 1.1, height: 0.16, depth: 0.22, x: -1.46, y: -0.48, material: materials.accent }));

  group.add(makeBox({ width: 1.25, height: 1.3, depth: 0.2, x: 1.28, y: 0.06, material: materials.blueSoft }));
  group.add(makeBox({ width: 0.72, height: 0.18, depth: 0.24, x: 1.28, y: 0.32, material: materials.white }));
  group.add(makeBox({ width: 0.48, height: 0.18, depth: 0.24, x: 1.28, y: -0.08, material: materials.white }));

  return group;
};

const makeCodePanel = materials => {
  const group = new THREE.Group();

  group.add(makeBox({ width: 3.2, height: 2.35, depth: 0.14, material: materials.dark }));
  group.add(makeBox({ width: 2.35, height: 0.13, depth: 0.22, x: -0.18, y: 0.74, material: materials.accent }));
  group.add(makeBox({ width: 1.62, height: 0.13, depth: 0.22, x: -0.54, y: 0.36, material: materials.white }));
  group.add(makeBox({ width: 2.0, height: 0.13, depth: 0.22, x: -0.35, y: -0.02, material: materials.line }));
  group.add(makeBox({ width: 1.28, height: 0.13, depth: 0.22, x: -0.71, y: -0.4, material: materials.blue }));
  group.add(makeBox({ width: 1.78, height: 0.13, depth: 0.22, x: -0.46, y: -0.78, material: materials.line }));

  return group;
};

const makeSkillChip = ({ labelWidth, material, x, y, z }) => makeBox({ width: labelWidth, height: 0.42, depth: 0.16, x, y, z, material });

const createPortfolioScene = () => {
  const materials = {
    glass: makePanelMaterial({ color: 0xffffff, opacity: 0.22, roughness: 0.2, metalness: 0.12 }),
    blue: makePanelMaterial({ color: 0x0433bf, opacity: 0.64, roughness: 0.35, metalness: 0.18 }),
    blueSoft: makePanelMaterial({ color: 0x4f78ff, opacity: 0.28 }),
    accent: makePanelMaterial({ color: 0x14b8a6, opacity: 0.72 }),
    line: makePanelMaterial({ color: 0xb8c4ff, opacity: 0.54 }),
    white: makePanelMaterial({ color: 0xffffff, opacity: 0.72 }),
    dark: makePanelMaterial({ color: 0x111827, opacity: 0.4, roughness: 0.5 }),
  };

  const group = new THREE.Group();
  group.userData.materials = Object.values(materials);

  const browser = makeBrowserPanel(materials);
  browser.position.set(-1.35, 0.3, 0);
  browser.rotation.set(-0.18, 0.34, -0.04);
  group.add(browser);

  const code = makeCodePanel(materials);
  code.position.set(2.6, -0.65, -0.9);
  code.rotation.set(0.12, -0.42, 0.08);
  group.add(code);

  const chips = new THREE.Group();
  chips.add(makeSkillChip({ labelWidth: 1.0, material: materials.blue, x: -1.3, y: 0.46, z: 0 }));
  chips.add(makeSkillChip({ labelWidth: 1.34, material: materials.accent, x: 0.02, y: 0.46, z: 0.08 }));
  chips.add(makeSkillChip({ labelWidth: 1.12, material: materials.white, x: 1.36, y: 0.46, z: 0 }));
  chips.add(makeSkillChip({ labelWidth: 1.48, material: materials.line, x: -0.72, y: -0.24, z: 0.04 }));
  chips.add(makeSkillChip({ labelWidth: 1.08, material: materials.blueSoft, x: 0.78, y: -0.24, z: 0 }));
  chips.position.set(0.1, -2.22, 0.55);
  chips.rotation.set(-0.08, 0.16, 0.03);
  group.add(chips);

  return group;
};

function LcmBackground() {
  const mountRef = useRef(null);
  const targetRotationRef = useRef({ x: -0.08, y: 0.16, z: -0.02 });
  const targetPositionRef = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(-3, 4, 7);
    const rimLight = new THREE.DirectionalLight(0x7dd3fc, 1.8);
    rimLight.position.set(4, -2, 5);
    scene.add(ambientLight, keyLight, rimLight);

    const portfolioGroup = createPortfolioScene();
    portfolioGroup.rotation.set(-0.08, 0.16, -0.02);
    scene.add(portfolioGroup);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scale = window.innerWidth < 780 ? 0.58 : window.innerWidth < 1300 ? 0.78 : 1;
      portfolioGroup.scale.setScalar(scale);
    };

    const onWheel = event => {
      targetRotationRef.current.y += event.deltaY * 0.00028;
      targetRotationRef.current.x += event.deltaY * 0.00008;
    };

    const onFullpageMove = event => {
      const index = Number(event.detail?.index) || 0;

      targetRotationRef.current = {
        x: -0.08 + index * 0.08,
        y: 0.16 + index * 0.24,
        z: -0.02 + index * 0.025,
      };
      targetPositionRef.current = {
        x: index % 2 === 0 ? 0 : -0.36,
        y: 0.1 - index * 0.06,
        z: 0,
      };
    };

    let frameId;
    let elapsed = 0;
    const animate = () => {
      elapsed += 0.01;
      const targetRotation = targetRotationRef.current;
      const targetPosition = targetPositionRef.current;

      portfolioGroup.rotation.x += (targetRotation.x - portfolioGroup.rotation.x) * 0.055;
      portfolioGroup.rotation.y += (targetRotation.y - portfolioGroup.rotation.y) * 0.055;
      portfolioGroup.rotation.z += (targetRotation.z - portfolioGroup.rotation.z) * 0.055;
      portfolioGroup.position.x += (targetPosition.x - portfolioGroup.position.x) * 0.045;
      portfolioGroup.position.y += (targetPosition.y + Math.sin(elapsed) * 0.035 - portfolioGroup.position.y) * 0.045;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    onResize();
    window.addEventListener('resize', onResize);
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('lcmFullpageMove', onFullpageMove);
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('lcmFullpageMove', onFullpageMove);
      portfolioGroup.traverse(child => {
        if (child.geometry) child.geometry.dispose();
      });
      portfolioGroup.userData.materials.forEach(material => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className='lcmBackground' ref={mountRef} aria-hidden='true' />;
}

export default LcmBackground;
