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

    const cellSize = 10;
    const cols = Math.floor(canvas.width / cellSize);
    const rows = Math.floor(canvas.height / cellSize);
    let grid = Array(cols).fill(null).map(() => 
      Array(rows).fill(null).map(() => Math.random() > 0.7)
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

    const animate = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      grid.forEach((col, x) => {
        col.forEach((cell, y) => {
          if (cell) {
            ctx.fillStyle = '#00ff00';
            ctx.fillRect(x * cellSize, y * cellSize, cellSize-1, cellSize-1);
          }
        });
      });

      grid = computeNextGeneration();
      requestAnimationFrame(animate);
    };

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    animate();
  }, []);

  return <canvas ref={canvasRef} className={styles.banner} />;
}
