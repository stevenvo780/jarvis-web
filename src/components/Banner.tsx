'use client';
import { useEffect, useRef } from 'react';
import styles from './Banner.module.css';

export default function Banner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Aumentamos la altura a 800px
    canvas.width = window.innerWidth;
    canvas.height = 800;

    // Ajustamos el tamaño de las células para que haya más
    const cellSize = Math.floor(canvas.width / 150);
    const cols = Math.floor(canvas.width / cellSize);
    const rows = Math.floor(canvas.height / cellSize);

    let grid = Array(cols).fill(null).map(() => 
      Array(rows).fill(null).map(() => Math.random() > 0.85)
    );

    const computeNextGeneration = () => {
      const nextGen = grid.map((arr) => [...arr]);
      
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          let neighbors = 0;
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              if (i === 0 && j === 0) continue;
              const newX = (x + i + cols) % cols;
              const newY = (y + j + rows) % rows;
              neighbors += grid[newX][newY] ? 1 : 0;
            }
          }
          
          if (grid[x][y] && (neighbors < 2 || neighbors > 3)) {
            nextGen[x][y] = false;
          } else if (!grid[x][y] && neighbors === 3) {
            nextGen[x][y] = true;
          }
        }
      }
      return nextGen;
    };

    let lastUpdate = 0;
    const FRAME_DELAY = 200;

    const animate = (timestamp: number) => {
      if (timestamp - lastUpdate > FRAME_DELAY) {
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        grid.forEach((col, x) => {
          col.forEach((cell, y) => {
            if (cell) {
              ctx.fillStyle = 'rgba(0,255,0,0.5)';
              ctx.fillRect(
                x * cellSize, 
                y * cellSize, 
                cellSize - 1, 
                cellSize - 1
              );
            }
          });
        });

        grid = computeNextGeneration();
        lastUpdate = timestamp;
      }
      requestAnimationFrame(animate);
    };

    animate(0);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 800; // Mantenemos la altura constante
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className={styles.banner} />;
}
